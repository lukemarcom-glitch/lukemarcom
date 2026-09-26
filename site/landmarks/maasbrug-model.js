import * as T from '../vendor/three.module.js';

// Dimensions are documented in the companion source register. Local x follows
// the historic bridge axis, z crosses the deck, and y is height above the map.
export function buildMaasbrug(meta,{material,box,merge}){
 const g=new T.Group(),railway=meta.bridgeType==='railway';
 const steel=material(railway?'#929b98':'#67726f'),edge=material(railway?'#717c78':'#596460'),stone=material('#aaa69a',true),cap=material('#c2bdb1'),deck=material('#9b9588'),rail=material('#555f5d'),wood=material('#655b48');
 const [a,b]=meta.route,L=Math.hypot(b[0]-a[0],b[1]-a[1]);
 g.position.set(a[0],0,-a[1]);g.rotation.y=Math.atan2(b[1]-a[1],b[0]-a[0]);
 const level=meta.deckHeight,width=railway?8.5:10.7,totalWidth=railway?11.6:19;
 function beam(a,b,w,d,mat=steel){
  const A=new T.Vector3(...a),B=new T.Vector3(...b),v=B.clone().sub(A),mesh=new T.Mesh(new T.BoxGeometry(w,v.length(),d),mat);
  mesh.position.copy(A).add(B).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());g.add(mesh);return mesh;
 }
 function pier(x,abutment=false){
  const half=railway?6.4:10.8,thickness=abutment?3.4:2.9;
  const shape=new T.Shape([[-thickness,-half],[0,-half-2.1],[thickness,-half],[thickness,half],[0,half+2.1],[-thickness,half]].map(p=>new T.Vector2(...p)));
  const geo=new T.ExtrudeGeometry(shape,{depth:level-1.25,bevelEnabled:false});geo.rotateX(-Math.PI/2);
  const mesh=new T.Mesh(geo,stone);mesh.position.set(x,.25,0);g.add(mesh);
  box(g,x,level-.8,0,thickness*2+.7,.7,half*2+.8,cap);
  box(g,x,1.2,0,thickness*2+.4,.7,half*2+.25,edge);
 }
 function parapet(start,end,z){
  box(g,(start+end)/2,level+1.3,z,end-start,.13,.13,steel);
  box(g,(start+end)/2,level+.65,z,end-start,.09,.09,edge);
  for(let x=start;x<end;x+=2.3)box(g,x,level+.75,z,.11,1.4,.11,steel);
 }
 // Through girders stay open: no opaque walls between the deck and top chord.
 box(g,L/2,level-.25,0,L+2,.65,totalWidth,deck);
 for(const z of [-totalWidth/2,totalWidth/2])parapet(0,L,z);
 if(railway){
  const spans=[64.5,90,90,90,64.5].map(s=>s*L/399);let start=0;
  pier(0,true);
  for(let s=0;s<spans.length;s++){
   const len=spans[s],n=s===0||s===4?14:20,peak=s===0||s===4?12.53:14.65,base=6.65;
   const top=t=>level+base+(peak-base)*4*t*(1-t);
   for(const z of [-width/2,width/2]){
    box(g,start+len/2,level+.12,z,len,.65,.55,steel);
    for(let i=0;i<=n;i++){
     const x=start+len*i/n;beam([x,level+.4,z],[x,top(i/n),z],.26,.28);
     if(i<n)beam([x,top(i/n),z],[x+len/n,top((i+1)/n),z],.48,.48);
     // Double lattice with diagonals crossing two panels, as in the photographs.
     if(i+2<=n){beam([x,level+.4,z],[x+2*len/n,top((i+2)/n),z],.19,.2);beam([x,top(i/n),z],[x+2*len/n,level+.4,z],.19,.2);}
    }
   }
   for(let i=0;i<=n;i+=2){
    const x=start+len*i/n,h=top(i/n);box(g,x,h,0,.26,.28,width+.45,steel);
    if(i<n){beam([x,h,-width/2],[x+2*len/n,top((i+2)/n),width/2],.14,.14);beam([x,h,width/2],[x+2*len/n,top((i+2)/n),-width/2],.14,.14);}
   }
   start+=len;pier(start,s===spans.length-1);
  }
  for(let x=0;x<L;x+=.8)for(const z of [-1.8,1.8])box(g,x,level+.17,z,.22,.17,2.65,wood);
  for(const center of [-1.8,1.8])for(const sign of [-1,1])box(g,L/2,level+.34,center+sign*1.435/2,L,.15,.1,rail);
 }else{
  // Three approximately 89 m main spans, with short approach decks at both ends.
  const span=89,approach=(L-3*span)/2;
  for(let s=0;s<3;s++){
   const start=approach+s*span,n=20,top=level+10;
   for(const z of [-width/2,width/2]){
    for(const y of [level+.2,top])box(g,start+span/2,y,z,span,.58,.52,steel);
    for(let i=0;i<=n;i++){
     const x=start+span*i/n;box(g,x,level+5,z,.26,10,.28,steel);
     if(i+2<=n){beam([x,level+.4,z],[x+2*span/n,top,z],.2,.2);beam([x,top,z],[x+2*span/n,level+.4,z],.2,.2);}
     // Outboard pavement/cycleway, widened before the period shown.
     if(i%2===0)beam([x,level-2,z],[x,level-.25,Math.sign(z)*totalWidth/2],.22,.22,edge);
    }
   }
   for(let i=0;i<=n;i+=2){
    const x=start+span*i/n;box(g,x,top,0,.3,.3,width+.5,steel);
    if(i<n){beam([x,top,-width/2],[x+2*span/n,top,width/2],.16,.16);beam([x,top,width/2],[x+2*span/n,top,-width/2],.16,.16);}
   }
  }
  for(let i=0;i<=3;i++)pier(approach+i*span,i===0||i===3);
  for(const z of [-7.35,7.35])box(g,L/2,level+.16,z,L,.23,3.65,cap);
  // Tram rails visible in the 1933 deck photograph. No speculative rolling stock.
  for(const center of [-3.25,3.25])for(const sign of [-1,1])box(g,L/2,level+.1,center+sign*1.435/2,L,.1,.075,rail);
  for(const z of [-3.25,3.25])box(g,L/2,level+5.5,z,L,.035,.035,edge);
 }
 const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
