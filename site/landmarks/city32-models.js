import * as T from '../vendor/three.module.js';

// Lightweight source-based envelopes. Individual parts, roof forms and facade
// rhythms are specified per building; hidden elevations remain interpretations.
export function buildCity32(meta,{material,box,merge}){
 const root=new T.Group(),spec=meta.modelSpec;
 if(!spec?.parts?.length)throw new Error(`Missing researched model: ${meta.id}`);
 const palette={brick:'#90694f',stone:'#c4bbaa',trim:'#e0d7c4',roof:'#505856',glass:'#455e62',dark:'#343b37',...spec.colors};
 const mats=Object.fromEntries(Object.entries(palette).map(([k,v])=>[k,material(v,k==='brick')]));
 const b=(g,x,y,z,w,h,d,mat)=>box(g,x,y,z,w,h,d,typeof mat==='string'?mats[mat]:mat||mats.brick);
 const part=(parent,x,z,angle=0)=>{const g=new T.Group();g.position.set(x,0,z);g.rotation.y=angle;parent.add(g);return g};
 function triangle(g,pts,mat){const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pts.flat(),3));geo.setAttribute('uv',new T.Float32BufferAttribute(pts.flatMap(p=>[p[0]/4,p[1]/4]),2));geo.computeVertexNormals();g.add(new T.Mesh(geo,mat));}
 function roof(g,w,d,y,rh,type,gableMaterial=mats.brick){
  if(type==='none')return; // Stone caps/pediments do not need a slate roof plane.
  if(type==='flat'||!rh){b(g,0,y+.12,0,w+.2,.24,d+.2,'roof');return}
  const x=w/2+.25,z=d/2+.25,a=[-x,y,-z],bb=[x,y,-z],c=[x,y,z],dd=[-x,y,z];
  if(type==='gable'){
   const u=[0,y+rh,-z],v=[0,y+rh,z];triangle(g,[a,v,u,a,dd,v,bb,v,c,bb,u,v],mats.roof);
   triangle(g,[a,u,bb,c,v,dd],gableMaterial);
  }else if(w>d){
   const inset=Math.min(w*.24,d*.55),u=[-x+inset,y+rh,0],v=[x-inset,y+rh,0];
   triangle(g,[a,dd,u,dd,c,v,dd,v,u,c,bb,v,bb,a,u,bb,u,v],mats.roof);
  }else{
   const inset=Math.min(d*.24,w*.55),u=[0,y+rh,-z+inset],v=[0,y+rh,z-inset];
   triangle(g,[a,u,bb,bb,u,v,bb,v,c,c,v,dd,dd,v,u,dd,u,a],mats.roof);
  }
 }
 function arch(g,x,y,z,w,h,trim=true){
  const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();
  const mesh=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.08,bevelEnabled:false,curveSegments:8}),mats.glass);mesh.position.set(x,y-h/2,z);g.add(mesh);
  if(trim){b(g,x,y-h/2,z+.1,w+.16,.15,.18,'trim');b(g,x,y-.12,z+.11,.10,h-.2,.12,'trim')}
 }
 function window(g,x,y,z,w,h,arched=false){
  if(arched){arch(g,x,y,z,w,h);return}
  b(g,x,y,z,w+.14,h+.16,.15,'trim');b(g,x,y,z+.09,w,h,.09,'glass');
  b(g,x,y,z+.16,.075,h,.08,'trim');b(g,x,y+.15*h,z+.17,w,.075,.08,'trim');
 }
 function facade(g,width,p,side=false){
  const floors=p.floors||3,base=p.groundHeight||3.5,step=(p.h-base)/(floors-1||1);
  const bays=side?(p.sideBays||Math.max(2,Math.round(width/4))):(p.bays||5),pitch=width/(bays+.4),ww=p.windowWidth||Math.min(1.55,pitch*.60);
  for(let row=0;row<floors;row++){
   const y=row===0?base*.51:base+(row-.45)*step,hh=row===0?(p.shop?base*.79:Math.min(2.4,base*.64)):Math.min(step*.65,p.windowHeight||2.5);
   for(let i=0;i<bays;i++){const x=(i-(bays-1)/2)*pitch;if(!side&&row===0&&i===Math.floor(bays/2)&&p.entrance!==false){
    if(p.archedEntry)arch(g,x,hh/2+.12,.12,Math.min(pitch*.8,2.6),hh);else b(g,x,hh/2+.12,.12,Math.min(pitch*.76,2.2),hh,.2,'dark');
   }else window(g,x,y,.08,row===0&&p.shop?pitch*.80:ww,hh,p.archedWindows||(p.archedTop&&row===floors-1)||false)}
   if(p.bands&&row>0)b(g,0,base+(row-1)*step-.10,.11,width+.12,.19,.22,'trim');
  }
  if(p.pilasters)for(let i=0;i<=bays;i++)b(g,(i-bays/2)*pitch,p.h/2,.18,.25,p.h,.3,p.wall||'brick');
  if(p.cornice!==false){b(g,0,p.h-.35,.13,width+.3,.25,.4,'trim');b(g,0,p.h,.23,width+.65,.23,.6,'trim')}
  if(p.canopy&&!side)b(g,0,base+.12,1.05,width*.9,.3,2.3,'roof');
  if(p.pediment&&!side){const y=p.h+.25,r=p.pediment;triangle(g,[[-width*r/2,y,.25],[width*r/2,y,.25],[0,y+width*r*.28,.25]],mats[p.wall||'brick']);b(g,0,y,.20,width*r,.18,.35,'trim')}
  if(p.rose&&!side){const disk=new T.Mesh(new T.CylinderGeometry(p.rose,p.rose,.13,24),mats.glass);disk.rotation.x=Math.PI/2;disk.position.set(0,p.h*.72,.24);g.add(disk);for(let i=0;i<8;i++){const mull=b(g,0,p.h*.72,.34,.08,p.rose*1.9,.08,'trim');mull.rotation.z=i*Math.PI/4;}}
 }
 for(const t of spec.towers||[]){
  const g=part(root,t.x||0,t.z||0),r=t.radius||2.4,base=t.base||0,h=t.h;
  if(t.lantern){
   // Open timber lantern and curved cupola, documented on the Scots church.
   const sides=t.sides||8,plinth=t.plinthHeight||.9;
   for(const [y,depth,radius] of [[base+plinth/2,plinth,r],[base+h-.12,.24,r+.18]]){
    const ring=new T.Mesh(new T.CylinderGeometry(radius,radius,depth,sides),mats.trim);ring.position.y=y;g.add(ring);
   }
   for(let i=0;i<sides;i++){
    const angle=i*Math.PI*2/sides;
    b(g,Math.sin(angle)*r,base+plinth+(h-plinth)/2,Math.cos(angle)*r,.23,h-plinth,.23,'trim');
   }
   const rh=t.roofHeight||1.8,profile=[];
   for(let i=0;i<=12;i++){const a=i/12*Math.PI/2;profile.push(new T.Vector2((r+.2)*Math.cos(a),base+h+rh*Math.sin(a)));}
   g.add(new T.Mesh(new T.LatheGeometry(profile,16),mats.roof));
   const finial=new T.Mesh(new T.SphereGeometry(.28,8,6),mats.roof);finial.position.y=base+h+rh+.3;finial.scale.y=1.6;g.add(finial);
   b(g,0,base+h+rh+.95,0,.07,1.5,.07,'dark');
   continue;
  }
  const body=new T.Mesh(new T.CylinderGeometry(r,r,h,t.sides||8),mats[t.wall||'stone']);body.position.y=base+h/2;g.add(body);
  for(let y=base+3;y<base+h-1;y+=t.storey||3.5){if(t.bands!==false){const band=new T.Mesh(new T.CylinderGeometry(r+.14,r+.14,.18,t.sides||8),mats.trim);band.position.y=y;g.add(band);}for(let i=0;i<4;i++)window(part(g,Math.sin(i*Math.PI/2)*(r+.04),Math.cos(i*Math.PI/2)*(r+.04),i*Math.PI/2),0,y-1.5,.04,t.windowWidth||r*.63,t.windowHeight||1.55);}
  if(t.roofProfile){
   // Explicit radius/height samples allow documented curved cupolas without
   // replacing them with the generic pointed roof used by other towers.
   const profile=t.roofProfile.map(([radius,y])=>new T.Vector2(radius,base+h+y));
   g.add(new T.Mesh(new T.LatheGeometry(profile,t.sides||16),mats.roof));
  }else if(t.roofHeight){const cap=new T.Mesh(new T.ConeGeometry(r+.25,t.roofHeight,t.sides||8),mats.roof);cap.position.y=base+h+t.roofHeight/2;g.add(cap)}
 }
 for(const c of spec.columns||[]){const mesh=new T.Mesh(new T.CylinderGeometry(c.radius||.5,c.radius||.5,c.h,12),mats.trim);mesh.position.set(c.x,c.y,c.z);root.add(mesh)}
 for(const t of spec.trees||[]){
  const h=t.h||8,r=t.radius||2.4,trunk=new T.Mesh(new T.CylinderGeometry(.18,.25,h*.7,6),mats.dark);trunk.position.set(t.x,h*.35,t.z);root.add(trunk);
  const crown=new T.Mesh(new T.IcosahedronGeometry(r,1),mats.foliage||mats.roof);crown.position.set(t.x,h-r*.5,t.z);crown.scale.y=1.25;root.add(crown);
 }
 for(const c of spec.clocks||[]){const g=part(root,c.x||0,c.z||0,c.angle||0),r=c.radius||1;const clock=new T.Mesh(new T.CylinderGeometry(r,r,.15,24),mats.trim);clock.rotation.x=Math.PI/2;clock.position.y=c.y;g.add(clock);b(g,0,c.y+r*.2,.12,.08,r*.6,.08,'dark');b(g,r*.2,c.y,.13,r*.6,.08,.08,'dark');}
 // Open arches for a documented parapet or arcade, rather than opaque blocks.
 for(const a of spec.arcades||[]){
  const g=part(root,a.x||0,a.z||0,a.angle||0),pitch=a.w/a.bays,pier=a.pier||.32,r=(pitch-pier)/2,mat=mats[a.material||'brick'];
  for(let i=0;i<=a.bays;i++)b(g,-a.w/2+i*pitch,a.y+a.h/2,0,pier,a.h,a.d||.35,mat);
  for(let i=0;i<a.bays;i++){
   const shape=new T.Shape();shape.moveTo(-r,a.h);shape.lineTo(r,a.h);shape.lineTo(r,a.h-r-.18);
   for(let j=0;j<=12;j++){const t=j/12*Math.PI;shape.lineTo(Math.cos(t)*r,a.h-r-.18+Math.sin(t)*r)}shape.closePath();
   const mesh=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:a.d||.35,bevelEnabled:false,curveSegments:12}),mat);mesh.position.set(-a.w/2+(i+.5)*pitch,a.y,-(a.d||.35)/2);g.add(mesh);
  }
 }
 for(const p of spec.parts){
  const g=part(root,p.x||0,p.z||0,p.angle||0),w=p.w,d=p.d,h=p.h;g.position.y=p.base||0;
  if(![w,d,h].every(n=>Number.isFinite(n)&&n>0))throw new Error(`Invalid envelope: ${meta.id}`);
  b(g,0,h/2,0,w,h,d,p.wall||'brick');
  if(p.roofAlongFront)roof(part(g,0,0,Math.PI/2),d,w,h,p.roofHeight||0,p.roof||'flat',mats[p.gableWall||'brick']);
  else roof(g,w,d,h,p.roofHeight||0,p.roof||'flat',mats[p.gableWall||'brick']);
  if(p.windows===false&&p.pediment){const y=h+.15,r=p.pediment;triangle(g,[[-w*r/2,y,d/2+.08],[w*r/2,y,d/2+.08],[0,y+w*r*.28,d/2+.08]],mats[p.wall||'stone']);}
  if(p.windows!==false){facade(part(g,0,d/2+.02),w,p);if(p.sides!==false)for(const s of [-1,1])facade(part(g,s*w/2,0,s*Math.PI/2),d,p,true);if(p.back)facade(part(g,0,-d/2,Math.PI),w,p,true)}
  if(p.chimneys)for(const x of [-w*.31,w*.31])b(g,x,h+(p.roofHeight||0)*.75,0,.65,2.8,.9,'brick');
  if(p.dormers)for(let i=0;i<p.dormers;i++){const z=-d*.35+i*(d*.7/Math.max(1,p.dormers-1));for(const s of [-1,1]){const dorm=part(g,s*w*.32,z,s*Math.PI/2);b(dorm,0,h+1.0,0,1.2,1.5,1.15,'stone');window(dorm,0,h+1.0,.59,.72,1.0);roof(dorm,1.3,1.3,h+1.8,.65,'hip')}}
  if(p.parapet)for(const s of [-1,1]){b(g,0,h+.5,s*d/2,w,.9,.3,p.wall||'brick');b(g,s*w/2,h+.5,0,.3,.9,d,p.wall||'brick')}
 }
 // Individually documented openings, e.g. the six-metre reading-room windows.
 // Keep these separate from the regular floor grid used by ordinary facades.
 for(const a of spec.facadeWindows||[])window(part(root,a.x||0,a.z||0,a.angle||0),0,a.y,.08,a.w,a.h,Boolean(a.arched));
 for(const a of spec.roundWindows||[]){
  const g=part(root,a.x||0,a.z||0,a.angle||0),r=a.radius;
  const disk=new T.Mesh(new T.CircleGeometry(r,24),mats.glass);disk.position.set(0,a.y,.1);g.add(disk);
  const rim=new T.Mesh(new T.TorusGeometry(r,.10,4,24),mats.trim);rim.position.set(0,a.y,.13);g.add(rim);
  for(let i=0;i<4;i++){const mull=b(g,0,a.y,.18,.07,r*1.95,.07,'trim');mull.rotation.z=i*Math.PI/4;}
 }
 for(const a of spec.accents||[])b(root,a.x||0,a.y,a.z||0,a.w,a.h,a.d,a.material||'trim');
 root.rotation.y=meta.angle||0;root.position.set(meta.center[0],.35,-meta.center[1]);
 const result=merge(root);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
