# Phase 20L: Isikolo Image Optimization and Registry

## Review Status

Drafted in 20L.

Asset optimization and registry pass.

No visible website placement.

Pending human review.

Production WebP created.

Source candidates remain untracked.

## Source Candidate

| Field | Detail |
| --- | --- |
| Source file | `public/assets/images/isikolosmaller.jpg` |
| Source status | Untracked |
| Source dimensions | `1008 x 1044` |
| Source file size | `229,385` bytes |
| Source role | Compressed IsikoloAI cover artwork |
| Reason selected over `public/assets/images/isikolo.png` | Smaller source candidate, visually matches the IsikoloAI cover, and avoids the `7,679,101` byte PNG source size. |

## Production Asset

| Field | Detail |
| --- | --- |
| Production file | `public/assets/images/isikolo-ai-cover-education-visual.webp` |
| Production dimensions | `1008 x 1044` |
| Production file size | `140,570` bytes |
| Compression notes | Exported from `isikolosmaller.jpg` using `ffmpeg` WebP output at quality `82` and compression level `6`. |
| Visual clarity notes | Cover identity, main title, and key visual structure remain clear. Dense internal labels should still be reviewed during future placement/crop QA. |
| Future integration readiness | Ready as a registered production candidate, but not visually placed in 20L. |

## Public-Safety Review

| Review area | Finding | Decision |
| --- | --- | --- |
| Private/family material | No people, children, family members, or private individuals are visible. | Pass. |
| Legal/court/evidence/financial material | No legal, court, evidence, or financial material is visible. | Pass. |
| Donation/NPO/charity/tax wording | No donation, NPO, charity, or tax-deductible wording appears in the image. | Pass. |
| Sensitive hardship framing | The image is product/education focused and does not use hardship framing. | Pass. |
| Third-party logos/marks/model references | The image includes model/technical references such as `Gemma 4 E2B`; these remain flagged for final human/source review before visible placement. | Conditional pass. |
| Mission-led Isikolo framing | The visual supports IsikoloAI as education/product cover artwork. | Pass. |
| Public education/support context | Suitable for a future Isikolo education/support visual if crop and text review pass. | Conditional pass. |

## Technical Review

| Check | Source candidate | Production WebP | Decision |
| --- | --- | --- | --- |
| File type | JPG | WebP | Production WebP created. |
| Dimensions | `1008 x 1044` | `1008 x 1044` | Dimensions preserved. |
| File size | `229,385` bytes | `140,570` bytes | Reduced by `88,815` bytes. |
| Compression | Already compressed JPG | WebP quality `82`, compression level `6` | Suitable for future review/use. |
| Clarity | Strong cover clarity | Strong cover clarity after export | Pass for registry; placement QA still required. |
| Mobile suitability | Dense text requires careful crop review | Dense text still requires careful crop review | Defer to 20M. |
| Desktop suitability | Strong visual candidate | Strong visual candidate | Pass for future placement review. |
| Naming | `isikolosmaller.jpg` | `isikolo-ai-cover-education-visual.webp` | Production filename is clean and descriptive. |
| Asset path | Untracked source path | `/assets/images/isikolo-ai-cover-education-visual.webp` | Registered as production candidate. |

## Registry Decision

The WebP was added to `src/data/assetRegistry.ts`.

| Field | Detail |
| --- | --- |
| Registry key | `isikoloAiCoverEducationVisual` |
| Registry path | `/assets/images/isikolo-ai-cover-education-visual.webp` |
| Alt text for future use | `IsikoloAI cover artwork representing free AI education support for South African learners.` |
| Registry-shape drift | None. Added one flat key to the existing `assetRegistry` object. |

The registry entry does not wire the asset into any visible component.

## Not Integrated Yet

Confirmed:

- No homepage visual placement.
- No Sponsor Isikolo visual placement.
- No display component changes.
- No route changes.
- No `/os` changes.
- No app ID changes.
- No sponsorship/payment link changes.
- No contact/social changes.

## Future Milestone Recommendation

Recommended next milestone:

`20M Isikolo Sponsor Section Visual Integration`

Alternative if placement remains undecided:

`20M Isikolo Visual Placement Review`

## Safety Confirmations

- Source JPG remains untracked.
- Source PNG remains untracked.
- Only production WebP is intended for asset commit.
- No raw media staged.
- No GTR assets changed.
- No 18I assets changed.
- No 20F PDF library changes.
- Public/private split preserved.

## 20L Decision

20L is complete when the optimized WebP and notes/registry updates are reviewed and merged. Visible website placement must wait for a later milestone.
