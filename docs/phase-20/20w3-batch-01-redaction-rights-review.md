# Phase 20W3: Batch 01 Redaction and Rights Review

## Review Status

Drafted in 20W3.

Docs-only redaction and rights review.

No image optimisation performed.

No public files added.

No `assetRegistry.ts` changes.

No UI integration.

No visible cards added.

Pending human review.

## Purpose

20W3 defines the redaction, rights clearance, claim-control, and replacement requirements for Batch 01 candidate assets before any future optimisation, registry edit, public-file creation, or product-card rendering.

The milestone exists to keep the Batch 01 portfolio pipeline controlled. Candidate materials may be useful, but they remain intake-only until the visible text, ownership, private-data exposure, public claims, and crop behaviour are reviewed under a dedicated approval gate.

## Integration Rule

20W3 does not create, optimise, export, register, publish, move, rename, or render assets.

20W3 only reviews risks and defines the controls required before later implementation.

No source asset becomes public because of this document.

## Current Public Baseline

| Baseline item | Current state | 20W3 control |
| --- | --- | --- |
| IsikoloAI | Remains the only visible public app card from 20S. | Do not change the card, image, CTA, copy, support flow, or placement. |
| Batch 01 copy | Approved in 20U. | Use as the copy baseline only; do not render new cards. |
| Batch 01 asset readiness | Reviewed in 20V. | Use the asset inventory as intake-only source context. |
| Batch 01 visual/registry planning | Drafted in 20W. | Use proposed filenames, registry keys, alt text, and crop guidance as planning context only. |
| Batch 01 source approval gate | Drafted in 20W2. | Use the held decisions as the starting point for redaction and rights review. |
| Additional product cards | No additional product cards are rendered yet. | Do not render OS3 Dash, Super Agent OS, ClipboardAi, VoiceGrid Ai, or DukeBox of London. |
| Held source candidates | All remain intake-only unless a future milestone approves public-file creation. | Do not move, copy, optimise, publish, register, link, or stage source assets. |

## 20W2 Decision Summary

| Product | 20W2 decision | Main reason | Redaction required? | Rights review required? | Replacement visual required? | 20W3 review focus |
| --- | --- | --- | --- | --- | --- | --- |
| OS3 Dash | Hold for human review. | Dashboard visuals may expose private OS, client, project, credential, or operational data. | Yes | Possible | Possible | Confirm whether any page can be safely redacted, or whether a staged mockup is safer. |
| JB3Ai Super Agent OS | Hold for human review. | Architecture visual may be useful, but agent roster and workflow details need safety review. | Yes | Possible | Possible | Keep only high-level managed-workforce architecture; remove private workflows and overclaims. |
| ClipboardAi | Purpose-made public-safe visual required. | No dedicated ClipboardAi source asset was found. | Not applicable until a source exists | Possible for future source | Yes | Define a safe abstract/staged visual brief. |
| VoiceGrid Ai | Hold for human/legal review. | VoiceGrid visuals can expose phone, transcript, telecom, infrastructure, pricing, or language-claim risks. | Yes | Yes | Possible | Prefer simplified communication-layer visual; reject raw manual pages. |
| DukeBox of London | Hold for rights review. | Music/culture visuals require ownership, visible text, brand, and copyright review. | Possible | Yes | Possible | Confirm whether `dukebox bb.png` is owned/rights-clear and text-safe. |

## Redaction Review Matrix

| Product | Candidate asset type | Sensitive content risk | Required redaction | Severity | Can be made public after redaction? | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| OS3 Dash | PDF/dashboard visuals | Private dashboard data, client/business data, names, emails, calendar, notes, Gmail, Drive, legal, financial, credentials, API keys, repository secrets, and private workflow labels. | Remove or replace all real/private text, figures, identifiers, access routes, and system labels with generic public-safe placeholders. | High | Conditional | If redaction leaves a broken or fake-looking asset, create a purpose-made visual instead. |
| JB3Ai Super Agent OS | PDF architecture/agent visuals | Private workflow labels, legal/finance/client task data, internal prompts, sensitive agent responsibilities, and unsupported automation wording. | Remove private task labels, specific operational workflows, legal/finance detail, and any text implying final autonomous decisions. | Medium-high | Conditional | High-level architecture can be public-safe if kept conceptual and human-led. |
| ClipboardAi | Future workspace visual | Private chat, documents, names, emails, file names, attachments, document previews, workspace metadata, and unsupported security/encryption wording. | Use only staged or abstract content; never show real messages, documents, client files, or personal data. | High | Not from current assets | No current source asset exists; redaction plan applies to future supplied assets. |
| VoiceGrid Ai | PDF/manual/communication visuals | Phone numbers, recordings, transcripts, call logs, customer data, telecom implementation detail, pricing, uptime, language-count, and security claims. | Remove all phone/call data, transcripts, implementation detail, client context, and quantified service guarantees. | High | Conditional but difficult | Simplified diagram or purpose-made visual is safer than raw manual extraction. |
| DukeBox of London | PNG creative visuals | Third-party logos, artist likeness, album-art resemblance, embedded text, brand references, and streaming/download/distribution implication. | Remove or reject third-party marks, rights-sensitive imagery, unsupported copy, and any public availability implication. | Medium-high | Conditional | Rights clearance matters more than classic redaction for this product. |

