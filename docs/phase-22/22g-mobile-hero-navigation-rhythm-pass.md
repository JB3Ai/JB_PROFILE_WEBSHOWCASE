# Milestone 22G: Mobile Hero and Navigation Rhythm Pass

## Status

Drafted for human review.

## Scope

22G is a controlled mobile-focused refinement milestone following the 22F public homepage visual rhythm QA.

The milestone addresses the deferred 22F issue:

- Mobile hero and navigation felt dense at 390px.
- The public homepage top section needed better scan rhythm before deeper route/page work.

This milestone does not change homepage structure, product scope, routes, payment links, contact/social links, assets, the asset registry, or private OS behaviour.

## Source Files Changed

- `src/styles/globals.css`
- `docs/phase-22/22g-mobile-hero-navigation-rhythm-pass.md`

No `PublicHome.tsx` source change was required.

## Mobile Issue Summary

At 390px width, the hero and navigation were readable but visually dense:

- Navigation shell consumed meaningful vertical space.
- Navigation actions felt heavy above the fold.
- Hero title, quote, body, and CTA stack had limited breathing room.
- The founder portrait stage began low enough that the mobile first screen felt elongated.

The issue was rhythm and density, not broken layout.

## Exact Fixes Made

All source changes were limited to the existing mobile media query in `src/styles/globals.css`.

Navigation refinements:

- Reduced mobile `public-nav-shell` padding and radius.
- Tightened the internal nav-shell vertical gap.
- Made mobile nav actions a balanced two-column grid.
- Kept nav action buttons full-width within their grid cells.
- Slightly reduced mobile brand mark size.
- Kept the existing horizontally scrollable nav link row.

Hero refinements:

- Reduced mobile hero top and bottom padding.
- Reduced mobile hero grid gap.
- Reduced pretitle letter spacing at mobile width.
- Slightly reduced mobile hero title size.
- Tightened hero title, quote, body, action, and private OS preview spacing.
- Reduced mobile hero CTA padding.
- Reduced mobile portrait-stage height and adjusted portrait crop boundaries.

No desktop-specific rules were changed.

## Desktop Impact Statement

Desktop behaviour is expected to remain effectively unchanged because all source adjustments were made inside the existing `@media (max-width: 767px)` block.

Desktop smoke screenshot was captured after the change and did not show an obvious top-of-page regression.

## Confirmed Unchanged Section Order

The public homepage section order remains unchanged from 22D / 22E:

1. Hero
2. Manifesto / Founder Manual intro surfaces
3. Product Architecture
4. Sponsor Isikolo
5. Timeline
6. Founder Phase
7. GTR³
8. Media
9. Evidence
10. Investor
11. Connect

Source order spot-check:

- `id="product-architecture"`
- `<SupportWorkStrip />`
- `id="timeline"`
- `<FounderPhaseStrip />`
- `<GTR3Spotlight />`
- `id="video-vault"`
- `id="evidence-vault"`
- `id="investor-room"`
- `<ConnectStrip />`

## Confirmed Unchanged Routes / Links / Assets

No changes were made to:

- Routes
- App IDs
- Payment links
- Contact links
- Social links
- Sponsor Isikolo links
- Image assets
- Asset registry
- `/os`
- Raw intake files
- PDF/resource links

## Confirmed Approved Product-Card Scope

The approved visible Batch 01 product-card scope remains:

- OS³ Dash
- JB³Ai Super Agent OS
- ClipboardAi

`src/pages/PublicHome.tsx` was checked for excluded product names and did not include:

- DukeBox of London
- VoiceGrid Ai
- Clipboard OS³ Lite
- ClipboardOS

## Explicit Exclusions

22G does not:

- Reorder homepage sections.
- Redesign the homepage.
- Add new sections.
- Add new images.
- Add new products.
- Change routes.
- Change app IDs.
- Change payment links.
- Change contact/social links.
- Change `assetRegistry.ts`.
- Change `/os`.
- Modify raw intake files.
- Stage `vite.config.ts`.
- Reintroduce DukeBox of London, VoiceGrid Ai, Clipboard OS³ Lite, or ClipboardOS into the visible homepage.

## QA Checklist

Build:

- `npm run build` passed.

Preview QA:

- Local preview served at `http://127.0.0.1:5192/`.
- 390px mobile top-of-homepage screenshot captured after the boot sequence.
- Desktop top-of-homepage screenshot captured after the boot sequence.
- 390px mobile top section showed improved hero/nav rhythm.
- Desktop top section showed no obvious top-of-page regression.

Confirmed:

- Mobile hero/nav is cleaner and readable.
- Section order remains unchanged.
- OS³ Dash remains in the approved product-card source set.
- JB³Ai Super Agent OS remains in the approved product-card source set.
- ClipboardAi remains in the approved product-card source set.
- DukeBox of London is not visible through `PublicHome.tsx`.
- VoiceGrid Ai is not visible through `PublicHome.tsx`.
- Clipboard OS³ Lite is not visible through `PublicHome.tsx`.
- IsikoloAI / Sponsor Isikolo surfaces were not changed.
- No broken image state was visible in captured top-of-page screenshots.
- No obvious text overflow was visible in captured top-of-page screenshots.
- No obvious horizontal overflow was visible in captured top-of-page screenshots.

QA tooling note:

- The initial screenshot attempt captured the boot sequence, so the later smoke screenshots used the boot auto-complete delay before capturing the public homepage.
- Temporary QA screenshots and preview logs are local-only and must not be staged.

## Build Result

Passed:

```text
npm run build
```

## Safety / Staging Notes

Stage only:

- `src/styles/globals.css`
- `docs/phase-22/22g-mobile-hero-navigation-rhythm-pass.md`

Do not stage:

- `vite.config.ts`
- `docs/media-intake/`
- Raw candidate images
- `public/assets/images/isikolo.png`
- `public/assets/images/isikolosmaller.jpg`
- Temporary QA files
- Preview logs

Do not use:

```text
git add .
```

## Recommended Commit Message

```text
Refine mobile hero navigation rhythm
```
