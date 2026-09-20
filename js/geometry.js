// Small geometry helpers — no external dependency needed for the sampling
// strategy we use to probe planning.data.gov.uk around a checked site.

const EARTH_RADIUS_M = 6371000;

// Returns a [lat, lng] point `distanceM` metres from `center` at `bearingDeg`
// (0 = north, 90 = east). Standard spherical destination-point formula.
export function destinationPoint(center, distanceM, bearingDeg) {
  const [lat, lng] = center;
  const angDist = distanceM / EARTH_RADIUS_M;
  const bearing = (bearingDeg * Math.PI) / 180;
  const lat1 = (lat * Math.PI) / 180;
  const lng1 = (lng * Math.PI) / 180;

  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(angDist) + Math.cos(lat1) * Math.sin(angDist) * Math.cos(bearing)
  );
  const lng2 =
    lng1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(angDist) * Math.cos(lat1),
      Math.cos(angDist) - Math.sin(lat1) * Math.sin(lat2)
    );

  return [(lat2 * 180) / Math.PI, (((lng2 * 180) / Math.PI + 540) % 360) - 180];
}

// Sample points describing a circle: the centre, points around the full
// radius, and points at half-radius, so partially-overlapping designations
// near the edge of the search area are still picked up.
export function sampleCircle(center, radiusM, ringPoints, midRingPoints) {
  const points = [center];
  for (let i = 0; i < ringPoints; i++) {
    const bearing = (360 / ringPoints) * i;
    points.push(destinationPoint(center, radiusM, bearing));
  }
  for (let i = 0; i < midRingPoints; i++) {
    const bearing = (360 / midRingPoints) * i + 15;
    points.push(destinationPoint(center, radiusM / 2, bearing));
  }
  return points;
}

// Sample points describing a drawn polygon: its vertices (capped), edge
// midpoints, and centroid.
export function samplePolygon(latlngs, maxVertices) {
  let ring = latlngs;
  if (ring.length > maxVertices) {
    const step = ring.length / maxVertices;
    ring = Array.from({ length: maxVertices }, (_, i) => ring[Math.floor(i * step)]);
  }

  const points = ring.map((p) => [p.lat, p.lng]);

  for (let i = 0; i < ring.length; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % ring.length];
    points.push([(a.lat + b.lat) / 2, (a.lng + b.lng) / 2]);
  }

  const centroid = ring.reduce(
    (acc, p) => [acc[0] + p.lat / ring.length, acc[1] + p.lng / ring.length],
    [0, 0]
  );
  points.push(centroid);

  return points;
}

export function circleToWkt(center, radiusM, points = 32) {
  const coords = [];
  for (let i = 0; i <= points; i++) {
    const bearing = (360 / points) * i;
    const [lat, lng] = destinationPoint(center, radiusM, bearing);
    coords.push(`${lng} ${lat}`);
  }
  return `POLYGON((${coords.join(', ')}))`;
}
