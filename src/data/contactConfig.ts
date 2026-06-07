export const CONTACT_EMAIL = 'info@jonoblackburn.com'

type MailtoOptions = {
  subject: string
  bodyLines?: Array<string | null | undefined>
}

type RequestAccessRouteOptions = {
  track?: string
  reason?: string
  next?: string
}

export function buildMailtoUrl({ subject, bodyLines = [] }: MailtoOptions) {
  const body = bodyLines.filter(Boolean).join('\n')
  const params = new URLSearchParams({ subject })

  if (body) {
    params.set('body', body)
  }

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export function openMailtoDraft(options: MailtoOptions) {
  if (typeof window === 'undefined') {
    return
  }

  window.location.href = buildMailtoUrl(options)
}

export function buildRequestAccessRoute({ track, reason, next }: RequestAccessRouteOptions = {}) {
  const params = new URLSearchParams()

  if (track) {
    params.set('track', track)
  }

  if (reason) {
    params.set('reason', reason)
  }

  if (next) {
    params.set('next', next)
  }

  const query = params.toString()
  return query ? `/request-access?${query}` : '/request-access'
}
