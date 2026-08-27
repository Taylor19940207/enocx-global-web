# EnocX QA Coverage Matrix

Status: Rendered design geometry gate complete  
Updated: 2026-07-16

## Evidence rules

- **Pass** requires an actual rendered viewport, settled fonts/images/reveals, a useful screenshot, and DOM measurements where the claim concerns bounds or dimensions.
- **Fail** requires visible or measured evidence and an issue reference.
- **Blocked** means the required browser surface is unavailable or required client content is unresolved.
- **Unverified** cannot be converted to Pass through source inspection, lint, TypeScript, or build success.

## Current environment

| Check | Result |
|---|---|
| `npm run lint` | Pass |
| `npm run build` | Pass; 12 static pages generated |
| `git diff --check` | Pass |
| Local rendered browser | Pass; in-app browser at `http://localhost:3000` |
| CSS viewport width/height | 390×844, 768×1024, 1024×900, 1440×900, 1920×1080, 2560×1200 |
| Device pixel ratio | 1 |
| Browser zoom | 100% application viewport |

## Homepage low-detail geometry gate

Every cell below requires a full-page overview plus cropped section inspection. `P` means Pass and `N/A` means the surface is not part of the current homepage composition.

| Region / state | 390 | 768 | 1024 | 1440 | 1920 | 2560 | Required evidence |
|---|---:|---:|---:|---:|---:|---:|---|
| Full-page rhythm, default | P | P | P | P | P | P | Full section sequence after all reveals settle |
| Header at Hero top | P | P | P | P | P | P | Logo scale, nav/menu, contrast, bounds |
| Header scrolled/solid | P | P | P | P | P | P | Formal Logo, border, CTA, active state |
| Hero copy, CTA, and route motion | P | P | P | P | P | P | Semantic wraps, fold occupancy, staged entrance, desktop route signals, mobile static route fallback |
| Services initial state | P | P | P | P | P | P | First item, detail alignment, section span |
| Services longest/selected state | P | P | P | P | P | P | Last and longest item, active rail, wrapping |
| Services mobile expanded state | P | P | N/A | N/A | N/A | N/A | Open/closed rows and touch targets |
| By the Numbers | P | P | P | P | P | P | Four primary and three supporting metrics, count-up completion, unit alignment, grid collapse |
| Compact Trust Strip | N/A | N/A | N/A | N/A | N/A | N/A | Not part of the approved homepage composition |
| Featured Case | N/A | N/A | N/A | N/A | N/A | N/A | Available as a dedicated route, not a homepage section |
| People grid | P | P | P | P | P | P | First/middle/last portrait, bio length, grid span |
| Global Hub | P | P | P | P | P | P | Text line plan, network scale, radar sweep, hub rings, all city signals and labels |
| CTA | P | P | P | P | P | P | Brand field, CTA hierarchy, heading wraps |
| Footer transition | P | P | P | P | P | P | Logo, transition from CTA, content density |

## Known visual evidence

| Evidence | Matrix cell | Result | Follow-up |
|---|---|---|---|
| `/var/folders/6s/4g9mn_z904jc08xv1mxhqhb40000gn/T/TemporaryItems/NSIRD_screencaptureui_OVloMF/截圖 2026-07-15 23.29.02.png` | Previous Global Hub, wide physical screenshot | Fail | Layout was replaced by a full-bleed dark scene; exact effective CSS viewport must be measured and the same cell repeated |
| Earlier Services screenshots supplied by the project owner | Services desktop rows/grid | Fail | Text and border clearance were corrected in source; repeat exact region and adjacent breakpoint |

## Interaction and accessibility state coverage

| Surface | States |
|---|---|
| Header | Pass: top, scrolled, active route, mobile open and close |
| Services | Pass: initial, longest selected item, mobile expanded and collapsed |
| Contact form | Pass for visual layout at 390 and 1440; backend delivery is outside design scope |
| Motion | Pass: Hero staged entrance and route signals, metric count-up, Global Hub radar and city signal sequence; reduced-motion media rules disable automatic motion and expose final static content |
| Links and buttons | Pass for visible focus, selected, expanded, and primary CTA states sampled during route QA |

## Internal route section coverage

Each route was inspected at the page Hero and at representative middle, repeated, long-form, and closing regions after reveal motion settled. `P` means rendered Pass.

| Route | 390 | 768 | 1440 | 1920 | Regions and states inspected |
|---|---:|---:|---:|---:|---|
| `/about` | P | P | P | P | Promise, worldview, philosophy lists, value split, CTA |
| `/services` | P | P | P | P | Core service first/last selection, mobile accordion open/close, extended six-item grid, CTA |
| `/market-entry` | P | P | P | P | Four-step repeated grid, risk grid, CTA |
| `/cases` | P | P | P | P | Profile/metrics, challenges, solutions, long timeline, results, highlights, CTA |
| `/people` | P | P | P | P | First/middle/last profiles, supplied photography, branded missing-photo state, CTA |
| `/company` | P | P | P | P | Company data, history rail, six-city presence, offices, partner/client region, CTA |
| `/career` | P | P | P | P | First/middle/last job ledger, long duties, metadata wrapping, application contact |
| `/contact` | P | P | P | P | Form geometry, labels/controls, direct contact, offices, footer transition |

