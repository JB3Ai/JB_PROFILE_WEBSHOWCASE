import React, { useMemo, useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { videos } from '../content/videos.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const categories = ['All', 'Founder Briefing', 'Product Demo', 'Project Walkthrough', 'Product Profile', 'GTR³', 'Media']

export default function VideoVaultApp() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory = category === 'All' || video.category === category
      const matchesSearch =
        video.title.toLowerCase().includes(search.toLowerCase()) ||
        video.summary.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  const featured = videos[0]
  const filteredWithoutFeatured = filtered.filter((video) => video.id !== featured.id)

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Video Vault"
          title="Preview controls"
          intro="Filter the library by category or keyword. This workspace stays placeholder-safe and does not imply live playback."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search video previews"
              placeholder="Search videos"
              value={search}
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
          <OsMetricCard label="Results" value={`${filtered.length}`} detail="Filtered preview items" tone="accent" />
          <OsMetricCard label="Playback state" value="Preview only" detail="No live media claims" tone="warning" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Featured Video"
          title="A clean preview library for founder briefings and project walkthroughs."
          intro="The vault now behaves like a review surface: one lead item, supporting previews underneath, and clear placeholder language."
          side={<StatusBadge variant="success">{featured.status}</StatusBadge>}
        >
          <OsPreviewCard
            eyebrow={featured.category}
            title={featured.title}
            summary={featured.summary}
            mediaSrc={featured.thumbnail}
            fallbackMediaSrc={assetRegistry.videoPlaceholder}
            mediaAlt={`${featured.title} video placeholder`}
            mediaClassName="h-64"
            badges={
              <>
                <StatusBadge variant="neutral" size="sm">{featured.duration}</StatusBadge>
                <StatusBadge variant="primary" size="sm">{featured.status}</StatusBadge>
              </>
            }
            note="Playback routes stay disabled in this milestone. The purpose here is layout, hierarchy, and safe media preview structure."
            actions={
              <OsActionStrip
                title="Video actions"
                note="Media controls remain placeholder-safe until real player wiring is added."
                actions={
                  <>
                    <PremiumButton variant="primary" disabled>
                      Watch Placeholder
                    </PremiumButton>
                    {featured.relatedProjectId ? (
                      <PremiumButton variant="secondary" disabled>
                        Related Project Placeholder
                      </PremiumButton>
                    ) : null}
                  </>
                }
              />
            }
            tone="feature"
          />
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Library Preview"
          title="Supporting media surfaces"
          intro="Supporting items keep the same calmer review language without pretending they are live broadcasts."
        >
          {filteredWithoutFeatured.length > 0 ? (
            <div className="os-preview-grid">
              {filteredWithoutFeatured.map((video) => (
                <OsPreviewCard
                  key={video.id}
                  eyebrow="Video Preview"
                  title={video.title}
                  summary={video.summary}
                  mediaSrc={video.thumbnail}
                  fallbackMediaSrc={assetRegistry.videoPlaceholder}
                  mediaAlt={`${video.title} preview placeholder`}
                  mediaClassName="h-44"
                  badges={
                    <>
                      <StatusBadge variant="neutral" size="sm">{video.category}</StatusBadge>
                      <StatusBadge variant="success" size="sm">{video.status}</StatusBadge>
                    </>
                  }
                  meta={
                    <>
                      <StatusBadge variant="neutral" size="sm">{video.duration}</StatusBadge>
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
            <div className="os-preview-note">No additional videos match the current filters.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
