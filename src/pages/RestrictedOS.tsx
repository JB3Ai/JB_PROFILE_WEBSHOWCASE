import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AppWindowHeader, GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'
import { appRegistry } from '../data/appRegistry'
import ProjectShowcaseApp from '../os-apps/ProjectShowcaseApp'
import VideoVaultApp from '../os-apps/VideoVaultApp'
import EvidenceVaultApp from '../os-apps/EvidenceVaultApp'
import FounderBriefApp from '../os-apps/FounderBriefApp'
import DailyShowApp from '../os-apps/DailyShowApp'
import PublicFeedApp from '../os-apps/PublicFeedApp'
import TimelineApp from '../os-apps/TimelineApp'
import GTR3App from '../os-apps/GTR3App'
import InvestorRoomApp from '../os-apps/InvestorRoomApp'
import ConnectApp from '../os-apps/ConnectApp'

function TopBar({ currentApp }: { currentApp: string | null }) {
  return (
    <div className="os-topbar">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="status-dot status-dot-cyan" />
          <span className="status-dot status-dot-green" />
          <span className="status-dot status-dot-gold" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Tactical Intelligence OS</div>
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

function Dock({ onLaunch, onClose }: { onLaunch: (id: string) => void; onClose: () => void }) {
  return (
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
      <button onClick={onClose} className="os-dock-button min-w-[92px]">
        <span className="text-sm text-[color:var(--accent-gold)]">×</span>
        <span className="font-medium text-white">Clear</span>
      </button>
    </motion.div>
  )
}

function renderApp(openApp: string) {
  switch (openApp) {
    case 'founder-brief':
      return <FounderBriefApp />
    case 'project-showcase':
      return <ProjectShowcaseApp />
    case 'video-vault':
      return <VideoVaultApp />
    case 'jb3-daily':
      return <DailyShowApp />
    case 'public-feed':
      return <PublicFeedApp />
    case 'evidence-vault':
      return <EvidenceVaultApp />
    case 'timeline':
      return <TimelineApp />
    case 'gtr3':
      return <GTR3App />
    case 'investor-room':
      return <InvestorRoomApp />
    case 'connect':
      return <ConnectApp />
    default:
      return null
  }
}

export default function RestrictedOS() {
  const [openApp, setOpenApp] = useState<string | null>(null)
  const activeApp = appRegistry.find((app) => app.id === openApp)

  return (
    <div className="os-shell">
      <TopBar currentApp={openApp} />
      <main className="container-shell-wide relative z-10 px-6 py-10">
        {!openApp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <GlassPanel size="lg" animate={false} className="section-frame">
              <StatusBadge variant="primary">Desktop Ready</StatusBadge>
              <h3 className="mt-6 text-display text-white">Tactical Intelligence OS</h3>
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

        {openApp && activeApp && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="os-window"
          >
            <AppWindowHeader
              title={activeApp.name}
              icon={activeApp.icon}
              meta={activeApp.meta}
              onClose={() => setOpenApp(null)}
              actions={<StatusBadge variant="success" size="sm">Module Active</StatusBadge>}
            />
            <div className="os-window-body">
              {renderApp(openApp)}
            </div>
          </motion.div>
        )}
      </main>
      <Dock onLaunch={(id) => setOpenApp(id)} onClose={() => setOpenApp(null)} />
    </div>
  )
}
