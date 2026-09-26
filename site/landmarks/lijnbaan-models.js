import * as T from '../vendor/three.module.js';

// Simplified exterior studies: silhouettes and openings from archive photographs.
// Unsurveyed dimensions and concealed elevations remain explicitly approximate.
export function buildLijnbaan(meta,{material,box,merge}){
 const g=new T.Group(),brick=material('#87614b',true),stone=material('#c8bda5'),glass=material('#4c6267'),roof=material('#555954'),dark=material('#343933'),paving=material('#ada18b',true);
 const b=(o,x,y,z,w,h,d,m=brick)=>box(o,x,y,z,w,h,d,m);
 function plane(o,pts,m){const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(pts.flat(),3));ge.setAttribute('uv',new T.Float32BufferAttribute(pts.flatMap(p=>[p[0]/8,p[1]/8]),2));ge.computeVertexNormals();o.add(new T.Mesh(ge,m));}
 function window(o,x,y,z,w=1.35,h=2.1){b(o,x,y,z,w+.2,h+.2,.13,stone);b(o,x,y,z+.09,w,h,.13,glass);b(o,x,y,z+.18,.07,h,.07,stone);b(o,x,y-h*.14,z+.18,w,.075,.07,stone);}
 function arch(o,x,y,z,w,h,mat){const r=w/2,sh=new T.Shape();sh.moveTo(-r,0);sh.lineTo(r,0);sh.lineTo(r,h-r);sh.absarc(0,h-r,r,0,Math.PI,false);sh.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(sh,{depth:.12,bevelEnabled:false,curveSegments:10}),mat);mesh.position.set(x,y,z);o.add(mesh);}
 function hip(o,x,z,w,d,h,r){const a=[x-w/2,h,z-d/2],bb=[x+w/2,h,z-d/2],c=[x+w/2,h,z+d/2],dd=[x-w/2,h,z+d/2],e=[x-w/2+2,h+r,z],f=[x+w/2-2,h+r,z];plane(o,[a,e,f,a,f,bb,bb,f,c,c,f,e,c,e,dd,dd,e,a],roof);}
 if(meta.id==='sint-lucia'){
  // Open courtyard, street wing and perpendicular school/convent wing.
  b(g,0,.08,0,42,.16,58,paving);
  b(g,0,10.2,23,42,20.4,12);hip(g,0,23,42.6,12.6,20.4,4.1);
  b(g,-15,10.5,-5,12,21,44);hip(g,-15,-5,12.6,44.5,21,3.2);
  b(g,9,7.4,-23,24,14.8,10);b(g,9,14.9,-23,24.4,.3,10.4,stone);
  // Chapel volume at the inside of the wing; apse protrudes into the small court.
  b(g,-3,7.8,-6,12,15.6,21);hip(g,-3,-6,12.4,21.4,15.6,3.1);
  const apse=new T.Mesh(new T.CylinderGeometry(4,4,10,8),brick);apse.position.set(4,6.5,-6);g.add(apse);
  const cap=new T.Mesh(new T.ConeGeometry(4.4,3.4,8),roof);cap.position.set(4,13.2,-6);g.add(cap);
  b(g,-10,17,-17,3.8,16,4.1);b(g,-10,25.2,-17,4.2,.4,4.5,stone);
  const front=new T.Group();front.position.z=29.1;g.add(front);
  for(let x=-18;x<=18;x+=3.6)for(const y of [3,7.5,12,16.6]){if(Math.abs(x)<2&&y<9)continue;window(front,x,y,.05,1.45,2.25);}
  for(const x of [-19.8,-9,9,19.8]){b(front,x,10.5,.23,.7,21,.5);b(front,x,17.8,.4,1.1,.8,.7);}
  for(const y of [5.1,9.5,14,19.6])b(front,0,y,.2,42,.18,.4,stone);
  arch(front,0,.1,.36,4.9,5.4,stone);arch(front,0,.12,.51,4.2,4.9,dark);b(front,0,1.85,.67,.12,3.4,.1,stone);
  // Radiating brick voussoirs and three narrow tapered lights above the entrance.
  for(let i=0;i<=10;i++){let a=i*Math.PI/10,o=b(front,Math.cos(a)*2.8,2.75+Math.sin(a)*2.8,.63,.52,1,.34);o.rotation.z=a-Math.PI/2;}
  for(const x of [-1.8,0,1.8]){const pts=[[x-.52,6.2,.46],[x+.52,6.2,.46],[x+.34,8.8,.46],[x-.34,8.8,.46]];plane(front,[pts[0],pts[1],pts[2],pts[0],pts[2],pts[3]],glass);b(front,x,6.16,.48,1.2,.13,.2,stone);}
  for(let x=-16;x<=16;x+=5.3){b(g,x,21.8,28,1.6,2.4,1.3,stone);window(g,x,21.8,28.72,1.2,1.8);}
  // West street elevation; inward elevations use the documented courtyard rhythm.
  for(const side of [-1,1]){let f=new T.Group();f.position.set(side<0?-21.1:-8.9,0,-5);f.rotation.y=side*Math.PI/2;g.add(f);for(let x=-19;x<=19;x+=3.8)for(const y of [3,7.5,12,16.6])window(f,x,y,.02,1.35,2.2);}
  const court=new T.Group();court.position.z=16.9;court.rotation.y=Math.PI;g.add(court);for(let x=-17;x<=18;x+=3.6)for(const y of [3,7.5,12,16.6])window(court,x,y,.02,1.4,2.2);
  for(const x of [-3,2,7,12,17]){window(g,x,4,-17.9,1.4,2.1);window(g,x,9,-17.9,1.4,2.1);}
 }else{
  // The post-1926 frontage, not the more ornate facade in the 1890 photographs.
  b(g,-7,7.4,-4,19,14.8,40);hip(g,-7,-5,19.5,37,14.8,3.1);
  const front=new T.Group();front.position.set(-14,0,16.25);g.add(front);
  b(front,7,8,.05,19.4,16,.75);b(front,7,16.1,.05,11,.65,.8);
  for(const x of [-2.5,16.5]){b(front,x,8.3,.5,.7,16.6,.65);b(front,x,16.7,.5,.85,.25,.8,stone);}
  for(const y of [10.2,14])for(let x=1;x<=13;x+=3)window(front,x,y,.55,2.1,1.65);
  for(const x of [0,4.7,9.3,14]){b(front,x,2.1,.57,3.7,3.7,.15,dark);b(front,x,2.1,.7,.07,3.6,.05,stone);}
  for(const x of [-2.1,2.5,7,11.6,16.1])b(front,x,2.2,.65,.7,4.4,.65,stone);
  b(front,7,4.45,1.35,20,.35,2.5,roof);b(front,7,5.8,.6,15,2,.2,dark);
  for(const x of [-.2,14.2])b(front,x,7,.6,.28,4.8,.35,stone);
  // TIVOLI lettering as economical geometric strokes, readable at building scale.
  const glyphs={T:[[0,1,1,1],[.5,0,.5,1]],I:[[.5,0,.5,1]],V:[[0,1,.5,0],[.5,0,1,1]],O:[[0,0,1,0],[1,0,1,1],[1,1,0,1],[0,1,0,0]],L:[[0,1,0,0],[0,0,1,0]]};
  [...'TIVOLI'].forEach((ch,i)=>{for(const [x1,y1,x2,y2]of glyphs[ch]){let dx=(x2-x1)*1.3,dy=(y2-y1)*1.4;const mesh=b(front,1.3+i*2.1+(x1+x2)*.65,7.75+(y1+y2)*.7,.87,Math.hypot(dx,dy)+.1,.16,.18,stone);mesh.rotation.z=Math.atan2(dy,dx);}});
  // Adjacent cafe-restaurant: low arched frontage and canopy, visible in 1934.
  b(g,11,5,-1,17,10,34,stone);hip(g,11,-1,17.5,34.5,10,3);
  const cafe=new T.Group();cafe.position.set(11,0,16.3);g.add(cafe);
  for(const x of [-5.3,0,5.3]){arch(cafe,x,5,.1,4.8,4.6,brick);arch(cafe,x,5.1,.24,4.3,4.25,glass);for(let i=0;i<=4;i++){let a=i*Math.PI/4;const v=b(cafe,x+Math.cos(a)*1.1,7.15+Math.sin(a)*1.1,.4,2.1,.07,.07,stone);v.rotation.z=a;}}
  for(let x=-7.5;x<8;x+=3){b(cafe,x,2.2,.1,2.65,4.2,.13,glass);b(cafe,x+1.4,2.2,.2,.24,4.5,.3,brick);}
  b(cafe,0,4.65,1.4,17.6,.3,2.8,roof);b(cafe,0,10,.15,17.8,.3,.55,stone);
  // Side openings are schematic, pending measured plans.
  const side=new T.Group();side.position.set(-16.55,0,-5);side.rotation.y=-Math.PI/2;g.add(side);for(let x=-16;x<=16;x+=5.5)for(const y of [4,9])window(side,x,y,0,1.2,2);
 }
 g.rotation.y=meta.angle;g.position.set(meta.center[0],.35,-meta.center[1]);const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
