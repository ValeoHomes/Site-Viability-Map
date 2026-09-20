// UK postcode / place search using postcodes.io — a free, open, no-key API
// commonly used client-side (CORS enabled) for exactly this purpose.
// https://postcodes.io

export async function searchPostcode(query) {
  const clean = query.trim();
  if (!clean) return null;

  // Looks like a postcode (with or without a space) — use the direct lookup.
  if (/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(clean)) {
    const res = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(clean)}`);
    if (res.ok) {
      const body = await res.json();
      if (body.result) {
        return { lat: body.result.latitude, lng: body.result.longitude, label: body.result.postcode };
      }
    }
  }

  // Otherwise try it as a partial postcode / outcode autocomplete, then fall back
  // to treating it as a place name via postcodes.io's "outcode" or "terminated
  // postcode" lookups are not enough for full place names, so we use the OS Names
  // API is not free-without-key; instead fall back to Nominatim (OpenStreetMap),
  // restricted to England, for general place-name search.
  const nomRes = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&countrycodes=gb&limit=1&q=${encodeURIComponent(clean)}`,
    { headers: { Accept: 'application/json' } }
  );
  if (nomRes.ok) {
    const results = await nomRes.json();
    if (results && results.length > 0) {
      return { lat: parseFloat(results[0].lat), lng: parseFloat(results[0].lon), label: results[0].display_name };
    }
  }

  return null;
}
