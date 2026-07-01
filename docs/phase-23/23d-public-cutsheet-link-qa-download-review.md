# Milestone 23D: Public Cutsheet Link QA and Download Experience Review

## Status

Drafted for review.

## QA Purpose

23D verifies the two public cut sheet links introduced in 23C and confirms that no held or review-only product resources were exposed.

This is a QA-only milestone. No source fixes were required.

## Public Links Tested

| Product | Public link | Source location | Result |
| --- | --- | --- | --- |
| ClipboardAi | `/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf` | ClipboardAi app card in `src/pages/PublicHome.tsx` | Passed |
| IsikoloAI | `/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf` | Sponsor Isikolo section in `src/components/public/SupportWorkStrip.tsx` | Passed |

## Desktop QA Result

Desktop source/build smoke passed.

The app built successfully and both public PDF paths resolved from the local Vite preview server with HTTP `200` responses and `application/pdf` content type.

Headless screenshot capture was attempted at desktop width, but the capture repeatedly landed on the boot sequence instead of the post-boot homepage. Because this milestone is QA-only and the links themselves resolve correctly, no source change was made to bypass or alter the boot behavior. A human browser scroll check is still recommended before merge if visual placement must be signed off from the rendered post-boot homepage.

## 390px Mobile QA Result

390px mobile source/build smoke passed.

Headless mobile screenshot capture was attempted at 390px width, but it also captured the boot sequence rather than the post-boot homepage. No mobile source fix was required because the approved PDF paths resolve correctly and no layout/source regression was detected in the touched surfaces.

Human 390px browser confirmation remains recommended before merge if the reviewer wants visual placement verification beyond source/build/HTTP checks.

## Download / New-Tab Behavior Observed

The public PDF resources resolve from the built preview site as PDF responses:

| Path | HTTP status | Content type | Bytes |
| --- | --- | --- | --- |
| `/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf` | `200` | `application/pdf` | `1,721,755` |
| `/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf` | `200` | `application/pdf` | `1,902,025` |

The source links use:

- `target="_blank"`
- `rel="noopener noreferrer"`

Final browser behavior may display the PDF in-browser or download it depending on the visitor's browser settings.

## Broken-Link Status

No broken public cut sheet links were found.

Confirmed:

- The two linked PDF files exist in `public/resources/product-cutsheets/`.
- The two linked PDF files are copied into `dist/resources/product-cutsheets/` during `npm run build`.
- The two linked PDF files resolve from the local preview server.

## Visual-Balance Status

No visual source changes were made in 23D.

The link placement remains the 23C placement:

- ClipboardAi: restrained `View cut sheet` action in the app card action row.
- IsikoloAI: restrained `View IsikoloAI cut sheet` text link near the Sponsor Isikolo public description and disclaimer.

Because automated screenshots captured the boot sequence, human visual confirmation is recommended before merge if final visual placement is a hard gate.

## Held / Review Cut Sheets Not Exposed

No public source links were found for:

- DukeBox of London
- VoiceGrid Ai
- InvestigatorAi
- Newsroom
- ViewGrid

## Excluded Product Names Not Reintroduced

No visible source reintroduction was found in the touched public surfaces for:

- Clipboard OS³ Lite
- ClipboardOS

## Files Changed

| File | Purpose |
| --- | --- |
| `docs/phase-23/23d-public-cutsheet-link-qa-download-review.md` | Documents 23D QA results and safety confirmations. |

No source files were changed.

## Build Result

`npm run build` passed.

## Safety / Staging Notes

Confirmed out of scope and unstaged:

- `vite.config.ts`
- `docs/media-intake/09-product-cutsheets/`
- raw intake candidates
- local Isikolo image candidates

Do not use `git add .`.

Stage only:

```bash
git add docs/phase-23/23d-public-cutsheet-link-qa-download-review.md
```

## Recommended Next Milestone

23E: Public Product Resource Pattern Review.

23E should decide whether product cut sheet links stay embedded on individual public cards/sections or move toward a small dedicated public resource pattern before more cutsheets are approved.
