import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'

type Video = {
  id: string
  title: string
  category: string
  status: string
  duration: string
  summary: string
  relatedProjectId: string | null
  thumbnail: string
  videoUrl: string
  access: string
  tags: string[]
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="card card-interactive h-full">
      <div className="flex h-44 items-end justify-between rounded-[1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(88,214,218,0.16),rgba(6,12,18,0.12)),rgba(5,10,16,0.78)] p-5">
        <StatusBadge variant="primary" size="sm">{video.category}</StatusBadge>
        <StatusBadge variant="neutral" size="sm">{video.duration}</StatusBadge>
      </div>
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
