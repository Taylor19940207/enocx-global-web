# EnocX Website Client Brief

Status: Active frontend design brief  
Updated: 2026-07-16

## 1. Purpose

Rebuild the EnocX corporate website as a credible Japanese-language business-development surface for cross-border professional services. The site must explain what EnocX does, reduce perceived risk, demonstrate professional capability, and lead qualified visitors toward consultation.

This brief translates supplied project content and project-owner direction into frontend design requirements. It does not judge whether supplied business content is factually verified, legally approved, or authorized for publication.

## 2. Requirement sources

| Source | Authority | Use |
|---|---|---|
| Existing website referenced in `EnocX网站内容对比分析报告.md` | Historical | Baseline only; may be outdated |
| Chinese 2026 brand material referenced in the comparison report | Latest detailed content source | Primary provisional content source |
| Japanese two-page company material referenced in the comparison report | Supporting | Cross-check Japanese wording and summary facts |
| Project-owner feedback in the design review thread | High for design execution | Preserve, optimize, reject, and reconfirm decisions |
| `brand-spec.md` | Working contract | Valid only where it traces back to a source above |
| Current source code | Implementation evidence | Never treated as proof that a client fact is approved |

## 3. Audience and conversion

### Primary audience

- Chinese and overseas business owners, investors, and corporate decision makers evaluating Japan market entry.
- Companies needing coordinated legal, accounting, tax, real-estate, finance, operations, and market-entry support.

### Secondary audience

- Japanese organizations evaluating China or broader Asia collaboration. This audience is **provisional** because the source material conflicts on one-way versus two-way positioning.
- Potential partners and professional recruits.

### Primary conversion

- Qualified consultation inquiry through `/contact`.

### Supporting journeys

- Understand the four core services and six extended services.
- Verify professional team capability and geographic presence.
- Review supplied outcomes, cases, clients, and partners.
- Confirm company identity, history, and office information.

## 4. Confirmed project direction

These items are confirmed by the project owner for the current design process:

- The website must be evaluated against actual client requirements, not a reusable house style.
- Preserve the Hero cross-border route line as the primary signature decoration.
- Preserve the Global Hub network visual as the secondary signature scene.
- Remove or reconfirm generic background arcs and geometric decoration that may conflict with rejected client directions.
- Decorative technique is allowed when it has high visual quality and does not overwhelm content.
- Reduce excessive card-based presentation; use cards only for genuinely bounded entities.
- Do not solve emptiness by adding arbitrary glows, dots, progress bars, icons, or containers.
- Maintain meaningful EnocX CIS presence; reducing decoration must not erase brand recognition.
- Evaluate full-page composition, Japanese wrapping, section geometry, and wide-screen behavior before detail polish.
- A full partner-information section must not automatically occupy the post-Hero position. Trust evidence must be selected by credibility and audience relevance.

## 5. Supplied business and content requirements

| Area | Working direction | Status |
|---|---|---|
| Positioning | Global business hub and one-stop cross-border professional-services team | Supplied working direction |
| Direction | Japan market entry is the current primary conversion story | Supplied working direction; About retains bilateral context |
| Core services | Four core services | Supported by all compared sources |
| Extended services | Legal, asset/finance, medical/tourism, logistics, education, ecommerce | Supported by detailed brand material |
| Core advantages | Value, multilingual flexibility, real-time cross-border response, multidisciplinary resources | Supported by detailed brand material |
| Brand worldview | Business cooperation plus cultural exchange across Asia | Supported, wording still requires Japanese editorial approval |
| Professional team | Credential-led multidisciplinary team | Supplied roster and biographies |
| Global presence | Six-city network | Supplied city, entity, and address data |
| Consultation | Low-friction inquiry path | Supported by business model; exact response promise not supplied |

## 6. External project inputs

The items below belong to content, business, legal, or system owners. They may affect supplied copy or assets, but they do not block design acceptance and are not adjudicated by the website-design workflow.

| ID | External owner question | Design-workflow handling |
|---|---|---|
| C-01 | Is positioning China-to-Japan only, or bilateral China-Japan? | Preserve supplied positioning and maintain a layout that can absorb copy revision |
| C-02 | Official CIS manual and approved color values | Use supplied formal Logo assets and the current working palette consistently |
| C-03 | Current Shanghai office address | Preserve supplied address content and ensure long-address wrapping works |
| C-04 | Latest enterprise-formation and managed-company figures | Preserve and present all supplied `ByTheNumbers` metrics |
| C-05 | Complete group-company structure and responsibilities | Preserve supplied structure and support variable list length |
| C-06 | Current team roster, roles, biographies, and photos | Preserve supplied roster and validate short and long biography layouts |
| C-07 | Client and partner names and Logo publication rights | Preserve supplied Logo and name surfaces with legible responsive presentation |
| C-08 | ODI case facts, figures, and anonymity wording | Preserve the supplied case route and support long-form editorial content |
| C-09 | Whether the public website needs Chinese or English versions | Keep the current Japanese interface structurally ready for later copy changes |

## 7. Brand and visual constraints

- Use formal EnocX Logo assets from `/public/media/top-logo.png` and `/public/media/ft-logo.png`.
- The current `#0e8fa8` accent is the project working accent derived from the supplied identity assets.
- Route and Global Hub are the only approved continuous signature-visual families.
- Approval of a visual inside one scene does not make it the whole-site theme. Keep the Hero route tied to geographic movement and the Global Hub tied to geographic presence unless stronger client evidence supports broader use.
- Brand color must appear through meaningful fields, active structures, data emphasis, or signature scenes rather than scattered decoration.
- Page rhythm must alternate focal and quiet sections intentionally; multiple consecutive white-grey sections require explicit justification.
- Japanese display copy requires intentional semantic line planning at each breakpoint.
- Wide desktop must not collapse into a small centered content island.

## 8. Workflow scope boundary

- The design workflow owns information hierarchy, visual direction, brand expression, typography, layout, responsive behavior, frontend interaction presentation, accessibility, and rendered QA.
- It does not own factual verification, publication authorization, legal review, or backend systems.
- Supplied pages, copy, logos, routes, and form behavior remain in place unless the project owner explicitly requests a change.
- External inputs may be recorded as handoffs when they affect visible layout, but they are not failed design acceptance.

## 9. Approval definition

This frontend brief is complete when:

1. The project owner signs off the design interpretation.
2. Every high-priority design requirement links to an implementation surface and rendered QA evidence in `requirements-traceability.md`.
3. External content and system ownership remains outside the design acceptance decision.
