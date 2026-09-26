import * as T from '../vendor/three.module.js';

export function buildDiergaarde(meta,{material,box,merge}){
 const g=new T.Group(),layout=meta.parkLayout;
 const lawn=material('#8f9b6d'),water=material('#6b9697'),sand=material('#d5c4a0'),wall=material('#bda58b',true),roof=material('#5f6965'),trunk=material('#77634c');
 const leaves=['#506b43','#657b4b','#7f8d53'].map(c=>material(c));
 function surface(poly,mat,y=.6,depth=0){
  const shape=new T.Shape(poly.map(([x,z])=>new T.Vector2(x,z)));
  const geo=depth?new T.ExtrudeGeometry(shape,{depth,bevelEnabled:false}):new T.ShapeGeometry(shape);
  geo.rotateX(-Math.PI/2);const mesh=new T.Mesh(geo,mat);mesh.position.y=y;g.add(mesh);
 }
 surface(layout.boundary,lawn);
 for(const p of layout.ponds)surface(p,water,.85);
 const pathSegments=[];
 for(const points of layout.paths){
  const curve=new T.CatmullRomCurve3(points.map(([x,z])=>new T.Vector3(x,1,-z)),false,'centripetal');
  const pts=curve.getPoints(points.length*6);
  for(let i=1;i<pts.length;i++){
   const a=pts[i-1],b=pts[i],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz),nx=-dz/len*2.2,nz=dx/len*2.2;
   surface([[a.x+nx,-a.z-nz],[b.x+nx,-b.z-nz],[b.x-nx,-b.z+nz],[a.x-nx,-a.z+nz]],sand,1);
   pathSegments.push([a.x,-a.z,b.x,-b.z]);
  }
 }
 const pale=material('#d8ccb6'),glass=material('#678082'),metal=material('#4e5d57');
 for(const b of layout.buildings){
  if(b.key!=='societeit'&&b.key!=='flora-serre'&&b.key!=='victoria-serre'){surface(b.polygon,wall,.8,b.height);surface(b.polygon,roof,b.height+.9);continue;}
  const group=new T.Group(),pts=b.polygon,center=pts.reduce((a,p)=>[a[0]+p[0]/pts.length,a[1]+p[1]/pts.length],[0,0]);
  group.position.set(center[0],.8,-center[1]);group.rotation.y=Math.atan2(pts[1][1]-pts[0][1],pts[1][0]-pts[0][0]);g.add(group);
  if(b.key==='societeit'){
   // Silhouette and arcade rhythm from the archive photograph; fine ornament is omitted.
   box(group,0,12,0,34,24,27,pale);box(group,0,9,0,59,18,23,pale);
   const cap=new T.Mesh(new T.CylinderGeometry(14,20,6,4),roof);cap.scale.z=.75;cap.rotation.y=Math.PI/4;cap.position.set(0,27,0);group.add(cap);
   for(const side of [-1,1])for(let x=-26;x<=26;x+=4.3){
    for(const y of [4,12,19]){if(y===19&&Math.abs(x)>17)continue;box(group,x,y,side*13.6,2,3.8,.15,glass);}
    box(group,x,4,side*14.5,.6,8,.6,pale);
   }
   for(const y of [8.5,17,23.5])box(group,0,y,0,y>18?35:60,.6,y>18?28:25,pale);
   for(const x of [-26,26])for(const z of [-9,9]){
    box(group,x,11,z,7,22,7,pale);const dome=new T.Mesh(new T.CylinderGeometry(.5,4.3,5,8),roof);dome.position.set(x,24.5,z);group.add(dome);
   }
  }else{
   const width=Math.hypot(pts[1][0]-pts[0][0],pts[1][1]-pts[0][1]),depth=b.key==='flora-serre'?12:20;
   box(group,0,1,0,width,2,depth,pale);box(group,0,4,0,width,5,depth,glass);
   const cap=new T.Mesh(new T.CylinderGeometry(0,1,1,4),glass);cap.rotation.y=Math.PI/4;cap.scale.set(width*.7,4,depth*.7);cap.position.set(0,8,0);group.add(cap);
   for(let x=-width/2;x<=width/2;x+=3)for(const z of [-depth/2,depth/2])box(group,x,4,z,.22,6,.25,metal);
  }
 }

 const within=(p,poly)=>{let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;};
 const segmentDistance=(p,s)=>{const dx=s[2]-s[0],dy=s[3]-s[1],t=Math.max(0,Math.min(1,((p[0]-s[0])*dx+(p[1]-s[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p[0]-s[0]-t*dx,p[1]-s[1]-t*dy);};
 const xs=layout.boundary.map(p=>p[0]),ys=layout.boundary.map(p=>p[1]);let seed=1925;
 const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 // Planting suggests the historic garden's character; individual trees are not surveyed.
 for(let i=0;i<600;i++){
  const p=[Math.min(...xs)+rand()*(Math.max(...xs)-Math.min(...xs)),Math.min(...ys)+rand()*(Math.max(...ys)-Math.min(...ys))];
  if(!within(p,layout.boundary)||layout.ponds.some(a=>within(p,a))||layout.buildings.some(b=>within(p,b.polygon))||pathSegments.some(s=>segmentDistance(p,s)<7))continue;
  const h=7+rand()*9,r=3+rand()*3;
  const stem=new T.Mesh(new T.CylinderGeometry(.45,.7,h*.65,5),trunk);stem.position.set(p[0],h*.325,-p[1]);g.add(stem);
  const crown=new T.Mesh(new T.IcosahedronGeometry(r,1),leaves[i%3]);crown.scale.y=1.2;crown.position.set(p[0],h*.7,-p[1]);g.add(crown);
 }
 const result=merge(g);result.userData.landmark=meta.id;return result;
}
