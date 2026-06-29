# Phase 22F: Public Homepage Visual Rhythm and Readability QA

## Review Status

- Drafted in 22F.
- QA and review milestone.
- Docs-only.
- No source fixes made.
- No section reordering.
- No visual redesign.
- No route, app ID, payment, contact, social, asset registry, `/os`, raw intake, or public asset changes.

## Browser QA Summary

22F reviewed the public homepage after:

- 22D: public homepage section-order implementation.
- 22E: public homepage copy and transition refinement.

Browser smoke checks were run against the built `dist/` output served from a clean local preview port.

Checked surfaces:

- Desktop initial viewport at 1440px.
- 390px mobile initial viewport.
- Full-page screenshot smoke captures for desktop and 390px mobile.
- Source-level section-order and held-product checks.

Important QA note:

- The homepage uses scroll-triggered animation and reveal behaviour. Full-page headless screenshots can show below-the-fold sections as blank if the browser captures before each section has entered the viewport. For that reason, 22F treats headless full-page screenshots as smoke evidence only and recommends human scroll-depth review before any visual-fix milestone.

## Desktop Readability Review

Initial desktop viewport:

- Homepage loads.
- Hero remains readable and premium.
- Navigation is visually stable.
- Primary actions remain visible.
- No broken image state was visible in the initial desktop viewport.
- No obvious horizontal overflow was visible in the initial desktop viewport.

Desktop rhythm notes:

- The hero remains visually strong, but it dominates the first screen. This is acceptable for the public profile website but should be considered during later homepage condensation work.
- The 22D order creates a better narrative sequence: identity first, then product architecture, mission support, founder journey, GTR³, proof, access, and connect.
- The Product Architecture section is now correctly positioned earlier in the source flow and should be the first section to receive deeper human scroll review.
- Sponsor Isikolo remains correctly positioned after Product Architecture.

## 390px Mobile Readability Review

Initial 390px viewport:

- Homepage loads.
- Hero text remains readable.
- Primary actions remain usable.
- Navigation uses a horizontally dense row but does not show obvious catastrophic overflow in the captured viewport.
- No broken image state was visible in the initial mobile viewport.
- No obvious horizontal overflow was visible in the initial mobile viewport.

Mobile rhythm notes:

- The mobile top section is readable, but dense.
- The navigation and hero together take substantial vertical space before visitors reach the product/mission layers.
- This does not require an immediate 22F source fix, but it should be reviewed in a later mobile rhythm/condensation milestone.

## Section-By-Section Rhythm Notes

### Hero

- Strong visual identity and founder-led framing.
- Desktop readability is acceptable.
- Mobile readability is acceptable but dense.
- Defer any hero condensation or typography changes to a dedicated visual refinement milestone.

### Product Architecture

- Correctly appears before Timeline in source order.
- Public copy is now less implementation-focused after 22E.
- Approved visible cards remain limited to OS³ Dash, JB³Ai Super Agent OS, and ClipboardAi.
- Needs human scroll-depth review for card spacing, image crops, and rhythm after the hero.

### Sponsor Isikolo

- Correctly appears directly after Product Architecture in source order.
- Mission-led sponsorship positioning remains intact.
- No payment links were changed.
- Needs human scroll-depth review for desktop/mobile balance now that it appears earlier on the page.

### Timeline

- Correctly follows Sponsor Isikolo in source order.
- Copy now transitions from platform/mission into founder history.
- No immediate source fix required.

### Founder Phase

- Remains adjacent to the timeline.
- May duplicate some founder-journey rhythm later, but 22F does not change it.
- Defer condensation decisions.

### GTR³

- Correctly appears before Media, Evidence, and Investor sections in source order.
- Symbolic/aspirational positioning remains intact.
- No immediate source fix required.

### Media

- Correctly remains lower on the page after GTR³.
- Current media band should remain curated and not expand in 22F.
- No DukeBox leakage was detected in `src/pages/PublicHome.tsx`.

### Evidence

- Correctly remains after Media.
- Public-safe proof framing remains intact.
- No immediate source fix required.

### Investor

- Correctly remains after Evidence.
- Verified-access language is cleaner after 22E.
- No immediate source fix required.

### Connect

- Remains final in source order.
- No contact/social links changed.
- No immediate source fix required.

## Issues Found

