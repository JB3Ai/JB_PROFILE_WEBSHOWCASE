# Launch Checklist

## Environment

- Run `npm install`
- Run `npm run build`

## Route Checks

- Verify homepage `/`
- Verify `/login`
- Verify `/request-access`
- Verify `/os`

## Experience Checks

- Verify boot sequence runs once per session
- Verify boot `Skip` works
- Verify public navigation scroll works
- Verify mobile layout remains usable
- Verify favicon appears
- Verify page title is correct
- Verify meta description is present

## Safety Checks

- Verify no sensitive assets exist in `public/assets`
- Verify placeholder links remain placeholder-safe
- Verify no real investor files are public
- Verify no real private PDFs are public
- Verify no misleading active-service claims are present

## Public QA

- Verify homepage loads without layout breaks
- Verify asset placeholders render if real media is missing
- Verify cards do not break when thumbnails fail
- Verify `/os` opens and renders app windows
- Verify no obvious console errors during smoke test
