# Milestone 23A: Product Cut Sheet Resource Integration Plan

## Status

Drafted for review.

## Purpose

23A creates the governance plan for product cut sheet resources currently parked in private intake.

This is a planning milestone only. No product cut sheet is public, staged, moved, renamed, compressed, linked, or integrated in 23A.

## Current Intake Location

Private intake location:

```text
docs/media-intake/09-product-cutsheets/
```

Current rule:

- This folder remains intake-only.
- Files in this folder are not public website resources.
- Files in this folder must not be linked from the homepage, product cards, resource library, public routes, or `/os` until a later milestone approves each exact file.

## Observed Folder / File Inventory

Inspection method:

- Folder and filenames were inspected only.
- File contents were not opened.
- Files were not moved, renamed, compressed, staged, or modified.

Observed folder structure:

- No subfolders observed under `docs/media-intake/09-product-cutsheets/`.

Observed files:

| Intake file | Size | Initial classification | Notes |
| --- | ---: | --- | --- |
| `OS³ Core ClipbaordAi.pdf` | 1,721,755 bytes | Public-ready candidate after review | Filename appears to contain a typo: `ClipbaordAi`. Needs review and future rename before public use. |
| `OS³ Core InvestigatorAidf.pdf` | 1,436,569 bytes | Hold / review candidate | Filename appears to contain a typo or suffix issue: `InvestigatorAidf`. Investigation/forensic positioning needs claims and safety review. |
| `OS³ Core IsikoloAi.pdf` | 1,902,025 bytes | Public-ready candidate after review | Candidate for IsikoloAI resource use if learner/support claims, screenshots, and public wording pass review. |
| `OS³ Core NewsroomAi.pdf` | 907,277 bytes | Hold / review candidate | Intelligence/newsroom framing needs claims, source, and public/private boundary review. |
| `OS³ Core The DukeBox of London.pdf` | 1,590,606 bytes | Hold / review candidate | Music/media positioning and any title/rights references need review before public use. |
| `OS³ CoreVoiceGridAi .pdf` | 1,065,315 bytes | Hold / review candidate | Filename has spacing issue. Telecom/voice infrastructure material needs claims, compliance, and safety review. |

Not observed in this intake folder:

- OS³ Dash cutsheet.
- JB³Ai Super Agent OS cutsheet.
- ViewGrid cutsheet.
- Standalone forensic/intelligence cutsheet in this `09-product-cutsheets/` folder.

## Proposed Cut Sheet Classification Table

| Product / resource | Observed intake file | Proposed classification | Required review before public use | Future public surface |
| --- | --- | --- | --- | --- |
| IsikoloAI | `OS³ Core IsikoloAi.pdf` | Public-ready candidate after review | Education claims, free-access wording, learner safety, third-party names/logos, app screenshots, support CTA alignment | IsikoloAI app card, Resource Library education grouping, Sponsor Isikolo support context |
| ClipboardAi | `OS³ Core ClipbaordAi.pdf` | Public-ready candidate after review | Filename typo, privacy/security language, collaboration claims, screenshot/content sensitivity | ClipboardAi app card, Product Architecture resource link |
| OS³ Dash | Not observed | Missing / future candidate | Confirm whether a cutsheet exists elsewhere, then review as a separate exact asset | OS³ Dash card, Founder Platform / Product Architecture resource link |
| JB³Ai Super Agent OS | Not observed | Missing / future candidate | Confirm whether a cutsheet exists elsewhere, then review managed AI workforce claims and agent roster public/private split | JB³Ai Super Agent OS card, architecture/resource link |
| VoiceGrid Ai | `OS³ CoreVoiceGridAi .pdf` | Hold / review candidate | Telecom/voice claims, infrastructure language, compliance language, any operational or sovereign terminology | Future product card/resource only after dedicated review |
| DukeBox of London | `OS³ Core The DukeBox of London.pdf` | Hold / review candidate | Music/media rights, title treatment, claims, visible brand/landmark/style references | Future creative/media product resource only after dedicated review |
| InvestigatorAi | `OS³ Core InvestigatorAidf.pdf` | Hold / review candidate | Investigation/forensic claims, legal/safety language, surveillance implications, public/private boundary | Future forensic/intelligence product resource only after dedicated review |
| NewsroomAi | `OS³ Core NewsroomAi.pdf` | Hold / review candidate | Intelligence/newsroom claims, source reliability framing, public/private boundary, misinformation safety | Future product/resource only after dedicated review |
| ViewGrid | Not observed | Missing / future candidate | Confirm source asset and review satellite/intelligence claims before any public use | Future product/resource only after dedicated review |

