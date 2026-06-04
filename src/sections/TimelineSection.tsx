import React from 'react'
import { timelineEvents } from '../content/timeline.content'
import { SectionHeader, StatusBadge } from '../components/primitives'

const publicEvents = timelineEvents.filter((event) => event.visibility === 'Public' || event.visibility === 'Public Preview')

export default function TimelineSection() {
  return (
    <section id="timeline" className="section section-anchor text-white">
      <div className="container-shell">
        <div className="flex flex-col gap-4">
          <SectionHeader
            eyebrow="History Layer"
            title="Founder Timeline"
            subtitle="From electronics and automation to recovery systems, iMED, JB³Ai, and OS³."
          />

          <div className="grid gap-6">
            {publicEvents.map((event) => (
              <div key={event.id} className="card">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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
      </div>
    </section>
  )
}
