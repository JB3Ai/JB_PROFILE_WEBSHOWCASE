# Phase 20F: Public PDF Resource Library and Private PDF Split Notes

## Review Status

Drafted in 20F.

Public PDF resource integration.

Pending human review.

Not merged yet.

## Scope

20F adds a homepage-only `Resource Library` section using public-safe PDF files only.

This milestone also records the private PDF split so investor and forensic materials are not linked from the public site.

## Public PDF Registry

| Group | Public title | Public filename | Website path |
| --- | --- | --- | --- |
| Isikolo | JB³ ISIKOLO AI — final learners overview | `jb3-isikolo-ai-final-learners.pdf` | `/assets/pdfs/jb3-isikolo-ai-final-learners.pdf` |
| JB³Ai Systems | JB³Ai Intelligence in Motion | `jb3ai-intelligence-in-motion.pdf` | `/assets/pdfs/jb3ai-intelligence-in-motion.pdf` |
| JB³Ai Systems | JB³ OS³ Dash: The Operating System | `jb3-os3-dash-operating-system.pdf` | `/assets/pdfs/jb3-os3-dash-operating-system.pdf` |
| JB³Ai Systems | JB³ OS³ Dash: The Operating System COMP | `jb3-os3-dash-operating-system-comp.pdf` | `/assets/pdfs/jb3-os3-dash-operating-system-comp.pdf` |
| VoiceGrid / ViewGrid | VOICEGRID Call Centre Infrastructure | `voicegrid-call-centre-infrastructure.pdf` | `/assets/pdfs/voicegrid-call-centre-infrastructure.pdf` |
| VoiceGrid / ViewGrid | Sovereign VOICEGRID Infrastructure Manual | `sovereign-voicegrid-infrastructure-manual.pdf` | `/assets/pdfs/sovereign-voicegrid-infrastructure-manual.pdf` |
| VoiceGrid / ViewGrid | Global Satellite Overlay: The Sentinel Eye | `global-satellite-overlay-sentinel-eye.pdf` | `/assets/pdfs/global-satellite-overlay-sentinel-eye.pdf` |
| VoiceGrid / ViewGrid | VIEWGRID Global Satellite Overlay: The Sentinel Eye | `viewgrid-global-satellite-overlay-sentinel-eye.pdf` | `/assets/pdfs/viewgrid-global-satellite-overlay-sentinel-eye.pdf` |
| Creative / Media | Cyber-Noir Music Console Magazine | `cyber-noir-music-console-magazine-combined.pdf` | `/assets/pdfs/cyber-noir-music-console-magazine-combined.pdf` |

## Private PDF Split

The following PDFs are excluded from the public Resource Library and are not linked by the website:

- `JB³Ai — Investment Deck Intelligence in Motion COMPR.pdf`
- `JB³Ai Forensic Intelligence Systems Overview.pdf`

20F does not create public links for investment deck material or forensic intelligence system material.

## Files Changed

- `docs/phase-20/20f-public-pdf-resource-library-private-split-notes.md`
- `src/content/resourceLibrary.content.ts`
- `src/components/public/ResourceLibrarySection.tsx`
- `src/pages/PublicHome.tsx`
- `public/assets/pdfs/jb3-isikolo-ai-final-learners.pdf`
- `public/assets/pdfs/jb3ai-intelligence-in-motion.pdf`
- `public/assets/pdfs/jb3-os3-dash-operating-system.pdf`
- `public/assets/pdfs/jb3-os3-dash-operating-system-comp.pdf`
- `public/assets/pdfs/voicegrid-call-centre-infrastructure.pdf`
- `public/assets/pdfs/sovereign-voicegrid-infrastructure-manual.pdf`
- `public/assets/pdfs/global-satellite-overlay-sentinel-eye.pdf`
- `public/assets/pdfs/viewgrid-global-satellite-overlay-sentinel-eye.pdf`
- `public/assets/pdfs/cyber-noir-music-console-magazine-combined.pdf`

## Website Area Touched

Homepage only.

The `Resource Library` section is placed after `Sponsor Isikolo` and before the public contact strip.

## Safety Confirmations

- Public PDFs only.
- No investment deck public link.
- No forensic intelligence systems overview public link.
- No private OS PDF exposure.
- No payment changes.
- No backend.
- No API keys.
- No checkout logic.
- No payment SDKs.
- No embedded scripts.
- No route changes.
- No app ID changes.
- No asset registry changes.
- No 18I asset changes.
- No raw media candidate staging.
- No timeline copy changes.
- No GTR asset movement.
- Public/private split preserved.

## Build Result

`npm run build` passed in 20F.

## Visual and Link QA

- Desktop homepage smoke check passed.
- 390px mobile homepage smoke check passed.
- No horizontal overflow detected at 390px.
- Resource Library rendered on the homepage.
- 9 public PDF links detected.
- All 9 public PDF links returned 200 locally.
- No investment deck link detected.
- No forensic intelligence systems overview link detected.
