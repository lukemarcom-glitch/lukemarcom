// Project map anchors on every frame. Cache text sizes, never camera positions.
const overlaps=(a,b)=>a.l<b.r&&a.r>b.l&&a.t<b.b&&a.b>b.t;
let measureKey='',measurements=new WeakMap();
export function layoutMarkers(markers,camera,controls,era,w,h,enabled,THREE){
 const key=`${w}/${h}/${era}/${document.fonts?.status||'ready'}`;
 if(key!==measureKey){measureKey=key;measurements=new WeakMap();}
 const mobile=w<700,distance=camera.position.distanceTo(controls.target);
 const scene=document.getElementById('scene').getBoundingClientRect();
 // All layout reads precede writes to avoid forcing layout once per marker.
 const blockers=[...document.querySelectorAll('.places,.intro,.tools,.era-switch,#landmark-panel,.compass,.navigation,#modern-options,#modern-attribution,#location-status,#category-status')].filter(el=>!el.hidden&&getComputedStyle(el).visibility!=='hidden'&&el.getClientRects().length).map(el=>{const r=el.getBoundingClientRect();return {l:r.left-scene.left-6,r:r.right-scene.left+6,t:r.top-scene.top-6,b:r.bottom-scene.top+6}});
 const candidates=markers.map((marker,index)=>{
  const {el,meta:m}=marker,p=new THREE.Vector3(m.center[0],era==='old'?m.height+5:3,-m.center[1]).project(camera);
  const x=(p.x+1)*w/2,y=(1-p.y)*h/2;
  const selected=el.classList.contains('selected')&&document.body.classList.contains('landmark-open');
  const active=el===document.activeElement||el.matches(':hover');
  const name=el.querySelector('.marker-name');let size=measurements.get(name);
  if(!size||size.text!==name.textContent){size={width:name.offsetWidth,height:name.offsetHeight,text:name.textContent};if(size.width&&size.height)measurements.set(name,size);}
  return {...marker,index,x,y,p,name,...size,selected,active,priority:active?3:selected?2:0,hidden:true,placement:null};
 }).sort((a,b)=>b.priority-a.priority||a.index-b.index);
 const dots=[],accepted=[];
 for(const c of candidates){
  const {meta:m,x,y,p}=c,box={l:x-22,r:x+22,t:y-22,b:y+22};
  c.hidden=Boolean(c.categoryHidden)||!enabled||p.z>1||p.z<0||box.l<0||box.r>w||box.t<0||box.b>h||(m.detailOnly&&distance>=(m.detailDistance||1500))||(m.overviewOnly&&distance<(m.detailDistance||1500))||blockers.some(b=>overlaps(box,b))||(!c.priority&&dots.some(b=>overlaps(box,b)));
  if(!c.hidden){dots.push(box);accepted.push(c);}
 }
 // A fresh budget per frame; callers can add street names without poisoning a cache.
 const occupied=[...blockers,...dots];
 const limit=distance>2400?(mobile?1:3):distance>1200?(mobile?2:5):(mobile?4:9);
 let names=0;
 for(const c of accepted){
  if((names>=limit&&!c.priority)||!c.width||!c.height)continue;
  for(const below of [false,true]){
   const left=Math.max(8,Math.min(w-c.width-8,c.x-c.width/2)),top=below?c.y+30:c.y-30-c.height;
   const box={l:left-5,r:left+c.width+5,t:top-5,b:top+c.height+5};
   if(box.l<0||box.r>w||box.t<0||box.b>h||occupied.some(b=>overlaps(box,b)))continue;
   c.placement={left:left-c.x+22,top:top-c.y+22};occupied.push(box);names++;break;
  }
 }
 for(const c of candidates){
  c.el.style.visibility=c.hidden?'hidden':'visible';
  c.el.style.transform=`translate3d(${c.x-22}px,${c.y-22}px,0)`;
  c.el.style.zIndex=c.priority?'3':'1';
  c.el.classList.toggle('has-name',Boolean(c.placement));
  if(c.placement){c.name.style.left=`${c.placement.left}px`;c.name.style.top=`${c.placement.top}px`;}
 }
 return occupied;
}
