# Phase 20R: App Card Design System

## Review Status

Drafted in 20R.

Design-system pass.

Reusable component created but not rendered.

No visible app cards integrated.

Pending human review.

## Purpose

20R creates the controlled app/project card pattern required before IsikoloAI, Super Agent OS, OS3 Dash, or the wider JB3Ai portfolio appear as visible public cards.

The milestone keeps portfolio integration separate from component readiness. The card system exists so future milestones can use one public-safe structure rather than adding inconsistent product tiles, unsupported claims, or generic SaaS-style cards.

## Design Rules

| Area | Rule | Reason |
| --- | --- | --- |
| Visual posture | Premium founder OS, editorial technology platform, structured intelligence. | Keeps the portfolio aligned with 20P and 20Q. |
| Geometry | Restrained 10px-16px panel radius, not pill-heavy product tiles. | Preserves the sharper architectural direction. |
| Glow and shadows | Subtle steel-panel depth only. | Avoids generic neon AI-template styling. |
| Typography | Strong title, concise category/status metadata, readable detail copy. | Keeps cards scannable without overclaiming. |
| Image treatment | Optional contained image plate only. | Prevents unreviewed visuals from becoming required. |
| CTAs | Optional CTA row, disabled safely when no handler is provided. | Allows future planning, preview, or request-access states without broken buttons. |
| Risk notes | Optional risk/safety note supported. | Lets high-risk products carry review context before publication. |
| Mobile layout | Single-column, compact spacing, no overflow. | Keeps 390px mobile safe before first render. |
| Data integration | Component is not connected to homepage data in 20R. | Prevents accidental public portfolio launch. |

## Component Contract

Created component:

`src/components/public/AppPortfolioCard.tsx`

Supported fields:

| Field | Required | Purpose |
| --- | --- | --- |
| `name` | Yes | Public product, app, or platform name. |
| `category` | Yes | Portfolio layer or product type. |
| `status` | Yes | Readiness/status label such as planning, review, preview, or coming soon. |
| `shortDescription` | Yes | One concise public-safe summary. |
| `detail` | No | Supporting paragraph for future cards. |
| `imageSrc` | No | Optional approved production image path. |
| `imageAlt` | Required if image is used | Accessible description for the optional image. |
| `primaryCtaLabel` | No | Optional primary CTA label. |
| `secondaryCtaLabel` | No | Optional secondary CTA label. |
| `riskNote` | No | Optional public-safety or review note. |
| `disabled` | No | Disables CTA interaction and marks the card inactive. |
| `comingSoon` | No | Future-state display without broken live actions. |
| `onPrimaryAction` | No | Optional primary handler. |
| `onSecondaryAction` | No | Optional secondary handler. |

Implementation notes:

- Uses existing `AssetThumbnail` for optional image plates.
- Uses existing `PremiumButton` for optional CTAs.
- Uses `assetRegistry.projectPlaceholder` only as a fallback for supplied image paths.
- Does not add routes, data wiring, public assets, or visible homepage placement.

## Portfolio Copy Rules

| Candidate | Approved public direction | Restricted wording / claims |
| --- | --- | --- |
| IsikoloAI | Free AI-powered study support for South African learners, focused on schoolwork, revision, explanations, and practical learning support. | No school/government endorsement claim. No charity, NPO, or tax-deductible wording. No unsupported learner-outcome guarantee. |
| The DukeBox of London | Creative music and media concept for curated sound, culture, and digital entertainment experiences after rights review. | No unsupported licensing, artist, catalog, or rights claims. No implication of live commercial release unless confirmed. |
| ViewGridAi | Visual intelligence concept for structured views of complex information. | No surveillance claim. No CCTV access claim. No global monitoring overreach. No real-time tracking implication unless later verified. |
| ClipboardAi | Workflow-support concept for capturing, organizing, and moving operational information into clearer action. | No unsupported productivity guarantee. No private workflow exposure. No confidential client data. |
| Newsroom | Public intelligence and briefing concept for organizing news, signals, updates, and editorial context. | No claim of verified truth guarantee. No 100% resolution or misinformation-proof claim. No private source exposure. |
| InvestigatorAi | Research and investigation-support concept for lawful, auditable organization of information, leads, and analysis. | No surveillance, breach, target, hacker, tactical, or military language. No legal outcome guarantee. No private case/evidence material. |
| VoiceGrid Ai | Voice and communications workflow concept for routing, support, call handling, and operational voice infrastructure. | No unsupported pricing superiority claim. No unsupported encryption specification. No telecom availability claim unless verified. |
| JB3Ai Super Agent OS | Managed AI workforce architecture coordinating specialist agents across command, operations, research, development, creative, growth, legal, finance, intelligence, voice, and wellbeing workflows. | Do not present as a chatbot directory. No private workflow, client, legal, finance, or sensitive operational exposure. |
| OS3 Dash | Command architecture and operating dashboard concept for approvals, workflows, structured execution, and founder-level clarity. | No private OS exposure. No backend capability claim beyond public-safe positioning. No app ID or route implication. |
| JB3Ai Forensic Intelligence Systems | Founder-led intelligence architecture concept focused on human judgment, AI-assisted organization, auditable workflows, and lawful review. | No surveillance claim. No active case claim. No private legal/court/evidence/financial material. No guaranteed findings or outcomes. |

## Future Integration Map

| Future milestone | Likely use of card system | Gate before integration |
| --- | --- | --- |
| 20S IsikoloAI App Card Integration | Render one contained IsikoloAI app/resource card. | Human approval of 20O copy and 20M placement concerns. |
| 20T Portfolio Batch 01 Planning | Select the first small set of public-safe cards. | Confirm portfolio order, readiness labels, and source material. |
| 20U Super Agent OS Public Positioning | Prepare Super Agent OS card and architecture copy. | Keep architecture-level framing, not chatbot directory framing. |
| Later PDF/resource review | Attach resource links only after publication review. | Confirm public PDF safety, naming, and link readiness. |

## Not Integrated Yet

- No visible app cards added.
- No homepage portfolio section added.
- No IsikoloAI card rendered.
- No Super Agent OS card rendered.
- No portfolio batch rendered.
- No PDFs linked.
- No new images placed.
- No public resource publication.
- No payment, sponsorship, contact, or social changes.
- No `/os` changes.
- No route or app ID changes.
- No `assetRegistry.ts` changes.

## Safety Confirmations

- Component created for future controlled use only.
- Public/private split preserved.
- Intake files remain intake-only.
- Raw media remains untracked by design.
- Source PNG/JPG candidates remain uncommitted.
- No unsupported claims approved for public use.
- Restricted wording table included for high-risk portfolio candidates.
- Future visible placement requires a separate milestone and human review.

## Build Result

`npm run build` passed in 20R.

Build output:

- 391 modules transformed.
- CSS bundle: `dist/assets/index-D97kMKzg.css`.
- JS bundle: `dist/assets/index-CCMkhx6U.js`.
- Vite CJS Node API deprecation warning remains non-blocking.

## 20R Decision

20R is complete when the reusable app card component, style contract, and public-safe copy rules are reviewed, the build passes, and no visible UI integration has occurred.
