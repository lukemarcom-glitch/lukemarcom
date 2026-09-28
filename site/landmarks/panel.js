import {photoCredit,sourceList,wikiBackground} from '../sources.js?v=1';
import {bindStoryGallery} from '../stories/gallery.js?v=sources-1';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
import {storyMarkup} from '../stories/panel.js?v=sources-1';
export function createPanel(catalog,onOpen,onClose=()=>{},stories=[]){
 const main=document.querySelector('main'),layer=document.createElement('div');layer.id='landmark-markers';main.append(layer);
 const panel=document.createElement('aside');panel.id='landmark-panel';panel.hidden=true;panel.setAttribute('aria-label','Historische plek en fotoparen');main.append(panel);
 let last=null,step=null,category='buildings';
 function setCategory(next){
  category=next;const isStories=next==='stories';
  document.body.classList.toggle('stories-active',isStories);
  document.querySelector('#building-category').hidden=isStories;document.querySelector('#stories-category').hidden=!isStories;
  document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===next)));
  document.querySelector('#places-title').textContent=isStories?'Verhalen · WOII':'Gebouwen & plekken';
  document.querySelector('#category-status').hidden=!isStories;
  for(const marker of markers)marker.categoryHidden=(marker.meta.kind==='war-story')!==isStories;
 }
 function bindPanelControls(){
  panel.querySelector('.landmark-close').onclick=close;
  panel.querySelector('.sheet-expand').onclick=()=>{const expanded=panel.classList.toggle('sheet-expanded');const b=panel.querySelector('.sheet-expand');b.setAttribute('aria-expanded',String(expanded));b.textContent=expanded?'Meer kaart ↓':'Meer ruimte ↑';onClose()};
 }
 function pointMeta(meta,point){
  if(!meta.miniMap)return {...meta,...point};
  const base=catalog.find(m=>m.id===meta.id),photos=base.photos.filter(p=>p.pointKey===point.pointKey);
  return {...base,...point,photos,photoIndex:0};
 }
 function addMiniMap(meta){
  if(!meta.miniMap)return;
  const base=catalog.find(m=>m.id===meta.id),section=document.createElement('section');section.className='park-explorer';
  section.setAttribute('aria-label','Verken de oude Diergaarde');
  section.innerHTML=`<div class="park-explorer-heading"><h3>Een wandeling door de Diergaarde</h3><button type="button" class="park-all">Alle foto's (${base.photos.length})</button></div><div class="park-mini-map"><img src="${esc(meta.miniMap.src)}" alt="Historische plattegrond van de oude Diergaarde"><div class="park-map-points"></div></div><p class="micro">${esc(meta.miniMap.note)}${meta.miniMap.url?`<br><a href="${esc(meta.miniMap.url)}" target="_blank" rel="noopener noreferrer">${esc(meta.miniMap.sourceLabel||'Kaartbron')} ↗</a>`:''}</p><details class="park-stops"><summary>Kies een fotostop</summary><div class="park-point-list"></div></details>`;
  section.querySelector('.park-all').onclick=()=>open(base);
  for(const point of base.photoPoints||[]){
   const count=base.photos.filter(p=>p.pointKey===point.pointKey).length;if(!count)continue;
   const button=document.createElement('button');button.type='button';button.textContent=point.number;button.style.left=point.mapPosition[0]+'%';button.style.top=point.mapPosition[1]+'%';button.setAttribute('aria-label',`${point.name}: ${count} ${count===1?'foto':"foto’s"}`);button.setAttribute('aria-pressed',String(meta.pointKey===point.pointKey));button.onclick=()=>open(pointMeta(base,point));section.querySelector('.park-map-points').append(button);
   const link=document.createElement('button');link.type='button';link.textContent=`${point.number}. ${point.name} · ${count}`;link.setAttribute('aria-pressed',String(meta.pointKey===point.pointKey));link.onclick=button.onclick;section.querySelector('.park-point-list').append(link);
  }
  const heading=panel.querySelector('.period-note')||panel.querySelector('h2');heading.after(section);
 }

 const viewer=document.createElement('dialog');viewer.className='image-lightbox';viewer.setAttribute('aria-label','Vergrote foto');
 viewer.innerHTML=`<header><span class="lightbox-position" aria-live="polite"></span><button class="lightbox-close" aria-label="Vergrote foto sluiten" autofocus>Sluiten ×</button></header><div class="lightbox-stage"><img alt=""></div><footer><div class="lightbox-controls"><button class="lightbox-prev" aria-label="Vorige vergrote afbeelding">←</button><a class="lightbox-source" target="_blank" rel="noopener noreferrer">Fotobron ↗</a><button class="lightbox-next" aria-label="Volgende vergrote afbeelding">→</button></div><p class="lightbox-caption"></p></footer>`;document.body.append(viewer);
 function syncViewer(){if(!viewer.open)return;const img=panel.querySelector('.hero-photo');viewer.querySelector('img').src=img.src;viewer.querySelector('img').alt=img.alt;viewer.querySelector('.lightbox-position').textContent=panel.querySelector('.photo-position').textContent;viewer.querySelector('.lightbox-caption').replaceChildren(...Array.from(panel.querySelector('.photo-caption').childNodes,n=>n.cloneNode(true)));viewer.querySelector('.lightbox-caption').scrollTop=0;const source=panel.querySelector('.photo-source-link');viewer.querySelector('.lightbox-source').href=source?.href||'';viewer.querySelector('.lightbox-source').hidden=!source;viewer.querySelector('.lightbox-prev').disabled=panel.querySelector('.photo-prev').disabled;viewer.querySelector('.lightbox-next').disabled=panel.querySelector('.photo-next').disabled;}
 viewer.querySelector('.lightbox-close').onclick=()=>viewer.close();
 viewer.querySelector('.lightbox-prev').onclick=()=>step?.(-1);viewer.querySelector('.lightbox-next').onclick=()=>step?.(1);
 viewer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();return;}if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();step?.(e.key==='ArrowLeft'?-1:1)}});
 let swipe=null;const stage=viewer.querySelector('.lightbox-stage');stage.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')swipe=e.isPrimary?{x:e.clientX,y:e.clientY}:null});stage.addEventListener('pointercancel',()=>swipe=null);stage.addEventListener('pointerup',e=>{if(!swipe)return;const dx=e.clientX-swipe.x,dy=e.clientY-swipe.y;swipe=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)step?.(dx<0?1:-1)});
 viewer.addEventListener('close',()=>{if(!panel.hidden)panel.querySelector('.photo-full')?.focus({preventScroll:true})});
 function open(meta){setCategory(meta.kind==='war-story'?'stories':'buildings');panel.setAttribute('aria-label',meta.kind==='war-story'?'Bijzonder verhaal uit de Tweede Wereldoorlog':'Historische plek en fotoparen');const expanded=Boolean(meta.miniMap&&((last?.id===meta.id&&panel.classList.contains('sheet-expanded'))||(meta.pointKey&&matchMedia('(max-width:700px)').matches)));panel.classList.toggle('sheet-expanded',expanded);last=meta;panel.hidden=false;document.body.classList.add('landmark-open');onOpen(meta);
 if(meta.kind==='war-story'){
  step=null;const related=catalog.find(m=>m.id===meta.relatedLandmark);panel.innerHTML=storyMarkup(meta,related);bindPanelControls();
  step=bindStoryGallery(panel,meta.photos,()=>{viewer.showModal();syncViewer()},syncViewer);
  panel.querySelector('.story-related')?.addEventListener('click',()=>open(related));
  panel.scrollTop=0;panel.querySelector('.landmark-close').focus({preventScroll:true});return;
 }
 const aiLabel=p=>p.aiLabel||(p.sourceColor?'AI-beeldherstel':['park','bridge'].includes(meta.kind)?'AI vernieuwd':'AI in kleur');
 const photos=meta.photos||[],slides=photos.flatMap((p,i)=>[{p,i,ai:false},...(p.ai?[{p,i,ai:true}]:[])]);
 panel.innerHTML=`<div class="sheet-bar"><button class="sheet-expand" aria-expanded="${expanded}">${expanded?'Meer kaart ↓':'Meer ruimte ↑'}</button><button class="landmark-close" aria-label="Plek sluiten">×</button></div><span class="eyebrow">HISTORISCH ROTTERDAM</span><h2>${esc(meta.name)}</h2>${meta.periodNote?`<p class="period-note">${esc(meta.periodNote)}</p>`:''}<div class="photo-viewer"><button class="photo-full" type="button" aria-label="Foto vergroten" title="Foto vergroten"><img class="hero-photo" alt=""><span class="photo-expand-hint">Vergroten ⤢</span></button><div class="photo-navigation"><button class="photo-prev" aria-label="Vorige afbeelding">←</button><span class="photo-position" aria-live="polite"></span><button class="photo-next" aria-label="Volgende afbeelding">→</button></div></div><p class="photo-caption"></p><div class="photo-list" aria-label="Fotoparen: steeds origineel gevolgd door AI-bewerking"></div><section class="building-story"><h3>Het verhaal van ${esc(meta.name)}</h3>${(meta.story||meta.description).split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join("")}${sourceList(meta)}${wikiBackground(meta)}</section>${meta.interiorLinks?.length?`<section class="building-story"><h3>Binnen kijken</h3>${meta.interiorLinks.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a></p><p class="micro">${esc(s.note||'')}</p>`).join('')}</section>`:''}<details><summary>Over dit 3D-model en de kleuren</summary><p>${esc(meta.description)}</p>${meta.colorNote?`<p>${esc(meta.colorNote)}</p>`:""}${meta.placementNote?`<p>${esc(meta.placementNote)}</p>`:""}</details><p class="micro">Reconstructie op benaderde schaal. Kleuren en fijne details in AI-beelden zijn interpretaties; het zijn geen nieuwe opnamen.</p>${meta.modelDownload===false?"":`<a href="landmarks/${esc(meta.id)}/model.glb" download>Download licht 3D-model ↓</a>`}<details><summary>Archiefmateriaal en verantwoording</summary><div class="source-list"></div><a href="${esc(meta.sourceRegister||(meta.kind==='park'?'landmarks/oude-diergaarde/README.md':'landmarks/README.md'))}" target="_blank">Modelkeuzes en bronnen ↗</a></details>`;
 addMiniMap(meta);
 bindPanelControls();panel.querySelector('.photo-full').onclick=()=>{viewer.showModal();syncViewer()};
 let current=Math.max(0,slides.findIndex(s=>s.i===(meta.photoIndex||0)));const buttons=[];
 function show(scroll=false){const {p,i,ai}=slides[current],src=ai?p.ai:p.src;const img=panel.querySelector('.hero-photo');img.src=src;img.alt=`${p.title} — ${ai?aiLabel(p):'origineel'}`;panel.querySelector('.photo-position').textContent=`Foto ${i+1} · ${ai?aiLabel(p):'Origineel'}`;panel.querySelector('.photo-caption').innerHTML=`<span>${esc(p.title)}${ai?(p.sourceColor?' · AI-beeldherstel':' · AI-beeldbewerking'):''}${p.note?' — '+esc(p.note):''}${ai&&p.aiNote?' — '+esc(p.aiNote):''}</span>${photoCredit(p,ai)}`;panel.querySelector('.photo-prev').disabled=current===0;panel.querySelector('.photo-next').disabled=current===slides.length-1;buttons.forEach((b,n)=>b.setAttribute('aria-pressed',String(n===current)));syncViewer();if(scroll&&buttons[current]){const rail=panel.querySelector('.photo-list'),a=buttons[current].getBoundingClientRect(),b=rail.getBoundingClientRect();if(a.left<b.left)rail.scrollLeft+=a.left-b.left-8;else if(a.right>b.right)rail.scrollLeft+=a.right-b.right+8;}}
 step=delta=>{current=Math.max(0,Math.min(slides.length-1,current+delta));show(true)};
 panel.querySelector('.photo-prev').onclick=()=>step(-1);panel.querySelector('.photo-next').onclick=()=>step(1);
 let offset=0;
 photos.forEach((p,i)=>{const group=document.createElement('div');group.className='photo-pair';group.setAttribute('role','group');group.setAttribute('aria-label',`Foto ${i+1}: ${p.title}`);const label=document.createElement('span');label.className='photo-pair-title';label.textContent=`${String(i+1).padStart(2,'0')} · ${p.shortTitle||'Foto '+(i+1)}`;group.append(label);const row=document.createElement('div');row.className='photo-pair-images';group.append(row);
 for(const ai of p.ai?[false,true]:[false]){const n=offset++;const b=document.createElement('button');b.className='photo-thumb';b.title=`${p.title} — ${ai?aiLabel(p):'origineel'}`;b.setAttribute('aria-label',b.title);b.innerHTML=`<img src="${esc(ai?p.ai:p.src)}" alt="" loading="lazy"><span>${ai?aiLabel(p):'Origineel'}</span>`;b.onclick=()=>{current=n;show();const photo=panel.querySelector('.photo-viewer'),bar=panel.querySelector('.sheet-bar');const inset=Math.max(44,bar?.getBoundingClientRect().height||0)+8;panel.scrollTo({top:Math.max(0,panel.scrollTop+photo.getBoundingClientRect().top-panel.getBoundingClientRect().top-inset),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})};row.append(b);buttons.push(b);}
 panel.querySelector('.photo-list').append(group);const a=document.createElement('a');a.href=p.url;a.target='_blank';a.rel='noreferrer';a.textContent=`Foto ${i+1}: ${p.title} — ${p.author||'maker onbekend'} · ${p.license||'zie bron'}`;panel.querySelector('.source-list').append(a);if(p.placementEvidence||p.rightsNote){const note=document.createElement('p');note.className='micro';note.textContent=[p.placementEvidence,p.rightsNote].filter(Boolean).join(' ');panel.querySelector('.source-list').append(note)}if(p.aiLicense){const license=document.createElement('a');license.href=p.aiLicenseUrl||'https://creativecommons.org/licenses/by-sa/4.0/';license.target='_blank';license.rel='noreferrer';license.textContent=`AI-bewerking van foto ${i+1}: ${p.aiLicense}`;panel.querySelector('.source-list').append(license);}
 });

 if(slides.length)show();else {panel.querySelector('.photo-viewer').remove();panel.querySelector('.photo-caption').remove();panel.querySelector('.photo-list').remove();step=null;}panel.scrollTop=0;panel.querySelector('.landmark-close').focus({preventScroll:true});
 }
 function close(restoreFocus=true){if(viewer.open)viewer.close();panel.hidden=true;step=null;document.body.classList.remove('landmark-open');markers.forEach(m=>m.el.classList.remove('selected'));onClose();if(restoreFocus&&last)(markers.find(m=>m.meta===last)||markers.find(m=>m.meta.id===last.id))?.el.focus({preventScroll:true})}
 panel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();step?.(e.key==='ArrowLeft'?-1:1)}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!viewer.open&&!panel.hidden)close()});
 const markers=catalog.flatMap(m=>m.photoPoints?.length?[{...m,overviewOnly:!m.persistentOverview},...m.photoPoints.filter(point=>!m.miniMap||m.photos.some(p=>p.pointKey===point.pointKey)).map(point=>({...pointMeta(m,point),detailOnly:true}))]: [m]).concat(stories).map(meta=>{const el=document.createElement('button');el.className='landmark-marker';if(meta.kind==='war-story')el.classList.add('story-marker');el.dataset.markerId=meta.id;if(meta.miniMap&&meta.pointKey){el.classList.add('photo-marker');el.dataset.number=meta.number;}el.innerHTML=`<span class="marker-name">${esc(meta.markerName||meta.name)}</span>`;el.setAttribute('aria-label',`${meta.name}: ${meta.kind==='war-story'?'oorlogsverhaal lezen':'model en archiefbeelden bekijken'}`);el.onclick=()=>open(meta);layer.append(el);return {el,meta}});
 const nav=document.querySelector('#building-links');catalog.forEach(meta=>{const b=document.createElement('button');b.textContent=meta.name;b.dataset.landmark=meta.id;b.onclick=()=>open(meta);nav.append(b)});
 const storyNav=document.querySelector('#story-links');stories.forEach(meta=>{const b=document.createElement('button');b.dataset.landmark=meta.id;b.innerHTML=`<span>${esc(meta.name)}</span><small>${esc(meta.theme)} · ${esc(meta.periodNote)}</small>`;b.onclick=()=>open(meta);storyNav.append(b)});
 document.querySelector('#story-count').textContent=`${stories.length} verhalen`;
 setCategory('buildings');
 return {markers,open,close,setCategory};
}
