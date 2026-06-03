import React from 'react'

type SocialLinkItem = {
  id: string
  label: string
  group: string
  platform: string
  purpose: string
  url: string
  visibility: string
  priority: number
  iconName: string
  cautionNote?: string
}

export default function SocialLinkCard({ item }: { item: SocialLinkItem }) {
  return (
    <div className="card card-interactive p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="badge-primary text-xs px-2 py-1">{item.group}</div>
          <h4 className="mt-2 text-lg font-semibold text-white">{item.label}</h4>
          <div className="mt-1 text-sm text-gray-400">{item.platform}</div>
        </div>
        <div className="badge-neutral text-xs px-2 py-1">{item.visibility}</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{item.purpose}</p>
      {item.cautionNote ? (
        <p className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-200">⚠️ {item.cautionNote}</p>
      ) : null}
      <div className="mt-5 flex items-center justify-between gap-2">
        <div className="text-xs text-gray-400">Icon: {item.iconName}</div>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-sm"
        >
          Open
        </a>
      </div>
    </div>
  )
}
