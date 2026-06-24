# Phase 20X3: Batch 01 Candidate Image Generation

## Review Status

Drafted in 20X3.

Candidate image generation milestone.

Intake-only candidates.

No production optimisation performed.

No WebP exports.

No public files added.

No `assetRegistry.ts` changes.

No UI integration.

No visible cards added.

Pending human review.

## Purpose

20X3 generates and records private candidate images for Batch 01 using the approved 20W5 prompts, before any optimisation, registry, public export, or card rendering.

The generated files are candidate source images only. They are held in private intake for visual review and must not be treated as production assets.

## Integration Rule

20X3 does not create production assets, does not optimise images, does not export WebP files, does not update `assetRegistry.ts`, does not add files under `public/`, and does not render product cards.

It only generates or records private candidate visuals for review.

## Current Public Baseline

| Baseline item | Current state |
| --- | --- |
| IsikoloAI | Remains the only visible public app card from 20S. |
| Batch 01 copy | Approved in 20U. |
| Batch 01 final prompts | Approved in 20W5. |
| Batch 01 generation review | 20X marked all candidates as generation pending. |
| Batch 01 generation path | 20X2 approved generation from the 20W5 prompts as-is. |
| Additional product cards | No additional product cards are rendered yet. |
| Batch 01 production assets | No Batch 01 production assets exist yet. |

## Candidate Generation Summary

| Product | Prompt source | Generation performed? | Candidate produced? | Candidate filename | Candidate location | Candidate dimensions | Initial decision | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | 20W5 final prompt. | Yes. | Yes. | `os3-dash-candidate-built-in-20260624-v01.png` | `docs/media-intake/06-generated-product-visuals/batch-01/` | 1568 x 1003 | Requires regeneration. | Strong visual fit, but embedded label typo appears as `WOORFLOW`. |
| JB³Ai Super Agent OS | 20W5 final prompt. | Yes. | Yes. | `jb3ai-super-agent-os-candidate-built-in-20260624-v01.png` | `docs/media-intake/06-generated-product-visuals/batch-01/` | 1536 x 1024 | Requires regeneration / text correction. | Visually aligned, but fails brand text compliance because the title uses `JB3Ai` instead of `JB³Ai`; also has dense embedded text and a scale implication requiring review. |
| ClipboardAi | 20W5 final prompt. | Yes. | Yes. | `clipboard-ai-candidate-built-in-20260624-v01.png` | `docs/media-intake/06-generated-product-visuals/batch-01/` | 1568 x 1003 | Initial pass for human review. | Clean, generic workspace visual with safe abstract cards and action queue. |
| VoiceGrid Ai | 20W5 final prompt. | Yes. | Yes. | `voicegrid-ai-candidate-built-in-20260624-v01.png` | `docs/media-intake/06-generated-product-visuals/batch-01/` | 1536 x 1024 | Initial pass for human review. | Strong signal-routing visual; multilingual labels need human claims review. |
| DukeBox of London | 20W5 final prompt. | Yes. | Yes. | `dukebox-of-london-candidate-built-in-20260624-v01.png` | `docs/media-intake/06-generated-product-visuals/batch-01/` | 1672 x 941 | Requires regeneration. | Strong mood and composition, but title appears as `DUKEBOX`, not `DukeBox`, and needs visible-text review. |

## Product-by-Product Candidate Generation Log

### A. OS³ Dash

Product positioning:

Founder OS / Operating Dashboard.

Prompt reference:

20W5 OS³ Dash final prompt.

Generation method:

Built-in image generation tool using the approved 20W5 prompt.

Candidate filename:

`os3-dash-candidate-built-in-20260624-v01.png`

Candidate location:

`docs/media-intake/06-generated-product-visuals/batch-01/os3-dash-candidate-built-in-20260624-v01.png`

Candidate dimensions:

1568 x 1003.

Visual quality notes:

