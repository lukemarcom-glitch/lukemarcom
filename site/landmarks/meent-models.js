import * as T from '../vendor/three.module.js';

// 1939 exterior studies. Minerva dimensions checked against surviving BAG massing;
// Rosalia outline read from the historical map. Neither is a surveyed restoration.
export function buildMeent(meta,{material,box,merge}){
 const g=new T.Group(),brick=material('#957356',true),churchBrick=material('#96795f',true),trim=material('#d5cfbc'),glass=material('#526a70'),dark=material('#3f4443'),roof=material('#625e56',true),paving=material('#b0a995',true);
 const b=(o,x,y,z,w,h,d,m=brick,a=0)=>box(o,x,y,z,w,h,d,m,a);
 const solid=(o,points,base,height,m)=>{const shape=new T.Shape(points.map(([x,z])=>new T.Vector2(x,-z)));const geom=new T.ExtrudeGeometry(shape,{depth:height,bevelEnabled:false,curveSegments:16});geom.rotateX(-Math.PI/2);const mesh=new T.Mesh(geom,m);mesh.position.y=base;o.add(mesh);return mesh;};
 function plane(o,pts,mat){const geom=new T.BufferGeometry();geom.setAttribute('position',new T.Float32BufferAttribute(pts.flat(),3));geom.setAttribute('uv',new T.Float32BufferAttribute(pts.flatMap(p=>[p[0]/10,p[2]/10]),2));geom.computeVertexNormals();o.add(new T.Mesh(geom,mat));}
 function window(o,x,y,z,w,h){b(o,x,y,z,w+.16,h+.16,.15,trim);b(o,x,y,z+.1,w,h,.12,glass);b(o,x,y,z+.18,.065,h,.06,trim);b(o,x,y-h*.22,z+.18,w,.06,.06,trim);}
 function arch(o,x,bottom,z,w,h,m=glass){const r=w/2,sh=new T.Shape();sh.moveTo(-r,0);sh.lineTo(r,0);sh.lineTo(r,h-r);sh.absarc(0,h-r,r,0,Math.PI,false);sh.lineTo(-r,0);const mesh=new T.Mesh(new T.ExtrudeGeometry(sh,{depth:.14,bevelEnabled:false,curveSegments:10}),m);mesh.position.set(x,bottom,z);o.add(mesh);}
 if(meta.id==='minervahuis-i'){
  // Rounded north-west corner continues through window ribbons. Local x follows Meent.
  const outline=[[-8.6,-7.05],[13.1,-7.05],[13.1,8.7],[-12.1,6.8],[-11,-4.7]];
  const curved=[...outline];for(let i=1;i<=12;i++){const a=Math.PI-i*Math.PI/24;curved.push([-8.6+2.4*Math.cos(a),-4.65-2.4*Math.sin(a)]);}
  solid(g,curved,0,20.8,brick);
  // Lower Rodezand wing: skewed to the street; its historical three upper floors.
  const wing=[[-12.1,6.2],[-4.6,8.7],[-4.6,19],[-10.8,17.5],[-16.2,16.3]];
  solid(g,wing,0,14.45,brick);
  b(g,2,2.05,10.5,18,4.1,11,brick);
  // Set-back upper storey was already visible in the 1938 photograph.
  b(g,1.8,22.65,1.2,22.4,3.7,10.7,brick);b(g,1.8,24.55,1.2,22.8,.22,11.1,trim);
  const front=new T.Group();front.position.z=-7.12;front.rotation.y=Math.PI;g.add(front);
  for(const y of [6.3,10.15,14,17.85]){
   b(front,-2.25,y,.07,21.7,2.5,.15,glass);
   b(front,-2.25,y-1.3,.15,21.8,.18,.28,trim);
   for(let x=-13;x<8.5;x+=1.35){b(front,x,y,.21,.065,2.55,.09,trim);b(front,x,y-.65,.2,1.35,.07,.08,trim);}
  }
  b(front,-2.25,2.1,.1,21.7,3.95,.18,glass);
  for(let x=-13;x<9;x+=4.7)b(front,x,2.1,.21,.38,4.2,.3,trim);
  b(front,-2.25,4.25,.5,22,.27,1.2,trim);
  for(let x=-11;x<8;x+=1.4)window(front,x,22.45,-2.2,1.25,1.8);
  // Curved glazing and parapet trim; narrow chords keep the model lightweight.
  for(let i=0;i<12;i++){
   const a=Math.PI+(i+.5)*Math.PI/24,x=-8.6+2.43*Math.cos(a),z=-4.65+2.43*Math.sin(a),seg=new T.Group();seg.position.set(x,0,z);seg.rotation.y=Math.PI/2-a;g.add(seg);
   for(const y of [6.3,10.15,14,17.85]){b(seg,0,y,0,.33,2.5,.13,glass);b(seg,0,y-1.3,.1,.34,.18,.18,trim);if(i%3===0)b(seg,0,y,.1,.055,2.55,.08,trim);}
   b(seg,0,2.1,0,.33,3.95,.13,glass);b(seg,0,4.25,.15,.34,.27,.7,trim);
  }
  // Rodezand elevations follow the skewed west boundary.
  const side=new T.Group();side.position.set(-13.5,0,5.75);side.rotation.y=-Math.PI/2-.22;g.add(side);
  for(const y of [6.3,10.15,13]){
   const h=y===13?1.5:2.5;b(side,0,y,0,21.4,h,.16,glass);b(side,0,y-h/2-.08,.16,21.4,.18,.25,trim);
   for(let x=-10.4;x<=10.4;x+=1.5)b(side,x,y,.15,.075,h,.09,trim);
  }
  b(side,0,2.1,0,21.4,3.9,.18,glass);for(let x=-10.4;x<11;x+=4.2)b(side,x,2.1,.12,.35,4,.3,trim);
  b(side,0,4.25,.35,21.4,.26,.9,trim);b(side,0,14.4,.2,21.4,.23,.6,trim);
  // Plain side and rear openings are interpreted; no post-1940 Sandeman branding.
  const back=new T.Group();back.position.set(2,0,8.77);g.add(back);for(const y of [6.5,10.4,14.2,18])for(let x=-6;x<=8;x+=3.5)window(back,x,y,.1,1.3,2.1);
  b(g,3,20.9,1,18,.15,10,dark);b(g,8,25,3,.8,1.3,.8,brick);
 }else{
  // Long hall parallel to Meent, with a steep original roof behind the 1935 front.
  b(g,0,7.4,0,36,14.8,17.2,churchBrick);
  const A=[-18.2,14.8,-8.9],B=[18.2,14.8,-8.9],C=[18.2,14.8,8.9],D=[-18.2,14.8,8.9],E=[-17.2,24,0],F=[17.2,24,0];
  plane(g,[A,E,F,A,F,B,B,F,C,C,F,E,C,E,D,D,E,A],roof);
  for(const z of [-8.75,8.75])b(g,0,14.75,z,36.6,.3,.5,trim);
  for(const sign of [-1,1]){const long=new T.Group();long.position.z=sign*8.65;long.rotation.y=sign<0?Math.PI:0;g.add(long);
   for(let x=-12;x<=12;x+=4.8){arch(long,x,5.3,.03,2.15,7,trim);arch(long,x,5.45,.2,1.8,6.65,glass);b(long,x,8.6,.38,.09,6.3,.08,trim);b(long,x,9,.38,1.8,.08,.08,trim);}
  }
  // Buskens entrance screen faces Rodezand: paired groups of arches and tall windows.
  const front=new T.Group();front.position.x=-18.18;front.rotation.y=-Math.PI/2;g.add(front);
  b(front,0,7.4,0,17.4,14.8,.65,churchBrick);
  for(const x of [-5.6,-4.25,-2.9,2.9,4.25,5.6]){arch(front,x,1.15,.37,.86,2.8,trim);arch(front,x,1.24,.53,.64,2.6,glass);}
  arch(front,0,.1,.4,2.2,3.7,trim);arch(front,0,.16,.57,1.88,3.4,dark);b(front,0,1.5,.8,.06,2.7,.08,trim);
  for(let x=-5.7;x<=5.8;x+=1.9){arch(front,x,8.3,.39,1.25,5.2,trim);arch(front,x,8.5,.57,1.01,4.8,glass);window(front,x,6.65,.5,1.01,2.2);b(front,x,10.4,.78,.06,4.5,.06,trim);}
  b(front,0,5.32,.65,13.2,.17,.45,trim);b(front,0,14.7,.7,17.9,.35,1.5,trim);
  // Slightly higher left gabled stair bay and opposite chimney are visible in 1937.
  b(front,-7.4,8.1,0,2.6,16.2,2.4,churchBrick);
  solid(front,[[-8.7,-1.2],[-6.1,-1.2],[-6.1,1.2],[-8.7,1.2]],16.2,.3,churchBrick);
  plane(front,[[-8.7,16.4,1.22],[-7.4,18.8,1.22],[-6.1,16.4,1.22],[-8.7,16.4,1.22],[-6.1,16.4,1.22],[-6.1,16.1,1.22]],churchBrick);
  for(const y of [5.6,10,15.4])window(front,-7.4,y,1.26,.58,1.05);
  b(front,7.4,17.4,-.1,.8,5.2,.8,churchBrick);b(front,7.4,20.1,-.1,1,.25,1,dark);
  // A simple neutral plinth marks the saint's sculpture rather than inventing a face.
  b(front,0,4.2,.9,.6,.2,.6,trim);b(front,0,4.95,.95,.32,1.3,.28,trim);
  for(const side of [-1,1])for(let x=-10;x<=10;x+=10){b(g,x,17.2,side*6.5,1.8,1.8,1.1,churchBrick);const dorm=new T.Group();dorm.position.set(x,0,side*7.08);dorm.rotation.y=side<0?Math.PI:0;g.add(dorm);window(dorm,0,17.2,.1,1.2,1.15);}
 }
 g.rotation.y=meta.angle;g.position.set(meta.center[0],.35,-meta.center[1]);const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
