# Phase 22C: Public Homepage Section Order Implementation Plan

## Review Status

- Drafted in 22C.
- Implementation planning milestone only.
- Docs-only.
- No `PublicHome.tsx` edits.
- No source changes.
- No private OS shell changes.
- No route changes.
- No app ID changes.
- Not merged yet.

## Purpose

22C converts the approved 22A and 22B public/private framework work into a careful source-edit plan for a future public homepage section-order implementation milestone.

This milestone does not reorder the homepage. It defines the intended order, movement rules, source constraints, QA gates, and risks before any layout source is changed.

## Governing References

Primary references:

- `docs/phase-22/22a-public-profile-vs-private-os-framework-separation-review.md`
- `docs/phase-22/22b-public-website-information-architecture-refinement.md`
- `src/pages/PublicHome.tsx`

22A established the separation between the public profile website and private OS-style experience.

22B defined the public website information architecture and recommended a public-first homepage order.

22C turns that recommendation into an implementation plan only.

## Current Public Homepage Section Order

Current order in `src/pages/PublicHome.tsx`:

1. Boot sequence / public reveal.
2. Public navigation.
3. Public hero / founder profile via `PublicHeroCinematic`.
4. `ManifestoPanel`.
5. `FounderManualSection`.
6. Founder Journey timeline via `EditorialSection id="timeline"`.
7. `FounderPhaseStrip`.
8. Product Architecture via `EditorialSection id="product-architecture"`.
9. Media and Signals via `ProofBand id="video-vault"`.
10. Evidence and Trust via `ProofBand id="evidence-vault"`.
11. Investor Access via `EditorialSection id="investor-room"`.
12. `GTR3Spotlight`.
13. `SupportWorkStrip`.
14. `ConnectStrip`.

Current source-local data blocks:

- `batch01SelectedCards`
- `mediaSignalItems`
- `trustPreviewItems`

These data blocks should remain intact during a first order-only implementation pass unless a later milestone explicitly approves copy or content changes.

## Recommended Future Homepage Section Order

Recommended future order for the next source-edit milestone:

1. Boot sequence / public reveal.
2. Public navigation.
3. Public hero / founder profile.
4. Manifesto / company positioning.
5. Founder Manual / principles excerpt.
6. Product Architecture / portfolio preview.
7. Sponsor Isikolo / education mission support.
8. Founder Journey / public timeline.
9. GTR³ / book and story layer.
10. Media and Signals.
11. Evidence and Trust.
12. Investor / partner access.
13. Connect.

Rationale:

- The visitor should understand founder identity and platform direction before seeing the product cards.
- Product Architecture should appear before deeper history/proof layers so it reads as a public platform preview.
- Sponsor Isikolo should sit close to product/mission context rather than near the footer.
- Timeline and GTR³ should support the founder arc after the immediate platform/product mission is clear.
- Media, evidence, and investor sections should remain lower on the page as proof and access layers.
- Connect remains the final action surface.

## Current-To-Future Section Map

| Current section | Current position | Future position | Implementation action | Notes |
| --- | ---: | ---: | --- | --- |
| Boot sequence / reveal | 1 | 1 | Keep. | No change. |
| Public navigation | 2 | 2 | Keep. | Later 22D/22E may align labels and IDs. |
| Public hero | 3 | 3 | Keep. | No source movement. |
| Manifesto panel | 4 | 4 | Keep. | May later become company/platform positioning. |
| Founder Manual | 5 | 5 | Keep. | No movement in first pass. |
| Founder Journey timeline | 6 | 8 | Move below Sponsor Isikolo. | Keep `id="timeline"` unless nav work is also approved. |
| Founder Phase strip | 7 | 8-adjacent or defer | Keep near timeline or defer. | Needs decision: it may duplicate Founder Manual / phase content. |
| Product Architecture | 8 | 6 | Move upward after Founder Manual. | Preserve card list and copy. |
| Media and Signals | 9 | 10 | Move lower after GTR³. | Preserve current curated items. |
| Evidence and Trust | 10 | 11 | Move lower after Media. | Preserve current public-safe filtering. |
| Investor Access | 11 | 12 | Move lower after Evidence. | Keep request-only. |
| GTR³ spotlight | 12 | 9 | Move above Media. | Keep symbolic/aspirational framing. |
| Sponsor Isikolo | 13 | 7 | Move upward after Product Architecture. | Preserve live links and disclaimer. |
| Connect | 14 | 13 | Keep final. | No contact/social changes. |

## Sections To Keep On Homepage

Keep in the first implementation pass:

- Public hero.
- Manifesto panel.
- Founder Manual section.
- Product Architecture.
- Sponsor Isikolo.
- Founder Journey timeline.
- GTR³ spotlight.
- Media and Signals.
- Evidence and Trust.
- Investor Access.
- Connect.

Keep but watch for later tightening:

- Founder Phase strip.
- Media and Signals.
- Evidence and Trust.
- Investor Access.

