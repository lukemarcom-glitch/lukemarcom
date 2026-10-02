import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs';import {createLandmark,configureLandmarkContext} from './models.js';
const catalog=JSON.parse(fs.readFileSync(new URL('./catalog.json',import.meta.url)));configureLandmarkContext(catalog);for(const m of catalog){const g=createLandmark(m);const meshes=g.children.map(o=>({position:Array.from(o.geometry.attributes.position.array),uv:Array.from(o.geometry.attributes.uv.array),pixels:Array.from(o.material.map.image.data),width:64}));fs.writeFileSync(new URL(`./${m.id}/geometry.json`,import.meta.url),JSON.stringify({meta:m,meshes}));console.log(m.id,meshes.reduce((n,x)=>n+x.position.length/9,0),'triangles',meshes.length,'materials');}

// Every landmark export also clears its surroundings from the original background.
const python=process.env.PYTHON||'python3';
execFileSync(python,[fileURLToPath(new URL('./clip_background.py',import.meta.url))],{stdio:'inherit'});
