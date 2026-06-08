import { useEffect } from 'react'
import type { PageMetadata } from '../data/siteMetadata'
import {
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  SITE_THEME_COLOR,
  SITE_URL,
  toAbsoluteUrl
} from '../data/siteMetadata'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  if (typeof document === 'undefined') return

  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  if (typeof document === 'undefined') return

  let element = document.head.querySelector<HTMLLinkElement>(selector)
  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export function usePageMetadata(metadata: PageMetadata) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${metadata.path}`
    const imageUrl = toAbsoluteUrl(metadata.image ?? '/assets/images/og-jonathan-blackburn-os.svg')

    document.title = metadata.title

    upsertMeta('meta[name="description"]', { name: 'description', content: metadata.description })
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: SITE_THEME_COLOR })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: metadata.robots ?? 'index,follow'
    })
    upsertMeta('meta[name="apple-mobile-web-app-title"]', {
      name: 'apple-mobile-web-app-title',
      content: SITE_NAME
    })

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: metadata.description
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: DEFAULT_OG_IMAGE_ALT
    })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: metadata.description
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: DEFAULT_OG_IMAGE_ALT
    })

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })
  }, [metadata])
}
