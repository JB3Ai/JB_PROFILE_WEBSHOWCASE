# Phase 20S: IsikoloAI App Card Integration

## Review Status

Drafted in 20S.

Single-card public integration.

Uses approved 20O copy.

Uses 20R `AppPortfolioCard`.

No full portfolio integration.

No PDF/resource publication.

Pending human review.

## Purpose

20S introduces the first controlled public app card for IsikoloAI while preserving the public/private split and avoiding a broad portfolio rollout.

The milestone proves the new 20R app-card system with one education-support card only. It does not create a full portfolio section, publish the IsikoloAI cutsheet, add other app cards, or change private OS routes.

## Source Decisions Applied

| Source milestone/document | Decision applied | Implementation result |
| --- | --- | --- |
| 20L visual asset registration | Use the optimized registered WebP, not the PNG/JPG source candidates. | Card uses `assetRegistry.isikoloAiCoverEducationVisual`. |
| 20O approved app-card copy/resource decision | Use safe IsikoloAI app-card wording and keep the cutsheet private/intake-only. | App name, category, status, copy, support note, disclaimer note, and alt text are implemented from 20O. |
| 20R app-card design system | Use the reusable dormant card component for the first visible app card. | `AppPortfolioCard` is rendered once inside a contained homepage section. |
| Existing support/payment rules | Preserve simple support flow and avoid new payment links, SDKs, routes, or checkout behavior. | Secondary CTA scrolls to existing Sponsor Isikolo support section; no payment mapping changed. |

## Files Changed

| File | Change type | Reason | Risk level |
| --- | --- | --- | --- |
| `src/pages/PublicHome.tsx` | Single-card UI integration | Adds a contained IsikoloAI app/resource section near the support area and renders one `AppPortfolioCard`. | Medium |
| `docs/phase-20/20s-isikoloai-app-card-integration.md` | Documentation | Records source decisions, CTA behavior, QA, safety checks, and next milestone recommendation. | Low |

## Copy Implemented

| Field | Implemented copy | Source | Safety note |
| --- | --- | --- | --- |
| App name | IsikoloAI | 20O | Product name only; no unsupported scale or adoption claim. |
| Category | Education App | 20O | Neutral category. |
| Status | Free Learning Support | 20O | Avoids NPO, charity, or tax-deductible framing. |
| Short description | Free AI-powered study support for South African learners. | 20O | Clear benefit, no outcome guarantee. |
| Expanded description | IsikoloAI is a free education-support app designed to help South African learners access clearer explanations, revision help, study guidance, and practical learning support. The goal is to make AI-assisted education easier to reach, easier to understand, and useful for everyday schoolwork. | 20O | Avoids learner counts, school adoption, or institutional endorsement. |
| Support note | Support helps fund AI credits, hosting, content, learner access, and continued platform development. | 20O / 20G / 20I | Mission-led support use only. |
| Disclaimer note | Support payments are not charitable donations and are not tax-deductible. | 20O / existing support rules | Required compliance note, not framed as donation or NPO language. |
| Image alt text | IsikoloAI cover artwork representing free AI education support for South African learners. | 20O | Describes the image without unsupported claims. |
| CTA labels | Explore IsikoloAI; Support Free Education | 20O | Primary is future-state; secondary routes only to existing support area. |

## CTA Decision

| CTA | Behavior | Notes |
| --- | --- | --- |
| Explore IsikoloAI | Disabled/future-state because no approved public IsikoloAI route exists yet. | No route invented and no live app URL added. |
| Support Free Education | Scrolls to the existing Sponsor Isikolo section. | Existing PayBru, PayPal, and Ko-fi support mappings are preserved inside the existing section. |

Confirmations:

- No new routes were created.
- No new payment links were added.
- Existing support mappings were preserved.
- No SDKs, embeds, widgets, checkout logic, forms, backend, API keys, tracking, or fulfillment systems were added.

## Visual QA

| Page/view | Desktop result | 390px mobile result | Notes |
| --- | --- | --- | --- |
| Public homepage | Passed | Passed | One `AppPortfolioCard` rendered. |
| IsikoloAI card location | Passed | Passed | Card is placed between GTR3 Spotlight and Sponsor Isikolo. |
| Support/sponsor area nearby | Passed | Passed | Secondary CTA scrolls to the existing support section; six support links remain present. |
| Footer/contact | Passed | Passed | No contact/footer changes were made. |
| No overflow | Passed | Passed | Desktop client/scroll width: 1425/1425. Mobile client/scroll width: 390/390. |
| Image crop/fit | Passed | Passed | WebP loads from `/assets/images/isikolo-ai-cover-education-visual.webp` and stays contained in the card image plate. |
| CTA alignment | Passed | Passed | Primary CTA is disabled/future-state; secondary CTA remains active. |
| Card readability | Passed | Passed | Card remains readable on desktop and 390px mobile without horizontal overflow. |

## Safety Review

- Only one app card added.
- No full portfolio section added.
- No other app cards added.
- No cutsheet PDF committed.
- No public PDF link added.
- No raw media staged.
- No source PNG/JPG committed.
- No payment/contact/social changes.
- No route changes.
- No app ID changes.
- No `/os` changes.
- No unsupported learner, school, government, institution, adoption, or outcome claims.
- No charity/NPO/tax-deductible framing beyond the required disclaimer that support is not charitable and not tax-deductible.
- Public/private split preserved.

## Performance Notes

- Reuses the 20L WebP at `public/assets/images/isikolo-ai-cover-education-visual.webp`.
- No new media assets added.
- Reuses the 20R `AppPortfolioCard` component.
- No new dependencies added.
- `npm run build` passed.
- Build transformed 392 modules.
- CSS bundle remained `dist/assets/index-D97kMKzg.css`.
- JS bundle output was `dist/assets/index-CqwH9zWk.js`.
- Vite CJS Node API deprecation warning remains non-blocking.

## Recommended Next Milestone

Preferred:

20T Portfolio Batch 01 Integration Plan.

Alternative:

20T IsikoloAI Card Refinement, if visual QA or human review requires adjustment before broader portfolio rollout.

## 20S Decision

20S is complete when the single IsikoloAI app card is reviewed, desktop and 390px mobile QA pass, build is clean, and no PDF/resource publication has occurred.

Broader portfolio integration remains reserved for later milestones.