## Rights Review Matrix

| Product | Candidate asset type | Rights concern | Ownership status | Clearance required | Risk level | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| OS3 Dash | Dashboard/PDF visuals | Third-party UI elements, client data, external product screenshots, and possible generated imagery with embedded text. | Not confirmed for public use. | Confirm all visible UI/content is owned, staged, or redacted; remove third-party logos unless intentionally allowed. | Medium | Hold until exact page and redaction proof are approved. |
| JB3Ai Super Agent OS | Architecture/PDF visuals | Generated diagrams or embedded text may include unclear source material or private internal design. | Not confirmed for public use. | Confirm source ownership and ensure no third-party logos or private operational details remain. | Medium | Proceed only with high-level, owned, architecture-level visual. |
| ClipboardAi | Future staged visual | Real screenshots may contain external app UI, user content, or private workspace data. | No current asset. | Create owned/staged visual or verify supplied source rights. | Medium-high | Purpose-made visual required before optimisation. |
| VoiceGrid Ai | Infrastructure PDFs/manual visuals | Telecom/platform references, external product screenshots, stock imagery, and infrastructure diagrams may not be suitable for public extraction. | Not confirmed for public use. | Confirm owned source, remove third-party marks, and avoid publishing manual content directly. | High | Hold; prefer purpose-made communication-layer visual. |
| DukeBox of London | PNG creative visuals | Music/copyright-sensitive visuals, third-party artist/album/brand imagery, generated images with unclear rights, and embedded text. | Not confirmed for public use. | Confirm source ownership, generated-image rights, no protected artist/album/brand resemblance, and visible text safety. | High | Hold until rights review passes; create replacement if uncertain. |

## Claims Review Matrix

| Product | Visual or text claim risk | Unsupported implication | Required wording/visual control | Decision |
| --- | --- | --- | --- | --- |
| OS3 Dash | Dashboard maturity, deployment scale, integrations, security posture, and operational control. | Could imply a mature public SaaS, enterprise deployment, or current private OS exposure. | Use concept/staged dashboard language; avoid scale, client, uptime, security, and current deployment claims unless separately verified. | Hold for redaction and claim review. |
| JB3Ai Super Agent OS | Agent autonomy, legal/finance execution, staff replacement, and command authority. | Could imply autonomous agents make final decisions or replace human staff. | Use managed AI workforce architecture and human-led routing language; avoid autonomous replacement claims. | Conditional after high-level rewrite/visual control. |
| ClipboardAi | Privacy, security, encryption, document access, and workspace control. | Could imply verified encryption/security features or private-data handling guarantees. | Avoid encryption/security guarantees unless implemented and verified; show generic staged workspace only. | Purpose-made visual required. |
| VoiceGrid Ai | Telecom, voice, transcript, multilingual, uptime, pricing, routing, and call-centre infrastructure claims. | Could imply live telecom service, guaranteed language coverage, call recording, or production infrastructure. | Use communication-layer concept language; avoid phone, transcript, uptime, language-count, pricing, and security guarantees. | Hold for legal/privacy review. |
| DukeBox of London | Streaming, download, catalog, artist, release, licensing, and public availability implication. | Could imply a live music platform, rights-cleared catalog, or distribution capability. | Use creative showcase / concept language only; avoid streaming, downloads, catalog, artist names, and public release claims. | Hold for rights review. |
| All Batch 01 products | GTR3 arrival or ownership claims. | Could imply GTR3 exists or has been obtained. | Keep GTR3 symbolic/aspirational unless separately approved. | Not approved in 20W3. |
| All Batch 01 products | iMED active operational claims. | Could imply iMED currently operates or offers services. | Keep iMED historical only. | Not approved in 20W3. |
| All Batch 01 products | Awards, licensing, accreditation, school, government, or institutional endorsement claims. | Could imply formal recognition, adoption, or approval without source proof. | Remove visible claims unless separately reviewed and approved. | Not approved in 20W3. |

