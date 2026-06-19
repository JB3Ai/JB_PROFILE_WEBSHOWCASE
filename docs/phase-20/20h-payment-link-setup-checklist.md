# Phase 20H: Payment Link Setup Checklist and Live Sponsorship Link Integration Planning

## Review Status

Drafted in 20H.

Docs-only planning.

Pending human review.

Not published.

Not wired into website.

No live payment links added.

## Purpose

20H defines the readiness checklist for future live Isikolo sponsorship payment links.

This milestone prepares a later controlled integration pass by documenting exact payment-link requirements, supporter tracking requirements, GTR³ reward controls, privacy/data capture rules, and final pre-launch checks before any money buttons go live.

## Integration Rule

No public website, component, route, registry, backend, payment, form, checkout, or tracking changes happen in 20H.

20H is planning only. It does not change placeholder links, add live links, add forms, add payment inputs, or introduce any payment-processing infrastructure.

## Approved Public Positioning

- Isikolo is built. Now help keep it free.
- Sponsor Isikolo.
- Sponsor a Learner.
- Fund AI Credits.
- Support Free Education.
- Become a Founding Sponsor.
- Reserve GTR³ Limited Edition.

Public stance remains:

- Mission-led, not hardship-led.
- Sponsor Isikolo, not donate to me.
- Founding support, not emergency support.
- Impact funding, not pity.

## Payment Platform Checklist

| Platform | Link needed | Currency | Intended use | Owner / source | Status | Required before integration | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PayBru | Yes | ZAR | Local South African sponsorship support. | Jonathan / PayBru account owner | Not ready | Confirm account, exact link, currency, export/reporting, and refund flow. | Best local-first option if supporter export is usable. |
| PayPal | Yes | USD / supported international currencies | International supporter sponsorship. | Jonathan / PayPal account owner | Not ready | Confirm exact link, account ownership, currency defaults, test payment, refund handling, and export/reporting. | Useful for international supporters; clarify fees and exchange-rate handling. |
| Buy Me a Coffee | Yes | USD / platform-supported currencies | Platform-based sponsorship route if copy can remain mission-led. | Jonathan / platform account owner | Not ready | Confirm page wording, tier mapping, support export, and whether platform language can avoid donation or personal-support framing. | Use the platform name internally only. Public labels should not use "Buy me a..." wording. |
| Stripe | Yes | ZAR / USD depending setup | Structured payment links for sponsor tiers. | Jonathan / Stripe account owner | Not ready | Confirm payment links, metadata/export fields, test payments, refund flow, and privacy controls. | Do not add SDKs, checkout embeds, webhooks, or API keys in the live-link milestone unless separately approved. |
| Ko-fi | Yes | USD / platform-supported currencies | Lightweight support option. | Jonathan / platform account owner | Not ready | Confirm exact page/link, copy control, tier mapping, supporter export, and refund handling. | Check whether wording can remain sponsor-led rather than donation-led. |

## Sponsorship Link Requirements

Each live link must have the following before wiring:

- Exact destination URL.
- Correct platform account.
- Amount or open-amount behavior.
- Currency.
- Button label.
- Public purpose.
- Confirmation page behavior.
- Export/reporting access.
- Test payment status.
- Refund handling notes.
- Privacy/data notes.
- Supporter email capture behavior.
- Payment reference or transaction ID visibility.
- Mobile click behavior confirmed.
- Desktop click behavior confirmed.
- Link ownership confirmed.

## Received Payment Link Candidates

| Platform | Candidate type | Candidate detail | Status | Integration decision | Notes |
| --- | --- | --- | --- | --- | --- |
| PayPal | Hosted Button SDK embed | Hosted button ID: `H7NFDTY56J7L6` | Received | Do not wire in 20H | Requires PayPal SDK script. Hold for later live integration milestone. Prefer a plain PayPal hosted/share link if available. |
| Ko-fi | Public profile link | `https://ko-fi.com/jonoblackburn` | Received | Do not wire in 20H | Candidate for simple link-based integration later. |
| Buy Me a Coffee | Button script embed | Slug: `jb3ai` | Received | Do not wire in 20H | Script embed received. Prefer normal profile/link integration first. Button text must be changed from personal wording to mission-led wording before any public use. |
| PayBru | Local ZAR payment link | Pending | Missing | Not ready | Required before South African ZAR support launch. |
| Stripe | Payment link | Pending | Missing | Optional / not ready | Only use if needed after platform decision. |

