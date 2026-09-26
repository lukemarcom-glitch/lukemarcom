import * as T from '../vendor/three.module.js';

// Early completed form, circa 1940–1944. Historic photographs, not today's WTC.
// Footprint follows map block M0319; only the 90 x 60 m hall is dimensionally sourced.
export function buildBeursCoolsingel(meta,{material,box,merge}){
 const g=new T.Group();
 const wall=material('#bdc0b5',true),trim=material('#d2d3c7'),glass=material('#586d70'),frame=material('#5e6b65'),roof=material('#737974'),roofGlass=material('#adbab4'),red=material('#995d45',true),green=material('#56776a'),granite=material('#9b9c92'),gray=material('#a0a398'),pale=material('#c9cbc2');
 const b=(o,x,y,z,w,h,d,m=wall)=>box(o,x,y,z,w,h,d,m);
 const part=(x,z,a=0)=>{const p=new T.Group();p.position.set(x,0,z);p.rotation.y=a;g.add(p);return p;};
 function mesh(o,geo,m,x=0,y=0,z=0){const p=new T.Mesh(geo,m);p.position.set(x,y,z);o.add(p);return p;}
 function face(o,vs,m){m.side=T.DoubleSide;const q=new T.BufferGeometry();q.setAttribute('position',new T.Float32BufferAttribute(vs.flat(),3));q.setAttribute('uv',new T.Float32BufferAttribute(vs.flatMap(v=>[v[0]/4,v[1]/4]),2));q.computeVertexNormals();return mesh(o,q,m);}
 function cyl(o,x,y,z,r,h,m,top=r){return mesh(o,new T.CylinderGeometry(top,r,h,16),m,x,y,z);}
 function beam(o,a,c,r,m=frame){const v=new T.Vector3(...c).sub(new T.Vector3(...a)),p=cyl(o,(a[0]+c[0])/2,(a[1]+c[1])/2,(a[2]+c[2])/2,r,v.length(),m);p.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),v.normalize());}
 // Continuous steel window bands; y levels are estimated from archival elevations.
 function bands(o,width,levels,step=2.4){for(const y of levels){b(o,0,y,.1,width,2.55,.14,glass);b(o,0,y-1.34,.18,width,.14,.3,trim);for(let x=-width/2+.3;x<width/2;x+=step)b(o,x,y,.22,.1,2.6,.11,frame);b(o,0,y+.28,.23,width,.08,.12,frame);}}
 function shops(o,width){b(o,0,2.4,.1,width,3.6,.13,glass);for(let x=-width/2;x<=width/2;x+=4.7)b(o,x,2.4,.22,.32,4.2,.32,trim);b(o,0,4.55,.26,width,.32,.6,trim);}
 function block(x,z,w,d,h){b(g,x,h/2,z,w,h,d);b(g,x,h+.14,z,w+.2,.28,d+.2,roof);}
 // Coolsingel and Meent office wings, with original recessed upper floor.
 block(-46,-10,16,100,20.5);block(0,-52,108,16,20.5);
 block(-44,-10,11,98,23.6);block(2,-52,102,11,23.6);
 const west=part(-54.05,-10,-Math.PI/2);shops(west,99);bands(west,99,[6.6,10.25,13.9,17.55]);
 const north=part(0,-60.05,Math.PI);shops(north,107);bands(north,107,[6.6,10.25,13.9,17.55]);
 bands(part(-49.58,-10,-Math.PI/2),97,[22]);bands(part(2,-57.58,Math.PI),101,[22]);
 bands(part(-37.95,-10,Math.PI/2),97,[6.6,10.25,13.9,17.55]);
 bands(part(1,-43.94),104,[6.6,10.25,13.9,17.55]);
 const northEast=part(54.06,-52,Math.PI/2);bands(northEast,15,[6.6,10.25,13.9,17.55]);
 // Hall: low perimeter beneath a broad, shallow barrel vault (90 x 60 m).
 const h=part(8,2),hw=60,hd=90,eave=13.7,rise=6.3;
 b(h,0,3.1,0,hw,6.2,hd,wall);b(h,0,10,0,hw-.25,7.6,hd-.25,glass);
 const curve=t=>eave+rise*Math.sin(Math.PI*t),steps=24;
 for(let i=0;i<steps;i++){
  const x=-hw/2+hw*i/steps,xx=x+hw/steps,y=curve(i/steps),yy=curve((i+1)/steps);
  face(h,[[x,y,-hd/2],[xx,yy,-hd/2],[xx,yy,hd/2],[x,y,-hd/2],[xx,yy,hd/2],[x,y,hd/2]],roofGlass);
  for(const z of [-hd/2-.015,hd/2+.015])face(h,[[x,eave,z],[xx,eave,z],[xx,yy,z],[x,eave,z],[xx,yy,z],[x,y,z]],glass);
 }
 // Seven principal curved ribs and light longitudinal panel framing.
 for(let j=0;j<7;j++)for(let i=0;i<steps;i++)beam(h,[-hw/2+hw*i/steps,curve(i/steps)+.09,-hd/2+j*hd/6],[-hw/2+hw*(i+1)/steps,curve((i+1)/steps)+.09,-hd/2+j*hd/6],.095,trim);
 for(let i=0;i<=steps;i+=2)b(h,-hw/2+hw*i/steps,curve(i/steps)+.13,0,.10,.10,hd,frame);
 for(const z of [-hd/2-.17,hd/2+.17]){
  for(let x=-hw/2;x<=hw/2;x+=3){const top=curve((x+hw/2)/hw);b(h,x,(top+6)/2,z,.12,top-6,.15,trim);}
  for(const y of [6.3,9.5,12.5])b(h,0,y,z,hw,.13,.15,trim);
 }
 // Original low Rodezand range: large glazed bays, no postwar extra floors.
 block(46,1.5,16,91,6.2);b(g,46,6.3,1.5,16.3,.2,91.3,roof);
 const east=part(54.05,1.5,Math.PI/2);b(east,0,3.5,.1,90,4.8,.16,glass);for(let x=-44;x<45;x+=4.5)b(east,x,3.5,.21,.23,5.1,.2,trim);
 for(let z=-40;z<45;z+=5){b(g,38.18,9.9,z,.22,7.7,.22,trim);b(g,-22.18,9.9,z,.22,7.7,.22,trim);}
 // South service strip with the round rooflights seen in 1941–42 photographs.
 block(9,53,59,12,6.4);b(g,9,6.55,53,59.4,.25,12.4,roof);
 for(let x=-15;x<37;x+=6){cyl(g,x,6.83,53,1.1,.32,trim);cyl(g,x,7.01,53,.87,.09,roofGlass);}
 const south=part(9,59.05);shops(south,58);
 // The Chamber of Commerce hall over the six-column Coolsingel entrance.
 const q=part(-37,49,Math.PI/2),qw=20,qd=38,qbase=7.2,qtop=19.9;
 b(q,0,6.95,0,qw+.8,.5,qd+.8,granite);b(q,0,13.6,0,qw,12.7,qd,wall);
 for(const x of [-8,8])for(const z of [-15,0,15])b(q,x,3.45,z,1.1,6.9,1.1,granite);
 // Red tiled barrel running toward the Coolsingel, with a glass end elevation.
 const qrise=3.8;
 for(let i=0;i<16;i++){const x=-qw/2+qw*i/16,xx=x+qw/16,y=qtop+qrise*Math.sin(Math.PI*i/16),yy=qtop+qrise*Math.sin(Math.PI*(i+1)/16);face(q,[[x,y,-qd/2],[xx,yy,-qd/2],[xx,yy,qd/2],[x,y,-qd/2],[xx,yy,qd/2],[x,y,qd/2]],red);face(q,[[x,qtop,-qd/2-.08],[xx,qtop,-qd/2-.08],[xx,yy,-qd/2-.08],[x,qtop,-qd/2-.08],[xx,yy,-qd/2-.08],[x,y,-qd/2-.08]],glass);}
 b(q,0,14.6,-qd/2-.08,qw-1,10.2,.2,glass);
 for(let x=-9;x<=9;x+=1.5){const top=qtop+qrise*Math.sin(Math.PI*(x+qw/2)/qw);b(q,x,(top+9.5)/2,-qd/2-.21,.11,top-9.5,.15,trim);}for(const y of [9.6,13,16.5,19.8])b(q,0,y,-qd/2-.22,qw,.11,.17,trim);
 // Diamond-patterned south face: three documented grey tones, no invented relief.
 for(let x=-54.5;x<-19.5;x+=2.4)for(let y=9.2;y<19;y+=2.4){const d=mesh(g,new T.PlaneGeometry(1.65,1.65),((Math.round((x+54.5)/2.4)+Math.round(y/2.4))%2?gray:pale),x,y,59.025);d.rotation.z=Math.PI/4;}
 // Entrance staircase lies within the historic southwest frontage envelope.
 for(let i=0;i<10;i++)b(g,-59+i*.38,(i+1)*.35,49,8-i*.6,(i+1)*.7,20.5,granite);
 // Green tiled clock shaft, distinct from the round heating chimney.
 const tower=part(-15,48);b(tower,0,15,0,3.25,30,3.25,green);
 for(let k=0;k<4;k++){const f=new T.Group();f.rotation.y=k*Math.PI/2;tower.add(f);mesh(f,new T.CircleGeometry(1.16,24),trim,0,27.9,1.68);b(f,0,28.17,1.72,.10,.85,.07,frame);b(f,.3,27.9,1.74,.66,.10,.07,frame);}
 b(tower,0,30.15,0,4.3,.3,4.3,green);for(const x of [-1.3,1.3])for(const z of [-1.3,1.3])b(tower,x,31.7,z,.12,2.8,.12,green);b(tower,0,33.15,0,3.6,.25,3.6,green);
 cyl(g,-28,19,-32,1.35,38,gray,1.1);cyl(g,-28,38.15,-32,1.22,.4,roof);
 // Stepped caretaker dwelling/terraces on the southeast corner.
 block(46,52,16,16,8.8);block(47,52,12,12,12.1);block(49,51,8,10,15.4);
 for(const [x,z,w,d,y] of [[46,52,16,16,9],[47,52,12,12,12.3]]){b(g,x,y,z,w+.6,.3,d+.6,trim);for(const s of [-1,1]){b(g,x,y+.8,z+s*d/2,w,.07,.1,frame);b(g,x+s*w/2,y+.8,z,.1,.07,d,frame);}for(let xx=-w/2;xx<=w/2;xx+=2)b(g,x+xx,y+.4,z+d/2,.06,.8,.06,frame);}
 bands(part(54.08,52,Math.PI/2),14,[7.2]);bands(part(49,56.08),7,[13.4]);
 g.rotation.y=meta.angle||0;g.position.set(meta.center[0],.35,-meta.center[1]);
 const out=merge(g);out.name=meta.name;out.userData.landmark=meta.id;return out;
}
