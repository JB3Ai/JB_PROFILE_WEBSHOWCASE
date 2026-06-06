import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { founderPhaseSystem, osManualLayers } from '../../content/founderManual.content'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface OsPhaseSystemProps {
  apps: AppRegistryItem[]
  onLaunch: (id: AppId) => void
}

export default function OsPhaseSystem({ apps, onLaunch }: OsPhaseSystemProps) {
  const appMap = useMemo(() => new Map(apps.map((app) => [app.id, app])), [apps])

  return (
    <section className="os-phase-system os-desktop-card os-desktop-card-muted">
      <div className="os-phase-system-header">
        <div>
          <div className="eyebrow">Founder Manual</div>
          <h2 className="mt-4 text-heading text-white">Phase system</h2>
        </div>
        <p className="text-body-sm max-w-xl">
          The desktop shell stays simple at first glance, but the deeper review layer follows a
          four-phase founder blueprint.
        </p>
      </div>

      <div className="os-manual-layer-strip">
        {osManualLayers.map(([label, value]) => (
          <div key={label} className="os-manual-layer-item">
            <span className="os-manual-layer-label">{label}</span>
            <span className="os-manual-layer-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="os-phase-grid">
        {founderPhaseSystem.map((phase, index) => (
          <motion.article
            key={phase.id}
            className="os-phase-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
          >
            <div className="os-phase-card-label">{phase.label}</div>
            <h3 className="os-phase-card-title">{phase.title}</h3>
            <p className="os-phase-card-summary">{phase.summary}</p>

            <div className="os-phase-card-actions">
              {phase.appIds.map((appId) => {
                const app = appMap.get(appId)
                if (!app) return null

                return (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => onLaunch(app.id)}
                    className="os-phase-chip"
                  >
                    <span aria-hidden="true">{app.icon}</span>
                    <span>{app.name}</span>
                  </button>
                )
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