The candidate has a strong premium dark command-dashboard look, clear panel structure, good slate/green contrast, and a useful central workflow path.

Prompt compliance notes:

Mostly compliant with the staged dashboard concept and product-card visual direction.

Negative prompt compliance notes:

No real private data, client data, emails, financial figures, credentials, or recognisable third-party logos observed.

Embedded text review:

Failed. The central label appears as `WOORFLOW`, which is a visible text error.

Private-data hallucination review:

Initial pass. No private data observed.

Third-party IP / resemblance review:

Initial pass. No specific third-party UI resemblance observed, but dashboard styling should still receive human review.

Brand-fit review:

Strong brand fit for premium founder OS.

Crop suitability notes:

Desktop crop is strong. 390px mobile crop is likely acceptable if centered on the central workflow panel, but visible text remains a blocker.

Initial pass/fail status:

Requires regeneration.

Required revisions:

Regenerate with stricter instruction for no readable text or corrected generic labels only.

Recommendation:

Do not move this candidate to optimisation review. Use as style reference for a regenerated OS³ Dash candidate.

### B. JB³Ai Super Agent OS

Product positioning:

AI Workforce Architecture.

Prompt reference:

20W5 JB³Ai Super Agent OS final prompt.

Generation method:

Built-in image generation tool using the approved 20W5 prompt.

Candidate filename:

`jb3ai-super-agent-os-candidate-built-in-20260624-v01.png`

Candidate location:

`docs/media-intake/06-generated-product-visuals/batch-01/jb3ai-super-agent-os-candidate-built-in-20260624-v01.png`

Candidate dimensions:

1536 x 1024.

Visual quality notes:

The candidate has a strong architecture-map structure and clear human-led command layer. It visually communicates Adam, grouped workflows, and approval paths.

Prompt compliance notes:

Mostly compliant with the architecture concept. The human oversight cue is clear.

Brand text compliance note:

Candidate visually aligns with the intended Super Agent OS direction, but fails brand text compliance because the title uses `JB3Ai` instead of `JB³Ai`. This must be corrected before the asset can be approved for optimisation review. Brand-facing output must use `JB³Ai` and `OS³`. Plain `jb3ai` or `os3` is only acceptable in technical URLs, code, filenames, internal references, or slug fields.

Negative prompt compliance notes:

Partially compliant. The image avoids chatbot-directory styling, but visible phrases such as outcome and scale-oriented language need review because the approved prompt avoided unsupported maturity or scale implications.

Embedded text review:

Failed / held. The candidate includes incorrect brand-facing text and a lot of readable text, which increases claim and mobile-legibility risk.

Private-data hallucination review:

Initial pass. No private data observed.

Third-party IP / resemblance review:

Initial pass. No obvious third-party logo observed.

Brand-fit review:

Strong premium founder OS fit, but more text-heavy than ideal.

Crop suitability notes:

Desktop crop is strong. 390px mobile crop may lose text legibility and could look crowded.

Initial pass/fail status:

Requires regeneration / text correction.

Required revisions:

Correct `JB3Ai` to `JB³Ai`, confirm any platform naming appears as `OS³`, reduce readable text, remove scale/outcome implications, and simplify for mobile crop.

Recommendation:

Do not approve for optimisation, registry, or public card use. Regenerate or text-correct before any optimisation review.

### C. ClipboardAi

Product positioning:

Private Workspace / Controlled Collaboration.

Prompt reference:

20W5 ClipboardAi final prompt.

Generation method:

Built-in image generation tool using the approved 20W5 prompt.

Candidate filename:

`clipboard-ai-candidate-built-in-20260624-v01.png`

Candidate location:

`docs/media-intake/06-generated-product-visuals/batch-01/clipboard-ai-candidate-built-in-20260624-v01.png`

Candidate dimensions:

1568 x 1003.

Visual quality notes:

The candidate is clean, calm, premium, and product-card ready. It presents generic document cards, communication-style blocks, and an action queue without real content.

