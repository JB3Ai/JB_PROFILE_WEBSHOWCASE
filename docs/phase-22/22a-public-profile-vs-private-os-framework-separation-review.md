# Phase 22A: Public Profile Website vs Private OS Framework Separation Review

## Review Status

- Drafted in 22A.
- Planning and framework review only.
- No source changes.
- No redesign.
- No route changes.
- No app ID changes.
- No asset changes.
- No payment/contact/social changes.
- Not merged yet.

## Purpose

22A documents the separation needed between two related but distinct experiences:

- The public founder, corporate, and profile website.
- The private OS-style operating system experience.

The current site is visually strong and increasingly coherent, especially after the Phase 21 product-card correction work. The larger structural question is now architectural rather than cosmetic: the public website and private OS preview need clearer responsibilities, navigation rules, naming rules, and content boundaries before further visual expansion.

## Current State Summary

The current public homepage at `/` is a cinematic founder platform. It contains:

- Public hero and founder positioning.
- Founder Manual / principles material.
- Founder Journey timeline.
- Product Architecture with the approved Batch 01 cards.
- Media and Signals.
- Evidence and Trust.
- Investor Access preview.
- GTR³ spotlight.
- Sponsor Isikolo.
- Connect strip.

The current private preview flow is:

- `/login`: a public-safe preview gate with demo PIN language.
- `/os`: a private-shell preview titled Executive Command OS.

The private OS shell currently provides:

- Desktop-style shell layout.
- Launcher and dock.
- Phase system.
- Module windows.
- App registry entries for founder brief, project showcase, video vault, daily show, public feed, evidence vault, timeline, GTR³, investor room, and connect.

The private shell is useful as a direction, but it still behaves partly like a restyled mirror of public website sections instead of a fully differentiated private operating-system concept.

## Public Profile Website Responsibilities

The public website should be the clean, readable, externally understandable layer.

Primary responsibilities:

- Explain who Jonathan Blackburn is.
- Establish JB³Ai, OS³, and the founder-system direction without exposing private systems.
- Present public-safe proof, story, and product signals.
- Show a controlled product/project portfolio.
- Maintain historical accuracy around Elite Technologies, Trust In Hope, iMED, and GTR³.
- Present Isikolo sponsorship and public resource links.
- Provide direct contact, social, and request-access routes.
- Build trust without implying private access, real account provisioning, or live operational dashboards.

Recommended public website tone:

- Founder profile.
- Editorial technology platform.
- Premium public credibility layer.
- Public-safe product architecture preview.
- Sponsor and contact surface.

Public website content should avoid:

- Private OS module density.
- Internal workflow language unless abstracted.
- Demo PIN prominence outside the preview gate.
- Claims that private systems, dashboards, or sensitive materials are live or generally accessible.
- Overloading the homepage with every app, product, video, and evidence item.

## Private OS Responsibilities

The private OS should be the controlled operating-system experience, not simply another public content page.

Primary responsibilities:

- Orient trusted reviewers inside a private command-layer metaphor.
- Present gated modules as controlled windows, tools, and review rooms.
- Separate private proof, investor material, workflows, and product roadmaps from the public website.
- Clarify that sensitive files and operational details remain withheld unless explicitly approved.
- Model the future OS³ / Executive Command OS direction without overclaiming real backend access.
- Support future authenticated or permissioned workflows without exposing them prematurely.

Recommended private OS tone:

- Command architecture.
- Private review shell.
- Module launcher.
- Operating context.
- Controlled access environment.

Private OS content should avoid:

- Public marketing-card repetition as the main interaction pattern.
- Public social/contact clutter.
- Sponsor/payment surfaces.
- Unreviewed public copy.
- Anything that implies secure production account access before backend/auth is real.

## Areas of Overlap and Confusion

