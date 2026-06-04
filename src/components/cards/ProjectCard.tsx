import React from 'react'
import { PremiumButton, StatusBadge } from '../primitives'

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
    <div className="card card-interactive h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-caption">Project Layer</p>
          <h4 className="mt-3 text-heading-sm text-white">{project.name}</h4>
        </div>
        <StatusBadge variant="primary" size="sm">{project.status}</StatusBadge>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge variant="neutral" size="sm">{project.category}</StatusBadge>
      </div>
      <p className="mt-4 text-body">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <PremiumButton variant="primary" size="sm">Open Project</PremiumButton>
        <PremiumButton variant="secondary" size="sm">Watch Video</PremiumButton>
        <PremiumButton variant="ghost" size="sm">Open PDF</PremiumButton>
      </div>
    </div>
  )
}
