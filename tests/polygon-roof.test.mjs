import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../site/vendor/three.module.js';
import {buildCity32} from '../site/landmarks/city32-models.js';

const api={material:c=>new T.MeshStandardMaterial({color:c}),box:(g,x,y,z,w,h,d,mat)=>{const o=new T.Mesh(new T.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);g.add(o);return o},merge:g=>g};
test('convex corner roof meets all five eaves without a rectangular cap',()=>{
 const W=7.748,D=9.676,C=3.962,CZ=2.466,H=12.4;
 const outline=[[-W/2,D/2-CZ],[-W/2+C,D/2],[W/2,D/2],[W/2,-D/2],[-W/2,-D/2]];
 const root=buildCity32({id:'test-corner',name:'Test',center:[0,0],modelSpec:{parts:[{w:W,d:D,h:H,body:false,windows:false,roofPolygon:outline,roofApex:[0,-1],roofHeight:3}]}},api);
 let triangleCount=0;const eaves=new Set();
 root.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position,n=o.geometry.attributes.normal;triangleCount+=a.count/3;
  for(let i=0;i<a.count;i++){const x=a.getX(i),y=a.getY(i),z=a.getZ(i);assert.ok([x,y,z].every(Number.isFinite));assert.ok(y>=H-1e-5&&y<=H+3+1e-5);assert.ok(x+W/2+(C/CZ)*(D/2-z)-C>=-1e-5);assert.ok(n.getY(i)>0);if(Math.abs(y-H)<1e-5)eaves.add(`${x.toFixed(3)},${z.toFixed(3)}`)}
 });
 assert.equal(triangleCount,5);assert.equal(eaves.size,5);
});
