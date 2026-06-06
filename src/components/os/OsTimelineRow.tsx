import React from 'react'
import { StatusBadge } from '../primitives'

interface OsTimelineRowProps {
  period: string
  title: string
  summary: string
  category?: string
  visibility?: string
  tags?: string[]
}

export default function OsTimelineRow({
  period,
  title,
  summary,
  category,
  visibility,
  tags = []
}: OsTimelineRowProps) {
  return (
    <article className="os-timeline-row">
      <div className="os-timeline-period">{period}</div>
      <div className="os-timeline-content">
        <div className="os-timeline-header">
          <div>
            <h3 className="os-timeline-title">{title}</h3>
            <p className="os-timeline-summary">{summary}</p>
          </div>
          <div className="os-timeline-badges">
            {category ? <StatusBadge variant="neutral" size="sm">{category}</StatusBadge> : null}
            {visibility ? <StatusBadge variant="primary" size="sm">{visibility}</StatusBadge> : null}
          </div>
        </div>
        {tags.length > 0 ? (
          <div className="os-timeline-tags">
            {tags.map((tag) => (
              <StatusBadge key={tag} variant="neutral" size="sm">
                {tag}
              </StatusBadge>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