| Area | Current overlap | Risk | Recommendation |
| --- | --- | --- | --- |
| Naming | Public site and private shell both use Jonathan Blackburn OS language. | Visitors may not know whether OS means the public website brand or the private operating shell. | Define a naming ladder: public site, private OS preview, OS³ platform, and JB³Ai modules. |
| Navigation | Public nav includes website sections and private OS preview entry points. | The homepage can feel like a portal, portfolio, investor room, and OS launcher at the same time. | Keep public nav editorial; make private OS entry a distinct action. |
| Projects/products | Product Architecture now renders public cards, while private OS has Project Showcase and module registry. | Product cards and OS modules can feel duplicated. | Public cards should explain products; private OS modules should simulate controlled review/workflow surfaces. |
| Evidence/investor | Public homepage previews evidence and investor material; private OS also has evidence and investor modules. | Public/private boundary can blur if both surfaces feel equally available. | Public: credibility preview. Private OS: gated review room metaphor. |
| Media/feed | Public Media and Signals mirrors OS modules Video Vault, JB³ Daily Show, and Public Feed. | Same content can feel repeated in two styles. | Public: curated highlights. Private OS: workspace library and filtered review panels. |
| Request/access | Public CTAs, login preview, and OS preview all route toward access. | Users may mistake preview PIN for real authorization. | Keep `/login` as demo-preview gate only until real auth exists; strengthen language later. |
| Design density | Public homepage has cinematic editorial sections; OS shell has dense command UI. | If both use similar dark/glass treatments, separation can feel cosmetic rather than structural. | Future design pass should differentiate public editorial pacing from OS command density. |

## Recommended Future Information Architecture

### Public Homepage

Recommended role:

The public landing page should be the primary external story and trust surface.

Recommended section order:

- Hero: founder profile and high-level OS³ direction.
- Founder principles / manual excerpt.
- Founder journey / public timeline.
- Product Architecture: limited public card set only.
- Isikolo sponsorship / mission support.
- Resource Library, if kept compact.
- Media and Signals, curated.
- Evidence and Trust, restrained.
- Investor Access, request-only.
- GTR³ spotlight, symbolic and aspirational.
- Connect.

Public homepage should not act as:

- Full OS launcher.
- Full product directory.
- Full media archive.
- Private investor room.
- Backend/auth preview.

### Founder Profile

Recommended role:

Founder profile should become the cleanest expression of the public identity layer.

Recommended content:

- Short public bio.
- Principles.
- Historical chapters with careful public-safe wording.
- Founder story / GTR³ symbolic link.
- Public contact and request-access routes.

Keep out:

- Private family/legal/evidence material.
- Unreviewed raw biography extracts.
- Operational claims about iMED or Trust In Hope as current services.

### Product / Project Portfolio

Recommended role:

The public portfolio should explain modules, products, and layers within OS³ without becoming the private OS itself.

Recommended grouping:

- Core platform layer: OS³ Dash, JB³Ai Super Agent OS, ClipboardAi.
- Public app / product layer: IsikoloAI and future approved cards.
- Held or restricted systems: VoiceGrid Ai, DukeBox of London, InvestigatorAi, forensic intelligence systems, and other sensitive products until reviewed.

Rules:

- Public cards explain value and status.
- Private OS modules demonstrate controlled review context.
- No product moves public without copy, asset, rights, and claims approval.

### Sponsor / Support Section

Recommended role:

Sponsor Isikolo should remain mission-led and separate from the private OS.

Rules:

- Keep support framed around Isikolo and free learner access.
- Do not put payment buttons inside `/os`.
- Do not mix sponsor CTAs into private module launch flows.
- Keep live links simple and external unless a future payment milestone expands scope.

### Private OS Preview

Recommended role:

The private preview should stay a controlled demonstration of the operating-system direction.

Recommended structure:

- `/login`: preview gate and access orientation.
- `/os`: shell preview.
- Clear safety note that private files, real workflows, backend systems, and account provisioning are withheld.
- Clear distinction between preview modules and real operational tools.

Recommended future copy adjustment:

- Use "Private OS Preview" for the current public build.
- Reserve stronger "Executive Command OS" or "OS³ Command Environment" language for the private shell interior.

### Private OS Launcher / Module Shell

Recommended role:

The launcher should organize private review modules, not duplicate homepage sections.

Future module grouping:

