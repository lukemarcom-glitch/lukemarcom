import * as T from '../vendor/three.module.js';
import {hoffmanGround} from './hoffman-ground.js?v=24';

// Pre-war silhouettes from archive photographs and RCE descriptions. See the
// Noordereiland source register for survey anchors and estimated dimensions.
export function buildNoordereiland(meta,{material,box,merge}) {
 const g=new T.Group();
 const brick=material('#8e5541',true),stone=material('#d3c9af'),base=material('#929388'),roof=material('#4c5153'),glass=material('#364d51'),wood=material('#443c32'),bronze=material('#50665a'),iron=material('#343e39'),gravel=material('#b7aa90'),grass=material('#768052'),leaves=material('#526e45'),bark=material('#65523c');
 const b=(o,x,y,z,w,h,d,m=stone)=>box(o,x,y,z,w,h,d,m);
 function part(o,x=0,z=0,a=0){const p=new T.Group();p.position.set(x,0,z);p.rotation.y=a;o.add(p);return p;}
 function mesh(o,geo,mat,x,y,z){const m=new T.Mesh(geo,mat);m.position.set(x,y,z);o.add(m);return m;}
 function face(o,points,mat){const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(points.flat(),3));ge.setAttribute('uv',new T.Float32BufferAttribute(points.flatMap(p=>[p[0]/3,p[1]/3]),2));ge.computeVertexNormals();o.add(new T.Mesh(ge,mat));}
 function cyl(o,x,y,z,r,h,mat,rt=r,n=16){return mesh(o,new T.CylinderGeometry(rt,r,h,n),mat,x,y,z);}
 function beam(o,a,c,r,mat=iron){const v=new T.Vector3(...c).sub(new T.Vector3(...a));const m=cyl(o,(a[0]+c[0])/2,(a[1]+c[1])/2,(a[2]+c[2])/2,r,v.length(),mat,r,6);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());return m;}
 function hip(o,w,d,h,r,mat=roof){const a=[-w/2,h,-d/2],c=[w/2,h,-d/2],e=[w/2,h,d/2],f=[-w/2,h,d/2],q=Math.min(w,d)*.32,u=[-w/2+q,h+r,0],v=[w/2-q,h+r,0];face(o,[a,u,v,a,v,c,c,v,e,e,v,u,e,u,f,f,u,a],mat);}
 function gableRoof(o,w,d,h,r,mat=roof){face(o,[[-w/2,h,d/2],[w/2,h,d/2],[w/2,h+r,0],[-w/2,h,d/2],[w/2,h+r,0],[-w/2,h+r,0],[-w/2,h,-d/2],[-w/2,h+r,0],[w/2,h+r,0],[-w/2,h,-d/2],[w/2,h+r,0],[w/2,h,-d/2]],mat);for(const s of [-1,1])face(o,[[s*w/2,h,-d/2],[s*w/2,h+r,0],[s*w/2,h,d/2]],brick);}
 function arch(o,x,y,z,w,h,mat=glass){const s=new T.Shape(),r=w/2;s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();mesh(o,new T.ExtrudeGeometry(s,{depth:.12,bevelEnabled:false,curveSegments:10}),mat,x,y,z);}
 function win(o,x,y,z,w,h,frame=stone){b(o,x,y,z,w+.18,h+.2,.14,frame);b(o,x,y,z+.1,w,h,.12,glass);b(o,x,y+.23,z+.18,w,.08,.1,frame);b(o,x,y,z+.18,.075,h,.1,frame);b(o,x,y-h/2-.13,z+.13,w+.28,.16,.25,frame);}
 function pediment(o,x,y,z,w,h){face(o,[[x-w/2,y,z],[x+w/2,y,z],[x,y+h,z]],stone);face(o,[[x-w/2+.35,y+.1,z+.04],[x+w/2-.35,y+.1,z+.04],[x,y+h-.35,z+.04]],brick);b(o,x,y,z,w+.2,.16,.3,stone);}
 function renaissanceGable(o,x,z,w,y,h){const pts=[[-w/2,0],[-w/2,h*.12],[-w*.34,h*.26],[-w*.28,h*.44],[-w*.18,h*.52],[-w*.18,h*.76],[-w*.09,h*.85],[0,h],[w*.09,h*.85],[w*.18,h*.76],[w*.18,h*.52],[w*.28,h*.44],[w*.34,h*.26],[w/2,h*.12],[w/2,0]];const sh=new T.Shape(pts.map(p=>new T.Vector2(x+p[0],y+p[1])));mesh(o,new T.ExtrudeGeometry(sh,{depth:.32,bevelEnabled:false}),brick,0,0,z);for(let i=0;i<pts.length-1;i++)beam(o,[x+pts[i][0],y+pts[i][1],z+.38],[x+pts[i+1][0],y+pts[i+1][1],z+.38],.12,stone);b(o,x,y+h*.54,z+.4,w*.42,.22,.2,stone);cyl(o,x,y+h+.2,z+.18,.22,.5,stone,.16,8);}
 function railing(o,w,d,y){for(const s of [-1,1]){b(o,0,y,s*d/2,w,.08,.08,iron);b(o,s*w/2,y,0,.08,.08,d,iron);for(let x=-w/2;x<=w/2;x+=.55)b(o,x,y-.5,s*d/2,.055,1.05,.055,iron);for(let z=-d/2;z<=d/2;z+=.55)b(o,s*w/2,y-.5,z,.055,1.05,.055,iron);}}
 function tree(o,x,z,h=8){cyl(o,x,h*.38,z,.18,h*.76,bark,.13,7);const crown=mesh(o,new T.IcosahedronGeometry(h*.34,1),leaves,x,h*.79,z);crown.scale.set(1,.93,1);}

 if(meta.id==='hulstkampgebouw') {
  const w=51,d=59,front=d/2,glassRoof=material('#a1ada6');
  // The 1938 aerial shows the glazed central factory roof and the rear wings.
  b(g,0,9.6,front-6,w,19.2,12,brick);
  hip(part(g,0,front-6),w+.5,12.4,19.2,4.8);
  b(g,0,9,-d/2+5,w,18,10,brick);hip(part(g,0,-d/2+5),w+.5,10.4,18,4.8);
  for(const x of [-17,0,17]){
   b(g,x,8.8,-1,16.5,17.6,37,brick);
   const hall=part(g,x,-1,Math.PI/2);gableRoof(hall,37,16.5,17.6,5,x===0?glassRoof:roof);
   if(x===0)for(let z=-18;z<=17;z+=2.6){const rib=part(g,0,z);beam(rib,[-8.25,17.8,0],[0,22.7,0],.09,stone);beam(rib,[0,22.7,0],[8.25,17.8,0],.09,stone);}
  }
  const f=part(g,0,front+.04);
  b(f,0,2.3,0,w,4.6,.35,base);
  for(const y of [4.7,9.65,14.5,19.2])b(f,0,y,.1,w+.3,.28,.42,stone);
  for(const y of [5.3,7.6,10.3,12.6,15.1,17.1,18.8])b(f,0,y,.04,w,.17,.16,stone);
  const xs=[-23,-19.5,-16,-11.6,-8.3,-5,-1.7,1.7,5,8.3,11.6,16,19.5,23];
  for(const x of xs){
   win(f,x,7.1,.25,1.7,3.4,wood);pediment(f,x,9,.48,2.5,.65);
   win(f,x,12,.2,1.65,3.05,wood);win(f,x,16.7,.2,1.6,2.8,wood);
   if(Math.abs(x)>14)arch(f,x,.7,.3,1.8,3.5,wood);else if(Math.abs(x)>2.5)win(f,x,2.55,.3,2.65,3.35,wood);
  }
  for(const x of [-25,-14,14,25])b(f,x,11.8,.32,.52,14.5,.45,stone);
  b(f,0,2.2,.37,2.6,4.2,.22,wood);for(const x of [-1.8,1.8])cyl(f,x,2.3,.65,.16,3.8,bronze);b(f,0,4.2,.65,4.4,.32,.6,stone);
  for(const x of [-19.5,19.5]){renaissanceGable(f,x,.2,9.8,19.1,5.7);arch(f,x,19.2,.6,1.9,2.4,wood);}
  for(const x of [-10,-3.4,3.4,10]){renaissanceGable(f,x,.1,4.8,19.15,2.7);arch(f,x,19.2,.5,1.25,1.5,wood);}
  // Projecting oriel on the left and open octagonal corner lantern.
  b(f,-19.5,7.3,1,3,3.4,1.4,stone);for(const x of [-20.4,-19.5,-18.6])win(f,x,7.4,1.8,.6,2.5,wood);hip(part(f,-19.5,.8),3.5,2,9,1.4);
  const tower=part(g,-24.8,front+.25);cyl(tower,0,12.2,0,1.18,13,stone,1.18,8);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;const side=part(tower,Math.sin(a)*1.2,Math.cos(a)*1.2,a);for(const y of [7.2,12,16.7])win(side,0,y,0,.55,2.4,wood);}
  cyl(tower,0,19.8,0,1.5,.35,stone,1.5,8);cyl(tower,0,22.0,0,1.15,3.9,wood,1.15,8);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;const side=part(tower,Math.sin(a)*1.18,Math.cos(a)*1.18,a);arch(side,0,20.2,0,.62,3.2,glass);}
  cyl(tower,0,24.5,0,1.7,1.1,roof,.9,8);cyl(tower,0,26.4,0,.9,2.8,roof,.08,8);cyl(tower,0,28,0,.055,1.2,iron);
  // Side facade has long stone bands and paired factory windows.
  const side=part(g,-w/2-.05,0,-Math.PI/2);
  for(const y of [4.6,9.4,14.2,18.1])b(side,0,y,.03,d,.28,.22,stone);
  for(const y of [1.4,3.1,5.2,7.8,10.1,12.7,14.9,17])b(side,0,y,.01,d,.16,.14,stone);
  for(let x=-24;x<=25;x+=5.4)for(const y of [2.7,7,11.8,16])win(side,x,y,.2,2.05,2.7,wood);
  const rear=part(g,0,-d/2-.06,Math.PI);
  for(const y of [4.5,9,13.8,18])b(rear,0,y,.02,w,.25,.25,stone);
  for(let x=-21;x<=21;x+=7)for(const [y,h] of [[2.5,3.2],[6.8,2.8],[11.4,2.8],[16,2.3]])win(rear,x,y,.14,2.8,h,wood);
  // Chimney and low yard works visible in the 1938 source, simplified in size.
  cyl(g,15,17,-19,1.4,34,brick,.8,16);cyl(g,15,33.5,-19,1.08,.7,base,1.08,16);
  for(const x of [-10,8])for(const z of [-24,23]){b(g,x,20.4,z,2.1,2,1.8,stone);win(g,x,20.4,z+1,1.25,1.3,wood);}
  // Roof advertisement structure; no invented contemporary event-venue lettering.
  for(const x of [-14,14])b(g,x,25.1,24,.12,8,.12,iron);
  for(const y of [22.6,27.5])b(g,0,y,24,28,.12,.12,iron);
  // Simple openwork capitals from the verified roof sign in the 1938 aerial.
  const letters={H:['10001','10001','10001','11111','10001','10001','10001'],U:['10001','10001','10001','10001','10001','10001','01110'],L:['10000','10000','10000','10000','10000','10000','11111'],S:['01111','10000','10000','01110','00001','00001','11110'],T:['11111','00100','00100','00100','00100','00100','00100'],K:['10001','10010','10100','11000','10100','10010','10001'],A:['01110','10001','10001','11111','10001','10001','10001'],M:['10001','11011','10101','10101','10001','10001','10001'],P:['11110','10001','10001','11110','10000','10000','10000']};
  [...'HULSTKAMP'].forEach((letter,i)=>letters[letter].forEach((row,j)=>[...row].forEach((pixel,k)=>{if(pixel==='1')b(g,(i-4)*2.8+(k-2)*.4,26.6-j*.46,24.15,.4,.46,.1,stone);}))); 
 } else if(meta.id==='van-drielkantoor') {
  const w=12.5,d=22,front=d/2;
  b(g,0,8.75,0,w,17.5,d,stone);b(g,0,.65,0,w+.15,1.3,d+.1,base);
  // A high cross roof, not the modern flat block of the adjacent nr 115.
  gableRoof(part(g,0,front-4.7),w,9.4,17.6,7.4);
  b(g,0,16.5,-4.6,w,2,12.8,brick);b(g,0,17.6,-4.6,w,.2,12.8,roof);
  const f=part(g,0,front+.05);
  for(const y of [1.35,6.45,7.05,13.5,17.1])b(f,0,y,.05,w+.15,.22,.3,stone);
  // Deep arched entrance on the left, three rectangular windows to the right.
  arch(f,-3.75,.3,.21,3.5,5.9,base);arch(f,-3.75,.3,.37,2.65,5.1,wood);
  for(let x=-4.9;x<=-2.6;x+=.29)b(f,x,2.2,.55,.045,3.9,.06,iron);
  for(const x of [-.5,2.1,4.7]){win(f,x,3.9,.3,1.8,3.7,wood);b(f,x,.72,.25,1.8,.58,.16,iron);}
  b(f,0,6.7,.62,w+.3,.45,1.3,stone);
  for(const x of [-4.8,-2.4,0,2.4,4.8]){
   arch(f,x,7.3,.17,2,5.5,base);arch(f,x,7.45,.34,1.58,5.13,glass);
   b(f,x,9.95,.52,.075,4.7,.1,wood);b(f,x,9.5,.52,1.65,.1,.1,wood);
   win(f,x,15,.24,1.62,2.9,wood);
   b(f,x,7.4,1.25,2.2,1.0,.22,stone);for(const dx of [-.66,0,.66])b(f,x+dx,7.4,1.39,.43,.45,.055,base);
  }
  for(const x of [-6,-3.6,-1.2,1.2,3.6,6]){
   b(f,x,10,.26,.22,5.7,.3,stone);b(f,x,12.55,.4,.48,.35,.35,stone);
   b(f,x,6.25,.53,.34,.5,.75,stone);cyl(f,x,8.05,1.25,.17,.36,stone,.13,8);
  }
  b(f,0,17.4,.16,w+.6,.55,.85,wood);
  for(let x=-5.7;x<=5.8;x+=.7)b(f,x,17.03,.14,.16,.37,.55,wood);
  for(const x of [-3,0,3]){b(g,x,18.65,front-1.1,1.75,1.35,1.4,wood);win(g,x,18.65,front-.32,1.22,.97,wood);b(g,x,19.37,front-1.05,2,.16,1.7,roof);}
  for(const x of [-5.9,5.9]){b(g,x,24.9,front-4.7,.65,5.6,.85,stone);b(g,x,27.7,front-4.7,1.2,.22,1.35,wood);for(const dx of [-.38,.38])b(g,x+dx,27.1,front-4.7,.12,1.3,1.1,stone);}
  // Small bronze anchor silhouettes at both cornice ends, backed by stone.
  for(const x of [-5.7,5.7]){b(f,x,18.55,-.15,.5,1.8,.5,stone);beam(f,[x,17.8,.22],[x,19.5,.22],.07,bronze);beam(f,[x-.36,18.1,.22],[x,17.8,.22],.07,bronze);beam(f,[x+.36,18.1,.22],[x,17.8,.22],.07,bronze);b(f,x,19.05,.22,.62,.12,.12,bronze);}
  const back=part(g,0,-d/2-.04,Math.PI);for(const x of [-4,-1.35,1.35,4])for(const y of [3.2,8,12.6])win(back,x,y,.15,1.45,2.7,wood);
  // The office belongs to a continuous quay frontage; these two neighbours are
  // simplified context, with their pre-war window rhythm visible in PBK-4475.
  for(const [cx,nw,nh,bays] of [[-10.1,7.6,17.1,3],[10.85,9.2,16.4,4]]){
   const n=part(g,cx,-.7);b(n,0,nh/2,0,nw,nh,20.6,brick);hip(n,nw+.1,20.8,nh,2.8);
   const front=part(n,0,10.37);for(const y of [3.7,7.3,11,nh])b(front,0,y,.12,nw,.24,.34,stone);
   for(let i=0;i<bays;i++){const x=(i-(bays-1)/2)*(nw-1.1)/bays;for(const y of [5.4,9.1,13.1]){win(front,x,y,.15,1.4,2.4,stone);pediment(front,x,y+1.4,.36,1.9,.4);}win(front,x,1.9,.15,1.6,2.6,wood);}
  }
 } else if(meta.id==='burgemeester-hoffmanplein') {
  // The green spine follows the 1940 plan; modern OSM anchors locate the two
  // surviving monuments. No contemporary playground or car parking is copied.
  // Partition the original outlines so every ground point has one top face.
  // Merely lifting nested ellipses still leaves overlapping path intersections.
  for(const [name,polygons] of Object.entries(hoffmanGround))for(const rings of polygons){
   const points=ring=>ring.map(([x,z])=>new T.Vector2(x,-z));
   const shape=new T.Shape(points(rings[0]));
   for(const ring of rings.slice(1))shape.holes.push(new T.Path(points(ring)));
   const geometry=new T.ExtrudeGeometry(shape,{depth:.12,bevelEnabled:false,steps:1});
   geometry.rotateX(-Math.PI/2);
   mesh(g,geometry,name==='grass'?grass:gravel,0,.04,0);
  }
  for(const x of [-87,-71,-55,-39,-20,19,36,54,72,89,105])for(const s of [-1,1])tree(g,x,s*10,7.3+(Math.abs(x)%4)*.35);
  for(const x of [-68,-39,24,61,91])for(const s of [-1,1]){const seat=part(g,x,s*13,s>0?0:Math.PI);b(seat,0,.65,0,2.5,.15,.55,wood);b(seat,0,1.15,-.26,2.5,.62,.12,wood);for(const dx of [-.95,.95])b(seat,dx,.35,0,.09,.7,.6,iron);}
  // Stieltjes: 11 m total (BKOR). Fluted column, vase and enclosed pedestal.
  const st=part(g);for(const [y,w,h] of [[.16,6.4,.32],[.44,5.9,.25],[.69,5.4,.25]])b(st,0,y,0,w,h,w,stone);
  railing(part(st),5.1,5.1,1.75);
  const sandstone=material('#9c8170');b(st,0,1.75,0,2,2,2,sandstone);b(st,0,2.8,0,2.45,.28,2.45,sandstone);b(st,0,1.6,1.03,1.25,.78,.12,stone);
  cyl(st,0,3.13,0,.7,.4,sandstone);cyl(st,0,6.5,0,.48,6.3,sandstone,.43,24);
  for(let i=0;i<16;i++){const a=i*Math.PI/8;beam(st,[Math.cos(a)*.47,4.2,Math.sin(a)*.47],[Math.cos(a)*.43,9.5,Math.sin(a)*.43],.026,base);}
  for(const y of [3.45,9.55])cyl(st,0,y,0,.6,.18,sandstone);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;const leaf=mesh(st,new T.SphereGeometry(.2,6,4),sandstone,Math.cos(a)*.51,9.82,Math.sin(a)*.51);leaf.scale.set(1,1.5,1);}
  b(st,0,10.08,0,1.35,.16,1.35,sandstone);cyl(st,0,10.45,0,.33,.6,sandstone,.48);cyl(st,0,10.82,0,.48,.18,sandstone,.3);cyl(st,0,11.02,0,.15,.24,sandstone,.08);
  // Wilhelmina: 4 m basin and 6 m height (BKOR), bronze winged figure and spouts.
  const fo=part(g,meta.fountainLocal[0],meta.fountainLocal[1]);
  cyl(fo,0,.2,0,2,.4,stone,2,40);cyl(fo,0,.42,0,1.82,.06,glass,1.82,40);
  const rim=mesh(fo,new T.TorusGeometry(1.91,.11,6,40),stone,0,.46,0);rim.rotation.x=Math.PI/2;
  b(fo,0,.9,0,1.25,1.65,1.15,stone);arch(fo,0,.5,.59,.77,1.15,bronze);
  cyl(fo,0,2.65,0,.4,2.5,stone,.32);cyl(fo,0,3.91,0,.62,.2,stone,.48);
  for(const s of [-1,1]){cyl(fo,s*1.13,.88,0,.2,.8,stone,.32);cyl(fo,s*1.13,1.31,0,.66,.12,stone);cyl(fo,s*1.13,1.39,0,.54,.04,glass);b(fo,s*.74,2.05,0,.65,.2,.35,bronze);}
  // Deliberately low-detail sculpture, not a fabricated likeness of Miedema's figure.
  cyl(fo,0,4.55,0,.2,1.1,bronze,.13,10);mesh(fo,new T.SphereGeometry(.16,10,7),bronze,0,5.22,0);
  beam(fo,[.08,4.95,0],[.37,5.46,.04],.06,bronze);beam(fo,[.37,5.46,.04],[.39,5.8,.04],.04,bronze);cyl(fo,.39,5.9,.04,.1,.2,bronze,.04);
  for(const s of [-1,1]){const wing=mesh(fo,new T.SphereGeometry(1,8,6),bronze,s*.31,5.02,-.13);wing.scale.set(.13,.61,.055);wing.rotation.z=s*-.65;}
  // Short runs of ordinary housing give the square its scale. Parcel widths and
  // floor rhythm follow the archive views; individual rear elevations are schematic.
  const walls=[material('#916b53',true),material('#9e7f61',true),material('#aa9980'),material('#825c49',true)];
  for(const row of meta.houseRows||[]){
   const h=part(g,row.x,row.z,row.angle||0),w=row.width,d=row.depth,high=row.height;
   b(h,0,high/2,0,w,high,d,walls[row.variant%walls.length]);hip(h,w+.15,d+.15,high,3.4);
   const f=part(h,0,d/2+.06);for(const y of [3.5,7.2,10.8,high])b(f,0,y,.08,w,.22,.27,stone);
   const bays=Math.max(2,Math.round(w/2.8));for(let i=0;i<bays;i++){const x=(i-(bays-1)/2)*w/(bays+.25);for(let y=5.2;y<high-1;y+=3.65){win(f,x,y,.12,1.25,2.2,wood);b(f,x,y+1.2,.22,1.5,.15,.2,stone);}if(i===0)b(f,x,1.6,.15,1.2,3,.12,wood);else win(f,x,1.9,.15,1.35,2.5,wood);}
   b(h,0,high+1.1,d/2-1.1,1.7,1.8,1.5,stone);win(h,0,high+1.1,d/2-.3,1.15,1.3,wood);
  }
 }
 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);
 const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
