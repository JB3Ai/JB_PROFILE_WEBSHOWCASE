# Phase 20K: Isikolo Image Asset Decision and Integration Plan

## Review Status

Drafted in 20K.

Docs-first asset decision.

Pending human review.

Not published.

Not wired into website.

Asset remains uncommitted unless later approved.

## Asset Under Review

| Field | Detail |
| --- | --- |
| File path | `public/assets/images/isikolo.png` |
| Current status | Untracked |
| Intended possible use | Isikolo support / sponsorship / education section |
| Decision status | Pending |

Additional related candidate:

| Field | Detail |
| --- | --- |
| File path | `public/assets/images/isikolosmaller.jpg` |
| Current status | Untracked |
| Asset context | Smaller compressed cover artwork for IsikoloAI |
| Intended possible use | Preferred review candidate for future Isikolo support / sponsorship / education section |
| Decision status | Pending |

## Purpose

This milestone reviews whether the untracked Isikolo image should become a public production asset later.

20K does not publish, optimize, rename, register, or integrate the image. It only records the decision criteria, current observations, and recommended next action so the project can make a controlled asset decision before anything enters the live site.

## Decision Rule

20K does not commit, move, optimize, rename, or integrate `public/assets/images/isikolo.png` or `public/assets/images/isikolosmaller.jpg`. It only documents the asset decision criteria and recommended next action.

## Public-Safety Review

| Review area | Question | Required standard | Current observation | Decision |
| --- | --- | --- | --- | --- |
| Private children/family material | Does the image show children, family, or private individuals? | No private children, family, or identifying personal material. | No people are visible. | Pass. |
| Legal/court/evidence/financial material | Does the image expose sensitive legal, court, evidence, or financial detail? | No private legal, court, evidence, or financial material. | No such material is visible. | Pass. |
| Donation/NPO/tax wording | Does the image imply charity, NPO, donation, or tax-deductible status? | No charity, NPO, donation, or tax-deductible implication. | No donation or tax language appears in the image. | Pass. |
| Personal hardship framing | Does the image frame support through hardship or emergency language? | Mission-led, not hardship-led. | Image is product/education focused. | Pass. |
| Unapproved logos or third-party marks | Does the image include marks, model names, or brand references needing approval? | Third-party references must be verified before public use. | Both image candidates include `Gemma 4 E2B` model naming and technical labels. | Conditional; verify before public use. |
| Copyright/source clarity | Is the source and usage right clear? | Asset source and usage rights should be clear before production. | Source/licensing not documented in repo. User confirmed `isikolosmaller.jpg` is the smaller compressed cover artwork for IsikoloAI. | Conditional; confirm final source/usage rights before publication. |
| Mission-led framing | Does the image align with Isikolo as free AI education support? | Must support the Isikolo learner-access mission without drifting into personal support. | Strong visual education/product framing, but technical copy needs verification. | Conditional pass. |

## Visual / Brand Review

| Review area | Required standard | Current observation | Decision |
| --- | --- | --- | --- |
| Image clarity | Clear at intended use sizes. | `isikolo.png` is high-resolution; `isikolosmaller.jpg` keeps the same cover composition at a lighter size. | Pass for review; needs responsive testing after export. |
| Crop suitability | Must crop cleanly without losing important text. | Square/near-portrait composition with important text across the full frame. | Conditional; likely difficult to crop tightly. |
| Desktop use | Should support a polished desktop section without visual clutter. | Strong visual impact, but dense for a homepage strip. | Conditional; better as feature image than small card. |
| 390px mobile use | Must stay readable and not feel cramped. | Dense text may be too small on mobile. | Conditional; needs mobile-specific crop/export. |
| JB³Ai visual identity | Should align with current dark-tech, education, and mission-led brand direction. | Bright Ndebele-style visual language adds strong South African education character. | Pass, with careful surrounding design. |
| Isikolo education positioning | Should support learner access, study help, and free AI education. | Clearly education/product oriented. | Pass. |
| Dark/light background compatibility | Should work against existing site surfaces. | White/bright image may need framed treatment on dark sections. | Conditional; use contained plate treatment. |
| Text readability | Text inside image should remain legible where used. | Many small labels may not survive small responsive placements. | Conditional; avoid small thumbnail use. |
| Compression/readiness | Should be web-optimized before production. | `isikolo.png` is too large. `isikolosmaller.jpg` is much lighter and better for review, but should still be exported to a clean production WebP if approved. | Conditional; prefer smaller JPG as review source. |
| File naming | Production filename should be clean and intent-specific. | `isikolo.png` and `isikolosmaller.jpg` are not final production names. | Rename/export recommended later. |

## Technical Asset Review

