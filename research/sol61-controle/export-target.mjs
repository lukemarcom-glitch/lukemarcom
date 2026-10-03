// Single-target equivalent of existing export.mjs; does not dump every model or recut background.
import fs from 'node:fs';
import {createLandmark,configureLandmarkContext} from '../../site/landmarks/models.js';
const id=process.argv[2];const catalog=JSON.parse(fs.readFileSync('site/landmarks/catalog.json'));const meta=catalog.find(m=>m.id===id);if(!meta)throw Error(`Unknown landmark: ${id}`);
configureLandmarkContext(catalog);const g=createLandmark(meta);
const meshes=g.children.map(o=>({position:Array.from(o.geometry.attributes.position.array),uv:Array.from(o.geometry.attributes.uv.array),pixels:Array.from(o.material.map.image.data),width:64}));
fs.writeFileSync(`site/landmarks/${id}/geometry.json`,JSON.stringify({meta,meshes}));
console.log({id,triangles:meshes.reduce((n,x)=>n+x.position.length/9,0),materials:meshes.length});