Prompt compliance notes:

Compliant with the staged workspace concept.

Negative prompt compliance notes:

Initial pass. No real messages, emails, filenames, attachments, client data, or security guarantee wording observed.

Embedded text review:

Initial pass. Visible labels are generic and limited: Capture, Structure, Review, Share, Action.

Private-data hallucination review:

Initial pass. No private-looking content observed.

Third-party IP / resemblance review:

Initial pass. Does not appear to mimic a specific third-party app.

Brand-fit review:

Strong fit for quiet execution workspace and controlled collaboration.

Crop suitability notes:

Desktop crop is strong. 390px mobile crop should work if focused on the central cards and action lane.

Initial pass/fail status:

Initial pass for human review.

Required revisions:

None identified at this stage, pending human visual review.

Recommendation:

Candidate can move to human visual selection review before any optimisation milestone.

### D. VoiceGrid Ai

Product positioning:

AI Voice System / Communication Layer.

Prompt reference:

20W5 VoiceGrid Ai final prompt.

Generation method:

Built-in image generation tool using the approved 20W5 prompt.

Candidate filename:

`voicegrid-ai-candidate-built-in-20260624-v01.png`

Candidate location:

`docs/media-intake/06-generated-product-visuals/batch-01/voicegrid-ai-candidate-built-in-20260624-v01.png`

Candidate dimensions:

1536 x 1024.

Visual quality notes:

The candidate is visually strong, with a clean central voice node, signal routing, handoff points, and support paths.

Prompt compliance notes:

Mostly compliant with the conceptual communication-layer visual.

Negative prompt compliance notes:

Initial pass. No phone numbers, transcripts, call logs, recordings, pricing, uptime, or telecom guarantee text observed.

Embedded text review:

Held for human review. The visual includes multilingual greeting labels and generic labels such as Voice, Route, Support, Review, and Handoff. These are not automatically disqualifying, but they should be reviewed so the image does not imply unsupported language coverage.

Private-data hallucination review:

Initial pass. No private data observed.

Third-party IP / resemblance review:

Initial pass. No obvious third-party logo observed.

Brand-fit review:

Strong communication-layer fit with good premium signal architecture.

Crop suitability notes:

Desktop crop is strong. 390px mobile crop should keep the central node and routing paths visible, but left-side greeting labels may be too small.

Initial pass/fail status:

Initial pass for human review.

Required revisions:

Potential regeneration if multilingual labels are considered too claim-forward.

Recommendation:

Candidate can move to human visual selection review before optimisation, with special attention to language-claim safety.

### E. DukeBox of London

Product positioning:

Creative AI Showcase.

Prompt reference:

20W5 DukeBox of London final prompt.

Generation method:

Built-in image generation tool using the approved 20W5 prompt.

Candidate filename:

`dukebox-of-london-candidate-built-in-20260624-v01.png`

Candidate location:

`docs/media-intake/06-generated-product-visuals/batch-01/dukebox-of-london-candidate-built-in-20260624-v01.png`

Candidate dimensions:

1672 x 941.

Visual quality notes:

The candidate has a strong cinematic mood, premium creative energy, and London underground-inspired composition.

Prompt compliance notes:

Partially compliant. The overall style is strong, but the visible title treatment appears as `DUKEBOX` rather than the requested `DukeBox`.

Negative prompt compliance notes:

Initial pass. No artist likeness, album cover, streaming interface, download button, or record-label mark observed.

Embedded text review:

Failed / requires review. Title casing is wrong and there is additional poster-style text that should be reviewed.

Private-data hallucination review:

Initial pass. No private data observed.

Third-party IP / resemblance review:

Held. The image should receive human rights review because music/culture visuals carry higher resemblance risk.

Brand-fit review:

Strong creative/cinematic fit, but visible text blocks production readiness.

Crop suitability notes:

Desktop crop is strong. 390px mobile crop may preserve the central artwork, but the left-side text/title could become problematic.

