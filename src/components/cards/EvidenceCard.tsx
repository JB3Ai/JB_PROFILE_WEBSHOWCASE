import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'

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
    <div className="card card-interactive h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-caption">Evidence Vault</p>
          <h4 className="mt-3 text-heading-sm text-white">{item.title}</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge variant="neutral" size="sm">{item.category}</StatusBadge>
            <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
          </div>
        </div>
        <StatusBadge variant="primary" size="sm">{item.visibility}</StatusBadge>
      </div>
      <p className="mt-4 text-body">{item.summary}</p>
      {item.cautionNote ? <p className="meta-note mt-4 border-amber-200/15 bg-amber-300/10 text-amber-100">Caution: {item.cautionNote}</p> : null}
      <div className="mt-6 flex flex-wrap gap-2">
        <PremiumButton variant="primary" size="sm">View Details</PremiumButton>
        <PremiumButton variant="ghost" size="sm">Open Document</PremiumButton>
      </div>
    </div>
  )
}
