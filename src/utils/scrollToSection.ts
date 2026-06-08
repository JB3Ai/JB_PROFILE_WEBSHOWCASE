export type ScrollToSectionOptions = {
  fallback?: () => void
  offset?: number
}

export function scrollToSection(sectionId: string, options: ScrollToSectionOptions = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    options.fallback?.()
    return false
  }

  const target = document.getElementById(sectionId)

  if (!target) {
    options.fallback?.()
    return false
  }

  const offset = options.offset ?? 112
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: reduceMotion ? 'auto' : 'smooth'
  })

  return true
}
