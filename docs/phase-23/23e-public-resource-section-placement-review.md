# Milestone 23E: Public Resource Section Placement Review

## Status

Drafted for review.

## Review Purpose

23E reviews whether the public homepage needs a dedicated Resources or Downloads area after 23C added links to the two approved public cut sheets and 23D verified that both PDF links resolve correctly.

This milestone is planning/review only. No source files, PDF files, routes, product cards, payment links, contact/social links, intake files, or asset registry entries were changed.

## Current Public Resource Locations

| Resource | Current location | Link text | Path |
| --- | --- | --- | --- |
| ClipboardAi cut sheet | ClipboardAi card in the Product Architecture section | `View cut sheet` | `/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf` |
| IsikoloAI cut sheet | Sponsor Isikolo section, near the public description and disclaimer | `View IsikoloAI cut sheet` | `/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf` |

## Discoverability Assessment

The current two-link placement is discoverable enough for the present resource volume.

- ClipboardAi is best discovered in context on its product card because the cut sheet belongs directly to that product.
- IsikoloAI is best discovered in context near Sponsor Isikolo because the resource supports the public education/sponsorship narrative.
- A separate Resources area would create a third resource surface for only two PDFs, which could feel heavier than the current need.
- The current placements keep the public homepage focused on product architecture and mission-led support instead of turning the page into a document index.

## Desktop Placement Assessment

On desktop, the current resource placement is appropriate:

- The ClipboardAi action stays inside the existing app-card action pattern.
- The IsikoloAI link stays near the relevant explanatory copy and disclaimer.
- The links do not require another homepage section or navigation item.
- The current model avoids adding a low-density Resources strip that would compete with Sponsor Isikolo, Evidence, Investor, or Connect.

## 390px Mobile Placement Assessment

On 390px mobile, the current placement is preferable to a new section:

- Product-card actions already stack naturally.
- The Sponsor Isikolo text link remains lightweight compared with another full-width resource block.
- A dedicated Resources strip would add additional scroll length and another heading rhythm to an already dense mobile homepage.
- If more resources are approved later, mobile grouping should be designed deliberately rather than added reactively.

## Clutter / Rhythm Assessment

Recommendation: do not add a dedicated Resources or Downloads section yet.

Reasons:

- Only two public PDFs are approved today.
- The two resources have clear contextual homes.
- A new section would add structural weight without enough content depth.
- The homepage is still recovering from recent architecture, ordering, copy, and mobile rhythm passes; resource expansion should not disturb that flow prematurely.

## Future Resource Expansion Assessment

A dedicated resource pattern may become useful when at least three to five public resources are approved and reviewed together.

Possible future triggers:

- Additional product cut sheets are approved for public use.
- Founder/company PDFs are approved for public resource display.
- A public resource route is needed for cleaner sharing.
- Product cards become too crowded with per-card resource actions.
- A reviewer wants one consolidated place for approved downloads.

Until that threshold is reached, contextual links are cleaner.

## Recommendation

Keep current placement only.

Do not add a Resources or Downloads strip in 23E.

Recommended future posture:

- Keep ClipboardAi cut sheet linked from the ClipboardAi product card.
- Keep IsikoloAI cut sheet linked from the Sponsor Isikolo section.
- Revisit a dedicated resource strip or route only after more public resources are approved through their own governance milestones.

## Non-Goals

23E does not:

- Add a new resources section.
- Change `PublicHome.tsx`.
- Change product cards.
- Add or remove cut sheet links.
- Copy new PDFs.
- Link held/review cut sheets.
- Touch `docs/media-intake/09-product-cutsheets/`.
- Add DukeBox of London, VoiceGrid Ai, InvestigatorAi, Newsroom, or ViewGrid.
- Reintroduce Clipboard OS³ Lite or ClipboardOS.
- Change routes, app IDs, payment links, contact/social links, `/os`, or asset registry entries.

## Files Changed

| File | Purpose |
| --- | --- |
| `docs/phase-23/23e-public-resource-section-placement-review.md` | Documents the public resource placement review and recommendation. |

No source files were changed.

## Build Result

Build not required.

Reason: 23E is docs-only and does not touch source, config, public assets, routes, or resource files.

## Safety / Staging Notes

Confirmed out of scope:

- `vite.config.ts`
- `docs/media-intake/09-product-cutsheets/`
- raw intake candidates
- local Isikolo image candidates
- held/review cut sheets

Use targeted staging only:

```bash
git add docs/phase-23/23e-public-resource-section-placement-review.md
```

Do not use `git add .`.

## Proposed Next Milestone

No immediate resource-section implementation milestone is recommended.

Suggested next milestone:

23F: Product Resource Governance Backlog Review.

23F should review which remaining held/review resources are worth moving through the approval path next, without adding a public resource strip until enough approved resources exist.
