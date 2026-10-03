import {chromium} from '../../node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
const id=process.argv[2];const base=process.env.BASE_URL||'http://127.0.0.1:8871/lukemarcom/';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--enable-webgl','--ignore-gpu-blocklist','--enable-unsafe-swiftshader']});
const dir=`research/sol61-controle/${id}`;await fs.mkdir(dir,{recursive:true});
try{
 const p=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.addInitScript(()=>localStorage.setItem('rotterdam-time-intro-seen','1'));await p.goto(base);await p.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});
 await p.locator(`[data-landmark="${id}"]`).click();await p.waitForTimeout(1000);await p.screenshot({path:`${dir}/desktop-selected.png`});
 await p.locator('.landmark-close').click();
 const bounds=await p.evaluate(async id=>{const T=await import('./vendor/three.module.js');const rt=window.__rotterdam;const g=rt.landmarkGroup.children.find(g=>g.userData.landmark===id);const bb=new T.Box3().setFromObject(g);return {min:bb.min.toArray(),max:bb.max.toArray()};},id);
 for(const [name,dx,dz] of [['south',0,1],['north',0,-1],['east',1,0],['west',-1,0]]){
  await p.evaluate(({bounds,dx,dz})=>{const r=window.__rotterdam,c=bounds.min.map((x,i)=>(x+bounds.max[i])/2),span=Math.max(bounds.max[0]-bounds.min[0],bounds.max[1]-bounds.min[1],bounds.max[2]-bounds.min[2]),dist=Math.max(70,span*2.7);r.controls.target.set(c[0],c[1]*.5,c[2]);r.camera.position.set(c[0]+dx*dist,c[1]+dist*.9,c[2]+dz*dist);r.controls.update();}, {bounds,dx,dz});
  await p.waitForTimeout(1200);await p.screenshot({path:`${dir}/model-${name}.png`});
 }
 const report={id,base,bounds,errors,checkedAt:new Date().toISOString()};await fs.writeFile(`${dir}/model-browser.json`,JSON.stringify(report,null,2));console.log(report);
}finally{await browser.close();}
