import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface ExecutiveLauncherProps {
  apps: AppRegistryItem[]
  onLaunch: (id: AppId) => void
  mode?: 'panel' | 'overlay'
  onClose?: () => void
}

export default function ExecutiveLauncher({
  apps,
  onLaunch,
  mode = 'panel',
  onClose
}: ExecutiveLauncherProps) {
  const [search, setSearch] = useState('')

  const filteredApps = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return apps

    return apps.filter((app) => {
      return (
        app.name.toLowerCase().includes(term) ||
        app.meta.toLowerCase().includes(term)
      )
    })
  }, [apps, search])

  const rootClass = mode === 'overlay' ? 'os-launcher os-launcher-overlay-panel os-desktop-card' : 'os-launcher os-desktop-card'
  const heading = mode === 'overlay' ? 'Open a module' : 'Review surfaces'
  const bodyCopy =
    mode === 'overlay'
      ? 'Search or scan the full module registry, then open the workspace you need.'
      : 'Launch each workspace from here or from the dock. All modules remain placeholder-safe, public-safe, and contained inside this preview shell.'

  return (
    <section className={rootClass}>
      <div className="os-launcher-header">
        <div>
          <div className="eyebrow">Module Launcher</div>
          <h2 className="mt-4 text-heading text-white">{heading}</h2>
        </div>
        <div className="os-launcher-header-side">
          <p className="text-body-sm max-w-xl">
            {bodyCopy}
          </p>
          {mode === 'overlay' && onClose ? (
            <button type="button" onClick={onClose} className="os-launcher-close">
              Close
            </button>
          ) : null}
        </div>
      </div>

      <div className="os-launcher-toolbar">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search modules"
          className="input-shell os-launcher-search"
        />
        {mode === 'overlay' ? <div className="os-launcher-hint">Press Esc to close</div> : null}
      </div>

      <div className="os-launcher-grid">
        {filteredApps.map((app, index) => (
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

        {filteredApps.length === 0 ? (
          <div className="os-launcher-empty">
            No modules match that search yet. Try a title or a meta keyword.
          </div>
        ) : null}
      </div>
    </section>
  )
}
