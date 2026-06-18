# Phase 20B: Founder Bio and Principles Integration Plan

## Review Status

- Drafted in 20B.
- Docs-only planning.
- Pending human review.
- Not published.
- Not wired into website.

## Purpose

Phase 20B selects the strongest public-safe Founder Bio Pack and Founder Principles Extract lines for future website integration. This plan defines which copy is suitable for controlled use, where it should eventually appear, and what safety gates must remain in place before any public site changes happen.

The goal is to prepare a clean first integration path for Jonathan Blackburn's founder identity without changing the live website in this milestone.

## Integration Rule

No website copy, component, route, registry, or public asset changes happen in 20B. This is selection and planning only.

## Candidate Source Summary

| Source | Role in 20B | Notes |
| --- | --- | --- |
| `docs/media-intake/05-founder-bio/founder-bio-pack.md` | Primary founder bio source | Contains 50-word, 150-word, 300-word, speaker, media-kit, website, and OS intro copy. |
| `docs/media-intake/05-founder-bio/founder-principles-extract.md` | Primary founder principles source | Contains values overview, core principles, quote-card lines, values copy, and media talking points. |
| `docs/phase-20/20a-selective-website-integration-plan.md` | Integration sequence source | Establishes that Founder Bio and Principles should be the first public copy integration layer. |

## Recommended Founder Bio Lines

| Use case | Candidate copy | Source file | Readiness level | Safety notes | Recommended action |
| --- | --- | --- | --- | --- | --- |
| Hero short bio | Jonathan Blackburn is a South African entrepreneur and systems builder whose work spans smart-home automation, recovery service structures, diagnostics, laboratory systems, and JB³Ai. His current focus is building intelligent systems that turn operational complexity into structure, clarity, and practical AI for good. | `founder-bio-pack.md` | Ready after final line edit | Public-safe. Keeps iMED historical by naming diagnostics/lab systems as part of the arc, not current services. | Use as the base for a concise hero or intro line in the first controlled copy integration milestone. |
| About / Founder Overview bio | Jonathan Blackburn is a South African entrepreneur and systems builder whose work evolved from Elite Technologies, through Trust In Hope and iMED Medical Group, into JB³Ai. His story connects automation, human rebuilding, historical diagnostics, regulated lab systems, and AI for good. JB³Ai is the current third evolution: a founder-led platform focused on intelligent systems, automation, and structured clarity. The work is guided by a simple principle: technology should serve real life. | `founder-bio-pack.md` | Ready after human review | Strong public-safe arc. Avoid adding extra operational claims around iMED or JB³Ai scale. | Use for a future Founder Overview or refined public about section. |
| OS boot intro line | Jonathan Blackburn OS is a living founder blueprint. This is not a portfolio. It is the operating record of a founder who turns complexity into systems. | `founder-bio-pack.md` | Ready after context check | Fits the current OS language. Should not turn `/os` into a public sales pitch. | Use sparingly in `/os` boot or Founder Brief copy if a later integration milestone approves it. |
| Media kit short bio | Jonathan Blackburn is a South African entrepreneur, systems builder, and founder of JB³Ai. His career spans early smart-home automation, recovery service structures, historical diagnostics and laboratory systems, and the current development of intelligent operating environments. | `founder-bio-pack.md` | Ready after media-kit formatting | Public-safe if kept as biography context. Avoid active iMED service wording. | Reserve for a future media-kit/speaker profile layer rather than immediate homepage copy. |
| Speaker intro line | Please welcome Jonathan Blackburn, a South African entrepreneur and systems builder whose work has moved from smart-home automation and AV systems, through recovery service structures and historical diagnostics, into applied AI and intelligent operations. | `founder-bio-pack.md` | Ready after event-specific edit | Suitable for speaking contexts. Keep recovery phrasing dignified and general. | Use later in a media-kit or speaker-bio output, not directly on the website yet. |

## Recommended Founder Principles

| Principle | Candidate wording | Proposed website location | Readiness level | Risk notes | Recommended action |
| --- | --- | --- | --- | --- | --- |
| Structure Before Hope | Hope survives pressure when it is supported by structure. | Founder Manual; public homepage values strip | Ready after final visual fit review | Safe and central to the brand. Avoid overusing it until it loses force. | Prioritize for the first website integration. |
| People Before Platforms | Technology should serve people before it serves products. | Founder Manual; JB³Ai values context | Ready after final fit review | Strong human-first technology line. Keep it away from generic SaaS framing. | Prioritize for first integration. |
| Proof Before Noise | Credibility comes from evidence, delivery, and calm execution. | Founder Manual; awards/proof bridge | Ready after claims review | Safe if not paired with unsupported awards or testimonial claims. | Use as a proof-system anchor line. |
| Rebuild Before Retreat | A setback is not the end when the system can be rebuilt. | Founder Manual; GTR³ symbolic bridge | Ready after tone review | Strong but could become melodramatic if surrounded by too much recovery detail. | Use with restraint, preferably near the founder journey layer. |
| Lead With Heart | Care is a leadership advantage, not a weakness. | Founder Manual; public values copy | Ready after tone review | Warm and public-safe. Keep it practical, not sentimental. | Use as a values line or supporting quote. |
| Intelligence Should Help | AI is useful only when it makes life and work clearer. | JB³Ai / AI for good context; OS intro support | Ready after product-claim review | Safe if JB³Ai claims remain grounded and do not imply fully launched product scale. | Use in JB³Ai-facing sections after controlled review. |

