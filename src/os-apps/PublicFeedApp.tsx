import React, { useMemo, useState } from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { feedPosts } from '../content/feed.content'
import { PremiumButton, StatusBadge } from '../components/primitives'

const categories = ['All', ...Array.from(new Set(feedPosts.map((post) => post.category)))]

export default function PublicFeedApp() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredPosts = useMemo(() => {
    const term = search.toLowerCase()
    return feedPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch =
        post.title.toLowerCase().includes(term) ||
        post.summary.toLowerCase().includes(term) ||
        post.jonathanTake.toLowerCase().includes(term) ||
        post.tags.some((tag) => tag.toLowerCase().includes(term))
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const featured = feedPosts[0]

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar">
        <OsInteriorSection
          eyebrow="Feed Controls"
          title="Signals and commentary"
          intro="Search and filter the curated feed without pushing it back toward a social-media grid."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <input
              type="search"
              aria-label="Search public feed items"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Public Feed"
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
          <OsMetricCard label="Visible signals" value={`${filteredPosts.length}`} detail="Filtered commentary posts" tone="accent" />
          <OsMetricCard label="Source posture" value="Curated" detail="No live feed claims" tone="success" />
        </div>
      </div>

      <div className="os-interior-stack">
        <OsInteriorSection
          eyebrow="Featured Signal"
          title="An executive commentary feed, not a social spam surface."
          intro="Posts stay structured around insight, business impact, and the founder take. The layout now reads as commentary review instead of a stream of generic cards."
          side={<StatusBadge variant="primary">{featured.category}</StatusBadge>}
        >
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_320px]">
            <OsPreviewCard
              eyebrow="Lead Post"
              title={featured.title}
              summary={featured.summary}
              badges={
                <>
                  <StatusBadge variant="neutral" size="sm">{featured.date}</StatusBadge>
                  <StatusBadge variant="neutral" size="sm">{featured.readTime}</StatusBadge>
                </>
              }
              note={`Jonathan's Take: ${featured.jonathanTake}`}
              actions={
                <OsActionStrip
                  title="Feed actions"
                  note="Source routing remains placeholder-safe. This is a structure pass, not a live media integration."
                  actions={
                    <>
                      <PremiumButton variant="accent" disabled>
                        Read Placeholder
                      </PremiumButton>
                      <PremiumButton variant="secondary" disabled>
                        Source Placeholder
                      </PremiumButton>
                    </>
                  }
                />
              }
              tone="feature"
            />
            <div className="os-preview-note">
              <div className="os-preview-kicker">Impact Summary</div>
              <p className="os-preview-summary mt-2">{featured.businessImpact}</p>
            </div>
          </div>
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Signal List"
          title="Supporting commentary"
          intro="Supporting items stay in a disciplined vertical rhythm with lighter metadata and clearer placeholder rules."
        >
          <div className="os-preview-list">
            {filteredPosts.map((post) => (
              <OsPreviewCard
                key={post.id}
                eyebrow={post.category}
                title={post.title}
                summary={post.summary}
                badges={
                  <>
                    <StatusBadge variant="neutral" size="sm">{post.date}</StatusBadge>
                    <StatusBadge variant="neutral" size="sm">{post.readTime}</StatusBadge>
                  </>
                }
                meta={<StatusBadge variant="primary" size="sm">{post.sourceLabel}</StatusBadge>}
                note={`Jonathan's Take: ${post.jonathanTake}`}
                actions={
                  <div className="os-preview-actions">
                    <PremiumButton variant="ghost" disabled>
                      Read Placeholder
                    </PremiumButton>
                  </div>
                }
                tone="muted"
              />
            ))}
          </div>
        </OsInteriorSection>
      </div>
    </div>
  )
}
