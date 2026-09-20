import { DATASETS, OPERATING_AREA, DEFAULT_RADIUS_M, MIN_RADIUS_M, MAX_RADIUS_M, SAMPLING } from './config.js';
import { sampleCircle, samplePolygon } from './geometry.js';
import { fetchConstraints, fetchLocalAuthority } from './planningData.js';
import { findLocalAuthorityProfile } from './localAuthorities.js';
import { buildSnapshot } from './snapshot.js';
import { LayerManager, buildLegendPanel } from './layerControl.js';
import { searchPostcode } from './geocode.js';

// ---------------------------------------------------------------------------
// Map setup
// ---------------------------------------------------------------------------

// Leaflet's default marker icon references image paths relative to its own CSS by
// default, which breaks when the library isn't loaded from its original CDN — point
// it at our vendored copies instead.
// Leaflet auto-detects an image base path from its own <script src>, so paths here
// must be filenames only (it prepends "vendor/leaflet/images/" itself).
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'marker-icon-2x.png',
  iconUrl: 'marker-icon.png',
  shadowUrl: 'marker-shadow.png',
});

const map = L.map('map', { zoomControl: true }).setView(OPERATING_AREA.center, OPERATING_AREA.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

L.rectangle(OPERATING_AREA.bounds, {
  color: '#1f6f4a',
  weight: 1,
  fill: false,
  dashArray: '4 6',
  interactive: false,
}).addTo(map);

const layerManager = new LayerManager(map);
const legendContainer = document.getElementById('legend-panel');
buildLegendPanel(legendContainer, (slug, visible) => layerManager.setVisible(slug, visible));

// ---------------------------------------------------------------------------
// Site input state
// ---------------------------------------------------------------------------

let mode = 'pin'; // 'pin' | 'polygon'
let pinMarker = null;
let radiusCircle = null;
let radiusM = DEFAULT_RADIUS_M;

let polygonPoints = []; // array of L.LatLng
let polygonPreview = null; // L.Polyline while drawing
let polygonLayer = null; // finished L.Polygon
let polygonFinished = false;

const el = (id) => document.getElementById(id);
const checkBtn = el('check-site-btn');
const statusLine = el('status-line');
const radiusValueLabel = el('radius-value');

function setStatus(text, isError = false) {
  statusLine.textContent = text || '';
  statusLine.classList.toggle('error', !!isError);
}

function hasSiteGeometry() {
  return (mode === 'pin' && pinMarker) || (mode === 'polygon' && polygonFinished);
}

function updateCheckButtonState() {
  checkBtn.disabled = !hasSiteGeometry();
}

// ---------------------------------------------------------------------------
// Mode switching
// ---------------------------------------------------------------------------

function setMode(newMode) {
  mode = newMode;
  el('mode-pin').classList.toggle('mode-btn--active', mode === 'pin');
  el('mode-polygon').classList.toggle('mode-btn--active', mode === 'polygon');
  el('radius-controls').classList.toggle('hidden', mode !== 'pin');
  el('polygon-controls').classList.toggle('hidden', mode !== 'polygon');
  el('mode-help').textContent =
    mode === 'pin'
      ? 'Click the map to drop a pin, then set a search radius around it.'
      : 'Click points on the map to trace the site boundary, then finish the shape.';
  updateCheckButtonState();
}

el('mode-pin').addEventListener('click', () => setMode('pin'));
el('mode-polygon').addEventListener('click', () => setMode('polygon'));

// ---------------------------------------------------------------------------
// Pin + radius input
// ---------------------------------------------------------------------------

function placePin(latlng) {
  if (pinMarker) map.removeLayer(pinMarker);
  if (radiusCircle) map.removeLayer(radiusCircle);
  pinMarker = L.marker(latlng, { draggable: true }).addTo(map);
  radiusCircle = L.circle(latlng, { radius: radiusM, color: '#1f6f4a', weight: 2, fillOpacity: 0.08 }).addTo(map);
  pinMarker.on('drag', (e) => radiusCircle.setLatLng(e.target.getLatLng()));
  updateCheckButtonState();
}

el('radius-slider').addEventListener('input', (e) => {
  radiusM = Number(e.target.value);
  radiusValueLabel.textContent = radiusM;
  if (radiusCircle) radiusCircle.setRadius(radiusM);
});

// ---------------------------------------------------------------------------
// Polygon input
// ---------------------------------------------------------------------------

function resetPolygon() {
  polygonPoints = [];
  polygonFinished = false;
  if (polygonPreview) { map.removeLayer(polygonPreview); polygonPreview = null; }
  if (polygonLayer) { map.removeLayer(polygonLayer); polygonLayer = null; }
  updateCheckButtonState();
}

function redrawPolygonPreview() {
  if (polygonPreview) map.removeLayer(polygonPreview);
  if (polygonPoints.length > 0) {
    polygonPreview = L.polyline(polygonPoints, { color: '#1f6f4a', weight: 2, dashArray: '4 4' }).addTo(map);
  }
}

function addPolygonPoint(latlng) {
  if (polygonFinished) resetPolygon();
  polygonPoints.push(latlng);
  redrawPolygonPreview();
}

el('polygon-undo').addEventListener('click', () => {
  polygonPoints.pop();
  redrawPolygonPreview();
});

el('polygon-finish').addEventListener('click', () => {
  if (polygonPoints.length < 3) {
    setStatus('Add at least 3 points to close a shape.', true);
    return;
  }
  if (polygonPreview) { map.removeLayer(polygonPreview); polygonPreview = null; }
  polygonLayer = L.polygon(polygonPoints, { color: '#1f6f4a', weight: 2, fillOpacity: 0.08 }).addTo(map);
  polygonFinished = true;
  setStatus('');
  updateCheckButtonState();
});

// ---------------------------------------------------------------------------
// Map click routing
// ---------------------------------------------------------------------------

map.on('click', (e) => {
  if (mode === 'pin') {
    placePin(e.latlng);
  } else {
    addPolygonPoint(e.latlng);
  }
});

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

async function runSearch() {
  const query = el('search-input').value;
  if (!query.trim()) return;
  setStatus('Searching…');
  try {
    const result = await searchPostcode(query);
    if (!result) {
      setStatus(`Couldn't find "${query}".`, true);
      return;
    }
    const latlng = L.latLng(result.lat, result.lng);
    map.setView(latlng, 15);
    if (mode === 'pin') placePin(latlng);
    setStatus(`Found: ${result.label}`);
  } catch (err) {
    console.error(err);
    setStatus('Search failed — check your connection.', true);
  }
}

el('search-btn').addEventListener('click', runSearch);
el('search-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runSearch();
});

