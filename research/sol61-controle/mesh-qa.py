import json,sys,struct,collections
from pathlib import Path
import numpy as np
from shapely.geometry import Polygon
from shapely.ops import unary_union
slug=sys.argv[1]; root=Path.cwd(); all_mesh=json.loads((root/'research/sol61-controle/meshes.json').read_text()); target=next(x for x in all_mesh if x['id']==slug)
def projected(item):
 ps=[Polygon([(v[0],-v[2]) for v in t]) for t in item['triangles']]; return unary_union([p for p in ps if p.area>1e-10])
a=projected(target); hits=[]
base=json.loads((root/'site/data/model.json').read_text());boundary=Polygon(base['boundary'][0],base['boundary'][1:]);outside=a.difference(boundary).area
(root/f'research/sol61-controle/{slug}-mesh-envelope.json').write_text(json.dumps({'id':slug,'projectedConvexEnvelope':list(a.convex_hull.exterior.coords),'outsideWorkBoundaryM2':outside},indent=2)+'\n')
for m in all_mesh:
 if m['id']==slug:continue
 # Exact mesh boundingbox excludes distant models before triangle union.
 verts=np.array(m['triangles']).reshape(-1,3)
 west,south=verts[:,0].min(),-verts[:,2].max();east,north=verts[:,0].max(),-verts[:,2].min()
 if east<a.bounds[0] or west>a.bounds[2] or north<a.bounds[1] or south>a.bounds[3]:continue
 q=projected(m)
 if a.intersects(q):
  overlap=a.intersection(q).area
  if overlap>1e-6:hits.append({'id':m['id'],'areaM2':overlap,'intersectionWkt':a.intersection(q).wkt})
bg=json.loads((root/'site/data/model-landmarks.json').read_text())
bghits=[]
for b in bg['buildings']:
 p=Polygon(b['rings'][0],b['rings'][1:]);v=a.intersection(p).area
 if v>1e-6:bghits.append({'id':b['id'],'areaM2':v,'intersectionWkt':a.intersection(p).wkt})
# Parse the GLB independently; apply all node transforms and compare triangle sets.
data=(root/f'site/landmarks/{slug}/model.glb').read_bytes(); magic,version,length=struct.unpack_from('<III',data);assert magic==0x46546c67 and length==len(data)
jslen,typ=struct.unpack_from('<II',data,12);gltf=json.loads(data[20:20+jslen]);offset=20+jslen;binlen,typ=struct.unpack_from('<II',data,offset);binary=data[offset+8:offset+8+binlen]
def accessor(i):
 a=gltf['accessors'][i];b=gltf['bufferViews'][a['bufferView']];dt={5126:'<f4',5125:'<u4',5123:'<u2',5121:'u1'}[a['componentType']];size={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']];stride=b.get('byteStride',np.dtype(dt).itemsize*size)
 return np.ndarray((a['count'],size),dtype=dt,buffer=binary,offset=b.get('byteOffset',0)+a.get('byteOffset',0),strides=(stride,np.dtype(dt).itemsize)).copy()
def matrix(n):
 if 'matrix' in n:return np.array(n['matrix']).reshape(4,4).T
 x,y,z,w=n.get('rotation',[0,0,0,1]);r=np.array([[1-2*y*y-2*z*z,2*x*y-2*z*w,2*x*z+2*y*w],[2*x*y+2*z*w,1-2*x*x-2*z*z,2*y*z-2*x*w],[2*x*z-2*y*w,2*y*z+2*x*w,1-2*x*x-2*y*y]])
 m=np.eye(4);m[:3,:3]=r@np.diag(n.get('scale',[1,1,1]));m[:3,3]=n.get('translation',[0,0,0]);return m
glbtri=[]
def visit(i,parent):
 n=gltf['nodes'][i];m=parent@matrix(n)
 if 'mesh' in n:
  for primitive in gltf['meshes'][n['mesh']]['primitives']:
   assert primitive.get('mode',4)==4
   pos=accessor(primitive['attributes']['POSITION']);pos=(m@np.column_stack([pos,np.ones(len(pos))]).T).T[:,:3];indices=accessor(primitive['indices']).reshape(-1) if 'indices' in primitive else np.arange(len(pos));glbtri.extend(pos[indices].reshape(-1,3,3).tolist())
 for c in n.get('children',[]):visit(c,m)
for i in gltf['scenes'][gltf.get('scene',0)]['nodes']:visit(i,np.eye(4))
cx,cy=target['center'];runtime=[[[v[0]-cx,v[1],v[2]+cy] for v in t] for t in target['triangles']]
def key(t):return tuple(sorted(tuple(round(float(v),3) for v in vertex) for vertex in t))
r=collections.Counter(map(key,runtime));g=collections.Counter(map(key,glbtri));parity=(r==g)
report={'id':slug,'catalogCount':len(all_mesh),'method':'World transformed exact runtime triangle projections, compared to all models and background polygons; independently parsed GLB node transforms and unordered triangle multisets rounded to 1 mm','projectedAreaM2':a.area,'outsideWorkBoundaryM2':outside,'modelOverlaps':hits,'backgroundOverlaps':bghits,'runtimeTriangles':len(runtime),'glbTriangles':len(glbtri),'glbGeometryParity':parity,'runtimeOnlyTriangles':sum((r-g).values()),'glbOnlyTriangles':sum((g-r).values()),'passed':not hits and not bghits and parity and outside<1e-6}
(root/f'research/sol61-controle/{slug}-mesh-qa.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2));sys.exit(0 if report['passed'] else 1)
