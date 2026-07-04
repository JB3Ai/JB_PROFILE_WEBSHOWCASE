# Milestone 24E2: GitHub Actions FTP Deployment and Live Post-Upload QA

## Status

Drafted for review.

Deployment status: workflow created, live deployment not run yet.

## Purpose

24E2 pivots deployment from manual local FTP upload to a GitHub Actions workflow so FTP credentials can remain inside GitHub Actions Secrets.

This milestone creates the manual deployment workflow and documents the live QA requirements. It does not expose secrets, commit build output, or change website source files.

## Deployment Method

Deployment method:

- GitHub Actions
- Manual trigger only: `workflow_dispatch`
- Build output: `dist/`
- Upload source: contents of `dist/`
- Upload target: `${{ secrets.FTP_TARGET_DIR }}`
- FTP credentials: GitHub Actions Secrets

The workflow is manual-only for the first deployment pass. Automatic deploy-on-push is intentionally not enabled.

## Required GitHub Secrets

Required repository Actions secrets:

| Secret | Purpose | Expected value pattern |
| --- | --- | --- |
| `FTP_SERVER` | FTP host | `ftp.jonoblackburn.com` |
| `FTP_USERNAME` | FTP username | `jonoblac` |
| `FTP_PASSWORD` | FTP password | hidden secret value |
| `FTP_TARGET_DIR` | Remote web root | `/home/jonoblac/public_html/` |

Alternative target if the host requires it:

```text
/public_html/
```

Secret availability note:

- `gh secret list --repo JB3Ai/JB_PROFILE_WEBSHOWCASE` did not display required secret names from this environment.
- Values were not requested, printed, stored, or committed.
- Before running the workflow, confirm the four required secrets exist in GitHub repo settings.

## Workflow File Created

Created:

```text
.github/workflows/deploy-ftp.yml
```

Workflow name:

```text
Deploy public site via FTP
```

Trigger:

```yaml
workflow_dispatch:
```

No push trigger was added.

## Build Command

Workflow build command:

```bash
npm run build
```

Dependency install command:

```bash
npm ci
```

Node version:

```text
20
```

## Deploy Source Directory

Workflow deploy source:

```text
./dist/
```

The trailing slash is intentional. The workflow uploads the contents of `dist/`, not a nested `dist` folder.

## Deploy Target Directory

Workflow deploy target:

```yaml
server-dir: ${{ secrets.FTP_TARGET_DIR }}
```

Expected secret value:

```text
/home/jonoblac/public_html/
```

or, if required by the host:

```text
/public_html/
```

## Confirmation That `dist/` Is Not Committed

Confirmed.

`dist/` is not staged and is not part of the committed files for this milestone.

The workflow builds `dist/` inside the GitHub Actions runner, then deploys that runner-generated output.

## Confirmation That Secrets Are Not Exposed

Confirmed.

The workflow references secrets only through the GitHub Actions secrets context:

```yaml
${{ secrets.FTP_SERVER }}
${{ secrets.FTP_USERNAME }}
${{ secrets.FTP_PASSWORD }}
${{ secrets.FTP_TARGET_DIR }}
```

No FTP password or credential value was added to the workflow, docs, commits, PR body, or command output.

## Live Deployment Status

Not run yet.

Reason:

- The workflow has been created, but required GitHub Actions Secrets must be confirmed before running it.
- No live upload was triggered from this environment.

## Live Homepage QA

Pending workflow run.

After the workflow runs, verify:

```text
https://jonoblackburn.com/
```

Expected result:

- HTTP `200`
- homepage loads
- no server error
- no obvious broken image state
- no obvious horizontal overflow

## Live Public PDF QA

Pending workflow run.

After deployment, verify:

```text
https://jonoblackburn.com/resources/product-cutsheets/os3-core-clipboardai-cutsheet-v01.pdf
https://jonoblackburn.com/resources/product-cutsheets/os3-core-isikoloai-cutsheet-v01.pdf
```

Expected result:

- HTTP `200`
- PDF opens or downloads according to browser behavior
- content type should be `application/pdf` if checked with HTTP tooling

## Desktop QA

Pending workflow run.

After deployment, verify desktop homepage behavior:

- homepage loads
- hero renders
- Product Architecture appears
- OS³ Dash visible
- JB³Ai Super Agent OS visible
- ClipboardAi visible
- Sponsor Isikolo stable
- no obvious broken images
- no obvious horizontal overflow

## 390px Mobile QA

Pending workflow run.

After deployment, verify at 390px width:

- homepage is usable
- mobile hero/navigation remain readable
- approved product cards remain visible
- Sponsor Isikolo remains stable
- no obvious text overflow
- no obvious horizontal overflow

## Excluded Product / Resource Confirmation

Pending workflow run.

After deployment, confirm no visible reintroduction of:

- DukeBox of London
- VoiceGrid Ai
- InvestigatorAi
- Newsroom
- ViewGrid
- Clipboard OS³ Lite
- ClipboardOS

Confirm no held/review cut sheet links are exposed.

## Issues Found

Current issue:

| Issue | Impact | Resolution |
| --- | --- | --- |
| Required GitHub Actions Secrets were not visible through `gh secret list` in this environment. | Workflow should not be run until secrets are confirmed in GitHub settings. | Confirm or add `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, and `FTP_TARGET_DIR` under repo Actions Secrets, then run the workflow manually. |

No website source issue was found.

## Fixes Made

Created a manual GitHub Actions FTP deployment workflow.

No website source files were changed.

No credentials were added.

No build output was committed.

## Rollback Notes

Before the first workflow deployment:

- Confirm hosting backup/preserve strategy from the 24D checklist.
- Confirm whether the FTP deploy action should overwrite only changed files or whether a manual backup of `public_html` is required first.
- Keep the previous live files restorable until live QA passes.

If the deployment fails or live QA fails:

1. Stop further workflow runs.
2. Capture workflow logs without exposing secrets.
3. Restore the prior live `public_html` state if needed.
4. Document the failure before attempting another deployment.

## Files Changed

| File | Purpose |
| --- | --- |
| `.github/workflows/deploy-ftp.yml` | Adds a manual GitHub Actions workflow to build and deploy `dist/` contents via FTP using repository secrets. |
| `docs/phase-24/24e2-github-actions-ftp-deployment-live-post-upload-qa.md` | Documents the deployment method, required secrets, current deployment status, and post-upload QA checklist. |

## Safety / Staging Notes

Allowed files for this milestone:

- `.github/workflows/deploy-ftp.yml`
- `docs/phase-24/24e2-github-actions-ftp-deployment-live-post-upload-qa.md`

Confirmed out of scope:

- `dist/`
- `vite.config.ts`
- `docs/media-intake/09-product-cutsheets/`
- raw intake candidates
- local Isikolo image candidates
- FTP credentials
- secrets
- source files
- public assets

Use targeted staging only:

```bash
git add .github/workflows/deploy-ftp.yml
git add docs/phase-24/24e2-github-actions-ftp-deployment-live-post-upload-qa.md
```

Do not use `git add .`.

## Final Go-Live Decision

Not yet live.

Decision: workflow-ready, pending GitHub Actions Secrets confirmation and first manual workflow run.

## Recommended Next Milestone

24E3: GitHub Actions FTP Workflow Run and Live QA Closeout.

24E3 should run the workflow manually, capture the workflow result, verify the live homepage, verify the two approved public PDFs, and record final go-live status.