All eight internal Page Heroes were repeated after the shared route-motion pass at 390, 768, 1440, and 1920. The checks recorded zero horizontal overflow, zero broken images, no Next.js error overlay, desktop route visibility from 768 upward, and intentional semantic heading lines. Services, Career, and Contact were corrected and repeated at 390 after their original mobile line plans wrapped inside an explicitly declared line.

Changed content-motion regions were repeated after removing unrelated local effects. The People route was repeated at 390 and 1440 after removing the portrait mask; Career was repeated at both sizes after removing its decorative row rail. Market Entry process rails and the Cases timeline remain because they communicate real sequence. Whole-page coherence is judged through grid, hierarchy, brand allocation, focal-to-quiet rhythm, and section transitions rather than a forced continuous route.

Post-fix route measurements at 390, 768, 1440, and 1920 reported zero horizontal overflow, zero broken images, zero clipped text nodes, and no wrapped desktop navigation across all nine public routes including the homepage. The homepage also passed a 2560px composition check with every primary content frame occupying the intended 1320px width.

## Gate decision

The homepage design geometry gate passed after:

1. Six viewport families were rendered and measured without horizontal overflow.
2. Hero, Services, People, Global Hub, CTA, and Footer were captured as settled section-level evidence.
3. The failed Global Hub and Services cells were repeated after fixes.
4. Mobile navigation, Services selection, and mobile accordion states were exercised.
5. Eight internal routes were section-level regression-checked at 390 and 1440 with no overflow, broken images, or clipped text.
6. The Company and Cases timelines were repeated after their desktop editorial split was introduced.
7. The Career route was repeated after replacing large rounded cards with a flat job ledger.
8. The People route was repeated after the missing-photo state was replaced with a branded profile field.
9. Header and Footer targets were repeated after their minimum interactive height was raised to 44px; the mobile Footer menu was also checked in its two-column layout.
10. Trailing-slash routes were verified to expose the correct current-page state in desktop and mobile navigation.
11. The motion pass was rendered at 390, 768, 1440, and 1920; natural mobile scroll order was repeated to verify all seven metrics settle at their supplied values, and the only clipping scan hit was the intentional screen-reader-only Global Hub caption.
12. A proposed cross-section route was rejected after review because it promoted a Hero-specific geographic motif into the whole-site theme without client evidence. The page returned to compositional coherence through grid, hierarchy, brand allocation, and section rhythm.

## Cases routes — index and detail (2026-08-27)

Measured on the built static export (`out/`) in Chrome at DPR 1, reveals forced visible.

| Check | 390 | 768 | 1024 | 1440 | 1920 | Evidence |
|---|---:|---:|---:|---:|---:|---|
| `/cases` h1 within §9 line budget | P (3) | P (2) | P (2) | P (2) | P (2) | Rendered line count of the visible title spans; no particle-initial line (実 / ど / 公) |
| `/cases` horizontal overflow | P | P | P | P | P | `scrollWidth - clientWidth = 0` |
| `/cases/[slug]` h1 within §9 line budget | P (3) | P (2) | P (2) | P (2) | P (2) | No particle-initial line (東 / 取 / 権) |
| `/cases/[slug]` horizontal overflow | P | P | P | P | P | `scrollWidth - clientWidth = 0` |
| Index row title wrapping | P | P | P | P | P | Row titles carry the case line plan as wrap units after a first pass broke a line on `を、` |
| Detail section alternation | — | — | — | P | — | ink → paper → paper-2 → paper → paper-2 → paper → mist (highlights) → mist (CTA), matching the pre-split page |
| Case content preserved | — | — | — | P | — | All 32 body strings in the case data present in the rendered page; the two absent strings are `<head>` metadata |
| `npm run lint` / `npm run build` | P | | | | | 13 static pages, `/cases/[slug]` prerendered via `generateStaticParams` |

### 2026-08-27 — four further cases added

Dreame Technology Japan (company formation), FJD Japan (licensing), Sigenergy Japan and Ulanzi Japan (HR & tax) added as named cases; The Loneliest and 宝蒂 excluded by owner decision. All five cases plus the index re-checked at 390/768/1024/1440/1920 — 30 cells, all pass: h1 within the §9 line budget with no particle-initial line, index row titles likewise, zero horizontal overflow. String completeness passes for all five cases (32 / 37 / 33 / 49 / 40 strings).

First rendered instances of the new cardinality layouts: 4-item challenges as 2x2 (Dreame), 3-item solutions as 2+1 (Dreame), 2-item metric band (FJD), 2-item challenges (Sigenergy), 4-node timeline (Sigenergy), and timeline entries whose label is a phase rather than a date (Dreame).

Reusable checks: `scripts/qa-case-routes.mjs` (line budget, overflow, section surfaces) and `scripts/qa-case-content.mjs` (string completeness). Both expect the built export served on `localhost:4321`.
