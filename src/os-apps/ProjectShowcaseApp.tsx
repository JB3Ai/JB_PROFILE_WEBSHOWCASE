import React, { useState } from 'react'
import { projects } from '../content/projects.content'
import ProjectCard from '../components/cards/ProjectCard'

const FILTERS = ['All', 'Demo', 'Prototype', 'Public Preview', 'Product Profile', 'Concept']

export default function ProjectShowcaseApp() {
  const [filter, setFilter] = useState('All')

  const filtered = projects.filter((p) => filter === 'All' || p.status === filter)

  return (
    <div className="p-4 bg-white/5 rounded">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg text-white">Project Showcase</h3>
        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-2 py-1 rounded text-sm ${filter===f? 'bg-sky-500 text-black':'bg-white/5 text-white'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
