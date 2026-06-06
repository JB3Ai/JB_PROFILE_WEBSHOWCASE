import React, { useMemo, useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const categories = ['All', ...Array.from(new Set(dailyShowEpisodes.map((episode) => episode.category)))]

export default function DailyShowApp() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredEpisodes = useMemo(() => {
    const term = search.toLowerCase()
    return dailyShowEpisodes.filter((episode) => {
      const matchesCategory = selectedCategory === 'All' || episode.category === selectedCategory
      const matchesSearch =
        episode.title.toLowerCase().includes(term) ||
        episode.summary.toLowerCase().includes(term) ||
        episode.tags.some((tag) => tag.toLowerCase().includes(term))
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const featured = dailyShowEpisodes[0]
  const filteredWithoutFeatured = filteredEpisodes.filter((episode) => episode.id !== featured.id)

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Broadcast Controls"
          title="Episode filters"
          intro="This broadcast surface is intentionally framed as a preview environment rather than a live media property."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search Daily Show previews"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Daily Show"
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

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Episodes" value={`${filteredEpisodes.length}`} detail="Filtered previews" tone="accent" />
          <OsMetricCard label="Broadcast state" value="Preview only" detail="No live media feed" tone="warning" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="JB³ Daily Show"
          title="A cleaner broadcast surface for episode previews and note layers."
          intro="The emphasis here is curation and review, not fake-live theatre. The lead episode gets space; the rest behave like structured broadcast cards."
          side={<StatusBadge variant="warning">Episode {featured.episodeNumber}</StatusBadge>}
        >
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_320px]">
            <OsPreviewCard
              eyebrow={featured.category}
              title={featured.title}
              summary={featured.summary}
              mediaSrc={featured.thumbnail}
              fallbackMediaSrc={assetRegistry.dailyShowPlaceholder}
              mediaAlt={`${featured.title} episode placeholder`}
              mediaClassName="h-60"
              badges={
                <>
                  <StatusBadge variant="warning" size="sm">Episode {featured.episodeNumber}</StatusBadge>
                  <StatusBadge variant="primary" size="sm">{featured.status}</StatusBadge>
                </>
              }
              meta={
                <>
                  <StatusBadge variant="neutral" size="sm">{featured.date}</StatusBadge>
                  <StatusBadge variant="neutral" size="sm">{featured.access}</StatusBadge>
                </>
              }
              note={featured.articleNotes}
              actions={
                <OsActionStrip
                  title="Episode actions"
                  note="Video and notes routes remain disabled until a real broadcast pipeline exists."
                  actions={
                    <>
                      <PremiumButton variant="accent" disabled>
                        Watch Placeholder
                      </PremiumButton>
                      <PremiumButton variant="secondary" disabled>
                        Notes Placeholder
                      </PremiumButton>
                    </>
                  }
                />
              }
              tone="feature"
            />
            <div className="os-preview-note">
              <div className="os-preview-kicker">Broadcast note</div>
              <p className="os-preview-summary mt-2">
                This module is intentionally framed as a preview broadcast surface. No live video, streaming claims, or active newsroom behaviors are exposed in the current build.
              </p>
            </div>
          </div>
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Episode Library"
          title="Supporting episode previews"
          intro="Supporting episodes retain the same review language with clearer placeholder markers and lighter metadata."
        >
          {filteredWithoutFeatured.length > 0 ? (
            <div className="os-preview-grid">
              {filteredWithoutFeatured.map((episode) => (
                <OsPreviewCard
                  key={episode.id}
                  eyebrow={`Episode ${episode.episodeNumber}`}
                  title={episode.title}
                  summary={episode.summary}
                  mediaSrc={episode.thumbnail}
                  fallbackMediaSrc={assetRegistry.dailyShowPlaceholder}
                  mediaAlt={`${episode.title} preview placeholder`}
                  mediaClassName="h-44"
                  badges={
                    <>
                      <StatusBadge variant="primary" size="sm">{episode.status}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{episode.category}</StatusBadge>
                    </>
                  }
                  meta={<StatusBadge variant="neutral" size="sm">{episode.date}</StatusBadge>}
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
            <div className="os-preview-note">No additional episode previews match the current filters.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
