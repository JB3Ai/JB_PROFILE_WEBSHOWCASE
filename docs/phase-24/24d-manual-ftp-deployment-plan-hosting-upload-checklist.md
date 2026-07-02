# Milestone 24D: Manual FTP Deployment Plan and Hosting Upload Checklist

## Status

Drafted for review.

## Purpose

24D documents the manual FTP/explicit FTPS deployment plan for the launch-ready public homepage.

This milestone is deployment planning only. It does not upload files, change the website, edit source code, create build artifacts for commit, move assets, touch private intake files, or store credentials.

## Deployment Status

Current status:

- 24A confirmed the public homepage is launch-ready for the current controlled scope.
- 24B completed the human desktop and 390px mobile scroll-pass review.
- 24C finalized the launch announcement publishing pack.
- 24D prepares the manual upload checklist before touching the live server.

Deployment execution is not approved in this milestone.

## Hosting Details

Known hosting details:

| Item | Value |
| --- | --- |
| FTP username | `jonoblac` |
| FTP server | `ftp.jonoblackburn.com` |
| FTP / explicit FTPS port | `21` |
| Hosting home path | `/home/jonoblac` |
| Likely public web root | `/home/jonoblac/public_html/` |
| Alternate public web root view | `/public_html/` |

Security rule:

- Do not write FTP passwords, cPanel passwords, API keys, or hosting secrets into repository files, PRs, commits, issue comments, or chat logs.

## Local Build Command

Run from the project root:

```bash
npm run build
```

Expected build output folder:

```bash
dist/
```

## Local Build Output Folder

The Vite production build writes deployable static files into:

```bash
dist/
```

The deployment source is the contents inside `dist/`.

## Exact Upload Rule

Upload the contents of:

```bash
dist/
```

to the public web root.

Do not upload the `dist/` folder as a folder.

Correct:

```text
public_html/index.html
public_html/assets/...
public_html/resources/...
public_html/site.webmanifest
public_html/robots.txt
```

Incorrect:

```text
public_html/dist/index.html
public_html/dist/assets/...
```

## Likely Remote Upload Path

Preferred target:

```text
/home/jonoblac/public_html/
```

If the FTP client opens directly inside the account home or web root, the same location may appear as:

```text
/public_html/
```

Before uploading, confirm the remote directory contains the existing public website files or the expected hosting web-root structure.

## Pre-Upload Backup Checklist

Before replacing live files:

- Confirm the FTP client is connected to `ftp.jonoblackburn.com` using FTP or explicit FTPS on port `21`.
- Confirm the remote target is `public_html`.
- Create a timestamped backup of the current live web root before overwrite.
- Preferred backup name pattern:

```text
public_html-backup-YYYYMMDD-HHMM/
```

- If the hosting panel supports file compression, create a ZIP backup of current `public_html`.
- If using FTP only, download the current `public_html` contents to a local backup folder before upload.
- Confirm the backup includes current `index.html`, `assets/`, `resources/`, `robots.txt`, and `site.webmanifest` if present.
- Do not delete the backup until post-upload QA passes.

## FTP / FTPS Connection Checklist

Use these connection settings:

| Setting | Value |
| --- | --- |
| Host | `ftp.jonoblackburn.com` |
| Username | `jonoblac` |
| Port | `21` |
| Protocol | FTP or explicit FTPS |
| Remote directory | `/home/jonoblac/public_html/` or `/public_html/` |

Credential handling:

- Enter the password only inside the FTP client or hosting control panel.
- Do not save the password into project files.
- Do not paste the password into terminal history, GitHub, docs, commits, or chat.
- If the FTP client offers a site profile, ensure it stores credentials securely.

## Files / Folders To Upload

Upload everything produced inside `dist/`, including:

- `index.html`
- `assets/`
- `resources/`
- `site.webmanifest`
- `robots.txt`
- any other files generated into `dist/` by the build

For the current controlled scope, confirm the following public resource paths exist after build:

```text
dist/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf
dist/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf
```

## Files / Folders To Exclude

