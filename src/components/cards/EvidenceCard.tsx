import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'
import type { EvidenceItem } from '../../types/content.types'
import AssetThumbnail from '../media/AssetThumbnail'
import { assetRegistry } from '../../data/assetRegistry'

export default function EvidenceCard({ item }: { item: EvidenceItem }) {
  return (
    <div className="card card-interactive h-full">
      <AssetThumbnail
        src={item.thumbnail}
        fallbackSrc={assetRegistry.evidencePlaceholder}
        alt={`${item.title} evidence preview`}
        className="h-44"
        overlay={<StatusBadge variant="primary" size="sm">{item.visibility}</StatusBadge>}
      />
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
