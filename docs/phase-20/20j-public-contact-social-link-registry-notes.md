# Phase 20J: Public Contact and Social Link Registry Notes

## Review Status

Drafted in 20J.

Public contact and social registry pass.

Pending human review.

Not merged yet.

## Scope

20J creates a public-safe contact and social link registry, then updates the existing homepage Connect surface with a compact professional display set.

This milestone does not add a new homepage section, does not redesign the page, and does not change the private OS.

## Registry File Created / Updated

Updated:

- `src/content/social.content.ts`

Added registry exports:

- `publicContactSocialRegistry`
- `publicConnectLinks`
- `homepageContactLinks`
- `registryOnlySocialLinks`

The existing `socialLinks` export remains in place for legacy/private preview compatibility.

## Public Links Included

Primary contact:

- `hi@jb3ai.com`
- `info@jonoblackburn.com`
- WhatsApp: `https://wa.me/27719691848`

Professional public channels:

- LinkedIn Jonathan: `https://www.linkedin.com/in/jonathanblackburn0793120688/`
- LinkedIn JB³Ai: `https://www.linkedin.com/company/jb%C2%B3ai/`
- Instagram JB³Ai: `https://www.instagram.com/jb3a.i`
- Instagram Jonathan: `https://www.instagram.com/jonoblackburn5/`
- YouTube JB³Ai: `https://www.youtube.com/@JB3Ai`
- YouTube Jonathan: `https://www.youtube.com/@JonoBlackburn`
- TikTok JB³Ai: `https://www.tiktok.com/@jb3ai2`
- TikTok Jonathan: `https://www.tiktok.com/@jonoblackburn`
- Medium: `https://medium.com/@jono_12764`
- Facebook Jonathan: `https://www.facebook.com/jono.blackburn.5`
- Facebook JB³Ai: `https://www.facebook.com/profile.php?id=61582817213519`
- Threads: `https://www.threads.com/@jonoblackburn5`

## Registry-Only Links Captured

Captured but not displayed in the primary professional homepage surface:

- Reddit: `https://www.reddit.com/user/jonoelite_jb3ai/`
- WhatsApp Channel: `https://lnkd.in/dPizUzb9`
- YouTube short link: `https://lnkd.in/dF8MKmhT`
- Discord: `jonoelite2491`
- Telegram: `@jonoelitesa`
- X: `@JonoBlackburn7`
- PlayStation: `JonoElite7`
- Xbox: `JonoElite7#9271`
- Roblox: `Jonoelite74`

## Visible UI Links Selected

The homepage Connect strip uses `homepageContactLinks` and displays a compact professional set:

- `hi@jb3ai.com`
- WhatsApp
- LinkedIn Jonathan
- LinkedIn JB³Ai
- Instagram JB³Ai
- YouTube JB³Ai
- TikTok JB³Ai
- Medium
- Threads

## Links Intentionally Not Displayed

These links remain in the registry only and are not shown in the primary professional homepage UI:

- Reddit
- Discord
- Telegram
- X
- WhatsApp Channel short link
- YouTube short link
- PlayStation
- Xbox
- Roblox

Facebook and the secondary personal social variants are captured in the public registry but not selected for the compact homepage display in 20J to avoid overloading the Connect strip.

## Files Changed

- `src/content/social.content.ts`
- `src/components/public/ConnectStrip.tsx`
- `src/pages/PublicHome.tsx`
- `docs/phase-20/20j-public-contact-social-link-registry-notes.md`

## Website Area Touched

Homepage Connect strip only.

No `/os` route, private OS component, timeline, sponsorship, payment, PDF library, GTR, route, app ID, asset registry, or 18I asset changes were made.

## Safety Confirmations

- No tracking scripts added.
- No embeds added.
- No widgets added.
- No analytics added.
- No backend added.
- No API keys added.
- No forms added.
- No payment logic added.
- No sponsorship/payment links changed.
- No `/os` changes.
- No timeline changes.
- No GTR asset movement.
- No raw media added.
- No public asset files added.
- No route changes.
- No app ID changes.
- No `assetRegistry.ts` changes.
- No 18I asset changes.
- No 20F PDF library changes.
- Gaming/community handles remain registry-only.
- Private/family/legal/court/evidence/financial material remains excluded.
- Public/private split preserved.

## Desktop QA Result

Passed on local Vite preview at `1440px` width.

- Homepage Connect strip rendered without horizontal overflow.
- Nine compact professional links were visible.
- HTTPS links used new-tab behavior.
- Email link used `mailto:`.
- Registry-only gaming/community handles were not visible.
- Existing 20I sponsorship links remained unchanged.

## 390px Mobile QA Result

Passed on local Vite preview at `390px` width.

- Homepage Connect strip rendered without horizontal overflow.
- All nine selected public links remained visible and readable.
- HTTPS links retained `target="_blank"` and `rel="noopener noreferrer"`.
- Email link retained `mailto:`.
- Registry-only gaming/community handles were not visible.

## Build Result

Passed: `npm run build`.

## Follow-Up Items

- Decide whether Facebook should be added to the visible homepage set later or remain registry-only for the compact Connect surface.
- Decide whether `info@jonoblackburn.com` should also be visible alongside `hi@jb3ai.com` in a future contact refinement.
- Keep registry-only gaming and community handles out of the professional homepage unless a future public channel strategy explicitly approves them.
