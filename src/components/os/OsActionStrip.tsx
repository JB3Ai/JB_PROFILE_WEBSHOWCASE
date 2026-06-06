import React from 'react'

interface OsActionStripProps {
  title?: string
  note?: string
  actions?: React.ReactNode
  className?: string
}

export default function OsActionStrip({
  title,
  note,
  actions,
  className = ''
}: OsActionStripProps) {
  return (
    <div className={`os-action-strip ${className}`.trim()}>
      <div className="os-action-strip-copy">
        {title ? <div className="os-action-strip-title">{title}</div> : null}
        {note ? <p className="os-action-strip-note">{note}</p> : null}
      </div>
      {actions ? <div className="os-action-strip-actions">{actions}</div> : null}
    </div>
  )
}