## Public-Ready Candidates

No file is approved for public integration in 23A.

Candidate set for first public review:

- IsikoloAI
- ClipboardAi

Possible but missing from this intake folder:

- OS³ Dash
- JB³Ai Super Agent OS

These should only become public-ready candidates if exact cut sheet source files are located and reviewed in a later milestone.

## Hold / Review Candidates

Hold for dedicated review:

- VoiceGrid Ai
- DukeBox of London
- InvestigatorAi
- NewsroomAi

Reasons:

- Claims and compliance risk.
- Possible rights/name/style review.
- Intelligence, investigation, telecom, newsroom, or creative/media sensitivity.
- Need to keep public profile website separate from private OS or internal operating claims.

## Internal / Private-Only Candidates

No file is permanently classified as internal/private-only in 23A based on filename inspection alone.

However, any cut sheet must be treated as internal/private-only until it passes:

- Public copy review.
- Claims review.
- Rights/logo review.
- Filename review.
- Destination-path approval.
- Explicit integration milestone approval.

## Recommended Public Destination Path

Future approved cut sheets should live under a public PDF path only after review:

```text
public/assets/pdfs/product-cutsheets/
```

Alternative if the existing resource-library convention should remain flat:

```text
public/assets/pdfs/
```

Recommendation:

- Use `public/assets/pdfs/product-cutsheets/` for future product cut sheets if the resource system supports nested paths cleanly.
- If nested paths create routing or build complexity, use flat `public/assets/pdfs/` with product-specific filenames.

No destination folder is created in 23A.

## Recommended Filename Standard

Use lowercase, URL-safe filenames:

```text
<product-slug>-product-cutsheet.pdf
```

Recommended future filenames:

| Product | Future public filename |
| --- | --- |
| IsikoloAI | `isikoloai-product-cutsheet.pdf` |
| ClipboardAi | `clipboardai-product-cutsheet.pdf` |
| OS³ Dash | `os3-dash-product-cutsheet.pdf` |
| JB³Ai Super Agent OS | `jb3ai-super-agent-os-product-cutsheet.pdf` |
| VoiceGrid Ai | `voicegrid-ai-product-cutsheet.pdf` |
| DukeBox of London | `dukebox-of-london-product-cutsheet.pdf` |
| InvestigatorAi | `investigatorai-product-cutsheet.pdf` |
| NewsroomAi | `newsroomai-product-cutsheet.pdf` |
| ViewGrid | `viewgrid-ai-product-cutsheet.pdf` |

Technical filename note:

- Use plain `jb3ai` and `os3` in filenames because superscript characters are not ideal for URLs or file paths.
- Brand-facing display copy must use `JB³Ai` and `OS³`.

## Product-Card / Resource-Link Mapping