These remain useful but may need future condensation if the homepage still feels dense after reordering.

## Sections To Move To Future Routes

Do not move anything to new routes in the first source-edit milestone.

Candidate future routes from 22B:

- `/founder` or `/about` for full founder profile.
- `/platform` for JB³Ai / OS³ positioning.
- `/products` for the full approved product portfolio.
- `/isikolo` for IsikoloAI education mission and support context.
- `/gtr3` for book/story expansion.
- `/media` for media archive.
- `/proof` for public-safe proof overview.
- `/investor` for investor request orientation.

22C recommendation:

Treat these as later route-planning candidates only. Do not add routes during a section-order implementation pass.

## Sections To Defer

Defer these decisions until after the first reorder is visually reviewed:

- Whether `FounderPhaseStrip` remains on the homepage or moves into a founder/about page.
- Whether Media and Signals should be collapsed into a smaller proof strip.
- Whether Evidence and Trust should remain visible or become request-access oriented.
- Whether Investor Access should become a dedicated route instead of a homepage section.
- Whether Sponsor Isikolo needs a dedicated `/isikolo` route.

## Private OS References To Reduce Or Separate

Public homepage private OS references should become preview/access-point only.

Keep for now:

- One nav/action button: Preview Private OS.
- Product-card risk notes that private OS³ access remains gated.
- Media CTA that routes to `/login`, unless a later copy pass changes it.
- Connect CTA that allows entering the private OS preview.

Reduce in future copy pass:

- Repeated use of "OS" as the whole public site identity.
- Any public wording that makes the homepage feel like the private OS itself.
- Any implication that `/login` is real auth or account provisioning.

Implementation rule:

Do not edit `/login`, `/os`, app registry, or private OS shell in the section-order implementation milestone. Private OS copy and taxonomy belong to later private-side milestones.

## Implementation Constraints For Future Source Pass

The future implementation milestone should:

- Edit `src/pages/PublicHome.tsx` only unless navigation labels/targets are explicitly included.
- Move existing JSX blocks rather than rewriting section content.
- Preserve component props and handlers.
- Preserve `batch01SelectedCards`.
- Preserve `mediaSignalItems`.
- Preserve `trustPreviewItems`.
- Preserve Sponsor Isikolo links and copy.
- Preserve contact/social links.
- Preserve current routes.
- Preserve app IDs.
- Preserve `assetRegistry.ts`.
- Avoid new CSS unless a visual QA issue requires a targeted follow-up.

The future implementation milestone should not:

- Add new products.
- Add new images.
- Add routes.
- Add public PDFs or resources.
- Edit raw intake files.
- Change payment links.
- Change contact/social links.
- Redesign the private OS shell.
- Stage `vite.config.ts`.
- Use `git add .`.

## Source Edit Plan For Future Milestone

Recommended future source-edit steps:

1. Start from clean `main`.
2. Confirm `vite.config.ts` local-only dev change is not staged.
3. Open a new implementation branch.
4. In `src/pages/PublicHome.tsx`, move the Product Architecture block above the timeline.
5. Move `SupportWorkStrip` directly after Product Architecture.
6. Move the timeline and `FounderPhaseStrip` after Sponsor Isikolo.
7. Move `GTR3Spotlight` after the timeline / phase area.
8. Keep Media, Evidence, Investor, and Connect in that order after GTR³.
9. Do not alter component internals.
10. Run `npm run build`.
11. Run desktop and 390px mobile visual QA.
12. Commit only approved source/docs files with targeted staging.

## Proposed Future Homepage Order In Source Terms

Future JSX block order:

1. `<PublicNav />`
2. Hero orb backgrounds.
3. `<PublicHeroCinematic />`
4. `<ManifestoPanel />`
5. `<FounderManualSection />`
6. Product Architecture `<EditorialSection id="product-architecture" />`
7. `<SupportWorkStrip />`
8. Timeline `<EditorialSection id="timeline" />`
9. `<FounderPhaseStrip />`
10. `<GTR3Spotlight />`
11. `<ProofBand id="video-vault" />`
12. `<ProofBand id="evidence-vault" />`
13. Investor `<EditorialSection id="investor-room" />`
14. `<ConnectStrip />`

Note:

This order keeps Connect final and does not require new routes, new data, or new component APIs.

## Navigation Considerations

22C does not implement nav changes, but flags the following for the next navigation milestone:

- `PublicNav` currently links `Projects` to `projects`.
- The live Product Architecture section uses `product-architecture`.
- Hero project action already targets `product-architecture`.

Recommended future nav change:

- Replace `Projects` with `Products`.
- Target `product-architecture`.
- Add or consider `Isikolo` if Sponsor Isikolo remains prominent after reordering.
- Consider merging Media and Evidence under `Proof` if nav density remains high.

Do not combine nav changes with the first section-order pass unless explicitly approved.

## Risks Before Implementation

