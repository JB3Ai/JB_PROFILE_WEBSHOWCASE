import React, { useMemo, useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { investorRecords } from '../content/investor.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const categories = ['All', ...Array.from(new Set(investorRecords.map((record) => record.category)))]

export default function InvestorRoomApp() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [panel, setPanel] = useState<'none' | 'request' | 'pin' | 'open'>('none')
  const [activeItem, setActiveItem] = useState(investorRecords[0])

  const filteredRecords = useMemo(() => {
    const term = search.toLowerCase()
    return investorRecords.filter((record) => {
      const matchesCategory = selectedCategory === 'All' || record.category === selectedCategory
      const matchesSearch =
        record.title.toLowerCase().includes(term) ||
        record.summary.toLowerCase().includes(term) ||
        record.tags.some((tag) => tag.toLowerCase().includes(term))
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const restrictedRecords = filteredRecords.filter((record) => record.accessLevel !== 'Public')
  const publicOverview = filteredRecords.filter((record) => record.accessLevel === 'Public')

  const handleAction = (action: 'open' | 'request' | 'pin', item: typeof investorRecords[number]) => {
    setActiveItem(item)
    if (action === 'open') setPanel('open')
    else if (action === 'request') setPanel('request')
    else setPanel('pin')
  }

  const panelTitle =
    panel === 'open'
      ? 'Public document preview'
      : panel === 'request'
      ? 'Investor access request'
      : 'PIN placeholder'

  const getActionLabel = (accessLevel: string) => {
    if (accessLevel === 'Public') return 'Open Preview'
    if (accessLevel === 'PIN Required') return 'PIN Placeholder'
    return 'Request Access'
  }

  return (
    <div className="os-interior-layout text-white">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Investor Controls"
          title="Review filters"
          intro="Search the review layer and move between public-safe documents and controlled-access placeholders."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search investor review items"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search investor items"
              className="input-shell os-search-input"
            />
            <div className="os-filter-stack">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedCategory(item)}
                  className={`filter-pill os-filter-button ${selectedCategory === item ? 'filter-pill-active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </OsInteriorSection>

        <OsInteriorSection eyebrow="Review Actions" title="Controlled next steps" intro="Access workflows stay simulated and placeholder-safe in this milestone.">
          <OsActionStrip
            note="No real investor delivery, approval, or document exchange is active in this build."
            actions={
              <>
                <PremiumButton onClick={() => setPanel('request')} variant="accent">
                  Request Access
                </PremiumButton>
                <PremiumButton onClick={() => setPanel('pin')} variant="secondary">
                  PIN Placeholder
                </PremiumButton>
              </>
            }
          />
        </OsInteriorSection>

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Public previews" value={`${publicOverview.length}`} detail="Open review items" tone="accent" />
          <OsMetricCard label="Controlled items" value={`${restrictedRecords.length}`} detail="Request or PIN placeholders" tone="warning" />
        </div>
      </div>

      <main className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Investor Room"
          title="A controlled review layer for investor-safe material."
          intro="The module is designed to preview structure and access states without claiming a live vault or exposing real due-diligence files."
          side={<StatusBadge variant="neutral">Preview-only access</StatusBadge>}
        >
          {publicOverview.length > 0 ? (
            <div className="os-preview-grid">
              {publicOverview.map((item) => (
                <OsPreviewCard
                  key={item.id}
                  eyebrow="Public Overview"
                  title={item.title}
                  summary={item.summary}
                  mediaSrc={item.fileUrl.startsWith('/assets/') ? item.fileUrl : undefined}
                  fallbackMediaSrc={assetRegistry.investorPlaceholder}
                  mediaAlt={`${item.title} investor preview`}
                  mediaClassName="h-44"
                  badges={
                    <>
                      <StatusBadge variant="primary" size="sm">{item.visibility}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
                    </>
                  }
                  meta={
                    <>
                      <StatusBadge variant="neutral" size="sm">{item.category}</StatusBadge>
                      <StatusBadge variant="success" size="sm">{item.status}</StatusBadge>
                    </>
                  }
                  note={item.cautionNote ? `Caution: ${item.cautionNote}` : 'This stays a public-safe preview asset until real files are introduced.'}
                  actions={
                    <div className="os-preview-actions">
                      <PremiumButton onClick={() => handleAction('open', item)} variant="accent">
                        {getActionLabel(item.accessLevel)}
                      </PremiumButton>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No public-safe review items match the current filter and search state.</div>
          )}
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Controlled Review Set"
          title="Access-gated placeholders"
          intro="These entries demonstrate access states and review structure without exposing real investor documents or fake security theatre."
          side={<StatusBadge variant="warning">{restrictedRecords.length} items</StatusBadge>}
        >
          {restrictedRecords.length > 0 ? (
            <div className="os-preview-grid">
              {restrictedRecords.map((item) => (
                <OsPreviewCard
                  key={item.id}
                  eyebrow="Controlled Review"
                  title={item.title}
                  summary={item.summary}
                  mediaSrc={item.fileUrl.startsWith('/assets/') ? item.fileUrl : undefined}
                  fallbackMediaSrc={assetRegistry.pdfPlaceholder}
                  mediaAlt={`${item.title} gated review placeholder`}
                  mediaClassName="h-44"
                  badges={
                    <>
                      <StatusBadge variant="warning" size="sm">{item.accessLevel}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.documentType}</StatusBadge>
                    </>
                  }
                  meta={
                    <>
                      <StatusBadge variant="neutral" size="sm">{item.category}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.status}</StatusBadge>
                    </>
                  }
                  note={item.cautionNote ? `Caution: ${item.cautionNote}` : 'This entry stays placeholder-safe until real review governance is added.'}
                  actions={
                    <div className="os-preview-actions">
                      <PremiumButton
                        onClick={() => handleAction(item.accessLevel === 'PIN Required' ? 'pin' : 'request', item)}
                        variant={item.accessLevel === 'PIN Required' ? 'secondary' : 'accent'}
                      >
                        {getActionLabel(item.accessLevel)}
                      </PremiumButton>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No controlled review items match the current filter and search state.</div>
          )}
        </OsInteriorSection>

        {panel !== 'none' ? (
          <OsInteriorSection
            eyebrow="Access Placeholder"
            title={panelTitle}
            intro="This panel exists to show the intended review flow without enabling live approval or document delivery."
            side={
              <PremiumButton onClick={() => setPanel('none')} variant="secondary">
                Close panel
              </PremiumButton>
            }
          >
            <div className="os-preview-note">
              {panel === 'open' ? (
                <>
                  <p>“{activeItem.title}” remains a public review asset. Real files are not exposed in this build.</p>
                  <p className="mt-4 text-[color:var(--text-dim)]">
                    Status: {activeItem.status}. Document type: {activeItem.documentType}.
                  </p>
                </>
              ) : null}
              {panel === 'request' ? (
                <>
                  <p>This placeholder simulates an investor access request without enabling actual approval, file delivery, or due-diligence exchange.</p>
                  <p className="mt-4 text-[color:var(--text-dim)]">Submit interest now; verification and routing belong to a later milestone.</p>
                </>
              ) : null}
              {panel === 'pin' ? (
                <>
                  <p>PIN entry is shown as a placeholder state only. No PIN validation is active in the current build.</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <input
                      type="password"
                      aria-label="PIN placeholder input"
                      placeholder="Enter PIN"
                      className="input-shell os-search-input sm:w-64"
                    />
                    <PremiumButton variant="accent" disabled>
                      Submit Placeholder
                    </PremiumButton>
                  </div>
                </>
              ) : null}
            </div>
          </OsInteriorSection>
        ) : null}
      </main>
    </div>
  )
}
