# Jonathan Blackburn OS

Jonathan Blackburn OS is a premium public founder platform with a companion `/os` interface for structured profile, project, evidence, media, and investor-preview presentation.

## Current Status

- Deployment preparation complete through Milestone 15
- Content remains placeholder-safe by design
- No backend, CMS, real auth, live media, or sensitive document delivery in v1

## Purpose

This project presents:

- founder profile and positioning
- project showcase and preview media
- evidence and proof layers
- investor overview and controlled-access placeholders
- a cinematic public experience with a branded OS layer

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Framer Motion
- React Router

## Routes

- `/` public homepage
- `/login` placeholder login layer
- `/request-access` placeholder access request layer
- `/os` restricted-style OS interface

## Asset Rules

- Keep public assets in `public/assets`
- Use public paths through `src/data/assetRegistry.ts`
- Do not import visual/media files from `src`
- Use placeholder-safe assets until approved real files exist
- Keep logos in `public/assets/logos`
- Keep icons in `public/assets/icons`
- Keep images in `public/assets/images`
- Keep videos in `public/assets/videos`
- Keep documents in `public/assets/pdfs`

## Safety Rules

- Do not place private PDFs, real investor packs, or sensitive files in `public/assets`
- Do not expose real financial, legal, personal, or due-diligence documents
- Keep placeholder links clearly non-sensitive and non-misleading
- Avoid copy that implies active iMED services or hidden secure infrastructure

## Milestone Status

- Milestone 10: Visual Polish Pass 1
- Milestone 11: Architecture Hardening Pass 1
- Milestone 12: Public Navigation and Scroll Polish
- Milestone 13: Boot Animation
- Milestone 14: Asset Integration Pass 1
- Milestone 15: Deployment Preparation Pass 1

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build locally if needed:

```bash
npm run preview
```

## Deployment Snapshot

- Recommended first target: Vercel
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
- Environment variables: none required for v1

See [DEPLOYMENT.md](./DEPLOYMENT.md) and [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for deployment and launch checks.
