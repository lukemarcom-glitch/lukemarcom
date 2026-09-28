import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const base=(process.env.BASE_URL||'http://127.0.0.1:8765/').replace(/\/?$/,'/');
const output=new URL('../artifacts/source-audit/qa/',import.meta.url);await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--enable-webgl','--ignore-gpu-blocklist','--enable-unsafe-swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base);await page.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});
 if(await page.locator('#time-intro').isVisible())await page.locator('#intro-old').click();
 const items=await page.evaluate(()=>[...window.__rotterdam.catalog,...window.__rotterdam.stories]);let photos=0,ai=0;
 for(const item of items){
  await page.locator(`[data-landmark="${item.id}"]`).evaluate(b=>b.click());
  assert.equal(await page.locator('#landmark-panel h2').textContent(),item.name);
  assert.equal(await page.locator('.content-sources li').count(),item.sources.length);
  const result=await page.evaluate(item=>{
   const thumbs=[...document.querySelectorAll('#landmark-panel .photo-thumb')];let index=0;const issues=[];
   for(const p of item.photos){for(const isAI of p.ai?[false,true]:[false]){
    thumbs[index++].click();const caption=document.querySelector('#landmark-panel .photo-caption');
    const a=caption.querySelector('.photo-source-link');
    if(a?.getAttribute('href')!==(p.archiveUrl||p.url))issues.push('wrong image source '+p.src);
    if(p.archiveUrl&&p.archiveUrl!==p.url&&caption.querySelector('.photo-metadata-link')?.getAttribute('href')!==p.url)issues.push('missing original metadata '+p.src);
    if(!caption.textContent.includes(p.author))issues.push('missing author '+p.src);
    if(!caption.textContent.includes(p.license))issues.push('missing license '+p.src);
    if(isAI&&!caption.textContent.includes('AI-bewerking door RDAM39'))issues.push('missing AI attribution '+p.src);
   }}
   const list=document.querySelector('.content-sources');
   if(list.closest('details'))issues.push('sources hidden in details');
   return issues;
  },item);
  assert.deepEqual(result,[],item.id);photos+=item.photos.length;ai+=item.photos.filter(p=>p.ai).length;
 }
 for(const [id,width,height] of [['plan-c',1440,1000],['lampe-hoogstraat',390,844],['woii-beurskelder',390,844]]){
  await page.setViewportSize({width,height});await page.locator(`[data-landmark="${id}"]`).evaluate(b=>b.click());
  if(width<700)await page.locator('.sheet-expand').click();
  await page.waitForFunction(()=>{const im=document.querySelector('#landmark-panel .hero-photo');return im?.complete&&im.naturalWidth>0;});
  await page.locator('#landmark-panel .photo-credit').scrollIntoViewIfNeeded();
  await page.screenshot({path:fileURLToPath(new URL(id+'-credit.png',output))});
  await page.locator('.content-sources').scrollIntoViewIfNeeded();
  assert.equal(await page.evaluate(()=>document.querySelector('#landmark-panel').scrollWidth>document.querySelector('#landmark-panel').clientWidth),false);
  await page.screenshot({path:fileURLToPath(new URL(id+'-sources.png',output))});
  await page.locator('.photo-full').click();
  assert.equal(await page.locator('.image-lightbox .photo-source-link').count(),1);
  assert.ok(await page.locator('.image-lightbox .lightbox-source').isVisible());
  assert.equal(await page.locator('.image-lightbox .lightbox-source').getAttribute('href'),await page.locator('#landmark-panel .photo-source-link').getAttribute('href'));
  await page.screenshot({path:fileURLToPath(new URL(id+'-fullscreen.png',output))});await page.keyboard.press('Escape');
 }
 assert.deepEqual(errors,[]);const report={base,locations:items.length,photos,ai,allCreditsMatchCatalog:true,allSourceListsVisible:true,mobileOverflow:false,fullscreenCredits:true,errors};
 await fs.writeFile(new URL('report.json',output),JSON.stringify(report,null,2));console.log(report);
}finally{await browser.close();}
