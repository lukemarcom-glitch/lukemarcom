import * as T from '../vendor/three.module.js';
// Centreline and dimensions are map/photo estimates, not engineering measurements.
export function buildLuchtspoor(meta,{material,box,merge}){
 const g=new T.Group(), steel=material('#414c48'),stone=material('#aaa395',true),deck=material('#716958'),rail=material('#8d9491'),wood=material('#534839'),roof=material('#555d59'),glass=material('#aab9b3');
 const start=meta.route[0],end=meta.route[1],length=Math.hypot(end[0]-start[0],end[1]-start[1]);
 g.position.set(start[0],0,-start[1]);g.rotation.y=Math.atan2(end[1]-start[1],end[0]-start[0]);
 function beam(a,b,w,d,mat){const A=new T.Vector3(...a),B=new T.Vector3(...b),o=new T.Mesh(new T.BoxGeometry(w,A.distanceTo(B),d),mat);o.position.copy(A).add(B).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),B.sub(A).normalize());g.add(o)}
 function cylinder(x,y,z,r,h,mat){const o=new T.Mesh(new T.CylinderGeometry(r,r*1.13,h,8),mat);o.position.set(x,y,z);g.add(o)}
 box(g,length/2,6.4,0,length,.65,8.8,deck);
 for(const z of [-4.2,0,4.2])box(g,length/2,5.85,z,length,.9,.28,steel);
 for(let x=0;x<length;x+=1.4)for(const z of [-1.95,1.95])box(g,x,6.81,z,.2,.16,2.5,wood);
 for(const z of [-2.6675,-1.2325,1.2325,2.6675])box(g,length/2,6.98,z,length,.18,.12,rail);
 // Two rows of supports on stone bases, crossheads and diagonal knees.
 const [bridgeStart,bridgeEnd]=meta.bridgeSpan||[310,347];
 for(let x=3;x<length;x+=14){if(x>bridgeStart&&x<bridgeEnd)continue;
  for(const z of [-3.5,3.5]){box(g,x,.65,z,1.35,1.3,1.35,stone);cylinder(x,3.4,z,.33,4.4,steel);box(g,x,5.65,z,.8,.5,.8,steel);beam([x,4.2,z],[x+2.3,5.8,z],.2,.2,steel);beam([x,4.2,z],[x-2.3,5.8,z],.2,.2,steel)}
  box(g,x,5.85,0,.6,.6,8.9,steel);
 }
 for(const z of [-4.5,4.5]){box(g,length/2,7.8,z,length,.12,.12,steel);for(let x=0;x<length;x+=2.8)box(g,x,7.25,z,.1,1.2,.1,steel);box(g,length/2,7.1,z,length,.08,.08,steel)}
 // Bowstring bridge over the Middensteiger crossing, retained as an open truss.
 const n=10,span=bridgeEnd-bridgeStart;
 for(const z of [-4.7,4.7]){box(g,(bridgeStart+bridgeEnd)/2,6.4,z,span,.5,.4,steel);
  for(let i=0;i<n;i++){let x=bridgeStart+span*i/n,x2=bridgeStart+span*(i+1)/n,h=7+5.8*Math.sin(Math.PI*i/n),h2=7+5.8*Math.sin(Math.PI*(i+1)/n);beam([x,h,z],[x2,h2,z],.32,.3,steel);beam([x,6.5,z],[x,h,z],.25,.25,steel);beam([x,6.5,z],[x2,h2,z],.23,.23,steel)}
 }
 for(const x of [bridgeStart+span*.2,bridgeStart+span*.5,bridgeStart+span*.8]){const h=7+5.8*Math.sin(Math.PI*(x-bridgeStart)/span);box(g,x,h,0,.3,.3,9.7,steel)}
 // Beurs side platforms and southern pitched station canopy.
 const pStart=bridgeEnd+3,pEnd=length-3;
 for(const z of [-6.1,6.1]){box(g,(pStart+pEnd)/2,6.85,z,pEnd-pStart,.5,3.1,stone);for(let x=pStart;x<pEnd;x+=15){box(g,x,3.2,z,1.25,6.4,1.25,stone);box(g,x,8.1,Math.sign(z)*7.55,.1,2.2,.1,steel)}box(g,(pStart+pEnd)/2,9.1,Math.sign(z)*7.55,pEnd-pStart,.1,.1,steel)}
 const cStart=length-68,cEnd=length-3;
 for(let x=cStart;x<=cEnd;x+=8){for(const z of [-7.5,7.5]){box(g,x,9.7,z,.22,5.2,.22,steel);beam([x,12.3,z],[x,15.5,0],.22,.22,steel)}box(g,x,12.4,0,.17,.17,15,steel)}
 for(const side of [-1,1]){const slope=Math.atan2(3.2,7.5),panel=box(g,(cStart+cEnd)/2,13.9,side*3.75,cEnd-cStart,.18,Math.hypot(7.5,3.2),roof);panel.rotation.x=side*slope;const strip=box(g,(cStart+cEnd)/2,14.98,side*1.1,cEnd-cStart,.08,1.8,glass);strip.rotation.x=side*slope;}
 const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
