import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPanel, AppWindowHeader } from '../components/primitives'
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

function TopBar() {
  return (
    <div className="h-12 bg-gradient-to-r from-gray-900/80 to-black/80 border-b border-white/10 flex items-center px-6 text-gray-200 backdrop-blur-sm">
      <span className="text-sm font-semibold text-cyan-300">⚙️</span>
      <span className="ml-3 text-sm font-medium">Tactical Intelligence OS</span>
    </div>
  )
}

function Dock({ onLaunch, onClose }: { onLaunch: (id: string) => void; onClose: () => void }) {
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-gradient-to-br from-black/60 to-white/5 border border-white/20 px-4 py-3 rounded-lg backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {appRegistry.map((a, idx) => (
        <motion.button
          key={a.id}
          onClick={() => onLaunch(a.id)}
          className="text-xs text-white px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + idx * 0.05 }}
        >
          {a.name}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default function RestrictedOS() {
  const [openApp, setOpenApp] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <TopBar />
      <main className="p-8">
        {!openApp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <GlassPanel size="lg" animate={false}>
              <h3 className="text-2xl font-semibold text-white">Welcome to Tactical Intelligence OS</h3>
              <p className="text-gray-300 mt-3">Select an app from the dock to begin. Each module provides specialized access to different aspects of the Jonathan Blackburn ecosystem.</p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                {appRegistry.slice(0, 6).map((app) => (
                  <button
                    key={app.id}
                    onClick={() => setOpenApp(app.id)}
                    className="text-xs py-2 px-3 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    {app.name}
                  </button>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        )}

        {openApp === 'founder-brief' && (
          <div className="max-w-6xl">
            <FounderBriefApp />
          </div>
        )}

        {openApp === 'project-showcase' && (
          <div className="max-w-5xl">
            <ProjectShowcaseApp />
          </div>
        )}

        {openApp === 'video-vault' && (
          <div className="max-w-6xl">
            <VideoVaultApp />
          </div>
        )}

        {openApp === 'jb3-daily' && (
          <div className="max-w-6xl">
            <DailyShowApp />
          </div>
        )}

        {openApp === 'public-feed' && (
          <div className="max-w-6xl">
            <PublicFeedApp />
          </div>
        )}

        {openApp === 'evidence-vault' && (
          <div className="max-w-6xl">
            <EvidenceVaultApp />
          </div>
        )}

        {openApp === 'timeline' && (
          <div className="max-w-6xl">
            <TimelineApp />
          </div>
        )}

        {openApp === 'gtr3' && (
          <div className="max-w-6xl">
            <GTR3App />
          </div>
        )}

        {openApp === 'investor-room' && (
          <div className="max-w-6xl">
            <InvestorRoomApp />
          </div>
        )}

        {openApp === 'connect' && (
          <div className="max-w-6xl">
            <ConnectApp />
          </div>
        )}
      </main>
      <Dock onLaunch={(id) => setOpenApp(id)} onClose={() => setOpenApp(null)} />
    </div>
  )
}
