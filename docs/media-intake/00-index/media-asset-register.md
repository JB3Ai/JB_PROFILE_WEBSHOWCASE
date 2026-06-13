# Media Asset Register

## Intake Rules

This register supports review and classification only. No candidate media in
`docs/media-intake` is approved for publication by being placed in this folder.

Important:

- Do not reference `media-intake` from application code or `assetRegistry.ts`.
- Do not commit raw videos, PDFs, documents, archive material, or private files.
- Anything committed beneath `public/` can become publicly accessible after
  deployment.
- Move approved, optimized public assets to their final production location
  only after a separate review and explicit approval.
- Keep legal, family, financial, court, evidence, investor, and private case
  material outside public deployment paths.
- Do not use `archive-candidates` as a live asset source.

## Public-Safe Status Labels

| Status | Meaning |
| --- | --- |
| `PUBLIC` | Approved as safe for website use or public download. |
| `PUBLIC-EXTRACT` | Potentially public-safe only after editing, redaction, trimming, or re-export. |
| `INVESTOR-ONLY` | Restricted review material that must not appear on public routes. |
| `BOOK-ONLY` | Manuscript or GTR³ publishing material that must not appear on the website. |
| `INTERNAL` | Reference or source material only. |
| `BLOCKED` | Do not upload, commit, publish, or distribute. |

## Review Guidance

- Use historical framing for Elite Technologies and iMED archive material.
- Do not imply iMED is currently operating.
- Keep GTR³ aspirational and do not imply the vehicle exists or has been
  obtained.
- Remove private names, direct contact details, signatures, addresses,
  financial information, case references, and confidential identifiers before
  considering public use.
- Treat DOC and DOCX files as source material unless a reviewed public extract
  is produced.
- Keep large raw video outside Git. Record it here first, then decide on editing
  and external hosting.
- Use one register row per source asset, including rejected or blocked assets,
  so decisions remain traceable.

## Asset Register

| Asset ID | Original filename | Asset type | Era/category | Public-safe status | Recommended use | Risk notes | Final proposed filename | Needs editing | Publish decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `VID-001` | `founder_intro_raw.mp4` | Video | JB³Ai | `PUBLIC-EXTRACT` | Founder introduction or OS preview | Remove private names and trim to 30-60 seconds | `founder-intro-01.mp4` | Yes | Hold |
| `PDF-001` | `founder_letter.pdf` | PDF | Founder bio | `PUBLIC-EXTRACT` | Public media kit | Review contact details and signatures | `founder-letter-public.pdf` | Yes | Hold |
| `DOC-001` | `Saving Jono.docx` | DOCX | GTR³ / book | `BOOK-ONLY` | Manuscript source | Contains sensitive recovery detail | `saving-jono-source.docx` | No | Block public |

## Intake Priority

1. Founder introduction video, 30-60 seconds
2. Public founder one-page PDF
3. JB³Ai public overview PDF
4. GTR³ book teaser PDF
5. Public press and awards proof pack
6. Public-safe historical iMED profile
7. Archive video clips for later media review
