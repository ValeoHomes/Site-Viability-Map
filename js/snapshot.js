// Combines constraint-layer hits, the local authority's curated policy profile, and
// national policy notes into one plain-English "site viability snapshot".
// This is a screening aid, not a planning appraisal — see the disclaimer text below.

import { DATASETS } from './config.js';
import { policyFor, NATIONAL_POLICY } from './nationalPolicy.js';

const DATASET_BY_SLUG = Object.fromEntries(DATASETS.map((d) => [d.slug, d]));

// How much each constraint typically weighs against a scheme, for the traffic-light
// rating. This is a deliberately simple heuristic to orient a first screen — it is
// not a substitute for planning judgement on the specific site and scheme.
const SEVERITY = {
  'national-park': 'high',
  'national-landscape': 'high',
  'site-of-special-scientific-interest': 'high',
  'ancient-woodland': 'high',
  'special-area-of-conservation': 'high',
  'special-protection-area': 'high',
  ramsar: 'high',
  'world-heritage-site': 'high',
  'scheduled-monument': 'high',
  'green-belt': 'medium',
  'conservation-area': 'medium',
  'listed-building-outline': 'medium',
  'park-and-garden': 'medium',
  'flood-risk-zone': 'medium',
  'article-4-direction-area': 'medium',
  'tree-preservation-zone': 'low',
};

function groupByDataset(entities) {
  const groups = new Map();
  for (const entity of entities) {
    const slug = entity.dataset;
    if (!groups.has(slug)) groups.set(slug, []);
    groups.get(slug).push(entity);
  }
  return groups;
}

function ratingFromGroups(groups) {
  let hasHigh = false;
  let hasMedium = false;
  for (const slug of groups.keys()) {
    const sev = SEVERITY[slug];
    if (sev === 'high') hasHigh = true;
    if (sev === 'medium') hasMedium = true;
  }
  if (hasHigh) return 'red';
  if (hasMedium) return 'amber';
  return 'green';
}

const RATING_COPY = {
  red: {
    label: 'Significant constraints found',
    headline:
      'One or more high-bar national designations overlap this area (e.g. AONB/National Landscape, SSSI, Ancient Woodland, National Park, or a protected habitat). Treat as a high-risk site unless you have a specific reason to believe it can overcome the relevant policy tests.',
  },
  amber: {
    label: 'Constraints found — proceed with care',
    headline:
      'This area has planning constraints (e.g. Green Belt, heritage, flood risk or an Article 4 Direction) that will shape what can be built and how — but these are frequently worked with successfully. Read the notes below before committing time or money.',
  },
  green: {
    label: 'No major constraints detected',
    headline:
      'No high-bar national designations were detected around this location from the datasets checked. This is encouraging, but it is not a clean bill of health — always check local designations, access, utilities and title separately.',
  },
};

export function buildSnapshot({ entities, sampleInfo, localAuthorityEntity, localAuthorityProfile }) {
  const groups = groupByDataset(entities);
  const rating = ratingFromGroups(groups);

  const constraintsFound = [];
  const opportunities = [];
  const policyNotesSeen = new Set();
  const nationalPolicyNotes = [];

  for (const [slug, hits] of groups.entries()) {
    const meta = DATASET_BY_SLUG[slug];
    if (!meta) continue; // unrecognised dataset slug returned by the API — ignore safely
    const entry = {
      slug,
      label: meta.label,
      blurb: meta.blurb,
      category: meta.category,
      severity: SEVERITY[slug] || 'low',
      count: hits.length,
      names: hits.map((h) => h.name || h.reference).filter(Boolean).slice(0, 5),
    };
    if (meta.kind === 'opportunity') {
      opportunities.push(entry);
    } else {
      constraintsFound.push(entry);
    }
    const policy = policyFor(slug);
    if (policy && !policyNotesSeen.has(policy.title)) {
      policyNotesSeen.add(policy.title);
      nationalPolicyNotes.push(policy);
    }
  }

  constraintsFound.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.severity] - order[b.severity];
  });

  // Housing land supply is a national-policy note in its own right (the "tilted
  // balance"), surfaced whenever we have a local authority profile at all, because
  // it matters regardless of which constraints (if any) were found.
  if (localAuthorityProfile && !policyNotesSeen.has(NATIONAL_POLICY['housing-land-supply'].title)) {
    nationalPolicyNotes.push(NATIONAL_POLICY['housing-land-supply']);
  }

  return {
    rating,
    ratingLabel: RATING_COPY[rating].label,
    headline: RATING_COPY[rating].headline,
    constraintsFound,
    opportunities,
    localAuthority: {
      name: localAuthorityEntity?.name || localAuthorityProfile?.name || null,
      profile: localAuthorityProfile || null,
    },
    nationalPolicyNotes,
    dataQuality: {
      sampledPoints: sampleInfo.sampledPoints,
      failedPoints: sampleInfo.failedPoints,
      note:
        sampleInfo.failedPoints > 0
          ? `${sampleInfo.failedPoints} of ${sampleInfo.sampledPoints} data lookups failed — this picture may be incomplete. Try again, or check your connection.`
          : 'All data lookups for this area succeeded.',
    },
    disclaimer:
      'This is an automated first screen built from open national datasets and a curated summary of local policy — it is not a substitute for a professional planning appraisal, a site visit, or direct confirmation from the local planning authority. Coverage of local designations (e.g. locally listed buildings, settlement boundaries, specific site allocations) is incomplete in the national datasets used here.',
  };
}
