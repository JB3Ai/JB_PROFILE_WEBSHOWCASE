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
    <div className="card card-interactive p-5">
      <div className="h-40 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 text-sm font-medium">Thumbnail</div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <span className="badge-primary text-xs px-2 py-1">{video.category}</span>
          <span className="text-xs text-gray-400">{video.duration}</span>
        </div>
        <h4 className="text-lg font-semibold text-white">{video.title}</h4>
        <div className="badge-success text-xs px-2 py-1 mt-2 w-fit">{video.status}</div>
        <p className="mt-3 text-sm text-gray-300">{video.summary}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="btn-primary btn-sm">Watch</button>
        {video.relatedProjectId && <button className="btn-secondary btn-sm">Related Project</button>}
      </div>
    </div>
  )
}