## Product-by-Product Redaction and Rights Review

### A. OS3 Dash

Candidate asset category reviewed:

OS3 Dash PDFs, dashboard/cutsheet visuals, and possible command-dashboard source material identified in 20V, 20W, and 20W2.

Redaction findings:

OS3 Dash is the highest private-boundary risk in Batch 01 because dashboard visuals can expose private OS workflows, client data, operational labels, calendar/notes/email material, financial records, credentials, repository secrets, private routes, and backend/system structure.

Rights findings:

Public rights are not confirmed for any extracted OS3 PDF/dashboard visual. Any external UI, third-party logos, stock imagery, generated text, or client context must be removed or verified.

Claims findings:

The visual must not imply a mature enterprise SaaS, active client deployment, live integrations, security posture, or current operational scale unless those claims are separately approved.

Public suitability after controls:

Conditional. OS3 Dash can progress only if a clean conceptual dashboard or heavily redacted/staged visual is approved.

Required cleanup before optimisation:

- Select one exact page or create a staged mockup.
- Review visible text at 100 percent zoom.
- Remove private data, names, emails, numbers, routes, task titles, project labels, credentials, and financial/legal/family/court/evidence references.
- Replace real labels with generic concepts such as priorities, approvals, workflows, and signals.

Whether asset can progress to future optimisation:

Not yet. It can progress only after exact source selection and redaction proof.

Whether purpose-made visual is safer:

Yes. A purpose-made command-dashboard concept is likely safer than raw dashboard extraction.

Future milestone recommendation:

Send OS3 Dash to 20W4 Purpose-Made Visual Briefs unless a human-approved redacted page is selected first.

### B. JB3Ai Super Agent OS

Candidate asset category reviewed:

Super Agent PDFs and architecture/agent-workforce diagrams identified in 20V, 20W, and 20W2.

Redaction findings:

The safest public asset is an architecture-level visual. Detailed agent rosters, private workflows, legal/finance tasking, internal prompts, client contexts, and operational details should be removed.

Rights findings:

Ownership and public-use rights need confirmation for any extracted PDF diagram. Third-party logos or generated visual elements with unclear rights should be removed.

Claims findings:

The visual must not imply autonomous final decision-making, staff replacement, legal/finance authority, or unsupported enterprise automation.

Public suitability after controls:

Conditional and promising. Super Agent OS may be the strongest architecture candidate if reduced to managed AI workforce structure with human oversight.

Required cleanup before optimisation:

- Select one architecture-level visual only.
- Remove private workflow labels and sensitive department details.
- Keep Adam as command layer only if framed as routing/coordination, not autonomous authority.
- Avoid chatbot-directory presentation.

Whether asset can progress to future optimisation:

Possibly, after exact visual selection and text cleanup.

Whether purpose-made visual is safer:

Possibly. If the PDF diagram is dense or private, create a cleaner architecture plate.

Future milestone recommendation:

Either include in 20X-A OS3 Dash and Super Agent OS Visual Optimisation Pass if exact visual is approved, or route to 20W4 for a purpose-made architecture brief.

### C. ClipboardAi

Candidate asset category reviewed:

No dedicated ClipboardAi source asset was found in prior filename review. 20W2 already selected no source asset.

Redaction findings:

Any real screenshot would be high-risk because ClipboardAi naturally touches messages, documents, files, names, emails, attachments, workspace metadata, and client context.

Rights findings:

No rights review can be completed until a source visual exists. Real screenshots may also include third-party app UI or user-generated content.

Claims findings:

Avoid privacy, encryption, security, retention, or compliance guarantees unless the implementation is verified and approved.

Public suitability after controls:

No current asset is suitable. A purpose-made public-safe visual is required.

Required cleanup before optimisation:

- Create staged document cards with generic placeholder text.
- Avoid real screenshots.
- Avoid names, emails, messages, file names, document previews, and attachments.
- Keep copy to structured communication and document coordination.

Whether asset can progress to future optimisation:

No. There is no source asset to optimise.

Whether purpose-made visual is safer:

Yes. Purpose-made visual is required.

Future milestone recommendation:

Send ClipboardAi to 20W4 Purpose-Made Visual Briefs for Batch 01.

### D. VoiceGrid Ai

Candidate asset category reviewed:

VoiceGrid PDFs, call-centre infrastructure documents, sovereign VoiceGrid manuals, and possible communication-layer diagrams identified in 20V, 20W, and 20W2.

Redaction findings:

