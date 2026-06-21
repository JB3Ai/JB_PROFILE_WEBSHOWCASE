# Phase 20O: IsikoloAI App Card Copy and Resource Decision

## Review Status

Drafted in 20O.

Docs-only copy/resource decision.

No public UI integration.

No visible image placement.

No cutsheet publication.

Pending human review.

## Purpose

20O defines safe public-facing app-card copy for IsikoloAI and decides whether the IsikoloAI cutsheet should remain intake-only or be prepared as a future public resource.

The goal is to approve a clean copy direction before any public app-card, visual placement, PDF link, or resource-library work begins.

## Integration Rule

20O does not integrate IsikoloAI into the website UI. It only decides approved copy, resource status, and future implementation direction.

No component, layout, route, app ID, payment, contact/social, `/os`, asset registry, source image, raw media, or public PDF change happens in 20O.

## Source Review

| Source | Reviewed for | Decision impact | Public-safety notes |
| --- | --- | --- | --- |
| `docs/phase-20/20k-isikolo-image-asset-decision-plan.md` | Image-source decision, source PNG/JPG status, early safety review | Confirms the image path should remain controlled and source PNG/JPG candidates should stay uncommitted. | Flags third-party/model text and dense visual copy for human review before public placement. |
| `docs/phase-20/20l-isikolo-image-optimization-registry-notes.md` | Production WebP and registry readiness | Confirms `isikoloAiCoverEducationVisual` exists and the WebP is production-ready but not placed. | Keeps source candidates untracked and production WebP unused until UI approval. |
| `docs/phase-20/20m-isikolo-visual-placement-review.md` | Placement decision and visual-density controls | Supports app/resource card as the preferred future placement instead of Sponsor Isikolo first. | Reinforces no NPO, tax-deductible, hardship, charity, or unsupported education claims. |
| `docs/phase-20/20n-isikoloai-cutsheet-app-card-planning.md` | App-card planning, cutsheet availability, and early copy direction | Provides the base copy direction and confirms the cutsheet candidate remains intake-only. | Keeps the PDF uncommitted and unlinked. |
| `docs/phase-20/20g-isikolo-sponsorship-terms-link-readiness-plan.md` | Mission-led support language and support-term controls | Keeps app-card support copy aligned with founding support, AI credits, hosting, content, and learner access. | Avoids donation, charity, NPO, tax-deductible, emergency, hardship, and pity framing. |
| `docs/phase-20/20i-live-sponsorship-link-integration-notes.md` | Existing live support-link behavior | Confirms support links are already wired as simple external links and should not be changed in 20O. | Avoids SDKs, embeds, forms, tracking, checkout logic, or fulfillment changes. |
| `src/components/public/SupportWorkStrip.tsx` | Current public Sponsor Isikolo wording and link placement | Confirms the existing support strip is already dense and should not receive the IsikoloAI visual first. | Preserves disclaimer and mission-led support framing. |
| `src/data/assetRegistry.ts` | Current asset registry state | Confirms `isikoloAiCoverEducationVisual` is already a flat key and no registry change is needed. | Avoids registry-shape drift. |
| `docs/media-intake/02-pdf-candidates/JB³ ISIKOLO AI —final.pdf` | Local cutsheet availability and resource-publication decision | Confirms a cutsheet candidate exists locally, but it remains intake-only in 20O. | Do not commit, link, move, rename, optimize, publish, or copy into `public/`. |

## Cutsheet Resource Decision

| Option | Description | Benefits | Risks | Recommendation |
| --- | --- | --- | --- | --- |
| Keep cutsheet private/intake-only for now | Leave `JB³ ISIKOLO AI —final.pdf` as an untracked candidate in `docs/media-intake/02-pdf-candidates/`. | Safest; prevents accidental publication of a large, unreviewed PDF. | Delays public resource momentum. | Strongly recommended for 20O. |
| Create a future public PDF resource after review | Review, rename, compress, and publish a clean public PDF in a later milestone. | Could support deeper product explanation and resource-library use. | Requires rights, content, file-size, public claims, and link QA. | Possible later, not in 20O. |
| Convert cutsheet into a public web resource page later | Extract safe web copy from the PDF into a controlled public page/card. | More accessible and easier to update than a PDF. | Requires component/page planning and careful claim review. | Consider after app-card copy is approved. |
| Extract only safe copy into app card and keep PDF private | Use only short public-safe copy now; keep the PDF as private intake material. | Enables future UI planning without exposing the PDF. | App-card copy may omit deeper product detail until later review. | Recommended default. |

