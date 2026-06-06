import React from 'react'
import AssetThumbnail from '../media/AssetThumbnail'

interface OsPreviewCardProps {
  title: string
  summary: string
  eyebrow?: string
  mediaSrc?: string | null
  fallbackMediaSrc?: string
  mediaAlt?: string
  mediaClassName?: string
  badges?: React.ReactNode
  meta?: React.ReactNode
  note?: React.ReactNode
  actions?: React.ReactNode
  tone?: 'default' | 'feature' | 'muted'
  className?: string
}

export default function OsPreviewCard({
  title,
  summary,
  eyebrow,
  mediaSrc,
  fallbackMediaSrc,
  mediaAlt,
  mediaClassName = 'h-52',
  badges,
  meta,
  note,
  actions,
  tone = 'default',
  className = ''
}: OsPreviewCardProps) {
  const toneClass = {
    default: 'os-preview-card-default',
    feature: 'os-preview-card-featured',
    muted: 'os-preview-card-muted'
  }[tone]

  return (
    <article className={`os-preview-card ${toneClass} ${className}`.trim()}>
      {fallbackMediaSrc ? (
        <AssetThumbnail
          src={mediaSrc}
          fallbackSrc={fallbackMediaSrc}
          alt={mediaAlt ?? `${title} preview`}
          className={`os-preview-media ${mediaClassName}`.trim()}
          overlay={badges ? <div className="os-preview-badges">{badges}</div> : undefined}
        />
      ) : null}

      <div className="os-preview-content">
        <header className="os-preview-header">
          <div className="min-w-0">
            {eyebrow ? <p className="os-preview-kicker">{eyebrow}</p> : null}
            <h3 className="os-preview-title">{title}</h3>
          </div>
          {!fallbackMediaSrc && badges ? <div className="os-preview-badges">{badges}</div> : null}
        </header>

        {meta ? <div className="os-preview-meta">{meta}</div> : null}
        <p className="os-preview-summary">{summary}</p>
        {note ? <div className="os-preview-note">{note}</div> : null}
        {actions ? <div className="os-preview-actions">{actions}</div> : null}
      </div>
    </article>
  )
}
