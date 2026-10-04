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

// Use only earth-referenced readings; relative gyroscope alpha is not a compass.
export const normalizeHeading = value => (value % 360 + 360) % 360;
export function readHeading(event, screenAngle = 0) {
  if (Number.isFinite(event.webkitCompassHeading) && event.webkitCompassHeading >= 0) {
    if (Number.isFinite(event.webkitCompassAccuracy) && (event.webkitCompassAccuracy < 0 || event.webkitCompassAccuracy > 45)) return null;
    const upright=Number.isFinite(event.beta) && Math.abs(Math.sin(event.beta*Math.PI/180))>.5;
    return normalizeHeading(event.webkitCompassHeading + (upright ? 0 : screenAngle));
  }
  if (!event.absolute || ![event.alpha,event.beta,event.gamma].every(Number.isFinite)) return null;
  const a=event.alpha*Math.PI/180,b=event.beta*Math.PI/180,g=event.gamma*Math.PI/180;
  // Rear-facing direction when held upright; screen top when held nearly flat.
  let east=-Math.cos(a)*Math.sin(g)-Math.sin(a)*Math.sin(b)*Math.cos(g);
  let north=-Math.sin(a)*Math.sin(g)+Math.cos(a)*Math.sin(b)*Math.cos(g);
  if (Math.hypot(east,north)<.25) {
    const t=screenAngle*Math.PI/180;
    east=-Math.cos(a)*Math.cos(g)*Math.sin(t)-(Math.cos(a)*Math.sin(g)*Math.sin(b)+Math.sin(a)*Math.cos(b))*Math.cos(t);
    north=-Math.sin(a)*Math.cos(g)*Math.sin(t)+(-Math.sin(a)*Math.sin(g)*Math.sin(b)+Math.cos(a)*Math.cos(b))*Math.cos(t);
  }
  return Math.hypot(east,north)<.1 ? null : normalizeHeading(Math.atan2(east,north)*180/Math.PI);
}
export function smoothHeading(current, next, amount) {
  return current===null ? next : normalizeHeading(current + ((next-current+540)%360-180)*amount);
}

