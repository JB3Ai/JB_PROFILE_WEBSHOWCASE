import { buildMailtoUrl, buildRequestAccessRoute } from '../data/contactConfig'
import type { SocialLink } from '../types/content.types'

type ContactRegistryLink = SocialLink & {
  displayCategory: 'Contact' | 'JB3Ai' | 'Jonathan' | 'Registry Only'
  displaySurface: 'Primary Public' | 'Registry Only'
}

const primaryContactLinks: ContactRegistryLink[] = [
  {
    id: 'contact-hi-jb3ai',
    label: 'hi@jb3ai.com',
    group: 'Contact',
    platform: 'Email',
    purpose: 'Primary JB³Ai contact route for public enquiries, sponsorship, and collaboration.',
    url: 'mailto:hi@jb3ai.com',
    visibility: 'Public',
    priority: 1,
    iconName: 'Mail',
    displayCategory: 'Contact',
    displaySurface: 'Primary Public'
  },
  {
    id: 'contact-info-jonoblackburn',
    label: 'info@jonoblackburn.com',
    group: 'Contact',
    platform: 'Email',
    purpose: 'Founder and profile contact route for public-safe enquiries.',
    url: 'mailto:info@jonoblackburn.com',
    visibility: 'Public',
    priority: 2,
    iconName: 'Mail',
    displayCategory: 'Contact',
    displaySurface: 'Primary Public'
  },
  {
    id: 'contact-whatsapp',
    label: 'WhatsApp',
    group: 'Contact',
    platform: 'WhatsApp',
    purpose: 'Direct WhatsApp contact route for public-safe conversation starts.',
    url: 'https://wa.me/27719691848',
    visibility: 'Public',
    priority: 3,
    iconName: 'MessageCircle',
    displayCategory: 'Contact',
    displaySurface: 'Primary Public'
  }
]

