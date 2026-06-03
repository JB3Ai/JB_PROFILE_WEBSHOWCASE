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
    <div className="card card-interactive p-5">
      <h4 className="text-lg font-semibold text-white">{project.name}</h4>
      <div className="flex gap-2 mt-1">
        <span className="badge-neutral text-xs px-2 py-1">{project.category}</span>
        <span className="badge-primary text-xs px-2 py-1">{project.status}</span>
      </div>
      <p className="mt-3 text-gray-300 text-sm">{project.summary}</p>

      <div className="mt-4 flex gap-2 flex-wrap">
        <button className="btn-primary btn-sm">Watch Video</button>
        <button className="btn-accent btn-sm">Open PDF</button>
        <button className="btn-secondary btn-sm">Open Project</button>
      </div>
    </div>
  )
}
