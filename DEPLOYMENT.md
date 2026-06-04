# Deployment Notes

## Recommended First Target

Use Vercel first.

Why:

- Vite deployment is simple
- GitHub integration is straightforward
- preview deployments are useful during content review
- rollback is easy
- no backend is required for v1

Netlify is also viable, but Vercel is the recommended first deployment target for this repo.

## Build Settings

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required for v1

## Node Recommendation

- Recommended Node version: `20.x LTS`

## Vercel Setup

1. Import the GitHub repository into Vercel
2. Select the Vite preset if it is not auto-detected
3. Set the build command to `npm run build`
4. Set the output directory to `dist`
5. Leave environment variables empty for v1
6. Deploy from `main`

## Netlify Setup

1. Import the GitHub repository into Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`
4. Leave environment variables empty for v1
5. Deploy from `main`

## Security Notes

- Do not upload private PDFs, investor packs, due-diligence files, or sensitive media into `public/assets`
- `public/assets` must remain public-safe at all times
- Keep all investor and document links placeholder-safe until a real restricted-access strategy exists
- Do not publish real iMED operational claims or current-service wording in public metadata or copy

## Deployment Notes For This Version

- This is a static public v1
- No backend is expected
- No auth secrets are needed
- No CMS keys are needed
- No live feed credentials are needed

## Pre-Deploy Check

Run:

```bash
npm install
npm run build
```

Then review [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md).
