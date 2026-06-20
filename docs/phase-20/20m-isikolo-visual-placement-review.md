# Phase 20M: Isikolo Visual Placement Review

## Review Status

Drafted in 20M.

Docs-only placement review.

No visible website integration.

Pending human review.

Production WebP already available from 20L.

Future placement not yet approved.

## Purpose

This milestone reviews where the optimized IsikoloAI visual should appear in the public website, without placing it yet.

The goal is to decide whether the visual belongs in the Sponsor Isikolo section, a future IsikoloAI app/project card, a resource/cutsheet layer, or whether it should remain registered but unused until the surrounding copy and product material are fully aligned.

## Integration Rule

20M does not integrate the visual. It only reviews possible placement options and recommends a future milestone path.

## Available Asset

| Field | Detail |
| --- | --- |
| File | `public/assets/images/isikolo-ai-cover-education-visual.webp` |
| Registry key | `isikoloAiCoverEducationVisual` |
| Registry path | `/assets/images/isikolo-ai-cover-education-visual.webp` |
| Source milestone | 20L |
| Role | Production-ready registered visual |
| Placement status | Not yet used in UI |

## Candidate Placement Options

| Option | Location | Content role | Strengths | Risks | Layout impact | Mobile risk | Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sponsor Isikolo section | Existing homepage support section between GTR³ and Connect | Mission support visual for free AI education funding | Strong contextual alignment with Sponsor Isikolo copy and learner-access mission | Could crowd six sponsor action cards; dense image text may compete with CTA buttons | Medium-high if added inside current two-column support grid | Medium-high at 390px because the image is text-heavy | Do not integrate yet; consider only after a specific layout review. |
| Public homepage education/support block | New or future dedicated IsikoloAI education block | Product and mission storytelling | Gives image room to breathe and avoids overloading support/payment CTAs | Adds homepage length and could create bloat if not paired with concise copy | Medium because it may require a new section | Medium; needs careful crop/aspect handling | Possible later, but not first choice until app/cutsheet copy is ready. |
| App/project card for IsikoloAI | Future project/app card or selected work item | Product proof and app identity | Best fit for a cover-style visual; keeps Sponsor section focused on support actions | Requires IsikoloAI card/cutsheet content to be reviewed first | Low-medium if using existing card pattern later | Low-medium if image is contained and lazy loaded | Preferred future integration path after cutsheet/app-card planning. |
| Founder Manual resource area | Founder Manual or principles/resource-adjacent area | Values and mission-support proof | Connects education mission to founder principles | Founder Manual is not currently the best product-placement surface; may blur narrative focus | Medium | Medium | Not recommended for first placement. |
| Future Resource Library / Cutsheet layer | Future resource/cutsheet index or downloadable resource layer | Visual support for IsikoloAI cutsheet or product resource | Keeps image tied to product/resource context; can pair with accurate app description | Current checkout does not show an active Resource Library component; may need separate planning | Low if handled in docs/resource layer first, medium if new UI added | Low-medium with card treatment | Strong candidate after cutsheet review. |
| Keep registered but unused for now | Asset registry only | Prepared production asset for later controlled use | Safest; avoids homepage bloat and lets copy/cutsheet review happen first | Visual momentum delayed | None | None | Recommended for 20M. |

## Recommended Placement

Recommended decision: **keep the asset registered but unused until the IsikoloAI cutsheet and app-card material are reviewed.**

The production WebP is ready as an asset, but the image is dense and contains visible technical/model wording. The safest next step is not to place it into the Sponsor Isikolo section immediately. Instead, the project should first review the IsikoloAI cutsheet/app-card content so the image, product description, support CTA, and public claims all align.

Preferred future path:

1. Review IsikoloAI cutsheet/app-card copy.
2. Confirm visible image text and third-party/model references.
3. Choose a contained card or resource placement.
4. Only then decide whether Sponsor Isikolo gets the visual or stays CTA-only.

## Copy and Messaging Controls

| Area | Risk | Required control | Future action |
| --- | --- | --- | --- |
| NPO status | Image/support context could be mistaken for charity positioning. | Do not imply registered NPO status. | Keep non-charitable support disclaimer near any future sponsorship CTA. |
| Tax wording | Support could be misread as tax-deductible. | Do not imply tax-deductible donations. | Preserve existing non-tax-deductible language. |
| Hardship framing | Visual support could drift into pity or emergency messaging. | Do not use hardship framing. | Keep Isikolo mission-led and learner-access focused. |
| Charity language | Sponsor wording could become donation/charity language. | Avoid charity language. | Use sponsor/support/founding support terms only. |
| Mission-led support | The section must remain impact-based. | Keep support wording mission-led. | Pair image with free AI education and learner access framing. |
| Education accuracy | Product capabilities must not overclaim. | Keep IsikoloAI education wording accurate. | Review app/cutsheet copy before placement. |
| Visible image text | Image includes dense technical and learner-support text. | Confirm visible text is acceptable. | Check all readable labels before public placement. |
| Third-party/model references | Image includes model/technical references such as `Gemma 4 E2B`. | Confirm third-party marks or wording are acceptable. | Human review required before visible placement. |
| Homepage density | Adding image could overload the Sponsor section. | Avoid homepage clutter. | Prefer contained app/project card or resource placement. |

## Visual QA Requirements for Future Integration

Before any future visible placement, QA must include:

- Desktop viewport.
- 390px mobile viewport.
- Image crop check.
- Text legibility check.
- File-size/performance check.
- Lazy loading if below the fold.
- No layout shift.
- No broken aspect ratio.
- No over-dominance compared with payment/support cards.

## Recommended 20N or Future Action

Preferred next milestone:

`20N IsikoloAI Cutsheet and App Card Planning`

Reason: if the IsikoloAI cutsheet is available, review the cutsheet before public visual placement so that the image, wording, app description, and support CTA align.

Alternative future milestones:

- `20N Isikolo Sponsor Section Visual Integration`
- `20N Resource Library / App Cutsheet Registry`
- `20N Keep Registered Asset Unused`

## Not Integrated Yet

Confirmed:

- No homepage visual placement.
- No Sponsor Isikolo visual placement.
- No component display changes.
- No layout changes.
- No route changes.
- No app ID changes.
- No sponsorship/payment changes.
- No contact/social changes.
- No `/os` changes.
- No GTR changes.
- No source PNG/JPG candidates committed.

## Safety Confirmations

- Docs-only review.
- Production WebP remains registered.
- Production WebP not visually integrated.
- Source PNG remains untracked.
- Source JPG remains untracked.
- No raw media staged.
- Public/private split preserved.
- 20M only recommends future placement.

## 20M Decision

20M is complete when the placement review document is reviewed and merged. Visible integration requires a separate future milestone.
