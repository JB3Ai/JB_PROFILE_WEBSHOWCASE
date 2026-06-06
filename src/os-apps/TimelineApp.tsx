import React, { useState } from 'react'
import { timelineEvents } from '../content/timeline.content'
import { OsInteriorSection, OsMetricCard, OsTimelineRow } from '../components/os'

const categories = ['All', ...Array.from(new Set(timelineEvents.map((event) => event.category)))]

export default function TimelineApp() {
  const [category, setCategory] = useState('All')

  const filteredEvents = timelineEvents.filter((event) => category === 'All' || event.category === category)

  return (
    <div className="os-interior-stack">
      <OsInteriorSection
        eyebrow="Founder Timeline"
        title="A milestone and history layer with clearer rhythm."
        intro="The timeline now behaves like a cinematic review track rather than a cramped card grid, while staying fully public-safe."
      >
        <div className="os-metrics-grid">
          <OsMetricCard label="Visible milestones" value={`${filteredEvents.length}`} detail="Current filtered rows" tone="accent" />
          <OsMetricCard label="Current lane" value={category} detail="Timeline filter" tone="success" />
        </div>
        <div className="mt-1 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`filter-pill ${category === item ? 'filter-pill-active' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </OsInteriorSection>

      <OsInteriorSection
        eyebrow="Timeline Rows"
        title="Structured founder milestones"
        intro="Each row keeps period, category, visibility, and tags readable without compressing the narrative into dense utility cards."
      >
        <div className="os-timeline-list">
          {filteredEvents.map((event) => (
            <OsTimelineRow
              key={event.id}
              period={event.period}
              title={event.title}
              summary={event.summary}
              category={event.category}
              visibility={event.visibility}
              tags={event.tags}
            />
          ))}
        </div>
      </OsInteriorSection>
    </div>
  )
}