Never upload these project files/folders to `public_html`:

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
- local `.env` files
- raw intake candidates
- local Isikolo candidate images
- source PNG/JPG candidates
- FTP credential files
- temporary QA folders
- `dist/` as a containing folder

Only upload the built static contents inside `dist/`.

## Post-Upload QA Checklist

After upload, verify the live site in a browser:

- Open the live homepage.
- Hard refresh with cache bypass.
- Confirm the homepage loads without a server error.
- Confirm the hero renders.
- Confirm the approved public homepage section sequence still reads correctly:
  - Product Architecture
  - Sponsor Isikolo
  - Timeline
  - Founder Phase
  - GTR³
  - Media
  - Evidence
  - Investor
  - Connect
- Confirm approved cards remain visible:
  - OS³ Dash
  - JB³Ai Super Agent OS
  - ClipboardAi
- Confirm excluded items are not visible:
  - DukeBox of London
  - VoiceGrid Ai
  - InvestigatorAi
  - Newsroom
  - ViewGrid
  - Clipboard OS³ Lite
  - ClipboardOS
- Confirm IsikoloAI and Sponsor Isikolo surfaces remain stable.
- Confirm no broken images appear.
- Confirm no obvious text overflow appears.
- Confirm no obvious horizontal overflow appears on desktop.
- Confirm no obvious horizontal overflow appears at 390px mobile.

## Public Cut Sheet Link QA

Verify these live URLs after upload:

```text
/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf
/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf
```

Expected result:

- HTTP `200`
- PDF opens or downloads according to browser behavior
- Content type should be `application/pdf` if checked with developer tools or HTTP tooling

Do not expect public links for held/review cut sheets.

## DNS / Cache / Browser Hard-Refresh Checks

After upload:

- Hard refresh the homepage in the browser.
- Test in a private/incognito window.
- If the host uses caching, purge hosting cache if available.
- If a CDN is present later, purge CDN cache.
- Check both desktop and mobile width after cache clears.
- If stale files appear, confirm the upload overwrote the correct `public_html` path and did not create a nested `dist/` folder.

## Rollback Plan

If post-upload QA fails:

1. Stop further uploads.
2. Capture the failing live URL and screenshot if useful.
3. Restore the timestamped `public_html` backup.
4. Hard refresh and confirm the previous site is back.
5. Document the failure in a follow-up milestone before attempting another upload.

Rollback should restore the pre-upload `public_html` contents, not partially mix old and new files.

## Security Notes

- No FTP password belongs in this repository.
- No FTP credential file should be committed.
- Do not upload source or intake folders.
- Do not upload `docs/media-intake/`.
- Do not upload raw private candidates.
- Do not upload local-only image candidates.
- Do not upload `.env` files.
- Use explicit FTPS if the FTP client supports it.
- Prefer a backup before every manual overwrite.

## Non-Goals

24D does not:

- deploy to FTP,
- upload files,
- run a live release,
- change source files,
- change public homepage content,
- change CSS,
- change routes,
- change `/os`,
- change payment/contact/social links,
- change asset registry entries,
- add or remove PDFs,
- move intake files,
- commit `dist/`,
- store credentials.

## Files Changed

| File | Purpose |
| --- | --- |
| `docs/phase-24/24d-manual-ftp-deployment-plan-hosting-upload-checklist.md` | Documents the manual FTP deployment plan, upload checklist, exclusions, QA, rollback, and security notes. |

No source files were changed.

## Build Result

Build not required.

This is a docs-only deployment planning milestone. No source, config, public asset, route, resource, or `dist/` files were touched.

## Safety / Staging Notes

Confirmed out of scope:

- `vite.config.ts`
- `docs/media-intake/09-product-cutsheets/`
- raw intake candidates
- local Isikolo image candidates
- source files
- public assets
- `dist/`
- FTP credential files

Use targeted staging only:

```bash
git add docs/phase-24/24d-manual-ftp-deployment-plan-hosting-upload-checklist.md
```

Do not use `git add .`.

## Recommended Next Milestone

24E: Manual FTP Deployment Execution Log and Post-Upload QA.

24E can perform the controlled live upload, document the exact upload path used, record post-upload QA results, verify the live homepage and approved cut sheet links, and capture rollback readiness.
