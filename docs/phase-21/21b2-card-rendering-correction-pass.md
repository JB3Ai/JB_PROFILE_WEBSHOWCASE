# Phase 21B2: Card Rendering Correction Pass

## Review Status

- Drafted in 21B2.
- Correction pass for PR #63 visual QA hold.
- Pending human browser visual QA.
- Not merged yet.

## Purpose

21B2 corrects the 21B homepage rendering scope after visual review found that older project rail items were still visible on the public homepage.

The intended 21B public product surface is the controlled Product Architecture section only, with three selected Batch 01 cards:

- OS³ Dash
- JB³Ai Super Agent OS
- ClipboardAi

## Issue Found

Visual QA screenshots showed the following out-of-scope product names on the homepage:

- The DukeBox of London
- JB³ VoiceGrid OS³
- Clipboard OS³ Lite

This created two scope problems:

- VoiceGrid Ai and DukeBox of London were visible even though they are explicitly held for separate review.
- The older project rail naming did not match the approved Batch 01 selected-card naming for 21B.

## Correction Applied

The legacy Selected Work rail was removed from the 21B visible homepage path for this correction pass.

The hero projects action now targets the controlled Product Architecture section instead of the removed legacy `projects` anchor.

The Media and Signals band was also adjusted to avoid surfacing the held DukeBox preview during the 21B2 QA window. The final media slot now uses the existing OS³ Dash overview instead of the DukeBox preview.

This keeps the visible Batch 01 product surface aligned to the approved 21B scope.

## Rendered Card Scope After Correction

Rendered:

- OS³ Dash
- JB³Ai Super Agent OS
- ClipboardAi

Not rendered:

- VoiceGrid Ai
- DukeBox of London
- Clipboard OS³ Lite
- JB³ ViewGrid
- Any additional portfolio or project card

## Files Changed

- `src/pages/PublicHome.tsx`
- `docs/phase-21/21b2-card-rendering-correction-pass.md`

## Safety Confirmations

- No new assets added.
- No WebP exports.
- No image optimisation.
- No `assetRegistry.ts` changes.
- No route changes.
- No app ID changes.
- No `/os` changes.
- No Sponsor Isikolo changes.
- No payment/contact/social changes.
- No IsikoloAI changes.
- No VoiceGrid Ai card rendered.
- No DukeBox of London card rendered.
- No DukeBox of London media preview rendered.
- No source PNG/JPG intake candidates staged.
- Candidate PNGs remain private intake files under `docs/media-intake/06-generated-product-visuals/batch-01/`.

## Visual QA Status

Code/build correction is ready for browser review.

Do not merge PR #63 until these pass:

- Desktop homepage visual check at 100% zoom.
- 390px mobile homepage visual check.
- No text overflow.
- No broken image states.
- No awkward card crops.
- Sponsor Isikolo surface remains stable.
- IsikoloAI-related surfaces remain stable.
- OS³ Dash, JB³Ai Super Agent OS, and ClipboardAi render correctly.
- VoiceGrid Ai and DukeBox of London are not visible.
- Card spacing and alignment feel premium and consistent.

## Build Result

`npm run build` passed on 2026-06-26 after the 21B2 correction.

## 21B2 Decision

21B2 is ready for human browser visual QA after the build passes. PR #63 must remain on hold until visual QA confirms the corrected homepage scope.
