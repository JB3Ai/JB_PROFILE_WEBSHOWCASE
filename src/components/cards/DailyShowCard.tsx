import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'
import type { DailyShowEpisode } from '../../types/content.types'
import AssetThumbnail from '../media/AssetThumbnail'
import { assetRegistry } from '../../data/assetRegistry'

type DailyShowCardProps = {
  episode: DailyShowEpisode
  onWatch?: (episode: DailyShowEpisode) => void
  onReadNotes?: (episode: DailyShowEpisode) => void
}

export default function DailyShowCard({ episode, onWatch, onReadNotes }: DailyShowCardProps) {
  return (
    <div className="card card-interactive h-full">
      <AssetThumbnail
        src={episode.thumbnail}
        fallbackSrc={assetRegistry.dailyShowPlaceholder}
        alt={`${episode.title} episode preview`}
        className="h-40"
        overlay={
          <div className="flex items-center justify-between gap-3">
            <StatusBadge variant="warning" size="sm">Episode {episode.episodeNumber}</StatusBadge>
            <StatusBadge variant="neutral" size="sm">{episode.access}</StatusBadge>
          </div>
        }
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <StatusBadge variant="warning" size="sm">Episode {episode.episodeNumber}</StatusBadge>
          <h3 className="mt-3 text-heading-sm text-white">{episode.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <StatusBadge variant="neutral" size="sm">{episode.category}</StatusBadge>
            <StatusBadge variant="primary" size="sm">{episode.status}</StatusBadge>
          </div>
        </div>
        <div className="text-right text-caption">{episode.date}</div>
      </div>

      <p className="mt-4 text-body">{episode.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <PremiumButton onClick={() => onWatch?.(episode)} variant="success">
          Watch
        </PremiumButton>
        <PremiumButton onClick={() => onReadNotes?.(episode)} variant="ghost">
          Read Notes
        </PremiumButton>
      </div>
    </div>
  )
}
