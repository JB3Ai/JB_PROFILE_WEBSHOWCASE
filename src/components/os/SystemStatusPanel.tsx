import React from 'react'
import { StatusBadge } from '../primitives'
import { osManualLayers } from '../../content/founderManual.content'
import type { AppRegistryItem } from '../../types/content.types'

interface SystemStatusPanelProps {
  activeApp?: AppRegistryItem
}

export default function SystemStatusPanel({ activeApp }: SystemStatusPanelProps) {
  return (
    <aside className="os-status-panel os-desktop-card os-desktop-card-muted">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="eyebrow">System Status</div>
          <h2 className="mt-4 text-heading-sm text-white">Manual mode</h2>
        </div>
        <StatusBadge variant="success" size="sm">Contained</StatusBadge>
      </div>

      <div className="os-status-list">
        {osManualLayers.map(([label, value]) => (
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