Initial pass/fail status:

Requires regeneration.

Required revisions:

Regenerate with no title treatment or with exact `DukeBox of London` text only if readable and correct.

Recommendation:

Do not move this candidate to optimisation review. Use as mood reference for a regenerated DukeBox candidate.

## Candidate Safety Matrix

| Product | Candidate exists? | Private-data risk | Third-party IP risk | Unsupported claim risk | Embedded text risk | Crop risk | Brand-fit risk | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | Yes. | Low observed. | Medium pending human review. | Medium due dashboard implication. | High due `WOORFLOW` typo. | Low/medium. | Low. | Requires regeneration. |
| JB³Ai Super Agent OS | Yes. | Low observed. | Medium pending human review. | Medium due outcome/scale language. | High due incorrect `JB3Ai` brand text and dense readable text. | Medium. | Low. | Requires regeneration / text correction. |
| ClipboardAi | Yes. | Low observed. | Low/medium pending human review. | Low observed. | Low observed. | Low/medium. | Low. | Initial pass for human review. |
| VoiceGrid Ai | Yes. | Low observed. | Low/medium pending human review. | Medium due multilingual cue review. | Medium. | Medium. | Low. | Initial pass for human review. |
| DukeBox of London | Yes. | Low observed. | High pending rights review. | Medium. | High due title/text issue. | Medium. | Low. | Requires regeneration. |

## Candidate Approval Matrix

Even where a candidate initially passes, registry and public card rendering remain future milestones only.

| Product | Candidate approved for optimisation review? | Candidate approved for future registry? | Candidate approved for future public card use? | Conditions | Required next step | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | No. | No. | No. | Text issue must be resolved. | Regenerate. | Use current image as style reference only. |
| JB³Ai Super Agent OS | No. | No. | No. | Incorrect `JB3Ai` brand text must be corrected to `JB³Ai`; text density and scale implication must also be reviewed. | Regenerate / text correct. | Strong structure but not production-safe yet. |
| ClipboardAi | Conditional human review only. | No. | No. | Human visual approval required. | Candidate visual review and selection. | Strongest initial pass. |
| VoiceGrid Ai | Conditional human review only. | No. | No. | Multilingual labels require claims review. | Candidate visual review and selection. | Strong visual, review language implication. |
| DukeBox of London | No. | No. | No. | Title/text and rights review must be resolved. | Regenerate. | Strong mood but visible text blocks readiness. |

## Candidate Intake Metadata

| Product | Candidate filename | Source tool / method | Prompt version | Date generated or supplied | Current location | Tracked or untracked? | Review status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | `os3-dash-candidate-built-in-20260624-v01.png` | Built-in image generation tool. | 20W5 final prompt. | 2026-06-24 | `docs/media-intake/06-generated-product-visuals/batch-01/` | Untracked. | Requires regeneration. | Text typo. |
| JB³Ai Super Agent OS | `jb3ai-super-agent-os-candidate-built-in-20260624-v01.png` | Built-in image generation tool. | 20W5 final prompt. | 2026-06-24 | `docs/media-intake/06-generated-product-visuals/batch-01/` | Untracked. | Requires regeneration / text correction. | Incorrect `JB3Ai` brand text, dense text, and scale wording risk. |
| ClipboardAi | `clipboard-ai-candidate-built-in-20260624-v01.png` | Built-in image generation tool. | 20W5 final prompt. | 2026-06-24 | `docs/media-intake/06-generated-product-visuals/batch-01/` | Untracked. | Initial pass for human review. | Clean generic workspace. |
| VoiceGrid Ai | `voicegrid-ai-candidate-built-in-20260624-v01.png` | Built-in image generation tool. | 20W5 final prompt. | 2026-06-24 | `docs/media-intake/06-generated-product-visuals/batch-01/` | Untracked. | Initial pass for human review. | Language cue review required. |
| DukeBox of London | `dukebox-of-london-candidate-built-in-20260624-v01.png` | Built-in image generation tool. | 20W5 final prompt. | 2026-06-24 | `docs/media-intake/06-generated-product-visuals/batch-01/` | Untracked. | Requires regeneration. | Title/text issue. |