// ---------------------------------------------------------------------------
// Clear
// ---------------------------------------------------------------------------

el('clear-btn').addEventListener('click', () => {
  if (pinMarker) { map.removeLayer(pinMarker); pinMarker = null; }
  if (radiusCircle) { map.removeLayer(radiusCircle); radiusCircle = null; }
  resetPolygon();
  layerManager.clear();
  buildLegendPanel(legendContainer, (slug, visible) => layerManager.setVisible(slug, visible));
  el('snapshot-content').classList.add('hidden');
  el('snapshot-empty').classList.remove('hidden');
  setStatus('');
  updateCheckButtonState();
});

// ---------------------------------------------------------------------------
// Check this site
// ---------------------------------------------------------------------------

function siteCenterAndSamples() {
  if (mode === 'pin') {
    const center = [pinMarker.getLatLng().lat, pinMarker.getLatLng().lng];
    return { center, samples: sampleCircle(center, radiusM, SAMPLING.ringPoints, SAMPLING.midRingPoints) };
  }
  const latlngs = polygonLayer.getLatLngs()[0];
  const samples = samplePolygon(latlngs, SAMPLING.maxPolygonVertices);
  const centroid = samples[samples.length - 1];
  return { center: centroid, samples };
}

function fitToSite() {
  if (mode === 'pin' && radiusCircle) {
    map.fitBounds(radiusCircle.getBounds(), { padding: [40, 40] });
  } else if (mode === 'polygon' && polygonLayer) {
    map.fitBounds(polygonLayer.getBounds(), { padding: [40, 40] });
  }
}

