import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'
import type { InvestorItem } from '../../types/content.types'
import AssetThumbnail from '../media/AssetThumbnail'
import { assetRegistry } from '../../data/assetRegistry'

type InvestorCardProps = {
  item: InvestorItem
  onAction?: (action: 'open' | 'request' | 'pin', item: InvestorItem) => void
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
    <div className="card card-interactive h-full">
      <AssetThumbnail
        src={item.fileUrl.startsWith('/assets/') ? item.fileUrl : undefined}
        fallbackSrc={item.accessLevel === 'Public' ? assetRegistry.investorPlaceholder : assetRegistry.pdfPlaceholder}
        alt={`${item.title} document preview`}
        className="h-40"
        overlay={
          <div className="flex items-center justify-between gap-3">
            <StatusBadge variant="warning" size="sm">{item.accessLevel}</StatusBadge>
            <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
          </div>
        }
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-caption">Investor Room</p>
          <h3 className="mt-3 text-heading-sm text-white">{item.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge variant="neutral" size="sm">{item.category}</StatusBadge>
            <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
          </div>
        </div>
        <StatusBadge variant="success" size="sm">{item.visibility}</StatusBadge>
      </div>

      <p className="mt-4 text-body">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge variant="warning" size="sm">{item.accessLevel}</StatusBadge>
        <StatusBadge variant="neutral" size="sm">{item.status}</StatusBadge>
      </div>

      {item.cautionNote ? (
        <p className="meta-note mt-4 border-amber-200/15 bg-amber-300/10 text-amber-100">Caution: {item.cautionNote}</p>
      ) : null}

      <div className="mt-5">
        <PremiumButton onClick={handleClick} variant="accent" className="w-full">
          {buttonLabel}
        </PremiumButton>
      </div>
    </div>
  )
}
