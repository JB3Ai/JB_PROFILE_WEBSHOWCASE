export const assetRegistry = {
  logoPrimary: '/assets/logos/logo-primary.svg',
  logoMark: '/assets/logos/logo-mark.svg',
  logoDark: '/assets/logos/logo-dark.svg',
  founderProfileSide: '/assets/images/founder-profile-side.webp',
  founderEditorialBw: '/assets/images/founder-editorial-bw.webp',
  imedLabPrecision: '/assets/images/imed-lab-precision.webp',
  gtr3LoadingHero: '/assets/images/gtr3-loading-hero.webp',
  eliteTechnologiesArchive: '/assets/images/elite-technologies-archive.webp',
  isikoloAiCoverEducationVisual: '/assets/images/isikolo-ai-cover-education-visual.webp',
  founderHeroPlaceholder: '/assets/placeholders/founder-hero-placeholder.svg',
  founderPortraitPlaceholder: '/assets/placeholders/founder-placeholder.svg',
  gtr3HeroPlaceholder: '/assets/placeholders/gtr3-hero-placeholder.svg',
  projectPlaceholder: '/assets/placeholders/project-placeholder.svg',
  videoPlaceholder: '/assets/placeholders/video-placeholder.svg',
  evidencePlaceholder: '/assets/placeholders/evidence-placeholder.svg',
  investorPlaceholder: '/assets/placeholders/investor-placeholder.svg',
  gtr3Placeholder: '/assets/placeholders/gtr3-placeholder.svg',
  dailyShowPlaceholder: '/assets/placeholders/daily-show-placeholder.svg',
  pdfPlaceholder: '/assets/placeholders/pdf-placeholder.svg'
} as const

export function resolveAssetPath(assetPath: string | null | undefined, fallbackPath: string) {
  if (!assetPath) {
    return fallbackPath
  }

  const trimmedPath = assetPath.trim()

  return trimmedPath.length > 0 ? trimmedPath : fallbackPath
}
