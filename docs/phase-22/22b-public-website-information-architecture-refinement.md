# Phase 22B: Public Website Information Architecture Refinement

## Review Status

- Drafted in 22B.
- Public website information architecture review only.
- Docs-only milestone.
- No source changes.
- No private OS shell changes.
- No route changes.
- No app ID changes.
- Not merged yet.

## Purpose

22B uses the completed 22A framework separation review to refine the public-facing homepage and profile structure before any future layout, routing, or private OS changes.

The goal is to make the public site read as a premium founder, company, and project profile first. The private OS should remain available as a controlled preview/access point, but it should not dominate the public information architecture.

## Governing Reference

Primary reference:

- `docs/phase-22/22a-public-profile-vs-private-os-framework-separation-review.md`

22A established that the project contains two related but distinct experiences:

- A public corporate / founder / profile website.
- A private OS-style system experience.

22B focuses only on the public website side.

## Current Public Homepage Summary

Current public homepage structure in `src/pages/PublicHome.tsx`:

1. Boot sequence / public reveal.
2. Public navigation.
3. Public hero / founder profile.
4. Manifesto panel.
5. Founder Manual section.
6. Founder Journey timeline.
7. Founder Phase strip.
8. Product Architecture section with three selected cards.
9. Media and Signals proof band.
10. Evidence and Trust proof band.
11. Investor Access preview.
12. GTR³ spotlight.
13. Sponsor Isikolo strip.
14. Connect strip.

Current public routes:

- `/`: public homepage.
- `/request-access`: manual access / contact routing.
- `/login`: private OS preview gate.
- `/os`: private OS preview shell.

Current public navigation labels:

- Founder
- Projects
- Media
- Evidence
- Investor
- Timeline
- GTR³
- Connect

Current issue:

The public homepage is strong but dense. It still asks the visitor to understand founder story, company profile, products, media, evidence, investor access, GTR³, sponsorship, and private OS preview in one continuous flow.

## Recommended Public Homepage Section Order

Recommended public homepage order for future implementation:

1. Hero / Founder Positioning
2. About / Founder Profile
3. Principles / Founder Manual Excerpt
4. Company and Platform Positioning
5. Product Architecture / Portfolio Preview
6. IsikoloAI / Sponsor Isikolo
7. Founder Journey / Public Timeline
8. GTR³ / Book and Story Layer
9. Media / Signals
10. Evidence / Trust
11. Investor / Partner Access
12. Connect

Rationale:

- Founder identity and company positioning should be understood before the product cards.
- Product Architecture should read as a portfolio preview, not as a private OS launcher.
- IsikoloAI sponsorship should sit near the public product/mission layer, not after every evidence and investor section.
- Timeline and GTR³ should support the founder story, not interrupt the first product/mission scan.
- Evidence and Investor sections should remain lower-trust layers for serious reviewers.
- Connect remains the final action point.

## Recommended Public Navigation Model

Recommended primary public nav labels:

| Label | Target / meaning | Notes |
| --- | --- | --- |
| Founder | Founder profile / about section. | Keep. |
| Platform | Company and OS³ positioning. | New public label to separate JB³Ai / OS³ from private shell. |
| Products | Product Architecture / portfolio preview. | Replace legacy `Projects` label. |
| Isikolo | Sponsor Isikolo / education mission. | Add only if the section remains prominent. |
| Journey | Founder Journey / timeline / GTR³ path. | Cleaner than splitting Timeline and GTR³ too early. |
| Proof | Evidence / trust / selected media signals. | Merge Media and Evidence into one public trust label if nav density is too high. |
| Access | Request access / investor / private OS preview. | Separates action from editorial sections. |
| Connect | Contact and social links. | Keep. |

Recommended action buttons:

- Request Access
- Preview Private OS

Navigation issue to resolve in a future source milestone:

The current nav still uses `Projects` with section ID `projects`, but the 21B2-visible product section is `product-architecture`. A future source pass should align label and target:

- Label: Products or Platform.
- Target: `product-architecture` or a future `products` section ID.

Do not change this in 22B; document it for the next implementation pass.

## Public Sections To Keep

Recommended to keep on the homepage:

- Hero / founder positioning.
- Founder profile / public bio.
- Principles / Founder Manual excerpt.
- Product Architecture preview.
- Sponsor Isikolo.
- GTR³ symbolic/book preview.
- Connect.

Recommended to keep but tighten:

- Media and Signals.
- Evidence and Trust.
- Investor Access.
- Founder Journey timeline.

These sections are valuable but should be curated so the homepage does not feel like a full archive, investor room, and OS preview all at once.

## Public Sections To Move Or Defer

Recommended future route/page candidates:

| Content area | Recommended future home | Reason |
| --- | --- | --- |
| Full founder story | `/founder` or `/about` | Gives the public profile room to breathe. |
| Full product portfolio | `/products` or `/platform` | Prevents homepage card overload. |
| Media archive | `/media` | Keeps homepage curated. |
| Evidence / trust archive | `/proof` or gated `/request-access` flow | Reduces public/private ambiguity. |
| Investor material | `/investor` or request-only route | Keeps due diligence separate from public profile flow. |
| GTR³ / book story | `/gtr3` or `/story` | Lets book/story material develop without overtaking homepage. |
| Resource Library | `/resources` | Keeps PDFs and cutsheets controlled. |