VoiceGrid candidates are high-risk if they expose phone numbers, call scripts, recordings, transcripts, customer/client data, telecom implementation detail, pricing, uptime, security, or language-count claims.

Rights findings:

Public rights are not confirmed for manual pages, infrastructure diagrams, platform references, or external/stock elements. Raw manuals should not become public resources in this milestone lane.

Claims findings:

The visual must not imply live telecom infrastructure, guaranteed language coverage, call recording/transcription features, pricing, uptime, or security posture unless separately verified.

Public suitability after controls:

Conditional but likely safer as a purpose-made diagram than direct PDF extraction.

Required cleanup before optimisation:

- Select only a simplified communication-layer or routing visual.
- Remove phone, transcript, call, customer, pricing, uptime, language-count, security, and telecom implementation detail.
- Avoid manual-page screenshots with dense infrastructure text.

Whether asset can progress to future optimisation:

Not yet. Needs human/legal review and exact visual selection.

Whether purpose-made visual is safer:

Yes. A simplified owned communication-layer graphic is likely safer.

Future milestone recommendation:

Send VoiceGrid Ai to 20W4 Purpose-Made Visual Briefs unless a clean simplified visual is selected.

### E. DukeBox of London

Candidate asset category reviewed:

PNG creative visuals: `dukebox bb.png` and `dukebox.png`.

Redaction findings:

Redaction needs depend on visible text, brand marks, artist/album resemblance, and any public availability wording. If the visual contains embedded text that implies streaming, download, catalog, or release, it must be removed or rejected.

Rights findings:

DukeBox has the highest copyright/style risk because it is music/culture-adjacent. Ownership, generated-image provenance, third-party artist/album/brand resemblance, and commercial-public-use rights must be confirmed.

Claims findings:

The visual must not imply live streaming, downloads, catalog access, artist licensing, public release, or distribution.

Public suitability after controls:

Conditional. DukeBox remains a strong visual candidate if rights and visible text pass review.

Required cleanup before optimisation:

- Confirm ownership/source rights.
- Review all visible text and marks.
- Confirm no protected artist/album/brand resemblance.
- Approve desktop and 390px mobile crop.
- Keep positioning as creative showcase / concept, not live music service.

Whether asset can progress to future optimisation:

Possibly, after rights and crop approval.

Whether purpose-made visual is safer:

Possibly. If rights are uncertain, create owned replacement artwork.

Future milestone recommendation:

Route to 20W4 if rights are uncertain; otherwise include in a focused 20X optimisation pass after approval.

## Public-Safe Path Decision

| Product | Safest visual path | Reason | Ready for optimisation? | Requires new visual? | Future milestone |
| --- | --- | --- | --- | --- | --- |
| OS3 Dash | Proceed with purpose-made visual or exact redacted/staged dashboard. | Private OS/dashboard exposure risk is high. | No | Likely | 20W4 Purpose-Made Visual Briefs or 20X-A only after redaction approval |
| JB3Ai Super Agent OS | Proceed after redaction if a high-level architecture visual is approved. | Architecture route is promising but must avoid private workflows and autonomy overclaims. | Not yet | Possibly | 20X-A if approved, otherwise 20W4 |
| ClipboardAi | Proceed with purpose-made visual. | No dedicated source asset exists and real screenshots are privacy-risky. | No | Yes | 20W4 |
| VoiceGrid Ai | Proceed with purpose-made visual or simplified redacted diagram. | Raw manuals carry telecom/privacy/claims risk. | No | Likely | 20W4 |
| DukeBox of London | Proceed after rights clearance if `dukebox bb.png` passes; otherwise replacement visual. | Strong candidate, but music/culture rights must be clean. | Not yet | Possibly | 20W4 or later focused optimisation pass |

## Purpose-Made Visual Requirements

