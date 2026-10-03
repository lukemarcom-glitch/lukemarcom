import * as T from '../vendor/three.module.js';

// Measured map envelopes, source-visible silhouettes and restrained detail.
// Dimensions that are not surveyed are explicitly identified in the catalog.
export function buildCity22(meta,{material,box,merge}) {
 const g=new T.Group();
 const brick=material('#805442',true),red=material('#965c47',true),stone=material('#c5b9a0'),cream=material('#d8d0bc'),gray=material('#9d9d91'),roof=material('#505859'),tile=material('#8a624b'),copper=material('#65796a'),glass=material('#40575b'),dark=material('#3d403a'),wood=material('#626454');
 const b=(o,x,y,z,w,h,d,m=stone)=>{if(![x,y,z,w,h,d].every(Number.isFinite))throw new Error(`Invalid box in ${meta.id}`);return box(o,x,y,z,w,h,d,m);};
 function part(o,x=0,z=0,a=0){const p=new T.Group();p.position.set(x,0,z);p.rotation.y=a;o.add(p);return p;}
 function mesh(o,geo,mat,x=0,y=0,z=0){const p=new T.Mesh(geo,mat);p.position.set(x,y,z);o.add(p);return p;}
 function face(o,p,m){m.side=T.DoubleSide;const q=new T.BufferGeometry();q.setAttribute('position',new T.Float32BufferAttribute(p.flat(),3));q.setAttribute('uv',new T.Float32BufferAttribute(p.flatMap(v=>[v[0]/4,v[1]/4]),2));q.computeVertexNormals();mesh(o,q,m);}
 function cyl(o,x,y,z,r,h,m,top=r,n=16){return mesh(o,new T.CylinderGeometry(top,r,h,n),m,x,y,z);}
 function beam(o,a,c,r,m=stone){const v=new T.Vector3(...c).sub(new T.Vector3(...a)),p=cyl(o,(a[0]+c[0])/2,(a[1]+c[1])/2,(a[2]+c[2])/2,r,v.length(),m,r,6);p.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());return p;}
 function arch(o,x,y,z,w,h,m=glass){const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();return mesh(o,new T.ExtrudeGeometry(s,{depth:.1,bevelEnabled:false,curveSegments:9}),m,x,y,z);}
 function pointed(o,x,y,z,w,h,m=glass){const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r*1.65);s.quadraticCurveTo(r,h-r*.55,0,h);s.quadraticCurveTo(-r,h-r*.55,-r,h-r*1.65);s.closePath();return mesh(o,new T.ExtrudeGeometry(s,{depth:.1,bevelEnabled:false,curveSegments:8}),m,x,y,z);}
 function win(o,x,y,z,w=1.4,h=2.5,frame=cream){b(o,x,y,z,w+.2,h+.2,.13,frame);b(o,x,y,z+.08,w,h,.12,glass);b(o,x,y,z+.16,.08,h,.08,frame);b(o,x,y+.3,z+.17,w,.08,.08,frame);b(o,x,y-h/2-.15,z+.1,w+.35,.16,.26,stone);}
 function churchWindow(o,x,y,z,w,h,kind='round'){const draw=kind==='point'?pointed:arch;draw(o,x,y,z,w+.35,h+.3,stone);draw(o,x,y+.16,z+.12,w,h,glass);for(const dx of [-w/4,0,w/4])b(o,x+dx,y+h*.46,z+.25,.065,h*.87,.08,cream);for(let yy=y+.8;yy<y+h-w/2;yy+=1.1)b(o,x,yy,z+.25,w,.065,.08,cream);}
 function hip(o,w,d,y,h,m=roof){const a=[-w/2,y,-d/2],c=[w/2,y,-d/2],e=[w/2,y,d/2],f=[-w/2,y,d/2],q=Math.min(w,d)*.4;let u,v;if(w>=d){u=[-w/2+q,y+h,0];v=[w/2-q,y+h,0];face(o,[a,u,v,a,v,c,c,v,e,e,v,u,e,u,f,f,u,a],m);}else{u=[0,y+h,-d/2+q];v=[0,y+h,d/2-q];face(o,[a,u,c,c,u,v,c,v,e,e,v,f,f,v,u,f,u,a],m);}}
 function gable(o,w,d,y,h,m=roof,wall=brick){for(const s of [-1,1]){face(o,[[s*w/2,y,-d/2],[s*w/2,y,d/2],[0,y+h,d/2],[s*w/2,y,-d/2],[0,y+h,d/2],[0,y+h,-d/2]],m);face(o,[[-w/2,y,s*d/2],[w/2,y,s*d/2],[0,y+h,s*d/2]],wall);}}
 function pediment(o,x,y,z,w,h,wall=stone){face(o,[[x-w/2,y,z],[x+w/2,y,z],[x,y+h,z]],wall);beam(o,[x-w/2,y,z+.06],[x,y+h,z+.06],.13,cream);beam(o,[x,y+h,z+.06],[x+w/2,y,z+.06],.13,cream);b(o,x,y,z,w+.3,.22,.42,cream);}
 function cornice(o,w,d,y,m=stone){b(o,0,y,0,w+.45,.35,d+.45,m);b(o,0,y-.3,0,w+.12,.18,d+.12,m);}
 function clock(o,x,y,z,r){mesh(o,new T.CircleGeometry(r,32),cream,x,y,z);for(let i=0;i<12;i++){const a=i*Math.PI/6;b(o,x+Math.sin(a)*r*.83,y+Math.cos(a)*r*.83,z+.03,.07,.16,.07,dark);}b(o,x,y+r*.2,z+.06,.07,r*.65,.08,dark);b(o,x+r*.21,y,z+.07,r*.48,.07,.08,dark);}
 function dormer(o,x,z,y,w=2,h=1.8){b(o,x,y, z,w,h,1.5,stone);win(o,x,y,z+.79,w*.66,h*.7,wood);hip(part(o,x,z),w+.3,1.8,y+h/2,.65);}
 function railing(o,w,y,z){b(o,0,y,z,w,.09,.09,dark);for(let x=-w/2;x<=w/2;x+=.65)b(o,x,y-.45,z,.06,.9,.06,dark);}
 function cross(o,x,y,z,h=2){b(o,x,y,z,.11,h,.11,dark);b(o,x,y+h*.15,z,h*.5,.11,.11,dark);}

 if(meta.id==='luthersekerk'){
  const w=meta.modelWidth||30,d=meta.modelDepth||34,h=18;
  b(g,0,h/2,0,w,h,d,brick);b(g,0,.7,0,w+.2,1.4,d+.2,stone);cornice(g,w,d,h);
  // Rounded four-sided copper roof; not a hemispherical dome.
  const rings=[[0,1],[2,.97],[4,.84],[6,.65],[7.9,.3],[8.15,.27]];
  for(let i=0;i<rings.length-1;i++){const [a,ra]=rings[i],[c,rc]=rings[i+1];const p=[[-w/2*ra,h+a,-d/2*ra],[w/2*ra,h+a,-d/2*ra],[w/2*ra,h+a,d/2*ra],[-w/2*ra,h+a,d/2*ra]],q=[[-w/2*rc,h+c,-d/2*rc],[w/2*rc,h+c,-d/2*rc],[w/2*rc,h+c,d/2*rc],[-w/2*rc,h+c,d/2*rc]];for(let j=0;j<4;j++){const k=(j+1)%4;face(g,[p[j],q[j],q[k],p[j],q[k],p[k]],copper);}}
  b(g,0,26.2,0,8.5,.4,9.5,copper);
  for(const [x,z,a,width,n] of [[0,d/2+.04,0,w,3],[0,-d/2-.04,Math.PI,w,3],[w/2+.04,0,Math.PI/2,d,5],[-w/2-.04,0,-Math.PI/2,d,5]]){
   const f=part(g,x,z,a);for(const xx of [-width/2+.45,width/2-.45])b(f,xx,9,.08,.55,18,.25,stone);
   for(let i=0;i<n;i++){const xx=(i-(n-1)/2)*(width-7)/(n-1);churchWindow(f,xx,i===(n-1)/2?6.7:3.2,.08,2.8,i===(n-1)/2?8.3:10.3);}
   b(f,0,2.2,.18,3.1,4.4,.2,dark);for(const xx of [-2,2]){b(f,xx,2.3,.28,.45,4.6,.6,stone);b(f,xx,4.6,.28,.7,.3,.8,stone);}b(f,0,4.9,.4,5.2,.45,1.1,stone);pediment(f,0,5.2,.3,5,1.1);mesh(f,new T.SphereGeometry(.65,10,7),stone,0,6,.42).scale.z=.35;
  }
  const t=part(g);b(t,0,28.1,0,3.6,3.7,3.6,dark);cornice(t,4,4,26.4,copper);
  for(let i=0;i<4;i++){const f=part(t,Math.sin(i*Math.PI/2)*1.86,Math.cos(i*Math.PI/2)*1.86,i*Math.PI/2);arch(f,0,26.7,.05,2.5,3.3,glass);clock(f,0,29.6,.2,1.18);for(const xx of [-1.65,1.65])b(f,xx,28.3,.16,.22,4.3,.25,wood);}
  cyl(t,0,31.2,0,2.65,2,copper,.8,8);cyl(t,0,32.65,0,.5,1.2,copper,.12,12);b(t,0,34.1,0,.09,2.3,.09,dark);b(t,.5,34.5,0,1,.4,.055,dark);
 } else if(meta.id==='dominicuskerk'){
  const w=meta.modelWidth||24,d=meta.modelDepth||39;
  b(g,0,8.5,0,w,17,d,brick);gable(g,w,d,17,7.5,roof,brick);cornice(g,w,d,17);
  // Low crossing dome with eight circular drum windows, as in the archive views.
  const t=part(g,0,-2);cyl(t,0,24,0,8.5,7.6,stone,8.5,8).rotation.y=Math.PI/8;
  for(let i=0;i<8;i++){const a=i*Math.PI/4,f=part(t,Math.sin(a)*7.94,Math.cos(a)*7.94,a);mesh(f,new T.CircleGeometry(2.15,24),cream,0,24,.08);mesh(f,new T.CircleGeometry(1.87,24),glass,0,24,.14);b(f,0,24,.2,.08,3.75,.08,stone);b(f,0,24,.2,3.75,.08,.08,stone);}
  for(const y of [20.3,27.8])cyl(t,0,y,0,8.85,.35,stone,8.85,8).rotation.y=Math.PI/8;
  for(const [y,h,r,top] of [[29.2,2.5,8.8,7.4],[31.2,1.5,7.4,4.7],[32.5,1.1,4.7,3.9]])cyl(t,0,y,0,r,h,roof,top,8).rotation.y=Math.PI/8;
  cyl(t,0,33.35,0,4.1,.65,roof,4.1,16);
  for(const s of [1]){const f=part(g,0,s*d/2,s<0?Math.PI:0);pediment(f,0,17,.06,w,7.5,brick);churchWindow(f,-w*.31,4,.12,2.6,8);churchWindow(f,w*.31,4,.12,2.6,8);arch(f,0,.2,.2,4.4,4.5,stone);arch(f,0,.2,.32,3.1,3.75,dark);b(f,0,8,.14,5.1,7.4,.15,stone);b(f,0,8,.3,3.9,6.5,.15,glass);arch(f,0,14,.15,14,7.2,cream);arch(f,0,14.2,.27,13.2,6.65,glass);for(let i=0;i<=10;i++){const a=i*Math.PI/10;beam(f,[0,14.2,.42],[Math.cos(a)*6.6,14.2+Math.sin(a)*6.6,.42],.055,cream);}}
  // Hoogstraat has a classical screen facade, documented in archive XVIII-390-01.
  const front=part(g,0,-d/2-.08,Math.PI);b(front,0,10,0,w,20,.5,stone);
  for(const y of [5,18.3,19.6])b(front,0,y,.36,w+.6,.4,.8,cream);
  for(const x of [-w*.35,0,w*.35]){b(front,x,2,.35,2.2,4,.15,dark);churchWindow(front,x,5.5,.3,2.65,8);if(x!==0){mesh(front,new T.CircleGeometry(1.15,24),cream,x,15.4,.4);mesh(front,new T.CircleGeometry(.91,24),glass,x,15.4,.48);}}
  for(const x of [-w*.23,-w*.185,-w*.063,w*.063,w*.185,w*.23]){b(front,x,11.7,.38,.38,12.8,.42,cream);b(front,x,17.9,.4,.85,.45,.65,cream);}
  pediment(front,0,20,.3,w*.61,2.8);arch(front,0,20.05,.45,2.5,1.3,glass);
  arch(front,0,.3,.5,2.6,4.5,cream);arch(front,0,.3,.63,2,4.05,dark);pediment(front,0,5,.65,4.5,1.1);
  const steeple=part(g,0,-d/2+3);b(steeple,0,24.5,0,4.2,6,4.2,stone);
  for(let i=0;i<4;i++){const f=part(steeple,Math.sin(i*Math.PI/2)*2.14,Math.cos(i*Math.PI/2)*2.14,i*Math.PI/2);arch(f,0,23,.03,1.9,3.5,dark);}
  cornice(steeple,4.3,4.3,27.6);cyl(steeple,0,28.5,0,2.8,1.8,roof,1.8,12);cyl(steeple,0,29.7,0,1.8,.6,roof,.4,12);cross(steeple,0,31,0,2.1);
  for(const s of [-1,1]){const f=part(g,s*w/2,0,s*Math.PI/2);for(let x=-d/2+4;x<d/2-2;x+=6.2)churchWindow(f,x,4,.08,2.8,9);}
 } else if(meta.id==='waalsekerk'){
  const w=14,d=22;
  b(g,0,3,0,w,6,d,red);b(g,0,.35,0,w+.2,.7,d+.2,gray);gable(g,10,d,6,6,roof,red);
  for(const s of [-1,1]){const aisle=part(g,s*5.9,0);b(aisle,0,2.25,0,2.2,4.5,d,red);face(aisle,[[-1.2,5.8,-d/2],[1.2,4.6,-d/2],[1.2,4.6,d/2],[-1.2,5.8,-d/2],[1.2,4.6,d/2],[-1.2,5.8,d/2]],roof);const f=part(g,s*w/2,0,s*Math.PI/2);for(let x=-8.7;x<=9;x+=3.5){for(const dx of [-.37,.37])arch(f,x+dx,1.3,.05,.55,2.5,glass);b(f,x-1.55,2.8,.1,.35,5.6,.7,red);}for(const z of [-5,5])dormer(g,s*3.6,z,8.4,1.5,1.8);}
  const t=part(g,0,d/2-.7);b(t,0,10,0,4.8,20,4.8,red);cornice(t,4.8,4.8,20,stone);
  for(let i=0;i<4;i++){const f=part(t,Math.sin(i*Math.PI/2)*2.44,Math.cos(i*Math.PI/2)*2.44,i*Math.PI/2);for(const xx of [-.95,0,.95])arch(f,xx,5.3,.05,.62,2.5,glass);arch(f,0,9.5,.05,.65,3.1,glass);for(const xx of [-.85,.85]){arch(f,xx,16.9,.05,1.1,1.9,dark);for(let y=17;y<18.8;y+=.28)b(f,xx,y,.21,1.05,.07,.13,wood);}clock(f,0,14.5,.15,1.03);for(let x=-1.65;x<=1.7;x+=.8)b(f,x,19.5,.13,.42,.6,.18,stone);}
  arch(t,0,0,2.44,2.6,3.8,stone);arch(t,0,0,2.6,2,3.2,dark);
  cyl(t,0,21.1,0,3.5,1.8,roof,2.25,4).rotation.y=Math.PI/4;cyl(t,0,27.5,0,2.25,11.2,roof,.05,8);cross(t,0,34.4,0,2.4);
  for(const s of [-1,1]){const f=part(g,s*4.8,d/2);for(const xx of [-.4,.4])arch(f,xx,3.4,.05,.55,1.8,glass);}
  const rear=part(g,0,-d/2-.04,Math.PI);for(const x of [-3,0,3])arch(rear,x,2,.05,1.25,4.5,glass);
 } else if(meta.id==='erasmiaans-gymnasium'){
  const w=26,d=22,h=19;
  b(g,0,h/2,0,w,h,d,stone);b(g,0,19,0,w,.25,d,roof);
  const f=part(g,0,d/2+.03);b(f,0,2.2,0,w,4.4,.45,gray);
  for(let y=.5;y<4.5;y+=.6)b(f,0,y,.25,w,.055,.12,stone);
  for(const x of [-10,-5,0,5,10]){arch(f,x,.7,.29,2.9,3.35,cream);arch(f,x,.7,.41,2.35,2.9,x===0?dark:glass);for(const y of [7.4,13.9]){win(f,x,y,.27,2.65,4.4,cream);b(f,x,y-2.45,.39,3.5,.4,.65,stone);for(let xx=-1.45;xx<=1.45;xx+=.4)b(f,x+xx,y-1.95,.7,.14,.7,.14,stone);pediment(f,x,y+2.55,.41,3.65,.85);}}
  for(const y of [4.5,10.5,17.1,18.2,19.3])b(f,0,y,.28,w+.4,.35,.8,cream);
  // Three-bay projecting centre and tall classical pilasters.
  for(const x of [-7.6,-2.55,2.55,7.6]){b(f,x,10.8,.38,.58,12.5,.55,cream);b(f,x,16.7,.45,1.05,.5,.9,cream);for(const dx of [-.35,.35])cyl(f,x+dx,16.8,.5,.18,.25,stone,.18,8).rotation.x=Math.PI/2;}
  pediment(f,0,19.6,.18,17,3.8);for(const x of [-10.5,10.5]){b(f,x,20.1,.05,4.4,.25,.45,cream);for(let dx=-2;dx<=2;dx+=.5)b(f,x+dx,19.55,.05,.18,1.1,.2,cream);}
  // The five roof statues are small silhouettes, not invented sculptural details.
  for(const [x,y] of [[-12,20.6],[-6,22.1],[0,24.1],[6,22.1],[12,20.6]]){b(f,x,y,.1,.8,.4,.8,stone);cyl(f,x,y+.95,.1,.23,1.5,stone,.18,8);mesh(f,new T.SphereGeometry(.22,8,6),stone,x,y+1.85,.1);beam(f,[x,y+1.2,.1],[x+.42,y+.55,.2],.07,stone);}
  for(const s of [-1,1]){const q=part(g,s*w/2,0,s*Math.PI/2);for(const x of [-7,-2,3,8])for(const y of [2.5,7.4,13.9])win(q,x,y,.05,1.8,y===2.5?2.3:3.8);}
  // Low rear classrooms visible in the map, without modern extensions.
  const rear=part(g,0,-15);b(rear,0,5.7,0,22,11.4,8,brick);hip(rear,22.3,8.3,11.4,2.3);const q=part(rear,0,-4.05,Math.PI);for(const x of [-8,-4,0,4,8])for(const y of [3.2,8])win(q,x,y,.05,1.8,2.8);
 } else if(meta.id==='gemeentebibliotheek'){
  const w=42,d=32,h=16;
  b(g,0,h/2,0,w,h,d,red);b(g,0,1,0,w+.1,2,d+.1,gray);hip(g,w+.5,d+.5,h,9.5,tile);
  for(const [x,z,a,width,n] of [[0,d/2+.04,0,w,8],[0,-d/2-.04,Math.PI,w,8],[-w/2-.04,0,-Math.PI/2,d,6],[w/2+.04,0,Math.PI/2,d,6]]){
   const f=part(g,x,z,a);for(const y of [2.1,12.1,15.8])b(f,0,y,.1,width,.35,.35,stone);
   for(let i=0;i<n;i++){const xx=(i-(n-1)/2)*(width-5)/(n-1);for(const yy of [4.6,9.2])win(f,xx,yy,.16,2,3.4,cream);for(const yy of [14.1])win(f,xx,yy,.05,1.8,1.25,wood);b(f,xx-1.6,7.4,.12,.48,10.1,.5,stone);win(f,xx,.9,.1,1.3,.85,wood);}
  }
  // Projecting entrance and balcony at the square corner.
  const f=part(g,-13,d/2+.4);b(f,0,3.8,0,3.5,5.9,.5,stone);b(f,0,3.5,.29,2.25,4.9,.15,dark);b(f,0,6.9,.7,4.8,.35,2.1,stone);railing(f,4.5,8,1.65);win(f,0,10,.1,2.2,4.3);
  // Five pointed dormers on each long roof elevation.
  for(const s of [-1,1])for(const x of [-14,-7,0,7,14]){const q=part(g,x,s*(d/2-2.7),s<0?Math.PI:0);b(q,0,17.4,0,3.5,2.5,1.7,red);win(q,0,17.4,.92,2.4,1.7);gable(q,4,2,18.65,2.2,roof,red);}
  const t=part(g,-12,-5);b(t,0,20.2,0,4.1,13,3.8,stone);for(let i=0;i<4;i++){const f=part(t,Math.sin(i*Math.PI/2)*2.07,Math.cos(i*Math.PI/2)*2.07,i*Math.PI/2);for(const xx of [-.85,0,.85])win(f,xx,23,.04,.38,5.8,wood);}
  cornice(t,4.7,4.5,27.1,stone);railing(t,5,28.25,2.3);const q=part(t,0,-2.3,Math.PI);railing(q,5,28.25,0);b(t,0,28.3,0,3.1,2.1,2.9,wood);cyl(t,0,29.7,0,2.35,1.2,copper,1.15,8);cyl(t,0,30.7,0,1.15,1,copper,.55,8);b(t,0,31.75,0,.1,1.1,.1,dark);
 } else if(meta.id==='luxor'){
  const wall=material('#8b7059',true),w=22.6,d=50;
  const a=meta.angle,c=Math.cos(a),s=Math.sin(a),local=p=>{const dx=p[0]-meta.center[0],dy=p[1]-meta.center[1];return [c*dx+s*dy,s*dx-c*dy];};
  const outline=meta.polygon.map(local),shape=new T.Shape(outline.map(([x,z])=>new T.Vector2(x,-z))),geo=new T.ExtrudeGeometry(shape,{depth:13,bevelEnabled:false});geo.rotateX(-Math.PI/2);mesh(g,geo,wall);
  hip(part(g,0,-5),20.3,40,13,2.5,roof);
  const fc=local(meta.frontCenter),f=part(g,fc[0],fc[1],meta.frontAngle);b(f,0,8.5,0,w,17,.65,wall);b(f,0,17.2,0,w+.4,.45,1,stone);
  b(f,0,4.1,.9,w+1,.22,2.6,cream);b(f,0,3.9,1.7,w+1,.4,.2,dark);
  for(const x of [-8.6,-4.3,0,4.3,8.6]){b(f,x,1.9,.5,3.4,3.5,.18,dark);win(f,x,5.5,.42,2.2,1.7,wood);}
  for(const x of [-8,0,8]){b(f,x,8.3,.42,5.3,3.8,.18,cream);b(f,x,8.3,.55,4.8,3.35,.08,material('#716d5b'));}
  // 1928 remodelling: projecting vertical light box, restrained stepped parapet.
  b(f,0,15.3,.55,2,15,1.1,dark);for(let y=8.1;y<=22.5;y+=.55)b(f,0,y,1.2,2.05,.23,.14,cream);
  b(f,0,23.1,.5,2.6,.3,1.7,stone);b(f,7.6,14.6,.43,1.8,7,.6,stone);
  const glyph={L:['100','100','100','100','111'],U:['101','101','101','101','111'],X:['101','101','010','101','101'],O:['111','101','101','101','111'],R:['110','101','110','101','101'],P:['110','101','110','100','100'],A:['010','101','111','101','101'],S:['111','100','111','001','111'],T:['111','010','010','010','010']};
  let xx=-9;for(const letter of 'LUXOR PALAST'){if(letter===' '){xx=1.5;continue;}glyph[letter].forEach((row,j)=>[...row].forEach((v,k)=>{if(v==='1')b(f,xx+k*.28,12.6-j*.32,.45,.24,.28,.1,cream);}));xx+=1.3;}
 } else if(meta.id==='hotel-atlanta'){
  const wall=material('#9e9274',true),w=26,d=20.7;
  b(g,0,15.6,0,w,31.2,d,wall);b(g,0,1.7,0,w,3.4,d,dark);
  for(const [x,z,a,width] of [[0,d/2+.05,0,w],[w/2+.05,0,Math.PI/2,d],[-w/2-.05,0,-Math.PI/2,d],[0,-d/2-.05,Math.PI,w]]){
   const f=part(g,x,z,a);for(const y of [3.6,6.4,28.1,31.25])b(f,0,y,.14,width+.25,.32,.4,stone);
   for(let i=0;i<6;i++)win(f,(i-2.5)*(width-3)/6,1.8,.2,2.8,2.8,wood);
   for(const y of [8.4,12.4,16.4,20.4,24.4]){b(f,0,y,.13,width*.72,2.1,.18,glass);b(f,0,y-1.15,.23,width*.75,.14,.25,stone);for(let xx=-width*.35;xx<width*.36;xx+=1.35){b(f,xx,y,.26,.12,2.15,.13,cream);b(f,xx,y+.3,.26,1.2,.1,.13,cream);}}
   for(const xx of [-7,-2.3,2.3,7])win(f,xx,29.6,.13,1.5,1.6,cream);
   b(f,0,3.95,1,width+1.4,.18,2.2,cream);railing(f,width,5.3,1.7);
  }
  // The original rooftop salon and slender corner ribs; later wings are absent.
  b(g,0,32.6,0,21,2.8,16,glass);for(let x=-9;x<=9;x+=2)b(g,x,32.6,8.05,.15,2.8,.2,cream);for(let z=-7;z<=7;z+=2)b(g,10.55,32.6,z,.2,2.8,.15,cream);b(g,0,34.1,0,23,.3,18,stone);
  for(const s of [-1,1]){b(g,s*12.5,17,(d/2+.1),.85,26,.85,stone);b(g,s*12.5,30.3,(d/2+.1),1.3,.3,1.3,stone);}
  const tower=part(g,-9,4);b(tower,0,19.2,0,3.5,31,4,wall);b(tower,0,35,0,4.8,.4,5.3,stone);b(tower,0,37.2,0,.12,4,.12,dark);
  for(const x of [-10,10])b(g,x,35.6,-8,.075,4.1,.075,dark);
 } else if(meta.id==='hotel-victoria'){
  const wall=material('#cbc1a8'),w=20,d=11,h=20;
  b(g,0,h/2,0,w,h,d,wall);b(g,0,2,0,w,4,d,gray);hip(g,w+.5,d+.5,h,5.3,roof);
  for(const [x,z,a,width,n] of [[0,d/2+.06,0,w,5],[0,-d/2-.06,Math.PI,w,5],[w/2+.06,0,Math.PI/2,d,4],[-w/2-.06,0,-Math.PI/2,d,4]]){
   const f=part(g,x,z,a);for(const y of [4.3,9.3,14.3,19.8])b(f,0,y,.1,width+.2,.28,.42,cream);
   for(let i=0;i<n;i++){const xx=(i-(n-1)/2)*(width-5)/(n-1);for(const y of [2.2,6.8,11.8,16.8]){win(f,xx,y,.15,1.8,2.9,cream);if(y>4&&y<14)pediment(f,xx,y+1.7,.29,2.7,.5);}}
   for(const xx of [-width/2+.35,width/2-.35])for(let y=4.6;y<19.5;y+=.7)b(f,xx,y,.25,.7,.47,.3,stone);
  }
  for(const x of [-8,0,8])dormer(g,x,d/2-2,21.25,1.9,1.6);
  const f=part(g,0,d/2+.2);b(f,0,1.8,.1,2.3,3.6,.2,dark);b(f,0,4.4,1,8,.3,2.4,stone);railing(f,7.7,5.6,2.1);
  for(const x of [-8,8])for(const z of [-3.5,3.5]){b(g,x,24,z,.75,3.5,.95,brick);b(g,x,25.8,z,1.1,.2,1.25,stone);}
 } else if(meta.id==='westerkerk'){
  // Crossed hall, galleries and the asymmetrical corner tower, from Jurriaanse's 1871 plates.
  b(g,0,10,0,30,20,27,brick);const hall=part(g);gable(hall,24,28,20,10.5,roof,brick);
  const transept=part(g,0,0,Math.PI/2);gable(transept,23,32,20,10.5,roof,brick);
  const apse=part(g,0,-17);b(apse,0,8.5,0,17,17,8,brick);hip(apse,17.3,8.3,17,4.5);
  for(const [x,z,a,width] of [[0,13.6,0,30],[15.1,0,Math.PI/2,27],[-15.1,0,-Math.PI/2,27],[0,-13.6,Math.PI,30]]){
   const f=part(g,x,z,a);b(f,0,5,.2,width,.35,.6,stone);b(f,0,19.7,.2,width,.45,.65,stone);
   for(const xx of [-9.5,-4.8,0,4.8,9.5]){churchWindow(f,xx,1,.15,1.65,3.3);churchWindow(f,xx,7,.15,2.4,10);}
   for(const xx of [-width/2+.4,-5.8,5.8,width/2-.4]){b(f,xx,10,.45,.6,20,.85,stone);cyl(f,xx,21,.45,.7,2,roof,0,4).rotation.y=Math.PI/4;}
   mesh(f,new T.CircleGeometry(2.6,32),stone,0,22.1,.12);mesh(f,new T.CircleGeometry(2.2,32),glass,0,22.1,.2);
   for(let i=0;i<12;i++){const a=i*Math.PI/6;beam(f,[0,22.1,.28],[Math.sin(a)*2.1,22.1+Math.cos(a)*2.1,.28],.055,cream);}
   for(let i=-5;i<=5;i++)arch(f,i*1.7,20.9+(5-Math.abs(i))*1.5,.08,.5,1.3,dark);
  }
  const tower=part(g,-12.3,12.5);b(tower,0,16.5,0,7,33,7,stone);
  for(let i=0;i<4;i++){
   const f=part(tower,Math.sin(i*Math.PI/2)*3.54,Math.cos(i*Math.PI/2)*3.54,i*Math.PI/2);
   for(const y of [5,15.5,32.8])b(f,0,y,.14,7.5,.45,.7,cream);
   for(const xx of [-2.95,2.95])b(f,xx,17,.25,.45,33,.55,cream);
   for(const y of [1.5,7,18,27])churchWindow(f,0,y,.08,1.4,y===18?6.3:3.3);
   pediment(f,0,33.1,.12,6.8,8.5,stone);pointed(f,0,33.5,.3,2.8,4.4,dark);for(let y=34;y<37.2;y+=.36)b(f,0,y,.43,2.6,.1,.15,wood);clock(f,0,38,.34,.95);
   for(const xx of [-3.15,3.15]){b(f,xx,35.9,.15,.25,6,.3,stone);cyl(f,xx,39.3,.15,.48,1.4,roof,0,4).rotation.y=Math.PI/4;}
  }
  cyl(tower,0,43.7,0,3.25,18.8,roof,.2,8);cyl(tower,0,54.1,0,.35,2,roof,.05,8);cross(tower,0,55.6,0,1.8);
  const entrance=part(g,0,13.9);arch(entrance,0,0,.1,3.5,4.5,stone);arch(entrance,0,0,.24,2.7,3.8,dark);pediment(entrance,0,4.5,.25,5.5,3,stone);
 } else if(meta.id==='station-delftse-poort'){
  const pale=material('#bab3a3'),iron=material('#69716b');
  function pavilion(x,z,w,d){const o=part(g,x,z);b(o,0,9.4,0,w,18.8,d,pale);hip(o,w+.4,d+.4,18.8,3.8);for(const [xx,zz,a,ww] of [[0,d/2+.05,0,w],[0,-d/2-.05,Math.PI,w],[w/2+.05,0,Math.PI/2,d],[-w/2-.05,0,-Math.PI/2,d]]){const f=part(o,xx,zz,a);for(const y of [1,8.5,18.5])b(f,0,y,.15,ww+.35,.3,.45,cream);const n=Math.round(ww/4.5);for(let j=0;j<n;j++){const k=(j-(n-1)/2)*(ww-4)/Math.max(n-1,1);churchWindow(f,k,.6,.1,2.6,6.8);win(f,k,13.3,.15,2.2,5,cream);pediment(f,k,16.2,.23,3.1,.65);}for(const xx of [-ww/2+.3,ww/2-.3])for(let y=1.5;y<18;y+=.8)b(f,xx,y,.24,.65,.45,.4,stone);}b(o,0,23.5,0,.09,3.2,.09,dark);return o;}
  function wing(x,z,w,d,a=0){const o=part(g,x,z,a);b(o,0,5.2,0,w,10.4,d,pale);hip(o,w+.25,d+.25,10.4,2.6);for(const s of [-1,1]){const f=part(o,0,s*d/2,s<0?Math.PI:0);for(let x=-w/2+3;x<w/2;x+=4.2)churchWindow(f,x,1,.1,2.4,6.8);b(f,0,9.8,.2,w+.35,.35,.65,cream);}}
  // L-shaped passenger building embraces Stationsplein. Rail side faces local -z.
  wing(39,0,78,14);wing(0,43,64,14,Math.PI/2);pavilion(0,4,22,23);pavilion(74,0,20,16);pavilion(0,80,20,19);
  const p=part(g,0,80);pediment(p,0,19.2,9.6,11,2.1);clock(p,0,20,9.75,.65);
  function shed(x,z,length,width){const o=part(g,x,z);b(o,0,.35,0,length,.7,width,stone);const y=8,r=width/2;
   for(let i=0;i<16;i++){const a=i*Math.PI/16,c=(i+1)*Math.PI/16,zz=Math.cos(a)*r,z2=Math.cos(c)*r,yy=y+Math.sin(a)*5.5,y2=y+Math.sin(c)*5.5;face(o,[[-length/2,yy,zz],[length/2,yy,zz],[length/2,y2,z2],[-length/2,yy,zz],[length/2,y2,z2],[-length/2,y2,z2]],i>5&&i<10?glass:roof);}
   for(let xx=-length/2;xx<=length/2;xx+=10){for(const zz of [-r,r]){b(o,xx,4.3,zz,.28,8,.28,iron);}for(let j=0;j<10;j++){const a=j*Math.PI/10,c=(j+1)*Math.PI/10;beam(o,[xx,y+Math.sin(a)*5.5,Math.cos(a)*r],[xx,y+Math.sin(c)*5.5,Math.cos(c)*r],.1,iron);}}
   for(const zz of [-width*.22,width*.22])for(const dx of [-.72,.72])b(o,0,.77,zz+dx,length,.07,.09,iron);
  }
  shed(-17,-36,220,24);shed(-24,-11,158,22);
 }

 // Source-bound shared party wall: enabled only for explicit source-map limits.
 if(meta.sharedWallBounds){
  const df=meta.sharedWallBounds;g.updateMatrixWorld(true);const meshes=[];
  g.traverse(o=>{if(!o.isMesh)return;const geo=o.geometry.clone();geo.applyMatrix4(o.matrixWorld);const a=geo.attributes.position;
   for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i),z=a.getZ(i);if(y<=(df.height??Infinity))a.setX(i,Math.min(x,df.maxX+(df.maxXSlope||0)*(df.frontZ-z)));}
   geo.computeVertexNormals();o.geometry=geo;o.position.set(0,0,0);o.rotation.set(0,0,0);o.scale.set(1,1,1);meshes.push(o);
  });g.clear();for(const o of meshes)g.add(o);
 }
 g.scale.z=meta.modelScaleZ||1;
 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);
 const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
