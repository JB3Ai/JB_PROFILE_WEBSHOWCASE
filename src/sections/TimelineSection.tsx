import React from 'react'
import { timelineEvents } from '../content/timeline.content'

const publicEvents = timelineEvents.filter((event) => event.visibility === 'Public' || event.visibility === 'Public Preview')

export default function TimelineSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-3xl font-bold">Founder Timeline</h2>
            <p className="mt-2 text-gray-400">From electronics and automation to recovery systems, iMED, JB³Ai, and OS³.</p>
          </div>

          <div className="grid gap-6">
            {publicEvents.map((event) => (
              <div key={event.id} className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-lg">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">{event.period}</div>
                    <h3 className="text-2xl font-semibold text-white mt-2">{event.title}</h3>
                  </div>
                  <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300">{event.category}</div>
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
      </div>
    </section>
  )
}