## Proposed Website Placement Map

| Website area | Proposed content type | Source | Ready for later integration? | Next milestone needed |
| --- | --- | --- | --- | --- |
| Public homepage hero | Condensed founder bio plus one systems line | `founder-bio-pack.md`; `founder-principles-extract.md` | Yes, after final human copy approval | `20C Founder Bio and Principles Copy Integration` |
| Founder Manual | Four to six selected principles with short supporting explanations | `founder-principles-extract.md` | Yes, after visual density review | `20C Founder Bio and Principles Copy Integration` |
| `/os` Founder Brief | Deeper founder overview and OS boot intro line | `founder-bio-pack.md` | Yes, but should be handled carefully to preserve private OS tone | `20C Founder Bio and Principles Copy Integration` or a small OS-specific follow-up |
| Timeline or Phase System | High-level bridge language only, not detailed timeline rewrite | `founder-bio-pack.md`; future timeline extracts | Not yet | `20D Public Timeline Copy Integration Plan` |
| Media kit / speaker bio layer | Speaker intro, media-kit short bio, and longer profile variants | `founder-bio-pack.md` | Yes for docs/media-kit planning, not immediate website integration | Future media-kit milestone |

## Copy Safety Review

| Copy area | Main risk | Required control | Phase 20 action |
| --- | --- | --- | --- |
| Founder bio | Overclaiming current business scale | Keep claims to founder arc, systems work, and JB³Ai direction without inflated scale language | Select short, grounded lines only. |
| iMED references | Implying iMED currently operates or offers active services | Use historical diagnostics, laboratory systems, forensic toxicology, COVID-response, and regulated lab-system phrasing only | Keep historical wording in all future integrations. |
| Recovery / Trust In Hope | Sensitive recovery details or identifying stories | Keep recovery language dignified, general, and systems-led | Use public-safe phrases like service structures, routine, accountability, and rebuilding. |
| GTR³ | Implying the third GT-R exists or has been obtained | Keep GTR³ symbolic, aspirational, and connected to the third-rise story | Do not integrate GTR WebP exports yet. |
| JB³Ai | Overstating product maturity or launch status | Use grounded language: intelligent systems, automation, AI for good, structured clarity | Avoid claims of fully launched product scale unless separately approved. |
| Testimonials | Publishing direct quotes without permission | Keep direct quotes permission-gated | Do not integrate testimonial quotes in 20B or 20C unless permission status changes. |
| Awards | Unsupported finalist/winner claims | Use awards as historical credibility context only after claims review | Do not integrate awards language in this milestone. |
| Private material | Legal, family, court, evidence, financial, or private case exposure | Exclude all private material from public copy | Keep the Do Not Integrate Yet list active. |

## Recommended 20C or Future Action

If the selected lines in this document pass human review, the next milestone should be:

`20C Founder Bio and Principles Copy Integration`

That milestone can become the first controlled public copy integration pass. It should only integrate the approved founder bio and principles copy into tightly scoped website locations, with visual QA and build verification before commit.

The timeline copy should remain a separate follow-up milestone because Elite Technologies, Trust In Hope, and iMED require more precise historical framing and should not be bundled into the first public copy integration pass.

## Do Not Integrate Yet

- Private legal, family, court, evidence, or financial material.
- Sensitive recovery detail.
- Direct testimonial quotes.
- Awards claims.
- Current iMED service, accreditation, licensing, or test-availability claims.
- GTR WebP exports.
- Raw candidate media.
- Any GTR³ arrival claim.

## Safety Notes

- Docs-only planning.
- No public files added.
- No app/source files changed.
- No route, app, registry, or component changes.
- No public website copy changed.
- No 18I assets changed.
- Raw media remains untracked.
- Public/private split preserved.
- iMED remains historical.
- Trust In Hope remains historical.
- GTR³ remains symbolic/aspirational.
- Testimonials remain permission-aware.
- Awards remain claims-gated.

## 20B Decision

20B is complete when this planning document is reviewed and merged. Only after 20B should the project decide whether to proceed with the first controlled founder bio/principles website copy integration milestone.