checkBtn.addEventListener('click', async () => {
  if (!hasSiteGeometry()) return;
  checkBtn.disabled = true;
  el('clear-btn').disabled = true;

  try {
    const { center, samples } = siteCenterAndSamples();
    fitToSite();

    setStatus(`Checking constraints (0/${samples.length})…`);
    const datasetSlugs = DATASETS.map((d) => d.slug);
    const [constraintResult, localAuthorityEntity] = await Promise.all([
      fetchConstraints(samples, datasetSlugs, (done, total) =>
        setStatus(`Checking constraints (${done}/${total})…`)
      ),
      fetchLocalAuthority(center[0], center[1]),
    ]);

    const localAuthorityProfile = findLocalAuthorityProfile(localAuthorityEntity?.name);
    const bySlug = layerManager.render(constraintResult.entities);
    buildLegendPanel(legendContainer, (slug, visible) => layerManager.setVisible(slug, visible), bySlug);

    const snapshot = buildSnapshot({
      entities: constraintResult.entities,
      sampleInfo: constraintResult,
      localAuthorityEntity,
      localAuthorityProfile,
    });

    renderSnapshot(snapshot);
    setStatus(constraintResult.failedPoints > 0 ? 'Done — some lookups failed, see snapshot for details.' : 'Done.');
  } catch (err) {
    console.error(err);
    setStatus('Something went wrong fetching planning data — check your connection and the browser console.', true);
  } finally {
    checkBtn.disabled = false;
    el('clear-btn').disabled = false;
  }
});

// ---------------------------------------------------------------------------
// Snapshot rendering
// ---------------------------------------------------------------------------

function renderSnapshot(snapshot) {
  el('snapshot-empty').classList.add('hidden');
  const container = el('snapshot-content');
  container.classList.remove('hidden');
  container.innerHTML = '';

  const badge = document.createElement('div');
  badge.className = `rating-badge rating-badge--${snapshot.rating}`;
  badge.textContent = snapshot.ratingLabel;
  container.appendChild(badge);

  const headline = document.createElement('p');
  headline.className = 'snapshot-headline';
  headline.textContent = snapshot.headline;
  container.appendChild(headline);

  container.appendChild(
    section('Constraints found', snapshot.constraintsFound, (c) => constraintCard(c, false))
  );
  container.appendChild(
    section('Opportunities', snapshot.opportunities, (c) => constraintCard(c, true))
  );

  container.appendChild(localAuthoritySection(snapshot.localAuthority));

  container.appendChild(
    section('National policy notes', snapshot.nationalPolicyNotes, policyCard)
  );

  const dq = document.createElement('div');
  dq.className = 'data-quality';
  dq.textContent = snapshot.dataQuality.note;
  container.appendChild(dq);

  const disclaimer = document.createElement('div');
  disclaimer.className = 'disclaimer-box';
  disclaimer.textContent = snapshot.disclaimer;
  container.appendChild(disclaimer);
}

function section(title, items, renderItem) {
  const wrap = document.createElement('div');
  wrap.className = 'snapshot-section';
  const h = document.createElement('h3');
  h.textContent = title;
  wrap.appendChild(h);
  if (!items || items.length === 0) {
    const p = document.createElement('p');
    p.className = 'muted small';
    p.textContent = 'None detected.';
    wrap.appendChild(p);
  } else {
    for (const item of items) wrap.appendChild(renderItem(item));
  }
  return wrap;
}

