import React from 'react'

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
    <div className="bg-gradient-to-br from-black/35 via-slate-900/70 to-white/5 border border-white/10 rounded-xl p-4 shadow-lg backdrop-blur-sm">
      <div className="h-40 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-400 text-sm font-medium">Thumbnail</div>
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm text-cyan-300">
          <span>{video.category}</span>
          <span>{video.duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-semibold text-white">{video.title}</h4>
        <div className="text-xs uppercase tracking-[0.2em] text-emerald-300 mt-1">{video.status}</div>
        <p className="mt-3 text-sm text-gray-300">{video.summary}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="px-3 py-2 bg-sky-500 text-black rounded text-sm">Watch</button>
        {video.relatedProjectId && <button className="px-3 py-2 bg-slate-700 text-white rounded text-sm">Related Project</button>}
      </div>
    </div>
  )
}
