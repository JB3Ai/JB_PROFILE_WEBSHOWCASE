# Phase 21B: Batch 01 Selected Card Rendering Review

## Review Status

- Drafted in 21B.
- Selected card rendering review milestone.
- Three selected cards rendered only.
- VoiceGrid Ai not rendered.
- DukeBox of London not rendered.
- No new assets added.
- No WebP exports.
- No route changes.
- No app ID changes.
- Pending human review.

## Purpose

21B renders the three selected Batch 01 product cards using the registered 21A WebP assets and approved public copy from 20U. It keeps held products out of the public homepage until separate future review milestones approve their visual, copy, rights, and claims posture.

## Integration Rule

21B may render the selected three product cards only. It must not render VoiceGrid Ai or DukeBox of London, must not create new production assets, and must not alter unrelated public sections.

## Current Public Baseline

| Area | Current state before 21B | 21B action | Notes |
| --- | --- | --- | --- |
| IsikoloAI card | No standalone IsikoloAI app card was found in the current `src` homepage source. Sponsor Isikolo exists as a support strip. | No change. | 21B does not modify IsikoloAI-related assets, copy, or support flow. |
| Batch 01 selected cards | OS³ Dash, JB³Ai Super Agent OS, and ClipboardAi had optimised assets and registry keys from 21A, but no visible cards. | Rendered as a contained Product Architecture section. | Uses existing `AppPortfolioCard` system. |
| VoiceGrid Ai | Held after 20Y/20Z review. | Not rendered. | Multilingual cue / claims review still required. |
| DukeBox of London | Held after 20Y/20Z review. | Not rendered. | Rights / landmark-style review still required. |
| Sponsor Isikolo | Existing homepage support strip with live simple sponsorship links. | No change. | 21B does not touch payment/support content. |
| Contact/social | Existing compact Connect strip and registry. | No change. | 21B does not touch contact/social links. |
| `/os` | Existing private OS route and boundary. | No change. | 21B does not expose private OS material. |

## Rendered Card Inventory

| Product | Rendered in 21B? | Asset key | Image path | Copy source | CTA status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| OS³ Dash | Yes. | `os3DashCommandDashboard` | `/assets/images/os3-dash-command-dashboard.webp` | 20U / 20Z / 21A | Future-state labels rendered without actions. | No live route added. |
| JB³Ai Super Agent OS | Yes. | `jb3aiSuperAgentOsArchitecture` | `/assets/images/jb3ai-super-agent-os-architecture.webp` | 20U / 20Z / 21A | Future-state labels rendered without actions. | Human oversight note preserved. |
| ClipboardAi | Yes. | `clipboardAiPrivateWorkspace` | `/assets/images/clipboard-ai-private-workspace.webp` | 20U / 20Z / 21A | Future-state labels rendered without actions. | Security language remains general. |
| VoiceGrid Ai | No. | None. | None. | Not used. | Not rendered. | Held for separate review. |
| DukeBox of London | No. | None. | None. | Not used. | Not rendered. | Held for separate review. |

## Product-by-Product Rendering Review

### A. OS³ Dash

Visible title:

OS³ Dash

Image asset key:

`os3DashCommandDashboard`

Copy used:

Structure, visibility, and daily command for complex work. OS³ Dash is presented as a founder operating dashboard concept for organising priorities, approvals, workflows, and execution signals into one clearer command layer.

CTA used:

- Preview OS³ Dash
- Request Access

CTA status:

Future-state labels only. No click handler or new route added.

Public-safety notes:

The card avoids fully deployed SaaS claims, active private OS exposure, enterprise-scale claims, and real dashboard data claims.

Desktop layout notes:

Structural QA passed. The card uses the existing `AppPortfolioCard` desktop layout and the section compiles in the homepage build. Human browser visual QA is still required before merge approval.

390px mobile layout notes:

Structural QA passed. The existing mobile card CSS is used without new breakpoint rules. Human 390px browser visual QA is still required before merge approval.

Decision:

Rendered for human review.

### B. JB³Ai Super Agent OS

Visible title:

JB³Ai Super Agent OS

Image asset key:

`jb3aiSuperAgentOsArchitecture`

Copy used:

A managed AI workforce architecture for structured execution. The card describes specialist AI-assisted roles across operations, research, development, creative work, growth, finance, legal support, voice, and founder workflows while keeping human approval and oversight central.

CTA used:

- Preview Super Agent OS
- View Architecture

CTA status:

Future-state labels only. No click handler or new route added.

Brand text compliance:

Visible brand-facing copy uses JB³Ai. The platform concept is presented as an OS layer, and no public-facing non-superscript brand name is introduced.

Public-safety notes:

The card avoids autonomous replacement claims, self-running business claims, unsupported productivity guarantees, and private workflow exposure.

Desktop layout notes:

Structural QA passed. The card uses the existing `AppPortfolioCard` desktop layout and the section compiles in the homepage build. Human browser visual QA is still required before merge approval.

390px mobile layout notes:

Structural QA passed. The existing mobile card CSS is used without new breakpoint rules. Human 390px browser visual QA is still required before merge approval.

Decision:

Rendered for human review.

### C. ClipboardAi

Visible title:

ClipboardAi

Image asset key:

`clipboardAiPrivateWorkspace`

Copy used:

A structured workspace for communication, documents, and coordinated action. ClipboardAi is presented as a private workspace concept for organising communication, document sharing, team coordination, and follow-through.

CTA used:

- Preview ClipboardAi
- Request Workspace Review

CTA status:

Future-state labels only. No click handler or new route added.

Public-safety notes:

The card avoids encryption guarantees, surveillance framing, classified workspace language, and any implication that private messages or files are shown.

Desktop layout notes:

Structural QA passed. The card uses the existing `AppPortfolioCard` desktop layout and the section compiles in the homepage build. Human browser visual QA is still required before merge approval.

390px mobile layout notes:

Structural QA passed. The existing mobile card CSS is used without new breakpoint rules. Human 390px browser visual QA is still required before merge approval.

Decision:

Rendered for human review.

## Held Product Exclusion Review

### A. VoiceGrid Ai

- Not rendered.
- Still held for multilingual cue / claims review.
- No asset used.
- No card added.

### B. DukeBox of London

- Not rendered.
- Still held for rights / landmark-style review.
- No asset used.
- No card added.

## Brand Text Compliance Review

| Product | Visible brand text | Required brand text | Pass/fail | Notes |
| --- | --- | --- | --- | --- |
| OS³ Dash | OS³ Dash | OS³ Dash | Pass | Brand-facing copy uses OS³. |
| JB³Ai Super Agent OS | JB³Ai Super Agent OS | JB³Ai Super Agent OS | Pass | Brand-facing copy uses JB³Ai. |
| ClipboardAi | ClipboardAi | ClipboardAi | Pass | No restricted brand spelling introduced. |

Rule confirmation:

- Brand-facing output uses JB³Ai and OS³.
- Plain `jb3ai` / `os3` appears only in filenames, paths, registry keys, URLs, code, or technical references.

## Public-Safety Review

| Product | Main public risk | Control used | Pass/fail | Notes |
| --- | --- | --- | --- | --- |
| OS³ Dash | Unsupported SaaS launch or live private OS claim. | Framed as a founder operating dashboard concept; private OS remains gated. | Pass | No route or access behaviour added. |
| JB³Ai Super Agent OS | Autonomous replacement or self-running business claim. | Framed as human-led AI-assisted command architecture. | Pass | Human approval and oversight remains central. |
| ClipboardAi | Unsupported encryption or private-data exposure claim. | Framed as privacy-aware controlled collaboration with general language. | Pass | No security specification claim added. |
| VoiceGrid Ai | Language, telecom, pricing, or performance claims. | Not rendered. | Pass | Remains held. |
| DukeBox of London | Rights-sensitive landmark/music availability implication. | Not rendered. | Pass | Remains held. |

## Visual/Layout QA

| Area | Desktop result | 390px mobile result | Image crop result | Text overflow result | Decision |
| --- | --- | --- | --- | --- | --- |
| Homepage card area | Structural QA passed; build compiles. | Structural QA passed; existing mobile CSS used. | Existing `AppPortfolioCard` image frame used. | No source-level overflow issue found. | Human browser QA required. |
| OS³ Dash card | Structural QA passed; card renders from source data. | Structural QA passed; existing mobile CSS used. | Existing image frame used; no crop change added. | Copy kept concise. | Human browser QA required. |
| JB³Ai Super Agent OS card | Structural QA passed; card renders from source data. | Structural QA passed; existing mobile CSS used. | Existing image frame used; no crop change added. | Longest card copy; human visual review recommended. | Human browser QA required. |
| ClipboardAi card | Structural QA passed; card renders from source data. | Structural QA passed; existing mobile CSS used. | Existing image frame used; no crop change added. | Copy kept concise. | Human browser QA required. |
| IsikoloAI card if nearby/affected | No standalone IsikoloAI card found in the current source. | No standalone IsikoloAI card found in the current source. | No direct change. | No direct change. | Unaffected. |

## File Change Summary

| File | Change type | Purpose | Safe to stage? | Notes |
| --- | --- | --- | --- | --- |
| `docs/phase-21/21b-batch-01-selected-card-rendering-review.md` | Added. | Document 21B rendering review, safety posture, QA, and exclusions. | Yes. | 21B notes only. |
| `src/pages/PublicHome.tsx` | Modified. | Render a contained Product Architecture section with three selected cards. | Yes. | Uses existing `AppPortfolioCard`. |

## Not Changed

- No VoiceGrid Ai card.
- No DukeBox of London card.
- No new public assets.
- No WebP exports.
- No image optimisation.
- No `assetRegistry.ts` change.
- No route changes.
- No app ID changes.
- No `/os` changes.
- No Sponsor Isikolo changes.
- No payment/contact/social changes.
- No PDFs/videos/raw media.
- No source PNG/JPG intake candidates staged.

## Recommended Next Milestone

Preferred recommendation:

21C Batch 01 Selected Card Visual QA and Copy Tightening.

Reason:

If the three selected cards render cleanly, the next step should tighten card copy, mobile density, image crop behaviour, and CTA labelling before any wider portfolio expansion. VoiceGrid Ai and DukeBox of London remain separate future review work.

Fallback:

21B2 Card Rendering Correction Pass, if visual QA finds layout, overflow, crop, or copy issues.

## Build Result

`npm run build` passed on 2026-06-25.

Local automated browser tooling was not available in this checkout, so desktop and 390px visual QA should be completed by human browser review before merge approval.

## 21B Decision

21B is complete when the selected Batch 01 card rendering review is documented, the three selected cards render correctly, and the branch is reviewed and merged. VoiceGrid Ai and DukeBox of London must remain excluded until separate future milestones approve them.
