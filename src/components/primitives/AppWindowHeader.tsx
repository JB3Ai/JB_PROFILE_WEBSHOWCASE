import React from 'react'

interface AppWindowHeaderProps {
  title: string
  icon?: string
  onClose?: () => void
  actions?: React.ReactNode
}

export default function AppWindowHeader({ title, icon, onClose, actions }: AppWindowHeaderProps) {
  return (
    <div className="h-12 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-white/10 flex items-center justify-between px-4 rounded-t-lg">
      <div className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <div className="flex items-center gap-2">
        {actions}
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
