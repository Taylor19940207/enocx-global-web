# EnocX Design Contract

Adopted mid-flight from existing governing documents. This file is the frozen design authority; the referenced documents remain the detailed sources. Conflicts resolve to this contract plus its change notes.

## Freeze Record

| Field | Value |
|-------|-------|
| Freeze date | 2026-07-16 |
| Contract version | 1.0 (adoption freeze) |
| Core premise (one sentence) | Organize multidisciplinary expertise into one precise, dependable support system — cross-border activity is business context, not the visual theme. |

## Canonical document map

| Contract concern | Canonical source |
|------------------|-----------------|
| Requirements + traceability (`REQ` = rows like POS-01, CIS-02) | `docs/requirements-traceability.md` |
| Client brief, audience, conversion | `docs/client-brief.md` |
| Page storyboards, brand-presence map, section rhythm | `docs/site-storyboard.md` |
| Tokens, CIS provenance, layout numbers | `brand-spec.md` (as amended by change notes below) |
| Rendered QA coverage | `docs/qa-coverage-matrix.md` |
| Adoption-freeze rendered evidence | `design/audit-2026-07-16.md` |

## 1. Client, Audience, and Goals

Per `docs/client-brief.md`: Japanese-language business-development site for Japan-entry decision makers; primary conversion is qualified consultation via `/contact`. Bilateral (two-way) positioning is provisional (POS secondary audience).

## 2. Core Design Premise

As in the Freeze Record; evidence: brand-spec "Core design premise" line, derived from supplied brand material and project-owner feedback (BR-01). Aesthetic: restrained Swiss corporate editorial with Japanese spacing discipline.

## 3. Design-Grammar Matrix

| Dimension | How it expresses the premise | Content-driven exceptions |
|-----------|------------------------------|---------------------------|
| Layout | 1320px frame, open editorial structures, hairline borders; no card inflation | Bounded form controls |
| Typography | Noto Sans JP display with planned semantic wraps; Inter for Latin/numerals only, never display | — |
| Color | Ink/slate text, paper fields, accent as active structure and data emphasis, mist for pale fields | Dark scenes (Hero, Global Hub) |
| Imagery | Real media: city/bridge hero footage, expert photography, partner logos; no stock decoration | — |
| Geometry | Square structural edges; 8px input radius; pill buttons | — |
| Interaction | Active rails, selector/detail pattern, understated hover; visible focus | — |
| Motion | Reveal-on-scroll, count-up, marquee; full `prefers-reduced-motion` support | Route/network scene animation (content-semantic) |

## 4. Page-Relationship Map

Canonical: `docs/site-storyboard.md` §3–4. Homepage rhythm: dark focal Hero → light Services (active CIS structure) → pale Numbers band → white People → dark Global Hub climax → mist CTA. Coherence comes from shared grid, hierarchy, CIS allocation, and rhythm — no continuous decorative object across sections.

## 5. Typography

Roles and line plans per storyboard. Heading line plans are mandatory per breakpoint for h1/PageHero (see §9). Reading measure 680–720px.

## 6. Brand and Color

Tokens: Ink `#14181a`, Slate `#58656b`, Accent `#0e8fa8`, Mist `#c4e0e8`, Paper `#ffffff`, Paper-2 `#f7f9fa`. Data-emphasis teal `#0b7488` is registered as **Accent deep** (contrast-adjusted accent for small text on light fields; F3 resolution 2026-07-16). CIS provenance and presence rules: `brand-spec.md` §CIS. Brand-presence map per storyboard §"brand expression" table; no more than two consecutive neutral light sections without a meaningful CIS anchor.

## 7. Layout System

Container 1320px; gutters 40px desktop / 24px mobile; **section spacing 96px desktop / 72px mobile (change note 1)**; square structural edges; layout families: full-bleed media hero, editorial split selector/detail, open bordered metric band, photo-led grid, full-bleed dark signature scene, split/sticky long-form, form.

## 8. Target-Viewport Geometry

QA viewports: 390, 768, 1024, 1440, 1920 (+2560 when plausible). Hero: full viewport, copy left, route right; route simplified/hidden on mobile if it competes. Global Hub: full-bleed dark; network right, text block left; city labels stay in bounds. Light sections: full-width background fields with centered 1320px frame — no content islands at wide viewports.

## 9. Hard Budgets and Constraints

| Budget | Value |
|--------|-------|
| Site-level signature effects | 0 — coherence via composition; Hero route and Global Hub network are section-scoped content-semantic scenes, not the site theme |
| Max distinct motion behaviors per page | Shared behaviors: 5 (enter-stagger, reveal, count-up, selection feedback, page transition). Content-semantic scene animations: 2 (Hero route, Global Hub network — each may include a scene-scoped depth/draw treatment). Marquee: route-scoped (company/partners). No further behavior classes without a change note. |
| Max decorative (non-content) elements per section | 1 |
| Card usage whitelist | Form controls and genuinely bounded interactive states only |
| Dominant visual minimum share | Hero media: full viewport at all widths; Global Hub network: ≥40% of section width at ≥1024px |
| Max heading lines (h1 / PageHero) | 2 at ≥1024px; 3 at 390px, semantically broken (no particle-initial lines) |

## 10. Responsive Behavior

Per storyboard mobile-behavior column: copy-first hero, stacked service summaries, single/two-column metrics, one-to-two-column people grid, text-then-network Global Hub.

## 11. Trust and Evidence Placement

Numbers band (4 primary + 3 supporting, DATA-01) after Services; team credentials (People) before Global Hub; partner/client logos after identity/history (COMPANY-01). Proof section paused per TRUST-01 (Deferred — do not change without owner).