const professionalPublicLinks: ContactRegistryLink[] = [
  {
    id: 'linkedin-jonathan',
    label: 'LinkedIn Jonathan',
    group: 'Jonathan',
    platform: 'LinkedIn',
    purpose: 'Professional founder profile for public verification and updates.',
    url: 'https://www.linkedin.com/in/jonathanblackburn0793120688/',
    visibility: 'Public',
    priority: 4,
    iconName: 'Linkedin',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'linkedin-jb3ai',
    label: 'LinkedIn JB³Ai',
    group: 'JB³Ai',
    platform: 'LinkedIn',
    purpose: 'Company-level JB³Ai profile and public channel.',
    url: 'https://www.linkedin.com/company/jb%C2%B3ai/',
    visibility: 'Public',
    priority: 5,
    iconName: 'Linkedin',
    displayCategory: 'JB3Ai',
    displaySurface: 'Primary Public'
  },
  {
    id: 'instagram-jb3ai',
    label: 'Instagram JB³Ai',
    group: 'JB³Ai',
    platform: 'Instagram',
    purpose: 'JB³Ai visual updates and public creative channel.',
    url: 'https://www.instagram.com/jb3a.i',
    visibility: 'Public',
    priority: 6,
    iconName: 'Instagram',
    displayCategory: 'JB3Ai',
    displaySurface: 'Primary Public'
  },
  {
    id: 'instagram-jonathan',
    label: 'Instagram Jonathan',
    group: 'Jonathan',
    platform: 'Instagram',
    purpose: 'Founder visual updates and public story channel.',
    url: 'https://www.instagram.com/jonoblackburn5/',
    visibility: 'Public',
    priority: 7,
    iconName: 'Instagram',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'youtube-jb3ai',
    label: 'YouTube JB³Ai',
    group: 'JB³Ai',
    platform: 'YouTube',
    purpose: 'JB³Ai videos, demos, and public education channel.',
    url: 'https://www.youtube.com/@JB3Ai',
    visibility: 'Public',
    priority: 8,
    iconName: 'Youtube',
    displayCategory: 'JB3Ai',
    displaySurface: 'Primary Public'
  },
  {
    id: 'youtube-jonathan',
    label: 'YouTube Jonathan',
    group: 'Jonathan',
    platform: 'YouTube',
    purpose: 'Founder videos and public media updates.',
    url: 'https://www.youtube.com/@JonoBlackburn',
    visibility: 'Public',
    priority: 9,
    iconName: 'Youtube',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'tiktok-jb3ai',
    label: 'TikTok JB³Ai',
    group: 'JB³Ai',
    platform: 'TikTok',
    purpose: 'Short-form JB³Ai updates and public learning signal.',
    url: 'https://www.tiktok.com/@jb3ai2',
    visibility: 'Public',
    priority: 10,
    iconName: 'Video',
    displayCategory: 'JB3Ai',
    displaySurface: 'Primary Public'
  },
  {
    id: 'tiktok-jonathan',
    label: 'TikTok Jonathan',
    group: 'Jonathan',
    platform: 'TikTok',
    purpose: 'Short-form founder updates and public story signal.',
    url: 'https://www.tiktok.com/@jonoblackburn',
    visibility: 'Public',
    priority: 11,
    iconName: 'Video',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'medium-jonathan',
    label: 'Medium',
    group: 'Jonathan',
    platform: 'Medium',
    purpose: 'Founder writing, essays, and systems-thinking notes.',
    url: 'https://medium.com/@jono_12764',
    visibility: 'Public',
    priority: 12,
    iconName: 'Newspaper',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'facebook-jonathan',
    label: 'Facebook Jonathan',
    group: 'Jonathan',
    platform: 'Facebook',
    purpose: 'Founder public Facebook profile.',
    url: 'https://www.facebook.com/jono.blackburn.5',
    visibility: 'Public',
    priority: 13,
    iconName: 'Facebook',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  },
  {
    id: 'facebook-jb3ai',
    label: 'Facebook JB³Ai',
    group: 'JB³Ai',
    platform: 'Facebook',
    purpose: 'JB³Ai public Facebook profile.',
    url: 'https://www.facebook.com/profile.php?id=61582817213519',
    visibility: 'Public',
    priority: 14,
    iconName: 'Facebook',
    displayCategory: 'JB3Ai',
    displaySurface: 'Primary Public'
  },
  {
    id: 'threads-jonathan',
    label: 'Threads',
    group: 'Jonathan',
    platform: 'Threads',
    purpose: 'Founder public Threads profile.',
    url: 'https://www.threads.com/@jonoblackburn5',
    visibility: 'Public',
    priority: 15,
    iconName: 'MessageSquare',
    displayCategory: 'Jonathan',
    displaySurface: 'Primary Public'
  }
]

