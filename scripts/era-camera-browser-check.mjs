import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=(process.env.BASE_URL||'http://127.0.0.1:8765/').replace(/\/?$/,'/');
const output=process.env.OUTPUT_DIR||'artifacts/era-camera';await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{}),args:['--enable-webgl','--ignore-gpu-blocklist','--enable-unsafe-swiftshader']});
const report={base,checkedAt:new Date().toISOString(),cases:[]};
function equal(a,b,label){assert.equal(a.length,b.length);const error=Math.max(...a.map((v,i)=>Math.abs(v-b[i])));assert(error<1e-6,`${label}: camera moved ${error}`);return error;}
async function camera(p){return p.evaluate(()=>{const r=window.__rotterdam;return [...r.camera.position.toArray(),...r.controls.target.toArray(),...r.camera.quaternion.toArray(),r.camera.zoom,...r.camera.projectionMatrix.elements];});}
async function settle(p){await p.waitForFunction(()=>{const r=window.__rotterdam,v=[...r.camera.position.toArray(),...r.controls.target.toArray()];const old=window.__eraCameraSample;window.__eraCameraSample=v;const stable=old&&v.every((x,i)=>Math.abs(x-old[i])<1e-7);window.__eraCameraStable=stable?(window.__eraCameraStable||0)+1:0;return window.__eraCameraStable>=8;},null,{timeout:30000});}
try{
 for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  const p=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});const errors=[],failed=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/favicon.ico'))failed.push([r.status(),r.url()]);});
  await p.addInitScript(()=>localStorage.setItem('rotterdam-time-intro-seen','1'));await p.goto(base);await p.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});await settle(p);
  for(const view of ['2d','3d']){
   await p.locator(`#view${view}`).click();await settle(p);
   // An off-centre, zoomed and (for 3D) rotated camera rules out a coincidental default view.
   await p.evaluate(view=>{const r=window.__rotterdam;r.controls.enableDamping=false;r.controls.target.set(560,12,-130);r.camera.position.set(560+(view==='2d'?0:-260),12+(view==='2d'?840:510),-130+(view==='2d'?.1:420));r.controls.update();},view);await settle(p);
   for(const era of ['now','old']){
    const before=await camera(p);await p.screenshot({path:`${output}/${name}-${view}-before-${era}.png`});await p.locator(`#era-${era}`).click();await p.waitForFunction(era=>document.getElementById(`era-${era}`).getAttribute('aria-pressed')==='true',era,{timeout:120000});await settle(p);
    const after=await camera(p);const error=equal(before,after,`${name}/${view}/${era}`);assert.equal(await p.locator(`#view${view}`).getAttribute('aria-pressed'),'true');await p.screenshot({path:`${output}/${name}-${view}-${era}.png`});report.cases.push({name,view,era,maxCameraComponentError:error});
   }
  }
  // Switching in the middle of a navigation animation freezes its actual position.
  const snap=await p.evaluate(async()=>{document.querySelector('[data-place="Hofplein"]').click();await new Promise(resolve=>requestAnimationFrame(resolve));const r=window.__rotterdam;const before=[...r.camera.position.toArray(),...r.controls.target.toArray()];document.getElementById('era-now').click();const after=[...r.camera.position.toArray(),...r.controls.target.toArray()];return {before,after};});
  equal(snap.before,snap.after,`${name}/in-flight immediate`);await p.waitForFunction(()=>document.getElementById('era-now').getAttribute('aria-pressed')==='true',null,{timeout:120000});await settle(p);equal(snap.after,(await camera(p)).slice(0,6),`${name}/in-flight settled`);report.cases.push({name,view:'in-flight',era:'now',preserved:true});
  assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);await p.close();
 }
 report.passed=true;await fs.writeFile(`${output}/report.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({passed:true,cases:report.cases.length,output}));
}finally{await browser.close();}
