import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'
import {
  ExecutiveDesktop,
  ExecutiveDock,
  ExecutiveLauncher,
  ExecutiveTopBar,
  ExecutiveWindow,
  SystemStatusPanel
} from '../components/os'
import { appComponents } from '../data/appComponents'
import { appRegistry, isAppId } from '../data/appRegistry'
import type { AppId } from '../types/content.types'

export default function RestrictedOS() {
  const [openApp, setOpenApp] = useState<AppId | string | null>(null)
  const [launcherOpen, setLauncherOpen] = useState(false)
  const currentAppId = openApp && isAppId(openApp) ? openApp : null
  const activeApp = currentAppId ? appRegistry.find((app) => app.id === currentAppId) : undefined
  const ActiveAppComponent = currentAppId ? appComponents[currentAppId] : null

  useEffect(() => {
    if (!launcherOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLauncherOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [launcherOpen])

  const launchModule = (id: AppId) => {
    setOpenApp(id)
    setLauncherOpen(false)
  }

  const desktopView = (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="os-desktop-layout"
    >
      <div className="os-desktop-primary">
        <div className="os-desktop-card os-desktop-card-primary">
          <StatusBadge variant="success">Preview shell ready</StatusBadge>
          <h1 className="mt-6 text-display text-white">Executive Command OS</h1>
          <p className="mt-4 max-w-3xl text-body-lg">
            A controlled founder review environment for proof, project surfaces, investor-safe previews, and structured operating context. Launch a module to enter its dedicated workspace.
          </p>

          <div className="os-desktop-actions">
            <PremiumButton variant="primary" onClick={() => launchModule('founder-brief')}>
              Open Founder Brief
            </PremiumButton>
            <PremiumButton variant="secondary" onClick={() => launchModule('evidence-vault')}>
              Open Evidence Vault
            </PremiumButton>
            <PremiumButton variant="ghost" onClick={() => setLauncherOpen(true)}>
              Open Launcher
            </PremiumButton>
          </div>

          <div className="os-desktop-meta">
            <span>Private executive workstation</span>
            <span>Placeholder-safe data only</span>
            <span>Structured review shell</span>
          </div>
        </div>

        <ExecutiveLauncher apps={appRegistry} onLaunch={launchModule} />
      </div>

      <div className="os-panel-stack">
        <SystemStatusPanel />

        <div className="os-desktop-card os-desktop-card-muted">
          <div className="eyebrow">Safety Note</div>
          <h2 className="mt-4 text-heading-sm text-white">Contained preview environment</h2>
          <p className="mt-4 text-body">
            This environment is a structured preview shell. Sensitive workflows, private files, private operating detail, and real document access remain withheld.
          </p>
        </div>
      </div>
    </motion.section>
  )

  const activeWindow = (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38 }}
      className="os-window-layout"
    >
      <ExecutiveWindow
        title={activeApp?.name ?? 'Unknown Module'}
        icon={activeApp?.icon ?? '·'}
        meta={activeApp?.meta ?? 'Unsupported app ID selected'}
        statusLabel={activeApp ? 'Module active' : 'Fallback view'}
        statusVariant={activeApp ? 'success' : 'warning'}
        onClose={() => setOpenApp(null)}
      >
        {ActiveAppComponent ? (
          <ActiveAppComponent />
        ) : (
          <GlassPanel size="lg" animate={false} tone="muted">
            <div className="eyebrow">Module Unavailable</div>
            <h2 className="mt-4 text-heading text-white">This module could not be opened.</h2>
            <p className="mt-4 max-w-2xl text-body">
              The selected app ID is not registered in the current OS mapping. Return to the desktop and choose another module.
            </p>
            <div className="mt-6">
              <PremiumButton variant="secondary" onClick={() => setOpenApp(null)}>
                Back to Desktop
              </PremiumButton>
            </div>
          </GlassPanel>
        )}
      </ExecutiveWindow>

      <div className="os-panel-stack">
        <SystemStatusPanel activeApp={activeApp} />

        <div className="os-desktop-card os-desktop-card-muted">
          <div className="eyebrow">Window Note</div>
          <p className="mt-4 text-body">
            The dock remains available throughout the session so you can move between modules without leaving the preview shell.
          </p>
        </div>
      </div>
    </motion.section>
  )

  return (
    <ExecutiveDesktop
      topBar={<ExecutiveTopBar activeApp={activeApp} onOpenLauncher={() => setLauncherOpen(true)} />}
      dock={
        <ExecutiveDock
          apps={appRegistry}
          activeAppId={currentAppId}
          onLaunch={launchModule}
          onClear={() => setOpenApp(null)}
        />
      }
    >
      <>
        {openApp ? activeWindow : desktopView}

        <AnimatePresence>
          {launcherOpen ? (
            <motion.div
              className="os-launcher-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                type="button"
                aria-label="Close launcher"
                className="os-launcher-backdrop"
                onClick={() => setLauncherOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="os-launcher-overlay-frame"
              >
                <ExecutiveLauncher
                  apps={appRegistry}
                  onLaunch={launchModule}
                  mode="overlay"
                  onClose={() => setLauncherOpen(false)}
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    </ExecutiveDesktop>
  )
}
