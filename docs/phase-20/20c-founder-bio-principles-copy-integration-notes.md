# Phase 20C: Founder Bio and Principles Copy Integration Notes

## Review Status

- Drafted in 20C.
- Public copy integration.
- Pending human review.
- Not merged yet.

## Scope

20C integrates founder bio and founder principles copy only. The changes are narrow, reversible, and limited to existing public homepage, Founder Manual, and `/os` Founder Brief surfaces that already supported this content.

## Source Copy Used

| Source | Copy used |
| --- | --- |
| `docs/phase-20/20b-founder-bio-principles-integration-plan.md` | Approved founder bio candidate lines, six-principle shortlist, placement map, and safety controls. |
| `docs/media-intake/05-founder-bio/founder-bio-pack.md` | 50-word Founder Bio, Website Founder Summary, and OS Boot Founder Intro positioning. |
| `docs/media-intake/05-founder-bio/founder-principles-extract.md` | Founder Principles wording for Structure Before Hope, People Before Platforms, Proof Before Noise, Rebuild Before Retreat, Lead With Heart, and Intelligence Should Help. |

## Files Changed

- `src/content/founder.content.ts`
- `src/content/founderManual.content.ts`
- `src/components/public/PublicHeroCinematic.tsx`
- `src/os-apps/FounderBriefApp.tsx`
- `docs/phase-20/20c-founder-bio-principles-copy-integration-notes.md`

## Website Areas Touched

| Area | Change |
| --- | --- |
| Public homepage hero / founder overview | Hero body now renders the approved short founder bio from `founderProfile.shortBio`. |
| Founder Manual | Principle summaries now use the approved 20B wording, and the approved six-principle shortlist is represented. |
| `/os` Founder Brief | Founder Brief uses the updated founder overview through `founderProfile.mediumBio`, and the Systems Philosophy card includes the approved Intelligence Should Help line. |

## Founder Bio Lines Integrated

- `Jonathan Blackburn is a South African entrepreneur and systems builder whose work spans smart-home automation, recovery service structures, diagnostics, laboratory systems, and JB³Ai. His current focus is building intelligent systems that turn operational complexity into structure, clarity, and practical AI for good.`
- `Jonathan Blackburn is a South African entrepreneur and systems builder whose work evolved from Elite Technologies, through Trust In Hope and iMED Medical Group, into JB³Ai. His story connects automation, human rebuilding, historical diagnostics, regulated lab systems, and AI for good. JB³Ai is the current third evolution: a founder-led platform focused on intelligent systems, automation, and structured clarity. The work is guided by a simple principle: technology should serve real life.`

## Founder Principles Integrated

- Structure Before Hope: `Hope survives pressure when it is supported by structure.`
- People Before Platforms: `Technology should serve people before it serves products.`
- Proof Before Noise: `Credibility comes from evidence, delivery, and calm execution.`
- Rebuild Before Retreat: `A setback is not the end when the system can be rebuilt.`
- Lead With Heart: `Care is a leadership advantage, not a weakness.`
- Intelligence Should Help: `AI is useful only when it makes life and work clearer.`

## Safety Confirmations

- No timeline copy.
- No Elite Technologies timeline copy.
- No Trust In Hope timeline copy.
- No iMED timeline copy.
- No GTR asset movement.
- No GTR WebP review assets moved.
- No testimonials.
- No awards strip.
- No public files added.
- No raw media.
- No route changes.
- No app ID changes.
- No registry changes.
- No 18I asset changes.
- iMED remains historical.
- Trust In Hope remains historical.
- GTR³ remains symbolic/aspirational.
- Public/private split preserved.

## Build Result

- `npm run build` passed.