- Identity and Founder Context: Founder Brief, Founder Manual.
- Product Review: Project Showcase, Product Architecture, OS³ Dash.
- Proof and Access: Evidence Vault, Investor Room.
- Media Library: Video Vault, JB³ Daily Show, Feed.
- Story Layer: Timeline, GTR³.
- Contact / Next Action: Connect, Request Access.

Future improvements:

- Add module grouping labels.
- Add public/private status indicators per module.
- Add "preview only" badges where no real backend exists.
- Keep the dock lean and avoid treating every homepage section as an app forever.

## Recommended Naming Model

| Layer | Recommended name | Public-facing usage |
| --- | --- | --- |
| Public site | Jonathan Blackburn public profile / founder platform | External public website and profile layer. |
| Company / ecosystem | JB³Ai | Brand-facing company/platform ecosystem name. |
| Core platform | OS³ | Platform name; always superscripted in brand-facing copy. |
| Private shell | Private OS Preview / Executive Command OS Preview | Current controlled review shell. |
| Products/apps | OS³ modules, JB³Ai products, public apps | Product cards and future portfolio surfaces. |

Brand rule:

- Use JB³Ai and OS³ in public-facing copy.
- Use plain `jb3ai` or `os3` only in technical contexts such as URLs, filenames, code, slugs, or registry keys.

## Recommended Future Milestone Sequence

### 22B: Public Navigation and Section Map Review

Docs-first review of current nav IDs, section IDs, scroll targets, and public labels.

Purpose:

- Resolve legacy `projects` vs `product-architecture` naming.
- Decide whether public nav should include "Products", "Founder", "Sponsor", "Evidence", and "Connect".
- Confirm no source changes until the map is approved.

### 22C: Private OS Module Taxonomy Review

Docs-only review of app registry grouping.

Purpose:

- Decide which OS apps remain.
- Group modules into identity, product, proof, media, story, and contact layers.
- Identify modules that are public mirrors versus true private review surfaces.

### 22D: Public / Private Copy Boundary Pass

Docs-only or very small copy pass.

Purpose:

- Define exact copy rules for "Private OS Preview", "Executive Command OS", "OS³", "request access", and "preview shell".
- Reduce ambiguity around demo PIN and real access.

### 22E: Public Homepage Information Architecture Refinement

Controlled source pass after review.

Purpose:

- Adjust section order or labels only after 22B and 22D.
- Preserve existing successful visual system.
- Avoid adding products or assets.

### 22F: Private OS Shell Framework Refinement

Controlled private shell pass.

Purpose:

- Improve launcher grouping, module labels, status states, and shell readability.
- Keep public homepage untouched.

### 22G: Visual Differentiation Pass

Design refinement pass.

Purpose:

- Make public website feel editorial and premium.
- Make private OS feel like a command environment.
- Reduce places where both surfaces feel like the same dark glass page.

## Explicit Non-Goals for 22A

22A does not:

- Redesign the homepage.
- Redesign the private OS shell.
- Add, remove, or reorder live sections.
- Add new products.
- Add new images.
- Move or publish raw media.
- Edit raw intake files.
- Modify payment links.
- Modify contact/social links.
- Touch `vite.config.ts`.
- Change routes.
- Change app IDs.
- Change `assetRegistry.ts`.
- Add backend, auth, CMS, payment logic, or real private file access.
- Commit raw candidate files.

## Safety Confirmations

- Public/private boundary remains preserved.
- 21B / 21B2 product-card work remains closed and uncontaminated.
- `vite.config.ts` local ngrok dev-server change remains outside this milestone.
- Raw intake candidates remain untracked by design.
- No public asset movement.
- No app registry changes.
- No route changes.
- No UI changes.

## Build Result

No build required for 22A because this milestone is docs-only.

## 22A Decision

22A recommends treating the current state as a successful combined prototype that now needs clearer framework separation.

The public website should become the premium public founder/profile/corporate layer. The private OS should become a more clearly bounded command-shell preview with grouped modules, stronger preview/access language, and less one-to-one duplication of public homepage sections.

The next safest milestone is 22B: Public Navigation and Section Map Review.
