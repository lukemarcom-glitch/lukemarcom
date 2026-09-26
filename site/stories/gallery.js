const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const roles={event:'De gebeurtenis',place:'De plek destijds',person:'Betrokken persoon',memorial:'Later gedenkteken',object:'Historisch object'};
export function storyGalleryMarkup(photos=[]){
 if(!photos.length)return '';
 return `<section class="story-gallery" aria-label="Beeld bij het verhaal"><div class="photo-viewer"><button class="photo-full" type="button" aria-label="Foto vergroten"><img class="hero-photo" alt=""><span class="photo-expand-hint">Vergroten ⤢</span></button><div class="photo-navigation"><button class="photo-prev" type="button" aria-label="Vorige afbeelding">←</button><span class="photo-position" aria-live="polite"></span><button class="photo-next" type="button" aria-label="Volgende afbeelding">→</button></div></div><p class="photo-caption"></p><div class="photo-list story-thumbnails" aria-label="Fotoparen: origineel gevolgd door AI-bewerking"></div></section>`;
}
// Uses the site's existing lightbox, keyboard controls and touch gestures.
export function bindStoryGallery(panel,photos,onEnlarge,onChange){
 if(!photos?.length)return null;
 const hasAI=p=>typeof p.ai==='string'&&p.ai.length>0;
 const slides=photos.flatMap((p,i)=>[{p,i,ai:false},...(hasAI(p)?[{p,i,ai:true}]:[])]);
 let current=0;const buttons=[];
 function show(scroll=false){
  const {p,i,ai}=slides[current],role=p.roleLabel||roles[p.role]||'Beeld bij het verhaal',label=ai?(p.aiLabel||'AI vernieuwd'):'Origineel';
  const img=panel.querySelector('.hero-photo');img.src=ai?p.ai:p.src;img.alt=`${p.alt||p.title} — ${label}`;
  panel.querySelector('.photo-position').textContent=`Foto ${i+1} · ${label}`;
  panel.querySelector('.photo-caption').innerHTML=`<span class="story-photo-description">${esc(p.title)}${p.note?' — '+esc(p.note):''}${ai?`<br><strong>${esc(label)}</strong> · ${esc(p.aiNote||'Kleuren en fijne details zijn AI-interpretaties; geen authentieke kleurenopname.')}`:''}</span><span class="story-photo-credit">${esc(p.date)} · ${esc(p.author)}<br><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">Bron bekijken ↗</a> · <a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.license)}</a>${ai&&p.aiLicense?`<br>AI-bewerking: <a href="${esc(p.aiLicenseUrl||p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.aiLicense)}</a>`:''}${!ai&&p.rightsNote?`<span class="story-rights-note">${esc(p.rightsNote)}</span>`:''}</span>`;
  panel.querySelector('.photo-prev').disabled=current===0;panel.querySelector('.photo-next').disabled=current===slides.length-1;
  buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===current)));onChange();
  if(scroll){const photo=panel.querySelector('.photo-viewer'),bar=panel.querySelector('.sheet-bar');panel.scrollTo({top:Math.max(0,panel.scrollTop+photo.getBoundingClientRect().top-panel.getBoundingClientRect().top-(bar?.getBoundingClientRect().height||44)-8),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 }
 const step=delta=>{current=Math.max(0,Math.min(slides.length-1,current+delta));show()};
 panel.querySelector('.photo-prev').onclick=()=>step(-1);panel.querySelector('.photo-next').onclick=()=>step(1);panel.querySelector('.photo-full').onclick=onEnlarge;
 const list=panel.querySelector('.story-thumbnails');let offset=0;
 photos.forEach((p,i)=>{const group=document.createElement('div');group.className='photo-pair';group.setAttribute('role','group');group.setAttribute('aria-label',`Foto ${i+1}: ${p.title}`);const title=document.createElement('span');title.className='photo-pair-title';title.textContent=`${i+1}. ${p.roleLabel||roles[p.role]||'Foto'}`;group.append(title);const row=document.createElement('div');row.className='photo-pair-images';group.append(row);
  for(const ai of hasAI(p)?[false,true]:[false]){const n=offset++,label=ai?(p.aiLabel||'AI vernieuwd'):'Origineel',b=document.createElement('button');b.type='button';b.className='photo-thumb';b.setAttribute('aria-label',`${p.title} — ${label}`);b.innerHTML=`<img src="${esc(ai?p.ai:p.src)}" alt="" loading="lazy"><span>${esc(label)}</span>`;b.onclick=()=>{current=n;show(true)};row.append(b);buttons.push(b)}list.append(group);
 });
 show();return step;
}
