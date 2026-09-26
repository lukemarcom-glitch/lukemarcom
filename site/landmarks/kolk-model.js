import * as T from '../vendor/three.module.js';

// First streetscape study: mapped waterfront alignment, interpreted individual houses.
// No claim of a surveyed, parcel-by-parcel reconstruction.
export function buildKolk(meta,{material,box,merge}){
 const g=new T.Group();
 const brick=['#806051','#987461','#75665a','#ae927a','#765548'].map(c=>material(c,true));
 const plaster=material('#c4b89e'),trim=material('#d6cbb5'),glass=material('#43585c'),roof=material('#555a58'),tile=material('#856453',true),dark=material('#343c39'),quay=material('#8a8374',true),paving=material('#a19885',true),water=material('#526f6d');
 const shapeMesh=(points,height,mat)=>{const s=new T.Shape(points.map(([x,y])=>new T.Vector2(x,y)));const ge=new T.ExtrudeGeometry(s,{depth:height,bevelEnabled:false});ge.rotateX(-Math.PI/2);const mesh=new T.Mesh(ge,mat);g.add(mesh);return mesh;};
 shapeMesh(meta.waterPolygon,.16,water);
 const path=meta.frontage;
 function strip(points,width,mat,y){for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],len=Math.hypot(b[0]-a[0],b[1]-a[1]),angle=Math.atan2(b[1]-a[1],b[0]-a[0]);box(g,(a[0]+b[0])/2,y,-(a[1]+b[1])/2,len,.35,width,mat,angle);}}
 // A narrow quay follows the bend; paving and edge stones remain simple and inexpensive.
 strip(path,5.5,paving,.68);strip(meta.shoreline,.6,quay,.65);
 let houseIndex=0;
 const widths=[7.8,6.2,7.1,8.6,6.4,7.3,8.1,6.1,7.5,8.3,6.8,7.2,6.5,8.4,7,6.8,7.6,8.1];
 const heights=[15.2,12.7,16.7,17.8,14.2,16,13.8,17.1,18.4,15.8,16.9,13.6,17.6,15.1,16.3,18,15.4,17.2];
 // Sampling the mapped frontage avoids a perfectly straight generic terrace.
 const lengths=path.slice(1).map((b,i)=>Math.hypot(b[0]-path[i][0],b[1]-path[i][1])),total=lengths.reduce((a,b)=>a+b,0),scale=total/widths.reduce((a,b)=>a+b,0);
 function sample(s){let n=0;while(n<lengths.length-1&&s>lengths[n]){s-=lengths[n];n++;}const t=s/lengths[n],a=path[n],b=path[n+1];return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,Math.atan2(b[1]-a[1],b[0]-a[0])];}
 let distance=0;
 for(const rawWidth of widths){
  const i=houseIndex++,w=rawWidth*scale,h=heights[i],depth=13+(i%4)*1.3,[x,north,a]=sample(distance+w/2);distance+=w;
  const house=new T.Group();house.position.set(x-Math.sin(a)*(depth/2+3),.9,-north-Math.cos(a)*(depth/2+3));house.rotation.y=a;g.add(house);
  const body=i===3||i===12?plaster:brick[i%brick.length];
  box(house,0,h/2,0,w-.1,h,depth,body);box(house,0,.7,depth/2+.03,w-.05,1.4,.16,quay);
  for(const y of [3.4,h-.15])box(house,0,y,depth/2+.17,w+.2,.32,.45,trim);
  const floors=h>16?4:3,bays=w>7?3:2,step=(h-3.6)/(floors-1);
  for(const side of [-1,1])for(let floor=1;floor<floors;floor++)for(let bay=0;bay<bays;bay++){
   const wx=-w/2+w*(bay+1)/(bays+1),wy=3.6+(floor-.5)*step,z=side*(depth/2+.1),ww=Math.min(1.25,w/(bays+1)*.62),hh=Math.min(2.1,step*.72);
   box(house,wx,wy,z,ww+.22,hh+.22,.12,trim);box(house,wx,wy,z+side*.08,ww,hh,.09,glass);
   box(house,wx,wy,z+side*.15,.075,hh,.075,trim);box(house,wx,wy+.15,z+side*.16,ww,.075,.08,trim);
   box(house,wx,wy-hh/2-.2,z+side*.19,ww+.4,.13,.28,trim);
   if(side===1&&i%5===0)for(const sign of [-1,1])box(house,wx+sign*(ww/2+.38),wy,z,.5,hh,.12,dark);
  }
  // Ground floor shops/doors, without invented historical shop names.
  box(house,-w*.16,1.95,depth/2+.13,w*.48,2.2,.15,glass);box(house,w*.32,1.65,depth/2+.13,1.05,2.7,.16,dark);
  for(const sx of [-w*.42,w*.11,w*.22,w*.43])box(house,sx,1.9,depth/2+.25,.16,2.65,.24,trim);
  box(house,-w*.16,3.25,depth/2+.25,w*.51,.35,.28,dark);
  const rise=3.6+(i%3)*.55,s=new T.Shape();s.moveTo(-w/2-.14,0);s.lineTo(w/2+.14,0);s.lineTo(0,rise);s.closePath();
  const ge=new T.ExtrudeGeometry(s,{depth:depth+.5,bevelEnabled:false});ge.translate(0,0,-depth/2-.25);const r=new T.Mesh(ge,i%4===1?tile:roof);r.position.y=h;house.add(r);
  // Mostly cornice facades, with a few simplified raised gables visible in the archive views.
  if([2,7,13].includes(i)){
   const sg=new T.Shape();sg.moveTo(-w/2,0);sg.lineTo(w/2,0);sg.lineTo(w*.28,rise*.55);sg.lineTo(w*.12,rise*.65);sg.lineTo(0,rise+.35);sg.lineTo(-w*.12,rise*.65);sg.lineTo(-w*.28,rise*.55);sg.closePath();
   const gm=new T.Mesh(new T.ExtrudeGeometry(sg,{depth:.3,bevelEnabled:false}),body);gm.position.set(0,h,depth/2);house.add(gm);box(house,0,h+1.1,depth/2+.37,1,1.4,.12,glass);
  }else{box(house,0,h+.15,depth/2+.18,w+.35,.45,.55,trim);box(house,0,h+1.25,depth/2-.9,1.7,1.8,1.5,body);box(house,0,h+1.25,depth/2-.08,1.1,1.2,.12,glass);box(house,0,h+2.25,depth/2-.9,1.95,.2,1.8,roof);}
  box(house,w*.28,h+2.5,-depth*.26,.75,3.6,.9,body);box(house,w*.28,h+4.35,-depth*.26,1,.22,1.1,trim);
 }
 // Mooring posts and low quay lamps echo visible harbour infrastructure.
 for(let d=8;d<total;d+=18){const [x,y,a]=sample(d);const qx=x+Math.sin(a)*2.6,qz=-y+Math.cos(a)*2.6;box(g,qx,1.1,qz,.35,1.2,.35,dark);box(g,qx,1.7,qz,.7,.15,.4,dark);}
 for(let d=15;d<total;d+=35){const [x,y,a]=sample(d);box(g,x+Math.sin(a)*.9,3.4,-y+Math.cos(a)*.9,.13,5.3,.13,dark);box(g,x+Math.sin(a)*.9,6.05,-y+Math.cos(a)*.9,.5,.65,.5,trim);}
 // Indicative moored barges. Their exact locations, rigging and colours are not surveyed.
 for(const [x,y,angle,len] of [[238,161,-.9,17],[270,125,-.28,20],[300,119,-.12,15]]){
  const boat=new T.Group();boat.position.set(x,.18,-y);boat.rotation.y=angle;g.add(boat);
  const hullShape=new T.Shape();hullShape.moveTo(-2,-len/2+2);hullShape.lineTo(0,-len/2);hullShape.lineTo(2,-len/2+2);hullShape.lineTo(2,len/2-2);hullShape.lineTo(0,len/2);hullShape.lineTo(-2,len/2-2);hullShape.closePath();const hullGeo=new T.ExtrudeGeometry(hullShape,{depth:1.15,bevelEnabled:false});hullGeo.rotateX(-Math.PI/2);boat.add(new T.Mesh(hullGeo,dark));
  box(boat,0,1.2,0,3.3,.25,len-4,tile);box(boat,0,2.1,len*.28,2.7,1.65,3.3,trim);box(boat,0,3,len*.28,3,.18,3.6,dark);box(boat,0,2.3,len*.28+1.7,1.9,.6,.1,glass);box(boat,0,5,-len*.18,.15,9,.15,dark);
 }
 const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