| Public surface | Product | Future cut sheet action |
| --- | --- | --- |
| IsikoloAI app/resource card | IsikoloAI | Add a public resource link only after the IsikoloAI cutsheet passes review and is moved to the approved public path. |
| Product Architecture card | OS³ Dash | Add only after a source cutsheet is located, reviewed, renamed, and approved. |
| Product Architecture card | JB³Ai Super Agent OS | Add only after a source cutsheet is located, reviewed, renamed, and approved. |
| Product Architecture card | ClipboardAi | Candidate for first product-card resource link after typo, claims, and privacy review. |
| Resource Library | Public-ready product cut sheets | Add a `Product Cut Sheets` grouping after approved files are published. |
| Future portfolio pages | VoiceGrid Ai / DukeBox / InvestigatorAi / NewsroomAi / ViewGrid | Keep held until dedicated public copy, rights, claims, and visual review milestones approve each product. |

## Disclaimer And Claims-Review Requirements

Minimum public disclaimer for product cut sheets:

```text
Product cut sheets are public overview materials only. Features, availability, integrations, workflows, and screenshots may be conceptual, in development, or subject to change. Access to private systems, operational environments, and sensitive material remains restricted.
```

Additional review requirements:

- Avoid unsupported adoption, school, government, licensing, telecom, forensic, surveillance, intelligence, or medical claims.
- Avoid implying live operational capability unless already public, verified, and approved.
- Avoid exposing private client, family, legal, financial, operational, or evidence material.
- Avoid presenting private OS surfaces as publicly accessible products.
- Verify all third-party logos, brands, names, landmarks, and screenshots.
- Confirm that any support CTA aligns with Sponsor Isikolo / mission-led positioning where relevant.

## Risks And Governance Notes

Key risks:

- Intake filenames include typos or inconsistent spacing.
- Some products are in sensitive categories.
- A cut sheet can make stronger claims than the public website currently supports.
- Publishing PDFs creates a durable public artifact, so mistakes are harder to quietly correct.
- Product cards and Resource Library links should not point to private/intake paths.

Governance rules:

- Intake is not publication.
- Filename presence is not approval.
- No PDF moves without a milestone.
- No public links without a milestone.
- No public filenames with superscript characters unless explicitly approved for display-only contexts.
- No sensitive product category goes public without claims, rights, and safety review.

## Proposed 23B Implementation Scope

Recommended next milestone:

```text
23B Product Cut Sheet Review and Public Candidate Selection
```

Suggested 23B scope:

- Open and review exact candidate cut sheets.
- Start with IsikoloAI and ClipboardAi.
- Confirm whether OS³ Dash and JB³Ai Super Agent OS cut sheets exist elsewhere.
- Decide which exact files can move toward public optimisation/publication.
- Record required redactions or copy corrections.
- Keep files in intake unless 23B explicitly approves movement in a later milestone.

Do not combine 23B with public integration unless explicitly approved.

Likely later milestones:

- 23C Product Cut Sheet Filename Cleanup and Public PDF Export
- 23D Product Cut Sheet Resource Registry
- 23E Product Card Cut Sheet Link Integration
- 23F Resource Library Product Cut Sheet Grouping

## Explicit Non-Goals

23A does not:

- Open PDF contents.
- Review screenshots inside PDFs.
- Compress PDFs.
- Rename PDFs.
- Move PDFs.
- Stage `docs/media-intake/09-product-cutsheets/`.
- Publish PDFs to `public/assets`.
- Link PDFs on the homepage.
- Change product cards.
- Change `PublicHome.tsx`.
- Change `assetRegistry.ts`.
- Add routes.
- Change payment links.
- Change contact/social links.
- Change `/os`.
- Modify raw intake files.
- Stage `vite.config.ts`.

## Build

No build required.

Reason:

- 23A is docs-only.
- No source files were touched.

## Safety / Staging Notes

Stage only:

```text
docs/phase-23/23a-product-cutsheet-resource-integration-plan.md
```

Do not stage:

```text
docs/media-intake/09-product-cutsheets/
docs/media-intake/
public/assets/images/isikolo.png
public/assets/images/isikolosmaller.jpg
vite.config.ts
```

Do not use:

```text
git add .
```

## Recommended Commit Message

```text
Plan product cutsheet resource integration
```
