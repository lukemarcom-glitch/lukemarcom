import * as T from '../vendor/three.module.js';

// Each envelope is anchored to the historical map. Only source-visible features
// are articulated; the catalog records estimated heights and hidden elevations.
export function buildCity28(meta,{material,box,merge}){
 const g=new T.Group(),m={stone:material('#bcb8a7'),cream:material('#ded7c6'),brick:material('#886751',true),dark:material('#292f2e'),roof:material('#4f5453'),glass:material('#40565b'),green:material('#849082'),white:material('#ede8dc'),red:material('#ad332a'),blue:material('#244b85'),yellow:material('#e6c341')};
 const b=(o,x,y,z,w,h,d,mat=m.stone)=>{if(![x,y,z,w,h,d].every(Number.isFinite))throw Error(`Invalid dimensions: ${meta.id}`);return box(o,x,y,z,w,h,d,mat)};
 function part(o,x=0,z=0,a=0){const q=new T.Group();q.position.set(x,0,z);q.rotation.y=a;o.add(q);return q}
 function face(o,p,mat){const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(p.flat(),3));geo.setAttribute('uv',new T.Float32BufferAttribute(p.flatMap(v=>[v[0]/4,v[1]/4]),2));geo.computeVertexNormals();const q=new T.Mesh(geo,mat);o.add(q);return q}
 function hip(o,w,d,y,h,mat=m.roof){const x=w/2,z=d/2,r=Math.min(w,d)*.35,a=[-x,y,-z],c=[x,y,-z],e=[x,y,z],f=[-x,y,z],u=[0,y+h,-z+r],v=[0,y+h,z-r];face(o,[a,u,c,c,u,v,c,v,e,e,v,f,f,v,u,f,u,a],mat)}
 function gable(o,w,d,y,h,wall=m.stone){const x=w/2,z=d/2;for(const s of [-1,1]){face(o,[[s*x,y,-z],[s*x,y,z],[0,y+h,z],[s*x,y,-z],[0,y+h,z],[0,y+h,-z]],m.roof);face(o,[[-x,y,s*z],[x,y,s*z],[0,y+h,s*z]],wall)}}
 function win(o,x,y,z,w,h,trim=m.cream){b(o,x,y,z,w+.16,h+.16,.14,trim);b(o,x,y,z+.09,w,h,.1,m.glass);b(o,x,y,z+.17,.075,h,.08,trim)}
 function arch(o,x,y,z,w,h,mat=m.glass){const r=w/2,s=new T.Shape();s.moveTo(-r,0);s.lineTo(r,0);s.lineTo(r,h-r);s.absarc(0,h-r,r,0,Math.PI,false);s.closePath();const q=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.09,bevelEnabled:false,curveSegments:10}),mat);q.position.set(x,y,z);o.add(q);return q}
 function band(o,w,d,y,mat=m.cream){b(o,0,y,0,w+.25,.22,d+.25,mat)}
 const glyph={V:['10001','10001','10001','10001','10001','01010','00100'],A:['01110','10001','10001','11111','10001','10001','10001'],C:['01111','10000','10000','10000','10000','10000','01111'],D:['11110','10001','10001','10001','10001','10001','11110'],E:['11111','10000','10000','11110','10000','10000','11111'],G:['01111','10000','10000','10111','10001','10001','01110'],H:['10001','10001','10001','11111','10001','10001','10001'],I:['111','010','010','010','010','010','111'],L:['10000','10000','10000','10000','10000','10000','11111'],M:['10001','11011','10101','10101','10001','10001','10001'],N:['10001','11001','11001','10101','10011','10011','10001'],O:['01110','10001','10001','10001','10001','10001','01110'],R:['11110','10001','10001','11110','10100','10010','10001'],S:['01111','10000','10000','01110','00001','00001','11110'],T:['11111','00100','00100','00100','00100','00100','00100'],U:['10001','10001','10001','10001','10001','10001','01110']};
 function text(o,str,x,y,z,h,maxWidth,mat=m.cream){const chars=[...str],units=chars.reduce((n,c)=>n+(glyph[c]?.[0].length||3)+1,0)-1,px=Math.min(h/7,maxWidth/units);let xx=x-units*px/2;for(const c of chars){const rows=glyph[c];if(rows)rows.forEach((row,j)=>[...row].forEach((v,k)=>{if(v==='1')b(o,xx+k*px,y+(3-j)*px,z,px*.91,px*.91,.055,mat)}));xx+=((rows?.[0].length||3)+1)*px}}
 if(meta.id==='cafe-de-unie'){
  const w=meta.modelWidth,d=meta.modelDepth,h=12.4,f=part(g,0,d/2+.04);
  b(g,0,5.3,-.1,w,10.6,d,m.stone);b(g,0,10.7,-.1,w,.22,d,m.roof);
  b(f,0,h/2,0,w,h,.35,m.white);b(f,0,1.75,.22,w-.28,3.3,.15,m.blue);
  for(const x of [-w*.36,-w*.12,w*.12]){b(f,x,1.75,.33,w*.21,3.1,.12,m.glass);b(f,x-w*.105,1.75,.42,.14,3.2,.13,m.white)}
  b(f,w*.37,1.7,.36,w*.21,3.1,.15,m.white);b(f,w*.37,1.8,.46,w*.16,2.65,.07,m.glass);
  b(f,w*.085,10.02,.23,w*.83,4.08,.12,m.red);
  // Five upper panes within the canary-yellow surround, three lower groups.
  b(f,-w*.14,8.72,.35,w*.58,2.15,.12,m.yellow);
  for(let i=0;i<5;i++)win(f,-w*.385+i*w*.116,8.72,.44,w*.095,1.85,m.white);
  for(let i=0;i<3;i++){const x=-w*.33+i*w*.235;win(f,x,5.22,.3,w*.205,1.75,m.white);b(f,x,5.48,.48,w*.205,.1,.08,m.white);b(f,x,5.92,.49,.07,.8,.08,m.white)}
  b(f,w*.41,6.13,.4,.47,2.7,.18,m.blue);for(let i=0;i<4;i++)text(f,'UNIE'[i],w*.41,6.85-i*.48,.52,.42,.4,m.white);
  b(f,0,11.84,.39,w-.45,1.08,.15,m.dark);text(f,'DE UNIE',0,11.82,.52,.92,w-.8,m.white);
  // Projecting sign at the left; text is schematic while the mass is preserved.
  const sign=part(f,-w/2-.08,.45,Math.PI/2);b(sign,0,9.4,0,.58,4.7,.2,m.blue);for(let i=0;i<4;i++)text(sign,'CAFE'[i],0,11.1-i*.48,.14,.39,.48,m.white);
 }else if(meta.id==='doelen-coolsingel'){
  const w=meta.modelWidth,d=meta.modelDepth,wall=m.green;
  b(g,0,5.2,0,w,10.4,d,wall);gable(g,w,d,10.4,4.3,wall);
  const f=part(g,w/2-3.5,d/2+.03);b(f,0,5.4,.65,8,10.8,2,wall);b(f,0,10.8,.65,8.3,.28,2.3,m.cream);
  for(let i=0;i<5;i++)win(f,(i-2)*1.27,9.35,1.72,.88,1.3,m.cream);
  b(f,0,2.1,1.72,6.6,4,.12,m.dark);for(let i=-2;i<=2;i++)b(f,i*1.3,2.1,1.81,.1,4,.1,m.cream);
  b(f,0,4.22,2.15,8.4,.25,3,m.roof);text(f,'DE DOELEN',0,7.75,1.81,.7,7.4,m.cream);
  for(const s of [-1,1]){const side=part(g,s*w/2,0,s*Math.PI/2);for(let x=-d/2+3;x<d/2-2;x+=4.7)win(side,x,9,.07,3.7,.8,m.cream);}
  const annex=part(g,w/2+4.5,2);b(annex,0,2,0,9,4,25,wall);b(annex,0,4.15,0,9.3,.28,25.3,m.cream);for(let z=-12;z<=12;z+=3){b(annex,4.4,4.7,z,.09,1.05,.1,m.dark)}b(annex,4.4,5.22,0,.09,.1,25,m.dark);
 }else if(meta.id==='scala-kruiskade'){
  const w=meta.modelWidth,d=meta.modelDepth,f=part(g,0,d/2+.05);
  b(g,0,8.3,0,w,16.6,d,m.stone);b(g,0,16.7,0,w+.2,.25,d+.2,m.roof);
  b(f,0,8.6,0,w,17.2,.4,m.cream);b(f,0,2.4,.24,w,4.8,.2,m.dark);
  // Seven narrow window axes repeated on three floors, documented in Paalman.
  for(let j=0;j<3;j++)for(let i=0;i<7;i++)win(f,-w*.34+i*w*.102,6.5+j*3.5,.3,.75,2.6,m.stone);
  for(const y of [4.8,8.1,11.6,15.2,17.3])b(f,0,y,.45,w+.15,.16,.25,m.stone);
  b(f,-w*.09,2.2,.35,w*.55,4.1,.18,m.glass);
  for(let i=0;i<5;i++){const x=-w*.32+i*w*.115;b(f,x,2.2,.51,.13,4.1,.15,m.cream);b(f,x+w*.055,2.6,.52,w*.10,.08,.12,m.cream)}
  b(f,-w*.09,4.7,1.25,w*.70,.4,2.7,m.dark);text(f,'SCALA',-w*.09,4.7,2.64,.40,w*.60,m.cream);
  for(const x of [-w*.35,w*.17]){b(f,x,3.9,1,.24,.55,.3,m.yellow);b(f,x,4.25,1,.08,.45,.08,m.dark)}
  const sign=part(f,w*.37,1,Math.PI/2);b(sign,0,11.2,0,1.35,9,.22,m.dark);for(let i=0;i<5;i++)text(sign,'SCALA'[i],0,14.2-i*1.4,.16,.98,1.15,m.cream);
  // Shallow monochrome tile joints; their exact period hue is not known.
  for(let y=.3;y<4.5;y+=.45)b(f,0,y,.40,w,.025,.025,m.stone);
 }else if(meta.id==='lumiere-coolsingel'){
  const w=meta.modelWidth,d=meta.modelDepth;
  b(g,0,6,0,w,12,d,m.brick);b(g,0,12.2,0,w+.12,.3,d+.12,m.roof);
  const f=part(g,0,d/2-3.5);b(f,0,10.6,0,w,21.2,7,m.stone);
  b(f,0,21.3,0,w+.24,.3,7.2,m.dark);hip(f,w,7,21.45,4.3,m.roof);
  const front=part(f,0,3.57);
  b(front,0,2.5,0,w-.5,4.8,.12,m.dark);b(front,0,2.45,.12,w*.66,4.5,.12,m.glass);
  for(let i=0;i<4;i++)b(front,(i-1.5)*w*.18,2.5,.23,.10,4.4,.1,m.cream);
  b(front,0,4.9,1,w+.4,.7,2.1,m.dark);text(front,'LUMIERE',0,4.9,2.10,.51,w-.2,m.cream);
  for(const y of [7.6,11.3,15,18.7]){
   b(front,0,y,.1,w-.9,2.6,.16,m.glass);
   for(let i=0;i<=4;i++)b(front,-w*.41+i*w*.205,y,.25,.10,2.65,.14,m.cream);
   b(front,0,y-1.4,.2,w,.23,.35,m.stone);if(y<18){b(front,0,y-1.15,.72,w-.6,.12,1.3,m.cream);b(front,0,y-.25,1.30,w-.6,.09,.09,m.cream);for(let x=-w/2+.5;x<w/2-.3;x+=.6)b(front,x,y-.7,1.3,.055,.9,.055,m.cream)}
  }
  b(front,0,21.9,.1,w+.15,1.05,.28,m.dark);text(front,'LUMIERE',0,21.9,.29,.61,w-.3,m.cream);
  for(const x of [-w/2+.23,w/2-.23])b(front,x,13,.3,.18,16,.2,m.cream);
 }else if(meta.id==='grand-theatre'){
  const w=meta.modelWidth,d=meta.modelDepth;
  b(g,0,7.8,0,w,15.6,d,m.brick);b(g,0,15.7,0,w+.2,.25,d+.2,m.roof);
  const f=part(g,0,d/2+.10);b(f,0,8.8,0,w,17.6,.45,m.brick);
  for(const y of [4.6,7.4,15.6,17.5])b(f,0,y,.3,w+.25,.34,.4,m.stone);
  for(let i=0;i<7;i++){const x=-w*.40+i*w*.13;win(f,x,11.5,.3,w*.080,7.3,m.stone);b(f,x,12,.52,w*.082,.11,.13,m.stone);b(f,x,14.1,.52,w*.082,.1,.12,m.stone);b(f,x,3,.2,w*.082,3.2,.15,m.glass)}
  b(f,0,4.8,1.6,w+.4,.55,3.4,m.cream);text(f,'GRAND THEATRE',0,5.4,3.28,.82,w-.8,m.dark);
  const t=part(g,-w*.36,d/2-3);b(t,0,12.6,0,4.7,25.2,5.2,m.brick);b(t,0,25.35,0,4.9,.25,5.4,m.stone);
  const disk=new T.Mesh(new T.CylinderGeometry(1.08,1.08,.12,24),m.cream);disk.rotation.x=Math.PI/2;disk.position.set(0,22.5,2.67);t.add(disk);b(t,0,22.82,2.76,.10,.70,.06,m.dark);b(t,.29,22.48,2.76,.66,.09,.06,m.dark);b(t,0,27.5,0,.09,4.2,.09,m.dark);
  const sign=part(f,-w*.36,3.2,Math.PI/2);b(sign,0,18.7,0,4.7,4.2,.2,m.dark);text(sign,'GRAND',0,19.7,.14,.76,4.3,m.cream);text(sign,'THEATRE',0,18.6,.14,.65,4.3,m.cream);text(sign,'VARIETE',0,17.6,.14,.56,4.3,m.cream);

 }
 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
