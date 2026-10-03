import {buildCity32} from './city32-models.js?v=round10-20261003';
import {buildCity28} from './city28-models.js?v=28';
import {buildBeursCoolsingel} from './beurs-coolsingel-model.js?v=26';
import {buildCity22} from './city22-models.js?v=22';
export {configureLandmarkContext} from './context-clearance.js?v=22';
import {buildNoordereiland} from './noordereiland-models.js?v=24';
import {buildMaasbrug} from './maasbrug-model.js?v=19';
import {buildDiergaarde} from './diergaarde-model.js?v=18';
import {buildNieuweVijf} from './nieuwe-vijf-models.js';
import {buildUitbreiding} from './uitbreiding-models.js?v=22';
import {buildLijnbaan} from './lijnbaan-models.js';
import {buildMeent} from './meent-models.js';
import {buildLuchtspoor} from './luchtspoor-model.js';
import {buildHoogstraat} from './hoogstraat-model.js?v=22';
import {buildKolk} from './kolk-model.js';
import {buildLaurens} from './laurens-model.js';
import {buildHistoric} from './historic-models.js';
import * as T from '../vendor/three.module.js';
function material(color,brick=false){
 const c=new T.Color(color),n=64,data=new Uint8Array(n*n*4);let seed=41;
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){seed=(seed*1664525+1013904223)>>>0;let f=.91+(seed%100)/1000;if(brick&&(y%8===0||(x+(Math.floor(y/8)%2)*16)%32===0))f=.72;const k=(y*n+x)*4;data[k]=Math.min(255,c.r*255*f);data[k+1]=Math.min(255,c.g*255*f);data[k+2]=Math.min(255,c.b*255*f);data[k+3]=255;}
 const map=new T.DataTexture(data,n,n);map.wrapS=map.wrapT=T.RepeatWrapping;map.needsUpdate=true;return new T.MeshStandardMaterial({color:0xffffff,map,roughness:.93});
}
const stone=material('#baae94',true),trim=material('#ded6c2'),slate=material('#566165'),glass=material('#526c70'),yellow=material('#d9bd70',true),white=material('#e2ded1'),dark=material('#363c38');
function box(g,x,y,z,w,h,d,mat,angle=0){let o=new T.Mesh(new T.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);o.rotation.y=angle;g.add(o);return o;}
function face(g,points,mat){const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(points.flat(),3));ge.setAttribute('uv',new T.Float32BufferAttribute([0,0,1,0,1,1,0,0,1,1,0,1],2));ge.computeVertexNormals();g.add(new T.Mesh(ge,mat));}
function edge(g,a,b,depth,planc){const dx=b[0]-a[0],dz=b[1]-a[1],len=Math.hypot(dx,dz),angle=-Math.atan2(dz,dx),mid=[(a[0]+b[0])/2,(a[1]+b[1])/2];let e=new T.Group();e.position.set(mid[0],0,mid[1]);e.rotation.y=angle;g.add(e);
 if(planc){
 box(e,0,11,0,len,10,depth,stone);for(const h of [6,10.8,15.7])box(e,0,h,0,len+.3,.4,depth+.5,trim);
 const bays=Math.max(1,Math.round(len/4.8)),step=len/bays;
 for(let i=0;i<=bays;i++)box(e,-len/2+i*step,3,0,.7,6,depth,stone);
 for(let i=0;i<bays;i++){
 const x=-len/2+(i+.5)*step,r=(step-.7)/2;
 // Real arch opening: curved spandrel over the piers, open below.
 const shape=new T.Shape();shape.moveTo(-r,6);shape.lineTo(r,6);shape.lineTo(r,3.5);for(let j=0;j<=12;j++){const t=j/12*Math.PI;shape.lineTo(Math.cos(t)*r,3.5+Math.sin(t)*r)}shape.closePath();let ar=new T.Mesh(new T.ExtrudeGeometry(shape,{depth,bevelEnabled:false,curveSegments:12}),stone);ar.position.set(x,0,-depth/2);e.add(ar);
 for(const side of [-1,1])for(const h of [8.6,13]){box(e,x,h,side*(depth/2+.025),step*.53,2.6,.12,glass);box(e,x,h,side*(depth/2+.12),.13,2.65,.15,trim);box(e,x,h-1.35,side*(depth/2+.16),step*.66,.15,.25,trim)}
 if(i%2===0){box(e,x,18.1,depth/2-1,1.8,2,1.7,trim);box(e,x,18.15,depth/2-.1,1.15,1.35,.1,glass)}
 }
 // Mansard roof, with steep lower slope and shallow upper pitch.
 const levels=[[16,depth/2+.35],[19.4,depth/2-2],[20.1,0]];
 for(let k=0;k<2;k++)for(const s of [-1,1]){let [h,d]=levels[k],[h2,d2]=levels[k+1];const A=[-len/2,h,s*d],B=[len/2,h,s*d],C=[len/2,h2,s*d2],D=[-len/2,h2,s*d2];if(s===1)face(e,[A,B,C,A,C,D],slate);else face(e,[B,A,D,B,D,C],slate)}
 }else{
 for(const h of [7,12,17,22,27]){box(e,0,h,-depth/2-.24,len,3.8,.12,glass);box(e,0,h+2.1,-depth/2-.38,len,.35,.28,white);for(let x=-len/2+1;x<len/2;x+=2.2)box(e,x,h,-depth/2-.36,.1,3.8,.15,white)}
 }
}
function merge(group){group.updateMatrixWorld(true);let batches=new Map();group.traverse(o=>{if(!o.isMesh)return;let g=o.geometry.clone().applyMatrix4(o.matrixWorld);if(g.index)g=g.toNonIndexed();let v=batches.get(o.material)||{p:[],n:[],uv:[]};v.p.push(...g.attributes.position.array);v.n.push(...g.attributes.normal.array);v.uv.push(...(g.attributes.uv?.array||new Float32Array(g.attributes.position.count*2)));batches.set(o.material,v)});const out=new T.Group();for(const [mat,v] of batches){const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(v.p,3));g.setAttribute('normal',new T.Float32BufferAttribute(v.n,3));g.setAttribute('uv',new T.Float32BufferAttribute(v.uv,2));const mesh=new T.Mesh(g,mat);mesh.castShadow=true;mesh.receiveShadow=true;out.add(mesh)}return out;}
export function createLandmark(meta){if(['city32','city33'].includes(meta.modelFamily))return buildCity32(meta,{material,box,merge});if(meta.modelFamily==='city28')return buildCity28(meta,{material,box,merge});if(meta.id==='beurs-coolsingel')return buildBeursCoolsingel(meta,{material,box,merge});if(meta.modelFamily==='city22')return buildCity22(meta,{material,box,merge});if(["hulstkampgebouw","van-drielkantoor","burgemeester-hoffmanplein"].includes(meta.id))return buildNoordereiland(meta,{material,box,merge});if(meta.bridgeType)return buildMaasbrug(meta,{material,box,merge});if(meta.id==='oude-diergaarde')return buildDiergaarde(meta,{material,box,merge});if(["stadhuis","hoofdpostkantoor","molen-de-noord","pschorr","zuiderkerk"].includes(meta.id))return buildNieuweVijf(meta,{material,box,merge});if(["witte-huis","schielandshuis","marinierskazerne","hofplein-loos","hang-steigers"].includes(meta.id))return buildUitbreiding(meta,{material,box,merge});if(['sint-lucia','tivoli'].includes(meta.id))return buildLijnbaan(meta,{material,box,merge});if(['minervahuis-i','rosaliakerk'].includes(meta.id))return buildMeent(meta,{material,box,merge});if(meta.id==='luchtspoor')return buildLuchtspoor(meta,{material,box,merge});if(meta.id==='hoogstraat')return buildHoogstraat(meta,{material,box,merge});if(meta.id==='kolk-open-rijstuin')return buildKolk(meta,{material,box,merge});if(meta.id==='laurenskerk')return buildLaurens(meta,{material,box,merge});if(!['plan-c','bijenkorf'].includes(meta.id))return buildHistoric(meta,{material,box,merge});let g=new T.Group();const p=meta.polygon.map(([x,y])=>[x,-y]);const center=[meta.center[0],-meta.center[1]];
 if(meta.id==='plan-c'){
 for(let i=0;i<p.length;i++)edge(g,p[i],p[(i+1)%p.length],8,true);
 const a=p[2],b=p[3],pavilion=new T.Group();pavilion.position.set((a[0]+b[0])/2,0,(a[1]+b[1])/2);pavilion.rotation.y=-Math.atan2(b[1]-a[1],b[0]-a[0]);g.add(pavilion);const cap=new T.Shape();cap.moveTo(-7,16);cap.lineTo(-5.7,22);cap.lineTo(5.7,22);cap.lineTo(7,16);cap.closePath();const capMesh=new T.Mesh(new T.ExtrudeGeometry(cap,{depth:7.5,bevelEnabled:false}),slate);capMesh.position.z=-3.75;pavilion.add(capMesh);for(const side of [-1,1]){box(pavilion,0,20.1,side*3.8,2.5,2.7,.2,trim);box(pavilion,0,20.1,side*3.95,1.6,1.9,.1,glass);}box(pavilion,0,22.5,0,.5,1.3,.5,trim);
 for(const i of [0,2,4]){const [x,z]=p[i];box(g,x,11,z,5.2,10,5.2,trim);let roof=new T.Mesh(new T.CylinderGeometry(1.3,4,5,8),slate);roof.position.set(x,20.7,z);g.add(roof);box(g,x,24,z,.2,2.3,.2,dark)}
 }else{
 let sh=new T.Shape(p.map(([x,z])=>new T.Vector2(x,-z)));let ge=new T.ExtrudeGeometry(sh,{depth:30,bevelEnabled:false});ge.rotateX(-Math.PI/2);g.add(new T.Mesh(ge,yellow));
 // Glazing on the two long elevations; opaque north stair/service volume.
 for(let i=0;i<p.length;i++){if(i===0||Math.hypot(p[(i+1)%p.length][0]-p[i][0],p[(i+1)%p.length][1]-p[i][1])>50)edge(g,p[i],p[(i+1)%p.length],.4,false)}
 const north=Math.min(...p.map(q=>q[1])),west=Math.min(...p.map(q=>q[0]));
 box(g,center[0]-6,33.5,north+12,22,7,14,yellow);box(g,center[0]-14,33.5,north+6,18,7,4,yellow);
 for(const h of [8,14,20])box(g,center[0]-10,h,north-1,22,.65,4,white);
 box(g,west+41,29,north+24,4,58,4,yellow);box(g,west+41,61,north+24,3.2,8,3.2,glass);for(const x of [-1.8,1.8])for(const z of [-1.8,1.8])box(g,west+41+x,62,north+24+z,.2,8,.2,white);
 box(g,center[0],30.3,center[1],20,.6,50,white);
 }
 let result=merge(g);result.userData.landmark=meta.id;result.name=meta.name;return result;
}
export function inside(point,poly){let c=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>point[1])!==(b[1]>point[1])&&point[0]<(b[0]-a[0])*(point[1]-a[1])/(b[1]-a[1])+a[0])c=!c}return c;}