export const registryOnlySocialLinks: ContactRegistryLink[] = [
  {
    id: 'reddit-jonathan',
    label: 'Reddit',
    group: 'Registry Only',
    platform: 'Reddit',
    purpose: 'Secondary community handle retained for registry reference only.',
    url: 'https://www.reddit.com/user/jonoelite_jb3ai/',
    visibility: 'Registry Only',
    priority: 101,
    iconName: 'MessageSquare',
    cautionNote: 'Not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'whatsapp-channel-shortlink',
    label: 'WhatsApp Channel',
    group: 'Registry Only',
    platform: 'WhatsApp',
    purpose: 'Secondary WhatsApp channel short link retained for registry reference only.',
    url: 'https://lnkd.in/dPizUzb9',
    visibility: 'Registry Only',
    priority: 102,
    iconName: 'MessageCircle',
    cautionNote: 'Not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'youtube-shortlink',
    label: 'YouTube short link',
    group: 'Registry Only',
    platform: 'YouTube',
    purpose: 'Secondary short link retained for registry reference only.',
    url: 'https://lnkd.in/dF8MKmhT',
    visibility: 'Registry Only',
    priority: 103,
    iconName: 'Youtube',
    cautionNote: 'Not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'discord-jonathan',
    label: 'Discord',
    group: 'Registry Only',
    platform: 'Discord',
    purpose: 'Community handle retained for registry reference only.',
    url: 'jonoelite2491',
    visibility: 'Registry Only',
    priority: 104,
    iconName: 'MessageCircle',
    cautionNote: 'Handle only; not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'telegram-jonathan',
    label: 'Telegram',
    group: 'Registry Only',
    platform: 'Telegram',
    purpose: 'Secondary messaging handle retained for registry reference only.',
    url: '@jonoelitesa',
    visibility: 'Registry Only',
    priority: 105,
    iconName: 'Send',
    cautionNote: 'Handle only; not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'x-jonathan',
    label: 'X',
    group: 'Registry Only',
    platform: 'X',
    purpose: 'Secondary social handle retained for registry reference only.',
    url: '@JonoBlackburn7',
    visibility: 'Registry Only',
    priority: 106,
    iconName: 'X',
    cautionNote: 'Handle only; not displayed in the primary professional homepage surface.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'playstation-jonathan',
    label: 'PlayStation',
    group: 'Registry Only',
    platform: 'PlayStation',
    purpose: 'Gaming handle retained for private registry reference only.',
    url: 'JonoElite7',
    visibility: 'Registry Only',
    priority: 107,
    iconName: 'Gamepad2',
    cautionNote: 'Gaming handle; not displayed on the professional homepage.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'xbox-jonathan',
    label: 'Xbox',
    group: 'Registry Only',
    platform: 'Xbox',
    purpose: 'Gaming handle retained for private registry reference only.',
    url: 'JonoElite7#9271',
    visibility: 'Registry Only',
    priority: 108,
    iconName: 'Gamepad2',
    cautionNote: 'Gaming handle; not displayed on the professional homepage.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  },
  {
    id: 'roblox-jonathan',
    label: 'Roblox',
    group: 'Registry Only',
    platform: 'Roblox',
    purpose: 'Gaming handle retained for private registry reference only.',
    url: 'Jonoelite74',
    visibility: 'Registry Only',
    priority: 109,
    iconName: 'Gamepad2',
    cautionNote: 'Gaming handle; not displayed on the professional homepage.',
    displayCategory: 'Registry Only',
    displaySurface: 'Registry Only'
  }
]

export const publicContactSocialRegistry: ContactRegistryLink[] = [
  ...primaryContactLinks,
  ...professionalPublicLinks,
  ...registryOnlySocialLinks
]

export const publicConnectLinks: SocialLink[] = [
  ...primaryContactLinks,
  ...professionalPublicLinks
]

export const homepageContactLinks: SocialLink[] = publicConnectLinks.filter((link) =>
  [
    'contact-hi-jb3ai',
    'contact-whatsapp',
    'linkedin-jonathan',
    'linkedin-jb3ai',
    'instagram-jb3ai',
    'youtube-jb3ai',
    'tiktok-jb3ai',
    'medium-jonathan',
    'threads-jonathan'
  ].includes(link.id)
)

export const socialLinks: SocialLink[] = [
  {
    id: 'book-call',
    label: 'Book a Call',
    group: 'Primary Contact',
    platform: 'Scheduler',
    purpose: 'Request a discovery or executive call with Jonathan Blackburn.',
    url: buildRequestAccessRoute({
      track: 'book-call',
      reason: 'Conversation or collaboration',
      next: 'Book a conversation'
    }),
    visibility: 'Public',
    priority: 1,
    iconName: 'PhoneCall',
    cautionNote: 'Requests are reviewed manually before any scheduling route is confirmed.'
  },
  {
    id: 'email-jonathan',
    label: 'Email Jonathan',
    group: 'Primary Contact',
    platform: 'Email',
    purpose: 'Send a direct email to discuss projects, proof, or collaboration.',
    url: buildMailtoUrl({
      subject: 'Jonathan Blackburn OS enquiry',
      bodyLines: [
        'Name:',
        'Organisation / context:',
        'What would you like to discuss?'
      ]
    }),
    visibility: 'Public',
    priority: 2,
    iconName: 'Mail',
    cautionNote: 'Direct email opens your local mail client.'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    group: 'Personal Profiles',
    platform: 'LinkedIn',
    purpose: 'Professional profile and verification for founder activities.',
    url: '#',
    visibility: 'Public',
    priority: 3,
    iconName: 'Linkedin',
    cautionNote: 'Placeholder LinkedIn URL.'
  },
  {
    id: 'github',
    label: 'GitHub',
    group: 'Personal Profiles',
    platform: 'GitHub',
    purpose: 'Code samples, projects, and technology proof points.',
    url: '#',
    visibility: 'Public',
    priority: 4,
    iconName: 'Github',
    cautionNote: 'Placeholder GitHub profile URL.'
  },
  {
    id: 'jb3ai-website',
    label: 'JB³Ai Website',
    group: 'JB³Ai Channels',
    platform: 'Website',
    purpose: 'Company-level proof, technology notes, and channel overview.',
    url: '#',
    visibility: 'Public',
    priority: 5,
    iconName: 'Globe',
    cautionNote: 'Placeholder company website URL.'
  },
  {
    id: 'youtube',
    label: 'YouTube',
    group: 'Media Channels',
    platform: 'YouTube',
    purpose: 'Media content, founder briefings, and product video previews.',
    url: '#',
    visibility: 'Public',
    priority: 6,
    iconName: 'Youtube',
    cautionNote: 'Placeholder YouTube channel link.'
  },
  {
    id: 'whatsapp-channel',
    label: 'WhatsApp Channel',
    group: 'JB³Ai Channels',
    platform: 'WhatsApp',
    purpose: 'Channel updates and community contact in a private preview layer.',
    url: '#',
    visibility: 'Preview',
    priority: 7,
    iconName: 'MessageCircle',
    cautionNote: 'Placeholder WhatsApp channel invite.'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    group: 'Media Channels',
    platform: 'Instagram',
    purpose: 'Visual updates, story highlights, and creative proof content.',
    url: '#',
    visibility: 'Preview',
    priority: 8,
    iconName: 'Instagram',
    cautionNote: 'Placeholder Instagram profile link.'
  },
  {
    id: 'facebook',
    label: 'Facebook',
    group: 'Media Channels',
    platform: 'Facebook',
    purpose: 'Community updates and event proof in a broad channel.',
    url: '#',
    visibility: 'Preview',
    priority: 9,
    iconName: 'Facebook',
    cautionNote: 'Placeholder Facebook page link.'
  },
  {
    id: 'x',
    label: 'X',
    group: 'Media Channels',
    platform: 'X',
    purpose: 'Short updates, commentary, and public channel signals.',
    url: '#',
    visibility: 'Preview',
    priority: 10,
    iconName: 'X',
    cautionNote: 'Placeholder X (Twitter) profile link.'
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    group: 'Media Channels',
    platform: 'TikTok',
    purpose: 'Short-form story content and creative signal proof.',
    url: '#',
    visibility: 'Preview',
    priority: 11,
    iconName: 'Video',
    cautionNote: 'Placeholder TikTok profile link.'
  },
  {
    id: 'substack',
    label: 'Substack',
    group: 'Media Channels',
    platform: 'Substack',
    purpose: 'Writing and long-form updates for the OS story.',
    url: '#',
    visibility: 'Preview',
    priority: 12,
    iconName: 'BookOpen',
    cautionNote: 'Placeholder Substack link.'
  },
  {
    id: 'medium',
    label: 'Medium',
    group: 'Media Channels',
    platform: 'Medium',
    purpose: 'Essays, narrative proof, and systems thinking writing.',
    url: '#',
    visibility: 'Preview',
    priority: 13,
    iconName: 'Newspaper',
    cautionNote: 'Placeholder Medium profile link.'
  },
  {
    id: 'reddit',
    label: 'Reddit',
    group: 'Media Channels',
    platform: 'Reddit',
    purpose: 'Community discussion and trusted proof channels.',
    url: '#',
    visibility: 'Preview',
    priority: 14,
    iconName: 'MessageSquare',
    cautionNote: 'Placeholder Reddit community link.'
  },
  {
    id: 'imed-proof',
    label: 'Historical iMED Proof',
    group: 'Historical Proof',
    platform: 'Archive',
    purpose: 'Historic proof and reference for the iMED recovery layer.',
    url: '#',
    visibility: 'Preview',
    priority: 15,
    iconName: 'ShieldCheck',
    cautionNote: 'Placeholder historical proof record.'
  }
]
