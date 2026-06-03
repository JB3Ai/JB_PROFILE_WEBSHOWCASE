import React, { useState } from 'react'
import { timelineEvents } from '../content/timeline.content'

const categories = ['All', ...Array.from(new Set(timelineEvents.map((event) => event.category)))]

export default function TimelineApp() {
  const [category, setCategory] = useState('All')

  const filteredEvents = timelineEvents.filter((event) => category === 'All' || event.category === category)

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Founder Timeline</div>
          <h2 className="mt-3 text-3xl font-semibold text-white">Public-safe timeline view</h2>
          <p className="mt-4 text-gray-300">Chronological milestones across foundation, recovery, healthcare, and AI systems.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm ${category === cat ? 'bg-sky-500 text-black' : 'bg-white/10 text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="rounded-3xl border border-white/10 bg-black/20 p-6 shadow-lg">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">{event.period}</div>
                <h3 className="mt-2 text-2xl font-semibold text-white">{event.title}</h3>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300">{event.category}</div>
            </div>
            <p className="mt-4 text-gray-300">{event.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
