import * as T from '../vendor/three.module.js';
// Individually composed silhouettes. Coordinates and dimensions are approximate;
// source-photo dates and uncertainties live in catalog.json and README.md.
export function buildHistoric(meta,kit){
 const {material,box,merge}=kit,g=new T.Group();
 const cream=material('#c2b394',true),light=material('#e2d6bb'),stone=material('#928b7c',true),slate=material('#555e61'),glass=material('#648185'),brick=material('#987959',true),dark=material('#343d3b');
 const b=(x,y,z,w,h,d,m=cream)=>box(g,x,y,z,w,h,d,m);
 function roof(x,y,z,w,d,rise,mat=slate){const shape=new T.Shape();shape.moveTo(-w/2,0);shape.lineTo(w/2,0);shape.lineTo(0,rise);shape.closePath();const ge=new T.ExtrudeGeometry(shape,{depth:d,bevelEnabled:false});const o=new T.Mesh(ge,mat);o.position.set(x,y,z-d/2);g.add(o);}
 function pediment(x,y,z,w,rise){roof(x,y,z,w,.5,rise,light);b(x,y,z,w+.5,.35,.8,light);}
 function column(x,z,y,h,r=.32){const o=new T.Mesh(new T.CylinderGeometry(r*.87,r,h,10),light);o.position.set(x,y+h/2,z);g.add(o);b(x,y+.14,z,r*2.7,.28,r*2.7,light);b(x,y+h-.12,z,r*2.8,.3,r*2.8,light);}
 function archFace(x,y,z,w,h,mat=glass){const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.lineTo(-r,0);const o=new T.Mesh(new T.ShapeGeometry(s,10),mat);o.position.set(x,y,z);g.add(o);}
 function window(x,y,z,w=1.6,h=2.5,arched=false){b(x,y+h/2,z-.08,w+.32,h+.3,.18,light);if(arched)archFace(x,y,z+.04,w,h);else b(x,y+h/2,z+.04,w,h,.09,glass);b(x,y+h/2,z+.12,.10,h,.11,light);b(x,y+.95,z+.13,w,.10,.11,light);}
 function frontWindows(z,w,rows,bays=9){for(let i=0;i<bays;i++)for(const y of rows)window((i-(bays-1)/2)*(w-5)/bays,y,z,1.55,2.8,true);}
 function sideWindows(x,d,rows,bays=12){const holder=new T.Group(); // construct facade locally then rotate to the side
 const before=g.children.length;for(let i=0;i<bays;i++)for(const y of rows)window((i-(bays-1)/2)*(d-5)/bays,y,0,1.5,2.6,true);
 const added=g.children.slice(before);for(const o of added)holder.add(o);holder.rotation.y=x>0?Math.PI/2:-Math.PI/2;holder.position.x=x;g.add(holder);}
 function balustrade(z,w,y){b(0,y,z,w,.3,.55,light);b(0,y+1,z,w,.24,.65,light);for(let x=-w/2+.6;x<w/2;x+=1.15)b(x,y+.5,z,.18,1,.22,light);}
 function clock(x,y,z,r){let o=new T.Mesh(new T.CircleGeometry(r,24),dark);o.position.set(x,y,z);g.add(o);for(let i=0;i<12;i++){const a=i*Math.PI/6;b(x+Math.sin(a)*r*.8,y+Math.cos(a)*r*.8,z+.03,.07,.19,.04,light);}const hand=b(x,y+r*.21,z+.06,.08,r*.6,.04,light);hand.rotation.z=.3;const hand2=b(x+r*.18,y,z+.07,r*.5,.08,.04,light);hand2.rotation.z=.3;}
 const w=meta.dimensions.width,d=meta.dimensions.depth;
 if(meta.id==='passage'){
  // Two shop rows, tall glazed arcade, terminal entrance buildings.
  for(const s of [-1,1]){b(s*(w/4+2),7,0,w/2-4,14,d,brick);for(let z=-d/2+9;z<d/2-7;z+=4.4){b(s*4.12,4,z,.12,5,3.3,glass);b(s*4.22,8.8,z,.12,2.4,2.3,glass);b(s*4.3,0.9,z,.4,1.8,4.2,light);}}
  roof(0,15,0,9,d-14,5,glass);for(let z=-d/2+7;z<d/2-6;z+=4.5){b(0,20,z,.13,.16,.13,light);for(const s of [-1,1]){const o=b(s*2.25,17.5,z,.14,6.75,.13,light);o.rotation.z=s*.73;}}
  for(const z of [-d/2+4,d/2-4]){b(0,13,z,w,14,8,brick);for(const x of [-w/2+5,w/2-5])b(x,3,z,w/2-5,6,8,stone);b(0,21,z,w+1,1,8.7,light);roof(0,21.5,z,w,8,3.7);}
  const z=d/2+.1;frontWindows(z,w,[7.4,11.5,15.6],8);archFace(0,0,z+.1,5,7,dark);for(const x of [-3.2,3.2]){b(x,9.5,z,.65,19,1,light);column(x,z+.6,0,6,.38)}
  for(const x of [-w/2+.5,w/2-.5])b(x,10,z,.5,20,.6,light);for(const y of [6.5,10.8,14.9,19.7])b(0,y,z,w+.8,.32,.8,light);
  for(const x of [-w*.33,w*.33]){b(x,2.5,z+.2,w*.24,4,.2,glass);b(x,4.8,z+1,w*.26,.18,2,light)}
 }else if(meta.id==='oude-beurs'){
  b(0,7.1,0,w,14.2,d,stone); // Envelope + elevated glazed courtyard roof
  for(const s of [-1,1]){b(s*(w/2-4),15.1,0,8,1.8,d,stone);roof(s*(w/2-4),16,0,8,d,3.2);}
  roof(0,16,0,w-17,d-15,7.5,glass);for(let z=-d/2+8;z<d/2-7;z+=3){for(const s of [-1,1]){const o=b(s*(w-17)/4,19.75,z,.15,Math.hypot((w-17)/2,7.5),.15,light);o.rotation.z=s*Math.atan2((w-17)/2,7.5);}}
  for(const x of [-w/2+5,0,w/2-5]){const bw=x===0?15:10;b(x,7.5,d/2-1,bw,15,4,stone);roof(x,15,d/2-1,bw,8,4);}
  frontWindows(d/2+1.1,w,[1.8,8.7],11);sideWindows(w/2+.05,d,[1.7,8.5]);sideWindows(-w/2-.05,d,[1.7,8.5]);
  for(const y of [1,7.3,14.3])b(0,y,d/2+1.4,w+1,.35,.6,light);archFace(0,0,d/2+1.65,3.6,5.5,dark);pediment(0,5.7,d/2+1.9,5,1.1);
  b(0,19.6,d/2-2,6,3.3,6,stone);clock(0,19.7,d/2+1.08,1.1);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;column(Math.cos(a)*2.25,d/2-2+Math.sin(a)*2.25,21.5,5,.22)}
  let dome=new T.Mesh(new T.SphereGeometry(2.9,16,8,0,Math.PI*2,0,Math.PI/2),slate);dome.position.set(0,26.5,d/2-2);g.add(dome);b(0,30,d/2-2,.17,2,.17,dark);
 }else if(meta.id==='schouwburg'){
  b(0,10,0,w,20,d,brick);roof(0,20,-3,w,d-14,7);
  b(0,13.5,-d/2+13,w*.83,27,21,brick);roof(0,27,-d/2+13,w*.83,21,3);
  const z=d/2+.1;b(0,10,z-2,w,20,5,cream);for(const x of [-w/2+5,w/2-5]){b(x,11,z,10,22,6,cream);for(const y of [6.3,19.7,22])b(x,y,z+.4,11,.5,6.8,light);pediment(x,16.8,z+3.2,5,1.3);window(x,8.3,z+3.1,2.5,7,true);}
  for(const x of [-w*.19,0,w*.19]){archFace(x,.4,z+3.2,3.1,5.2,dark);window(x,9,z+3.2,2.5,7,true);}
  for(const x of [-w*.285,-w*.095,w*.095,w*.285])column(x,z+3.5,8,10,.42);
  for(const y of [6.5,8,18.5,20])b(0,y,z+3.1,w*.7,.45,1,light);b(0,6.7,z+4.4,w*.72,.5,3.3,light);balustrade(z+5.9,w*.71,7);pediment(0,20.5,z+3.2,w*.7,5.5);
  b(0,4.7,z+6,w*.48,.12,4,glass);for(const x of [-w*.23,w*.23])column(x,z+7,0,4.7,.13);
  sideWindows(w/2+.05,d,[2,10],11);sideWindows(-w/2-.05,d,[2,10],11);
  // Statues are simple finials; no invented figurative sculptures.
  for(const x of [-w/2+1,0,w/2-1]){b(x,x===0?26.3:23,z+2,.7,1.6,.7,light);let o=new T.Mesh(new T.SphereGeometry(.55,8,6),light);o.position.set(x,x===0?27.5:24.2,z+2);g.add(o);}
 }else if(meta.id==='coolsingelziekenhuis'){
  b(0,10,0,w,20,17,cream);
  for(const x of [-w/2+8,0,w/2-8]){b(x,10.5,1,13,21,19,cream);b(x,21.2,1,14,.7,20,light);for(const dx of [-6,6])b(x+dx,22,9.6,.9,1.7,.9,light);}
  for(const y of [1,5.1,9.6,14.1,18.2,20])b(0,y,8.7,w+.7,.32,.7,light);
  for(let x=-w/2+3;x<w/2-1;x+=4.5){const z=Math.abs(x)<7||Math.abs(x)>w/2-15?10.58:8.66;for(const y of [1.5,6,10.5,15])for(const dx of [-.57,.57])window(x+dx,y,z,.85,2.8,true);}
  for(let x=-w/2+1;x<w/2;x+=1.9){b(x,19.3,8.85,.6,.95,.1,dark);b(x,20.8,8.8,.4,1.2,.6,light)}
  for(const x of [-w/2+7,w/2-7]){b(x,6.3,-27,14,12.6,41,cream);roof(x,12.6,-27,14,41,2.6);}
  b(0,6,-d/2+4,w-12,12,9,cream);roof(0,12,-d/2+4,w-12,9,2);
  b(-w*.23,5.2,-25,15,10.4,20,cream);roof(-w*.23,10.4,-25,15,20,2);
  const chimney=new T.Mesh(new T.CylinderGeometry(1.1,1.7,32,10),brick);chimney.position.set(w*.22,16,-32);g.add(chimney);
 }else if(meta.id==='delftse-poort'){
  // The central passage is genuinely open through the gate.
  const mainW=w*.73,mainD=d*.76,r=2.4,spring=4.1,ledge=8.3;
  for(const sign of [-1,1]){b(sign*(mainW/4+r/2),ledge/2,0,(mainW-2*r)/2,ledge,mainD,stone);b(sign*(w/2-1.2),3.8,0,2.4,7.6,d*.85,stone);}
  const s=new T.Shape();s.moveTo(-r,ledge);s.lineTo(r,ledge);s.lineTo(r,spring);for(let j=0;j<=16;j++){const a=j*Math.PI/16;s.lineTo(Math.cos(a)*r,spring+Math.sin(a)*r)}s.closePath();const ar=new T.Mesh(new T.ExtrudeGeometry(s,{depth:mainD,bevelEnabled:false}),stone);ar.position.z=-mainD/2;g.add(ar);
  b(0,8.6,0,w,.65,d);b(0,12.6,0,mainW,7.4,mainD,stone);b(0,16.3,0,mainW+1,.6,mainD+1,light);roof(0,16.6,0,mainW+1,mainD+1,2.4,slate);
  for(const sign of [-1,1]){const z=sign*(mainD/2+.3);const group=new T.Group();const before=g.children.length;for(const x of [-mainW/2+.8,-r-.5,r+.5,mainW/2-.8])column(x,mainD/2+.6,0,7.8,.42);for(const x of [-mainW/2+.6,-r-1,r+1,mainW/2-.6])b(x,12.55,mainD/2+.2,.45,7,.5,light);pediment(0,16.6,mainD/2+.4,mainW+1,2.4);clock(0,17.55,mainD/2+.73,.65);b(0,12,mainD/2+.24,4.2,3.7,.2,light);
   if(sign<0){const added=g.children.slice(before);for(const o of added)group.add(o);group.rotation.y=Math.PI;g.add(group);}}
 }
 g.position.set(meta.center[0],.35,-meta.center[1]);g.rotation.y=meta.angle||0;
 const result=merge(g);result.userData.landmark=meta.id;result.name=meta.name;return result;
}