| Issue | Severity | Decision | Notes |
| --- | --- | --- | --- |
| Mobile hero and nav feel dense. | Medium | Defer. | Requires a dedicated mobile rhythm pass, not a 22F quick fix. |
| Full-page headless screenshots can show blank below-the-fold space. | Low / tooling | Defer. | Likely caused by scroll-triggered animation capture behaviour; human scroll review is the right QA method. |
| Product/Sponsor/Timeline rhythm needs human scroll-depth review. | Medium | Defer to human QA / follow-on milestone. | Source order is correct; visual rhythm should be judged in a live browser scroll pass. |

## Fix-Now Vs Defer Table

| Candidate | Fix now? | Decision |
| --- | --- | --- |
| Section order | No | Already correct from 22D. |
| Public transition copy | No | Already refined in 22E. |
| Product-card visibility | No | Approved three-card scope remains intact. |
| Mobile nav/hero density | No | Defer to dedicated mobile rhythm milestone. |
| Scroll-triggered screenshot blankness | No | Treat as QA tooling limitation; use human scroll-depth QA. |
| Sponsor Isikolo spacing after reorder | No | Defer until human scroll-depth review confirms a real issue. |

## Source Changes Made

- None.

22F is docs-only.

## Confirmed Unchanged Structure

The section order remains unchanged from 22D and 22E:

1. Boot sequence / public reveal.
2. `PublicNav`.
3. Public hero orb backgrounds.
4. `PublicHeroCinematic`.
5. `ManifestoPanel`.
6. `FounderManualSection`.
7. Product Architecture via `EditorialSection id="product-architecture"`.
8. `SupportWorkStrip`.
9. Founder Journey via `EditorialSection id="timeline"`.
10. `FounderPhaseStrip`.
11. `GTR3Spotlight`.
12. Media and Signals via `ProofBand id="video-vault"`.
13. Evidence and Trust via `ProofBand id="evidence-vault"`.
14. Investor Access via `EditorialSection id="investor-room"`.
15. `ConnectStrip`.

## Confirmed Unchanged Links, Assets, And Routes

- No route changes.
- No app ID changes.
- No payment link changes.
- No Sponsor Isikolo link changes.
- No contact/social link changes.
- No asset registry changes.
- No new images.
- No public asset changes.
- No `/os` or private OS shell changes.
- No raw intake file changes.

## Confirmed Approved Product-Card Scope

Visible Batch 01 cards remain limited to:

- OS³ Dash
- JB³Ai Super Agent OS
- ClipboardAi

Held or excluded products remain out of the visible homepage flow:

- DukeBox of London
- VoiceGrid Ai
- Clipboard OS³ Lite
- ClipboardOS

## Explicit Exclusions

22F does not:

- Reorder sections.
- Redesign the homepage.
- Add sections.
- Add products.
- Add images.
- Add routes.
- Change app IDs.
- Change payment/contact/social links.
- Change Sponsor Isikolo links.
- Change `assetRegistry.ts`.
- Change `/os`.
- Modify raw intake files.
- Stage local-only `vite.config.ts`.
- Publish or expose private/internal products.

## QA Checklist

Build:

- `npm run build` passed.

Source/content checks:

- Section order remains unchanged from 22D/22E.
- OS³ Dash remains visible in the approved Batch 01 card data.
- JB³Ai Super Agent OS remains visible in the approved Batch 01 card data.
- ClipboardAi remains visible in the approved Batch 01 card data.
- DukeBox of London is not present in `src/pages/PublicHome.tsx`.
- VoiceGrid Ai is not present in `src/pages/PublicHome.tsx`.
- Clipboard OS³ Lite is not present in `src/pages/PublicHome.tsx`.
- ClipboardOS is not present in `src/pages/PublicHome.tsx`.
- IsikoloAI and Sponsor Isikolo surfaces remain stable.

Browser smoke QA:

- Desktop initial viewport rendered.
- 390px mobile initial viewport rendered.
- No broken image state was visible in the captured initial viewports.
- No obvious horizontal overflow was visible in the captured initial viewports.

## Build Result

- `npm run build` passed.

## Safety And Staging Notes

- Stage only:
  - `docs/phase-22/22f-public-homepage-visual-rhythm-readability-qa.md`
- Do not use `git add .`.
- Do not stage `vite.config.ts`.
- Do not stage `docs/media-intake/`.
- Do not stage raw image, PDF, video, or temporary QA candidates.
