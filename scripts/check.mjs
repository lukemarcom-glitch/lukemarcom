import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {resolveStoryLocations} from '../site/stories/locations.js';

const root=fileURLToPath(new URL('../site/',import.meta.url));
const errors=[];
const fail=(condition,message)=>{if(!condition)errors.push(message);};
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const buildings=read('landmarks/catalog.json'),stories=read('stories/catalog.json');
const ids=new Set();let pairs=0,photos=0;
function localAsset(src,label){
  fail(typeof src==='string'&&src.length>0,`${label}: missing asset`);
  if(typeof src!=='string'||!src)return;
  if(/^(https?:|data:|mailto:|#)/.test(src))return;
  fail(!src.startsWith('/'),`${label}: root-absolute asset will break a project URL: ${src}`);
  const file=path.resolve(root,src.split(/[?#]/)[0]);
  fail(file.startsWith(root)&&fs.existsSync(file),`${label}: missing file ${src}`);
}
for(const item of [...buildings,...stories]){
  fail(item.id&&!ids.has(item.id),`Duplicate/missing id: ${item.id}`);ids.add(item.id);
  fail(Array.isArray(item.center)&&item.center.length===2&&item.center.every(Number.isFinite),`${item.id}: invalid center`);
  fail(item.sources?.length>0,`${item.id}: no sources`);
  fail(item.photos?.some(p=>p.src&&typeof p.ai==='string'),`${item.id}: no original/AI pair`);
  for(const p of item.photos||[]){
    photos++;localAsset(p.src,item.id);if(p.ai){pairs++;localAsset(p.ai,item.id);}
    fail(p.url&&p.license,`${item.id}: image missing source or rights`);
  }
  if(item.sourceRegister)localAsset(item.sourceRegister,item.id);
  if(item.modelDownload)localAsset(item.modelDownload,item.id);
}
for(const item of buildings){
  fail(Number.isFinite(item.height)&&item.height>0,`${item.id}: missing/invalid height; selecting this building would produce an invalid camera target`);
  fail(item.polygon?.length>=3,`${item.id}: missing footprint`);
  if(item.modelDownload===false)continue;
  const name=`landmarks/${item.id}/model.glb`;
  localAsset(name,item.id);
  if(fs.existsSync(path.join(root,name)))fail(fs.readFileSync(path.join(root,name)).subarray(0,4).toString()==='glTF',`${item.id}: invalid GLB header`);
}
try{resolveStoryLocations(stories,buildings);}catch(e){errors.push(e.message);}
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(f=>f.isDirectory()?walk(path.join(dir,f.name)):[path.join(dir,f.name)]);
const files=walk(root);let total=0;
for(const file of files){
  total+=fs.statSync(file).size;
  if(file.endsWith('.json')){try{JSON.parse(fs.readFileSync(file,'utf8'));}catch{errors.push(`Invalid JSON: ${path.relative(root,file)}`);}}
  if(file.endsWith('.html')){
    const text=fs.readFileSync(file,'utf8');
    for(const m of text.matchAll(/(?:src|href)=["']([^"']+)["']/g)){
      const ref=m[1];if(/^(?:[a-z]+:|#|\/\/)/i.test(ref))continue;
      const relative=path.relative(root,path.resolve(path.dirname(file),ref.split(/[?#]/)[0]));
      localAsset(relative||'index.html',path.relative(root,file));
    }
  }
  if(file.endsWith('.js')&&!file.includes('/vendor/')){
    const text=fs.readFileSync(file,'utf8');
    for(const m of text.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)){
      localAsset(path.relative(root,path.resolve(path.dirname(file),m[1].split('?')[0])),path.relative(root,file));
    }
    fail(!/(?:fetch\(|\.load\()\s*['"]\//.test(text),`${path.relative(root,file)}: root-absolute fetch`);
  }
}
fail(total<1024**3,'Published site exceeds GitHub Pages 1 GiB');
console.log(JSON.stringify({buildings:buildings.length,stories:stories.length,photos,pairs,files:files.length,MiB:Math.round(total/2**20),errors},null,2));
if(errors.length)process.exitCode=1;
