import React, { useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { projects } from '../content/projects.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const FILTERS = ['All', 'Demo', 'Prototype', 'Public Preview', 'Product Profile', 'Concept']

export default function ProjectShowcaseApp() {
  const [filter, setFilter] = useState('All')
  const filtered = projects.filter((p) => filter === 'All' || p.status === filter)
  const featured = filtered[0]
  const supporting = featured ? filtered.slice(1, 5) : []

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Project Filters"
          title="Status selection"
          intro="Switch between featured status lanes without changing the underlying project registry."
          className="os-filter-panel"
          bodyClassName="os-filter-stack"
        >
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`filter-pill os-filter-button ${filter === item ? 'filter-pill-active' : ''}`}
            >
              {item}
            </button>
          ))}
        </OsInteriorSection>

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Visible projects" value={`${filtered.length}`} detail="Filtered case-study previews" tone="accent" />
          <OsMetricCard label="Status lane" value={filter} detail="Current selection" tone="success" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Project Showcase"
          title="Case-study previews in a calmer review format."
          intro="The module now leads with one primary surface, then steps into supporting project previews below it rather than treating every item as equal-weight dashboard output."
          side={<StatusBadge variant="primary">{filter === 'All' ? 'Full range' : filter}</StatusBadge>}
        >
          {featured ? (
            <OsPreviewCard
              eyebrow="Featured Project"
              title={featured.name}
              summary={featured.summary}
              mediaSrc={featured.image}
              fallbackMediaSrc={assetRegistry.projectPlaceholder}
              mediaAlt={`${featured.name} project placeholder`}
              mediaClassName="h-64"
              badges={
                <>
                  <StatusBadge variant="success" size="sm">{featured.status}</StatusBadge>
                  <StatusBadge variant="neutral" size="sm">{featured.category}</StatusBadge>
                </>
              }
              note="Live demos, PDFs, and deeper project files remain in placeholder mode inside the current preview shell."
              actions={
                <OsActionStrip
                  title="Project actions"
                  note="Actions stay intentionally disabled until real module handoff routes are introduced."
                  actions={
                    <>
                      <PremiumButton variant="primary" disabled>
                        Open Project Placeholder
                      </PremiumButton>
                      <PremiumButton variant="secondary" disabled>
                        Demo Placeholder
                      </PremiumButton>
                    </>
                  }
                />
              }
              tone="feature"
            />
          ) : (
            <div className="os-preview-note">No projects match the selected filter yet.</div>
          )}
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Supporting Projects"
          title="Additional previews"
          intro="Supporting work stays readable and structured, with lighter metadata and fewer competing actions."
        >
          {supporting.length > 0 ? (
            <div className="os-preview-grid">
              {supporting.map((project) => (
                <OsPreviewCard
                  key={project.id}
                  eyebrow="Project Layer"
                  title={project.name}
                  summary={project.summary}
                  mediaSrc={project.image}
                  fallbackMediaSrc={assetRegistry.projectPlaceholder}
                  mediaAlt={`${project.name} project preview`}
                  mediaClassName="h-48"
                  badges={
                    <>
                      <StatusBadge variant="success" size="sm">{project.status}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{project.category}</StatusBadge>
                    </>
                  }
                  actions={
                    <div className="os-preview-actions">
                      <PremiumButton variant="ghost" disabled>
                        Preview Placeholder
                      </PremiumButton>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No supporting projects remain after the current filter.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
