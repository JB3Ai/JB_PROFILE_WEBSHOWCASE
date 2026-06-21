# Phase 20N: IsikoloAI Cutsheet and App Card Planning

## Review Status

Drafted in 20N.

Docs-only planning.

No visible website integration.

No app card created.

No homepage layout change.

No image placement.

Pending human review.

## Purpose

20N reviews the IsikoloAI cutsheet/app-card path before the registered IsikoloAI cover visual is placed anywhere on the public website.

The goal is to align the future image placement, product description, app-card wording, support CTA, and public claims before any UI work begins.

This milestone is intentionally planning-only. It does not create a visible app card, does not place the IsikoloAI image, and does not change the Sponsor Isikolo section.

## Integration Rule

20N does not integrate anything into the public website.

Do not integrate:

- the IsikoloAI visual
- a visible IsikoloAI app card
- cutsheet links
- new homepage sections
- payment or sponsorship changes
- contact/social changes
- `/os` changes
- route or app ID changes
- asset registry changes
- source PNG/JPG candidates
- raw intake media

## Cutsheet Availability

| Item | Location | Status | 20N decision |
| --- | --- | --- | --- |
| IsikoloAI cutsheet candidate | `docs/media-intake/02-pdf-candidates/JB³ ISIKOLO AI —final.pdf` | Available as an untracked intake candidate | Use as planning context only; do not commit, link, move, rename, or publish in 20N. |
| Public PDF resource copy | `public/assets/pdfs/` | Not available in the current checkout | Do not create or link a public PDF in 20N. |
| IsikoloAI cover WebP | `public/assets/images/isikolo-ai-cover-education-visual.webp` | Committed production asset from 20L | Keep registered but unused. |
| Asset registry key | `isikoloAiCoverEducationVisual` | Existing flat registry key | Do not change in 20N. |

The cutsheet is available for review as a local intake candidate, but it is not a committed public resource and should not be exposed until a later public-resource milestone approves it.

## Source Material Reviewed

20N reviewed the following committed planning and implementation sources:

- `docs/phase-20/20m-isikolo-visual-placement-review.md`
- `docs/phase-20/20l-isikolo-image-optimization-registry-notes.md`
- `docs/phase-20/20k-isikolo-image-asset-decision-plan.md`
- `docs/phase-20/20g-isikolo-sponsorship-terms-link-readiness-plan.md`
- `docs/phase-20/20i-live-sponsorship-link-integration-notes.md`
- `src/components/public/SupportWorkStrip.tsx`
- `src/data/assetRegistry.ts`

20N also confirmed the local presence of the untracked cutsheet candidate:

- `docs/media-intake/02-pdf-candidates/JB³ ISIKOLO AI —final.pdf`

The PDF candidate itself remains untracked and uncommitted.

## Product Positioning Controls

| Area | Approved direction | Control |
| --- | --- | --- |
| Mission | Keep Isikolo mission-led and learner-access focused. | Do not use hardship, emergency, pity, or personal-survival framing. |
| Availability | Isikolo is built and positioned as a free AI-powered education app. | Avoid claims that imply national adoption, institutional endorsement, or guaranteed outcomes unless separately verified. |
| Audience | South African learners. | Avoid overbroad global education claims in the first app-card version. |
| Support link relationship | Sponsorship helps keep Isikolo free and fund AI credits, hosting, content, and platform development. | Do not imply charitable donation, NPO status, or tax-deductible support. |
| Technical/model references | The visual includes dense technical/model wording. | Review visible text and third-party/model references before placement. |
| Cutsheet relationship | The cutsheet should inform app-card copy. | Do not link or publish the cutsheet until public-resource approval. |

## Proposed App-Card Wording

The following copy is proposed for a future app-card milestone. It is not integrated in 20N.

### Card Label

Education App

### Card Title

IsikoloAI

### Short Description

A free AI-powered education app built to help South African learners with schoolwork, study support, revision, explanations, and practical learning help.

### Mission Line

Isikolo is built. Now help keep it free.

### Support Line

Founding support helps fund AI credits, hosting, platform infrastructure, curriculum content, local language support, learner access, and continued development.

### CTA Options

| CTA | Intended destination | 20N decision |
| --- | --- | --- |
| Sponsor Isikolo | Existing PayBru support link | Future option only; do not wire a new app-card CTA in 20N. |
| Learn About IsikoloAI | Future cutsheet or app-card detail layer | Preferred future CTA after cutsheet approval. |
| View Resource | Future public PDF/resource link | Do not use until the cutsheet is approved and committed as a public resource. |

### Compact Card Version

IsikoloAI is a free AI-powered education app for South African learners, created to support schoolwork, revision, explanations, and practical study help.

### Expanded Card Version

