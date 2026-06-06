import React from 'react'

interface ExecutiveDesktopProps {
  topBar: React.ReactNode
  dock: React.ReactNode
  children: React.ReactNode
}

export default function ExecutiveDesktop({ topBar, dock, children }: ExecutiveDesktopProps) {
  return (
    <div className="os-shell os-desktop">
      <div className="os-desktop-glow os-desktop-glow-left" />
      <div className="os-desktop-glow os-desktop-glow-right" />
      <div className="os-desktop-grid" />
      {topBar}
      <main className="os-main">
        <div className="os-workspace">{children}</div>
      </main>
      {dock}
    </div>
  )
}
