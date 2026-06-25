# 21A Batch 01 Selected Visual Optimisation

## Review Status

Drafted in 21A.

Selected visual optimisation milestone.

Pending human review.

Not merged yet.

## Scope

21A optimises only the three Batch 01 visual candidates approved for future optimisation in 20Z:

- OS³ Dash
- JB³Ai Super Agent OS
- ClipboardAi

21A does not render product cards, change homepage layout, publish a portfolio batch, or integrate the visuals into visible UI.

## Source Decisions

Primary source:

- `docs/phase-20/20z-batch-01-visual-optimisation-readiness-review.md`

20Z readiness decision:

- OS³ Dash: ready for future optimisation milestone.
- JB³Ai Super Agent OS: ready for future optimisation milestone with claim/crop conditions.
- ClipboardAi: ready for future optimisation milestone.
- VoiceGrid Ai: not ready in 20Z.
- DukeBox of London: not ready in 20Z.

## Optimised Production Outputs

| Product | Intake source candidate | Production output | Source size | Output size | Dimensions | Registry key |
| --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | `docs/media-intake/06-generated-product-visuals/batch-01/os3-dash/os3-dash-candidate-built-in-20260624-v02.png` | `public/assets/images/os3-dash-command-dashboard.webp` | 1,624,922 bytes | 85,786 bytes | 1568 x 1003 | `os3DashCommandDashboard` |
| JB³Ai Super Agent OS | `docs/media-intake/06-generated-product-visuals/batch-01/super-agent-os/jb3ai-super-agent-os-candidate-built-in-20260624-v02.png` | `public/assets/images/jb3ai-super-agent-os-architecture.webp` | 2,374,316 bytes | 161,798 bytes | 1536 x 1024 | `jb3aiSuperAgentOsArchitecture` |
| ClipboardAi | `docs/media-intake/06-generated-product-visuals/batch-01/clipboard-ai/clipboard-ai-candidate-built-in-20260624-v01.png` | `public/assets/images/clipboard-ai-private-workspace.webp` | 1,332,971 bytes | 37,346 bytes | 1568 x 1003 | `clipboardAiPrivateWorkspace` |

## Optimisation Method

The three selected PNG candidates were converted to WebP using local Python/Pillow.

Settings:

- Format: WebP
- Quality: 82
- Method: 6
- Dimensions preserved
- No crop applied
- No visual redesign
- No text added
- No source candidate moved, renamed, staged, or committed

## Registry Update

Updated file:

- `src/data/assetRegistry.ts`

Keys added:

- `os3DashCommandDashboard`
- `jb3aiSuperAgentOsArchitecture`
- `clipboardAiPrivateWorkspace`

Registry shape:

- Flat registry preserved.
- Existing keys preserved.
- No route IDs, app IDs, or component imports changed.

## Visual QA Notes

OS³ Dash:

- Production WebP opens successfully.
- Command dashboard structure remains visible.
- No `WOORFLOW` typo is visible.
- No readable private data observed.
- No crop applied in 21A.

JB³Ai Super Agent OS:

- Production WebP opens successfully.
- Command architecture and workflow-pod structure remain visible.
- No incorrect non-superscript brand title text is visible.
- Brand-facing copy must still use `JB³Ai` and `OS³` wherever this visual is paired with text.
- No crop applied in 21A.

ClipboardAi:

- Production WebP opens successfully.
- Calm private-workspace structure remains visible.
- No sensitive document content or private data observed.
- No crop applied in 21A.

## Held Candidates

The following candidates were not optimised in 21A:

- VoiceGrid Ai
- DukeBox of London

Reason:

20Z marked both as not ready for optimisation in this pass. VoiceGrid Ai remains held for human review, and DukeBox of London remains held for rights / landmark-style review.

## Not Integrated Yet

21A does not:

- Render OS³ Dash card.
- Render JB³Ai Super Agent OS card.
- Render ClipboardAi card.
- Add a public portfolio batch.
- Change homepage layout.
- Change app cards.
- Change routes.
- Change app IDs.
- Change `/os`.
- Change Sponsor Isikolo.
- Change payment links.
- Change contact/social links.
- Optimise VoiceGrid Ai.
- Optimise DukeBox of London.
- Stage source PNG/JPG candidates.
- Commit raw media.
- Link PDFs.
- Publish videos.

## Source Candidate Status

Source candidate PNGs remain private intake candidates under:

- `docs/media-intake/06-generated-product-visuals/batch-01/`

They remain untracked by design and are not included in 21A.

## Safety Confirmations

- Only three selected visuals were optimised.
- Only three WebP files were added under `public/assets/images/`.
- Only three selected registry keys were added.
- No visible UI rendering.
- No product cards rendered.
- No homepage layout changes.
- No route/app ID changes.
- No `/os` changes.
- No Sponsor Isikolo changes.
- No payment/contact/social changes.
- No PDF/resource changes.
- No raw intake candidate files staged.
- No VoiceGrid Ai optimisation.
- No DukeBox of London optimisation.
- Public/private split preserved.

## Build Result

`npm run build` passed on 2026-06-25.

## 21A Decision

21A prepares OS³ Dash, JB³Ai Super Agent OS, and ClipboardAi as registered production image assets for later integration review.

The assets are not approved for visible public card rendering in 21A. Card rendering requires a later milestone.
