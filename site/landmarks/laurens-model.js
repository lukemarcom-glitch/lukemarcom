import * as T from '../vendor/three.module.js';
// Simplified pre-1940 church: basilica, transept, west tower and documented roof lantern.
// Clean material interpretation, not a claim of measured 1939 surface colours.
export function buildLaurens(meta,{material,box,merge}){
 const g=new T.Group(),brick=material('#a18768',true),stone=material('#c8b99b'),roofMat=material('#555e63'),glass=material('#526365'),dark=material('#3d4645');
 const b=(x,y,z,w,h,d,m=brick)=>box(g,x,y,z,w,h,d,m);
 function ridge(x,z,length,width,base,rise,rotate=false){const s=new T.Shape();s.moveTo(-width/2,0);s.lineTo(width/2,0);s.lineTo(0,rise);s.closePath();const ge=new T.ExtrudeGeometry(s,{depth:length,bevelEnabled:false});ge.translate(0,0,-length/2);const o=new T.Mesh(ge,roofMat);o.position.set(x,base,z);o.rotation.y=rotate?0:Math.PI/2;g.add(o);}
 function gothic(x,y,z,w,h,rotation=0){const s=new T.Shape();s.moveTo(-w/2,0);s.lineTo(w/2,0);s.lineTo(w/2,h-w*.7);s.quadraticCurveTo(w*.35,h-w*.15,0,h);s.quadraticCurveTo(-w*.35,h-w*.15,-w/2,h-w*.7);s.closePath();const group=new T.Group();const panel=new T.Mesh(new T.ShapeGeometry(s,10),glass);group.add(panel);for(const dx of [-w*.25,0,w*.25]){const o=new T.Mesh(new T.BoxGeometry(.12,h-w*.5,.16),stone);o.position.set(dx,(h-w*.5)/2,.08);group.add(o)}const rail=new T.Mesh(new T.BoxGeometry(w,.12,.16),stone);rail.position.set(0,h*.47,.08);group.add(rail);group.position.set(x,y,z);group.rotation.y=rotation;g.add(group);}
 // Main vessel, lower aisles, transept, polygonal choir termination.
 b(0,12,0,70,24,15);ridge(0,0,70,16,24,9);
 for(const side of [-1,1]){b(-3,7.5,side*14,64,15,13);ridge(-3,side*14,64,13.5,15,7);}
 b(15,12,0,16,24,52);ridge(15,0,53,17,24,9,true);
 const apse=new T.Mesh(new T.CylinderGeometry(12,12,24,10),brick);apse.position.set(34,12,0);g.add(apse);const cap=new T.Mesh(new T.ConeGeometry(12.6,9,10),roofMat);cap.position.set(34,28.5,0);g.add(cap);
 // Regular bays and stepped buttresses; stained glass is deliberately neutral.
 for(const side of [-1,1])for(let x=-31;x<32;x+=7){if(x>6&&x<24)continue;gothic(x,3,side*20.57,3.5,10,side===1?0:Math.PI);b(x+3.1,7.6,side*21.1,1,15.2,1.8,stone);b(x+3.1,16,side*20.5,.7,2,1.1,stone);gothic(x,17,side*7.55,3.2,6,side===1?0:Math.PI);}
 for(const side of [-1,1]){gothic(15,4,side*26.1,8,18,side===1?0:Math.PI);for(const x of [6.5,23.5])b(x,12,side*26,1.1,24,1.3,stone);}
 for(const z of [-13.5,13.5])gothic(-35.1,2,z,6,13,-Math.PI/2);
 // West tower, flat crown as in 1939. No seventeenth-century wooden spire.
 b(-42.5,31,0,14,62,14,brick);
 for(const y of [1,20,38,54,61.7])b(-42.5,y,0,14.7,.5,14.7,stone);
 for(const x of [-49,-36])for(const z of [-6.5,6.5])b(x,31,z,1,62,1,stone);
 for(let side=0;side<4;side++){const a=side*Math.PI/2,holder=new T.Group(),before=g.children.length;
  for(const [y,h] of [[4,14],[23,13],[41,10],[55,5]])gothic(0,y,7.08,5.5,h);
  for(const x of [-4.6,4.6]){gothic(x,23,7.1,2.1,13);gothic(x,41,7.1,2.1,10)}
  const dial=new T.Mesh(new T.CircleGeometry(2.3,24),dark);dial.position.set(0,57.5,7.2);g.add(dial);
  for(let i=0;i<12;i++){const t=i*Math.PI/6;b(Math.sin(t)*1.95,57.5+Math.cos(t)*1.95,7.24,.13,.35,.08,stone);}b(0,58.1,7.3,.16,1.5,.1,stone);b(.6,57.5,7.3,1.3,.16,.1,stone);
  const added=g.children.slice(before);added.forEach(o=>holder.add(o));holder.position.x=-42.5;holder.rotation.y=a;g.add(holder);
 }
 for(const x of [-49,-36])for(const z of [-6.5,6.5]){b(x,63,z,.9,2,.9,stone);}b(-42.5,61.2,0,12,.4,12,roofMat);
 // Open two-stage crossing lantern, proportions interpreted from RCE 20191391.
 for(const [y,r,h] of [[33,1.9,5],[39.5,1.35,4]]){for(let i=0;i<8;i++){const a=i*Math.PI/4;b(15+Math.cos(a)*r,y+h/2,Math.sin(a)*r,.22,h,.22,stone);}const ring=new T.Mesh(new T.CylinderGeometry(r+.3,r+.3,.35,8),stone);ring.position.set(15,y+h,0);g.add(ring);}
 const skirt=new T.Mesh(new T.CylinderGeometry(1.45,2.1,1.5,8),roofMat);skirt.position.set(15,38.75,0);g.add(skirt);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;const curve=new T.CatmullRomCurve3([new T.Vector3(15+Math.cos(a)*1.35,43.5,Math.sin(a)*1.35),new T.Vector3(15+Math.cos(a)*1.7,44.5,Math.sin(a)*1.7),new T.Vector3(15+Math.cos(a)*.6,46.2,Math.sin(a)*.6),new T.Vector3(15,47.8,0)]);g.add(new T.Mesh(new T.TubeGeometry(curve,8,.1,4,false),roofMat));}
 b(15,48.5,0,.14,2,.14,dark);b(15,49,0,1.1,.13,.13,dark);
 g.position.set(meta.center[0],.35,-meta.center[1]);g.rotation.y=meta.angle;const result=merge(g);result.name=meta.name;result.userData.landmark=meta.id;return result;
}
