// Client for the planning.data.gov.uk "entity" API — a free, open, unauthenticated
// API published by MHCLG (with data from Natural England, Historic England and the
// Environment Agency) covering statutory planning designations across England.
// Docs: https://www.planning.data.gov.uk/docs
//
// We query it by point (latitude/longitude) rather than by drawing a polygon in the
// request, because the point-lookup form of this API is the best-documented and most
// reliable option to build against without a live connection for testing. To cover an
// area (a search radius or a drawn site boundary) rather than a single point, we query
// several sample points across that area (see geometry.js) and merge the results.
//
// IMPORTANT: this app calls the API directly from the browser. It could not be tested
// against the live API from the environment this app was built in (outbound access to
// *.gov.uk was blocked by that sandbox's network policy) — see README "Testing &
// limitations". Verify it works from your own network before relying on it, and check
// the browser console for request errors if a layer stays empty.

import { PLANNING_DATA_API, LOCAL_AUTHORITY_DATASET, SAMPLING } from './config.js';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function queryPoint(lat, lng, datasetSlugs) {
  const url = new URL(PLANNING_DATA_API);
  url.searchParams.set('latitude', lat.toFixed(6));
  url.searchParams.set('longitude', lng.toFixed(6));
  url.searchParams.set('limit', '50');
  datasetSlugs.forEach((slug) => url.searchParams.append('dataset', slug));

  const res = await fetch(url.toString(), { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    throw new Error(`planning.data.gov.uk returned HTTP ${res.status}`);
  }
  const body = await res.json();
  return body.entities || body.entity || [];
}

// Queries every sample point for the given datasets, merges + de-duplicates the
// results by entity id, and reports which sample points failed so the UI can warn
// the user the picture may be incomplete rather than silently under-reporting risk.
export async function fetchConstraints(samplePoints, datasetSlugs, onProgress) {
  const byEntityId = new Map();
  let failures = 0;

  for (let i = 0; i < samplePoints.length; i++) {
    const [lat, lng] = samplePoints[i];
    try {
      const entities = await queryPoint(lat, lng, datasetSlugs);
      for (const entity of entities) {
        const id = entity.entity ?? `${entity.dataset}:${entity.reference ?? entity.name}:${lat},${lng}`;
        if (!byEntityId.has(id)) byEntityId.set(id, entity);
      }
    } catch (err) {
      failures += 1;
      console.warn('Constraint lookup failed for sample point', lat, lng, err);
    }
    if (onProgress) onProgress(i + 1, samplePoints.length);
    if (i < samplePoints.length - 1) await sleep(SAMPLING.requestDelayMs);
  }

  return {
    entities: Array.from(byEntityId.values()),
    sampledPoints: samplePoints.length,
    failedPoints: failures,
  };
}

// Identifies the local planning authority containing a point, using the same API.
export async function fetchLocalAuthority(lat, lng) {
  try {
    const entities = await queryPoint(lat, lng, [LOCAL_AUTHORITY_DATASET]);
    return entities[0] || null;
  } catch (err) {
    console.warn('Local authority lookup failed', err);
    return null;
  }
}

// Extracts a Leaflet-friendly GeoJSON geometry from a planning.data.gov.uk entity,
// if one was returned. Entities may carry `geometry` (GeoJSON) or `point` (WKT POINT).
export function entityToGeoJson(entity) {
  if (entity.geometry) {
    if (typeof entity.geometry === 'string') {
      // Some responses encode geometry as a GeoJSON string rather than an object.
      try {
        return JSON.parse(entity.geometry);
      } catch {
        return null;
      }
    }
    return entity.geometry;
  }
  if (entity.point && typeof entity.point === 'string') {
    const match = entity.point.match(/POINT\s*\(\s*(-?\d+\.?\d*)\s+(-?\d+\.?\d*)\s*\)/i);
    if (match) {
      return { type: 'Point', coordinates: [parseFloat(match[1]), parseFloat(match[2])] };
    }
  }
  return null;
}
