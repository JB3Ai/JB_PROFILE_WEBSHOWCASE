import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { FounderPhase } from '../../content/founderManual.content'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface ExecutiveLauncherProps {
  apps: AppRegistryItem[]
  onLaunch: (id: AppId) => void
  mode?: 'panel' | 'overlay'
  onClose?: () => void
  phaseGroups?: FounderPhase[]
}

export default function ExecutiveLauncher({
  apps,
  onLaunch,
  mode = 'panel',
  onClose,
  phaseGroups
}: ExecutiveLauncherProps) {
  const [search, setSearch] = useState('')
  const reduceMotion = useReducedMotion()
  const headingId = useId()
  const descriptionId = useId()
  const searchId = useId()
  const searchRef = useRef<HTMLInputElement | null>(null)
  const appMap = useMemo(() => new Map(apps.map((app) => [app.id, app])), [apps])

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

  const groupedApps = useMemo(() => {
    if (!phaseGroups?.length) return []

    return phaseGroups
      .map((phase) => ({
        ...phase,
        apps: phase.appIds
          .map((appId) => appMap.get(appId))
          .filter((app): app is AppRegistryItem => Boolean(app))
      }))
      .filter((phase) => phase.apps.length > 0)
  }, [appMap, phaseGroups])

  const rootClass = mode === 'overlay' ? 'os-launcher os-launcher-overlay-panel os-desktop-card' : 'os-launcher os-desktop-card'
  const heading = mode === 'overlay' ? 'Open a module' : 'Review surfaces'
  const bodyCopy =
    mode === 'overlay'
      ? 'Search or scan the full module registry, then open the workspace you need.'
      : 'Launch each workspace from here or from the dock. All modules remain placeholder-safe, public-safe, and contained inside this preview shell.'
  const showPhaseGroups = !search.trim() && groupedApps.length > 0
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (mode === 'overlay' && event.key === 'Escape') {
      event.preventDefault()
      onClose?.()
    }
  }

  useEffect(() => {
    if (mode !== 'overlay') return

    const timer = window.setTimeout(() => {
      searchRef.current?.focus()
    }, 40)

    return () => window.clearTimeout(timer)
  }, [mode])

  return (
    <section
      className={rootClass}
      role={mode === 'overlay' ? 'dialog' : undefined}
      aria-modal={mode === 'overlay' ? 'true' : undefined}
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      onKeyDown={handleKeyDown}
    >
      <div className="os-launcher-header">
        <div>
          <div className="eyebrow">Module Launcher</div>
          <h2 id={headingId} className="mt-4 text-heading text-white">{heading}</h2>
        </div>
        <div className="os-launcher-header-side">
          <p id={descriptionId} className="text-body-sm max-w-xl">
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
        <label htmlFor={searchId} className="sr-only">
          Search modules
        </label>
        <input
          id={searchId}
          ref={searchRef}
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search modules"
          placeholder="Search modules"
          className="input-shell os-launcher-search"
        />
        {mode === 'overlay' ? <div className="os-launcher-hint">Press Esc to close</div> : null}
      </div>

      {showPhaseGroups ? (
        <div className="os-launcher-phase-groups">
          {groupedApps.map((phase, phaseIndex) => (
            <motion.section
              key={phase.id}
              className="os-launcher-phase-group"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.34, delay: 0.04 + phaseIndex * 0.03 }}
            >
              <div className="os-launcher-phase-header">
                <div>
                  <div className="os-launcher-phase-label">{phase.label}</div>
                  <h3 className="os-launcher-phase-title">{phase.title}</h3>
                </div>
                <p className="os-launcher-phase-summary">{phase.summary}</p>
              </div>

              <div className="os-launcher-grid">
                {phase.apps.map((app, index) => (
                  <motion.button
                    key={app.id}
                    type="button"
                    onClick={() => onLaunch(app.id)}
                    className="os-launcher-button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.05 + index * 0.02 }}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                    aria-label={`${app.name}. ${app.meta}`}
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
            </motion.section>
          ))}
        </div>
      ) : (
        <div className="os-launcher-grid">
          {filteredApps.map((app, index) => (
            <motion.button
              key={app.id}
              type="button"
              onClick={() => onLaunch(app.id)}
              className="os-launcher-button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.05 + index * 0.03 }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.99 }}
              aria-label={`${app.name}. ${app.meta}`}
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
      )}
    </section>
  )
}