Recommended default: **extract only safe app-card copy now and keep the PDF private/intake-only until a future PDF/resource review milestone.**

## Approved App-Card Copy

| Field | Approved candidate copy | Readiness level | Safety notes | Future implementation notes |
| --- | --- | --- | --- | --- |
| App name | IsikoloAI | Ready for future human-reviewed implementation | Product name only; no unsupported claims. | Use as visible card title. |
| Category | Education App | Ready | Neutral category. | Use as eyebrow/kicker. |
| Status badge | Free Learning Support | Ready | Avoids charity/NPO framing and avoids overclaiming outcomes. | Use as optional badge, not as an official accreditation claim. |
| Short tagline | Free AI-powered study support for South African learners. | Ready, pending human copy approval | Clear audience and benefit; no adoption or outcome guarantee. | Use as card tagline. |
| One-sentence description | IsikoloAI helps learners with schoolwork, revision, explanations, and practical study support through accessible AI-powered learning tools. | Ready, pending human copy approval | Avoids replacing teachers, guaranteed marks, or official endorsement claims. | Use as compact card body. |
| Expanded description | IsikoloAI is a free education-support app designed to help South African learners access clearer explanations, revision help, study guidance, and practical learning support. The goal is to make AI-assisted education easier to reach, easier to understand, and useful for everyday schoolwork. | Ready, pending human copy approval | Mission-led; avoids unsupported scale or institutional claims. | Use only if future card has enough space. |
| Audience | South African learners | Ready | Narrow, accurate audience framing. | Keep first public version South Africa-focused. |
| Core benefit | Clearer explanations, revision help, study guidance, and practical learning support. | Ready | Does not guarantee outcomes. | Can support icon/card detail lines later. |
| Primary CTA label | Explore IsikoloAI | Draft | Requires a future destination before implementation. | Do not wire until app-card/resource route is approved. |
| Secondary CTA label | Support Free Education | Draft | Can map to existing support section/link later without changing 20I in 20O. | Keep simple external links if used later. |
| Support note | Support helps fund AI credits, hosting, content, learner access, and continued platform development. | Ready | Matches existing Sponsor Isikolo support purpose. | Use near support CTA only if layout supports it. |
| Disclaimer note | Support payments are not charitable donations and are not tax-deductible. | Ready | Required if support CTA appears near app-card payment/support links. | Preserve existing disclaimer language. |
| Image key | `isikoloAiCoverEducationVisual` | Ready for future implementation | Already registered; not used in UI yet. | Do not change registry in 20O. |
| Image alt text | IsikoloAI cover artwork representing free AI education support for South African learners. | Ready | Public-safe, mission-led, non-sensitive. | Use if/when the image is visibly integrated. |

## Recommended Copy Draft

App name:

IsikoloAI

Category:

Education App

Status badge:

Free Learning Support

Tagline:

Free AI-powered study support for South African learners.

One-sentence description:

IsikoloAI helps learners with schoolwork, revision, explanations, and practical study support through accessible AI-powered learning tools.

Expanded description:

IsikoloAI is a free education-support app designed to help South African learners access clearer explanations, revision help, study guidance, and practical learning support. The goal is to make AI-assisted education easier to reach, easier to understand, and useful for everyday schoolwork.

Primary CTA:

Explore IsikoloAI

Secondary CTA:

Support Free Education

Support note:

Support helps fund AI credits, hosting, content, learner access, and continued platform development.

Disclaimer note:

Support payments are not charitable donations and are not tax-deductible.

Image alt text:

IsikoloAI cover artwork representing free AI education support for South African learners.

## Messaging Controls

