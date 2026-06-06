import React, { useMemo, useState } from 'react'
import {
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { socialLinks } from '../content/social.content'
import { PremiumButton, StatusBadge } from '../components/primitives'

const groups = ['All', ...Array.from(new Set(socialLinks.map((link) => link.group)))]

export default function ConnectApp() {
  const [selectedGroup, setSelectedGroup] = useState('All')
  const [search, setSearch] = useState('')

  const filteredLinks = useMemo(() => {
    const lower = search.toLowerCase()
    return socialLinks
      .filter((link) => selectedGroup === 'All' || link.group === selectedGroup)
      .filter(
        (link) =>
          link.label.toLowerCase().includes(lower) ||
          link.platform.toLowerCase().includes(lower) ||
          link.purpose.toLowerCase().includes(lower)
      )
      .sort((a, b) => a.priority - b.priority)
  }, [search, selectedGroup])
  const visibleLinks = filteredLinks.slice(0, 6)

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Connect Controls"
          title="Search and group channels"
          intro="This module is now a cleaner next-action hub rather than a large social directory."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search contact and platform previews"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search contacts or platforms"
              className="input-shell os-search-input"
            />
            <div className="os-filter-stack">
              {groups.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedGroup(item)}
                  className={`filter-pill os-filter-button ${selectedGroup === item ? 'filter-pill-active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </OsInteriorSection>

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Visible channels" value={`${visibleLinks.length}`} detail="Top-priority preview links" tone="accent" />
          <OsMetricCard label="Current group" value={selectedGroup} detail="Channel grouping" tone="success" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Connect Hub"
          title="A cleaner contact and next-action workspace."
          intro="The goal here is clarity: channel purpose, visibility, and a controlled invitation to the right next step."
          side={<StatusBadge variant="neutral">Placeholder-safe channels</StatusBadge>}
        >
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="os-preview-note">
              <div className="os-preview-kicker">Routing note</div>
              <p className="os-preview-summary mt-2">
                Public-facing and restricted contact routes are intentionally staged. Real outreach endpoints can be connected later without changing this interior structure.
              </p>
            </div>
            <div className="os-preview-note">
              <div className="os-preview-kicker">Priority window</div>
              <p className="os-preview-summary mt-2">
                This interior emphasizes the first few relevant channels instead of surfacing a giant directory. It stays useful on mobile and inside the dock-cleared window body.
              </p>
            </div>
          </div>
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Channel Cards"
          title="Available preview routes"
          intro="Channels remain clearly marked as preview-safe until real routing and outreach logic are introduced."
        >
          {visibleLinks.length > 0 ? (
            <div className="os-preview-grid">
              {visibleLinks.map((item) => (
                <OsPreviewCard
                  key={item.id}
                  eyebrow={item.group}
                  title={item.label}
                  summary={item.purpose}
                  badges={
                    <>
                      <StatusBadge variant="primary" size="sm">{item.platform}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.visibility}</StatusBadge>
                    </>
                  }
                  meta={<StatusBadge variant="neutral" size="sm">Priority {item.priority}</StatusBadge>}
                  note={item.cautionNote ? `Caution: ${item.cautionNote}` : `Channel marker: ${item.iconName}`}
                  actions={
                    <div className="os-preview-actions">
                      <PremiumButton variant="ghost" disabled>
                        Channel Placeholder
                      </PremiumButton>
                    </div>
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No channels match the current search and group filter.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
