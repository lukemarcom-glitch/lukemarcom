import {chromium} from '../../node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';import assert from 'node:assert/strict';
const id=process.argv[2],base=process.env.BASE_URL||'http://127.0.0.1:8871/lukemarcom/';const dir=`research/sol61-controle/${id}`;await fs.mkdir(dir,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--enable-webgl','--ignore-gpu-blocklist','--enable-unsafe-swiftshader']});const reports=[];
try{const p=await browser.newPage();await p.addInitScript(()=>localStorage.setItem('rotterdam-time-intro-seen','1'));await p.goto(base);await p.waitForFunction(()=>window.__rotterdam?.ready,null,{timeout:120000});
 const item=await p.evaluate(id=>window.__rotterdam.catalog.find(m=>m.id===id),id);assert(item.sources.every(s=>s.supports&&s.url.startsWith('https://')));assert(item.story.split(/\s+/).length<=400);
 for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  await p.setViewportSize({width,height});await p.locator(`[data-landmark="${id}"]`).evaluate(b=>b.click());if(width<700)await p.locator('.sheet-expand').click();
  for(const [variant,index] of [['original',0],['ai',1]]){
   await p.locator('.photo-pair').first().locator('.photo-thumb').nth(index).click();await p.waitForFunction(()=>{const i=document.querySelector('.hero-photo');return i?.complete&&i.naturalWidth>0;});
   const caption=await p.locator('#landmark-panel .photo-caption').innerText();for(const text of [item.photos[0].author,item.photos[0].license,item.photos[0].date,item.photos[0].identifier])assert(caption.includes(text),`${name}/${variant} missing ${text}`);
   assert.equal(await p.locator('#landmark-panel .photo-source-link').getAttribute('href'),item.photos[0].archiveUrl||item.photos[0].url);
   await p.locator('#landmark-panel .photo-credit').scrollIntoViewIfNeeded();await p.screenshot({path:`${dir}/${name}-${variant}-credit.png`});
   await p.locator('.photo-full').click();const light=await p.locator('.image-lightbox').innerText();for(const text of [item.photos[0].author,item.photos[0].license,item.photos[0].date,item.photos[0].identifier])assert(light.includes(text),`${name}/${variant} fullscreen missing ${text}`);await p.screenshot({path:`${dir}/${name}-${variant}-fullscreen.png`});await p.locator('.image-lightbox .photo-credit').scrollIntoViewIfNeeded();assert.equal(await p.locator('.image-lightbox .photo-credit').isVisible(),true);await p.screenshot({path:`${dir}/${name}-${variant}-fullscreen-credit.png`});await p.keyboard.press('Escape');reports.push({name,variant,caption,fullscreenCredit:true});
  }
  await p.locator('.content-sources').scrollIntoViewIfNeeded();assert.equal(await p.locator('.content-sources li').count(),item.sources.length);const text=await p.locator('.content-sources').innerText();for(const source of item.sources)assert(text.includes(source.supports));assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth||document.querySelector('#landmark-panel').scrollWidth>document.querySelector('#landmark-panel').clientWidth),false);await p.screenshot({path:`${dir}/${name}-sources.png`});await p.locator('.landmark-close').click();
 }
 await fs.writeFile(`${dir}/credits-browser.json`,JSON.stringify({id,base,storyWords:item.story.split(/\s+/).length,reports,sourceClaimsVisible:true,sourceCount:item.sources.length,passed:true},null,2));console.log({id,sourceClaimsVisible:true,all4GalleryFullscreenCredits:true,passed:true});
}finally{await browser.close();}