| Product | Visual concept | Must include | Must avoid | Suggested style | Approval requirement |
| --- | --- | --- | --- | --- | --- |
| ClipboardAi | Structured private workspace concept with staged document and communication cards. | Generic document blocks, action list, workflow signals, non-real placeholder labels. | Real messages, emails, names, file names, attachments, private documents, security guarantees. | Premium founder OS, calm steel panels, low-glow interface abstraction. | Human review of text, privacy, crop, and public copy alignment. |
| VoiceGrid Ai | Simplified communication-layer / voice-routing diagram. | Signal path, routing nodes, support handoff, multilingual concept without quantified claims. | Phone numbers, transcripts, recordings, telecom diagrams, uptime, pricing, language-count guarantees. | Restrained signal architecture, no surveillance or call-centre clutter. | Human/legal review of claims and rights before optimisation. |
| DukeBox of London | Owned creative showcase artwork if current PNG rights are uncertain. | DukeBox identity, London creative energy, experimental music/culture tone. | Artist likeness, album-art resemblance, third-party marks, streaming/download/catalog implications. | Editorial creative plate, not a platform screenshot. | Ownership, rights, visible text, and crop approval. |
| OS3 Dash | Staged command-dashboard concept if source dashboards are unsafe. | Generic priorities, approvals, signals, workflow panels, structured command feel. | Real private data, routes, credentials, client names, legal/financial/family/court/evidence content. | Premium command architecture, sharp panels, restrained glow. | Human redaction and private-boundary approval. |
| JB3Ai Super Agent OS | Architecture plate if source PDF is too dense. | Adam command layer, specialist workflow groups, approval routing, human oversight. | Chatbot directory, autonomous replacement language, legal/finance authority claims, private workflow labels. | Luxury intelligence architecture, editorial systems map. | Human review of agent claims and public/private boundary. |

## Approved Control Language

- Use conceptual visuals where screenshots are risky.
- Use redacted or staged screenshots only.
- Avoid private data.
- Avoid client data.
- Avoid unsupported claims.
- Avoid current iMED implication.
- Avoid GTR3 arrival claim.
- Avoid music, streaming, download, catalog, or distribution implication for DukeBox.
- Avoid encryption/security guarantees unless implemented and verified.
- Avoid autonomous replacement language for Super Agent OS.
- Avoid telecom, uptime, pricing, transcript, recording, or language-count guarantees for VoiceGrid Ai.
- Avoid school, government, institutional, licensing, accreditation, or adoption claims unless separately sourced and approved.

## Recommended Next Milestone

Preferred recommendation:

20W4 Purpose-Made Visual Briefs for Batch 01.

Reason:

Existing assets remain unresolved. OS3 Dash, ClipboardAi, VoiceGrid Ai, and possibly DukeBox of London are safer if routed into purpose-made visual briefs before optimisation. JB3Ai Super Agent OS may be able to proceed from source if a clean architecture-level visual is selected, but that approval is not complete in 20W3.

Secondary option:

20X-A OS3 Dash and Super Agent OS Visual Optimisation Pass.

Use only if human review approves exact OS3 Dash and Super Agent OS visuals after redaction planning.

Options:

| Option | Milestone | Use when | 20W3 recommendation |
| --- | --- | --- | --- |
| A | 20X Batch 01 Visual Optimisation and Registry Implementation | All exact assets are approved and controls are complete. | Not recommended yet. |
| B | 20W4 Purpose-Made Visual Briefs for Batch 01 | Existing assets remain unresolved or safer visual replacement is needed. | Preferred. |
| C | 20X-A OS3 Dash and Super Agent OS Visual Optimisation Pass | Exact OS3/Super Agent visuals pass human redaction and rights review. | Conditional only. |
| D | 20W4 DukeBox / Clipboard / VoiceGrid Visual Replacement Briefs | Only selected products require replacement visuals. | Acceptable split if OS3/Super Agent proceed separately. |

## Founder Master Profile Note

The resurfaced Founder Master Profile / Systems Online copy candidate remains outside 20W3.

It remains intake-only and should be handled later under a dedicated public copy review milestone, recommended as:

20Y Founder Master Profile Public Copy Review.

## Not Integrated Yet

- No OS3 Dash card added.
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
- No images optimised.
- No WebP exports.
- No PDFs linked or committed.
- No videos published.
- No raw media staged.

## Safety Confirmations

- Docs-only milestone.
- Redaction and rights review only.
- Public/private split preserved.
- `docs/media-intake` remains private by default.
- No raw media staged.
- No intake PDFs published.
- No sensitive private/family/legal/court/evidence/financial material used.
- No unsupported claims approved.
- No UI changes.
- No asset movement.
- No `assetRegistry.ts` changes.
- All assets remain subject to final implementation review before public rendering.
- No active iMED operational claims.
- No GTR3 arrival claim.
- No unsupported awards, licensing, school, government, or adoption claims.

## Build Result

`npm run build` passed in 20W3.

Build output:

- 391 modules transformed.
- CSS bundle: `dist/assets/index-D97kMKzg.css`.
- JS bundle: `dist/assets/index-CCMkhx6U.js`.
- Vite CJS Node API deprecation warning remains non-blocking.

## 20W3 Decision

20W3 is complete when the Batch 01 redaction and rights review document is reviewed and merged.

No assets should be optimised, registered, moved, published, or rendered until a later milestone executes the approved controls under a defined implementation scope.
