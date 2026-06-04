import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'
import type { VideoItem } from '../../types/content.types'
import AssetThumbnail from '../media/AssetThumbnail'
import { assetRegistry } from '../../data/assetRegistry'

export default function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="card card-interactive h-full">
      <AssetThumbnail
        src={video.thumbnail}
        fallbackSrc={assetRegistry.videoPlaceholder}
        alt={`${video.title} video preview`}
        className="h-44"
        overlay={
          <div className="flex items-end justify-between gap-3">
            <StatusBadge variant="primary" size="sm">{video.category}</StatusBadge>
            <StatusBadge variant="neutral" size="sm">{video.duration}</StatusBadge>
          </div>
        }
      />
      <div className="mt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-caption">Video Vault</p>
            <h4 className="mt-3 text-heading-sm text-white">{video.title}</h4>
          </div>
          <StatusBadge variant="success" size="sm">{video.status}</StatusBadge>
        </div>
        <p className="mt-4 text-body">{video.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <PremiumButton variant="primary" size="sm">Watch</PremiumButton>
        {video.relatedProjectId ? <PremiumButton variant="secondary" size="sm">Related Project</PremiumButton> : null}
      </div>
    </div>
  )
}
