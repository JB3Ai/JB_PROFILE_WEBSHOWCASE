import React, { useState } from 'react'
import { timelineEvents } from '../content/timeline.content'
import { GlassPanel, StatusBadge } from '../components/primitives'

const categories = ['All', ...Array.from(new Set(timelineEvents.map((event) => event.category)))]

export default function TimelineApp() {
  const [category, setCategory] = useState('All')

  const filteredEvents = timelineEvents.filter((event) => category === 'All' || event.category === category)

  return (
    <div className="space-y-6">
      <GlassPanel size="lg" animate={false}>
        <div>
          <div className="eyebrow">Founder Timeline</div>
          <h2 className="mt-3 text-heading text-white">Public-safe timeline view</h2>
          <p className="mt-4 text-body">Chronological milestones across foundation, recovery, healthcare, and AI systems.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-pill ${category === cat ? 'filter-pill-active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </GlassPanel>

      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="card">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="text-caption">{event.period}</div>
                <h3 className="mt-2 text-heading-sm text-white">{event.title}</h3>
              </div>
              <StatusBadge variant="neutral">{event.category}</StatusBadge>
            </div>
            <p className="mt-4 text-body">{event.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <StatusBadge key={tag} variant="neutral" size="sm">{tag}</StatusBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