Recommendation:

Do not add these routes yet. 22B only records the candidate structure.

## Private OS References To Reduce Or Separate

Current public references that should be reviewed in future copy/navigation passes:

- "Jonathan Blackburn OS" as the top-level public site name.
- "Preview Private OS" in the primary nav and multiple CTA locations.
- "Executive Command OS" in metadata and login language.
- Product cards that describe private OS³ access while also appearing on the public homepage.

Recommended future treatment:

- Public site: founder profile / JB³Ai platform / product architecture.
- Private OS: preview gate and command shell.
- OS³: platform name, not the whole public site.
- Executive Command OS: private shell interior, not the primary public homepage identity.

Keep:

- One clear "Preview Private OS" action for qualified reviewers.
- Safety language that no real private files, accounts, dashboards, or backend access are exposed.

Reduce:

- Repeated private OS mentions inside public editorial sections.
- Any public copy that makes the homepage feel like the OS itself.

## Proposed Future Public Routes / Pages

Candidate route map for later review:

| Route | Purpose | Priority | Notes |
| --- | --- | --- | --- |
| `/` | Public homepage / executive overview. | High | Keep concise and premium. |
| `/founder` or `/about` | Founder profile, principles, public story. | Medium | Useful if homepage remains dense. |
| `/platform` | JB³Ai / OS³ platform positioning. | Medium | Separates company/platform from products. |
| `/products` | Public product and module portfolio. | Medium | Future home for approved app cards. |
| `/isikolo` | IsikoloAI mission, support, education app context. | Medium | Only after copy/resource readiness. |
| `/gtr3` | Book/story layer. | Medium | Keeps GTR³ symbolic/aspirational. |
| `/media` | Public media/signals. | Low | Use if Media and Signals grows. |
| `/proof` | Public-safe proof/evidence overview. | Low / gated | Avoid exposing sensitive material. |
| `/investor` | Investor access request orientation. | Low / gated | Keep request-only until private review flow is mature. |
| `/request-access` | Manual access and contact routing. | Existing | Keep. |
| `/login` | Private OS preview gate. | Existing | Rename/copy refinement likely later. |
| `/os` | Private OS preview shell. | Existing | Private OS milestones should own this. |

## Proposed Follow-On Milestones After 22B

### 22C: Public Navigation and Section Target Alignment

Scope:

- Align public nav labels with actual homepage section IDs.
- Resolve `Projects` / `projects` vs `Product Architecture` / `product-architecture`.
- Keep source changes minimal.

Expected source area:

- `src/components/navigation/PublicNav.tsx`
- Possibly `src/pages/PublicHome.tsx` if section IDs need explicit alignment.

### 22D: Public Homepage Section Order Planning

Scope:

- Decide whether Sponsor Isikolo, Product Architecture, Timeline, GTR³, Media, Evidence, and Investor should be reordered.
- Docs-only unless exact order is approved.

### 22E: Public Homepage IA Implementation Pass

Scope:

- Implement only the approved order/label changes from 22B/22C/22D.
- No new products.
- No new assets.
- No private OS redesign.

### 22F: Public Copy Boundary Refinement

Scope:

- Tighten language around "Jonathan Blackburn OS", "OS³", "Private OS Preview", and "Executive Command OS".
- Reduce public/private ambiguity.

### 22G: Candidate Public Route Planning

Scope:

- Decide whether `/founder`, `/platform`, `/products`, `/isikolo`, `/gtr3`, or `/resources` should exist.
- No route creation unless separately approved.

### 22H: Private OS Framework Review

Scope:

- Return to the private shell after the public-side architecture is clear.
- Review launcher grouping, app registry, module taxonomy, and private preview language.

## Explicit Non-Goals

22B does not:

- Redesign the homepage.
- Change section order.
- Change navigation labels in source.
- Add routes.
- Add pages.
- Add products.
- Add images.
- Move or publish raw media.
- Edit raw intake files.
- Change payment links.
- Change contact/social links.
- Change Sponsor Isikolo links.
- Change private OS shell code.
- Change `/login` or `/os`.
- Change app IDs.
- Change `assetRegistry.ts`.
- Stage `vite.config.ts`.
- Use `git add .`.

## Safety And Staging Notes

- This is a docs-only milestone.
- Stage only `docs/phase-22/22b-public-website-information-architecture-refinement.md`.
- `vite.config.ts` remains a local-only ngrok dev-server change and must not be staged in 22B.
- Raw intake candidates remain untracked by design.
- No build is required unless source files are touched.

## Build Result

No build required. 22B is docs-only.

## 22B Decision

22B recommends treating the public homepage as a premium public profile and platform overview, not as the private OS experience itself.

The next safest implementation milestone is 22C: Public Navigation and Section Target Alignment.
