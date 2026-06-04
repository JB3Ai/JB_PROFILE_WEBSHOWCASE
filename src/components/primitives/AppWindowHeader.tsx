import React from 'react'

interface AppWindowHeaderProps {
  title: string
  icon?: string
  meta?: string
  onClose?: () => void
  actions?: React.ReactNode
}

export default function AppWindowHeader({ title, icon, meta, onClose, actions }: AppWindowHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 bg-[rgba(9,16,24,0.88)] px-5 py-3">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-danger" />
          <span className="status-dot status-dot-gold" />
          <span className="status-dot status-dot-green" />
        </div>
        <div className="flex items-center gap-3">
          {icon ? <span className="text-base">{icon}</span> : null}
          <div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
            {meta ? <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-dim)]">{meta}</p> : null}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {actions}
        {onClose ? (
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[color:var(--text-secondary)] transition-colors hover:bg-white/10 hover:text-white"
          >
            Close
          </button>
        ) : null}
      </div>
    </div>
  )
}
