# Milestone 24E: Manual FTP Deployment Execution Log and Post-Upload QA

## Status

Drafted for review.

Deployment status: not uploaded yet.

## Purpose

24E records the manual FTP deployment execution attempt after 24D documented the hosting upload checklist.

This log documents the completed local deployment-preparation steps and the reason the live FTP upload was not executed from this environment: no secure preconfigured FTP credential/session was available, and the milestone rules prohibit writing, requesting, committing, or logging FTP passwords or secrets.

## Deployment Date / Time

Local deployment-prep timestamp:

```text
2026-07-03 01:57:46 +02:00
```

## Source Commit Prepared

Source commit prepared for deployment:

```text
2b72b5df7f92036b6c14566b33cdd930a504f7cf
```

This is the synced `main` commit after 24D was merged.

## Build Command and Result

Command run:

```bash
npm run build
```

Result: passed.

Build output summary:

```text
dist/index.html                  3.09 kB | gzip:   0.90 kB
dist/assets/index-wKsE5sE1.css  98.53 kB | gzip:  15.38 kB
dist/assets/index-DSp2A3SD.js  409.47 kB | gzip: 123.65 kB
```

Vite reported a CJS Node API deprecation warning, but the production build completed successfully.

## Build Output Confirmation

Confirmed local build output exists in:

```text
dist/
```

Observed top-level build output:

- `dist/index.html`
- `dist/assets/`
- `dist/resources/`
- `dist/favicon.svg`
- `dist/robots.txt`
- `dist/site.webmanifest`

Approved public PDF resources are present in the build output:

| Resource | Built file | Size |
| --- | --- | ---: |
| ClipboardAi cut sheet | `dist/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf` | `1,721,755` bytes |
| IsikoloAI cut sheet | `dist/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf` | `1,902,025` bytes |

## Upload Method Used

No live upload was performed.

Available command-line FTP tooling in this environment:

- `ftp.exe`
- `curl.exe`

No preconfigured WinSCP, lftp, or equivalent secure FTP session was available through the command line.

Because the password must not be requested, written into shell commands, stored in docs, or committed, the live upload should be performed through a secure FTP client or hosting control panel session outside Git history and command logs.

## Remote Path Used

No remote path was modified.

Expected remote target for the eventual manual upload remains:

```text
/home/jonoblac/public_html/
```

or, depending on FTP client root view:

```text
/public_html/
```

## Dist Upload Rule

Not executed yet.

The deployment package is ready under `dist/`, and the upload rule remains:

```text
Upload the contents of dist/ into public_html.
Do not upload the dist folder itself.
```

## Backup / Preserve Action Before Upload

Not executed yet.

Required before the eventual upload:

- Confirm the remote directory is `public_html`.
- Preserve or download the existing live `public_html` contents.
- Prefer a timestamped backup folder or archive.
- Do not overwrite live files until backup/preserve action is complete.

## Files / Folders Intentionally Excluded

No files were uploaded.

The eventual deployment must exclude:

- `.git/`
- `.github/`
- `node_modules/`
- `src/`
- `docs/`
- `docs/media-intake/`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `tsconfig.json`
- `README.md`
- `.env` files
- raw intake candidates
- local Isikolo image candidates
- FTP credential files
- temporary QA folders
- the `dist/` folder as a containing folder

Only the contents inside `dist/` should be uploaded.

## Live Homepage QA Result

Not executed.

Reason: no live upload was performed in this milestone run.

## Desktop QA Result

Not executed against the live site.

Local production build completed successfully and the deployment package is ready for manual upload.

## 390px Mobile QA Result

Not executed against the live site.

Mobile live QA must be performed after upload.

## Public Cut Sheet Link QA Result

Live QA not executed.

Local build output confirms both approved PDF files are present in `dist/resources/product-cutsheets/`.

After upload, verify:

```text
/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf
/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf
```

Expected live result:

- HTTP `200`
- PDF opens or downloads according to browser behavior
- Content type should be `application/pdf`

## Excluded Products / Resources Confirmation

No live deployment was performed, so no live-surface change occurred.

The eventual post-upload QA must confirm no visible reintroduction of:

- DukeBox of London
- VoiceGrid Ai
- InvestigatorAi
- Newsroom
- ViewGrid
- Clipboard OS³ Lite
- ClipboardOS

It must also confirm no held/review cut sheet links are exposed.

## Issues Found

One operational blocker was found:

| Issue | Impact | Resolution |
| --- | --- | --- |
| No secure preconfigured FTP credential/session available in the command environment. | Live upload could not be safely performed without risking password exposure in commands, logs, docs, or chat. | Use a secure FTP client or hosting control panel session for upload, then document the completed upload in a follow-up execution log. |

No code/build issue was found.

## Fixes Made

No website source fixes were made.

No FTP configuration files were created.

No credentials were requested, stored, or committed.

## Rollback Readiness

Rollback was not tested because no live upload occurred.

Before any live upload, prepare rollback by:

- backing up current `public_html`,
- confirming backup can be restored,
- keeping the previous live files available until post-upload QA passes,
- avoiding partial overwrite/mixed old-new file states.

## Files Changed

| File | Purpose |
| --- | --- |
| `docs/phase-24/24e-manual-ftp-deployment-execution-log-post-upload-qa.md` | Documents the deployment-prep execution, successful build, credential-safe upload blocker, and required post-upload QA. |

No source files were changed.

## Safety / Staging Notes

Confirmed out of scope:

- `dist/`
- `vite.config.ts`
- `docs/media-intake/09-product-cutsheets/`
- raw intake candidates
- local Isikolo image candidates
- FTP credentials
- FTP client configuration files
- secrets
- source files
- public assets

Use targeted staging only:

```bash
git add docs/phase-24/24e-manual-ftp-deployment-execution-log-post-upload-qa.md
```

Do not use `git add .`.

## Recommended Next Milestone

24E2: Manual FTP Upload Completion and Live Post-Upload QA.

24E2 should be used after the upload is performed through a secure FTP client or hosting control panel session. It should document:

- the exact remote path used,
- the backup/preserve action taken,
- confirmation that contents of `dist/` were uploaded,
- live homepage HTTP result,
- desktop QA,
- 390px mobile QA,
- approved PDF link QA,
- excluded product/resource confirmation,
- rollback readiness.
