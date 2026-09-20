// Curated, plain-English summaries of national planning policy (NPPF) relevant to
// screening land for development potential. This is a starting reference, not legal
// advice — always check the current NPPF and Planning Practice Guidance on GOV.UK.
//
// Baseline used: the NPPF as revised December 2024 (the "grey belt"/golden rules
// changes and the revised standard method for housing need). A further draft NPPF
// was under consultation (closed March 2026) at the time this was written (September
// 2026) and may have been finalised since — re-check GOV.UK if a decision hinges on
// exact wording.

export const NPPF_LAST_CONFIRMED = 'NPPF as revised December 2024 (a further revision was in consultation, closed March 2026 — check GOV.UK for the current version)';

export const NATIONAL_POLICY = {
  'green-belt': {
    title: 'Green Belt & "Grey Belt"',
    summary:
      'Green Belt land is protected from most development to keep towns separate and stop sprawl. New housing is normally "inappropriate development" and only allowed in "very special circumstances". Since December 2024, a new "Grey Belt" category covers Green Belt land that is previously developed and/or does not strongly contribute to the Green Belt’s purposes (keeping towns apart, safeguarding countryside from encroachment, preserving historic town character). Grey Belt housing schemes can avoid the "inappropriate development" label if they also meet the "Golden Rules": a policy-compliant level of affordable housing, necessary infrastructure, and accessible green space.',
    forADummies:
      'Plain Green Belt = very hard to build on. "Grey Belt" (poor-quality or previously-developed Green Belt land) = a realistic opportunity if you can meet the Golden Rules on affordable housing and infrastructure.',
  },
  'flood-risk': {
    title: 'Flood Risk',
    summary:
      'Local plans and planning decisions must apply the Sequential Test, steering development to the lowest flood risk land available first (Flood Zone 1 preferred over 2, then 3). If no reasonably available lower-risk site exists and the development type is otherwise appropriate in a higher zone, the Exception Test may apply, requiring the scheme to show wider sustainability benefits and that it will be safe for its lifetime without increasing risk elsewhere.',
    forADummies:
      'Flood Zone 1 = straightforward. Flood Zone 2 = usually fine for housing but expect extra flood-risk assessment work. Flood Zone 3 = high risk; housing often needs to pass the Exception Test, and finance/insurance can be harder to secure.',
  },
  heritage: {
    title: 'Heritage (Listed Buildings, Conservation Areas, Scheduled Monuments)',
    summary:
      'Great weight must be given to the conservation of a heritage asset—the more important the asset, the greater the weight. Any harm to the significance of a listed building, conservation area or scheduled monument (including from development affecting its "setting") must be weighed against the public benefits of the scheme. Less than substantial harm can be outweighed by clear public benefits; substantial harm or total loss requires wholly exceptional or exceptional justification depending on asset type.',
    forADummies:
      'The closer you are to a listed building, conservation area or ancient monument, the more your design has to work hard to justify itself — and the more likely you’ll need heritage consultant input early.',
  },
  ecology: {
    title: 'Protected Landscapes & Habitats (AONB/National Landscape, SSSI, SAC/SPA/Ramsar, Ancient Woodland)',
    summary:
      'National Landscapes (AONBs) and National Parks have the highest status of protection for landscape and scenic beauty; major development is normally refused unless it can be shown to be in the public interest and cannot reasonably be located elsewhere. SSSIs and internationally protected sites (SAC/SPA/Ramsar) require robust proof that development will not cause harm, sometimes triggering a Habitats Regulations Assessment even for sites some distance away. Ancient woodland and veteran trees should not be lost or deteriorated as a result of development unless there are wholly exceptional reasons and a suitable compensation strategy.',
    forADummies:
      'These are the hardest constraints to design around — if a site overlaps or sits near one of these, get a specialist ecologist or landscape consultant’s view before you commit money to due diligence.',
  },
  'housing-land-supply': {
    title: 'Housing Land Supply & the "Tilted Balance"',
    summary:
      'Councils must maintain a 5-year supply of deliverable housing land against their local housing need. Since December 2024, local housing need is set by a revised standard method (roughly: existing housing stock × 0.8%, adjusted upward for affordability pressure), applied as a mandatory minimum rather than just a starting point. Where a council cannot demonstrate a 5-year supply (or fails the Housing Delivery Test), the "tilted balance" in NPPF paragraph 11 applies: planning permission should usually be granted unless the harms of a scheme would significantly and demonstrably outweigh the benefits, or a specific policy (e.g. protecting habitats, Green Belt, flood risk, heritage) provides a clear reason to refuse.',
    forADummies:
      'If the local council can’t show a healthy 5-year land supply, the planning "wind" is at your back for otherwise-reasonable sites — this is one of the single most important numbers to check for any site outside the Green Belt/AONB/other hard constraints.',
  },
  brownfield: {
    title: 'Brownfield Land & Previously Developed Land',
    summary:
      'National policy gives strong support to development on previously developed ("brownfield") land, including a presumption in favour of brownfield development in built-up areas that is not subject to a hard constraint, and specific support for brownfield sites within the Green Belt as a route to Grey Belt status.',
    forADummies:
      'Brownfield sites are generally your friend — they carry less policy resistance and, within the Green Belt, can be the easiest way in via the Grey Belt route.',
  },
  'article-4': {
    title: 'Article 4 Directions',
    summary:
      'An Article 4 Direction removes specific permitted development rights (for example, converting offices to residential, or demolishing and rebuilding certain buildings) that would otherwise not need planning permission. It does not itself indicate hostility to development — it simply means the usual "permitted development" shortcuts to conversion or change of use aren’t available and a full planning application is required.',
    forADummies:
      'If you were banking on a Permitted Development Rights (PDR) conversion route, check for an Article 4 Direction first — it can force you back to a full planning application.',
  },
};

export function policyFor(datasetSlug) {
  const map = {
    'green-belt': 'green-belt',
    'flood-risk-zone': 'flood-risk',
    'conservation-area': 'heritage',
    'listed-building-outline': 'heritage',
    'scheduled-monument': 'heritage',
    'world-heritage-site': 'heritage',
    'park-and-garden': 'heritage',
    'national-landscape': 'ecology',
    'national-park': 'ecology',
    'site-of-special-scientific-interest': 'ecology',
    'ancient-woodland': 'ecology',
    'special-area-of-conservation': 'ecology',
    'special-protection-area': 'ecology',
    ramsar: 'ecology',
    'article-4-direction-area': 'article-4',
    'brownfield-land': 'brownfield',
  };
  const key = map[datasetSlug];
  return key ? NATIONAL_POLICY[key] : null;
}
