# Site Viability Map

A quick-screen tool for assessing land in **Buckinghamshire, Hertfordshire, Berkshire and Oxfordshire**. Drop a pin (or draw a site boundary) on the map and get a plain-English snapshot of the planning constraints, opportunities, and local policy context for that location — a first-pass "proceed or discount" read, before you spend time or money on due diligence.

It is a static web app: plain HTML/CSS/JavaScript, no build step, no server-side code, no account or API key required.

## What it does

1. **Mark a site** — click the map to drop a pin and set a search radius (100m–2000m), or trace a site boundary by hand.
2. **Check the site** — the app queries [planning.data.gov.uk](https://www.planning.data.gov.uk/) (the free, open MHCLG planning data API, built from Natural England, Historic England and Environment Agency data) around that area for ~17 constraint and opportunity layers: Green Belt, flood risk, conservation areas, listed buildings, scheduled monuments, National Landscapes (AONB), National Parks, SSSIs, ancient woodland, internationally protected habitats, Article 4 Directions, tree preservation orders, registered parks & gardens, World Heritage Sites, and the brownfield land register.
3. **Get a snapshot** — a colour-coded (red/amber/green) plain-English summary: which constraints were found and what they mean in practice, what national planning policy (NPPF) says about each one, and — for the local council — its current Local Plan status, Green Belt extent, 5-year housing land supply position, settlement hierarchy and key policy themes.
4. **Explore the map** — every constraint layer can be switched on/off individually and is styled with a distinct colour and fill pattern (hatch/dots/dashed/solid) so overlapping designations stay legible, with a category-grouped legend.

## Running it

No build step — just serve the folder over HTTP (opening `index.html` directly as a `file://` URL will *not* work, because the app uses JavaScript modules and calls external APIs, both of which browsers block from `file://`).

Easiest options:

```bash
# Python (built into most machines)
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then open `http://localhost:8000` in your browser.

**To deploy it for real use**, push this repo to [GitHub Pages](https://pages.github.com/) or drag the folder into [Netlify Drop](https://app.netlify.com/drop) — both are free and require no configuration beyond enabling the site, since there's no build step.

## How to use it day-to-day

- Type a postcode, address or place name in the search box, or just click straight on the map.
- **Pin + radius** mode is fastest for a quick screen of a site someone has just sent you — drop a pin roughly on the site and widen/narrow the radius to match its rough extent.
- **Draw boundary** mode is more precise: click points around the actual site edge, then "Finish shape". Use this once a site is shortlisted and you want the constraint check to hug the real boundary rather than a circle.
- Untick layers in the left-hand panel to declutter the map, e.g. to look at flood risk on its own.
- Read the right-hand snapshot top to bottom: the coloured badge is the headline read, "Constraints found" explains each hit in plain English with the relevant NPPF policy underneath, and the "Local planning authority" section gives you the council-specific context (Local Plan status, Green Belt %, 5-year housing land supply, settlement hierarchy).

## Data sources and how current they are

| Source | Used for | Notes |
|---|---|---|
| [planning.data.gov.uk](https://www.planning.data.gov.uk/) | All national constraint/opportunity layers, and identifying the local planning authority | Free, open, no key. Coverage is generally good for statutory national designations but **incomplete for local designations** (e.g. settlement boundaries, specific site allocations, locally listed buildings) — these are not in this dataset at all. |
| [postcodes.io](https://postcodes.io) + OpenStreetMap Nominatim | Postcode/place search | Free, open, no key. |
| `js/localAuthorities.js` (curated by this project) | Local Plan status, Green Belt extent, 5-year housing land supply, settlement hierarchy, key policy themes, for all 22 local planning authorities across the four counties | **Hand-researched top-line summary, not a live feed.** Local plan status and especially housing land supply figures move frequently (sometimes month to month, especially where a council is mid-examination or losing appeals) — every entry has a `lastVerified` date, a caveat, and source links so you can check the current position before relying on it. Treat it as a fast orientation aid, not the final word. |
| `js/nationalPolicy.js` (curated by this project) | Plain-English NPPF summaries | Reflects the NPPF as revised **December 2024** (the "Grey Belt"/"Golden Rules" changes and the revised standard method for housing need). A further NPPF revision was in consultation (closed March 2026) as this was built (September 2026) — re-check [GOV.UK's NPPF page](https://www.gov.uk/government/publications/national-planning-policy-framework--2) if a decision hinges on exact current wording. |

## Testing & limitations

This app was built and code-reviewed in an environment whose network policy blocked outbound access to `*.gov.uk` domains and to map tile servers, so **the live planning.data.gov.uk API calls and OpenStreetMap map tiles could not be tested end-to-end from within that environment.** To compensate:

- The full render pipeline (fetching, parsing entity geometry, styling map layers with colours/patterns, building the legend, and building the snapshot text including a real local authority profile) **was verified using a mocked API response** standing in for planning.data.gov.uk — this confirmed the code path works correctly end-to-end once given real data.
- The request/response shape used (`GET /entity.json?latitude=&longitude=&dataset=...`) matches planning.data.gov.uk's documented point-lookup API.
- Error handling was verified against a genuinely unreachable API: failed lookups are caught, counted, and surfaced in the snapshot ("X of Y data lookups failed") rather than silently under-reporting risk or crashing the app.

**Please do a first real check on your own network before relying on it for a live decision.** If a layer stays empty or the map tiles don't load, open the browser console (F12) — network errors there usually mean either your network/firewall is blocking `planning.data.gov.uk` or `tile.openstreetmap.org`, or (less likely) the API's field names have changed since this was built.

Other known limitations:

- **Flood zone detail**: the app flags "Flood Risk Zone" generically. For a live decision, always cross-check the exact zone (2 vs 3) and functional floodplain status on the official [Check the long term flood risk tool / Flood Map for Planning](https://www.gov.uk/check-long-term-flood-risk).
- **Local designations aren't covered**: settlement boundaries, specific site allocations, and locally (non-statutorily) listed buildings live in each council's own GIS, not in the national dataset this app queries. The curated local authority profiles give you the headline policy position, but always check the council's own interactive policies map for a shortlisted site.
- **The 22 local authority profiles are a v1 top-line reference**, not an exhaustive policy database — see the table above.
- The "Grey Belt" and 5-year housing land supply framing is genuinely powerful for identifying opportunity, but applying it correctly to a specific site is a judgement call — treat the snapshot as a reason to investigate further, not a substitute for planning advice.

## Extending it

- **Add/update a council's profile**: edit the relevant object in `js/localAuthorities.js` (schema documented at the top of the file).
- **Add a new constraint layer**: add an entry to `DATASETS` in `js/config.js` with the planning.data.gov.uk dataset slug, colour, and pattern; it will automatically appear in the legend and snapshot.
- **Add a new national policy note**: add an entry to `NATIONAL_POLICY` in `js/nationalPolicy.js` and map a dataset slug to it in `policyFor()`.
- **Full pannable layers** (rather than showing constraints only around a checked site): planning.data.gov.uk also supports an area/bounding-box query (`entity.geojson` with a `geometry`/`geometry_relation` parameter) that could drive live-updating layers as you pan the map — this wasn't used here because the point-lookup form was the one that could be verified with confidence without live API access; worth revisiting once you've confirmed the exact parameter format against the live docs.
- **Higher-accuracy title boundaries**: for shortlisted sites, consider wiring in the HM Land Registry INSPIRE Index Polygons (also free/open) to snap the drawn boundary to an actual registered title.

## Project structure

```
index.html              Page shell and layout
css/style.css            Styling
js/config.js             Dataset definitions, colours/patterns, map extent, constants
js/geometry.js           Circle/polygon sampling-point maths
js/geocode.js            Postcode/place search (postcodes.io + Nominatim)
js/planningData.js       planning.data.gov.uk API client
js/mapPatterns.js        SVG hatch/dot pattern generation for map layers
js/layerControl.js       Renders map layers + builds the legend/toggle panel
js/nationalPolicy.js     Curated NPPF summaries
js/localAuthorities.js   Curated 22-council policy profiles
js/snapshot.js           Combines everything into the viability snapshot
js/app.js                App bootstrap and UI wiring
vendor/leaflet/          Vendored Leaflet (map library) — no CDN dependency
```

## Disclaimer

This is a screening tool, not planning advice. It automates a first look using open national data and a hand-curated summary of local policy; it does not replace a professional planning appraisal, a site visit, or direct confirmation from the local planning authority.
