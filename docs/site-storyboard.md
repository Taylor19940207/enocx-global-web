# EnocX Whole-Site Storyboard

Status: Implemented frontend composition contract  
Updated: 2026-07-16

Implementation note: the current homepage preserves the complete supplied `ByTheNumbers` content and follows a service-to-results-to-team sequence. Content, facts, logos, routes, and form behavior are treated as supplied project inputs; this document governs their visual hierarchy and frontend presentation only.

## 1. Whole-site narrative

The site should move from **orientation → capability → evidence → people → cross-border advantage → consultation**. It should not begin with internal company relationships before visitors understand the service value.

The visual system is editorial and professional, but not generic monochrome. EnocX identity appears through the formal Logo, blue-family CIS anchors, the cross-border route, the Global Hub scene, active service structures, and supplied outcome emphasis.

## 2. Homepage storyboard

| Order | Section | Job | Layout family | Theme and CIS role | Density | Desktop geometry | Mobile behavior | Content gate |
|---|---|---|---|---|---|---|---|---|
| 1 | Hero | State positioning, audience outcome, and primary consultation CTA | Full-bleed media Hero | Dark; brand-dominant through formal Logo, route, mist/blue highlights | Focused | Full viewport; copy left, route right; one dominant headline | Copy first; route simplified or hidden if it competes | POS-01 |
| 2 | Core Services | Explain the four primary ways EnocX helps | Editorial split selector/detail | Light with meaningful CIS active structure | Medium | Service index left, selected detail right; fills the content frame | Stacked service summaries with visible hierarchy | SERV-01 |
| 3 | Quantified Outcomes | Demonstrate scale after visitors understand the offer | Open bordered metric band | Brand-supporting pale field | Compact | Four primary and three supporting outcomes spanning the frame | Single-column metrics on mobile, two-column at tablet, four-column primary grid on desktop | DATA-01 |
| 4 | People | Establish credential and human accountability | Photo-led editorial grid | White neutral field so portraits lead | Medium | Three core experts; direct link to full team | One or two columns depending width | PEOPLE-01 |
| 5 | Global Hub | Explain the distinctive cross-border operating model | Full-bleed signature scene | Dark; brand-dominant | Focal | Large network visual and deliberate text block | Text then network; city labels remain in bounds | ADV-01 and GEO-01 |
| 6 | CTA | Convert qualified interest | Open conversion band | Pale CIS field with high-contrast action | Focused | One message, one primary action, restrained secondary route | Full-width primary action with 44px target | CONV-01 |

### Content-preservation boundary

- Preserve supplied figures, names, logos, case material, and routes unless the project owner explicitly requests a content change.
- Solve hierarchy, density, wrapping, responsive presentation, and visual consistency without making factual, legal, authorization, publication, or backend judgments.
- Strategic Partner and client material is presented on Company because that position follows the current industry narrative: service value first, corporate relationships later.

## 3. Homepage brand-presence map

| Section | Role | Required brand expression | Avoid |
|---|---|---|---|
| Hero | Dominant | Formal light Logo, route line, approved blue-family details | Generic arcs, competing decoration |
| Services | Supporting | Active rail, selected number, focused line structure | Every row becoming a card |
| Outcomes | Supporting | Primary/secondary brand tones and clear metric hierarchy | Fake progress bars or decorative charts |
| People | Neutral | Small role/link accent only | Tinting portraits or decorative overlays |
| Global Hub | Dominant | Dark blue/ink field, network and city nodes | A small dark square floating in white space |
| CTA | Supporting or dominant | One decisive approved CIS conversion field | Generic black CTA repeated without brand context |

## 4. Page rhythm

The intended sequence is:

1. Dark focal Hero.
2. Light capability section with active CIS structure.
3. Pale quantified-outcome band.
4. White human section.
5. Dark Global Hub climax.
6. Clear pale-CIS conversion close.

No more than two consecutive neutral light sections should appear without a meaningful brand anchor or documented editorial reason.

### Whole-page coherence

The homepage is unified by a shared editorial grid, deliberate alignment handoffs, consistent information hierarchy, CIS color allocation, and a focal-to-quiet section rhythm. It does not require a continuous decorative object across sections.

