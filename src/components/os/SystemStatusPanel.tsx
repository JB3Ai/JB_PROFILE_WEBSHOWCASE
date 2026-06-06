import React from 'react'
import { StatusBadge } from '../primitives'
import type { AppRegistryItem } from '../../types/content.types'

interface SystemStatusPanelProps {
  activeApp?: AppRegistryItem
}

const statusItems = [
  ['Public-safe mode', 'Enabled'],
  ['Live documents', 'Disabled'],
  ['Investor placeholders', 'Locked'],
  ['Media assets', 'Preview only'],
  ['Last build', 'Static v1']
] as const

export default function SystemStatusPanel({ activeApp }: SystemStatusPanelProps) {
  return (
    <aside className="os-status-panel os-desktop-card os-desktop-card-muted">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="eyebrow">System Status</div>
          <h2 className="mt-4 text-heading-sm text-white">Preview safeguards</h2>
        </div>
        <StatusBadge variant="success" size="sm">Contained</StatusBadge>
      </div>

      <div className="os-status-list">
        {statusItems.map(([label, value]) => (
          <div key={label} className="os-status-item">
            <span className="os-status-label">{label}</span>
            <span className="os-status-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="os-status-current">
        <div className="os-status-label">Current focus</div>
        <div className="os-status-current-title">{activeApp?.name ?? 'Desktop overview'}</div>
        <p className="text-body-sm mt-2">{activeApp?.meta ?? 'Launcher grid, status panel, and preview safeguards are available from the desktop view.'}</p>
      </div>
    </aside>
  )
}
