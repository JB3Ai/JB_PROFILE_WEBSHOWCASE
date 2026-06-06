import React from 'react'
import { motion } from 'framer-motion'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface ExecutiveLauncherProps {
  apps: AppRegistryItem[]
  onLaunch: (id: AppId) => void
}

export default function ExecutiveLauncher({ apps, onLaunch }: ExecutiveLauncherProps) {
  return (
    <section className="os-launcher os-desktop-card">
      <div className="os-launcher-header">
        <div>
          <div className="eyebrow">Module Launcher</div>
          <h2 className="mt-4 text-heading text-white">Review surfaces</h2>
        </div>
        <p className="text-body-sm max-w-xl">
          Launch each workspace from here or from the dock. All modules remain placeholder-safe, public-safe, and contained inside this preview shell.
        </p>
      </div>

      <div className="os-launcher-grid">
        {apps.map((app, index) => (
          <motion.button
            key={app.id}
            type="button"
            onClick={() => onLaunch(app.id)}
            className="os-launcher-button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 + index * 0.03 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="os-launcher-icon" aria-hidden="true">
              {app.icon}
            </div>
            <div>
              <div className="os-launcher-name">{app.name}</div>
              <div className="os-launcher-meta">{app.meta}</div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