export function createLocationControl({THREE, scene, camera, model, panTo, lookToward}) {
  const button = document.getElementById('locate');
  const follow = document.getElementById('location-follow');
  const bearing = document.getElementById('gps-bearing');
  const arrow = document.getElementById('gps-direction');
  const clear = document.getElementById('location-clear');
  const status = document.getElementById('gps-status');
  const dot = document.getElementById('gps-dot');
  const circle = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.MeshBasicMaterial({color: '#1875e5', transparent: true, opacity: .17, depthTest: false, depthWrite: false, side: THREE.DoubleSide}));
  circle.rotation.x = -Math.PI / 2; circle.renderOrder = 10000; circle.visible = false; scene.add(circle);
  let point = null, request = 0, timeout, expiry;
  const projected = new THREE.Vector3(), tip = new THREE.Vector3();
  let following=false, heading=null, desired=null, sensorToken=0, listening=false, sensorTimeout, lastFrame=0;
  function stopCompass() {
    sensorToken++; clearTimeout(sensorTimeout);
    window.removeEventListener('deviceorientation', onOrientation);
    window.removeEventListener('deviceorientationabsolute', onOrientation);
    listening=false; following=false; heading=desired=null; arrow.hidden=true; bearing.hidden=true;
    follow.setAttribute('aria-pressed','false'); follow.textContent='Kijk rond'; follow.disabled=false;
  }
  function pause() {
    following=false; follow.setAttribute('aria-pressed','false'); follow.textContent='Kijk rond';
  }
  function onOrientation(event) {
    const value=readHeading(event,screen.orientation?.angle ?? window.orientation ?? 0);
    if(value===null)return;
    desired=value; clearTimeout(sensorTimeout);
    if(point && following) { bearing.hidden=false; follow.textContent='Pauzeer'; }
  }
  async function enableCompass(token=request) {
    stopCompass(); const sensor=sensorToken;
    if(!window.isSecureContext || !window.DeviceOrientationEvent) {
      message('Kompas is niet beschikbaar. Je kunt de kaart met je vingers draaien.'); return;
    }
    follow.disabled=true;
    try {
      // Called directly from a tap, before awaiting the GPS result (required on iOS).
      if(typeof DeviceOrientationEvent.requestPermission==='function' && await DeviceOrientationEvent.requestPermission(true)!=='granted') throw Error('permission');
      if(sensor!==sensorToken || token!==request)return;
      listening=true; following=true; follow.disabled=false; follow.setAttribute('aria-pressed','true'); follow.textContent='Kompas zoeken…';
      window.addEventListener('deviceorientation',onOrientation);
      window.addEventListener('deviceorientationabsolute',onOrientation);
      sensorTimeout=setTimeout(()=>{if(sensor!==sensorToken)return;stopCompass();message('Geen betrouwbare kompasrichting ontvangen. Tik op Kijk rond om opnieuw te proberen.');},8000);
    } catch {
      if(sensor!==sensorToken)return;stopCompass();message('Geen toestemming voor het kompas. Je kunt de kaart met je vingers draaien of opnieuw op Kijk rond tikken.');
    }
  }
  follow.onclick=()=>{if(following){pause();return;} if(listening && desired!==null){following=true;follow.setAttribute('aria-pressed','true');follow.textContent='Pauzeer';panTo(point);return;}enableCompass();};
  function message(text) { status.textContent = text; status.hidden = !text; }
  function hide() {
    stopCompass(); follow.hidden=true; point = null; circle.visible = false; dot.hidden = true; clear.hidden = true;
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
    enableCompass(token);
    const fail = error => {
      if (token !== request) return;
      request++; finish(); hide();
      message(error.code === 1 ? 'Geen toestemming voor locatie. Je kunt de kaart gewoon blijven gebruiken.' : error.code === 3 ? 'Het bepalen van je locatie duurt te lang. Probeer het buiten opnieuw.' : 'Je locatie is niet beschikbaar. Probeer het buiten opnieuw.');
    };
    timeout = setTimeout(() => fail({code: 3}), 20000);
    try { navigator.geolocation.getCurrentPosition(position => {
      if (token !== request) return;
      finish();
      const result = assessPosition(position, model.boundary, model.originLonLat);
      if (result.status === 'outside') { hide(); message('Je bent nog buiten het kaartgebied. Probeer het opnieuw wanneer je dichter bij het centrum bent.'); return; }
      if (result.status !== 'accepted') { hide(); message('Je locatie is nog niet nauwkeurig genoeg. Probeer het buiten opnieuw.'); return; }
      point = result.point; follow.hidden=false; circle.position.set(point[0], 2, -point[1]); circle.scale.setScalar(Math.max(1, result.accuracy)); circle.visible = true;
      button.textContent = 'Locatie vernieuwen'; button.dataset.active = 'true'; clear.hidden = false;
      message(`Je locatie bij deze meting · nauwkeurigheid ca. ${Math.max(1, Math.round(result.accuracy))} m. Houd je telefoon voor je en draai rond. Vernieuw je locatie als je loopt.`);
      panTo(point);
      // A single fix is never presented indefinitely as a live moving location.
      expiry = setTimeout(() => { hide(); message('Je locatiemeting is verlopen. Tik om je locatie opnieuw te tonen.'); }, 60000);
    }, fail, {enableHighAccuracy: true, timeout: 15000, maximumAge: 0}); } catch { fail({code: 2}); }
  };
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancel(); message(''); } });
  window.addEventListener('pagehide', cancel);
  return {pause, update(width, height) {
    if (!point) return;
    const now=performance.now(), elapsed=Math.min(100,now-lastFrame || 16);lastFrame=now;
    if(desired!==null) {
      heading=smoothHeading(heading,desired,1-Math.exp(-elapsed/120));
      if(following)lookToward(point,heading);
      bearing.textContent=`${['N','NO','O','ZO','Z','ZW','W','NW'][Math.round(heading/45)%8]} · ${Math.round(heading)%360}°`;bearing.hidden=false;
      const r=heading*Math.PI/180;
      tip.set(point[0]+Math.sin(r)*20,3,-point[1]-Math.cos(r)*20).project(camera);
      projected.set(point[0],3,-point[1]).project(camera);
      const dx=(tip.x-projected.x)*width,dy=-(tip.y-projected.y)*height;
      arrow.hidden=false;arrow.style.transform=`rotate(${Math.atan2(dx,-dy)*180/Math.PI}deg)`;
    }
    projected.set(point[0], 3, -point[1]).project(camera);
    const x = (projected.x + 1) / 2 * width, y = (1 - projected.y) / 2 * height;
    dot.hidden = projected.z < -1 || projected.z > 1 || x < 0 || x > width || y < 0 || y > height;
    dot.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
  }};
}
