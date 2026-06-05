import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AppWindowHeader, GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'
import { appComponents } from '../data/appComponents'
import { appRegistry, isAppId } from '../data/appRegistry'
import type { AppId } from '../types/content.types'

function TopBar({ currentApp }: { currentApp: AppId | null }) {
  return (
    <div className="os-topbar">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-cyan" />
          <span className="status-dot status-dot-green" />
          <span className="status-dot status-dot-gold" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Executive Intelligence OS</div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--text-dim)]">Controlled founder review environment</div>
        </div>
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <StatusBadge variant="success" size="sm">Secure Preview</StatusBadge>
        {currentApp ? <StatusBadge variant="neutral" size="sm">{appRegistry.find((app) => app.id === currentApp)?.name}</StatusBadge> : null}
      </div>
    </div>
  )
}

function Dock({ onLaunch, onClose }: { onLaunch: (id: AppId) => void; onClose: () => void }) {
  return (
    <div className="os-dock-wrap">
      <motion.div
        className="os-dock"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {appRegistry.map((a, idx) => (
          <motion.button
            key={a.id}
            onClick={() => onLaunch(a.id)}
            className="os-dock-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.05 }}
          >
            <span className="text-sm text-[color:var(--accent-cyan)]">{a.icon}</span>
            <span className="font-medium text-white">{a.name}</span>
          </motion.button>
        ))}
        <button onClick={onClose} className="os-dock-button os-dock-button-clear">
          <span className="text-sm text-[color:var(--accent-gold)]">×</span>
          <span className="font-medium text-white">Clear</span>
        </button>
      </motion.div>
    </div>
  )
}

export default function RestrictedOS() {
  const [openApp, setOpenApp] = useState<AppId | string | null>(null)
  const currentAppId = openApp && isAppId(openApp) ? openApp : null
  const activeApp = currentAppId ? appRegistry.find((app) => app.id === currentAppId) : undefined
  const ActiveAppComponent = currentAppId ? appComponents[currentAppId] : null

  return (
    <div className="os-shell">
      <TopBar currentApp={currentAppId} />
      <main className="container-shell-wide os-main">
        {!openApp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <GlassPanel size="lg" animate={false} className="section-frame">
              <StatusBadge variant="primary">Desktop Ready</StatusBadge>
              <h3 className="mt-6 text-display text-white">Executive Intelligence OS</h3>
              <p className="mt-4 max-w-2xl text-body-lg">
                A controlled operating shell for founder proof, strategic surface areas, and investor-safe previews. Select any app from the dock to enter its working view.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PremiumButton variant="primary" onClick={() => setOpenApp('founder-brief')}>Open Founder Brief</PremiumButton>
                <PremiumButton variant="secondary" onClick={() => setOpenApp('project-showcase')}>Review Projects</PremiumButton>
              </div>
            </GlassPanel>

            <div className="grid gap-4">
              <GlassPanel size="md" animate={false}>
                <p className="eyebrow">Quick Access</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {appRegistry.slice(0, 6).map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setOpenApp(app.id)}
                      className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-4 text-left transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                    >
                      <div className="text-sm text-[color:var(--accent-cyan)]">{app.icon}</div>
                      <div className="mt-2 text-sm font-semibold text-white">{app.name}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--text-dim)]">{app.meta}</div>
                    </button>
                  ))}
                </div>
              </GlassPanel>
              <GlassPanel size="md" animate={false} tone="muted">
                <p className="eyebrow">Safety Constraints</p>
                <p className="mt-4 text-body-sm">No backend, no real auth, no live documents, no live media, and no sensitive content exposure in this milestone.</p>
              </GlassPanel>
            </div>
          </motion.div>
        )}

        {openApp && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="os-window"
          >
            <AppWindowHeader
              title={activeApp?.name ?? 'Unknown Module'}
              icon={activeApp?.icon ?? '·'}
              meta={activeApp?.meta ?? 'Unsupported app ID selected'}
              onClose={() => setOpenApp(null)}
              actions={
                <StatusBadge variant={activeApp ? 'success' : 'warning'} size="sm">
                  {activeApp ? 'Module Active' : 'Fallback View'}
                </StatusBadge>
              }
            />
            <div className="os-window-body">
              {ActiveAppComponent ? (
                <ActiveAppComponent />
              ) : (
                <GlassPanel size="lg" animate={false} tone="muted">
                  <div className="eyebrow">Module Unavailable</div>
                  <h3 className="mt-3 text-heading text-white">This app could not be opened.</h3>
                  <p className="mt-4 max-w-2xl text-body">
                    The selected app ID is not registered in the current OS mapping. Return to the desktop and choose another module.
                  </p>
                  <div className="mt-6">
                    <PremiumButton variant="secondary" onClick={() => setOpenApp(null)}>Back to Desktop</PremiumButton>
                  </div>
                </GlassPanel>
              )}
            </div>
          </motion.div>
        )}
      </main>
      <Dock onLaunch={(id) => setOpenApp(id)} onClose={() => setOpenApp(null)} />
    </div>
  )
}
