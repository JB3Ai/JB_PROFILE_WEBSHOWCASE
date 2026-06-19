# Phase 20I: Live Sponsorship Link Integration Notes

## Review Status

Drafted in 20I.

Public link integration.

Pending human review.

Not merged yet.

## Scope

20I replaces the existing Sponsor Isikolo placeholder `#` links with simple external support links only.

This milestone does not add SDKs, embeds, payment widgets, checkout code, forms, backend logic, API keys, automation, webhooks, supporter tracking, databases, or fulfillment systems.

## Links Wired

| Website button | Platform | External link |
| --- | --- | --- |
| Sponsor Isikolo | PayBru | `https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor` |
| Sponsor a Learner | PayBru | `https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor` |
| Fund AI Credits | PayPal | `https://paypal.me/jonoblackburnza` |
| Support Free Education | Ko-fi | `https://ko-fi.com/D0K721OP8E` |
| Become a Founding Sponsor | PayBru | `https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor` |
| Reserve GTR³ Limited Edition | PayPal | `https://paypal.me/jonoblackburnza` |

## Why Simple Links Were Used

Simple external links were used because they keep the public website clean, fast, auditable, and easy to QA.

20I intentionally avoids PayPal SDK embeds, Buy Me a Coffee scripts, Ko-fi image/button embeds, Stripe SDKs, PayBru embeds, payment widgets, checkout code, forms, backend logic, API keys, webhooks, supporter tracking, and fulfillment systems.

## Platform Decisions

- PayBru is the primary South African ZAR support option.
- PayPal is used for international support and GTR³ limited-edition reservation interest.
- Ko-fi is used for international support for free education.
- Buy Me a Coffee remains intentionally unused until active and mission-led public wording is confirmed.
- Stripe remains intentionally unused while authorization is pending.

## Public Copy Changes

No mission copy changes were made.

The existing disclaimer remained in place:

Support payments are not charitable donations and are not tax-deductible. Support contributes to independent education technology, learner access, AI credits, hosting, content, and platform development.

Button status text changed from `Coming soon` to `External link` to avoid implying the buttons are still inactive.

## Safety Confirmations

- Simple external links only.
- No SDKs.
- No embeds.
- No payment widgets.
- No forms.
- No payment inputs.
- No checkout logic.
- No backend.
- No API keys.
- No webhooks.
- No supporter tracking system.
- No fulfillment system.
- No `/os` changes.
- No timeline changes.
- No route changes.
- No app ID changes.
- No asset registry changes.
- No GTR asset movement.
- No raw media.
- No 18I asset changes.
- No 20F PDF library changes.
- Public/private split preserved.
- Mission-led Isikolo framing preserved.

## Visual QA Result

- Homepage desktop QA passed.
- Homepage 390px mobile QA passed.
- Sponsor Isikolo section desktop QA passed.
- Sponsor Isikolo section mobile QA passed.
- No horizontal overflow detected.
- All six buttons are visible.
- All six buttons use external `https://` links.
- All six buttons use `target="_blank"`.
- All six buttons use `rel="noopener noreferrer"`.
- No forms, inputs, iframes, scripts, payment widgets, or embedded controls were detected inside the Sponsor Isikolo section.

## Build Result

`npm run build` passed in 20I.

## Follow-Up Items

- Confirm Stripe authorization before using Stripe directly.
- Confirm Buy Me a Coffee activation before using it publicly.
- Keep Buy Me a Coffee public wording mission-led if later used.
- Define supporter tracking before adding any formal reward fulfillment flow.
- Finalize GTR³ reward eligibility, shipping, delay/refund, and privacy/data capture wording before expanding reward functionality.
