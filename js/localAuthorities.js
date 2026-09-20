// Curated top-line planning policy profiles for the 22 local planning authorities
// across Buckinghamshire, Hertfordshire, Berkshire and Oxfordshire.
//
// Compiled from public council and GOV.UK sources (local plan pages, adopted
// plans, Authority Monitoring Reports / housing land supply statements). This is
// a v1 quick-screen reference, not an exhaustive policy database — planning
// positions (especially housing land supply and emerging plan timetables) move
// quickly, so always verify against the council's current published position
// before relying on this for a live decision. See each entry's sourceLinks.

export const LOCAL_AUTHORITIES = [
  {
    "id": "buckinghamshire-council",
    "name": "Buckinghamshire Council",
    "county": "Buckinghamshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Partly adopted / legacy plans",
      "planName": "Local Plan for Buckinghamshire (emerging, whole-authority); legacy: Vale of Aylesbury Local Plan, Wycombe District Local Plan, Chiltern Local Plan/Core Strategy, South Bucks Local Plan/Core Strategy",
      "adoptedOrExpected": "No single adopted Buckinghamshire-wide plan yet. New Local Plan is at Regulation 19 (Publication) stage - consultation ran to 6 Sept 2026 - with government-directed submission for examination required by 31 Dec 2026. Until adopted, the four legacy district plans (Aylesbury Vale, Chiltern, South Bucks, Wycombe) continue to apply area-by-area.",
      "planPeriodEnd": "2045 (new plan); legacy plans have varying, mostly expired end-dates (e.g. Chiltern 2011, South Bucks 2011 Core Strategy to 2026, Vale of Aylesbury Local Plan to 2033)",
      "link": "https://www.buckinghamshire.gov.uk/planning-building-and-environment/policy-breaches-and-enforcement/buckinghamshire-local-plan/"
    },
    "greenBelt": {
      "extent": "Extensive in south/east, minimal in north",
      "note": "Green Belt (Metropolitan Green Belt) covers roughly a third of Buckinghamshire, almost entirely within the former Chiltern, South Bucks and Wycombe districts; the former Aylesbury Vale area in the north is largely outside Green Belt."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply in most areas (as low as ~0.86 years reported for the East Planning Area)",
      "asOf": "March 2026 (East Planning Area position statement)",
      "note": "Supply is assessed separately per legacy planning area and is severely constrained in the former Chiltern/South Bucks (East) area, materially increasing presumption-in-favour risk for well-located sites there."
    },
    "settlementHierarchy": "Aylesbury (north/central) and High Wycombe (south) are the two principal towns; each legacy plan area (Aylesbury Vale, Chiltern, South Bucks, Wycombe) retains its own settlement hierarchy of market towns (e.g. Marlow, Amersham, Chesham, Buckingham, Winslow) and tiered villages pending the single Buckinghamshire-wide plan.",
    "keyPolicyThemes": [
      "New single Buckinghamshire Local Plan to 2045 is government-directed and at pre-submission (Reg 19) stage - policy landscape is actively changing",
      "Legacy district plans/saved policies still determine most applications until the new plan is adopted, so the applicable policy set depends on which former district a site sits in",
      "Self-build and custom housebuilding register operates council-wide with a local connection test (2-part register)",
      "Rural exception sites policy supports affordable housing schemes adjoining village footprints",
      "Severe 5-year housing land supply shortfalls in the former Chiltern/South Bucks area create tactical opportunities via the presumption in favour of sustainable development"
    ],
    "constraints": [
      "Chilterns National Landscape (AONB) across much of the east/south-east",
      "Metropolitan Green Belt covering roughly a third of the council area (concentrated in Chiltern, South Bucks, Wycombe)",
      "HS2 construction corridor running through the district",
      "Flood risk from the River Thames, River Colne, River Ouzel and River Chess",
      "Numerous conservation areas and listed buildings in historic market towns (Marlow, Amersham, Beaconsfield, Buckingham)"
    ],
    "sourceLinks": [
      {
        "title": "Buckinghamshire Council - The Local Plan for Buckinghamshire",
        "url": "https://www.buckinghamshire.gov.uk/planning-building-and-environment/policy-breaches-and-enforcement/buckinghamshire-local-plan/"
      },
      {
        "title": "Our current plans and documents (legacy local plans)",
        "url": "https://www.buckinghamshire.gov.uk/planning-building-and-environment/policy-breaches-and-enforcement/local-development-scheme/local-development-scheme/our-current-plans-and-documents/"
      },
      {
        "title": "5-Year Housing Land Supply - Buckinghamshire Council",
        "url": "https://www.buckinghamshire.gov.uk/planning-and-building-control/planning-policy/planning-reporting/housing-land-supply/"
      },
      {
        "title": "East Planning Area Five-Year Housing Land Supply Position Statement, March 2026",
        "url": "https://media.buckinghamshire.gov.uk/documents/March_2026_East_Area_5YHLS_Position_Statement.pdf"
      },
      {
        "title": "Buckinghamshire Council directed to submit local plan by end of the year - The Planner",
        "url": "https://www.theplanner.co.uk/2026/02/16/buckinghamshire-council-directed-submit-local-plan-end-year"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "cherwell-district-council",
    "name": "Cherwell District Council",
    "county": "Oxfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted (new plan at examination)",
      "planName": "Cherwell Local Plan 2011-2031 (Part 1, adopted 2015, incl. 2020 Partial Review for Oxford's unmet need; Part 2 Rural Oxfordshire, adopted 2015) - being replaced by the Cherwell Local Plan Review 2042",
      "adoptedOrExpected": "Current plan adopted 2015 (Part 1) / 2020 (Partial Review); successor Local Plan 2042 submitted for examination 31 July 2025, with hearings held from February 2026 - adoption not yet confirmed, likely 2026/2027",
      "planPeriodEnd": "2031 (current); 2042 (emerging)",
      "link": "https://www.cherwell.gov.uk/homepage/27/local-plans"
    },
    "greenBelt": {
      "extent": "Partial - concentrated in the south of the district",
      "note": "Cherwell's Green Belt is limited to the Oxford Green Belt in the south of the district around Kidlington, Yarnton and Begbroke (Oxford's northern fringe); Banbury and Bicester in the north are not in Green Belt."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~2.3 years reported)",
      "asOf": "2024 Annual Monitoring Report / Housing Delivery Action Plan",
      "note": "A significant shortfall increases presumption-in-favour risk; the council has published a Housing Delivery Action Plan in response and the standard-method requirement has risen sharply (706 to c.1,118 dwellings/year)."
    },
    "settlementHierarchy": "Banbury and Bicester are the two Main Towns and focus for growth; Kidlington and Heyford Park have their own area strategies; below these sits a tiered hierarchy of rural service centres and villages.",
    "keyPolicyThemes": [
      "Cherwell has taken on a substantial share of Oxford's unmet housing need (c.4,400+ homes via the 2020 Partial Review and further homes in the emerging 2042 plan), concentrated around Kidlington/Yarnton/Begbroke",
      "This unmet-need housing is proposed partly on Green Belt land near Oxford's northern fringe, which has been contentious (CPRE and local objections)",
      "Banbury and Bicester area strategies drive most large-scale strategic allocations",
      "Self-build/custom-build and rural exception site policies apply in rural areas",
      "5-year housing land supply shortfall (~2.3 years) increases presumption-in-favour risk on sustainable sites"
    ],
    "constraints": [
      "Oxford Green Belt in the south of the district (Kidlington/Yarnton/Begbroke/Oxford fringe)",
      "Flood risk from the River Cherwell and its tributaries, especially around Banbury and Kidlington",
      "Heritage constraints in historic Banbury and numerous village conservation areas",
      "Proximity to Oxford's housing market pressure pushing strategic growth northward"
    ],
    "sourceLinks": [
      {
        "title": "Local Plans - Cherwell District Council",
        "url": "https://www.cherwell.gov.uk/homepage/27/local-plans"
      },
      {
        "title": "Cherwell Local Plan Review 2042 Examination",
        "url": "https://www.cherwell.gov.uk/homepage/203/cherwell-local-plan-review-2042-examination"
      },
      {
        "title": "Adopted Cherwell Local Plan 2011-2031 (Part 1) Partial Review - Oxford's Unmet Housing Need",
        "url": "https://www.cherwell.gov.uk/info/83/local-plans/215/adopted-cherwell-local-plan-2011-2031-part-1-partial-review---oxfords-unmet-housing-need"
      },
      {
        "title": "Cherwell Local Plan proposes homes in Green Belt - CPRE Oxfordshire",
        "url": "https://www.cpreoxon.org.uk/news/cherwell-district-council-propose-almost-4-000-homes-in-green-belt/"
      },
      {
        "title": "Council covering Banbury left vulnerable on five-year housing supply - Banbury Guardian",
        "url": "https://www.banburyguardian.co.uk/news/politics/council-covering-banbury-says-its-been-left-vulnerable-after-policy-means-they-have-to-show-five-years-housing-supply-4983238"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "oxford-city-council",
    "name": "Oxford City Council",
    "county": "Oxfordshire",
    "type": "City",
    "localPlan": {
      "status": "Adopted (new plan emerging)",
      "planName": "Oxford Local Plan 2036 (adopted, remains in force) - being replaced by the Oxford Local Plan 2045 (previously drafted as 'Local Plan 2040', withdrawn from examination in 2024, and reworked as 'Local Plan 2042'/now 'Local Plan 2045')",
      "adoptedOrExpected": "Local Plan 2036 adopted and in force; a prior successor (Local Plan 2040) was withdrawn from examination in 2024 on PINS advice; the reworked Local Plan 2045 completed a Regulation 19 Proposed Submission consultation (Jan-Mar 2026) and the Council aims to submit it for examination in Autumn/Winter 2026",
      "planPeriodEnd": "2036 (current); 2045 (emerging)",
      "link": "https://www.oxford.gov.uk/oxford-local-plan-2045"
    },
    "greenBelt": {
      "extent": "Extensive around the city edge",
      "note": "Oxford is almost entirely ringed by the Oxford Green Belt, which severely limits outward expansion; the emerging Local Plan 2045 process has assessed limited Green Belt release but this remains highly contested."
    },
    "housingLandSupply": {
      "status": "Well below 5-year supply (~2.88 years)",
      "asOf": "2025/26-2029/30 assessment (deliverable supply of 3,289 homes)",
      "note": "Oxford has been chronically undersupplied for years due to its very tight administrative boundary and Green Belt constraint, which is the core driver of unmet need being exported to neighbouring districts."
    },
    "settlementHierarchy": "Oxford City itself is the principal urban settlement in the sub-region (no rural hierarchy); policy focuses on the city centre, district centres (e.g. Cowley, Summertown, Headington) as growth 'hubs', and protected key employment/knowledge-economy sites.",
    "keyPolicyThemes": [
      "Oxford's very tight boundary plus surrounding Green Belt means it cannot meet its own housing need - its unmet need (currently assessed at c.12,373 homes 2025-2045) is distributed to Cherwell, South Oxfordshire and Vale of White Horse under Oxfordshire-wide cooperation agreements",
      "Town-centre-first / knowledge-economy protection: key employment sites tied to universities, science and health sectors are protected from loss to other uses",
      "District centres expected to take an extended role accommodating growth as local 'hubs'",
      "Any Green Belt release for housing within Oxford itself remains small-scale and contested",
      "Local Plan history is unstable (2040 plan withdrawn in 2024) - expect continued policy flux until 2045 plan is examined and adopted"
    ],
    "constraints": [
      "Oxford Green Belt surrounding almost the entire built-up area",
      "Flood risk from the River Thames (Isis) and River Cherwell, significant across low-lying parts of the city",
      "Extensive heritage/conservation constraints (historic core, university estates, views/skyline policies)",
      "Very limited developable land within the administrative boundary"
    ],
    "sourceLinks": [
      {
        "title": "Oxford Local Plan 2045 - Oxford City Council",
        "url": "https://www.oxford.gov.uk/oxford-local-plan-2045"
      },
      {
        "title": "Oxford Local Plan 2016-2036 (current adopted plan)",
        "url": "https://www.oxford.gov.uk/local-plan/local-plan-2016-2036"
      },
      {
        "title": "Authority Monitoring Report 2024-25, Chapter 4 - Oxford City Council",
        "url": "https://www.oxford.gov.uk/planning-policy/authority-monitoring-report-2024-25/4"
      },
      {
        "title": "Memorandum of Understanding on cooperating to meet Oxford's unmet housing need, July 2026",
        "url": "https://www.southandvale.gov.uk/app/uploads/2026/07/LPA26-Memorandum-of-Understanding-on-co-operating-to-meet-Oxfords-unmet-housing-need-July-2026.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "south-oxfordshire-district-council",
    "name": "South Oxfordshire District Council",
    "county": "Oxfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted (new joint plan at examination)",
      "planName": "South Oxfordshire Local Plan 2035 (adopted) - being replaced by the joint South Oxfordshire and Vale of White Horse Local Plan 2041",
      "adoptedOrExpected": "Local Plan 2035 adopted December 2020; the Joint Local Plan 2041 (prepared with Vale of White Horse) was submitted for independent examination in December 2024, with hearings running through 2025 and into autumn 2026 - adoption not yet confirmed. A separate statutory Regulation 10A review of the 2035 plan (approved by Cabinet Nov 2025) confirmed a revision is needed, timetable TBC.",
      "planPeriodEnd": "2035 (current); 2041 (emerging joint plan)",
      "link": "https://www.southoxon.gov.uk/south-oxfordshire-district-council/planning-and-development/local-plan-and-planning-policies/local-plan-2035/"
    },
    "greenBelt": {
      "extent": "Partial - concentrated in the north near Oxford",
      "note": "The northern part of South Oxfordshire (fringing Oxford) falls within the Oxford Green Belt, where the adopted plan releases some land for strategic housing sites; the south and east of the district are largely outside Green Belt but overlap the Chilterns AONB."
    },
    "housingLandSupply": {
      "status": "5-year supply currently met (~4.46 years reported, close to threshold)",
      "asOf": "December 2025 statement (base date 1 April 2025)",
      "note": "Supply is close to the 5-year threshold, so risk of falling below it (triggering presumption in favour) should be monitored, particularly if strategic sites near Oxford stall."
    },
    "settlementHierarchy": "Didcot is the largest and fastest-growing town and increasingly dominant hub (garden-town scale growth); Henley-on-Thames, Thame and Wallingford are the other main market towns, with Watlington and villages tiered below.",
    "keyPolicyThemes": [
      "South Oxfordshire accepted a significant share of Oxford's unmet housing need (c.4,950 homes under the earlier Growth Board agreement, plus further allocation in the Joint Local Plan 2041), largely via strategic sites adjoining Oxford's edge including Green Belt releases",
      "Didcot Garden Town is the primary strategic growth location in the district",
      "Inspector for the 2035 Plan found the housing target and Green Belt releases 'justified' with 'no reasonable alternatives' - a useful precedent for release arguments",
      "Joint working with Vale of White Horse on the 2041 plan means policy direction is shared/aligned across both districts",
      "Chilterns AONB and countryside protection policies constrain growth in the east/south of the district"
    ],
    "constraints": [
      "Oxford Green Belt in the north of the district",
      "Chilterns National Landscape (AONB) covering the east and south-east (Henley, Goring, Watlington area)",
      "Flood risk from the River Thames (running along the district's western/southern edge) and River Thame",
      "Heritage constraints in historic market towns (Henley, Wallingford, Thame, Dorchester)"
    ],
    "sourceLinks": [
      {
        "title": "Local Plan 2035 - South Oxfordshire District Council",
        "url": "https://www.southoxon.gov.uk/south-oxfordshire-district-council/planning-and-development/local-plan-and-planning-policies/local-plan-2035/"
      },
      {
        "title": "Joint Local Plan 2041 Examination - South and Vale",
        "url": "https://www.southandvale.gov.uk/joint-local-plan-2041-examination/"
      },
      {
        "title": "SODC Five-Year Housing Land Supply Statement, December 2025",
        "url": "https://www.southandvale.gov.uk/app/uploads/sites/2/2025/12/SODC-5YHLS-Statement-December-2025.pdf"
      },
      {
        "title": "Inspector backs South Oxfordshire plan's housing target and green belt releases - Planning Resource",
        "url": "https://www.planningresource.co.uk/article/1693094/inspector-backs-south-oxfordshire-plans-justified-housing-target-green-belt-releases"
      },
      {
        "title": "South Oxfordshire Cabinet Report - Local Plan 2035 Review",
        "url": "https://www.southandvale.gov.uk/app/uploads/sites/2/2025/12/South-Oxfordshire-Cabinet-Report-SOLP-Review-V5-for-publishing.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "vale-of-white-horse-district-council",
    "name": "Vale of White Horse District Council",
    "county": "Oxfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted (new joint plan at examination)",
      "planName": "Vale of White Horse Local Plan 2031 (Part 1 adopted 2016, Part 2 adopted 2019) - being replaced by the joint South Oxfordshire and Vale of White Horse Local Plan 2041",
      "adoptedOrExpected": "Local Plan 2031 Parts 1 & 2 adopted; the Joint Local Plan 2041 was submitted for independent examination in December 2024, with hearing stages through 2025 and into autumn 2026 (further stage announced for a 2045 successor plan, first consultation expected September 2026) - adoption of the 2041 plan anticipated around 2027",
      "planPeriodEnd": "2031 (current); 2041 (emerging joint plan)",
      "link": "https://www.whitehorsedc.gov.uk/vale-of-white-horse-district-council/planning-and-development/local-plan-and-planning-policies/local-plan-2041/"
    },
    "greenBelt": {
      "extent": "Partial - concentrated in the north near Oxford/Abingdon",
      "note": "The northern part of the district around Abingdon and towards Oxford falls within the Oxford Green Belt (with several sites removed from it via the adopted plan for strategic housing); the south of the district is largely outside Green Belt but overlaps the North Wessex Downs National Landscape (AONB), which covers about 23% of the district."
    },
    "housingLandSupply": {
      "status": "Marginal — reported around 4.9 to 5.8 years depending on date/appeal outcome",
      "asOf": "January 2025 statement (5.81 years); revised down to ~4.9 years after a September 2026 appeal decision removed sites from the pipeline",
      "note": "Supply is finely balanced and has recently dipped below 5 years following an Inspector's appeal decision, so presumption-in-favour risk should be checked against the latest statement for any specific site."
    },
    "settlementHierarchy": "Abingdon-on-Thames is the largest market town, with Wantage and Faringdon as the other two market towns; Grove functions as a local service centre alongside Wantage, with larger villages (e.g. Shrivenham, Stanford-in-the-Vale) tiered below.",
    "keyPolicyThemes": [
      "Vale of White Horse has taken a share of Oxford's unmet housing need (c.2,200 homes 2019-2031 previously, with further homes factored into the Joint Local Plan 2041), concentrated in strategic sites around Abingdon/north of the district",
      "Green Belt releases north/north-west of Abingdon and south of Kennington were found justified by exceptional circumstances at examination",
      "Joint working with South Oxfordshire on the 2041 (and now emerging 2045) plan means shared strategic policy direction",
      "North Wessex Downs AONB constrains growth in the south of the district",
      "Housing land supply is currently marginal (recently dipping close to/below 5 years) — check the latest position for any given site"
    ],
    "constraints": [
      "Oxford Green Belt in the north of the district (Abingdon/Kennington/Radley area)",
      "North Wessex Downs National Landscape (AONB) covering c.23% of the district in the south",
      "Flood risk from the River Thames and River Ock",
      "Heritage constraints in Abingdon (one of England's oldest towns) and village conservation areas"
    ],
    "sourceLinks": [
      {
        "title": "Joint Local Plan 2041 - Vale of White Horse District Council",
        "url": "https://www.whitehorsedc.gov.uk/vale-of-white-horse-district-council/planning-and-development/local-plan-and-planning-policies/local-plan-2041/"
      },
      {
        "title": "LPA16 Vale of White Horse 5-year housing land supply statement, January 2025",
        "url": "https://www.southandvale.gov.uk/app/uploads/2025/05/LPA16-Vale-White-Horse-5-year-housing-land-supply-statement-Jan-2025.pdf"
      },
      {
        "title": "Vale housing supply falls to 4.9 years as blanket discount fails - Planning Geek",
        "url": "https://www.planninggeek.co.uk/2026/vale-housing-supply-drayton/"
      },
      {
        "title": "Vale of White Horse Local Plan 2031 Part 2 - Detailed Policies and Additional Sites",
        "url": "https://www.southandvale.gov.uk/app/uploads/2024/12/ALP04-Vale-of-White-Horse-Local-Plan-2031-Part-2-Detailed-Policies-and-Additional-Sites.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "west-oxfordshire-district-council",
    "name": "West Oxfordshire District Council",
    "county": "Oxfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted (new plan emerging, early stage)",
      "planName": "West Oxfordshire Local Plan 2031 (adopted 2018) - being replaced by an emerging Local Plan (originally 'Local Plan 2041', end-date extended to 2043)",
      "adoptedOrExpected": "Local Plan 2031 adopted September 2018 and remains in force; successor plan is still in preparation, having completed a Regulation 18 'Preferred Spatial Options' consultation in October 2025 - Regulation 19 publication and submission are not yet reached, so adoption is unlikely before 2027-2028 despite an earlier target of 2026",
      "planPeriodEnd": "2031 (current); c.2043 (emerging, extended from 2041 to maintain a 15-year minimum period from adoption)",
      "link": "https://www.westoxon.gov.uk/planning-and-building/planning-policy/local-development-framework/"
    },
    "greenBelt": {
      "extent": "Small area only, in the east of the district",
      "note": "West Oxfordshire has a limited area of Oxford Green Belt in its east (around Eynsham/Cassington, bordering Oxford and Vale of White Horse); most of the district, including the Cotswolds area, is not Green Belt."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~4.30 years reported)",
      "asOf": "Position statement covering 2023-2028, referenced as current in mid-2026",
      "note": "A previous Inspector decision found the council had overestimated its housing land supply, and Policies H1/H2 of the adopted plan are treated as out of date, so supply should be checked closely for any given site and application."
    },
    "settlementHierarchy": "Witney, Carterton and Chipping Norton are the Tier 1 Principal Towns; Bampton, Burford, Charlbury, Eynsham, Long Hanborough, Woodstock and the new Salt Cross Garden Village are Tier 2 Service Centres; a tier of larger villages sits below (e.g. Standlake, North Leigh, Stonesfield).",
    "keyPolicyThemes": [
      "West Oxfordshire committed strategic sites to help meet Oxford's unmet housing need for 2011-2031 (Salt Cross Garden Village, 2,200 homes, and West of Eynsham, 1,000 homes/550 for Oxford's need) - both large, long-running strategic allocations to track",
      "Much of the district lies within the Cotswolds National Landscape (AONB), heavily constraining greenfield development in the west",
      "Small Oxford Green Belt area in the east (Eynsham/Cassington) limits growth options there",
      "5-year housing land supply shortfall (~4.3 years) with adopted housing policies treated as out-of-date increases presumption-in-favour opportunities",
      "New Local Plan still at an early (Reg 18) stage, so policy direction beyond 2031 remains fluid"
    ],
    "constraints": [
      "Cotswolds National Landscape (AONB) covering much of the west and centre of the district",
      "Oxford Green Belt in a limited area in the east (Eynsham/Cassington)",
      "Flood risk from the River Thames (Evenlode and Windrush tributaries) and River Windrush",
      "Extensive heritage assets — c.50 conservation areas, 84 Article 4 directions and over 3,200 listed buildings"
    ],
    "sourceLinks": [
      {
        "title": "Local Development Framework - West Oxfordshire District Council",
        "url": "https://www.westoxon.gov.uk/planning-and-building/planning-policy/local-development-framework/"
      },
      {
        "title": "West Oxfordshire Local Plan Preferred Spatial Options Consultation, October 2025",
        "url": "https://www.westoxon.gov.uk/media/ae0jcxni/local-plan-preferred-spatial-options-consultation-october-2025.pdf"
      },
      {
        "title": "Housing Land Supply Position Statement 2023 to 2028 - West Oxfordshire District Council",
        "url": "https://www.westoxon.gov.uk/media/pgyhbtrb/housing-land-supply-position-statement-2023-to-2028.pdf"
      },
      {
        "title": "Inspector finds housing land supply in West Oxfordshire overestimated - Oxfordshire Live",
        "url": "https://www.oxfordshirelive.co.uk/news/oxfordshire-news/inspector-finds-housing-land-supply-7526296"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "broxbourne-borough-council",
    "name": "Broxbourne Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Adopted",
      "planName": "Broxbourne Local Plan 2018-2033",
      "adoptedOrExpected": "Adopted 23 June 2020. In September 2025 the Council agreed to progress a brand-new Local Plan and invited landowners/site promoters to submit sites — an early, pre-Regulation 18 stage as of Sept 2026.",
      "planPeriodEnd": "2033",
      "link": "https://www.broxbourne.gov.uk/planning/local-plan-2018-2033"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Around 80% of the borough is Metropolitan Green Belt; the adopted 2020 Local Plan released roughly 490 hectares (about 15% of the pre-existing Green Belt) for development, mainly around the Lea Valley/A10 corridor towns."
    },
    "housingLandSupply": {
      "status": "Not confirmed — last published figure was 5+ years supply (~5.89 years)",
      "asOf": "Monitoring year 1 April 2021 - 31 March 2022 (no more recent public 5YHLS statement found)",
      "note": "Housing Delivery Test 2025 (published Aug 2026) showed 110% of target delivered 2022-25, suggesting a reasonably healthy position, but a current-dated 5YHLS statement could not be located — verify directly with the council before relying on this for site appraisal."
    },
    "settlementHierarchy": "Broxbourne is a linear borough of four main towns along the Lea Valley/A10 corridor — Cheshunt, Waltham Cross, Hoddesdon and Broxbourne — with almost no open countryside outside the Green Belt separating them; there is no significant separate rural/village tier.",
    "keyPolicyThemes": [
      "New full Local Plan review just launched (Sept 2025) — call for sites stage, so allocations are not yet fixed",
      "Green Belt release was used to meet the adopted plan's housing requirement; further release likely needed in the new plan",
      "Regeneration/town centre focus for Cheshunt and Waltham Cross",
      "Employment land protection along the A10/Lea Valley corridor",
      "Flood risk management given proximity to the River Lea and Lea Valley reservoirs"
    ],
    "constraints": [
      "Metropolitan Green Belt (~80% of borough)",
      "Lee Valley Regional Park and River Lea flood risk (Flood Zones 2/3)",
      "Proximity to Lea Valley reservoirs and associated infrastructure buffers"
    ],
    "sourceLinks": [
      {
        "title": "Broxbourne Local Plan 2018-2033",
        "url": "https://www.broxbourne.gov.uk/planning/local-plan-2018-2033"
      },
      {
        "title": "Five Year Housing Land Supply",
        "url": "https://www.broxbourne.gov.uk/downloads/file/3312/five-year-housing-land-supply"
      },
      {
        "title": "Green Belt Topic Paper June 2017",
        "url": "https://www.broxbourne.gov.uk/downloads/file/827/gb1---green-belt-topic-paper"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "dacorum-borough-council",
    "name": "Dacorum Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Emerging",
      "planName": "Dacorum Local Plan (to 2041)",
      "adoptedOrExpected": "No adopted plan currently in force (legacy Core Strategy 2013 / saved 2004 policies apply). New plan submitted for examination March 2025; Stage 3 hearings concluded March 2026; in July 2026 Inspectors found the largest Green Belt allocation (Hemel Garden Communities) unjustified and the plan short of its housing requirement — adoption timeline now uncertain, likely delayed beyond 2026 pending main modifications.",
      "planPeriodEnd": "2041 (proposed)",
      "link": "https://www.dacorum.gov.uk/home/planning-development/planning-strategic-planning/new-single-local-plan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "About 60% of the borough is Green Belt and roughly 85% is rural, with a third of the countryside also falling within the Chilterns National Landscape (AONB)."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (reported as low as ~1.0-1.7 years)",
      "asOf": "Figures reported October 2024 - 2025 (exact current statement not confirmed)",
      "note": "Dacorum has been found unable to demonstrate a 5-year supply at appeal; this is a materially weak position that increases the chance of the NPPF presumption in favour of sustainable development applying to well-located sites, including some Green Belt edge sites."
    },
    "settlementHierarchy": "Hemel Hempstead is the principal town (focus of the stalled Hemel Garden Communities strategic allocation), with Berkhamsted and Tring as significant secondary towns and a tier of smaller Chilterns villages (e.g. Northchurch, Bovingdon, Markyate) subject to strict countryside/Green Belt and AONB policy.",
    "keyPolicyThemes": [
      "Local Plan in limbo post-examination — Inspectors rejected the main strategic Green Belt allocation (Hemel Garden Communities) as unjustified (July 2026)",
      "Severe housing land supply shortfall increasing appeal/presumption risk on unallocated sites",
      "Chilterns National Landscape (AONB) constrains large parts of the rural west/south of the borough",
      "Hemel Hempstead town centre regeneration is a strategic priority",
      "Rural exception sites and countryside management policies apply outside Green Belt-released areas"
    ],
    "constraints": [
      "Metropolitan Green Belt (~60% of borough)",
      "Chilterns National Landscape (AONB) covering much of the rural west",
      "Hemel Hempstead flood risk (River Gade/Bulbourne)"
    ],
    "sourceLinks": [
      {
        "title": "New Dacorum Local Plan (to 2041)",
        "url": "https://www.dacorum.gov.uk/home/planning-development/planning-strategic-planning/new-single-local-plan"
      },
      {
        "title": "Examination Overview",
        "url": "https://letstalk.dacorum.gov.uk/examination-overview"
      },
      {
        "title": "Dacorum Stage 3 Green Belt Review",
        "url": "https://www.dacorum.gov.uk/docs/default-source/strategic-planning/dacorum-stage-3-green-belt-review-final-report-(issue-27-august-2020)---part-1.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "east-hertfordshire-district-council",
    "name": "East Hertfordshire District Council",
    "county": "Hertfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted",
      "planName": "East Herts District Plan 2018 (2011-2033)",
      "adoptedOrExpected": "Adopted 23 October 2018. A statutory review concluded a full update is needed; the Council is now plan-making under the new (LURA 2023) system, with a Scoping Consultation held June-July 2026 — a full replacement plan is still some years from adoption.",
      "planPeriodEnd": "2033",
      "link": "https://www.eastherts.gov.uk/planning-and-building/planning-policy/east-herts-district-plan-2018"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Metropolitan Green Belt covers the great majority of the district; the adopted 2018 District Plan released only around 6% of the pre-existing Green Belt (c.1,090 ha of 17,530 ha) for development."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~3.4-3.7 years)",
      "asOf": "Interim calculation based on completions to late February 2025; updated position statement pending",
      "note": "A sub-5-year position increases presumption-in-favour risk for suitable, sustainable sites even where not allocated, though the District Plan retains substantial weight as an up-to-date plan overall."
    },
    "settlementHierarchy": "Bishop's Stortford and Hertford are the principal towns, with Ware and Sawbridgeworth as secondary towns; a network of larger and smaller villages forms a tiered rural hierarchy with more limited infill/rural exception opportunities in the lowest tier and Green Belt villages.",
    "keyPolicyThemes": [
      "Plan-making has restarted under the new LURA system — full District Plan review, still at scoping stage (2026)",
      "Sub-5-year housing land supply increasing pressure on windfall and Green Belt-edge sites",
      "Gilston/Harlow area strategic growth (cross-boundary with Harlow) is a long-standing strategic allocation",
      "Town centre vitality policies for Bishop's Stortford, Hertford and Ware",
      "Strict countryside and Green Belt protection outside identified villages"
    ],
    "constraints": [
      "Metropolitan Green Belt (majority of the district)",
      "River Stort and River Lee flood risk corridors",
      "Landscape sensitivity around Hertford and the Chilterns fringe to the north-west"
    ],
    "sourceLinks": [
      {
        "title": "The East Herts District Plan 2018",
        "url": "https://www.eastherts.gov.uk/planning-and-building/planning-policy/east-herts-district-plan-2018"
      },
      {
        "title": "New Local Plan",
        "url": "https://www.eastherts.gov.uk/new-local-plan"
      },
      {
        "title": "Monitoring and Five Year Land Supply",
        "url": "https://www.eastherts.gov.uk/planning-and-building/planning-policy/monitoring-and-five-year-land-supply"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "hertsmere-borough-council",
    "name": "Hertsmere Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Partly adopted / legacy plans",
      "planName": "Hertsmere Local Plan 2012-2027 (legacy) / emerging new Local Plan",
      "adoptedOrExpected": "Current adopted plan (2012-2027) is time-expired in terms of its plan period. A 2021 draft Local Plan was withdrawn after public opposition to Green Belt release. A new Regulation 18 consultation ran April-May 2026; the Council must submit for examination by 31 December 2026 to stay under the current system — adoption not expected before 2027/28 at the earliest.",
      "planPeriodEnd": "2027 (legacy plan; new plan period not yet finalised)",
      "link": "https://www.hertsmere.gov.uk/newlocalplan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Approximately 80% of the borough is Metropolitan Green Belt, making Green Belt release central and contentious in the emerging Local Plan process."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~2 years)",
      "asOf": "Not confirmed — exact date of the ~2-year figure not verified; treat as indicative only",
      "note": "With no up-to-date plan and a long-expired plan period, the presumption in favour of sustainable development is likely to carry significant weight on appeals, including on some Green Belt sites, pending the new plan."
    },
    "settlementHierarchy": "Borehamwood and Potters Bar are the main urban areas, with Bushey and Radlett as significant towns; villages such as Shenley, Ridge and Aldenham sit within the Green Belt with tightly drawn settlement boundaries.",
    "keyPolicyThemes": [
      "Politically contentious Green Belt release — a 2021 draft plan was abandoned; council has since adopted a 'Green Belt performance-led' approach to site selection",
      "Statutory deadline pressure to submit a new plan for examination by end of 2026",
      "No demonstrable 5-year housing land supply, raising appeal risk on well-located non-allocated sites",
      "Strong protection of the Metropolitan Green Belt's purposes (checking sprawl, preventing merger of settlements) given the borough's proximity to London",
      "Elstree Studios/film and media employment cluster protection"
    ],
    "constraints": [
      "Metropolitan Green Belt (~80% of borough)",
      "Colne Valley and watercourse flood risk in parts of the borough",
      "Green Belt gaps between London's edge and towns such as Borehamwood/Radlett/Bushey are policy-sensitive"
    ],
    "sourceLinks": [
      {
        "title": "Draft Local Plan 2026 — Hertsmere Borough Council",
        "url": "https://www.hertsmere.gov.uk/newlocalplan"
      },
      {
        "title": "Current Local Plan",
        "url": "https://www.hertsmere.gov.uk/planning-building-control/planning-policy/hertsmere-local-plan/current-local-plan"
      },
      {
        "title": "Assessment and comparison of Green Belt housing and employment sites (2024)",
        "url": "https://www.hertsmere.gov.uk/Documents/09-Planning--Building-Control/Planning-Policy/Local-Plan/Assessment-and-comparison-of-Green-Belt-housing-and-employment-sites-2024.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "north-hertfordshire-district-council",
    "name": "North Hertfordshire District Council",
    "county": "Hertfordshire",
    "type": "District",
    "localPlan": {
      "status": "Adopted",
      "planName": "North Hertfordshire Local Plan 2011-2031",
      "adoptedOrExpected": "Adopted 8 November 2022. Policy IMR2 committed the Council to a review decision by end of 2023; the review concluded a full update is needed, and preparatory work is under way (no submission date confirmed as of Sept 2026).",
      "planPeriodEnd": "2031",
      "link": "https://www.north-herts.gov.uk/north-herts-local-plan-2011-2031"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "The Metropolitan Green Belt (plus a small area of Luton Green Belt in the west) covers the great majority of the district's land area outside its main towns, which together occupy under 7% of the total area; Royston in the north-east sits outside the Green Belt."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (approx. 4.5-5 years, not precisely confirmed)",
      "asOf": "November 2025 5YHLS position statement (as of 31 March 2025)",
      "note": "As of 31 March 2025 the Council reported deliverable supply of 5,215 dwellings against a much higher requirement following the 2024/25 increase in the annual housing figure to 1,120 dpa, implying an undersupply of over 1,200 homes against the five-year need — verify the precise years figure directly with the council."
    },
    "settlementHierarchy": "Hitchin, Letchworth Garden City and Baldock form the three closely related core towns; Royston is a separate, largely self-contained third-tier town beyond the Green Belt; villages such as Ashwell and Codicote sit below this in a graded rural hierarchy.",
    "keyPolicyThemes": [
      "Full Local Plan update triggered by statutory review — early stage, so future allocations remain unclear",
      "2024/25 standard method increase (to 1,120 dpa) has widened the housing land supply gap",
      "Letchworth Garden City's unique heritage/estate management framework (Letchworth Garden City Heritage Foundation) affects development in that town",
      "Chilterns National Landscape (AONB) constrains the southern part of the district",
      "Royston's cross-boundary relationship with East Hertfordshire/Cambridgeshire for growth planning"
    ],
    "constraints": [
      "Metropolitan Green Belt (majority of the district outside main towns)",
      "Chilterns National Landscape (AONB) in the south",
      "Letchworth Garden City heritage/estate management area"
    ],
    "sourceLinks": [
      {
        "title": "North Herts Local Plan 2011-2031",
        "url": "https://www.north-herts.gov.uk/north-herts-local-plan-2011-2031"
      },
      {
        "title": "Five-Year Housing Land Supply Update, November 2025",
        "url": "https://www.north-herts.gov.uk/sites/default/files/2025-11/5YHLS%20position%20statement%20-%20November%202025.pdf"
      },
      {
        "title": "North Hertfordshire Green Belt Review",
        "url": "https://www.north-herts.gov.uk/sites/default/files/CG1%20Green%20Belt%20Review.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "st-albans-city-and-district-council",
    "name": "St Albans City & District Council",
    "county": "Hertfordshire",
    "type": "City",
    "localPlan": {
      "status": "Emerging",
      "planName": "St Albans Draft Local Plan 2041 (current adopted plan dates from 1994)",
      "adoptedOrExpected": "The current adopted Local Plan is from 1994 — one of the oldest in the country. The new Local Plan to 2041 was submitted for examination in Nov 2024; Main Modifications consultation ran from 13 April 2026, with adoption targeted for around June/July 2026 (verify latest status, as timelines have slipped before).",
      "planPeriodEnd": "2041 (proposed)",
      "link": "https://www.stalbans.gov.uk/new-local-plan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Around 80% of the district is Metropolitan Green Belt, making Green Belt release the central and most contested element of the emerging Local Plan."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply — described by the Council itself as 'dire'",
      "asOf": "2025 Authority Monitoring Report / appeal evidence (2025)",
      "note": "The Council and appellants have agreed the housing supply position is acutely deficient, meaning the presumption in favour of sustainable development is highly likely to apply, including in some Green Belt appeal cases, pending new Local Plan adoption."
    },
    "settlementHierarchy": "St Albans city is the principal settlement, with Harpenden as a significant town; London Colney and smaller villages (e.g. Wheathampstead is a separate parish, Redbourn, Colney Heath) form a lower tier constrained heavily by Green Belt.",
    "keyPolicyThemes": [
      "Very high housing land supply risk given the 1994 adopted plan and 'dire' 5YHLS position",
      "Emerging Local Plan (2041) at Main Modifications stage — carries significant weight in decisions but not yet adopted",
      "Large-scale Green Belt release proposed/needed in the new plan to meet housing need",
      "Housing targets under the new standard method could rise substantially (reports of up to +10,500 homes), adding further pressure",
      "St Albans city centre and heritage conservation area constraints"
    ],
    "constraints": [
      "Metropolitan Green Belt (~80% of district)",
      "Chilterns National Landscape (AONB) touches the north-west of the district",
      "St Albans city heritage/conservation area and Roman Verulamium archaeological constraints",
      "River Ver and River Colne flood risk"
    ],
    "sourceLinks": [
      {
        "title": "New Local Plan — St Albans City and District Council",
        "url": "https://www.stalbans.gov.uk/new-local-plan"
      },
      {
        "title": "AMR 5 Year Housing Land Supply Position & Housing Trajectory, 1 April 2025",
        "url": "https://www.stalbans.gov.uk/sites/default/files/attachments/AMR%205%20Year%20Housing%20Land%20Supply%20Position%20&%20Housing%20Trajectory%201%20April%202025.pdf"
      },
      {
        "title": "Green Belt documents",
        "url": "https://www.stalbans.gov.uk/green-belt-documents"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "stevenage-borough-council",
    "name": "Stevenage Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Adopted",
      "planName": "Stevenage Borough Local Plan 2011-2031",
      "adoptedOrExpected": "Adopted 22 May 2019. A statutory review (triggered May 2024) concluded the spatial strategy remained sound but several policies needed updating; a Partial Update to the Local Plan was adopted 22 July 2026.",
      "planPeriodEnd": "2031",
      "link": "https://www.stevenage.gov.uk/planning-and-building-control/planning-policy/local-plan/stevenage-borough-local-plan"
    },
    "greenBelt": {
      "extent": "Partial (borough tightly bounded by Green Belt)",
      "note": "Stevenage is a small, largely 'underbounded' urban borough almost entirely built-up within its administrative area; it is surrounded by Metropolitan Green Belt, and the adopted 2019 Local Plan released a modest area (~80 ha, about 31% of a small pre-existing Green Belt parcel) for urban extensions, including into neighbouring North Hertfordshire."
    },
    "housingLandSupply": {
      "status": "5+ years supply (recently reported around 5.9-6.7 years)",
      "asOf": "Position reported for the period 1 April 2022 - 31 March 2027, including successful appeal allowances",
      "note": "Stevenage has generally been able to demonstrate a healthy housing land supply, partly bolstered by allowed appeals on Green Belt-edge urban extension sites (e.g. Land West of Lytton Way), reducing (but not eliminating) presumption-in-favour pressure."
    },
    "settlementHierarchy": "Stevenage is a single, largely self-contained post-war New Town with no significant separate village tier within the borough; growth is directed to urban extensions on the town's edge (often released from adjoining Green Belt) rather than a rural settlement hierarchy.",
    "keyPolicyThemes": [
      "Partial Local Plan update (adopted July 2026) refreshed several policies while retaining the core spatial strategy",
      "Growth relies on Green Belt-edge urban extensions given the borough's tight administrative boundary",
      "New Town regeneration and town centre renewal remain a strategic priority",
      "Relatively strong 5-year housing land supply reduces (but does not remove) appeal risk on speculative sites",
      "Cross-boundary growth relationships with North Hertfordshire for edge-of-town extensions"
    ],
    "constraints": [
      "Metropolitan Green Belt surrounding the built-up area",
      "Limited internal land supply due to the borough's small, tightly drawn boundary",
      "Flood risk associated with local watercourses (e.g. the River Beane catchment)"
    ],
    "sourceLinks": [
      {
        "title": "Stevenage Borough Local Plan",
        "url": "https://www.stevenage.gov.uk/planning-and-building-control/planning-policy/local-plan/stevenage-borough-local-plan"
      },
      {
        "title": "The adopted Stevenage Borough Local Plan 2011-2031 (April 2026)",
        "url": "https://www.stevenage.gov.uk/documents/planning-policy/cil-update-2026/ex3-the-adopted-stevenage-borough-local-plan-2011-2031-april-2026.pdf"
      },
      {
        "title": "Revised Housing Technical Paper (SBC, June 2025)",
        "url": "https://www.stevenage.gov.uk/documents/archive/consultation-documents/local-plan-partial-update/revised-housing-technical-paper-sbc-june-2025.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "three-rivers-district-council",
    "name": "Three Rivers District Council",
    "county": "Hertfordshire",
    "type": "District",
    "localPlan": {
      "status": "Partly adopted / legacy plans",
      "planName": "Legacy Core Strategy (2011) / Development Management Policies & Site Allocations (2013-2014) / emerging Three Rivers Local Plan 2026-2041",
      "adoptedOrExpected": "No single up-to-date plan; current development plan is a set of legacy documents. The emerging Local Plan 2026-2041 has faced significant government intervention — the Housing Minister issued Section 27 directions in 2026 (holding direction Feb 2026, further intervention March 2026) requiring a revised Regulation 19 consultation by 31 July 2026 and submission by 30 November 2026. Adoption is unlikely before 2027.",
      "planPeriodEnd": "2041 (proposed)",
      "link": "https://www.threerivers.gov.uk/services/planning/planning-policy/new-local-plan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Around 76% of the district is designated Green Belt, one of the highest proportions in Hertfordshire, severely constraining available land for the emerging plan's housing requirement."
    },
    "housingLandSupply": {
      "status": "Not confirmed — precise current years figure not verified",
      "asOf": "2025 Housing Land Supply Update (April 2026 publication)",
      "note": "The Council has a minimum annual housing need of 832 dwellings (5-year requirement ~4,992 dwellings); given the very high Green Belt coverage and stalled plan-making, a sub-5-year position and elevated appeal risk are likely — verify the exact figure directly with the council."
    },
    "settlementHierarchy": "Rickmansworth is the main town, with Croxley Green, Chorleywood and Abbots Langley/South Oxhey as significant settlements; the district is otherwise dominated by Green Belt with limited village-tier growth outside these built-up areas.",
    "keyPolicyThemes": [
      "Local Plan preparation subject to direct Ministerial (Section 27) intervention in 2026 — an unusually high level of government scrutiny",
      "Very high Green Belt coverage (~76%) makes site selection exceptionally contentious",
      "No single up-to-date development plan currently in force, increasing reliance on the NPPF and emerging plan evidence",
      "Proximity to London Underground Metropolitan line stations (Rickmansworth, Croxley, Moor Park) supports sustainable-location arguments for Green Belt releases",
      "Colne Valley Regional Park and watercourse corridors influence site deliverability"
    ],
    "constraints": [
      "Metropolitan Green Belt (~76% of district)",
      "Colne Valley Regional Park and river corridors (Colne, Chess, Gade)",
      "Chorleywood/Chiltern fringe landscape sensitivity"
    ],
    "sourceLinks": [
      {
        "title": "New Local Plan — Three Rivers District Council",
        "url": "https://www.threerivers.gov.uk/services/planning/planning-policy/new-local-plan"
      },
      {
        "title": "Three Rivers District Council: Local Plan Holding Direction letter",
        "url": "https://www.gov.uk/government/publications/three-rivers-district-council-local-plan-holding-direction-letter/three-rivers-district-council-local-plan-holding-direction-letter"
      },
      {
        "title": "Three Rivers Housing Land Supply Update 2025",
        "url": "https://cdn.threerivers.gov.uk/files/2026/04/bc8f1860-34dc-11f1-8e3c-5d9c77bf0bcb-5yhls%202025%20FINAL.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "watford-borough-council",
    "name": "Watford Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Adopted",
      "planName": "Watford Local Plan 2021-2038",
      "adoptedOrExpected": "Adopted 17 October 2022. Council documents flag the plan as scheduled 'for review' in due course, but no formal review timetable or new plan has been confirmed as of Sept 2026.",
      "planPeriodEnd": "2038",
      "link": "https://www.watford.gov.uk/localplan"
    },
    "greenBelt": {
      "extent": "Partial",
      "note": "Green Belt covers only around 20% of the borough — much less than most Hertfordshire districts — reflecting Watford's largely built-up, urban character."
    },
    "housingLandSupply": {
      "status": "5+ years supply (~5.44 years)",
      "asOf": "Five Year Supply Statement, May 2025 (covering April 2024 - March 2029)",
      "note": "As the first update since the Local Plan's adoption, this is a relatively strong, recently-evidenced position, reducing presumption-in-favour risk compared with most other Hertfordshire districts."
    },
    "settlementHierarchy": "Watford is a single, largely urban borough with no separate village tier; the town centre and identified regeneration/opportunity areas (e.g. Watford Riverwell, Town Centre) are the focus of the settlement strategy rather than a rural hierarchy.",
    "keyPolicyThemes": [
      "Recently adopted, up-to-date Local Plan (2021-2038) with a healthy demonstrable 5-year supply — comparatively low appeal risk",
      "Limited Green Belt (~20%) means growth is primarily urban/brownfield-led and regeneration-focused",
      "Watford town centre and Riverwell/health campus regeneration are strategic priorities",
      "High-density, tall-building policy areas around the town centre and station",
      "Strong public transport accessibility (Watford Junction, Metropolitan line) supports higher-density allocations"
    ],
    "constraints": [
      "Limited Green Belt (~20% of borough) mainly at the fringes",
      "River Colne and Ver flood risk corridors",
      "Watford town centre conservation areas and heritage assets"
    ],
    "sourceLinks": [
      {
        "title": "Watford Local Plan",
        "url": "https://www.watford.gov.uk/localplan"
      },
      {
        "title": "Five Year Supply Statement 2025",
        "url": "https://www.watford.gov.uk/downloads/file/2671/five-year-supply-statement-2025"
      },
      {
        "title": "Authority Monitoring Report 2024-2025",
        "url": "https://www.watford.gov.uk/downloads/file/2923/authority-monitoring-report-2025"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "welwyn-hatfield-borough-council",
    "name": "Welwyn Hatfield Borough Council",
    "county": "Hertfordshire",
    "type": "Borough",
    "localPlan": {
      "status": "Adopted",
      "planName": "Welwyn Hatfield Local Plan 2016-2036",
      "adoptedOrExpected": "Adopted 12 October 2023. The plan commits to a review submission before October 2026; a Draft (Regulation 18-stage) Local Plan review was consulted on 12 February - 26 March 2026.",
      "planPeriodEnd": "2036",
      "link": "https://www.welhat.gov.uk/local-plan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Just over 79% of the borough's land area is Metropolitan Green Belt, one of the highest proportions in Hertfordshire."
    },
    "housingLandSupply": {
      "status": "Not confirmed — most recent verified figure is dated (Council accepted only ~2.3 years supply in Oct 2022)",
      "asOf": "October 2022 (no more recent confirmed public figure found)",
      "note": "Historically Welwyn Hatfield has struggled to demonstrate a 5-year supply; the 2023 Local Plan and its evidence base should have improved this, but a current, dated statement could not be confirmed — verify directly with the council before relying on this for site appraisal."
    },
    "settlementHierarchy": "Welwyn Garden City and Hatfield are the two principal towns (each with distinct new-town/garden-city heritage), with Welwyn village, Digswell, Cuffley and other villages forming a lower tier constrained by Green Belt.",
    "keyPolicyThemes": [
      "Local Plan (2023) is relatively recent but already under review, with a Regulation 18 draft consulted in early 2026",
      "High Green Belt coverage (~79%) makes further release contentious in the emerging review",
      "Welwyn Garden City's Garden City heritage and estate management considerations affect design and layout policy",
      "Hatfield Business Park and University of Hertfordshire campus are significant employment/education land uses",
      "A1(M) corridor employment and logistics land pressure"
    ],
    "constraints": [
      "Metropolitan Green Belt (~79% of borough)",
      "Welwyn Garden City Conservation Area and Garden City heritage designations",
      "River Mimram and River Lea corridors (flood risk and biodiversity)"
    ],
    "sourceLinks": [
      {
        "title": "Local Plan — Welwyn Hatfield Borough Council",
        "url": "https://www.welhat.gov.uk/local-plan"
      },
      {
        "title": "Local Plan Review Local Development Scheme 2024",
        "url": "https://www.welhat.gov.uk/downloads/file/1243/lds-september-2024"
      },
      {
        "title": "Green Belt — Welwyn Hatfield Borough Council",
        "url": "https://archive.welhat.gov.uk/article/5521/Green-belt"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "bracknell-forest-council",
    "name": "Bracknell Forest Council",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Adopted",
      "planName": "Bracknell Forest Local Plan",
      "adoptedOrExpected": "Adopted 19 March 2024 (following Inspectors confirming the plan sound with main modifications)",
      "planPeriodEnd": "2039 (plan covers c. 15 years from adoption)",
      "link": "https://www.bracknell-forest.gov.uk/planning-and-building-control/planning/planning-policy/planning-policy-overview"
    },
    "greenBelt": {
      "extent": "Partial",
      "note": "Green Belt lies to the north and east of the borough (protecting the gap with London/Surrey), while the built-up area and much of the south (including the Thames Basin Heaths SPA fringe) sits outside it — verify exact % with council."
    },
    "housingLandSupply": {
      "status": "Around 5+ years supply (~5.15 years reported), but position is volatile post-adoption",
      "asOf": "1 April 2024, updated January 2025 for revised NPPF (Dec 2024); a further calculation \"as at 1 April 2025\" was published June 2025 but the exact updated figure could not be confirmed from public search results",
      "note": "Council claimed 5.33 years on Local Plan adoption (base date 1 April 2023) and 5.15 years in the Jan 2025 update; check the latest published HLS note before relying on this, as figures have moved materially year to year."
    },
    "settlementHierarchy": "Bracknell town centre is the principal retail/office centre and main focus for growth, with Sandhurst and Crowthorne as secondary settlements; the remainder of the borough is largely built-up suburban area or Green Belt/countryside with limited villages.",
    "keyPolicyThemes": [
      "Newly adopted (2024) plan gives strong policy weight — allocations largely fixed for the plan period",
      "Thames Basin Heaths SPA mitigation (SANG/SAMM contributions) required near heathland habitats",
      "Town centre regeneration and housing intensification prioritised in Bracknell town centre",
      "Green Belt release limited to specific reviewed parcels identified through the plan process",
      "Affordable housing and self-build/custom-build provisions set out in adopted plan"
    ],
    "constraints": [
      "Green Belt (north/east of borough)",
      "Thames Basin Heaths Special Protection Area (SPA) and associated buffer zones",
      "Areas of ancient woodland and heathland SSSIs",
      "Surface water flood risk in parts of the borough"
    ],
    "sourceLinks": [
      {
        "title": "Bracknell Forest Council - Planning policy overview",
        "url": "https://www.bracknell-forest.gov.uk/planning-and-building-control/planning/planning-policy/planning-policy-overview"
      },
      {
        "title": "Bracknell Forest Local Plan adopted (news)",
        "url": "https://www.bracknell-forest.gov.uk/news/2024/03/bracknell-forest-local-plan-adopted"
      },
      {
        "title": "Housing land supply calculation 1 April 2025 (published June 2025)",
        "url": "https://www.bracknell-forest.gov.uk/sites/default/files/2025-06/housing-land-supply-calculation-1-april-2025-published-june-2025.pdf"
      },
      {
        "title": "Thames Basin Heaths SPA Delivery Framework",
        "url": "https://www.bracknell-forest.gov.uk/sites/default/files/2021-08/thames-basin-heaths-spa-delivery-framework.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "reading-borough-council",
    "name": "Reading Borough Council",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Adopted",
      "planName": "Reading Borough Local Plan (2019) with a Local Plan Partial Update (LPPU) in progress",
      "adoptedOrExpected": "Base plan adopted November 2019; Partial Update submitted for examination May 2025, under examination through late 2025/2026 (hearings ongoing into 2026)",
      "planPeriodEnd": "2036 (base plan); Partial Update expected to extend/adjust this",
      "link": "https://www.reading.gov.uk/planning-and-building-control/planning-policy/local-plan/"
    },
    "greenBelt": {
      "extent": "None",
      "note": "Reading is a tightly-bounded urban unitary authority with no Green Belt of its own; the surrounding Green Belt/countryside lies in neighbouring West Berkshire, Wokingham and South Oxfordshire districts."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~3.55 years)",
      "asOf": "Annual Monitoring Report 2024/25 (covering 1 April 2024 – 31 March 2025), published January 2026",
      "note": "Housing requirement is now assessed against the national standard method (the adopted policy is over 5 years old), so the tilted balance/presumption in favour of sustainable development is likely to apply to qualifying schemes."
    },
    "settlementHierarchy": "Reading is a single, largely built-up urban authority centred on Reading town centre; the Local Plan Partial Update pushes an even stronger \"town centre first\" strategy (raising town-centre housing share from ~50% to ~60%, with c. 8,700 homes/59% of the total planned for Central Reading).",
    "keyPolicyThemes": [
      "Town centre first strategy with minimum density of 200 dph proposed for Central Reading in the emerging Partial Update",
      "No Green Belt — pressure is instead on brownfield/urban intensification and flood-constrained sites",
      "Significant flood risk from the River Thames and River Kennet constrains town-centre and riverside sites",
      "Local Plan Partial Update (submitted May 2025) still under examination — emerging policy carries less weight until adopted",
      "Standard method housing need (878 dwellings/year including 35% urban uplift) drives high housing pressure relative to available land"
    ],
    "constraints": [
      "River Thames and River Kennet flood risk corridors (fluvial and surface water)",
      "No Green Belt, but very limited greenfield land — almost entirely built-up",
      "Heritage assets/conservation areas in the town centre",
      "Tight administrative boundary shared with Wokingham and West Berkshire — cross-boundary housing need issues"
    ],
    "sourceLinks": [
      {
        "title": "Reading Borough Local Plan (Partial Update) Submission, May 2025",
        "url": "https://images.reading.gov.uk/2025/05/LP001-Local-Plan-Partial-Update-Submission-Draft-May-2025.pdf"
      },
      {
        "title": "Reading Borough Council - Annual Monitoring Report 2024-25",
        "url": "https://images.reading.gov.uk/2026/01/Annual-Monitoring-Report-2024-25.pdf"
      },
      {
        "title": "Reading Borough Council - Local Plan / LGR page",
        "url": "https://www.reading.gov.uk/the-council-and-democracy/local-government-reorganisation-and-devolution/local-government-reorganisation-lgr/"
      },
      {
        "title": "EX046 RBC Hearing Statement Matter 3 (5YHLS)",
        "url": "https://images.reading.gov.uk/2026/01/EX046-RBC-Hearing-Statement-Matter-3.pdf"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "slough-borough-council",
    "name": "Slough Borough Council",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Partly adopted / legacy plans",
      "planName": "Legacy Slough Local Development Framework Core Strategy (2006-2026) plus saved policies; new Slough Local Plan (2025-2045) in early preparation",
      "adoptedOrExpected": "New Local Plan at scoping/Issues stage in 2026; Local Development Scheme (March 2025) timetabled publication Feb 2026 and submission to Secretary of State December 2026, so adoption is unlikely before 2027/28",
      "planPeriodEnd": "2045 (proposed new plan horizon)",
      "link": "https://www.slough.gov.uk/planning-policy/new-local-plan-slough/6"
    },
    "greenBelt": {
      "extent": "Partial",
      "note": "Slough retains a limited Green Belt on parts of its western/southern edges (e.g. around Colnbrook with Poyle) separating it from neighbouring boroughs, but the great majority of the borough is built-up urban area — verify precise extent with council."
    },
    "housingLandSupply": {
      "status": "Not confirmed — verify with council (historically well below 5 years; an appeal-derived figure of ~2.1 years was recorded in 2023)",
      "asOf": "Most recent confirmed figure is from a 2023 appeal decision; the 2024/25 Annual Monitoring Report (published c. August 2025) was located but its specific housing land supply figure could not be confirmed from public search results",
      "note": "Council has a long-running housing land supply shortfall and is reliant on a legacy/saved plan while a new Local Plan is prepared, so the presumption in favour of sustainable development is likely to be a live issue on appeal."
    },
    "settlementHierarchy": "Slough is a single dense urban unitary authority with no rural tier; Slough town centre is the principal focus for regeneration and taller/higher-density housing, with distinct neighbourhoods (e.g. Colnbrook with Poyle) at the borough edges.",
    "keyPolicyThemes": [
      "New Local Plan (2025-2045) only at early scoping/call-for-sites stage — limited policy certainty for several years",
      "Reliance on legacy Core Strategy (2006-2026) and saved policies pending new plan adoption",
      "Historic under-supply of deliverable housing land and heavy reliance on town-centre/brownfield regeneration and tall buildings",
      "Employment/logistics land pressure given proximity to Heathrow and the M4 corridor",
      "Council under external Commissioners' oversight in recent years following governance/financial issues — may affect plan-making pace"
    ],
    "constraints": [
      "River Thames and River Colne flood risk (Colne Valley Strategic Flood Risk Area)",
      "Limited Green Belt on western/southern fringes",
      "Heathrow Airport safeguarding/noise and flight path considerations to the south",
      "Dense urban grain with limited greenfield land and heritage/conservation constraints in parts of the town centre"
    ],
    "sourceLinks": [
      {
        "title": "The new local plan for Slough - Slough Borough Council",
        "url": "https://www.slough.gov.uk/planning-policy/new-local-plan-slough/6"
      },
      {
        "title": "Local Development Scheme, March 2025",
        "url": "https://www.slough.gov.uk/downloads/file/4670/the-local-development-scheme-march-2025"
      },
      {
        "title": "LDF Annual Monitoring Report 2024/25",
        "url": "https://www.slough.gov.uk/downloads/file/4813/ldf-annual-monitoring-report-2024-25"
      },
      {
        "title": "Slough - new appeal-derived figure (Planning Resource)",
        "url": "https://www.planningresource.co.uk/article/1836125/slough-new-appeal-derived-figure"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "west-berkshire-council",
    "name": "West Berkshire Council",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Adopted",
      "planName": "West Berkshire Local Plan Review 2023-2041",
      "adoptedOrExpected": "Adopted 10 June 2025 (after Inspector's report April 2025 found it sound subject to main modifications)",
      "planPeriodEnd": "2041",
      "link": "https://www.westberks.gov.uk/local-plan-review"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "West Berkshire contains a significant amount of countryside and open land, with much of the district also covered by the North Wessex Downs National Landscape (AONB) — Green Belt itself is more limited than the AONB coverage, so verify exact Green Belt extent with the council's policies map."
    },
    "housingLandSupply": {
      "status": "5+ years supply (~5.7 years) following Local Plan adoption",
      "asOf": "Position updated following Local Plan Review adoption on 10 June 2025 (five-year period 2024/25-2028/29)",
      "note": "Supply had fallen to only ~2.6 years in February 2025 before adoption resolved the shortfall — a reminder that this position can shift quickly if the plan is challenged or allocations stall."
    },
    "settlementHierarchy": "Newbury is the principal town and main focus for growth, supported by Thatcham and Hungerford as secondary service centres; a tier of smaller villages take limited infill/rural exception development, with much of the wider district being North Wessex Downs National Landscape.",
    "keyPolicyThemes": [
      "Newly adopted (June 2025) plan increases overall housing supply to 9,493 homes (2023-2041)",
      "North Wessex Downs National Landscape (AONB) covers roughly three-quarters of the district — major landscape constraint on greenfield sites",
      "Rural exception sites and small-scale rural housing policies for villages outside the AONB/settlement boundaries",
      "Newbury town centre regeneration and employment land protection along the A34/M4 corridor",
      "Gypsy, Traveller and Travelling Showpeople five-year land supply monitored separately from general housing"
    ],
    "constraints": [
      "North Wessex Downs National Landscape (AONB) — covers roughly 74% of the district",
      "River Kennet and River Thames flood risk corridors",
      "Numerous SSSIs and chalk stream/river corridor ecology constraints",
      "Historic/heritage assets including Newbury and rural conservation areas"
    ],
    "sourceLinks": [
      {
        "title": "West Berkshire Council - Local Plan Review 2023 to 2041",
        "url": "https://www.westberks.gov.uk/local-plan-review"
      },
      {
        "title": "Adoption of the West Berkshire Local Plan Review 2023 to 2041",
        "url": "https://www.westberks.gov.uk/article/44639/Adoption-of-the-West-Berkshire-Local-Plan-Review-2023-to-2041"
      },
      {
        "title": "West Berkshire Council - Updated five-year housing land supply position",
        "url": "https://westberks.gov.uk/article/44634/Updated-five-year-housing-land-supply-position"
      },
      {
        "title": "North Wessex Downs National Landscape",
        "url": "https://www.northwessexdowns.org.uk/"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "royal-borough-of-windsor-and-maidenhead",
    "name": "Royal Borough of Windsor and Maidenhead",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Adopted",
      "planName": "Borough Local Plan 2013-2033",
      "adoptedOrExpected": "Adopted 8 February 2022",
      "planPeriodEnd": "2033",
      "link": "https://www.rbwm.gov.uk/home/planning-and-building-control/planning-policy/development-plan/adopted-local-plan"
    },
    "greenBelt": {
      "extent": "Extensive",
      "note": "Around 83% of the Royal Borough is designated Green Belt, making it one of the most Green Belt-constrained authorities in the region; the adopted Local Plan releases a limited number of Green Belt sites concentrated around Maidenhead, with smaller releases near Windsor, Ascot, Cookham, Sunningdale, Datchet and Horton."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply",
      "asOf": "Position as reported around September 2025 (housing delivery test at ~95% of standard threshold)",
      "note": "Council cannot currently demonstrate a five-year supply, increasing appeal/tilted-balance risk on sustainable sites, including some Green Belt-edge locations identified for release in the Local Plan."
    },
    "settlementHierarchy": "Maidenhead is the principal strategic growth location (including major town-centre regeneration), with Windsor as a second key town of national/heritage significance; villages such as Ascot, Cookham, Sunningdale, Datchet and Horton form a lower tier within the extensive Green Belt.",
    "keyPolicyThemes": [
      "Very high Green Belt coverage (~83%) — most greenfield opportunities require Green Belt release/exceptional circumstances",
      "Maidenhead identified as the main strategic growth and regeneration location, including neighbourhood plan activity (Maidenhead Neighbourhood Plan 2026-2039)",
      "Windsor's heritage/tourism status (Windsor Castle setting) drives strong heritage and townscape protection policies",
      "Below 5-year housing land supply increases tilted-balance appeal risk on both Green Belt-edge and non-Green Belt sites",
      "Thames-side flood risk management is a recurring theme for riverside sites in Windsor, Maidenhead, Cookham and Datchet"
    ],
    "constraints": [
      "Green Belt — approximately 83% of the borough",
      "River Thames flood risk corridor (Windsor, Maidenhead, Cookham, Datchet, Horton)",
      "Heritage assets including Windsor Castle and Windsor town conservation areas",
      "Heathrow Airport flight path/noise considerations affecting the borough's eastern edge (Horton/Datchet area)"
    ],
    "sourceLinks": [
      {
        "title": "RBWM - Adopted local plan",
        "url": "https://www.rbwm.gov.uk/home/planning-and-building-control/planning-policy/development-plan/adopted-local-plan"
      },
      {
        "title": "RBWM - Full Council votes to adopt Borough Local Plan",
        "url": "https://www.rbwm.gov.uk/news/full-council-votes-adopt-borough-local-plan-supporting-sustainable-development-until-2033"
      },
      {
        "title": "RBWM Local Development Scheme, Feb 2025",
        "url": "https://rbwm.moderngov.co.uk/documents/s65191/Appendix%20B%20-%20LDS%20Feb%202025.pdf"
      },
      {
        "title": "Maidenhead Neighbourhood Plan vote (2026)",
        "url": "https://rbwm.gov.uk/news/2026/residents-offered-opportunity-vote-plan-shape-maidenhead"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  },
  {
    "id": "wokingham-borough-council",
    "name": "Wokingham Borough Council",
    "county": "Berkshire",
    "type": "Unitary",
    "localPlan": {
      "status": "Emerging",
      "planName": "Wokingham Borough Local Plan Update 2023-2040 (replacing the existing Managing Development Delivery Local Plan / Core Strategy)",
      "adoptedOrExpected": "Submitted for examination 28 February 2025; Part 1 hearings November 2025 and Part 2 hearings March-June 2026; Inspectors indicated in an August 2026 post-hearings letter that the plan is likely sound subject to modifications — adoption expected after a further modifications consultation, likely late 2026/2027",
      "planPeriodEnd": "2040",
      "link": "https://www.wokingham.gov.uk/planning-policy-and-developer-contributions/emerging-local-plan-update"
    },
    "greenBelt": {
      "extent": "Partial",
      "note": "The northern part of the borough falls within the Metropolitan Green Belt (helping separate the borough from Greater London/Bracknell), while central and southern Wokingham (including Wokingham town, Woodley and Winnersh) sits outside it — verify exact extent with council."
    },
    "housingLandSupply": {
      "status": "Below 5-year supply (~2.5 years)",
      "asOf": "Five Year Housing Land Supply Statement at 31 March 2025 (published August 2025)",
      "note": "Council cannot demonstrate a five-year supply against Local Housing Need of 1,316 dwellings/year, so the NPPF paragraph 11 tilted balance/presumption in favour of sustainable development applies to qualifying applications."
    },
    "settlementHierarchy": "Wokingham town is the principal settlement, with Woodley, Winnersh and Wokingham Without/Shinfield growth areas forming the next tier of significant development locations; northern villages sit within the Green Belt with more restrictive policy.",
    "keyPolicyThemes": [
      "Emerging Local Plan Update (2023-2040) close to being found sound, with Inspectors confirming no additional housing allocations are required",
      "Below 5-year housing land supply (~2.5 years) currently drives strong presumption-in-favour risk for developers",
      "Strategic Development Locations (e.g. South Wokingham, Arborfield Green, Shinfield) already delivering large-scale allocations from the current plan",
      "Part of the borough within the Metropolitan Green Belt limits growth options to the north",
      "Infrastructure-led growth approach (schools, roads) tied closely to large strategic sites"
    ],
    "constraints": [
      "Metropolitan Green Belt in the north of the borough",
      "Proximity to North Wessex Downs and Chilterns National Landscapes (AONB) influences landscape character though core AONB area itself is limited",
      "River Loddon and Blackwater Valley flood risk and SSSI/wetland habitats",
      "Thames Basin Heaths SPA-related mitigation requirements in southern parts of the borough"
    ],
    "sourceLinks": [
      {
        "title": "Wokingham - Emerging Local Plan Update",
        "url": "https://www.wokingham.gov.uk/planning-policy-and-developer-contributions/emerging-local-plan-update"
      },
      {
        "title": "Wokingham Local Plan Update Examination",
        "url": "https://www.localplanservices.co.uk/wokinghamlpexamination"
      },
      {
        "title": "Wokingham Borough Five Year Housing Land Supply Statement at 31 March 2025",
        "url": "https://www.wokingham.gov.uk/sites/wokingham/files/2025-08/2025%205YHLSS%20v%20Final%20August.pdf"
      },
      {
        "title": "Wokingham Borough Council's Local Plan on track for approval",
        "url": "https://ukpropertyforums.com/wokingham-borough-councils-local-plan-on-track-for-approval/"
      }
    ],
    "lastVerified": "2026-09",
    "caveat": "Planning policy positions change frequently — always verify against the council's current adopted Local Plan and latest housing land supply statement before relying on this for a live decision."
  }
];

// Matches a local-authority-district entity name (from planning.data.gov.uk) to a
// curated profile above. Names differ slightly between sources (e.g. "Royal Borough
// of Windsor and Maidenhead" vs "Windsor and Maidenhead"), so this compares
// normalised, punctuation-stripped strings and checks for a partial match.
function normalise(str) {
  return (str || '')
    .toLowerCase()
    .replace(/royal borough of/g, '')
    .replace(/city of|borough of|district of/g, '')
    .replace(/[^a-z]/g, '');
}

export function findLocalAuthorityProfile(name) {
  if (!name) return null;
  const target = normalise(name);
  return (
    LOCAL_AUTHORITIES.find((la) => normalise(la.name) === target) ||
    LOCAL_AUTHORITIES.find((la) => normalise(la.name).includes(target) || target.includes(normalise(la.name))) ||
    null
  );
}