The Hero route remains a local expression of geographic movement, while Global Hub remains a local expression of geographic presence. Numbers retain only their count-up behavior, People portraits reveal directly, and Career uses no decorative row rail. Market Entry process lines and the Cases timeline remain because they express real sequence rather than surface polish.

## 5. Route storyboards

### `/about`

1. Page Hero: brand positioning and orientation.
2. Promise: bilateral and Japan-entry promise.
3. Worldview: business and cultural exchange; one quiet editorial section.
4. Philosophy and value: structured commitments, not decorative cards.
5. CTA: consultation or Company route.

Brand role: supporting. Avoid turning every abstract brand statement into a separate boxed module.

### `/services`

1. Page Hero: one-stop capability.
2. Four core services: complete operational detail.
3. Six extended services: lower hierarchy than the core four.
4. CTA: consultation with service context.

Brand role: supporting through active navigation and service indices. Verify every selected and breakpoint-reset state.

### `/market-entry`

1. Page Hero: Japan-entry decision context.
2. Four-step process from strategy through operation.
3. Market-entry risks and EnocX response.
4. CTA.

Brand role: supporting through numbered process structure and restrained CIS accents.

### `/cases` (index)

1. Page Hero: what the route publishes and on what basis.
2. Case list: one open editorial row per case — ordinal marker, eyebrow (category), title, lead, and up to three metrics. Rows, not cards. The rule between two cases is the only horizontal rule in the section, so each entry reads as one block.
3. CTA.

Brand role: restrained and evidence-led. The row composition is the same editorial split used elsewhere; coherence comes from the shared rule work, not from a new device.

### `/cases/[slug]` (detail template)

1. Page Hero: result framing, with the category as eyebrow.
2. Client designation, publication basis, profile rows and the metric band.
3. Challenges.
4. Response.
5. Timeline.
6. Results.
7. Reusable highlights.
8. Case navigation: previous case, index, next case.
9. CTA.

Beats 2-6 are **skippable**: cases arrive at different depths, and a beat with no content is omitted rather than rendered empty. The paper / paper-2 alternation runs over the beats a case actually carries, so a short case still alternates correctly. Highlights always close on the mist field before the CTA.

Brand role: evidence-led and restrained. The long timeline uses a sticky editorial split on desktop and a single rail on mobile.

### `/people`

1. Page Hero: multidisciplinary accountability.
2. Complete supplied team roster.
3. CTA.

Brand role: neutral with small supporting accents. Photography and credentials are primary evidence; missing portraits use a branded profile field rather than a generic silhouette.

### `/company`

1. Page Hero: company identity.
2. Supplied company information.
3. History.
4. Six-city presence and offices.
5. Strategic Partners, clients, and business partners with clear category labels.
6. CTA.

Brand role: supporting. History uses an editorial split; partner and client material remains below company identity, history, and global presence.

### `/career`

1. Page Hero: reason to join.
2. Current open roles.
3. Conditions and responsibilities.
4. Application contact and privacy expectations.

Brand role: supporting. Roles use a flat editorial job ledger rather than repeated rounded cards.

### `/contact`

1. Page Hero: consultation expectations without invented response-time claims.
2. Form with clear labels and legible frontend controls.
3. Supplied office/contact information.

Brand role: supporting through focus and action states. Backend delivery and business-system behavior are outside this design contract.

## 6. Responsive geometry plan

| CSS viewport | Required judgment |
|---|---|
| 390 | Essential content order, semantic Japanese wraps, 44px targets, no clipped network labels |
| 768 | Tablet transitions, two-column resets, Logo and metric density |
| 1024 | Navigation change, service layout transition, content span |
| 1440 | Primary desktop composition and section rhythm |
| 1920 | Container occupancy, focal scale, intentional outer whitespace |
| 2560 | Content-island resistance, dominant visual size, browser-zoom scenario |

Record actual `innerWidth`, `innerHeight`, DPR, and zoom context with every evidence screenshot.

## 7. Implementation gate

Detailed implementation is complete only when:

1. The whole-site section order matches this contract.
2. Supplied content remains present unless an explicit project-owner change is recorded.
3. Homepage and every internal route pass section-level rendered review at mobile and desktop widths.
4. Changed interactive states and repeated layouts are inspected after fonts, images, and reveal motion settle.
