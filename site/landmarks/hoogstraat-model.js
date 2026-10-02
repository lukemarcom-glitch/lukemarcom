import {contextOccupied} from './context-clearance.js?v=22';
import * as T from '../vendor/three.module.js';

// 1938 shopping junction study. Neighbouring shop units and rear elevations are estimates.
export function buildHoogstraat(meta,{material,box,merge}){
 const g=new T.Group(),brick=material('#916750',true),stone=material('#c7bca7'),cream=material('#d9d5c5'),granite=material('#424743'),glass=material('#4a6265'),roof=material('#595d59'),tiles=material('#80644d',true),road=material('#77796f',true),paving=material('#ada697',true),awning=material('#c4baa0');
 const b=(group,x,y,z,w,h,d,mat=brick,a=0)=>box(group,x,y,z,w,h,d,mat,a);
 function hip(group,x,z,w,d,base,rise,mat=roof){
  const p=[[-w/2,0,-d/2],[w/2,0,-d/2],[w/2,0,d/2],[-w/2,0,d/2],[-w/2+Math.min(d,w)*.38,rise,0],[w/2-Math.min(d,w)*.38,rise,0]],idx=[0,4,5,0,5,1,1,5,2,2,5,4,2,4,3,3,4,0];const ge=new T.BufferGeometry();ge.setAttribute('position',new T.Float32BufferAttribute(idx.flatMap(i=>p[i]),3));ge.setAttribute('uv',new T.Float32BufferAttribute(idx.flatMap(i=>[p[i][0]/w+.5,p[i][2]/d+.5]),2));ge.computeVertexNormals();const mesh=new T.Mesh(ge,mat);mesh.position.set(x,base,z);group.add(mesh);
 }
 function window(group,x,y,z,w,h){b(group,x,y,z,w+.2,h+.2,.15,stone);b(group,x,y,z+.1,w,h,.12,glass);b(group,x,y,z+.18,.08,h,.08,cream);b(group,x,y+.12,z+.19,w,.08,.08,cream);}
 const glyphs={H:['101','101','111','101','101'],E:['111','100','110','100','111'],M:['10001','11011','10101','10001','10001'],A:['010','101','111','101','101'],C:['111','100','100','100','111'],'&':['010','101','010','101','011']};
 function sign(group,text,x,y,z,unit=.19){const letters=[...text],width=letters.reduce((v,c)=>v+(glyphs[c]?.[0].length||2)+1,0)*unit;let xx=x-width/2;for(const char of letters){const glyph=glyphs[char];if(glyph){for(let row=0;row<5;row++)for(let col=0;col<glyph[row].length;col++)if(glyph[row][col]==='1')b(group,xx+col*unit,y+(2-row)*unit,z,unit*.88,unit*.88,.11,cream);xx+=(glyph[0].length+1)*unit;}else xx+=3*unit;}}
 // Paved shopping junction: no modern cars, street furniture or speculative tram tracks.
 b(g,34,.25,0,70,.35,13,road);b(g,-25,.25,-6,50,.35,13,road);b(g,-7,.25,27,13,.35,55,road);
 for(const z of [-7,7])b(g,34,.46,z,70,.22,2,paving);
 for(const x of [-14,0])b(g,x,.46,28,2,.22,55,paving);
 // C&A 1924: red masonry, stone bands, tall roof and southwest corner tower.
 const ca=new T.Group();g.add(ca);b(ca,24,10.8,-20,42,21.6,27,brick);hip(ca,24,-20,43,28,21.6,6.4);
 const front=new T.Group();front.position.set(24,0,-6.5);ca.add(front);
 function caElevation(group,width){
  b(group,0,2.3,0,width,4.6,.38,granite);
  for(let x=-width/2+2;x<width/2;x+=4.6){b(group,x,2.1,.27,3.65,3.65,.15,glass);for(const y of [6.4,10.6,14.8,18.7])window(group,x,y,.12,2.55,2.7);}
  for(const y of [4.8,8.5,12.7,16.9,21.4])b(group,0,y,.28,width+.2,.3,.48,stone);
  for(let x=-width/2+4;x<width/2-1;x+=8.4){b(group,x,22.8,.15,3.6,3.3,.6,brick);window(group,x,22.8,.5,2.4,2.25);b(group,x,24.65,.18,4.2,.3,.9,stone);}
 }
 caElevation(front,42);const side=new T.Group();side.position.set(3,0,-20);side.rotation.y=-Math.PI/2;ca.add(side);caElevation(side,27);
 sign(front,'C&A',0,4.1,.56,.27);
 // Octagonal corner tower and open lantern, simplified from the 1937 street photograph.
 const tx=6,tz=-9;
 for(const [y,h,r,mat] of [[11,22,4.7,brick],[23.7,4.4,3.6,brick],[27.1,2.4,2.4,stone]]){const o=new T.Mesh(new T.CylinderGeometry(r,r,h,8),mat);o.position.set(tx,y,tz);ca.add(o);}
 for(const y of [5,9,13,17,21.8,25.7,28.2]){const o=new T.Mesh(new T.CylinderGeometry(y>25?2.65:y>22?3.9:4.9,y>25?2.65:y>22?3.9:4.9,.28,8),stone);o.position.set(tx,y,tz);ca.add(o);}
 for(let i=0;i<8;i++){const a=i*Math.PI/4;const face=new T.Group();face.position.set(tx+Math.sin(a)*4.37,0,tz+Math.cos(a)*4.37);face.rotation.y=a;ca.add(face);for(const y of [6.5,10.7,14.9,19])window(face,0,y,0,1.7,2.5);const pole=new T.Mesh(new T.CylinderGeometry(.16,.16,2.6,6),stone);pole.position.set(tx+Math.sin(a)*1.8,29.5,tz+Math.cos(a)*1.8);ca.add(pole);}
 const cap=new T.Mesh(new T.CylinderGeometry(.65,2.2,3.1,8),roof);cap.position.set(tx,32.05,tz);ca.add(cap);b(ca,tx,34.1,tz,.12,1.8,.12,granite);
 // HEMA circa 1938: horizontal pale bands and dark window ribbons, not its 1930 facade.
 const hemaOccupied=contextOccupied(meta,-31,12,27,23);
 const hema=new T.Group();hema.position.set(-31,0,12);if(!hemaOccupied)g.add(hema);b(hema,0,10.3,0,27,20.6,23,brick);hip(hema,0,0,27.6,23.6,20.6,3.4,tiles);
 function hemaElevation(group,width){
  b(group,0,3.25,0,width,6.5,.35,granite);
  for(let x=-width/2+1.35;x<width/2;x+=2.7)b(group,x,2.5,.24,2.45,4.65,.16,glass);
  for(const y of [7.8,12,16.2]){b(group,0,y,.13,width,2.6,.15,glass);for(let x=-width/2+.35;x<width/2;x+=2.1)b(group,x,y,.24,.23,2.7,.28,brick);}
  for(const y of [9.9,14.1,18.3,20.1])b(group,0,y,.3,width+.15,y===20.1?1.35:1.25,.5,cream);
  for(const y of [10.8,15,19.2])for(let j=0;j<4;j++)b(group,0,y+j*.15,.59,width,.065,.12,granite);
  sign(group,'HEMA',0,5.45,.6,.25);
 }
 const hn=new T.Group();hn.position.z=-11.5;hn.rotation.y=Math.PI;hema.add(hn);hemaElevation(hn,27);
 const he=new T.Group();he.position.x=13.5;he.rotation.y=Math.PI/2;hema.add(he);hemaElevation(he,23);
 // Three projecting plain shop awnings, visible in the 1938 postcard.
 for(const x of [-8,0,8]){const o=b(hn,x,4.55,1.1,5,.15,2.5,awning);o.rotation.x=.24;}
 // Small adjacent shops: rhythm and heights are explicitly interpreted, not named addresses.
 const tones=['#927662','#b0a18a','#7d6555'].map(c=>material(c,true));
 function shop(x,z,w,d,h,faceSouth,i){if(contextOccupied(meta,x,z,w,d))return;const s=new T.Group();s.position.set(x,0,z);g.add(s);b(s,0,h/2,0,w-.12,h,d,tones[i%3]);hip(s,0,0,w,d,h,3.5,i%2?tiles:roof);const f=new T.Group();f.position.z=faceSouth?d/2:-d/2;f.rotation.y=faceSouth?0:Math.PI;s.add(f);b(f,0,2,.2,w-.5,3.5,.14,glass);for(const y of [4.1,h-.25])b(f,0,y,.24,w+.1,.28,.4,stone);for(let y=6;y<h-1;y+=3.6)for(const xx of [-w*.25,w*.25])window(f,xx,y,.1,1.4,2.25);b(s,w*.2,h+2.4,-d*.22,.7,3.8,.8,brick);}
 for(let i=0;i<3;i++)shop(49+i*6.3,-16,6.3,19,14+i*1.4,true,i);
 for(let i=0;i<4;i++)shop(12+i*7,19,7,20,[14.5,17,15.8,18][i],false,i+1);
 for(let i=0;i<3;i++)shop(41.5+i*6.5,19,6.5,20,[16,14,17][i],false,i);
 for(const [x,z] of [[-13,-1],[0,31],[34,7],[62,-7]]){b(g,x,3,z,.14,5,.14,granite);b(g,x,5.65,z,.55,.6,.55,cream);}
 g.rotation.y=meta.angle;g.position.set(meta.center[0],.35,-meta.center[1]);const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
