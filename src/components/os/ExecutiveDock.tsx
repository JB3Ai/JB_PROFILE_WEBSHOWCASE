import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { AppId, AppRegistryItem } from '../../types/content.types'

interface ExecutiveDockProps {
  apps: AppRegistryItem[]
  activeAppId: AppId | null
  onLaunch: (id: AppId) => void
  onClear: () => void
  suppressHint?: boolean
}

export default function ExecutiveDock({
  apps,
  activeAppId,
  onLaunch,
  onClear,
  suppressHint = false
}: ExecutiveDockProps) {
  const dockRef = useRef<HTMLDivElement | null>(null)
  const hintTimerRef = useRef<number | null>(null)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const updateHint = () => {
      if (typeof window === 'undefined') return

      const dock = dockRef.current
      if (!dock) return

      const isMobile = window.innerWidth < 768
      const hasOverflow = dock.scrollWidth - dock.clientWidth > 12
      const shouldShow = isMobile && hasOverflow

      setShowHint(shouldShow)

      if (hintTimerRef.current) {
        window.clearTimeout(hintTimerRef.current)
      }

      if (shouldShow) {
        hintTimerRef.current = window.setTimeout(() => {
          setShowHint(false)
        }, 2200)
      }
    }

    updateHint()
    window.addEventListener('resize', updateHint)

    return () => {
      window.removeEventListener('resize', updateHint)
      if (hintTimerRef.current) {
        window.clearTimeout(hintTimerRef.current)
      }
    }
  }, [apps])

  return (
    <div className="os-dock-wrap">
      <div className="os-dock-shell">
        {showHint && !suppressHint ? <div className="os-dock-hint">Swipe the module rail for more apps.</div> : null}
        <motion.div
          ref={dockRef}
          className="os-dock"
          onScroll={() => setShowHint(false)}
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
