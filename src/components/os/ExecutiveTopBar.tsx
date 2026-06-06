import React, { useMemo } from 'react'
import { StatusBadge } from '../primitives'
import type { AppRegistryItem } from '../../types/content.types'

interface ExecutiveTopBarProps {
  activeApp?: AppRegistryItem
}

export default function ExecutiveTopBar({ activeApp }: ExecutiveTopBarProps) {
  const todayLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(new Date()),
    []
  )

  const activeTitle = activeApp?.name ?? 'Desktop Shell'
  const activeMeta = activeApp?.meta ?? 'Module launcher ready'

  return (
    <header className="os-topbar">
      <div className="os-topbar-shell">
        <div className="os-topbar-brand">
          <div className="os-topbar-brandmark" aria-hidden="true">
            <span className="status-dot status-dot-cyan" />
            <span className="status-dot status-dot-green" />
            <span className="status-dot status-dot-gold" />
          </div>
          <div>
            <div className="os-topbar-title">Executive Command OS</div>
            <div className="os-topbar-meta">Controlled founder review environment</div>
          </div>
        </div>

        <div className="os-topbar-center">
          <div className="os-topbar-active-label">Active View</div>
          <div className="os-topbar-active-title">{activeTitle}</div>
          <div className="os-topbar-active-meta">{activeMeta}</div>
        </div>

        <div className="os-topbar-status">
          <StatusBadge variant="success" size="sm">Public-safe mode</StatusBadge>
          <StatusBadge variant="neutral" size="sm">Static v1</StatusBadge>
          <div className="os-topbar-date">{todayLabel}</div>
        </div>
      </div>
    </header>
  )
}
