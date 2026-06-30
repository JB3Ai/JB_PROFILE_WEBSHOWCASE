# Milestone 23B: Product Cut Sheet Intake Cleanup and Public Resource Preparation

## Status

Drafted for review.

## Purpose

23B prepares controlled public resource copies for the product cut sheets approved by the 23A governance plan.

This milestone does not link the public copies from the homepage, product cards, Resource Library, routes, or `/os`.

## Current Intake Location

Private intake location:

```text
docs/media-intake/09-product-cutsheets/
```

The intake folder remains private and untracked by design.

No files in the intake folder were renamed, moved, deleted, compressed, staged, linked, or modified.

## Public Destination Folder

Controlled public destination created:

```text
public/resources/product-cutsheets/
```

This folder is for reviewed product cut sheet copies only.

## Private Intake Filenames Observed

The following private intake filenames were observed:

| Intake file | Size | 23B decision |
| --- | ---: | --- |
| `OS³ Core ClipbaordAi.pdf` | 1,721,755 bytes | Copied to public resource folder with corrected public filename. |
| `OS³ Core InvestigatorAidf.pdf` | 1,436,569 bytes | Held. Not copied. |
| `OS³ Core IsikoloAi.pdf` | 1,902,025 bytes | Copied to public resource folder with clean public filename. |
| `OS³ Core NewsroomAi.pdf` | 907,277 bytes | Held. Not copied. |
| `OS³ Core The DukeBox of London.pdf` | 1,590,606 bytes | Held. Not copied. |
| `OS³ CoreVoiceGridAi .pdf` | 1,065,315 bytes | Held. Not copied. |

PDF contents were not opened during 23B. Product identity was determined from observed filenames only.

## Public Copies Created

Two public resource copies were created:

| Product | Source intake file | Public copy |
| --- | --- | --- |
| ClipboardAi | `docs/media-intake/09-product-cutsheets/OS³ Core ClipbaordAi.pdf` | `public/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf` |
| IsikoloAI | `docs/media-intake/09-product-cutsheets/OS³ Core IsikoloAi.pdf` | `public/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf` |

## Public Filenames Used

Public filenames use lowercase URL-safe naming:

```text
os3-core-clipboardai-cutsheet-v01.pdf
os3-core-isikoloai-cutsheet-v01.pdf
```

Technical filename note:

- `os3` is used in filenames for URL/path safety.
- Brand-facing copy remains `OS³`.

## Hold / Review Files Not Copied

The following files remain private intake only:

| Intake file | Reason held |
| --- | --- |
| `OS³ Core InvestigatorAidf.pdf` | Investigation/forensic positioning requires legal, claims, safety, and public/private review. Filename also appears malformed. |
| `OS³ Core NewsroomAi.pdf` | Newsroom/intelligence positioning requires source, claims, and safety review. |
| `OS³ Core The DukeBox of London.pdf` | Music/media positioning requires title, rights, and public-claims review. |
| `OS³ CoreVoiceGridAi .pdf` | Telecom/voice infrastructure positioning requires compliance, claims, and safety review. Filename spacing requires cleanup later. |

Not copied because no true matching file was present in the 23A/23B intake folder:

- OS³ Dash / standalone OS³ Core cutsheet.
- JB³Ai Super Agent OS cutsheet.

## Product Identity Uncertainty

Known uncertainty:

- `OS³ Core ClipbaordAi.pdf` appears to contain a typo in the private intake filename.
- `OS³ Core InvestigatorAidf.pdf` appears to contain a malformed suffix.
- `OS³ CoreVoiceGridAi .pdf` has a spacing issue.
- No exact OS³ Dash cutsheet was present.
- No exact JB³Ai Super Agent OS cutsheet was present.

23B corrected only the public copy filenames for the approved public-ready copies. It did not rename or alter the private intake files.

## Original Intake File Confirmation

Original private intake files remain in place:

```text
docs/media-intake/09-product-cutsheets/OS³ Core ClipbaordAi.pdf
docs/media-intake/09-product-cutsheets/OS³ Core InvestigatorAidf.pdf
docs/media-intake/09-product-cutsheets/OS³ Core IsikoloAi.pdf
docs/media-intake/09-product-cutsheets/OS³ Core NewsroomAi.pdf
docs/media-intake/09-product-cutsheets/OS³ Core The DukeBox of London.pdf
docs/media-intake/09-product-cutsheets/OS³ CoreVoiceGridAi .pdf
```

No original intake file was:

- Renamed.
- Moved.
- Deleted.
- Modified.
- Compressed.
- Staged.

## Public Link Confirmation

No public links were added in 23B.

No changes were made to:

- `src/pages/PublicHome.tsx`
- Product cards
- Resource Library components
- Routes
- App IDs
- Payment links
- Contact/social links
- `assetRegistry.ts`
- `/os`

The public copies exist as static files only. They are not yet exposed from the public website UI.

## Future 23C Linking / Integration Recommendation

Recommended next milestone:

```text
23C Product Cut Sheet Public Link Integration
```

23C should:

- Decide whether cut sheet links belong on product cards, Resource Library, or both.
- Add links only to the two prepared public copies unless more files are approved later.
- Use simple public links to:
  - `/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf`
  - `/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf`
- Add a small disclaimer near the resource area if needed.
- Avoid changing payment/contact/social links.
- Avoid adding routes unless explicitly required.
- Keep held products private until separate review milestones approve them.

Optional future manifest:

- No dedicated product cut sheet resource manifest pattern was found during 23B.
- If 23C needs structured resource metadata, create a small content file only after confirming the existing Resource Library pattern and keeping the integration scoped.

## QA Checklist

Completed:

- Confirmed private intake folder exists.
- Confirmed six private intake filenames.
- Copied only approved public-ready candidates.
- Confirmed public copies exist at expected paths.
- Confirmed held/review PDFs were not copied.
- Confirmed no `PublicHome.tsx` changes.
- Confirmed no source files were touched.
- Confirmed no routes, app IDs, payment/contact/social links, asset registry, or `/os` changes.
- Confirmed `vite.config.ts` remains local-only and unstaged.
- Confirmed `docs/media-intake/09-product-cutsheets/` remains unstaged.

## Build Result

Passed:

```text
npm run build
```

Build was run because public static assets were added.

## Safety / Staging Notes

Stage only:

```text
public/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf
public/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf
docs/phase-23/23b-product-cutsheet-intake-cleanup-public-resource-prep.md
```

Do not stage:

```text
docs/media-intake/09-product-cutsheets/
docs/media-intake/
vite.config.ts
public/assets/images/isikolo.png
public/assets/images/isikolosmaller.jpg
```

Do not use:

```text
git add .
```

## Recommended Commit Message

```text
Prepare public product cutsheet resources
```
