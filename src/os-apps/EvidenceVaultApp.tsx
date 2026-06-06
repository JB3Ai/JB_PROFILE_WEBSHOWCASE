import React, { useMemo, useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { evidenceItems } from '../content/evidence.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const categories = [
  'All',
  'CV & Resume',
  'Skills & Technical Stack',
  'Awards',
  'Certificates',
  'Business Proof',
  'Recommendations',
  'Investor Vault',
  'Historical Archive'
]

export default function EvidenceVaultApp() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return evidenceItems.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])
  const featured = filtered[0]
  const supporting = featured ? filtered.slice(1, 7) : []

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Evidence Controls"
          title="Preview filters"
          intro="Review proof layers with careful wording and without implying private document access."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search evidence previews"
              value={search}
              placeholder="Search evidence"
              onChange={(event) => setSearch(event.target.value)}
              className="input-shell os-search-input"
            />
            <div className="os-filter-stack">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`filter-pill os-filter-button ${category === item ? 'filter-pill-active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </OsInteriorSection>

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Results" value={`${filtered.length}`} detail="Filtered evidence previews" tone="accent" />
          <OsMetricCard label="Exposure" value="Public-safe" detail="No private evidence released" tone="success" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Evidence Vault"
          title="Proof and documentation previews with restrained language."
          intro="This module shows enough evidence structure to establish credibility while staying careful about private files, investor documents, and legal certainty."
          side={<StatusBadge variant="primary">Preview layer</StatusBadge>}
        >
          {featured ? (
            <OsPreviewCard
              eyebrow={featured.category}
              title={featured.title}
              summary={featured.summary}
              mediaSrc={featured.thumbnail}
              fallbackMediaSrc={assetRegistry.evidencePlaceholder}
              mediaAlt={`${featured.title} evidence placeholder`}
              mediaClassName="h-56"
              badges={
                <>
                  <StatusBadge variant="primary" size="sm">{featured.visibility}</StatusBadge>
                  <StatusBadge variant="neutral" size="sm">{featured.documentType}</StatusBadge>
                </>
              }
              note={featured.cautionNote ? `Caution: ${featured.cautionNote}` : 'Document previews remain placeholder-safe in this build.'}
              actions={
                <OsActionStrip
                  title="Evidence actions"
                  note="Request and review controls stay disabled until document governance is implemented."
                  actions={
                    <>
                      <PremiumButton variant="primary" disabled>
                        Request Access Placeholder
                      </PremiumButton>
                      <PremiumButton variant="secondary" disabled>
                        Review Notes Placeholder
                      </PremiumButton>
                    </>
                  }
                />
              }
              tone="feature"
            />
          ) : (
            <div className="os-preview-note">No evidence items match the current filters.</div>
          )}
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Evidence Library"
          title="Supporting documentation previews"
          intro="Supporting items keep the same controlled language and clearly marked placeholder state."
        >
          {supporting.length > 0 ? (
            <div className="os-preview-grid">
              {supporting.map((item) => (
                <OsPreviewCard
                  key={item.id}
                  eyebrow="Documentation Preview"
                  title={item.title}
                  summary={item.summary}
                  mediaSrc={item.thumbnail}
                  fallbackMediaSrc={assetRegistry.evidencePlaceholder}
                  mediaAlt={`${item.title} documentation placeholder`}
                  mediaClassName="h-44"
                  badges={
                    <>
                      <StatusBadge variant="primary" size="sm">{item.visibility}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
                    </>
                  }
                  meta={<StatusBadge variant="neutral" size="sm">{item.category}</StatusBadge>}
                  note={item.cautionNote ? `Caution: ${item.cautionNote}` : undefined}
                  actions={
                    <div className="os-preview-actions">
                      <PremiumButton variant="ghost" disabled>
                        Document Placeholder
                      </PremiumButton>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No additional evidence previews remain after the current filter.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
