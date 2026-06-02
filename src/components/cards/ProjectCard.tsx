import React from 'react'

type Project = {
  id: string
  name: string
  category: string
  status: string
  summary: string
  pdf?: string
  video?: string
  image?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gradient-to-br from-black/40 to-white/2 p-4 rounded-lg border border-white/5 shadow-md">
      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
      <div className="text-sm text-gray-400">{project.category} • {project.status}</div>
      <p className="mt-2 text-gray-300 text-sm">{project.summary}</p>

      <div className="mt-4 flex gap-2">
        <button className="px-3 py-1 bg-sky-500 text-black rounded text-sm">Watch Video</button>
        <button className="px-3 py-1 bg-amber-500 text-black rounded text-sm">Open PDF</button>
        <button className="px-3 py-1 bg-gray-700 text-white rounded text-sm">Open Project</button>
      </div>
    </div>
  )
}
