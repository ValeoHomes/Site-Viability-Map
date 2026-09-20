// Lightweight SVG pattern support for Leaflet polygons, so constraint layers can be
// distinguished by more than just colour (useful for overlapping layers and for
// colour-blind accessibility) — no extra plugin dependency required.
//
// Leaflet renders vector layers into an <svg> it owns. We inject <pattern> elements
// into that SVG's <defs> once it exists, then reference them as `fillPattern` via a
// `fill="url(#id)"` style, which Leaflet's L.Path lets us set through `fillColor`
// when we pass the pattern's url string instead of a hex colour.

let patternsInjected = false;

function buildPatternDefs(svg) {
  const NS = 'http://www.w3.org/2000/svg';
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS(NS, 'defs');
    svg.insertBefore(defs, svg.firstChild);
  }
  return defs;
}

function patternId(slug) {
  return `pattern-${slug}`;
}

export function ensurePattern(map, slug, color, pattern) {
  const svg = map.getPanes().overlayPane.querySelector('svg');
  if (!svg) return null;
  const id = patternId(slug);
  if (svg.querySelector(`#${id}`)) return `url(#${id})`;

  const NS = 'http://www.w3.org/2000/svg';
  const defs = buildPatternDefs(svg);
  const size = pattern === 'dots' ? 8 : 10;
  const el = document.createElementNS(NS, 'pattern');
  el.setAttribute('id', id);
  el.setAttribute('width', size);
  el.setAttribute('height', size);
  el.setAttribute('patternUnits', 'userSpaceOnUse');
  if (pattern === 'diagonal-hatch') {
    el.setAttribute('patternTransform', 'rotate(45)');
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', 0);
    line.setAttribute('y1', 0);
    line.setAttribute('x2', 0);
    line.setAttribute('y2', size);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', 3);
    el.appendChild(line);
  } else if (pattern === 'cross-hatch') {
    const line1 = document.createElementNS(NS, 'line');
    line1.setAttribute('x1', 0);
    line1.setAttribute('y1', 0);
    line1.setAttribute('x2', size);
    line1.setAttribute('y2', size);
    line1.setAttribute('stroke', color);
    line1.setAttribute('stroke-width', 2);
    const line2 = document.createElementNS(NS, 'line');
    line2.setAttribute('x1', size);
    line2.setAttribute('y1', 0);
    line2.setAttribute('x2', 0);
    line2.setAttribute('y2', size);
    line2.setAttribute('stroke', color);
    line2.setAttribute('stroke-width', 2);
    el.appendChild(line1);
    el.appendChild(line2);
  } else if (pattern === 'dots') {
    const circle = document.createElementNS(NS, 'circle');
    circle.setAttribute('cx', size / 2);
    circle.setAttribute('cy', size / 2);
    circle.setAttribute('r', 1.6);
    circle.setAttribute('fill', color);
    el.appendChild(circle);
  } else {
    // 'solid' and 'dashed' use a flat translucent fill; dashing is handled via the
    // layer's stroke `dashArray`, not the fill pattern.
    const rect = document.createElementNS(NS, 'rect');
    rect.setAttribute('width', size);
    rect.setAttribute('height', size);
    rect.setAttribute('fill', color);
    rect.setAttribute('fill-opacity', '0.35');
    el.appendChild(rect);
  }

  defs.appendChild(el);
  return `url(#${id})`;
}

export function styleFor(map, dataset) {
  const base = {
    color: dataset.color,
    weight: 2,
    opacity: 0.9,
    fillOpacity: dataset.pattern === 'solid' ? 0.28 : 0.55,
  };
  if (dataset.pattern === 'dashed') {
    base.dashArray = '6 4';
  }
  if (dataset.pattern === 'diagonal-hatch' || dataset.pattern === 'cross-hatch' || dataset.pattern === 'dots') {
    const url = ensurePattern(map, dataset.slug, dataset.color, dataset.pattern);
    if (url) base.fillColor = url;
  }
  return base;
}
