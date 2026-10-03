import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as T from '../site/vendor/three.module.js';
import {buildCity32} from '../site/landmarks/city32-models.js';
function vertices(vertexDeform){
 const api={material:c=>new T.MeshStandardMaterial({color:c}),box:(g,x,y,z,w,h,d,mat)=>{const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);g.add(m);return m;},merge:g=>g};
 const root=buildCity32({id:'parcel-check',center:[0,0],modelSpec:{parts:[{w:8,d:12,h:6,windows:false,roof:'none'}],vertexDeform}},api);
 const out=[];root.traverse(m=>{if(m.isMesh){const a=m.geometry.attributes.position;for(let i=0;i<a.count;i++)out.push([a.getX(i),a.getY(i),a.getZ(i)]);}});return out;
}
test('Parcel bounds without a front origin keep the entire rendered mesh finite',()=>{
 const points=vertices({minX:-3,maxX:3});assert.ok(points.length>0);
 for(const [x,y,z]of points){assert.ok([x,y,z].every(Number.isFinite));assert.ok(x>=-3&&x<=3);}
});
test('Both sloping parcel boundaries contain the rendered building without changing its height',()=>{
 const plain=vertices({minX:-3,maxX:3});const shaped=vertices({frontZ:6,minX:-3,minXSlope:.1,maxX:3,maxXSlope:-.1});
 assert.equal(shaped.length,plain.length);
 for(let i=0;i<shaped.length;i++){const[x,y,z]=shaped[i];assert.equal(y,plain[i][1]);assert.ok(x>=-3+.1*(6-z)-1e-6);assert.ok(x<=3-.1*(6-z)+1e-6);}
});
