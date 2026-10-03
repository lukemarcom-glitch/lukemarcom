import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
const [id,output]=process.argv.slice(2),release=process.env.RELEASE,run=process.env.PAGES_RUN;
assert.equal(id,'wijnhaven69');assert.match(release||'',/^[a-f0-9]{40}$/);assert.match(run||'',/^\d+$/);
assert.equal(execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),release);
assert.equal(execFileSync('git',['status','--porcelain','--untracked-files=no','--','site'],{encoding:'utf8'}).trim(),'');
const catalog=JSON.parse(await fs.readFile('site/landmarks/catalog.json','utf8')),item=catalog.find(m=>m.id===id);assert(item);
const paths=new Set(['index.html','app.js','landmarks/catalog.json','landmarks/models.js','landmarks/city32-models.js','data/model-landmarks.json','landmarks/wijnhaven67/model.glb',`landmarks/${id}/model.glb`,`landmarks/${id}/model-source-spec.json`,`landmarks/${id}/BRONNEN.md`,`landmarks/${id}/PROMPT-AI-01.txt`,`landmarks/${id}/PROMPT-AI-02.txt`]);
for(const p of item.photos){paths.add(p.src);paths.add(p.ai);if(p.aiMaster)paths.add(p.aiMaster)}
const files=[];
for(const path of paths){const local=await fs.readFile(`site/${path}`);const committed=execFileSync('git',['show',`${release}:site/${path}`],{maxBuffer:128*1024*1024});assert(local.equals(committed),path);const response=await fetch(`https://rdam39.nl/${path}?verify=${release}`,{signal:AbortSignal.timeout(30000)});assert.equal(response.status,200,path);const remote=Buffer.from(await response.arrayBuffer());assert(local.equals(remote),`Public mismatch:${path}`);files.push({path,sha256:crypto.createHash('sha256').update(remote).digest('hex'),identical:true})}
await fs.writeFile(output,JSON.stringify({checkedAt:new Date().toISOString(),releaseCommit:release,pagesRun:run,buildings:catalog.length,id,files,scope:'Anonymous public byte comparison with both release Git object and local files; deployment and visual browser checks are separate.'},null,2)+'\n');console.log({verified:files.length,output});
