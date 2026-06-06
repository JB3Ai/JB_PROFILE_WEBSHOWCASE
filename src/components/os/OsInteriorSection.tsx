import React from 'react'

interface OsInteriorSectionProps {
  eyebrow?: string
  title: string
  intro?: string
  side?: React.ReactNode
  children?: React.ReactNode
  className?: string
  bodyClassName?: string
}

export default function OsInteriorSection({
  eyebrow,
  title,
  intro,
  side,
  children,
  className = '',
  bodyClassName = ''
}: OsInteriorSectionProps) {
  return (
    <section className={`os-interior-section ${className}`.trim()}>
      <div className="os-interior-header">
        <div className="os-interior-header-copy">
          {eyebrow ? <p className="os-interior-kicker">{eyebrow}</p> : null}
          <h2 className="os-interior-title">{title}</h2>
          {intro ? <p className="os-interior-intro">{intro}</p> : null}
        </div>
        {side ? <div className="os-interior-side">{side}</div> : null}
      </div>

      {children ? <div className={`os-interior-body ${bodyClassName}`.trim()}>{children}</div> : null}
    </section>
  )
}
