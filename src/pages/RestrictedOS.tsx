import React, { useState } from 'react'
import { appRegistry } from '../data/appRegistry'
import ProjectShowcaseApp from '../os-apps/ProjectShowcaseApp'
import VideoVaultApp from '../os-apps/VideoVaultApp'
import EvidenceVaultApp from '../os-apps/EvidenceVaultApp'

function TopBar() {
  return <div className="h-10 bg-black/30 flex items-center px-4 text-gray-200">Tactical Intelligence OS</div>
}

function Dock({ onLaunch }: { onLaunch: (id: string) => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-black/30 px-4 py-2 rounded">
      {appRegistry.map((a) => (
        <button key={a.id} onClick={() => onLaunch(a.id)} className="text-sm text-white px-3 py-1">{a.name}</button>
      ))}
    </div>
  )
}

export default function RestrictedOS() {
  const [openApp, setOpenApp] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <TopBar />
      <main className="p-8">
        {!openApp && (
          <div className="max-w-3xl bg-surface/70 p-6 rounded shadow">
            <h3 className="text-lg">Welcome to Tactical Intelligence OS</h3>
            <p className="text-gray-300 mt-2">Use the dock to open an app.</p>
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

        {openApp === 'evidence-vault' && (
          <div className="max-w-6xl">
            <EvidenceVaultApp />
          </div>
        )}
      </main>
      <Dock onLaunch={(id) => setOpenApp(id)} />
    </div>
  )
}
