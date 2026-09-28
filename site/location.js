// Coordinates match the historical and modern scene; no location leaves this module.
export const BUFFER_METERS = 500;
export const MAX_ACCURACY = 100;
export const MAX_AGE_MS = 30000;
export function toLocal(longitude, latitude, origin = [4.485, 51.919]) {
  return [(longitude - origin[0]) * 111320 * Math.cos(origin[1] * Math.PI / 180), (latitude - origin[1]) * 111320];
}
export function contains(point, ring) {
  let result = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [x, y] = ring[i], [px, py] = ring[j];
    if ((y > point[1]) !== (py > point[1]) && point[0] < (px - x) * (point[1] - y) / (py - y) + x) result = !result;
  }
  return result;
}
export function distanceToArea(point, rings) {
  if (rings.some(ring => contains(point, ring))) return 0;
  let nearest = Infinity;
  for (const ring of rings) {
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const t = Math.max(0, Math.min(1, ((point[0] - a[0]) * dx + (point[1] - a[1]) * dy) / (dx * dx + dy * dy || 1)));
      nearest = Math.min(nearest, Math.hypot(point[0] - a[0] - t * dx, point[1] - a[1] - t * dy));
    }
  }
  return nearest;
}
export function assessPosition(position, boundary, origin, now = Date.now()) {
  const {latitude, longitude, accuracy} = position.coords || {};
  if (![latitude, longitude, accuracy, position.timestamp].every(Number.isFinite) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180 || accuracy < 0 || accuracy > MAX_ACCURACY || now - position.timestamp > MAX_AGE_MS || position.timestamp > now + 5000) return {status: 'inaccurate'};
  const point = toLocal(longitude, latitude, origin);
  const distance = distanceToArea(point, boundary);
  if (distance > BUFFER_METERS) return {status: 'outside'};
  // Near the outer edge, an uncertain fix must not enlarge the permitted area.
  if (distance > 0 && distance + accuracy > BUFFER_METERS) return {status: 'inaccurate'};
  return {status: 'accepted', point, accuracy};
}

export function createLocationControl({THREE, scene, camera, model, panTo}) {
  const button = document.getElementById('locate');
  const clear = document.getElementById('location-clear');
  const status = document.getElementById('gps-status');
  const dot = document.getElementById('gps-dot');
  const circle = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.MeshBasicMaterial({color: '#1875e5', transparent: true, opacity: .17, depthTest: false, depthWrite: false, side: THREE.DoubleSide}));
  circle.rotation.x = -Math.PI / 2; circle.renderOrder = 10000; circle.visible = false; scene.add(circle);
  let point = null, request = 0, timeout, expiry;
  const projected = new THREE.Vector3();
  function message(text) { status.textContent = text; status.hidden = !text; }
  function hide() {
    point = null; circle.visible = false; dot.hidden = true; clear.hidden = true;
    clearTimeout(expiry); button.textContent = 'Toon waar ik nu ben'; button.removeAttribute('data-active');
  }
  function cancel() {
    request++; clearTimeout(timeout); button.disabled = false; button.removeAttribute('aria-busy'); hide();
  }
  function finish() { clearTimeout(timeout); button.disabled = false; button.removeAttribute('aria-busy'); }
  clear.onclick = () => { cancel(); message(''); };
  button.onclick = () => {
    cancel(); const token = request;
    if (!window.isSecureContext || !navigator.geolocation) { message('Locatie is niet beschikbaar in deze browser. Open de website via HTTPS op je telefoon.'); return; }
    button.disabled = true; button.setAttribute('aria-busy', 'true'); button.textContent = 'Locatie bepalen…'; clear.hidden = false;
    message('Je telefoon bepaalt je locatie. We slaan deze niet op.');
    const fail = error => {
      if (token !== request) return;
      request++; finish(); hide();
      message(error.code === 1 ? 'Geen toestemming voor locatie. Je kunt de kaart gewoon blijven gebruiken.' : error.code === 3 ? 'Het bepalen van je locatie duurt te lang. Probeer het buiten opnieuw.' : 'Je locatie is niet beschikbaar. Probeer het buiten opnieuw.');
    };
    timeout = setTimeout(() => fail({code: 3}), 20000);
    try { navigator.geolocation.getCurrentPosition(position => {
      if (token !== request) return;
      request++; finish(); hide();
      const result = assessPosition(position, model.boundary, model.originLonLat);
      if (result.status === 'outside') { message('Je bent nog buiten het kaartgebied. Probeer het opnieuw wanneer je dichter bij het centrum bent.'); return; }
      if (result.status !== 'accepted') { message('Je locatie is nog niet nauwkeurig genoeg. Probeer het buiten opnieuw.'); return; }
      point = result.point; circle.position.set(point[0], 2, -point[1]); circle.scale.setScalar(Math.max(1, result.accuracy)); circle.visible = true;
      button.textContent = 'Locatie vernieuwen'; button.dataset.active = 'true'; clear.hidden = false;
      message(`Je locatie bij deze meting · nauwkeurigheid ca. ${Math.max(1, Math.round(result.accuracy))} m. Tik opnieuw als je verder loopt.`);
      panTo(point);
      // A single fix is never presented indefinitely as a live moving location.
      expiry = setTimeout(() => { hide(); message('Je locatiemeting is verlopen. Tik om je locatie opnieuw te tonen.'); }, 60000);
    }, fail, {enableHighAccuracy: true, timeout: 15000, maximumAge: 0}); } catch { fail({code: 2}); }
  };
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancel(); message(''); } });
  window.addEventListener('pagehide', cancel);
  return {update(width, height) {
    if (!point) return;
    projected.set(point[0], 3, -point[1]).project(camera);
    const x = (projected.x + 1) / 2 * width, y = (1 - projected.y) / 2 * height;
    dot.hidden = projected.z < -1 || projected.z > 1 || x < 0 || x > width || y < 0 || y > height;
    dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
  }};
}