| Risk | Why it matters | Control |
| --- | --- | --- |
| Sponsor Isikolo moving upward changes page emphasis. | The site may feel more sponsorship-forward. | Keep mission-led copy and review desktop/mobile balance. |
| Product Architecture moving upward increases product weight. | Founder story could feel secondary. | Keep founder hero, manifesto, and principles above it. |
| Timeline moving lower may reduce historical context early. | The founder arc may be less immediate. | Keep short founder/profile copy in hero and principles. |
| GTR³ moving above proof sections may feel story-heavy. | Book/story layer could overtake trust flow. | Keep GTR³ symbolic and concise. |
| Media/Evidence/Investor lower down may reduce proof visibility. | Serious reviewers may need proof quickly. | Keep nav links or access CTAs available. |
| Existing nav target mismatch remains. | "Projects" nav may not reach Product Architecture. | Address in separate nav alignment milestone or include only if approved. |
| Mobile length remains high. | Reordering does not reduce page height. | Use 390px QA and future condensation milestone if needed. |

## QA Criteria For Future Implementation

Build:

- `npm run build` passes.

Desktop visual QA:

- Homepage renders at 100% zoom.
- New order is visually understandable.
- Product Architecture appears before Timeline.
- Sponsor Isikolo appears directly after Product Architecture.
- GTR³ appears before Media / Evidence / Investor.
- Connect remains final.
- No broken images.
- No horizontal overflow.
- No awkward section collision.
- No duplicated product rail or held product leakage.

390px mobile QA:

- Same order is preserved.
- No horizontal overflow.
- Cards remain readable.
- Sponsor Isikolo buttons remain usable.
- Timeline remains readable.
- GTR³ does not crowd adjacent sections.
- Connect remains usable at the bottom.

Content safety QA:

- No new product claims.
- No new private OS claims.
- No current iMED service claims.
- Trust In Hope remains historical.
- GTR³ remains symbolic/aspirational.
- Sponsor Isikolo remains non-charitable / non-tax-deductible support language.
- Payment/contact/social links unchanged.

Source safety QA:

- No route changes.
- No app ID changes.
- No `assetRegistry.ts` changes.
- No private OS shell edits.
- No raw intake files staged.
- `vite.config.ts` remains unstaged unless separately approved.

## Proposed Follow-On Milestones

### 22D: Public Homepage Section Order Implementation

Implement the approved section order in `src/pages/PublicHome.tsx`.

Scope:

- Move existing JSX blocks only.
- No nav changes unless explicitly approved.
- No copy rewrite.
- No routes.
- No assets.

### 22E: Public Navigation Label and Target Alignment

Align public nav labels and section IDs.

Scope:

- `Projects` to `Products`.
- `projects` target to `product-architecture` or an approved future section ID.
- Consider `Proof`, `Isikolo`, and `Access` labels only if approved.

### 22F: Public Homepage Copy Boundary Refinement

Reduce public/private ambiguity in homepage copy.

Scope:

- "Jonathan Blackburn OS" naming.
- "Private OS Preview" language.
- "Executive Command OS" usage.
- Product-card risk notes.

### 22G: Public Route Planning

Decide whether to create future public pages.

Scope:

- `/founder`
- `/platform`
- `/products`
- `/isikolo`
- `/gtr3`
- `/resources`

### 22H: Private OS Shell Framework Review

Return to private OS once public structure is cleaner.

Scope:

- Launcher grouping.
- Module taxonomy.
- Private preview language.
- App registry clarity.

## Explicit Non-Goals

22C does not:

- Edit `PublicHome.tsx`.
- Reorder live homepage sections.
- Edit `PublicNav.tsx`.
- Change navigation labels.
- Add routes.
- Add pages.
- Add products.
- Add images.
- Move assets.
- Edit raw intake files.
- Change payment links.
- Change contact/social links.
- Change Sponsor Isikolo links.
- Change `/login`.
- Change `/os`.
- Change private OS shell code.
- Change app IDs.
- Change `assetRegistry.ts`.
- Stage `vite.config.ts`.
- Use `git add .`.

## Safety And Staging Notes

- This is a docs-only milestone.
- Stage only `docs/phase-22/22c-public-homepage-section-order-implementation-plan.md`.
- `vite.config.ts` remains a local-only ngrok dev-server change and must not be staged in 22C.
- Raw intake candidates remain untracked by design.
- No build is required unless source files are touched.

## Build Result

No build required. 22C is docs-only.

## 22C Decision

22C recommends a future source-edit milestone that moves existing homepage blocks only:

- Product Architecture moves up after Founder Manual.
- Sponsor Isikolo moves directly after Product Architecture.
- Timeline and Founder Phase move after Sponsor Isikolo.
- GTR³ moves before Media / Evidence / Investor.
- Media, Evidence, Investor, and Connect remain lower-page proof/action layers.

The next safest milestone is 22D: Public Homepage Section Order Implementation.
