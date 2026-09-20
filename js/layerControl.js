// Renders constraint-layer results on the Leaflet map and builds the on/off,
// colour-coded layer control panel described in the brief.

import { DATASETS } from './config.js';
import { entityToGeoJson } from './planningData.js';
import { styleFor } from './mapPatterns.js';

const CATEGORY_ORDER = [
  'Green Belt & Countryside',
  'Flood Risk',
  'Heritage',
  'Landscape & Nature',
  'Other Designations',
  'Opportunities',
];

export class LayerManager {
  constructor(map) {
    this.map = map;
    this.leafletLayers = new Map(); // slug -> L.LayerGroup
    this.visibility = new Map(DATASETS.map((d) => [d.slug, true]));
    for (const d of DATASETS) {
      this.leafletLayers.set(d.slug, L.layerGroup());
    }
  }

  clear() {
    for (const group of this.leafletLayers.values()) {
      group.clearLayers();
      if (this.map.hasLayer(group)) this.map.removeLayer(group);
    }
  }

  // entities: array of planning.data.gov.uk entities (already de-duplicated)
  render(entities) {
    this.clear();
    const bySlug = new Map();
    for (const entity of entities) {
      if (!bySlug.has(entity.dataset)) bySlug.set(entity.dataset, []);
      bySlug.get(entity.dataset).push(entity);
    }

    for (const dataset of DATASETS) {
      const hits = bySlug.get(dataset.slug) || [];
      const group = this.leafletLayers.get(dataset.slug);
      for (const entity of hits) {
        const geojson = entityToGeoJson(entity);
        if (!geojson) continue;
        const layer = L.geoJSON(geojson, {
          style: () => styleFor(this.map, dataset),
          pointToLayer: (feature, latlng) =>
            L.circleMarker(latlng, {
              radius: 7,
              color: dataset.color,
              fillColor: dataset.color,
              fillOpacity: 0.85,
              weight: 2,
            }),
        });
        layer.bindPopup(
          `<strong>${dataset.label}</strong><br>${entity.name || entity.reference || ''}<br><span class="popup-blurb">${dataset.blurb}</span>`
        );
        group.addLayer(layer);
      }
      if (this.visibility.get(dataset.slug) && hits.length > 0) {
        group.addTo(this.map);
      }
    }

    return bySlug;
  }

  setVisible(slug, visible) {
    this.visibility.set(slug, visible);
    const group = this.leafletLayers.get(slug);
    if (!group) return;
    if (visible) {
      if (!this.map.hasLayer(group)) group.addTo(this.map);
    } else if (this.map.hasLayer(group)) {
      this.map.removeLayer(group);
    }
  }
}

// Builds the sidebar legend/toggle panel. `onToggle(slug, visible)` is called when
// the user flips a checkbox. `countsBySlug` (optional, Map<slug, number>) dims out
// datasets with no hits for the current site check.
export function buildLegendPanel(container, onToggle, countsBySlug = new Map()) {
  container.innerHTML = '';
  const byCategory = new Map();
  for (const d of DATASETS) {
    if (!byCategory.has(d.category)) byCategory.set(d.category, []);
    byCategory.get(d.category).push(d);
  }

  for (const category of CATEGORY_ORDER) {
    const datasets = byCategory.get(category);
    if (!datasets) continue;
    const section = document.createElement('div');
    section.className = 'legend-section';
    const heading = document.createElement('h3');
    heading.textContent = category;
    section.appendChild(heading);

    for (const d of datasets) {
      const count = countsBySlug.get(d.slug)?.length || 0;
      const row = document.createElement('label');
      row.className = 'legend-row' + (count === 0 ? ' legend-row--empty' : '');
      row.title = d.blurb;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = true;
      checkbox.addEventListener('change', () => onToggle(d.slug, checkbox.checked));

      const swatch = document.createElement('span');
      swatch.className = `legend-swatch legend-swatch--${d.pattern}`;
      swatch.style.setProperty('--swatch-color', d.color);

      const text = document.createElement('span');
      text.className = 'legend-text';
      text.textContent = count > 0 ? `${d.label} (${count})` : d.label;

      row.appendChild(checkbox);
      row.appendChild(swatch);
      row.appendChild(text);
      section.appendChild(row);
    }
    container.appendChild(section);
  }
}