function constraintCard(c, isOpportunity) {
  const card = document.createElement('div');
  card.className = `constraint-card constraint-card--${isOpportunity ? 'opportunity' : c.severity}`;
  const strong = document.createElement('strong');
  strong.textContent = c.count > 1 ? `${c.label} (${c.count} features nearby)` : c.label;
  card.appendChild(strong);
  const blurb = document.createElement('div');
  blurb.textContent = c.blurb;
  card.appendChild(blurb);
  if (c.names.length > 0) {
    const names = document.createElement('div');
    names.className = 'muted small';
    names.style.marginTop = '4px';
    names.textContent = c.names.join(', ');
    card.appendChild(names);
  }
  return card;
}

function policyCard(p) {
  const card = document.createElement('div');
  card.className = 'policy-card';
  const strong = document.createElement('strong');
  strong.textContent = p.title;
  card.appendChild(strong);
  if (p.summary) {
    const summary = document.createElement('div');
    summary.textContent = p.summary;
    card.appendChild(summary);
  }
  if (p.forADummies) {
    const fd = document.createElement('div');
    fd.className = 'for-dummies';
    fd.textContent = `In plain English: ${p.forADummies}`;
    card.appendChild(fd);
  }
  return card;
}

function localAuthoritySection(localAuthority) {
  const wrap = document.createElement('div');
  wrap.className = 'snapshot-section';
  const h = document.createElement('h3');
  h.textContent = 'Local planning authority';
  wrap.appendChild(h);

  if (!localAuthority.name) {
    const p = document.createElement('p');
    p.className = 'muted small';
    p.textContent = 'Could not identify the local planning authority for this location.';
    wrap.appendChild(p);
    return wrap;
  }

  const nameEl = document.createElement('p');
  nameEl.innerHTML = `<strong>${localAuthority.name}</strong>`;
  wrap.appendChild(nameEl);

  const profile = localAuthority.profile;
  if (!profile) {
    const p = document.createElement('p');
    p.className = 'muted small';
    p.textContent = "No curated policy profile for this authority yet (outside the core Bucks/Herts/Berks/Oxon dataset, or the name didn't match). National constraint data above is still valid.";
    wrap.appendChild(p);
    return wrap;
  }

  const box = document.createElement('div');
  box.className = 'la-profile';
  box.innerHTML = `
    <dl>
      <dt>Local plan</dt>
      <dd>${profile.localPlan.planName} — ${profile.localPlan.status}. ${profile.localPlan.adoptedOrExpected}
        ${profile.localPlan.link ? `<br><a href="${profile.localPlan.link}" target="_blank" rel="noopener">Council local plan page</a>` : ''}
      </dd>
      <dt>Green Belt</dt>
      <dd>${profile.greenBelt.extent} — ${profile.greenBelt.note}</dd>
      <dt>5-year housing land supply</dt>
      <dd>${profile.housingLandSupply.status} (as of ${profile.housingLandSupply.asOf}). ${profile.housingLandSupply.note}</dd>
      <dt>Settlement pattern</dt>
      <dd>${profile.settlementHierarchy}</dd>
      <dt>Key policy themes</dt>
      <dd><ul>${profile.keyPolicyThemes.map((t) => `<li>${t}</li>`).join('')}</ul></dd>
      <dt>Known overlapping constraints</dt>
      <dd><ul>${profile.constraints.map((t) => `<li>${t}</li>`).join('')}</ul></dd>
    </dl>
    <div class="muted small" style="margin-top:8px;">${profile.caveat} (Last verified ${profile.lastVerified}.)</div>
    <div class="source-links" style="margin-top:6px;">
      ${profile.sourceLinks.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.title}</a>`).join('')}
    </div>
  `;
  wrap.appendChild(box);
  return wrap;
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------

setMode('pin');
updateCheckButtonState();
