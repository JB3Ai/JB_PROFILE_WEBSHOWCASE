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
    <div className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">{item.group}</div>
          <h4 className="mt-2 text-lg font-semibold text-white">{item.label}</h4>
          <div className="mt-1 text-sm text-gray-400">{item.platform}</div>
        </div>
        <div className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">{item.visibility}</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{item.purpose}</p>
      {item.cautionNote ? (
        <p className="mt-4 rounded-2xl bg-amber-500/10 px-3 py-2 text-xs text-amber-100">⚠️ {item.cautionNote}</p>
      ) : null}
      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Icon: {item.iconName}</div>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-sky-400"
        >
          Open
        </a>
      </div>
    </div>
  )
}
