import bpy,json,sys
from pathlib import Path
root=Path(__file__).resolve().parent
requested=set(sys.argv[sys.argv.index('--')+1:]) if '--' in sys.argv else set()
for id in [m['id'] for m in json.loads((root/'catalog.json').read_text()) if not requested or m['id'] in requested]:
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
 data=json.loads((root/id/'geometry.json').read_text());cx,cy=data['meta']['center']
 for i,g in enumerate(data['meshes']):
  vs=[(g['position'][j]-cx,-g['position'][j+2]-cy,g['position'][j+1]) for j in range(0,len(g['position']),3)]
  faces=[(j,j+1,j+2) for j in range(0,len(vs),3)];mesh=bpy.data.meshes.new(f'{id}-{i}');mesh.from_pydata(vs,[],faces);mesh.update();o=bpy.data.objects.new(mesh.name,mesh);bpy.context.collection.objects.link(o)
  uv=mesh.uv_layers.new(name='UVMap')
  for j,loop in enumerate(mesh.loops):uv.data[j].uv=g['uv'][loop.vertex_index*2:loop.vertex_index*2+2]
  image=bpy.data.images.new(f'{id}-materiaal-{i}',width=64,height=64);image.colorspace_settings.name='Linear Rec.709';image.pixels=[x/255 for x in g['pixels']];image.pack()
  mat=bpy.data.materials.new(image.name);mat.use_nodes=True;node=mat.node_tree.nodes.new('ShaderNodeTexImage');node.image=image;bs=mat.node_tree.nodes.get('Principled BSDF');mat.node_tree.links.new(node.outputs['Color'],bs.inputs['Base Color']);bs.inputs['Roughness'].default_value=.93;o.data.materials.append(mat)
 bpy.ops.wm.save_as_mainfile(filepath=str(root/id/'model.blend'))
 bpy.ops.export_scene.gltf(filepath=str(root/id/'model.glb'),export_format='GLB',export_yup=True)
 print(id,'EXPORTED')
