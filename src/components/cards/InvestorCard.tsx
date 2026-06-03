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
    <div className="card card-interactive p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="badge-neutral text-xs px-2 py-1">{item.category}</span>
            <span className="badge-neutral text-xs px-2 py-1">{item.documentType}</span>
          </div>
        </div>
        <div className="badge-success text-xs px-2 py-1">{item.visibility}</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge-neutral text-xs px-2 py-1">{item.accessLevel}</span>
        <span className="badge-neutral text-xs px-2 py-1">{item.status}</span>
      </div>

      {item.cautionNote ? (
        <p className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-200">⚠️ {item.cautionNote}</p>
      ) : null}

      <div className="mt-5">
        <button
          onClick={handleClick}
          className="w-full btn-accent"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