## Filename and Registry Future Plan

`assetRegistry.ts` must not be changed in 20X3.

| Product | Future production filename | Future registry key | Future public path | Candidate source exists? | Candidate ready for optimisation review? | Registry readiness | Requires future milestone? |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | `os3-dash-command-dashboard.webp` | `os3DashCommandDashboard` | `/assets/images/os3-dash-command-dashboard.webp` | Yes, intake candidate. | No. | Not ready. | Yes. |
| JB³Ai Super Agent OS | `jb3ai-super-agent-os-architecture.webp` | `jb3aiSuperAgentOsArchitecture` | `/assets/images/jb3ai-super-agent-os-architecture.webp` | Yes, intake candidate. | No. | Not ready. | Yes. |
| ClipboardAi | `clipboard-ai-private-workspace.webp` | `clipboardAiPrivateWorkspace` | `/assets/images/clipboard-ai-private-workspace.webp` | Yes, intake candidate. | Conditional human review. | Not ready. | Yes. |
| VoiceGrid Ai | `voicegrid-ai-communication-layer.webp` | `voicegridAiCommunicationLayer` | `/assets/images/voicegrid-ai-communication-layer.webp` | Yes, intake candidate. | Conditional human review. | Not ready. | Yes. |
| DukeBox of London | `dukebox-of-london-creative-showcase.webp` | `dukeboxOfLondonCreativeShowcase` | `/assets/images/dukebox-of-london-creative-showcase.webp` | Yes, intake candidate. | No. | Not ready. | Yes. |

## Alt Text Review

| Product | Proposed alt text from 20W5 | Candidate matches alt text? | Alt text changes needed? | Safety notes | Decision |
| --- | --- | --- | --- | --- | --- |
| OS³ Dash | OS³ Dash command dashboard concept showing structured workflow visibility. | Mostly, but text typo blocks readiness. | No change proposed. | Alt text remains safe. | Hold until regenerated. |
| JB³Ai Super Agent OS | JB³Ai Super Agent OS architecture concept showing coordinated specialist workflows. | Yes conceptually. | No change proposed. | Alt text remains safe, candidate brand text does not. | Hold pending regeneration / text correction. |
| ClipboardAi | ClipboardAi private workspace concept for structured communication and document coordination. | Yes. | No change proposed. | Alt text remains safe. | Initial pass for human review. |
| VoiceGrid Ai | VoiceGrid Ai communication layer concept for voice workflows and support routing. | Yes. | No change proposed. | Alt text remains safe; visual language labels need review. | Initial pass for human review. |
| DukeBox of London | DukeBox of London creative showcase artwork inspired by generative music and culture. | Partially. | No change proposed. | Alt text is correct, but candidate title treatment is not. | Hold until regenerated. |

## Crop and Format Review

| Product | Candidate dimensions | Target aspect ratio | Desktop crop pass/fail | 390px mobile crop pass/fail | Safe focal area | Crop issues | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | 1568 x 1003 | 16:10 preferred, 4:3 acceptable. | Pass visually. | Conditional. | Central workflow/dashboard plate. | Text typo visible. | Hold. |
| JB³Ai Super Agent OS | 1536 x 1024 | 16:10 or 3:2. | Pass visually. | Conditional/fail risk due text density and brand-text failure. | Adam command layer and workflow groups. | Main title uses `JB3Ai` instead of `JB³Ai`; too much readable text. | Hold. |
| ClipboardAi | 1568 x 1003 | 16:10. | Pass. | Likely pass. | Central document cards and action lane. | None blocking. | Human review. |
| VoiceGrid Ai | 1536 x 1024 | 16:10 or 4:3. | Pass. | Conditional. | Central voice node and routing paths. | Left-side language labels may be small/claim-forward. | Human review. |
| DukeBox of London | 1672 x 941 | 16:9 or 3:2. | Pass visually. | Conditional. | Central abstract sound/culture artwork. | Title/text issue. | Hold. |

