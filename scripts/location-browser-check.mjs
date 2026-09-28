import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const base=process.env.BASE_URL||'http://127.0.0.1:8765/';
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--enable-webgl','--ignore-gpu-blocklist','--enable-unsafe-swiftshader']});
const output=new URL('../artifacts/geolocation/',import.meta.url);await fs.mkdir(output,{recursive:true});
try {
 const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{
  localStorage.setItem('rotterdam-time-intro-seen','1');
  window.geoCalls=0;window.geoMode='valid';
  Object.defineProperty(navigator,'geolocation',{value:{getCurrentPosition(success,fail,options){
   window.geoCalls++;window.geoOptions=options;
   if(window.geoMode==='pending'){window.delayedGeo=()=>success({timestamp:Date.now(),coords:{latitude:51.9202,longitude:4.4866,accuracy:10}});return;}
   setTimeout(()=>{
    if(window.geoMode==='denied')return fail({code:1});
    if(window.geoMode==='timeout')return fail({code:3});
    if(window.geoMode==='unavailable')return fail({code:2});
    success({timestamp:Date.now(),coords:{latitude:window.geoMode==='far'?52.3676:51.9202,longitude:window.geoMode==='far'?4.9041:4.4866,accuracy:window.geoMode==='imprecise'?2000:12}});
   },30);
  }}});
 });
 await page.goto(base);await page.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});
 const camera=()=>page.evaluate(()=>{const {camera:c,controls:t}=window.__rotterdam;return {position:c.position.toArray(),target:t.target.toArray(),offset:c.position.clone().sub(t.target).toArray(),zoom:c.zoom,fov:c.fov};});
 const compare=(a,b)=>{assert.equal(a.zoom,b.zoom);assert.equal(a.fov,b.fov);a.offset.forEach((v,i)=>assert.ok(Math.abs(v-b.offset[i])<.001,`offset ${i} changed`));};
 await page.waitForTimeout(1200);
 assert.equal(await page.evaluate(()=>window.geoCalls),0);
 await page.screenshot({path:fileURLToPath(new URL('mobile-before.png',output))});
 for(const mode of ['far','imprecise','denied','timeout','unavailable']) {
  await page.evaluate(mode=>window.geoMode=mode,mode);const before=await camera();
  await page.locator('#locate').click();await page.waitForFunction(()=>!document.querySelector('#locate').disabled);
  assert.equal(await page.locator('#gps-dot').isVisible(),false);assert.deepEqual(await camera(),before);
  assert.ok((await page.locator('#gps-status').textContent()).length>20);
 }
 await page.evaluate(()=>window.geoMode='pending');const beforeCancel=await camera();
 await page.locator('#locate').click();await page.locator('#location-clear').click();await page.evaluate(()=>window.delayedGeo());
 assert.equal(await page.locator('#gps-dot').isVisible(),false);assert.deepEqual(await camera(),beforeCancel);
 await page.evaluate(()=>window.geoMode='valid');const before=await camera();await page.locator('#locate').click();
 await page.waitForFunction(()=>document.querySelector('#locate').dataset.active==='true');await page.waitForTimeout(1300);
 compare(before,await camera());assert.equal(await page.locator('#gps-dot').isVisible(),true);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 await page.screenshot({path:fileURLToPath(new URL('mobile-location.png',output))});
 await page.locator('#era-now').click();await page.waitForFunction(()=>document.body.classList.contains('era-modern'),null,{timeout:120000});
 await page.waitForTimeout(1000);const modern=await camera();await page.locator('#locate').click();await page.waitForTimeout(1200);compare(modern,await camera());
 assert.equal(await page.locator('#gps-dot').isVisible(),true);
 await page.screenshot({path:fileURLToPath(new URL('mobile-now-location.png',output))});
 // Hide is immediate and a new page does not request location automatically.
 await page.locator('#location-clear').click();assert.equal(await page.locator('#gps-dot').isVisible(),false);
 await page.setViewportSize({width:1440,height:1000});await page.locator('#locate').click();await page.waitForTimeout(1200);
 await page.screenshot({path:fileURLToPath(new URL('desktop-location.png',output))});
 await page.reload();await page.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});assert.equal(await page.evaluate(()=>window.geoCalls),0);
 assert.equal(await page.locator('#gps-dot').isVisible(),false);
 assert.deepEqual(errors,[]);
 const report={base,passed:true,noAutomaticPermission:true,rejectedLocationsDoNotMoveCamera:true,lateCallbackIgnored:true,zoomAndAnglePreserved:true,mobileThenAndNow:true,errors};
 await fs.writeFile(new URL('report.json',output),JSON.stringify(report,null,2));console.log(report);
} finally {await browser.close();}