## 12. Effect Hierarchy

- Site-level signature: none.
- Shared vocabulary: reveal, hairline borders, accent active rails (desktop selector rail slides between selections — selection-relationship feedback), eyebrow labels.
- Content-semantic exceptions: Hero route (geographic movement; draws in once on load — the corridor forms, then flow begins), Global Hub network (geographic presence; pointer-driven depth on fine pointers), Market Entry process lines, Cases timeline (real sequence). Scene treatments stay inside their sections and degrade fully under reduced motion.
- Explicit rejections: generic decorative arcs (VIS-03), card inflation (VIS-04), fake progress bars/decorative charts, tinted portraits, generic black CTA without brand context.

## 13. Persistent Cross-Section Device

None. Coherence mechanism: shared editorial grid, alignment handoffs, information hierarchy, CIS color allocation, focal-to-quiet rhythm (storyboard §4).

## 14. Decision Ledger

- **Preserve**: Hero route, Global Hub network, full Numbers band, supplied content surfaces, formal identity assets.
- **Deferred**: TRUST-01 homepage proof placement.
- **Forbidden**: items in §12 rejections; promoting a local scene to site theme without client evidence.
- **Reconfirm**: bilateral positioning (provisional secondary audience).

## 15. Input Inventory

- **Fixed**: CIS assets and tokens (`brand-spec.md`), supplied business content, Japanese interface language (LANG-01).
- **Provisional**: bilateral positioning.
- **External** (not design-adjudicated): factual/legal/authorization status of supplied content, backend behavior (SCOPE-01).

## Open Execution Defects

None.

- **F1 — fixed 2026-07-16.** Hero title now carries semantic wrap units in `src/lib/content.ts` (line breaks only between units); mobile clamp floor 1.85rem. Rendered: 2 lines at 390/768/1440, no particle-initial break, no overflow. Evidence: DOM line counts + `fix_hero_390` capture.
- **V1–V5 — fixed 2026-07-16** (rendered re-audit follow-up; see `design/fix-2026-07-16-visual-audit.md`): /cases/ PageHero line plan rewritten to semantic units within §9 budgets; display h2 wrap units added on cases/market-entry; small accent text on light fields moved to Accent deep; index numerals mist → accent (large-text AA); /company/ locations band de-tab-barred. No frozen value changed; no direction change.
- **F3 — fixed 2026-07-16.** `#0b7488` registered as **Accent deep** in `brand-spec.md` tokens (contrast-adjusted accent for small text on light fields; already `--color-accent-600` in CSS). Numbers band field changed `bg-paper-2` → `bg-mist-soft`, fulfilling the storyboard's brand-supporting role; consecutive-neutral run resolved (only People remains intentionally neutral). Evidence: rendered bg `#eef5f7`, unit colors ink + accent-600, full-page 390/1440 captures.

## Change Notes

1. **2026-07-16 — Desktop section spacing 112px → 96px.** Evidence: rendered site uses 96px on every homepage section and passed prior visual review rounds; mobile 72px matches spec exactly. Owner decision 2026-07-16: rendered reality is canonical. `brand-spec.md` amended to match. Whole-page impact: none (documents existing appearance).
2. **2026-07-16 — §9 motion budget taxonomy corrected; scene deepening approved.** The adoption freeze's "5 behaviors" list did not match the already-approved homepage inventory (two scenes, enter-stagger, selection feedback; no marquee on home). Budget rewritten as shared-5 + scenes-2. Owner-approved additions, each verified rendered with full reduced-motion degradation: Hero route draw-in on load (scene 1, progression), Global Hub pointer depth on fine pointers (scene 2, presence), sliding selection rail (deepens existing selection feedback; no new behavior class). Also fixed: SMIL route signals now hidden under reduced motion (pre-existing gap). Whole-page impact: motion remains section-scoped; no cross-section device introduced.
3. **2026-07-23 — Homepage scroll-story prototype exception approved by the project owner.** For the `Hero → Services → Numbers` prototype only, §9's site-level signature-effect and motion-class limits are suspended. The Hero route may hand off into the Services selection rail and Numbers structure; Services may use pinned, scroll-linked progression; Numbers may use scroll-linked depth. The approved premise is **Precision in Motion**: preserve EnocX identity, content, IA, typography, and conversion hierarchy while testing one continuous movement grammar across adjacent sections. This is an owner-authorized directional experiment, not silent contract drift. It must retain keyboard controls, touch fallbacks, and a fully static `prefers-reduced-motion` presentation. Whole-page impact review is required before extending the grammar past Numbers or to other routes.
4. **2026-08-27 — `/cases` split into an index plus per-case detail routes.** Evidence: the client supplied six further engagements and the project owner instructed that the route scale to hold them; until now the single case *was* the route, with its section headings, line plans and metadata hardcoded in `src/app/cases/page.tsx`. `/cases` now lists cases as open editorial rows — hairline rules, eyebrow / title / lead / metric column, deliberately **not** cards (§9 card whitelist) — and each case renders at `/cases/[slug]`. Storyboard §5's five-beat sequence is kept as the detail template, but every beat below the client identity block is optional, so a thinner case drops the beat instead of rendering an empty frame; the paper / paper-2 alternation is counted over the beats a case actually carries. Metric, challenge, solution and result counts now have fixed layouts for 1-4 items rather than the hardcoded 3/3/2. No new motion behaviour (existing Reveal only), no new decorative element, no new layout family, no token change. Whole-page impact: the homepage rhythm is untouched — no case teaser was added, and the unused `CaseFeature` component was deleted rather than promoted. Old deep links to `/cases` now land on the index rather than the chemical case; static export supports no redirect.
