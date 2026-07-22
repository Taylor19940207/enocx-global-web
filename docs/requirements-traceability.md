# EnocX Requirement Traceability Matrix

Status: Frontend implementation matrix  
Updated: 2026-07-23

## Status vocabulary

- **Direction**: project-owner instruction controlling design work.
- **Implemented**: present in the frontend implementation.
- **Rendered pass**: implemented and inspected in the rendered coverage matrix.
- **Deferred**: explicitly paused by the project owner; no design action is taken.
- **External input**: supplied content or system behavior that the design workflow preserves but does not adjudicate.

## Matrix

| ID | Requirement | Source | Priority | Current implementation | Status | Required response | Implementation surface | Verification evidence |
|---|---|---|---|---|---|---|---|---|
| BR-01 | Client brief controls design decisions | Project-owner feedback | P0 | Brief, storyboard, and matrix exist | Direction | Maintain these as frontend design authority | Project docs | Cross-document review |
| SCOPE-01 | Design workflow does not make factual, legal, authorization, or backend decisions | Project-owner feedback | P0 | Scope boundary recorded in skill and project docs | Direction | Preserve supplied content and system behavior | All routes | Source and document audit |
| POS-01 | Japan-entry leads; bilateral context remains available | Supplied project content | P0 | Hero and Market Entry lead; About retains bilateral context | Implemented | Preserve current narrative unless copy is explicitly changed | Hero, About, Market Entry | Route review |
| CONV-01 | Consultation is the primary conversion | Current site and project direction | P0 | Contact CTA appears globally | Rendered pass | Keep one clear primary action | Header, Hero, CTA, Contact | Mobile/desktop journey review |
| CIS-01 | Use formal EnocX identity assets | Project-owner feedback | P0 | Formal Header/Footer logos restored | Rendered pass | Preserve scale, clear space, and contrast | Header, Footer, PageHero | Header-state screenshots |
| CIS-02 | Preserve meaningful CIS presence | Project-owner feedback | P0 | Accent structures, pale fields, route, and Global Hub form a brand-presence map | Rendered pass | Keep CIS anchors meaningful | Whole site | Section-level audit |
| VIS-01 | Preserve Hero cross-border route | Project-owner feedback | P1 | Implemented | Rendered pass | Retain as signature visual | Hero | Multi-viewport screenshots |
| VIS-02 | Preserve Global Hub network | Project-owner feedback | P1 | Full-bleed dark scene implemented | Rendered pass | Retain city labels and network bounds | WhyEnocX | Multi-viewport screenshots |
| VIS-03 | Avoid rejected generic decorative backgrounds | Project-owner feedback | P0 | No generic arcs render on active routes | Rendered pass | Use decoration only when it supports identity or hierarchy | Shared surfaces | Production route audit |
| VIS-04 | Reduce excessive cards without erasing structure | Project-owner feedback | P1 | Open grids and editorial ledgers replace repeated cards; form controls remain bounded | Rendered pass | Preserve bounded treatment only where functionally useful | All routes | Section-level audit |
| VIS-05 | Establish whole-page coherence without forcing a local motif across sections | Project-owner feedback | P0 | Shared grid, hierarchy, brand allocation, and section rhythm unify the page; Hero route and Global Hub remain content-specific scenes | Rendered pass | Do not promote an approved local effect into the site theme without client evidence | Homepage, Hero, WhyEnocX | 390/1440 whole-page bounds and Services-to-Numbers / People-to-Global-Hub transition screenshots |
| GEO-01 | Validate whole-page geometry before polish | Project-owner feedback and workflow | P0 | Coverage matrix covers homepage and internal routes | Rendered pass | Repeat changed cells after layout edits | Whole site | `docs/qa-coverage-matrix.md` |
| TYPE-01 | Japanese headings wrap semantically | Project-owner screenshots and feedback | P0 | PageHero and major homepage headings use breakpoint-specific line plans | Rendered pass | Recheck after copy changes | Hero, PageHero, WhyEnocX, Services | Cropped screenshots and bounds |
| SERV-01 | Present four core services | Supplied content | P0 | Implemented | Rendered pass | Preserve complete service structure | Services component and route | Initial/selected/mobile states |
| SERV-02 | Present six extended services | Supplied content | P1 | Implemented on Services route | Rendered pass | Preserve responsive grid readability | Services route | 390/1440 route review |
| ADV-01 | Present four core advantages | Supplied content | P1 | Implemented inside Global Hub | Rendered pass | Preserve relationship to network scene | WhyEnocX | Section screenshots |
| TRUST-01 | Homepage trust/proof placement | Earlier design review | P1 | Proof and compact Hero stats are paused; full Numbers remains | Deferred | Do not change until project owner resumes this decision | Homepage | Deferred by explicit instruction |
| DATA-01 | Preserve complete supplied outcome figures | Supplied project content | P0 | Full ByTheNumbers band restored between Services and People | Rendered pass | Keep four primary and three supporting metrics | ByTheNumbers, Homepage | Six viewport families, no overflow |
| CASE-01 | Preserve supplied case route and improve long-form readability | Supplied project content | P0 | Case route remains; long timeline uses desktop split/sticky layout | Rendered pass | Preserve content and responsive sequence | Cases route | 390/1440 section review |
| PEOPLE-01 | Preserve supplied team roster and photos | Supplied project content | P0 | Full roster remains; missing portrait uses branded profile field | Rendered pass | Support variable biography length | People component and route | 390/1440 image and text review |
| COMPANY-01 | Preserve supplied company, office, history, partner, and client information | Supplied project content | P0 | All surfaces remain; history uses balanced editorial split | Rendered pass | Keep partner content after identity/history/presence | Company, Footer, Contact | Route and section review |
| BRAND-01 | Present promise, worldview, philosophy, and value | Supplied brand material | P1 | Implemented on About | Rendered pass | Maintain editorial hierarchy | About route | Middle/lower section screenshots |
| LANG-01 | Current interface language is Japanese | Current project implementation | P2 | Japanese routes and labels remain | External input | Do not invent additional language routes | Routing and Header | Route inventory |
| A11Y-01 | Meet focus, contrast, touch, and reduced-motion presentation requirements | Workflow | P0 | Frontend states and fallbacks implemented | Rendered pass | Recheck affected components after changes | Shared interactions | QA matrix |
| QA-01 | Cover route x viewport x state x region | Updated workflow and prior QA failure | P0 | Homepage six-width matrix and internal route mobile/desktop regression completed | Rendered pass | Keep evidence section-specific | All changed surfaces | `docs/qa-coverage-matrix.md` |
| MOTION-01 | Prototype a continuous scroll-linked handoff from Hero through Services into Numbers | Project-owner instruction, 2026-07-23 | P0 | Hero route hands off into a pinned four-service progression and staggered Numbers reveal; mobile keeps the accordion with a lighter route treatment; reduced-motion CSS removes pinning and transforms | Implemented | Preserve brand/content/IA and keep the effect limited to this homepage sequence until owner review | Hero, Services, ByTheNumbers, Homepage | In-app browser review at 390×844 and 1440×900; zero horizontal overflow and no runtime warnings; reduced-motion source audit; lint and production build pass |

## Current design acceptance status

Design acceptance covers visual direction, information hierarchy, layout, responsive behavior, frontend interaction presentation, accessibility, and rendered QA. Content authorization, factual verification, and backend delivery are external handoffs rather than design blockers.

The current visual implementation and geometry pass are complete. Later project-owner changes to copy, assets, or business inputs require only the affected frontend cells to be rerun.

## Next update rule

Every implementation change must update its row with:

1. Exact file or component.
2. Current status.
3. Screenshot or DOM evidence reference.
4. Adjacent viewport or repeated-pattern regression check.
