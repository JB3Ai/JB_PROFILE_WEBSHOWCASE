import React from 'react'
import { motion } from 'framer-motion'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface ExecutiveDockProps {
  apps: AppRegistryItem[]
  activeAppId: AppId | null
  onLaunch: (id: AppId) => void
  onClear: () => void
}

export default function ExecutiveDock({ apps, activeAppId, onLaunch, onClear }: ExecutiveDockProps) {
  return (
    <div className="os-dock-wrap">
      <div className="os-dock-shell">
        <div className="os-dock-hint">Module rail. Swipe on mobile for the full launcher.</div>
        <motion.div
          className="os-dock"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          {apps.map((app, index) => {
            const isActive = activeAppId === app.id

            return (
              <motion.button
                key={app.id}
                type="button"
                onClick={() => onLaunch(app.id)}
                className={`os-dock-button ${isActive ? 'os-dock-button-active' : ''}`}
                aria-pressed={isActive}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 0.2 + index * 0.03 }}
              >
                <span className="os-dock-button-icon" aria-hidden="true">
                  {app.icon}
                </span>
                <span className="os-dock-button-label">{app.name}</span>
                <span className="os-dock-button-meta">{app.meta}</span>
                <span className="os-dock-button-indicator" aria-hidden="true" />
              </motion.button>
            )
          })}

          <button type="button" onClick={onClear} className="os-dock-button os-dock-button-utility">
            <span className="os-dock-button-icon" aria-hidden="true">⌂</span>
            <span className="os-dock-button-label">Desktop</span>
            <span className="os-dock-button-meta">Clear active view</span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
