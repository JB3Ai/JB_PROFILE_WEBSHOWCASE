import React, { useMemo, useState } from 'react'
import { feedPosts } from '../content/feed.content'
import FeedPostCard from '../components/cards/FeedPostCard'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

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
    <div className="space-y-8">
      <GlassPanel size="lg" animate={false}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="eyebrow">Public Feed</div>
            <h2 className="mt-2 text-heading text-white">Featured Post</h2>
            <p className="mt-3 max-w-2xl text-body">A public feed for curated signals, founder commentary, product updates, and business thinking.</p>
          </div>
          <GlassPanel size="md" animate={false} tone="muted">
            <div className="text-caption">Latest Insight</div>
            <div className="mt-3 text-heading-sm text-white">{featured.title}</div>
          </GlassPanel>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <GlassPanel size="md" animate={false} tone="muted">
            <StatusBadge variant="primary">{featured.category}</StatusBadge>
            <h3 className="mt-4 text-heading text-white">{featured.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge variant="neutral" size="sm">{featured.date}</StatusBadge>
              <StatusBadge variant="neutral" size="sm">{featured.readTime}</StatusBadge>
            </div>
            <p className="mt-5 text-body">{featured.summary}</p>
            <p className="meta-note mt-6">Jonathan’s Take: {featured.jonathanTake}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PremiumButton variant="accent">Read Post</PremiumButton>
              <PremiumButton variant="secondary">Source Placeholder</PremiumButton>
            </div>
          </GlassPanel>

          <GlassPanel size="md" animate={false}>
            <div className="text-caption">Impact Summary</div>
            <p className="mt-4 text-body">{featured.businessImpact}</p>
            <div className="meta-note mt-6">
              Source URL is a placeholder and is intentionally not linked to a real site.
            </div>
          </GlassPanel>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <GlassPanel size="md" animate={false} tone="muted" className="h-fit">
          <div className="mb-5 text-caption">Filter by category</div>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-pill w-full text-left ${selectedCategory === category ? 'filter-pill-active' : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <GlassPanel size="md" animate={false}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="eyebrow">Search feed</div>
                <p className="mt-2 text-body-sm">Search titles, summaries, takes, and tags.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Public Feed"
                className="input-shell sm:w-80"
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
