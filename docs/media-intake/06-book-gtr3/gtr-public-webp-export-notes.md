# GTR Public WebP Export Notes

## Milestone 19I Scope

This document records the first controlled WebP export pass for approved GTR
archive candidates.

This is an export-for-review pass only. The exported files remain under
`docs/media-intake/06-book-gtr3/exports/` and are not wired into the website,
not moved into `public/`, and not approved for publication without human
review.

## Export Settings

- Export format: WebP
- Quality: 86
- Long edge target: 2000px where source resolution allowed
- Metadata: stripped by default; exports were created without metadata retention
- Cropping: no manual crop applied
- Enhancement: no filters, no fake enhancement, no AI generation

## Export Table

| Source filename | Export filename | Dimensions | File size | Crop notes | Metadata stripping notes | Public-use status | Remaining human review notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `IMG_2314.JPG` | `exports/gtr1-elite-gp-rear-archive.webp` | 2000x1500 | 296,046 bytes | Aspect ratio preserved; rear three-quarter archive frame retained. | Exported without metadata retention. | Approved for review use; `1 ELITE GP` plate may remain visible as historical GTR1 / Elite Technologies context. | Confirm final usage context before publication. |
| `IMG_2312.JPG` | `exports/gtr1-founder-seated-archive.webp` | 2000x1500 | 426,458 bytes | Aspect ratio preserved; founder and vehicle remain uncropped. | Exported without metadata retention. | Conditional review export. | Background/location signage remains visible; review crop and background treatment before public use. |
| `IMG_2311.JPG` | `exports/gtr1-founder-front-archive.webp` | 2000x2667 | 542,840 bytes | EXIF orientation respected; portrait frame preserved without manual crop. | Exported without metadata retention. | Conditional review export. | Prominent brand/location signage remains visible; review crop and background treatment before public use. |
| `545c9ce3-1094-4e99-b1aa-37057755ba92.JPG` | `exports/gtr2-reveal-smoke-cinematic.webp` | 1280x853 | 96,894 bytes | Source dimensions preserved; no upscale applied. | Exported without metadata retention. | Conditional review export; strongest teaser candidate. | Showroom backdrop and branding remain visible; review rights, crop, and background context before public use. |

## Explicit Non-Export

`IMG_0436.jpg` was not exported.

Reason: children-on-GT-R image remains private/book-only and is not approved for
public website, social, advertising, or media-kit use.

## Safety Notes

- Raw originals remain uncommitted.
- No JPG, JPEG, PNG, or video files are committed in this pass.
- No files were added under `public/`.
- No website wiring was added.
- No `assetRegistry.ts` changes were made.
- No route, component, or public website copy changes were made.
- No 18I production WebP assets were changed.
- GTR³ remains symbolic and aspirational.
- No claim is made that the third GT-R exists or has been obtained.
- The `1 ELITE GP` historical note is preserved.
- Children/private image remains excluded from public outputs.
