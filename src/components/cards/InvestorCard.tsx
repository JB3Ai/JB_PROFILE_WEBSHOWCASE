import React from 'react'
import type { InvestorRecord } from '../../content/investor.content'

type InvestorCardProps = {
  item: InvestorRecord
  onAction?: (action: 'open' | 'request' | 'pin', item: InvestorRecord) => void
}

export default function InvestorCard({ item, onAction }: InvestorCardProps) {
  const buttonLabel =
    item.accessLevel === 'Public'
      ? 'Open'
      : item.accessLevel === 'PIN Required'
      ? 'Enter PIN'
      : 'Request Access'

  const handleClick = () => {
    if (!onAction) return
    if (item.accessLevel === 'Public') {
      onAction('open', item)
    } else if (item.accessLevel === 'PIN Required') {
      onAction('pin', item)
    } else {
      onAction('request', item)
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-400">
            <span>{item.category}</span>
            <span>•</span>
            <span>{item.documentType}</span>
          </div>
        </div>
        <div className="rounded-2xl bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.24em] text-emerald-300">
          {item.visibility}
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-300">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-400">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.accessLevel}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{item.status}</span>
      </div>

      {item.cautionNote ? (
        <p className="mt-5 rounded-3xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">{item.cautionNote}</p>
      ) : null}

      <div className="mt-6">
        <button
          onClick={handleClick}
          className="w-full rounded-3xl bg-gradient-to-r from-amber-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
