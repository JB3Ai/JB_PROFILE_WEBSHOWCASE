import React from 'react'
import { projects } from '../content/projects.content'
import ProjectCard from '../components/cards/ProjectCard'

export default function ProjectShowcaseSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Project Showcase</h2>
        <p className="text-gray-400 mt-2">Systems, products, demos, and creative builds from the Jonathan Blackburn OS ecosystem.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