IsikoloAI is built to help South African learners access practical AI-powered learning support. The app focuses on schoolwork help, revision, explanations, and learner-friendly study assistance while keeping the mission simple: keep Isikolo free for learners in South Africa.

### Alt Text Candidate

IsikoloAI cover artwork representing free AI education support for South African learners.

## Recommended Future Placement

Recommended future placement: a contained IsikoloAI app/resource card, not the Sponsor Isikolo section first.

Reason:

The registered visual is a strong product/cover asset, but it is dense and includes technical wording. A contained app-card or cutsheet/resource placement gives the image enough context and avoids overloading the Sponsor Isikolo payment/support grid.

Preferred future sequence:

1. Human review the IsikoloAI cutsheet candidate.
2. Confirm visible image text and third-party/model references.
3. Approve exact app-card copy.
4. Decide whether a public cutsheet PDF should be created or linked.
5. Create a contained app-card or resource-card integration in a later milestone.
6. Keep Sponsor Isikolo focused on support actions unless a separate visual-layout review approves otherwise.

## Candidate App-Card Placement Options

| Option | Location | Strength | Risk | Recommendation |
| --- | --- | --- | --- | --- |
| App/resource card below Sponsor Isikolo | Homepage after Sponsor Isikolo and before Connect | Gives IsikoloAI its own context without disturbing the support buttons. | Adds homepage length. | Strong future option after cutsheet approval. |
| Inline visual inside Sponsor Isikolo | Existing support section | Strong mission alignment. | Could crowd the six sponsor actions and weaken conversion clarity. | Do not use first. |
| Resource Library / PDF card | Future resource layer | Best if the cutsheet becomes a public PDF. | Current checkout does not expose a committed public Isikolo cutsheet. | Plan later if public resource is approved. |
| Founder Manual reference | Founder Manual or values area | Connects education mission to founder principles. | Blurs product/resource context. | Not recommended first. |
| Keep image registered but unused | No visible placement | Safest until copy and cutsheet review are complete. | Delays visual use. | Recommended until 20O or later. |

## Copy Safety Review

Approved wording patterns:

- free AI-powered education app
- South African learners
- schoolwork help
- study support
- revision
- explanations
- practical learning support
- learner access
- AI credits
- hosting
- curriculum content
- local language support
- continued development
- founding support
- help keep Isikolo free

Avoid wording:

- donation
- charity
- tax-deductible
- registered NPO
- guaranteed learner outcome
- official school endorsement
- government-backed
- accredited curriculum provider
- emergency support
- personal hardship
- donate to me
- replace teachers
- guaranteed marks or pass results

## Visual Controls for Future App Card

Before any visual placement, confirm:

- desktop crop works without losing key title/cover meaning
- 390px mobile crop works without tiny unreadable text becoming distracting
- image does not dominate the Sponsor Isikolo CTAs
- image is lazy-loaded if placed below the fold
- alt text is public-safe and mission-led
- no layout shift
- no horizontal overflow
- visible text and model references are acceptable
- card styling matches the current public homepage system

## Recommended Next Milestone

Recommended next milestone:

`20O IsikoloAI App Card Copy and Resource Decision`

Purpose:

- human review the cutsheet candidate
- approve exact app-card copy
- decide whether the cutsheet becomes a public PDF resource later
- decide whether the registered WebP should be placed in an app/resource card
- still avoid broad homepage redesign

Alternative if the cutsheet needs deeper review first:

`20O IsikoloAI Cutsheet Safety Review`

Alternative if visual placement is explicitly approved after 20N:

`20O IsikoloAI App Card Visual Integration`

## Not Integrated Yet

Confirmed:

- No IsikoloAI visual placement.
- No visible app card.
- No cutsheet link.
- No public PDF link.
- No homepage layout change.
- No Sponsor Isikolo layout change.
- No component changes.
- No payment link changes.
- No contact/social changes.
- No `/os` changes.
- No route changes.
- No app ID changes.
- No asset registry changes.
- No source PNG/JPG candidates committed.
- No raw intake media staged.

## Safety Confirmations

- Docs-only planning.
- Production WebP remains registered.
- Production WebP remains unused in UI.
- Source PNG remains untracked.
- Source JPG remains untracked.
- Untracked IsikoloAI PDF candidate remains uncommitted.
- No raw media staged.
- Public/private split preserved.
- Sponsor Isikolo remains mission-led.
- No charity/NPO/tax-deductible wording introduced.
- No hardship or emergency support language introduced.
- No GTR asset movement.
- No 18I asset changes.
- No 20F PDF library changes.

## Build Result

`npm run build` passed in 20N.

## 20N Decision

20N is complete when this planning document is reviewed and merged.

The recommended current decision is to keep the IsikoloAI WebP registered but unused, review the cutsheet candidate more closely in the next milestone, and only then decide whether to create a visible app/resource card.
