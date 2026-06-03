import React from 'react'

type EvidenceItem = {
  id: string
  title: string
  category: string
  status: string
  visibility: string
  summary: string
  documentType: string
  fileUrl: string
  thumbnail: string
  tags: string[]
  cautionNote: string
}

export default function EvidenceCard({ item }: { item: EvidenceItem }) {
  return (
    <div className="card card-interactive p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="badge-neutral text-xs px-2 py-1">{item.category}</span>
            <span className="badge-neutral text-xs px-2 py-1">{item.documentType}</span>
          </div>
        </div>
        <div className="badge-primary text-xs px-2 py-1">{item.visibility}</div>
      </div>
      <p className="mt-4 text-sm text-gray-300">{item.summary}</p>
      {item.cautionNote && <p className="mt-3 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-200">⚠️ {item.cautionNote}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        <button className="btn-primary btn-sm">View Details</button>
        <button className="btn-ghost btn-sm">Open Document</button>
      </div>
    </div>
  )
}
