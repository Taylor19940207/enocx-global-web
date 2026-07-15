# EnocX Brand Specification

## Positioning

EnocX is a Japan-China cross-border professional services firm for business owners, investors, and corporate decision makers. The website should feel authoritative, international, calm, and operationally precise.

## Visual direction

- Aesthetic: restrained Swiss corporate editorial with Japanese spacing discipline
- Primary theme: light editorial pages, with deliberate dark signature scenes at the media hero and Global Hub section
- Core design premise: organize multidisciplinary expertise into one precise, dependable support system; cross-border activity is business context, not the visual theme by itself
- Signature scenes: the Hero route expresses geographic movement locally; the Global Hub network expresses geographic presence locally
- Decoration budget: do not promote either local scene into a whole-page motif unless client evidence explicitly makes geographic routing the brand theme
- Cards: reserved for genuinely bounded interactive states; editorial lists and data groups stay structurally open

## Brand assets

- Formal logo on light backgrounds: `/public/media/ft-logo.png`
- Formal logo on dark backgrounds: `/public/media/top-logo.png`
- Text-only dark wordmark: `/public/media/logo-b.svg`
- Text-only light wordmark: `/public/media/logo-w.svg`
- Hero video: `/public/media/move-bg.mp4`
- Hero fallback: `/public/media/move-bg.jpg`
- Expert photography: `/public/media/st-*.jpg`, `/public/media/wei-jiong.jpg`, `/public/media/lu-xingye.jpg`, `/public/media/matsumoto-saori.jpg`
- Partner logos: `/public/media/zhi01.png` through `/public/media/zhi10.png`

## Tokens

- Ink: `#14181a`
- Slate: `#58656b`
- Accent: `#0e8fa8` (working teal derived from the supplied identity assets)
- Mist: `#c4e0e8`
- Paper: `#ffffff`
- Secondary paper: `#f7f9fa`
- Japanese type: Noto Sans JP
- Latin utility and numerals: Inter, never used as the primary display face

### CIS provenance and presence

- The formal logo contains dark blue, medium blue, pale blue, and neutral grey. Extracted image colors are evidence for audit only, not a substitute for the client's official CIS values.
- Do not convert the site into a white, black, and grey template merely by removing decorative elements. Brand reduction and decoration reduction are separate decisions.
- Every homepage section must be marked as brand-dominant, brand-supporting, or intentionally neutral before implementation.
- Approved brand colors must appear in meaningful visual anchors such as a section field, active structure, data emphasis, navigation state, or signature visual; tiny labels and divider lines alone do not establish brand presence.
- Do not allow more than two consecutive neutral light sections without a meaningful CIS anchor or an intentional editorial reason recorded in the storyboard.

## Layout contract

- Maximum container: 1320px
- Desktop gutter: 40px
- Mobile gutter: 24px
- Reading measure: 680-720px
- Desktop section spacing: 112px
- Mobile section spacing: 72px
- Structural content uses square edges
- Inputs use 8px radius
- Buttons use pill radius

### Composition geometry

- QA viewports: 390, 768, 1024, 1440, 1920, and 2560 CSS px when browser zoom or large displays are plausible
- Record CSS viewport width, height, DPR, and zoom context with every screenshot; screenshot pixels alone do not identify the layout viewport
- Every homepage section must define its background span, internal content span, dominant visual scale, expected height, heading line plan, and transition to adjacent sections
- A capped container must not leave the section reading as a small centered content island on wide screens
- Major Japanese headings use intentional semantic line breaks at desktop; mobile wrapping must be separately rendered and checked
- The Global Hub is a full-bleed dark signature scene, not a dark card floating inside a white section
- Global Hub desktop composition: text and network share the 1320px frame, the network remains the dominant visual, and the advantages continue inside the same dark field

### Homepage trust hierarchy

- Current homepage order: Hero, Services, complete By the Numbers band, People, Global Hub, CTA
- The immediate post-hero proof must remain compact and must not become a full partner-information section
- Client logos or concise supplied metrics may appear only when their position improves the visitor narrative; they are not automatic post-Hero content
- Strategic Partner names require context and target-audience recognition; detailed partner information belongs on Company or later in the homepage unless the partnership is central to the value proposition
- Do not merge clients, business partners, strategic partners, credentials, and outcomes into one undifferentiated Proof block

## Motion contract

- Micro interactions: 180-240ms
- Content reveal: 360ms maximum
- Continuous motion is limited to the Hero route, the Global Hub network, and at most one logo marquee
- Isolated effects that do not reinforce the client-derived design premise are removed. Numbers keep count-up without scan rails; portraits use direct editorial reveal without a separate mask; Career remains intentionally quiet
- Market Entry process rails and the Cases timeline remain because their lines communicate actual process and time
- All motion must stop or become static under `prefers-reduced-motion`
