import * as T from '../vendor/three.module.js';
export async function loadModern(scene,renderer){
 const response=await fetch('modern/model.json');if(!response.ok)throw Error('Huidige kaartgegevens ontbreken');const data=await response.json();
 const tex=await new Promise((resolve,reject)=>new T.TextureLoader().load('modern/luchtfoto-2025.jpg',resolve,undefined,reject));tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=renderer.capabilities.getMaxAnisotropy();
 const [nw,ne,se,sw]=data.corners;const positions=[];for(const q of [nw,sw,se,nw,se,ne])positions.push(q[0],.08,-q[1]);const geom=new T.BufferGeometry();geom.setAttribute('position',new T.Float32BufferAttribute(positions,3));geom.setAttribute('uv',new T.Float32BufferAttribute([0,1,0,0,1,0,0,1,1,0,1,1],2));geom.computeVertexNormals();
 const aerial=new T.Mesh(geom,new T.MeshBasicMaterial({map:tex,toneMapped:false}));aerial.visible=false;scene.add(aerial);
 const group=new T.Group();group.visible=false;scene.add(group);let built=false,pending=null;
 async function build(){if(built)return;if(pending)return pending;pending=(async()=>{
 const walls=[],roofs=[],wallN=[],uv=[];let k=0;
 for(const f of data.buildings){
 const shape=new T.Shape(f.rings[0].slice(0,-1).map(([x,y])=>new T.Vector2(x,y)));for(const ring of f.rings.slice(1))shape.holes.push(new T.Path(ring.slice(0,-1).map(([x,y])=>new T.Vector2(x,y))));
 const g=new T.ExtrudeGeometry(shape,{depth:f.height,bevelEnabled:false,curveSegments:1});g.rotateX(-Math.PI/2);const p=g.attributes.position,n=g.attributes.normal;
 for(let i=0;i<p.count;i+=3){if(n.getY(i)<-.8)continue;const roof=n.getY(i)>.8;for(let j=i;j<i+3;j++){const x=p.getX(j),y=p.getY(j)+.15,z=p.getZ(j);if(roof){roofs.push(x,y,z);uv.push((x-nw[0])/(ne[0]-nw[0]),(-z-sw[1])/(nw[1]-sw[1]))}else{walls.push(x,y,z);wallN.push(n.getX(j),n.getY(j),n.getZ(j))}}}g.dispose();if(++k%250===0)await new Promise(requestAnimationFrame);
 }
 const wg=new T.BufferGeometry();wg.setAttribute('position',new T.Float32BufferAttribute(walls,3));wg.setAttribute('normal',new T.Float32BufferAttribute(wallN,3));const wm=new T.Mesh(wg,new T.MeshStandardMaterial({color:'#c5bfae',roughness:1}));group.add(wm);
 const rg=new T.BufferGeometry();rg.setAttribute('position',new T.Float32BufferAttribute(roofs,3));rg.setAttribute('uv',new T.Float32BufferAttribute(uv,2));rg.computeVertexNormals();group.add(new T.Mesh(rg,new T.MeshBasicMaterial({map:tex,toneMapped:false})));
 built=true;
 })();try{await pending}catch(e){pending=null;throw e}}
 const labelRoot=document.createElement('div');labelRoot.id='modern-labels';labelRoot.setAttribute('aria-hidden','true');labelRoot.hidden=true;document.querySelector('main').append(labelRoot);
 const labels=data.labels.map(p=>{const el=document.createElement('div');el.className='place-label modern-label';el.textContent=p.name;labelRoot.append(el);return {el,position:new T.Vector3(p.position[0],3,-p.position[1])}});
 return {data,aerial,group,labels,labelRoot,build};
}
