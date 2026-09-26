import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const args=process.argv.slice(2);
const value=(name,fallback)=>args.includes(name)?args[args.indexOf(name)+1]:fallback;
const port=Number(value('--port','8765'));
const base='/'+value('--base','/').replace(/^\/+|\/+$/g,'');
const prefix=base==='/'?'/':base+'/';
const root=fileURLToPath(new URL('../site/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.glb':'model/gltf-binary','.ttf':'font/ttf','.woff2':'font/woff2','.md':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
  let name;
  try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
  if(name===base&&base!=='/'){res.writeHead(302,{Location:prefix});res.end();return;}
  if(!name.startsWith(prefix)){res.writeHead(404);res.end('Not found');return;}
  let file=path.resolve(root,name.slice(prefix.length)||'index.html');
  if(!file.startsWith(root)){res.writeHead(403);res.end();return;}
  if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
  if(!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end('Not found');return;}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Content-Length':fs.statSync(file).size,'Cache-Control':'no-store'});
  if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);
}).listen(port,'127.0.0.1',()=>console.log(`RDAM39: http://127.0.0.1:${port}${prefix}`));
