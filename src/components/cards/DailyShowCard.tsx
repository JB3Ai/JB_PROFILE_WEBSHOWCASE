import React from 'react'
import type { DailyShowEpisode } from '../../content/dailyShow.content'

type DailyShowCardProps = {
  episode: DailyShowEpisode
  onWatch?: (episode: DailyShowEpisode) => void
  onReadNotes?: (episode: DailyShowEpisode) => void
}

export default function DailyShowCard({ episode, onWatch, onReadNotes }: DailyShowCardProps) {
  return (
    <div className="card card-interactive p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="badge-warning text-xs px-2 py-1">Episode {episode.episodeNumber}</div>
          <h3 className="mt-3 text-lg font-semibold">{episode.title}</h3>
          <div className="mt-2 flex gap-2 flex-wrap">
            <span className="badge-neutral text-xs px-2 py-1">{episode.category}</span>
            <span className="badge-primary text-xs px-2 py-1">{episode.status}</span>
          </div>
        </div>
        <div className="text-right text-xs text-gray-400">{episode.date}</div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{episode.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => onWatch?.(episode)}
          className="btn-success"
        >
          Watch
        </button>
        <button
          onClick={() => onReadNotes?.(episode)}
          className="btn-ghost"
        >
          Read Notes
        </button>
      </div>
    </div>
  )
}
