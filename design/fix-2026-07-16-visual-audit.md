# Fix Report — 2026-07-16 visual re-audit follow-up

Source: rendered re-audit at 4becc80 (evidence: route smoke, DOM line counts, contrast scan, full-page captures at 390/768/1024/1440/1920). Modes per workflow: V1–V4 System-safe corrections (execution defects against frozen contract; no direction change), V5 Small visual fix (single section, no shared token).

## V1 — /cases/ PageHero line plan violated §9 (System-safe correction)

- **Defect**: planned lines themselves were non-semantic — mobile plan was 4 lines (budget ≤3 @390); desktop plan split オフィスビル mid-word and opened a line with particle から (3 lines @≥1024, budget ≤2).
- **Fix**: new semantic plans — mobile 東京都心のオフィスビル / 取得を、ODI備案から / 権利登記まで。; desktop 東京都心のオフィスビル取得を、 / ODI備案から権利登記まで。 New `PageHero longTitle` prop widens the desktop measure (14em → none; explicit plans control measure) and lowers the mobile clamp floor 2.35rem → 1.85rem (same floor F1 set for the home hero).
- **Usage scope**: `longTitle` opt-in; only /cases/ uses it. Other 7 PageHero pages verified unchanged (line counts identical).
- **Rendered**: 3L @390, 2L @768/1024/1440, no overflow. `fix_cases_390/768/1024/1440` captures.

## V2 — display h2 mid-word wraps on long-form pages (System-safe correction)

- **Defect**: /cases/ h2s broke 三つ・押さえ・登記・一社 mid-word at 390+1440; /market-entry/ broke 運営まで. Narrow-column display headings had no JP wrap plan (grammar §3 requires planned semantic wraps).
- **Fix**: `SectionHeading titleUnits` prop (inline-block semantic units, same idiom as the home hero). Applied to the 4 cases headings + 1 market-entry heading.
- **Usage scope**: opt-in prop; unaffected headings render exactly as before.
- **Rendered**: all five headings now break only at unit boundaries at 390/768/1024/1440. Captures as above + `fix_market-entry_390/1440`.

## V3 — small accent text on light fields below AA (System-safe correction)

- **Defect**: /cases/ timeline dates and highlight indices used Accent `#0e8fa8` at 14px on light fields — 3.61 / 3.45, below AA 4.5. Accent deep `#0b7488` was registered (F3) exactly for this role.
- **Fix**: `text-accent` → `text-accent-600` at both usage sites. No token value changed; usage now matches the token's registered role.
- **Rendered**: dates measure 5.14 on paper-2. ByTheNumbers (the other accent-600 consumer) untouched.

## V4 — 36px index numerals at 1.38 contrast (System-safe correction, judgment noted)

- **Defect**: /cases/ solution numerals and /market-entry/ step numerals in Mist `#c4e0e8` on white — 1.38, below even the 3.0 large-text threshold; they carry the section's ordering.
- **Fix**: `text-mist` → `text-accent` (≈3.65 on white, passes large-text AA; grammar assigns accent to active structure — consistent with the services selector numerals). Hover state deepened accent → accent-600 so the existing hover feedback survives.
- **Note**: alternative (keep mist, mark decorative) rejected because the numbers are the only ordering cue. Revisit if the owner prefers the watermark look.

## V5 — /company/ locations band read as a dead tab bar (Small visual fix)

- **Defect**: six inert city labels framed in a full-width border-y band (tab-bar affordance) + stray empty hairline band before the 3 office cards.
- **Fix**: city list restyled as a quiet inline slate list (no border frame); offices grid keeps its single top hairline. Adjacent joins (沿革 above, partners below) verified at 390/1440. `fix_company_390/1440`.

## Verification summary

- Rebuild + eslint clean. Route smoke re-run on all changed routes: no console errors, no horizontal overflow.
- Layout families re-verified mobile+desktop: PageHero long-form (cases, market-entry, company), unaffected PageHero pages spot-checked (services, contact @390).
- h1 line budgets now pass on all 9 routes at 390 and 1440.
