import {resolveStoryLocations} from './stories/locations.js?v=city-33';
import {layoutMarkers} from './marker-layout.js?v=city-33';
import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import {createLandmark,inside,configureLandmarkContext} from './landmarks/models.js?v=city-33';
import {loadModern} from './modern/view.js';
import {createPanel} from './landmarks/panel.js?v=city-33';
const $=id=>document.getElementById(id);
const loading=$('loading');
async function start(){
 const response=await fetch('./data/model-landmarks.json?v=city-33'); if(!response.ok)throw Error('Modelbestand ontbreekt');const model=await response.json();
 const catalog=await (await fetch('./landmarks/catalog.json?v=city-33')).json();
 const storiesResponse=await fetch('./stories/catalog.json?v=city-33');if(!storiesResponse.ok)throw Error('Verhalenbestand ontbreekt');const stories=resolveStoryLocations(await storiesResponse.json(),catalog);
 $('landmark-count').textContent=`${catalog.length} gebouwen & plekken`;
 const scene=new THREE.Scene();scene.background=new THREE.Color('#e8e8df');
 const camera=new THREE.PerspectiveCamera(38,1,8,14000);
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<=700?1.5:2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;$('scene').appendChild(renderer.domElement);
 const controls=new OrbitControls(camera,renderer.domElement);controls.mouseButtons.LEFT=THREE.MOUSE.PAN;controls.mouseButtons.RIGHT=THREE.MOUSE.ROTATE;controls.touches.ONE=THREE.TOUCH.PAN;controls.touches.TWO=THREE.TOUCH.DOLLY_ROTATE;controls.screenSpacePanning=false;controls.enableDamping=true;controls.dampingFactor=.12;controls.minDistance=70;controls.maxDistance=6500;controls.maxPolarAngle=Math.PI/2-.035;controls.target.set(50,0,-60);
 const sky=new THREE.HemisphereLight('#ffffed','#65705f',1.6);scene.add(sky);const sun=new THREE.DirectionalLight('#ffefd2',2.0);sun.position.set(-900,1700,550);sun.castShadow=true;sun.shadow.mapSize.set(innerWidth<=700?2048:4096,innerWidth<=700?2048:4096);Object.assign(sun.shadow.camera,{left:-1800,right:1800,top:1800,bottom:-1800,near:1,far:5000});sun.shadow.normalBias=1;sun.shadow.bias=-.0002;scene.add(sun);
 const wallMaterial=new THREE.MeshStandardMaterial({color:'#d5c5ad',roughness:1,flatShading:true});
 const roofMaterial=new THREE.MeshStandardMaterial({color:'#ba8b69',roughness:1,flatShading:true});
 const objects=new THREE.Group();scene.add(objects);const meshes=[];
 const allPositions=[],allNormals=[],allColors=[];const ranges=[];
 for(const f of model.buildings){

  const shape=new THREE.Shape(f.rings[0].slice(0,-1).map(([x,y])=>new THREE.Vector2(x,y)));
  for(const ring of f.rings.slice(1))shape.holes.push(new THREE.Path(ring.slice(0,-1).map(([x,y])=>new THREE.Vector2(x,y))));
  const g=new THREE.ExtrudeGeometry(shape,{depth:12,bevelEnabled:false,steps:1,curveSegments:1});g.rotateX(-Math.PI/2);
  // Merge the display mesh; keep object ranges for raycast source selection.
  const pos=g.attributes.position,normal=g.attributes.normal;const begin=allPositions.length/9;
  for(let i=0;i<pos.count;i++){
   allPositions.push(pos.getX(i),pos.getY(i)+.35,pos.getZ(i));allNormals.push(normal.getX(i),normal.getY(i),normal.getZ(i));
   const c=normal.getY(i)>.8?roofMaterial.color:wallMaterial.color;allColors.push(c.r,c.g,c.b);
  }
  ranges.push({start:begin,end:allPositions.length/9,data:f,shape});g.dispose();
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(allPositions,3));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(allNormals,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(allColors,3));geometry.computeBoundingSphere();
 const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:1});const city=new THREE.Mesh(geometry,material);city.castShadow=true;city.receiveShadow=true;objects.add(city);
 configureLandmarkContext(catalog);const landmarkGroup=new THREE.Group();scene.add(landmarkGroup);catalog.forEach(m=>landmarkGroup.add(createLandmark(m)));
 const border=new THREE.Group();scene.add(border);
 const borderMaterial=new THREE.LineDashedMaterial({color:'#9c593b',dashSize:9,gapSize:6,transparent:true,opacity:.9});
 for(const ring of model.boundary){const g=new THREE.BufferGeometry().setFromPoints(ring.map(([x,y])=>new THREE.Vector3(x,1.2,-y)));const l=new THREE.Line(g,borderMaterial);l.computeLineDistances();border.add(l)}
 const textures=new THREE.TextureLoader();
 const loadTexture=url=>new Promise((resolve,reject)=>textures.load(url,t=>{t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=renderer.capabilities.getMaxAnisotropy();resolve(t)},undefined,reject));
 const [historicTex,brandTex]=await Promise.all([loadTexture('assets/centrum-1940.jpg'),loadTexture('assets/brandgrens.jpg')]);
 function ground(corners,texture,y){
  const verts=[];for(const i of [0,3,2,0,2,1]){const p=corners[i];verts.push(p[0],y,-p[1])}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));g.setAttribute('uv',new THREE.Float32BufferAttribute([0,1,0,0,1,0,0,1,1,0,1,1],2));g.computeVertexNormals();
  const mat=new THREE.MeshStandardMaterial({map:texture,roughness:1,color:'#ffffff',side:THREE.DoubleSide});const mesh=new THREE.Mesh(g,mat);mesh.receiveShadow=true;scene.add(mesh);return mesh;
 }
 const historicMap=ground(model.mapCorners,historicTex,0);const brandMap=ground(model.brandMapCorners,brandTex,-.1);brandMap.visible=false;
 const base=new THREE.Mesh(new THREE.PlaneGeometry(18000,18000),new THREE.MeshStandardMaterial({color:'#e5e5da',roughness:1}));base.rotation.x=-Math.PI/2;base.position.y=-8;base.receiveShadow=true;scene.add(base);
 const labels=model.landmarks.filter(p=>!catalog.some(m=>m.name===p.name)).map(p=>{const el=document.createElement('div');el.className='place-label';el.textContent=p.name;$('labels').appendChild(el);return {el,position:new THREE.Vector3(p.position[0],22,-p.position[1])}});
 $('count').textContent=`${ranges.length.toLocaleString('nl-NL')} afgeleide bouwmassa’s`;
 let view='3d',picked=null,highlight=null,flight=null,sourceInspection=false,focusedBridge=false;
 let era='old',modern=null,modernPromise=null,eraRequest=0;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function move(target,offset,animate=true){
  const end=target.clone().add(offset);flight=null;if(!animate||reduced){camera.position.copy(end);controls.target.copy(target);controls.update();return}
  flight={start:performance.now(),from:camera.position.clone(),to:end,oldTarget:controls.target.clone(),target};
 }
 const overview=new THREE.Vector3(360,0,-20);
 function gotoPlace(name,animate=true){$('location-status').hidden=name==='overview';$('location-status').textContent=name==='Hofplein'?'Hofplein · plein bij de Delftse Poort. Omringende bebouwing is schematisch.':name==='Oude Haven'?'Oude Haven · havengebied bij Plan C. Omringende bebouwing is schematisch.':'';document.querySelector('.intro').classList.toggle('compact',name!=='overview');
  const mark=model.landmarks.find(p=>p.name===name);const target=mark?new THREE.Vector3(mark.position[0],0,-mark.position[1]):overview;
  const distance=mark?380:($('scene').clientWidth<700?4100:2500);
  move(target,view==='2d'?new THREE.Vector3(0,distance*1.3,.1):new THREE.Vector3(distance*.35,distance*.85,distance*.9),animate);
  document.querySelectorAll('[data-place],[data-landmark]').forEach(b=>{const active=b.dataset.place===name;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current')});
 }
 const panel=createPanel(catalog,m=>{focusedBridge=Boolean(m.bridgeType||m.wideView);$('location-status').hidden=true;document.querySelectorAll('[data-place],[data-landmark]').forEach(b=>{const active=b.dataset.landmark===m.id;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current')});if(innerWidth<1000||focusedBridge)setMenu(false);resize();document.querySelector('.intro').classList.add('compact');for(const marker of panel.markers)marker.el.classList.toggle('selected',marker.meta.id===m.id&&(!m.photoPoints||marker.meta.name===m.name));const d=$('scene').clientWidth<700?(m.cameraDistanceMobile||m.cameraDistance||230)*(m.bridgeType?Math.max(1.45,900/$('scene').clientWidth):1.45):(m.cameraDistance||230),a=m.cameraAngle??m.angle??0;const offset=m.id==='bijenkorf'?new THREE.Vector3(-155,185,-235).multiplyScalar($('scene').clientWidth<700?1.45:1):new THREE.Vector3(Math.cos(a)*d*.4+Math.sin(a)*d*.85,d*.75,-Math.sin(a)*d*.4+Math.cos(a)*d*.85);move(new THREE.Vector3(m.center[0],era==='old'?m.height*.35:0,-m.center[1]),view==='2d'?new THREE.Vector3(0,d*1.3,.1):offset);},()=>resize(),stories);
 document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{panel.close(false);panel.setCategory(b.dataset.category);gotoPlace('overview');$('places-content').scrollTop=0;});
 
 function syncEra(){
  const now=era==='now';
  scene.background.set(now?'#e7efeb':'#e8e8df');base.material.color.set(now?'#dfe9e4':'#e5e5da');sun.color.set(now?'#ffffff':'#ffefd2');sky.color.set(now?'#ffffff':'#ffffed');sky.groundColor.set(now?'#849a8d':'#65705f');
  $('scene').setAttribute('aria-label',now?'Draaibare 3D-kaart van het huidige Rotterdam, met kleurenluchtfoto en vereenvoudigde gebouwvolumes.':'Draaibaar 3D-volumemodel van historische bebouwing, afgeleid van een archiefkaart. Hoogten zijn schematisch.');$('era-now').textContent=$('modern-buildings').checked?'Nu · 3D':'Nu · kleur';document.body.classList.toggle('era-modern',now);$('era-old').setAttribute('aria-pressed',String(!now));$('era-now').setAttribute('aria-pressed',String(now));
  historicMap.visible=!now&&$('map-select').value==='historical';brandMap.visible=!now&&$('map-select').value==='brand';objects.visible=!now&&$('show-buildings').checked;landmarkGroup.visible=!now;if(highlight)highlight.visible=!now&&objects.visible;
  $('modern-options').hidden=!now;$('modern-attribution').hidden=!now;$('labels').hidden=now||!$('show-labels').checked;
  for(const id of ['map-select','height','show-buildings'])$(id).disabled=now;
  if(modern){modern.aerial.visible=now;modern.group.visible=now&&$('modern-buildings').checked;modern.labelRoot.hidden=!now||!$('show-labels').checked;}
  for(const marker of panel.markers){marker.el.querySelector('.marker-name').textContent=marker.meta.markerName||marker.meta.name;marker.el.setAttribute('aria-label',marker.meta.kind==='war-story'?`${marker.meta.name}: oorlogsverhaal lezen`:`${now?(marker.meta.survives?'Locatie van ':'Voormalige locatie van '):''}${marker.meta.name}: model en archiefbeelden bekijken`);}
 }
 async function changeEra(next){
  const request=++eraRequest;
  // Keep the selected destination when switching eras during camera movement.
  if(flight?.to){camera.position.copy(flight.to);controls.target.copy(flight.target);controls.update();}flight=null;
  if(next==='now'&&!modern){$('era-now').textContent='Nu laden…';$('era-now').disabled=true;try{modernPromise??=loadModern(scene,renderer);modern=await modernPromise;}catch(e){modernPromise=null;console.error(e);$('era-now').textContent='Nu opnieuw laden';$('era-now').disabled=false;return}finally{$('era-now').disabled=false;} }
  if(next==='now'&&$('modern-buildings').checked){$('era-now').textContent='3D laden…';$('modern-state').textContent='Gebouwvolumes opbouwen…';try{await modern.build();$('modern-state').textContent='3DBAG · metingen vooral 2023 · luchtfoto 2025';}catch(e){$('modern-buildings').checked=false;$('modern-state').textContent='3D kon niet laden. Je kunt het opnieuw inschakelen.';console.error(e)}}
  $('era-now').textContent=$('modern-buildings').checked?'Nu · 3D':'Nu · kleur';if(request!==eraRequest)return;era=next;if(next==='now'&&view!=='3d')setView('3d');syncEra();
 }
 $('era-old').onclick=()=>changeEra('old');$('era-now').onclick=()=>changeEra('now');
 $('modern-buildings').onchange=async e=>{if(!modern)return;if(e.target.checked){e.target.disabled=true;$('modern-state').textContent='Gebouwvolumes opbouwen…';try{await modern.build();$('modern-state').textContent='3DBAG · metingen vooral 2023 · neutrale gevels';}catch(err){e.target.checked=false;$('modern-state').textContent='Gebouwen konden niet laden. Probeer opnieuw.';console.error(err)}finally{e.target.disabled=false}}else $('modern-state').textContent='Luchtfoto 2025 · dezelfde kaartpositie';syncEra();};
 function setMenu(open){$('places-toggle').setAttribute('aria-expanded',String(open));$('places-content').hidden=!open;document.body.classList.toggle('menu-expanded',open);}
 $('places-toggle').onclick=()=>{const open=$('places-toggle').getAttribute('aria-expanded')!=='true';if(open)panel.close(false);setMenu(open)};setMenu(innerWidth>=1000);
 gotoPlace('overview',false);
 controls.addEventListener('start',()=>flight=null);
 document.querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>{panel.close(false);gotoPlace(b.dataset.place);if(innerWidth<1000)setMenu(false)}));
 function setView(next){if(era==='old'&&next==='3d'&&sourceInspection){objects.visible=true;$('show-buildings').checked=true;if(highlight)highlight.visible=true;sourceInspection=false}view=next;const target=controls.target.clone();const d=camera.position.distanceTo(target);move(target,next==='2d'?new THREE.Vector3(0,d,.1):new THREE.Vector3(d*.27,d*.65,d*.69));$('view3d').setAttribute('aria-pressed',String(next==='3d'));$('view2d').setAttribute('aria-pressed',String(next==='2d'))}
 $('view3d').onclick=()=>setView('3d');$('view2d').onclick=()=>setView('2d');
 $('map-select').onchange=e=>{historicMap.visible=e.target.value==='historical';brandMap.visible=e.target.value==='brand'};
 $('show-buildings').onchange=e=>{objects.visible=e.target.checked;if(highlight)highlight.visible=e.target.checked};
 $('show-boundary').onchange=e=>border.visible=e.target.checked;
 $('show-labels').onchange=()=>syncEra();
 $('height').oninput=e=>{const h=+e.target.value;$('height-value').value=`${h} m`;objects.scale.y=h/12;if(highlight)highlight.scale.y=h/12;};
 $('tools-toggle').onclick=()=>{const expanded=document.querySelector('.tools').classList.toggle('expanded');$('tools-toggle').setAttribute('aria-expanded',String(expanded))};
 $('reset').onclick=()=>{panel.close(false);gotoPlace('overview')};
 function alignNorth(){
  // Cancel movement without consuming its remaining inertia or moving the focus.
  const target=controls.target.clone(),position=camera.position.clone(),damping=controls.enableDamping;
  flight=null;controls.enableDamping=false;controls.update();controls.target.copy(target);camera.position.copy(position);controls.enableDamping=damping;controls.update();
  const spherical=new THREE.Spherical().setFromVector3(position.sub(target));
  if(reduced){spherical.theta=0;camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(spherical));controls.update();return}
  flight={type:'north',start:performance.now(),target,radius:spherical.radius,phi:spherical.phi,theta:spherical.theta};
 }
 $('north-reset').onclick=alignNorth;
 function zoom(factor){const distance=camera.position.distanceTo(controls.target);const delta=camera.position.clone().sub(controls.target).multiplyScalar(Math.max(controls.minDistance,Math.min(controls.maxDistance,distance*factor))/distance);move(controls.target.clone(),delta)}
 $('zoom-in').onclick=()=>zoom(.72);$('zoom-out').onclick=()=>zoom(1.38);
 $('about-open').onclick=()=>$('about').showModal();$('about-close').onclick=()=>$('about').close();$('about').onclick=e=>{if(e.target===$('about')){const r=$('about').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('about').close()}};
 const ray=new THREE.Raycaster();let down=null;
 renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);
 function select(event){
  if(event.button!==0||era==='now'||!down||Math.hypot(event.clientX-down[0],event.clientY-down[1])>5)return;
  const r=renderer.domElement.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1),camera);
  const landmarkHit=ray.intersectObject(landmarkGroup,true)[0];if(landmarkHit){let o=landmarkHit.object;while(o&&!o.userData.landmark)o=o.parent;const m=catalog.find(m=>m.id===o?.userData.landmark);if(m){panel.open(m);return}}
  if(!objects.visible)return;
  const hit=ray.intersectObject(city)[0];if(!hit)return;
  const item=ranges.find(x=>hit.faceIndex>=x.start&&hit.faceIndex<x.end);if(!item)return;picked=item;
  if(highlight){scene.remove(highlight);highlight.geometry.dispose();highlight.material.dispose()}
  const g=new THREE.ExtrudeGeometry(item.shape,{depth:12.45,bevelEnabled:false,steps:1,curveSegments:1});g.rotateX(-Math.PI/2);highlight=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:'#477760',roughness:1}));highlight.position.y=.5;highlight.scale.y=+$('height').value/12;scene.add(highlight);
  document.querySelector('.tools').classList.add('expanded');$('tools-toggle').setAttribute('aria-expanded','true');const f=item.data;$('selection').innerHTML=`<span class="caption">AUTOMATISCH AFGELEIDE VORM</span><strong>Bouwmassa ${f.id} · ca. ${Math.round(f.area).toLocaleString('nl-NL')} m²</strong><p class="selected-note">Kaartcontour, nog niet per pand gecontroleerd. Hoogte is schematisch.</p><button id="inspect-source">Bekijk de contour op de kaart ↗</button>`;
  $('inspect-source').onclick=()=>{setView('2d');sourceInspection=true;$('map-select').value='historical';historicMap.visible=true;brandMap.visible=false;$('show-buildings').checked=false;objects.visible=false;highlight.visible=false;move(new THREE.Vector3(...[f.center[0],0,-f.center[1]]),new THREE.Vector3(0,Math.max(150,Math.sqrt(f.area)*5),.1))};
 }
 renderer.domElement.addEventListener('pointerup',select);
 const resize=()=>{const w=$('scene').clientWidth,h=$('scene').clientHeight;camera.aspect=w/h;camera.setViewOffset(w,h,w<1000?0:(document.body.classList.contains('landmark-open')?(focusedBridge?Math.min(440,w-310)/2+10:w*.07):-w*.04),w<700?h*(document.body.classList.contains('landmark-open')?.28:.07):0,w,h);camera.updateProjectionMatrix();renderer.setSize(w,h,false)};new ResizeObserver(resize).observe($('scene'));resize();
 function render(now){
  requestAnimationFrame(render);
  if(flight){const t=Math.min((now-flight.start)/(flight.type==='north'?600:800),1);const ease=t*t*(3-2*t);
   if(flight.type==='north'){controls.target.copy(flight.target);camera.position.copy(flight.target).add(new THREE.Vector3().setFromSphericalCoords(flight.radius,flight.phi,flight.theta*(1-ease)))}
   else {camera.position.lerpVectors(flight.from,flight.to,ease);controls.target.lerpVectors(flight.oldTarget,flight.target,ease)}
   if(t===1)flight=null;
  }
  controls.update();renderer.render(scene,camera);
  const w=$('scene').clientWidth,h=$('scene').clientHeight;const mobile=w<700;
  const occupied=layoutMarkers(panel.markers,camera,controls,era,w,h,$('show-labels').checked,THREE);
  for(const label of (era==='now'&&modern?modern.labels:labels)){const p=label.position.clone().project(camera);const x=(p.x+1)/2*w,y=(1-p.y)/2*h;
   const occluded=(x>w-310&&y<570)||(x<300&&y<230)||(mobile&&(y>h-200||y<135));
   const width=label.el.textContent.length*6+20;const box={l:x-width/2,r:x+width/2,t:y-29,b:y+4};const overlap=occupied.some(b=>box.l<b.r&&box.r>b.l&&box.t<b.b&&box.b>b.t);const hidden=p.z>1||p.z<0||x<0||x>w||y<0||y>h||occluded||overlap;if(!hidden)occupied.push(box);label.el.style.display=hidden?'none':'block';label.el.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-100%)`;
  }
  const forward=new THREE.Vector3();camera.getWorldDirection(forward);const angle=Math.atan2(forward.x,-forward.z);$('north-arrow').style.transform=`rotate(${-angle}rad)`;
 }
 loading.remove();
 const timeIntro=$('time-intro');timeIntro.querySelector('.intro-close').onclick=()=>timeIntro.close();$('intro-old').onclick=()=>{timeIntro.close();changeEra('old')};$('intro-now').onclick=()=>{timeIntro.close();changeEra('now')};timeIntro.addEventListener('close',()=>{try{localStorage.setItem('rotterdam-time-intro-seen','1')}catch{}});let introSeen=false;try{introSeen=localStorage.getItem('rotterdam-time-intro-seen')==='1'}catch{}if(!introSeen)timeIntro.showModal();
 window.__rotterdam={ready:true,model,scene,camera,renderer,controls,city,ranges,landmarkGroup,catalog,stories};requestAnimationFrame(render);
}
start().catch(e=>{console.error(e);loading.innerHTML='<b>De 3D-weergave kon niet laden.</b><span>Open deze versie via Start Rotterdam.command en controleer of WebGL beschikbaar is.</span>';loading.setAttribute('role','alert')});
