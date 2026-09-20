// Central configuration: constraint datasets, styling, categories, and app constants.
// Data source: planning.data.gov.uk "entity" API (open, no key required) — a single
// unified API covering statutory designations, flood risk and land-use registers
// published by MHCLG, Natural England, Historic England and the Environment Agency.
// https://www.planning.data.gov.uk/

export const PLANNING_DATA_API = 'https://www.planning.data.gov.uk/entity.json';

// Roughly the bounding box of Buckinghamshire, Hertfordshire, Berkshire and
// Oxfordshire combined, used to keep the map focused on the buyer's operating area.
export const OPERATING_AREA = {
  bounds: [
    [51.28, -1.85], // SW
    [52.15, -0.05], // NE
  ],
  center: [51.75, -0.95],
  zoom: 9,
};

export const OPERATING_COUNTIES = ['Buckinghamshire', 'Hertfordshire', 'Berkshire', 'Oxfordshire'];

// Each entry describes one planning.data.gov.uk dataset:
//   slug      - the `dataset` query value
//   label     - human-readable name shown in the legend / snapshot
//   category  - grouping used in the layer control
//   color     - fill/stroke colour
//   pattern   - 'solid' | 'diagonal-hatch' | 'cross-hatch' | 'dots' | 'dashed'
//   kind      - 'constraint' | 'opportunity' | 'context'
//   blurb     - one-line plain-English explanation ("for dummies")
export const DATASETS = [
  {
    slug: 'green-belt',
    label: 'Green Belt',
    category: 'Green Belt & Countryside',
    color: '#2f6b3a',
    pattern: 'diagonal-hatch',
    kind: 'constraint',
    blurb: 'Land protected from most development to stop urban sprawl. New homes here are normally "inappropriate development" unless very special circumstances apply, or the land is Grey Belt.',
  },
  {
    slug: 'conservation-area',
    label: 'Conservation Area',
    category: 'Heritage',
    color: '#8a5a2b',
    pattern: 'dashed',
    kind: 'constraint',
    blurb: 'An area valued for its historic or architectural character. Extra planning controls apply, including to demolition and some works to trees.',
  },
  {
    slug: 'listed-building-outline',
    label: 'Listed Building',
    category: 'Heritage',
    color: '#7b2d8e',
    pattern: 'solid',
    kind: 'constraint',
    blurb: 'A building of special architectural or historic interest. Any works affecting it (or its setting) usually need Listed Building Consent.',
  },
  {
    slug: 'scheduled-monument',
    label: 'Scheduled Monument',
    category: 'Heritage',
    color: '#7a1f1f',
    pattern: 'solid',
    kind: 'constraint',
    blurb: 'A nationally important archaeological site. Below-ground disturbance is tightly controlled — treat with caution even near a boundary.',
  },
  {
    slug: 'world-heritage-site',
    label: 'World Heritage Site',
    category: 'Heritage',
    color: '#b8860b',
    pattern: 'solid',
    kind: 'constraint',
    blurb: 'Internationally recognised heritage significance, with strong protection of its setting.',
  },
  {
    slug: 'park-and-garden',
    label: 'Registered Park or Garden',
    category: 'Heritage',
    color: '#c2185b',
    pattern: 'dashed',
    kind: 'constraint',
    blurb: 'A historic designed landscape. Development affecting its setting is heritage-sensitive, similar to a listed building.',
  },
  {
    slug: 'national-landscape',
    label: 'National Landscape (AONB)',
    category: 'Landscape & Nature',
    color: '#9caa3c',
    pattern: 'dots',
    kind: 'constraint',
    blurb: 'Formerly "AONB" — a nationally protected landscape. Major development faces a high bar and must show it cannot be located elsewhere.',
  },
  {
    slug: 'national-park',
    label: 'National Park',
    category: 'Landscape & Nature',
    color: '#1b5e20',
    pattern: 'solid',
    kind: 'constraint',
    blurb: 'The highest level of landscape protection, equivalent in policy weight to a National Landscape.',
  },
  {
    slug: 'site-of-special-scientific-interest',
    label: 'SSSI',
    category: 'Landscape & Nature',
    color: '#e07b00',
    pattern: 'dashed',
    kind: 'constraint',
    blurb: 'A site protected for its wildlife or geology. Development that could harm it (even from nearby) is strongly resisted.',
  },
  {
    slug: 'ancient-woodland',
    label: 'Ancient Woodland',
    category: 'Landscape & Nature',
    color: '#0d4d2b',
    pattern: 'solid',
    kind: 'constraint',
    blurb: 'Irreplaceable habitat present since at least 1600. Loss or deterioration is very rarely permitted, including within a buffer around it.',
  },
  {
    slug: 'special-area-of-conservation',
    label: 'Special Area of Conservation',
    category: 'Landscape & Nature',
    color: '#00796b',
    pattern: 'dots',
    kind: 'constraint',
    blurb: 'An internationally protected habitat site. May trigger a Habitats Regulations Assessment even for sites some distance away.',
  },
  {
    slug: 'special-protection-area',
    label: 'Special Protection Area',
    category: 'Landscape & Nature',
    color: '#00695c',
    pattern: 'dots',
    kind: 'constraint',
    blurb: 'An internationally protected bird habitat site, with the same assessment implications as an SAC.',
  },
  {
    slug: 'ramsar',
    label: 'Ramsar Site',
    category: 'Landscape & Nature',
    color: '#26a69a',
    pattern: 'dots',
    kind: 'constraint',
    blurb: 'An internationally important wetland, protected to the same standard as an SAC/SPA.',
  },
  {
    slug: 'article-4-direction-area',
    label: 'Article 4 Direction',
    category: 'Other Designations',
    color: '#616161',
    pattern: 'dashed',
    kind: 'constraint',
    blurb: 'Removes some "permitted development" rights (e.g. converting an office to flats without full planning permission) in this area.',
  },
  {
    slug: 'tree-preservation-zone',
    label: 'Tree Preservation Order',
    category: 'Other Designations',
    color: '#66bb6a',
    pattern: 'dots',
    kind: 'constraint',
    blurb: 'Protected trees. Consent is needed before felling, topping or lopping.',
  },
  {
    slug: 'flood-risk-zone',
    label: 'Flood Risk Zone',
    category: 'Flood Risk',
    color: '#1565c0',
    pattern: 'cross-hatch',
    kind: 'constraint',
    blurb: 'Land at risk of river or sea flooding (Flood Zone 2/3). May trigger the Sequential and Exception Tests, and could affect insurability and finance.',
  },
  {
    slug: 'brownfield-land',
    label: 'Brownfield Land Register',
    category: 'Opportunities',
    color: '#9e7b52',
    pattern: 'solid',
    kind: 'opportunity',
    blurb: 'Previously developed land on the council’s register — generally the most favourably treated land for new housing, including for small sites and Grey Belt release.',
  },
];

export const LOCAL_AUTHORITY_DATASET = 'local-authority-district';

// Sampling used to build a picture of constraints around a checked site.
export const SAMPLING = {
  ringPoints: 12, // points evenly spaced around the search radius / polygon edge
  midRingPoints: 6, // points at half-radius, to catch partial overlaps
  maxPolygonVertices: 24, // cap on vertices sampled from a drawn polygon
  requestDelayMs: 120, // stagger requests to be polite to the public API
};

export const DEFAULT_RADIUS_M = 500;
export const MIN_RADIUS_M = 100;
export const MAX_RADIUS_M = 2000;
