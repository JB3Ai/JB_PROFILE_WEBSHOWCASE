import React from 'react'
import type { DailyShowEpisode } from '../../content/dailyShow.content'

type DailyShowCardProps = {
  episode: DailyShowEpisode
  onWatch?: (episode: DailyShowEpisode) => void
  onReadNotes?: (episode: DailyShowEpisode) => void
}

export default function DailyShowCard({ episode, onWatch, onReadNotes }: DailyShowCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-amber-300">Episode {episode.episodeNumber}</div>
          <h3 className="mt-3 text-xl font-semibold">{episode.title}</h3>
          <div className="mt-2 text-sm text-gray-400">{episode.category} • {episode.status}</div>
        </div>
        <div className="text-right text-sm text-gray-400">{episode.date}</div>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-300">{episode.summary}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => onWatch?.(episode)}
          className="rounded-3xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-black"
        >
          Watch
        </button>
        <button
          onClick={() => onReadNotes?.(episode)}
          className="rounded-3xl bg-white/10 px-4 py-3 text-sm text-white"
        >
          Read Notes
        </button>
      </div>
    </div>
  )
}
