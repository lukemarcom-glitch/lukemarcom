import {contextOccupied} from './context-clearance.js?v=22';
import * as T from '../vendor/three.module.js';
// Lightweight exterior interpretations. Dimensions, hidden elevations and small ornaments
// are approximate; the catalog keeps source dates and uncertainty alongside the models.
export function buildUitbreiding(meta,{material,box,merge}) {
 const g=new T.Group(),stone=material('#cdc8b9'),white=material('#dfddd2'),gray=material('#aaa9a2'),brick=material('#805b49',true),roof=material('#505650'),glass=material('#40585c'),dark=material('#303c35'),paving=material('#a49a87',true);
 const b=(o,x,y,z,w,h,d,m=stone)=>box(o,x,y,z,w,h,d,m);
 function face(o,pts,m){const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(pts.flat(),3));ge.setAttribute('uv',new T.Float32BufferAttribute(pts.flatMap(p=>[p[0]/5,p[1]/5]),2));ge.computeVertexNormals();o.add(new T.Mesh(ge,m));}
 function hip(o,w,d,h,r,m=roof){const a=[-w/2,h,-d/2],c=[w/2,h,-d/2],e=[w/2,h,d/2],f=[-w/2,h,d/2],u=[-w/2+Math.min(w,d)*.32,h+r,0],v=[w/2-Math.min(w,d)*.32,h+r,0];face(o,[a,u,v,a,v,c,c,v,e,e,v,u,e,u,f,f,u,a],m);}
 function win(o,x,y,z,w=1.4,h=2.3,frame=stone){b(o,x,y,z,w+.2,h+.2,.12,frame);b(o,x,y,z+.09,w,h,.12,glass);b(o,x,y,z+.18,.075,h,.08,frame);b(o,x,y+.1,z+.18,w,.075,.08,frame);b(o,x,y-h/2-.16,z+.12,w+.3,.15,.32,frame);}
 function arch(o,x,y,z,w,h,mat){const s=new T.Shape(),r=w/2;s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.13,bevelEnabled:false,curveSegments:12}),mat);mesh.position.set(x,y,z);o.add(mesh);}
 function front(o,x,z,a=0){const f=new T.Group();f.position.set(x,0,z);f.rotation.y=a;o.add(f);return f;}
 function pediment(o,w,y,z,r,mat=stone){face(o,[[-w/2,y,z],[w/2,y,z],[0,y+r,z]],mat);b(o,0,y,z,w+.4,.3,.45,stone);for(const s of [-1,1]){const beam=b(o,s*w/4,y+r/2,z+.08,Math.hypot(w/2,r),.3,.4,stone);beam.rotation.z=-s*Math.atan2(r,w/2);}}
 function chimney(o,x,z,y){b(o,x,y,z,.9,3,1.1,brick);b(o,x,y+1.5,z,1.2,.25,1.4,stone);}
 if(meta.id==='witte-huis'){
  const w=19,d=20;
  b(g,0,16.6,0,w,33.2,d,white);b(g,0,2.5,0,w+.25,5,d+.25,stone);
  for(const y of [5.1,9,16.8,24.5,32.8])b(g,0,y,0,w+.6,.35,d+.6,stone);
  for(const [x,z,a] of [[0,10.13,0],[9.63,0,Math.PI/2],[0,-10.13,Math.PI],[-9.63,0,-Math.PI/2]]){
   const f=front(g,x,z,a);
   for(let i=-2;i<=2;i++){
    arch(f,i*3.4,.45,.04,2.5,4.3,glass);
    for(let level=0;level<7;level++)win(f,i*3.4,7+level*3.85,.04,1.6,2.55,white);
   }
   for(const x of [-8.8,-5.3,5.3,8.8])b(f,x,19,.2,.32,27,.35,stone);
   // Broad white roof gable and round light are defining archive-photo features.
   pediment(f,12,33,.4,7.1,white);
   const round=new T.Mesh(new T.CircleGeometry(1.15,20),glass);round.position.set(0,35.8,.6);f.add(round);
   const rim=new T.Mesh(new T.TorusGeometry(1.3,.16,6,24),stone);rim.position.set(0,35.8,.62);f.add(rim);
   for(const wx of [-3.4,0,3.4]){arch(f,wx,27.7,.25,2.5,4.8,white);arch(f,wx,27.9,.42,1.9,4.3,glass);b(f,wx,30,.6,.09,4.1,.1,white);}
   for(const wx of [-8.8,8.8])b(f,wx,19.5,.4,.55,27,.55,stone);
   for(const i of [-2,2]){b(f,i*3.4,35.2,-.7,2.3,3,1.5,white);win(f,i*3.4,35.2,.15,1.4,1.8);pediment(f,2.6,36.8,.2,1.1);}
  }
  // Steep mansard then flat observation platform; roof advertisements vary by year.
  const bot=33.3,top=41.3;
  for(const s of [-1,1]){
   face(g,[[-10,bot,s*10.5],[10,bot,s*10.5],[7,top,s*7.3],[-10,bot,s*10.5],[7,top,s*7.3],[-7,top,s*7.3]],roof);
   face(g,[[s*10,bot,-10.5],[s*10,bot,10.5],[s*7,top,7.3],[s*10,bot,-10.5],[s*7,top,7.3],[s*7,top,-7.3]],roof);
  }
  b(g,0,41.4,0,14.3,.35,14.9,stone);
  for(const [x,z] of [[-8.2,8.7],[8.2,8.7],[-8.2,-8.7],[8.2,-8.7]]){
   const turret=new T.Mesh(new T.CylinderGeometry(1.15,1.15,4.4,10),white);turret.position.set(x,34.8,z);g.add(turret);
   const cap=new T.Mesh(new T.ConeGeometry(1.55,3.2,10),roof);cap.position.set(x,38.4,z);g.add(cap);
  }
  for(const s of [-1,1]){b(g,0,42.5,s*7.3,14.3,.09,.09,dark);b(g,s*7,42.5,0,.09,.09,14.6,dark);for(let x=-7;x<=7;x+=1.4){b(g,x,42,s*7.3,.07,1.2,.07,dark);b(g,s*7,42,x,.07,1.2,.07,dark);}}
 }else if(meta.id==='schielandshuis'){
  // Grey plastered exterior in pre-war photographs, not the restored red-brick facade.
  b(g,0,8.1,0,26,16.2,25,gray);hip(g,26.6,25.6,16.2,7.1);
  b(g,0,1,0,26.2,2,25.2,stone);
  for(const [x,z,a] of [[0,12.65,0],[13.15,0,Math.PI/2],[-13.15,0,-Math.PI/2],[0,-12.65,Math.PI]]){
   const f=front(g,x,z,a);b(f,0,15.9,.08,26,.65,.55,stone);
   for(const wx of [-10.8,-7.2,-3.6,0,3.6,7.2,10.8])for(const y of [5.1,10.6]){if(a===0&&wx===0&&y===5.1)continue;win(f,wx,y,.12,2.1,3.2,stone);}
   for(const wx of [-12.5,-9,-5.4,-1.8,1.8,5.4,9,12.5]){b(f,wx,9,.18,.65,12.9,.4,stone);b(f,wx,15.4,.27,1,.45,.6,stone);}
  }
  const f=front(g,0,12.9);b(f,0,16.8,.1,12,2.5,.75,gray);for(const x of [-4,0,4])win(f,x,16.7,.5,1.7,1.3);
  pediment(f,13.7,18.2,.5,3.8);arch(f,0,2.3,.52,3.3,5,dark);
  for(const x of [-3.7,-2.8,2.8,3.7]){const c=new T.Mesh(new T.CylinderGeometry(.25,.28,5.6,10),stone);c.position.set(x,5.2,15.7);g.add(c);b(g,x,8.05,15.7,.75,.35,.75,stone);}
  b(g,0,8.4,14.6,8.5,.55,3.3,stone);
  for(const sign of [-1,1])for(let x=7;x<13;x+=.7)b(g,sign*x,17.1,12.6,.15,1.4,.2,stone);
  for(const sign of [-1,1])b(g,sign*9.8,17.8,12.6,6.5,.2,.35,stone);
  // Raised entrance and two lateral flights, simplified balustrades.
  b(g,0,1.1,15,5.5,2.2,3.8,stone);
  for(const s of [-1,1])for(let i=0;i<7;i++){b(g,s*(3.4+i*.6),1.1-i*.145,15,.65,2.2-i*.29,2.6,stone);b(g,s*(3.4+i*.6),2.1-i*.145,16.3,.13,1.3,.13,stone);}
  for(const x of [-10,10])for(const z of [-9,9])chimney(g,x,z,21.5);
 }else if(meta.id==='marinierskazerne'){
  b(g,0,8,0,26,16,29,brick);hip(g,26.6,29.6,16,4.7);
  for(const [x,z,a,width,bays] of [[0,14.6,0,26,5],[-13.1,0,-Math.PI/2,29,6],[13.1,0,Math.PI/2,29,6],[0,-14.6,Math.PI,26,5]]){
   const f=front(g,x,z,a);b(f,0,15.85,.1,width,.55,.5,stone);
   for(let i=0;i<bays;i++){const wx=(i-(bays-1)/2)*(width-4)/(bays-1);for(const [y,h] of [[3.2,3.8],[9,3.6],[13.65,1.8]]){if(a===0&&i===2)continue;win(f,wx,y,.04,2,h,stone);if(y===3.2)for(const dx of [-.7,-.35,.35,.7])b(f,wx+dx,y,.24,.065,h,.08,dark);}}
  }
  const f=front(g,0,14.7);arch(f,0,.1,.2,4.4,5.8,stone);arch(f,0,.1,.36,3.4,5.1,dark);win(f,0,9.1,.3,2.2,3.8);win(f,0,13.65,.25,2,1.8);
  for(const x of [-2,2])b(f,x,9,.2,.45,5.2,.6,stone);
  pediment(f,17.5,16.1,.25,3.5);const crest=new T.Mesh(new T.SphereGeometry(1,8,6),stone);crest.scale.set(1.2,1,.25);crest.position.set(0,17.3,.4);f.add(crest);
  for(let x=-9;x<=9;x+=4.5){b(g,x,17.8,12,1.2,1.4,1.1,stone);win(g,x,17.8,12.6,.8,1);}
  // Small sentry box beside the main entrance.
  b(g,-3.5,1.7,16.3,1.8,3.4,1.5,dark);hip(front(g,-3.5,16.3),2.2,1.9,3.4,.8);b(g,-3.5,1.55,17.1,1.25,2.9,.12,glass);
  for(const x of [-9,9])chimney(g,x,-6,19);
 }else if(meta.id==='hofplein-loos'){
  // Semicircular cafe/station frontage, with rectangular rear connection.
  const radius=20;
  const shape=new T.Shape();shape.moveTo(-radius,0);shape.absarc(0,0,radius,Math.PI,0,true);shape.lineTo(radius,-15);shape.lineTo(-radius,-15);shape.closePath();
  // Shape's 2D y becomes -z after rotation. Orient the semicircle towards local +z.
  const body=new T.ExtrudeGeometry(shape,{depth:17,bevelEnabled:false,curveSegments:32});body.rotateX(Math.PI/2);body.translate(0,17,0);g.add(new T.Mesh(body,white));
  b(g,0,8,-8,40,16,16,white);
  for(let i=0;i<11;i++){
   const a=-Math.PI/2+(i+.5)*Math.PI/11,f=front(g,Math.sin(a)*radius,Math.cos(a)*radius,a);
   b(f,0,16.8,.1,5.9,.5,.4,stone);b(f,0,5.5,.1,5.9,.4,.4,stone);
   arch(f,0,7,.15,4.3,8,stone);arch(f,0,7.2,.3,3.8,7.4,glass);b(f,0,10.5,.5,.13,6.7,.12,white);for(const y of [9.7,12.2])b(f,0,y,.5,3.7,.12,.12,white);
   b(f,0,2.2,.1,4.4,3.6,.16,glass);b(f,0,4.5,1.1,5.9,.2,2.5,roof);
   b(f,0,18.8,-1.4,2.2,2.5,1.9,white);win(f,0,18.7,-.35,1.35,1.8);
  }
  // A ring of sloped roof panels matches the rounded frontage.
  for(let i=0;i<32;i++){
   const a=-Math.PI/2+i*Math.PI/32,c=a+Math.PI/32,p=(r,h,t)=>[Math.sin(t)*r,h,Math.cos(t)*r];face(g,[p(20.5,17,a),p(20.5,17,c),p(14,24,c),p(20.5,17,a),p(14,24,c),p(14,24,a)],roof);
  }
  for(let i=0;i<32;i++){const a=-Math.PI/2+i*Math.PI/32,c=a+Math.PI/32;face(g,[[0,24,0],[Math.sin(a)*14,24,Math.cos(a)*14],[Math.sin(c)*14,24,Math.cos(c)*14]],roof);}
  b(g,0,24,-1,28,.3,2,roof);hip(front(g,0,-8),40,16,17,7);
  for(const s of [-1,1]){
   const tower=front(g,s*20,0);b(tower,0,11,0,7.5,22,10,white);hip(tower,8,10.5,22,6);
   const f=front(tower,0,5.1);arch(f,0,0,.1,4.8,6.1,dark);for(const x of [-2.1,0,2.1]){win(f,x,11,.1,1.25,2.4);arch(f,x,16,.1,1.5,3.6,glass);}pediment(f,5,22,.1,3);
  }
 }else if(meta.id==='hang-steigers'){
  const bricks=['#775847','#966a51','#6e5a4f','#a17e65'].map(c=>material(c,true)),water=material('#506866');
  b(g,0,.07,0,104,.14,14,water);b(g,0,.32,-10,104,.6,6,paving);b(g,0,.32,7.4,104,.6,.5,paving);
  // Indicative narrow houses on both banks, deliberately without invented addresses.
  const heights=[12,15.4,13.3,16.2,14.5,17,13.8,15.7,12.7,16.1,14.7,15.2,13.5];
  for(const side of [-1,1])for(let i=0;i<13;i++){
   if(contextOccupied(meta,-48+i*8,side<0?-20:15,7.8,14))continue;
   const house=front(g,-48+i*8,side<0?-20:15,0),h=heights[(i+(side>0?4:0))%13],mat=i%6===2?gray:bricks[i%4];
   b(house,0,h/2,0,7.8,h,14,mat);hip(house,8,14.3,h,3.8);b(house,0,h,7.15,8,.4,.45,stone);
   for(const x of [-2.1,0,2.1])for(let y=5;y<h-1;y+=3.5)win(house,x,y,7.1,1.15,2.1);
   if(side>0){const back=front(house,0,-7.1,Math.PI);for(const x of [-2.1,0,2.1])for(let y=3;y<h-1;y+=3.5)win(back,x,y,.1,1.15,2.1);}
   b(house,-1.3,1.8,7.1,3.5,2.8,.15,glass);b(house,2.3,1.65,7.1,1.2,3.1,.15,dark);b(house,-1.3,3.4,7.25,3.9,.4,.3,stone);
   b(house,0,h+1.4,5.4,1.8,2,1.8,mat);win(house,0,h+1.4,6.4,1.2,1.5);chimney(house,2,-3,h+1.6);
  }
  // Small crossing and mooring posts keep the waterway legible.
  b(g,28,1,0,4,.35,20,paving);for(const x of [26,30]){b(g,x,2,0,.1,.12,20,dark);for(let z=-9;z<=9;z+=2)b(g,x,1.6,z,.1,1.2,.1,dark);}
  for(let x=-45;x<=45;x+=15)for(const s of [-1,1])b(g,x,1,s*7.5,.3,1.4,.3,dark);
 }
 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
