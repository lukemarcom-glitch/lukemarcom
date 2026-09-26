import * as T from '../vendor/three.module.js';
// Exterior studies, simplified ornament; evidence and uncertainties live in catalog.json.
export function buildNieuweVijf(meta,{material,box,merge}) {
 const g=new T.Group(), stone=material('#c3bba5'),trim=material('#d7cfbd'),brick=material('#835b4b',true),roof=material('#515955'),tile=material('#805c48'),glass=material('#3e555a'),dark=material('#343b37'),copper=material('#657c6c'),gold=material('#b6a16b');
 const b=(o,x,y,z,w,h,d,m=stone)=>box(o,x,y,z,w,h,d,m);
 function face(o,pts,m){const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(pts.flat(),3));ge.setAttribute('uv',new T.Float32BufferAttribute(pts.flatMap(p=>[p[0]/5,p[1]/5]),2));ge.computeVertexNormals();o.add(new T.Mesh(ge,m));}
 function hip(o,w,d,h,r,m=roof){const a=[-w/2,h,-d/2],c=[w/2,h,-d/2],e=[w/2,h,d/2],f=[-w/2,h,d/2],u=w>d?[-(w-d)/2,h+r,0]:[0,h+r,-(d-w)/2],v=w>d?[(w-d)/2,h+r,0]:[0,h+r,(d-w)/2];if(w>d)face(o,[a,u,v,a,v,c,c,v,e,e,v,u,e,u,f,f,u,a],m);else face(o,[a,u,c,c,u,v,c,v,e,e,v,f,f,v,u,f,u,a],m);}
 function front(o,x,z,a=0){const f=new T.Group();f.position.set(x,0,z);f.rotation.y=a;o.add(f);return f;}
 function win(o,x,y,z,w=1.4,h=2.7){b(o,x,y,z,w+.22,h+.22,.12,trim);b(o,x,y,z+.09,w,h,.12,glass);b(o,x,y,z+.17,.08,h,.07,trim);b(o,x,y+.25,z+.17,w,.08,.07,trim);}
 function arch(o,x,y,z,w,h,m=glass){const s=new T.Shape(),r=w/2;s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();const a=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.14,bevelEnabled:false,curveSegments:10}),m);a.position.set(x,y,z);o.add(a);}
 function pointed(o,x,y,z,w,h,m=glass){const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r*1.6);s.quadraticCurveTo(r,h-r*.6,0,h);s.quadraticCurveTo(-r,h-r*.6,-r,h-r*1.6);s.closePath();const a=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.14,bevelEnabled:false,curveSegments:10}),m);a.position.set(x,y,z);o.add(a);}
 function cyl(o,x,y,z,r1,r2,h,m,n=16){const a=new T.Mesh(new T.CylinderGeometry(r1,r2,h,n),m);a.position.set(x,y,z);o.add(a);return a;}
 function ball(o,x,y,z,r,m){const a=new T.Mesh(new T.SphereGeometry(r,12,8),m);a.position.set(x,y,z);o.add(a);return a;}
 function stepped(o,w,y,z,h){for(let i=0;i<5;i++)b(o,0,y+(i+.5)*h/5,z,w*(1-i*.18),h/5,.6,stone);}
 if(meta.id==='stadhuis'){
  // RCE: 86 by 106 metres, four wings, central court, 71.5 m tower.
  for(const z of [-45,45]){const wing=front(g,0,z);b(wing,0,11,0,86,22,16);hip(wing,86.5,16.5,22,10);}
  for(const x of [-35,35]){const wing=front(g,x,0);b(wing,0,11,0,16,22,74);hip(wing,16.5,74.5,22,10);}
  b(g,0,10,20,70,20,12,brick);hip(front(g,0,20),70,12,20,7);b(g,0,10,-20,70,20,12,brick);hip(front(g,0,-20),70,12,20,7);
  b(g,0,.2,0,53,.4,28,material('#829076'));b(g,0,.45,0,7,.2,25,stone);cyl(g,0,.7,0,3.2,3.2,.7,stone);cyl(g,0,1.15,0,2.7,2.7,.1,material('#64797a'));cyl(g,0,2,0,.6,.8,2,stone);
  for(const [x,z,a,w,n] of [[0,53.1,0,86,19],[0,-53.1,Math.PI,86,19],[43.1,0,Math.PI/2,106,25],[-43.1,0,-Math.PI/2,106,25]]){
   const f=front(g,x,z,a);b(f,0,1,.03,w,2,.25,roof);for(const h of [7.5,15,21.8])b(f,0,h,.16,w,.4,.4,trim);
   for(let i=0;i<n;i++){const xx=(i-(n-1)/2)*(w-6)/(n-1);if(a===0&&Math.abs(xx)<12)continue;for(const y of [4.8,11.2,18.3])win(f,xx,y,.14,1.8,y===11.2?4:2.7);}
  }
  for(const x of [-35,35]){const f=front(g,x,46);b(f,0,12,0,16,24,18);hip(f,17,19,24,14);b(f,0,39,0,.35,3,.35,trim);for(const xx of [-5,0,5])for(const y of [5,12,19])win(f,xx,y,9.15,2,3.4);}
  for(const x of [-25,-17,17,25]){b(g,x,25.5,48.2,3.3,5,2,stone);arch(g,x,23.7,49.3,2.1,3.7,glass);cyl(g,x,28.2,48.5,.1,1.5,1.6,stone,8);}
  for(const x of [-35,35]){cyl(g,x,39.3,46,1.45,1.45,3,stone,8);for(const a of [0,Math.PI/2,Math.PI,3*Math.PI/2]){const q=front(g,x+Math.sin(a)*1.38,46+Math.cos(a)*1.38,a);arch(q,0,38.3,.05,.7,2,dark);}const dome=ball(g,x,41,46,1.6,roof);dome.scale.y=.55;b(g,x,42.2,46,.15,1.8,.15,trim);}
  const f=front(g,0,48);b(f,0,12,0,28,24,12);hip(f,29,13,24,10);stepped(f,17,24,6.4,8);
  for(const x of [-8,-4,0,4,8]){arch(f,x,9,6.2,2.6,5);win(f,x,20,6.2,2.3,3);}
  for(const x of [-6,0,6]){arch(f,x,.5,6.2,4,6.5,dark);}
  b(f,0,8,7.6,23,.7,4,trim);for(let x=-11;x<=11;x+=1)b(f,x,9,9.4,.18,1.6,.18,stone);b(f,0,9.8,9.4,23,.2,.3,trim);
  for(let i=0;i<6;i++)b(f,0,.15+i*.18,10-i*.5,24,.3+i*.36,1.1,stone);
  // Square tower, octagonal lantern and copper clock crown behind front gable.
  const t=front(g,0,24);b(t,0,31,0,12,28,12);for(const y of [36,44])b(t,0,y,0,13,.7,13,trim);
  cyl(t,0,48,0,5.4,6,8,stone,8);for(let i=0;i<8;i++){const a=i*Math.PI/4,p=front(t,Math.sin(a)*5.3,Math.cos(a)*5.3,a);arch(p,0,45,.05,2.3,5,dark);}
  cyl(t,0,53,0,5.8,6.2,2,trim,8);cyl(t,0,57,0,4.3,5.8,6,copper,8);
  for(let i=0;i<4;i++){const f=front(t,Math.sin(i*Math.PI/2)*4.9,Math.cos(i*Math.PI/2)*4.9,i*Math.PI/2);const d=new T.Mesh(new T.CircleGeometry(1.8,24),dark);d.position.set(0,56.8,.1);f.add(d);b(f,0,57.5,.18,.09,1.4,.08,gold);const hand=b(f,.55,56.9,.18,1.2,.09,.08,gold);hand.rotation.z=.35;}
  cyl(t,0,62,0,2.3,4.3,4,copper,8);cyl(t,0,65,0,.8,2.3,2,copper,8);b(t,0,68.1,0,.4,4.2,.4,gold);ball(t,0,70.8,0,.55,gold);b(t,0,69,0,2.5,.35,.25,gold);
 } else if(meta.id==='hoofdpostkantoor'){
  // Fifteen facade axes, three arched entrances and original pitched roof profile.
  for(const z of [-34,34]){const f=front(g,0,z);b(f,0,11.5,0,70,23,17);if(z>0)hip(f,70.6,17.6,23,10,tile);}
  for(const x of [-27,27]){const f=front(g,x,0);b(f,0,11.5,0,16,23,51,brick);hip(f,16.6,51.6,23,10,tile);}
  // Light-admitting roof over the central public hall; rear yard stays open.
  b(g,0,9,8,38,18,34,stone);
  for(let i=0;i<12;i++){const a=i*Math.PI/12,c=(i+1)*Math.PI/12;face(g,[[-19*Math.cos(a),18+6*Math.sin(a),-9],[-19*Math.cos(c),18+6*Math.sin(c),-9],[-19*Math.cos(c),18+6*Math.sin(c),25],[-19*Math.cos(a),18+6*Math.sin(a),-9],[-19*Math.cos(c),18+6*Math.sin(c),25],[-19*Math.cos(a),18+6*Math.sin(a),25]],glass);}
  for(let z=-9;z<=25;z+=4)for(let i=0;i<12;i++){const a=i*Math.PI/12,c=(i+1)*Math.PI/12,p=new T.Vector3(-19*Math.cos(a),18+6*Math.sin(a),z),q=new T.Vector3(-19*Math.cos(c),18+6*Math.sin(c),z),m=new T.Mesh(new T.CylinderGeometry(.08,.08,p.distanceTo(q),4),trim);m.position.copy(p).add(q).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),q.sub(p).normalize());g.add(m);}
  for(const [x,z,a,w] of [[0,42.6,0,70],[35.1,0,Math.PI/2,85],[-35.1,0,-Math.PI/2,85]]){
   const f=front(g,x,z,a);for(const y of [6.8,19,23])b(f,0,y,.16,w,.5,.5,trim);
   for(let i=0;i<15;i++){const xx=(i-7)*(w-5)/14;if(a===0&&Math.abs(i-7)<=1){arch(f,xx,.4,.2,3.6,6,dark);}else win(f,xx,3.7,.12,2.3,4.2);
    for(const dx of [-.8,0,.8])win(f,xx+dx,12.8,.12,.55,9.5);
    win(f,xx,21,.12,1.5,1.7);if(i<14)b(f,xx+(w-5)/28,13,.2,.5,12.3,.5,stone);
    arch(f,xx,24.1,-.7,2,2.3,trim);arch(f,xx,24.3,-.5,1.5,1.9,glass);
   }
  }
  for(let i=0;i<5;i++)b(g,0,.15+i*.18,45-i*.4,18,.3+i*.36,1,stone);
 }
 if(meta.id==='molen-de-noord'){
  const plaster=material('#a69b85',true),wood=material('#514e3e');
  // Round tapering masonry tower and open timber stage, approx. 30 m to cap.
  cyl(g,0,13,0,3.35,5.5,26,plaster,32);cyl(g,0,16.2,0,8.2,8.2,.45,wood,32);
  for(let i=0;i<24;i++){const a=i*Math.PI/12,x=Math.sin(a),z=Math.cos(a);b(g,x*8,16.9,z*8,.1,1.2,.1,wood);const p=new T.Vector3(x*4.3,10,z*4.3),q=new T.Vector3(x*8,16,z*8),br=new T.Mesh(new T.CylinderGeometry(.12,.12,p.distanceTo(q),4),wood);br.position.copy(p).add(q).multiplyScalar(.5);br.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),q.sub(p).normalize());g.add(br);}
  const rail=new T.Mesh(new T.TorusGeometry(8,.09,4,40),wood);rail.rotation.x=Math.PI/2;rail.position.y=17.6;g.add(rail);
  for(const a of [0,Math.PI/2,Math.PI,3*Math.PI/2])for(const y of [5,10,14,20,24]){const r=5.5-y*2.15/26,f=front(g,Math.sin(a)*r,Math.cos(a)*r,a);win(f,0,y,.06,.85,1.45);}
  arch(g,0,0,5.5,2.4,3.8,dark);cyl(g,0,27,0,2.9,3.5,2,dark,24);const cap=ball(g,0,28.3,0,3.3,dark);cap.scale.y=.6;
  // Static lattice sails; no simulated historical wind direction.
  const sails=front(g,0,4.25);sails.position.y=27.7;sails.rotation.z=.18;
  for(let i=0;i<4;i++){const arm=new T.Group();arm.rotation.z=i*Math.PI/2;sails.add(arm);b(arm,0,6.7,0,.3,13.4,.3,wood);for(const x of [.3,1,1.7,2.4])b(arm,x,8.6,.08,.065,9,.09,wood);for(let y=4.2;y<13.2;y+=.6)b(arm,1.35,y,.09,2.5,.075,.12,wood);}
  cyl(g,0,27.7,4.2,.6,.6,.8,wood).rotation.x=Math.PI/2;
 }else if(meta.id==='pschorr'){
  const warm=material('#8b775e',true),canvas=material('#d5ceba'),stripe=material('#758073');
  b(g,0,8,0,40,16,28,warm);b(g,0,16.2,0,40.7,.45,28.6,roof);b(g,0,16.8,13.8,40,.8,.5,warm);b(g,0,18,13.8,9,3,.7,warm);
  for(const y of [4.8,9.8,14.1])b(g,0,y,14.2,40,.25,.35,stone);
  for(const x of [-16,-8,0,8,16]){
   b(g,x,2.3,14.1,6.4,4.1,.15,glass);for(const dx of [-2.1,0,2.1])b(g,x+dx,2.3,14.25,.15,4.2,.12,stone);
   for(const y of [7.2,11.7]){win(g,x,y,14.1,5.2,2.5);const aw=b(g,x,y+1.7,15,5.9,.12,1.9,canvas);aw.rotation.x=.3;for(let xx=-2.8;xx<2.9;xx+=.4){const s=b(g,x+xx,y+1.73,15,.12,.13,1.92,stripe);s.rotation.x=.3;}}
   win(g,x,15.4,14.1,3,1.1);const aw=b(g,x,4.6,15,7.4,.2,2.2,dark);aw.rotation.x=.22;
  }
  for(const x of [-19,-12,-4,4,12,19]){b(g,x,10,14.3,.45,11,.35,stone);b(g,x,14.7,14.4,.9,.4,.4,trim);}
  // Projecting central entrance canopy and parapet rather than a pitched palace roof.
  b(g,0,2.1,15.2,3,4.2,2.4,dark);hip(front(g,0,15.5),6,4,4.3,1.3,roof);
  for(const [x,a] of [[20.1,Math.PI/2],[-20.1,-Math.PI/2]]){const f=front(g,x,0,a);for(const wx of [-10,-5,0,5,10])for(const y of [3,7.2,11.7])win(f,wx,y,.1,2.5,2.4);}
 }else if(meta.id==='zuiderkerk'){
  const wall=material('#a19985'),spire=material('#505a57');
  // Eight-sided church body with four shallow projecting arms and a central spire.
  cyl(g,0,8.5,0,14.4,14.4,17,wall,8).rotation.y=Math.PI/8;
  cyl(g,0,22,0,5,15,10,roof,8).rotation.y=Math.PI/8;
  for(let i=0;i<8;i++){
   const a=i*Math.PI/4,f=front(g,Math.sin(a)*13.35,Math.cos(a)*13.35,a);
   pointed(f,0,4,.12,4.7,10.4,trim);pointed(f,0,4.25,.3,4.1,9.6,glass);b(f,0,9,.5,.13,9.1,.12,trim);b(f,0,7,.5,4,.12,.12,trim);
   for(const x of [-4.5,4.5]){b(f,x,9,.05,.65,18,.8,wall);cyl(f,x,19,.1,0,.55,3,trim,4);}
   b(f,0,17,.2,10.9,.45,.5,trim);
   if(i%2===0){const wing=front(g,Math.sin(a)*14,Math.cos(a)*14,a);b(wing,0,6,1,8.5,12,5,wall);face(wing,[[-4.25,12,3.6],[4.25,12,3.6],[0,19,3.6]],wall);face(wing,[[-4.5,12,-2],[0,19,-2],[0,19,3.7],[-4.5,12,-2],[0,19,3.7],[-4.5,12,3.7],[0,19,-2],[4.5,12,-2],[4.5,12,3.7],[0,19,-2],[4.5,12,3.7],[0,19,3.7]],roof);pointed(wing,0,1,3.7,4,9,dark);}
  }
  cyl(g,0,28,0,4.6,5.1,2,trim,8);cyl(g,0,33,0,4.4,4.4,8,wall,8);
  for(let i=0;i<8;i++){const a=i*Math.PI/4,f=front(g,Math.sin(a)*4.1,Math.cos(a)*4.1,a);pointed(f,0,29.3,.2,2.4,6.5,dark);b(f,0,32,.4,.12,5.7,.1,trim);for(const x of [-1.65,1.65])b(f,x,33,.1,.3,9,.3,trim);cyl(f,0,38,.1,0,.35,3,trim,4);}
  cyl(g,0,37,0,4.8,4.8,.6,trim,8);cyl(g,0,43,0,.25,4.2,12,spire,8);b(g,0,50,0,.14,2.6,.14,dark);b(g,0,50.3,0,1.1,.12,.12,dark);
 }

 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