| Check | Required standard | Current observation | Recommended action |
| --- | --- | --- | --- |
| File type | Use the lightest suitable production format. | Large source is PNG; smaller candidate is JPG. | Prefer the smaller JPG as review source, then export WebP after approval. |
| File size | Production image should be compressed for web performance. | `isikolo.png`: `7,679,101` bytes. `isikolosmaller.jpg`: `229,385` bytes. | Do not commit PNG as-is; smaller JPG is a better candidate but still keep uncommitted in 20K. |
| Dimensions | Should support responsive crops without overserving. | `isikolo.png`: `2016 x 2088`. `isikolosmaller.jpg`: `1008 x 1044`. | Use smaller source for review; export responsive WebP sizes later if approved. |
| Alpha/transparency | PNG alpha is justified only if transparency is needed. | PNG is RGBA/alpha-capable; JPG has no alpha. | Alpha does not appear necessary for the cover-style image. |
| Compression level | Should be production optimized. | Smaller JPG is already compressed, but not final production format. | Re-export to WebP with QA if approved. |
| PNG justification | PNG should be used only for transparency or exact graphic needs. | Full-frame illustrated cover does not appear to require PNG. | Prefer JPG/WebP path over PNG. |
| WebP preference | Production image should favor WebP where possible. | No WebP export exists. | Create approved WebP export in a later milestone. |
| Public location | Public assets should be committed only after approval. | Both candidates are under `public/assets/images` but untracked. | Keep both uncommitted until approved. |
| Asset registry | Production assets should be registered only when integration is planned. | Not registered. | Do not update `assetRegistry.ts` in 20K. |

## Potential Future Use Cases

| Future use | Fit level | Risk level | Implementation complexity | Recommended next milestone |
| --- | --- | --- | --- | --- |
| Sponsor Isikolo section | Medium-high | Medium | Medium | `20L Isikolo Image Optimization and Registry` if approved. |
| Education / Isikolo feature block | High | Medium | Medium | `20L Isikolo Sponsor Section Visual Integration` after optimized export. |
| Public homepage secondary image | Medium | Medium-high | Medium | Only after mobile crop review. |
| Social preview / campaign thumbnail | Medium | Medium | Medium | Requires crop, compression, and text-readability review. |
| Resource page visual support | Medium | Low-medium | Low | Possible after registry and optimization. |
| Not used publicly | High if uncertainty remains | Low | Low | `20L Isikolo Visual Replacement Brief` if current asset is rejected. |

## Integration Options

### Option A: Do Not Use the Image

Leave the image untracked or move it to an archive/candidate area later.

This is safest if source rights, technical claims, mobile readability, or third-party model references cannot be confirmed.

### Option B: Approve After Optimization

Approve the smaller cover image conditionally, then re-export as optimized WebP with a clean production filename.

Possible future filename:

- `isikolo-ai-cover-education-visual.webp`

Future work would include:

- Confirm source rights and cover-art approval.
- Review internal text and technical claims.
- Verify third-party model naming.
- Use `isikolosmaller.jpg` as the preferred review source.
- Create optimized WebP export.
- Add to `assetRegistry.ts` only in a later integration milestone.
- Integrate only after desktop and 390px mobile crop QA.

### Option C: Replace Image

Create or source a cleaner mission-led Isikolo visual that is less text-heavy, easier to crop, and more aligned to the current public site treatment.

Keep the current PNG out of production.

## Recommended Decision

Recommended decision: **Option B, conditional approval after optimization and human review.**

The image is visually aligned with Isikolo’s South African education mission and has strong public storytelling value. The newly identified `isikolosmaller.jpg` is a better review candidate than the large PNG because it is the smaller compressed IsikoloAI cover image. However, neither image should be committed or integrated in 20K because the artwork is still text-dense and contains technical/model references that should be verified before publication.

The current file should remain uncommitted until a later milestone confirms:

- source and usage rights
- confirmation that `isikolosmaller.jpg` is the approved cover-art source for production export
- technical copy accuracy
- third-party model/reference acceptability
- optimized WebP export
- production filename
- desktop and 390px mobile crop suitability

## Future Milestone Recommendation

Recommended next milestone if the image is approved:

`20L Isikolo Image Optimization and Registry`

Alternative if the visual is rejected:

`20L Isikolo Visual Replacement Brief`

Alternative if optimization and placement are explicitly approved together:

`20L Isikolo Sponsor Section Visual Integration`

## Do Not Integrate Yet

Do not integrate:

- `public/assets/images/isikolo.png`
- `public/assets/images/isikolosmaller.jpg`
- raw candidate media
- private/family/legal/court/evidence/financial material
- new payment providers
- payment scripts
- support tracking
- analytics
- embedded widgets
- new route/app/registry changes

## Safety Confirmations

- Docs-only decision pass.
- No public assets committed.
- `public/assets/images/isikolo.png` remains uncommitted.
- `public/assets/images/isikolosmaller.jpg` remains uncommitted.
- No website components changed.
- No sponsorship links changed.
- No contact/social registry changed.
- No `/os` changes.
- No route changes.
- No app ID changes.
- No `assetRegistry.ts` changes.
- No GTR asset movement.
- No raw media staged.
- No 18I asset changes.
- No 20F PDF changes.
- Public/private split preserved.

## 20K Decision

20K is complete when this decision plan is reviewed and merged. Only after 20K may the project decide whether to optimize, rename, register, or integrate the Isikolo image asset.