| Area | Risk | Required control | Future action |
| --- | --- | --- | --- |
| NPO status | Support copy could imply nonprofit status. | No NPO claim. | Keep support language as independent education technology support. |
| Tax wording | Support copy could be read as tax-deductible. | No tax-deductible claim. | Preserve disclaimer near support CTA. |
| Charity/donation wording | Platform or CTA wording could drift into charity language. | No charity/donation language. | Use sponsor/support/founding support language. |
| Hardship framing | Story could drift into pity or emergency support. | No hardship framing. | Keep learner-access mission central. |
| Learner count | Copy could imply scale not yet verified. | No unsupported learner count. | Add numbers only with reviewed source. |
| School adoption | Copy could imply institutional adoption. | No unsupported school adoption claim. | Add school references only with permission/source proof. |
| Government/institutional endorsement | Copy could imply official backing. | No government or institutional endorsement claim. | Add only if verified and approved. |
| AI capability | Copy could overpromise tutoring, grading, or outcomes. | No overclaiming AI capability. | Use support/help/guidance language. |
| Outcomes | Copy could imply guaranteed marks or passes. | No guarantee of outcomes. | Avoid guarantee language. |
| Third-party models | Visible image/cutsheet may mention model names. | No unreviewed third-party model claims. | Review model references before visible placement. |
| Support usage | Support purpose could become vague. | Tie support wording to AI credits, hosting, content, learner access, and platform development. | Keep existing Sponsor Isikolo support-purpose language. |

## Resource Publication Controls

| Resource item | Current status | Publication risk | Required control | 20O decision |
| --- | --- | --- | --- | --- |
| IsikoloAI cutsheet PDF | Untracked intake candidate at `docs/media-intake/02-pdf-candidates/JB³ ISIKOLO AI —final.pdf` | Large unreviewed PDF could expose unapproved claims, model references, or public-resource drift. | Separate PDF safety review, URL-safe filename, file-size review, claim review, and public-resource approval. | Keep private/intake-only. |
| Production WebP | Committed and registered at `public/assets/images/isikolo-ai-cover-education-visual.webp` | Dense text and third-party/model wording may be hard to read or verify in UI. | Future visual QA and visible-text review before placement. | Keep registered but unused. |
| App-card text | Drafted in 20O | Could overclaim if expanded without review. | Use concise approved copy only; human review before implementation. | Approved as candidate copy for future implementation. |
| Support/payment links | Already wired in 20I as simple external links | App-card CTA could duplicate or confuse support actions. | Do not change links in 20O; map any future support CTA deliberately. | No change. |
| Future resource library entry | Not available as a public resource in current checkout | Could publish PDF too early or create public/private drift. | Separate resource-library decision and public PDF review. | Defer. |

## Recommended Future Placement

Recommended future UI route: **a contained IsikoloAI app/resource card, not the Sponsor Isikolo section first.**

Why:

- The current Sponsor Isikolo section already carries mission copy, disclaimer text, and six support actions.
- Adding a dense visual there could crowd the conversion area and make mobile layout heavier.
- A contained app/resource card can explain what IsikoloAI is before asking users to support it.
- The registered WebP can work well as a card visual after desktop and 390px mobile crop QA.
- The cutsheet can remain private while safe copy is extracted for public display.

Recommended location for future planning:

- a contained app/resource card near the Sponsor Isikolo section
- not inside the Sponsor Isikolo support-action grid
- not in `/os`
- not in the timeline
- not as a public PDF link until a separate review approves it

## Recommended 20P or Future Action

Recommended next milestone:

`20P IsikoloAI App Card Integration`

Condition:

Only proceed with 20P integration if the approved 20O copy is accepted by human review.

If any cutsheet content, visible image text, third-party/model references, or product claims remain uncertain, use this instead:

`20P IsikoloAI Public Copy Review`

Other possible future milestones:

- `20P IsikoloAI Resource Library Entry`
- `20P Cutsheet PDF Resource Review`

## Not Integrated Yet

Confirmed:

- No homepage app card.
- No visible image placement.
- No Sponsor Isikolo visual placement.
- No component changes.
- No layout changes.
- No payment/contact/social changes.
- No route changes.
- No app ID changes.
- No `/os` changes.
- No `assetRegistry.ts` changes.
- No cutsheet PDF committed.
- No public PDF link added.
- No source PNG/JPG committed.

## Safety Confirmations

- Docs-only decision.
- Production WebP remains registered but unused.
- Cutsheet remains untracked/intake-only.
- Source PNG remains untracked.
- Source JPG remains untracked.
- No raw media staged.
- Public/private split preserved.
- No sensitive private/family/legal/court/evidence/financial material used.
- No unsupported claims approved.
- Public wording remains subject to human approval before implementation.
- No GTR asset movement.
- No 18I asset changes.
- No 20F PDF library changes.

## Build Result

`npm run build` passed in 20O.

## 20O Decision

20O is complete when the app-card copy and resource decision document is reviewed and merged. Public UI integration requires a separate future milestone.
