import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'
import type { SocialLink } from '../../types/content.types'

export default function SocialLinkCard({ item }: { item: SocialLink }) {
  return (
    <div className="card card-interactive h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <StatusBadge variant="primary" size="sm">{item.group}</StatusBadge>
          <h4 className="mt-3 text-heading-sm text-white">{item.label}</h4>
          <div className="mt-2 text-body-sm">{item.platform}</div>
        </div>
        <StatusBadge variant="neutral" size="sm">{item.visibility}</StatusBadge>
      </div>

      <p className="mt-4 text-body">{item.purpose}</p>
      {item.cautionNote ? (
        <p className="meta-note mt-4 border-amber-200/15 bg-amber-300/10 text-amber-100">Caution: {item.cautionNote}</p>
      ) : null}
      <div className="mt-5 flex items-center justify-between gap-2">
        <div className="text-body-sm">Channel: {item.iconName}</div>
        <a href={item.url} target="_blank" rel="noreferrer">
          <PremiumButton variant="primary" size="sm">Open</PremiumButton>
        </a>
      </div>
    </div>
  )
}
