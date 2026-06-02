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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm text-white">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <div className="text-sm text-gray-400">{item.category} • {item.documentType}</div>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.visibility}</div>
      </div>
      <p className="mt-4 text-sm text-gray-300">{item.summary}</p>
      {item.cautionNote && <p className="mt-3 rounded-xl bg-amber-500/10 px-3 py-2 text-xs text-amber-200">{item.cautionNote}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        <button className="px-3 py-2 rounded bg-sky-500 text-black text-sm">View Details</button>
        <button className="px-3 py-2 rounded bg-white/10 text-white text-sm">Open Document</button>
      </div>
    </div>
  )
}
