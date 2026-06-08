export interface PageMetadata {
  title: string
  description: string
  path: string
  image?: string
  robots?: string
}

export const SITE_NAME = 'Jonathan Blackburn OS'
export const SITE_URL = 'https://jonoblackburn.vercel.app'
export const SITE_THEME_COLOR = '#08121B'
export const DEFAULT_OG_IMAGE = '/assets/images/og-jonathan-blackburn-os.svg'
export const DEFAULT_OG_IMAGE_ALT =
  'Jonathan Blackburn OS social preview with founder-led blueprint messaging and Executive Command OS branding.'

export const pageMetadata = {
  home: {
    title: 'Jonathan Blackburn OS | Living Founder Blueprint and Executive Command OS',
    description:
      'Jonathan Blackburn OS is a cinematic founder platform and private Executive Command OS built around systems, resilience, AI for good, and the GTR³ third-rise story.',
    path: '/',
    image: DEFAULT_OG_IMAGE,
    robots: 'index,follow'
  },
  requestAccess: {
    title: 'Request Access | Jonathan Blackburn OS',
    description:
      'Request manual review access to the right Jonathan Blackburn OS layer for projects, investor discussion, collaboration, or a controlled private preview.',
    path: '/request-access',
    image: DEFAULT_OG_IMAGE,
    robots: 'noindex,nofollow'
  },
  login: {
    title: 'Private OS Preview Gate | Jonathan Blackburn OS',
    description:
      'A public-safe preview gate for the Executive Command OS. This route orients trusted reviewers without implying real account provisioning or private file access.',
    path: '/login',
    image: DEFAULT_OG_IMAGE,
    robots: 'noindex,nofollow'
  },
  restrictedOs: {
    title: 'Executive Command OS Preview | Jonathan Blackburn OS',
    description:
      'A structured private review shell for founder briefings, projects, proof layers, investor-safe previews, and the GTR³ story within Jonathan Blackburn OS.',
    path: '/os',
    image: DEFAULT_OG_IMAGE,
    robots: 'noindex,nofollow'
  }
} satisfies Record<string, PageMetadata>

export function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