Safety note:

No payment code, third-party SDK scripts, embedded payment widgets, forms, checkout logic, API keys, live payment links, or supporter tracking implementation are added in 20H. This milestone records candidate payment information only.

Buy Me a Coffee wording note:

The platform name may be recorded internally, but public labels should avoid "Buy me a..." wording because it pulls the message back toward personal support instead of mission support. Recommended labels:

- Sponsor Isikolo
- Help keep Isikolo free
- Support free AI education

Before any live button goes public, the project still needs:

- PayBru ZAR link.
- PayPal shareable payment link, preferably not SDK embed.
- Buy Me a Coffee public page URL.
- Final Ko-fi use decision.
- Supporter tracker structure.
- GTR³ reward eligibility rules.
- Shipping and delay/refund wording.
- Privacy/data capture wording.

## Confirmed Payment Link Candidates

| Platform | Link / detail | Status | Intended use | Integration decision |
| --- | --- | --- | --- | --- |
| PayBru | `https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor` | Ready | South African ZAR founding sponsorship | Candidate for first live integration. |
| PayPal | `https://paypal.me/jonoblackburnza` | Ready | International supporter payments | Use simple external link, not SDK embed. |
| Ko-fi | `https://ko-fi.com/D0K721OP8E` | Ready | International supporter payments | Use simple external link. |
| Buy Me a Coffee | Slug: `jb3ai` | Waiting on Stripe activation | International supporter payments / creator-support platform route | Do not wire until active. Public labels must remain mission-led. |
| Stripe | Pending authorization | Not ready | Card payments / possible Buy Me a Coffee activation layer | Do not wire yet. |

PayPal SDK and Buy Me a Coffee embed scripts were received, but 20H does not add third-party scripts, SDKs, embedded widgets, checkout logic, forms, payment inputs, backend code, API keys, or live payment integration. The preferred first launch approach is simple external links only.

No payment links are wired into the public website during 20H. This milestone records readiness information only.

## Future 20I Link Mapping Draft

If 20H is merged and a later live-link integration milestone is approved, the first integration should stay small and link-only:

| Website button | Suggested first link |
| --- | --- |
| Sponsor Isikolo | PayBru |
| Sponsor a Learner | PayBru |
| Fund AI Credits | PayPal or Ko-fi |
| Support Free Education | PayBru |
| Become a Founding Sponsor | PayBru |
| Reserve GTR³ Limited Edition | PayPal or Buy Me a Coffee once active |

20I should replace existing `#` placeholders only, use simple external links only, and avoid SDKs, embeds, forms, checkout code, backend code, and supporter tracking implementation.

## Support Tier Readiness Table

| Tier | Placeholder amount | Intended platform | Public label | Live link status | Tracking requirement | Reward implication | Ready to wire |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sponsor Isikolo | R200 / $10 | PayBru / PayPal / Stripe | Sponsor Isikolo | Not ready | Track name, email, platform, reference, amount, currency, date, and tier. | No reward implied unless separately approved. | No |
| Sponsor a Learner | R900 / $50 | PayBru / PayPal / Stripe | Sponsor a Learner | Not ready | Track name, email, platform, reference, amount, currency, date, and tier. | No named learner guarantee. | No |
| Fund AI Credits | R1,800 / $100 | PayBru / PayPal / Stripe | Fund AI Credits | Not ready | Track name, email, platform, reference, amount, currency, date, and tier. | Operational support only. | No |
| Support Free Education | R4,500 / $250 | PayBru / PayPal / Stripe | Support Free Education | Not ready | Track name, email, platform, reference, amount, currency, date, and tier. | No reward implied unless separately approved. | No |
| Become a Founding Sponsor | R9,000+ / $500+ | Stripe / PayPal / direct PayBru route | Become a Founding Sponsor | Not ready | Track sponsor name, public-recognition preference, email, platform, reference, amount, currency, date, and tier. | Recognition rules must be approved before names are displayed publicly. | No |
| Reserve GTR³ Limited Edition | $50 | PayPal / Stripe / Buy Me a Coffee / Ko-fi | Reserve GTR³ Limited Edition | Not ready | Track name, email, platform, reference, amount, currency, country, reward eligibility, and delivery status. | Limited-edition book reward only after terms are approved. | No |