## Human Review Checklist

For each candidate before any optimisation review:

- Visual matches approved 20W5 prompt.
- Negative prompt risks avoided.
- No private data.
- No third-party IP issue.
- No unsupported claims.
- No sensitive personal/legal/family/court/evidence/financial material.
- No current iMED operating implication.
- No GTR3 arrival or ownership claim.
- No IsikoloAI support/NPO/tax-deductible implication.
- No embedded text errors.
- Filename still appropriate.
- Registry key still appropriate.
- Alt text still appropriate.
- Desktop crop suitable.
- 390px mobile crop suitable.
- Brand fit acceptable.
- Human approval complete.

## GTR3 / IsikoloAI / Ndebele Candidate Separation Note

Any GTR3, IsikoloAI, or Ndebele-style visuals supplied during this phase remain separate campaign-intake candidates.

They must not be mixed into Batch 01 product-card assets unless a later dedicated milestone explicitly approves them.

## Recommended Next Milestone

Preferred recommendation:

20X4 Batch 01 Candidate Regeneration Pass.

Reason:

All five candidate images were generated, but OS³ Dash and DukeBox of London require regeneration due embedded text/title issues, while JB³Ai Super Agent OS requires regeneration / text correction because the main title uses `JB3Ai` instead of `JB³Ai`, alongside text density and possible scale implication. ClipboardAi and VoiceGrid Ai are the strongest initial candidates but still need human visual review before any optimisation milestone.

Do not recommend direct optimisation, registry, public export, or UI rendering yet.

| Option | Milestone | Use when | 20X3 recommendation |
| --- | --- | --- | --- |
| A | 20Y Batch 01 Candidate Visual Review and Selection | All five candidates pass initial review. | Not yet. |
| B | 20X4 Batch 01 Candidate Regeneration Pass | Some candidates fail or need cleaner variants. | Preferred. |
| C | 20Y-A OS³ Dash and Super Agent OS Optimisation Review | Flagship candidates pass and are ready first. | Not ready. |
| D | 20Y-B ClipboardAi VoiceGrid DukeBox Regeneration Review | Split by readiness after human review. | Possible after review. |

## Not Integrated Yet

- No OS³ Dash card added.
- No Super Agent OS card added.
- No ClipboardAi card added.
- No VoiceGrid Ai card added.
- No DukeBox of London card added.
- No full portfolio section added.
- No IsikoloAI card changes.
- No Sponsor Isikolo changes.
- No payment/contact/social changes.
- No route/app ID changes.
- No `/os` changes.
- No `assetRegistry.ts` changes.
- No public assets added.
- No production images optimised.
- No WebP exports.
- No PDFs linked or committed.
- No videos published.
- No production rendering performed.

## Safety Confirmations

- Candidate-generation review only.
- Public/private split preserved.
- `docs/media-intake` remains private by default.
- No production assets created.
- No public files added.
- No intake PDFs published.
- No sensitive private/family/legal/court/evidence/financial material used.
- No unsupported claims approved.
- No UI changes.
- No `assetRegistry.ts` changes.
- All future optimisation, registry, and rendering remains subject to separate milestones.

## Build Result

`npm run build` passed in 20X3.

Build output:

- 391 modules transformed.
- CSS bundle: `dist/assets/index-D97kMKzg.css`.
- JS bundle: `dist/assets/index-CCMkhx6U.js`.
- Vite CJS Node API deprecation warning remains non-blocking.

## 20X3 Decision

20X3 is complete when the Batch 01 candidate image generation document is reviewed and merged.

No production assets should be optimised, registered, moved into `public/`, or rendered until a later milestone reviews and approves exact candidates under a defined implementation scope.
