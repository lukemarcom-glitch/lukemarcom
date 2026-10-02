import * as THREE from './vendor/three.module.js';

// Hand-traced historical shorelines, in source-map pixels. Never use current OSM
// water geometry here: several Rotterdam harbours have since been filled in.
export async function createHistoricWater(scene, model) {
  const response = await fetch('./data/historic-water.json?v=2');
  if (!response.ok) throw new Error('Historische watercontouren konden niet laden');
  const data = await response.json();
  const matrix = model.fit.centrum.matrix_pixel_naar_lokale_meter;
  const project = ([x, y]) => new THREE.Vector2(
    x * matrix[0][0] + y * matrix[1][0] + matrix[2][0],
    x * matrix[0][1] + y * matrix[1][1] + matrix[2][1]
  );
  const group = new THREE.Group();
  group.name = 'historic-water';
  group.userData.source = data.source;
  const material = new THREE.MeshBasicMaterial({
    color: '#78adc4', transparent: true, opacity: 0.42,
    depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1
  });
  for (const area of data.areas) {
    for (const polygon of area.polygons) {
      const shape = new THREE.Shape(polygon.outer.map(project));
      for (const hole of polygon.holes || []) shape.holes.push(new THREE.Path(hole.map(project)));
      const geometry = new THREE.ShapeGeometry(shape);
      geometry.rotateX(-Math.PI / 2);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = area.name;
      mesh.position.y = 0.045;
      // Water is a map tint, not an independently selectable object.
      mesh.raycast = () => {};
      group.add(mesh);
    }
  }
  scene.add(group);
  return group;
}