## GTR³ Limited Edition Reward Gate

The GTR³ limited-edition reward cannot go live until:

- Final reward wording is approved.
- Physical versus digital edition decision is made.
- Release window wording is approved.
- Shipping rules are approved.
- Country eligibility is approved.
- Supporter qualification rule is approved.
- Delay/refund wording is approved.
- Supporter tracking system is ready.
- Shipping cost responsibility is approved.
- Address capture process is approved if physical rewards are used.
- Non-release or alternative-reward policy is approved.
- The wording does not imply that the third GT-R exists or has been obtained.

## Supporter Tracking Checklist

Minimum tracker fields:

- Supporter name.
- Email.
- Payment platform.
- Payment reference.
- Payment date.
- Amount.
- Currency.
- Tier.
- Reward eligibility.
- Country.
- Shipping status if physical reward.
- Notes.
- Consent/privacy note.
- Public-recognition preference.
- Refund status if relevant.
- Export date/source.
- Follow-up status.

## Privacy and Data Handling

Controls required before live links or tracking go live:

- Collect only necessary supporter data.
- Do not expose supporter data publicly.
- Protect export files.
- Avoid sensitive personal notes.
- Limit access to supporter records.
- Store payment references without unnecessary private detail.
- Keep public-recognition preferences separate from payment records where practical.
- Confirm whether POPIA wording is needed before forms or tracking go live.
- Define retention and deletion expectations before collecting supporter addresses.

## Pre-Launch Test Checklist

Before any live-link integration milestone ships:

- Test every link.
- Verify amount/currency.
- Verify mobile click behavior.
- Verify desktop click behavior.
- Verify no broken links.
- Verify platform account ownership.
- Verify payment notifications.
- Verify export/reporting.
- Verify supporter tracker update flow.
- Verify no private PDFs or investor materials are exposed.
- Verify no forensic overview is exposed.
- Verify no accidental charity/NPO/tax-deductible wording.
- Verify refund flow notes are documented.
- Verify confirmation page behavior.
- Verify all link labels match public copy.

## Public Copy Lock

The future live-link milestone must preserve:

- Mission-led wording.
- Impact sponsorship framing.
- No hardship language.
- No charity, NPO, or tax-deductible claims.
- No guaranteed reward wording unless terms are approved.
- No emergency support language.
- No personal survival framing.
- No investment-return wording.

## Future Integration Plan

A later milestone may wire live links only after:

- All payment links exist.
- Tracking system is ready.
- Reward terms are approved.
- Privacy/data handling is approved.
- Test payments are complete.
- Human review approves launch.
- Platform account ownership is confirmed.
- Refund/delay wording is approved.
- The GTR³ limited-edition reward gate is cleared.

## Do Not Add Yet

Do not add:

- Real links.
- Payment SDKs.
- Checkout embeds.
- Forms.
- Databases.
- Supporter tracking implementation.
- Automation.
- Webhooks.
- API keys.
- Reward fulfillment system.
- Private PDFs.
- Investor deck.
- Forensic overview.
- Donation wording.
- Charity/NPO wording.
- Tax-deductible wording.

## Safety Confirmations

- Docs-only planning.
- No live payment links.
- No placeholder link changes.
- No public website copy changes.
- No components changed.
- No backend.
- No API keys.
- No checkout logic.
- No SDKs.
- No embedded scripts.
- No forms/payment inputs.
- No fulfillment system.
- No supporter tracking system.
- No `/os` changes.
- No timeline changes.
- No route changes.
- No app ID changes.
- No registry changes.
- No GTR asset movement.
- No raw media.
- No 18I asset changes.
- 20F PDF library untouched.
- Mission-led Isikolo framing preserved.

## 20H Decision

20H is complete when this planning document is reviewed and merged.

Only after 20H may the project decide whether to proceed with a controlled live payment link integration milestone.

## Build Result

`npm run build` passed in 20H.
