import fs from 'node:fs';
import {createLandmark,configureLandmarkContext} from '../../site/landmarks/models.js';
import {Vector3} from '../../site/vendor/three.module.js';
const catalog=JSON.parse(fs.readFileSync('site/landmarks/catalog.json'));
configureLandmarkContext(catalog);
const out=[];
for(const meta of catalog){
 const g=createLandmark(meta);g.updateMatrixWorld(true);const triangles=[];
 g.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position,ix=o.geometry.index;const n=ix?ix.count:p.count;
  for(let i=0;i<n;i+=3){const tri=[];for(let j=0;j<3;j++){const v=new Vector3().fromBufferAttribute(p,ix?ix.getX(i+j):i+j).applyMatrix4(o.matrixWorld);tri.push(v.toArray());}triangles.push(tri);}
 });out.push({id:meta.id,center:meta.center,triangles});
}
fs.writeFileSync('research/sol61-controle/meshes.json',JSON.stringify(out));
console.log(`Dumped ${out.length} exact runtime models`);
