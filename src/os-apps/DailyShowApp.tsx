import React, { useMemo, useState } from 'react'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import DailyShowCard from '../components/cards/DailyShowCard'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

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

  return (
    <div className="space-y-8">
      <GlassPanel size="lg" animate={false}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="eyebrow">JB³ Daily Show</div>
            <h2 className="mt-2 text-heading text-white">Featured Episode</h2>
            <p className="mt-3 max-w-2xl text-body">A spotlight on the newest episode with video and note placeholders to keep the experience safe.</p>
          </div>
          <GlassPanel size="md" animate={false} tone="muted">
            <div className="text-caption text-amber-200">Episode {featured.episodeNumber}</div>
            <div className="mt-2 text-heading-sm text-white">{featured.title}</div>
          </GlassPanel>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <GlassPanel size="md" animate={false} tone="muted">
            <h3 className="text-heading-sm text-white">{featured.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <StatusBadge variant="neutral" size="sm">{featured.category}</StatusBadge>
              <StatusBadge variant="primary" size="sm">{featured.status}</StatusBadge>
              <StatusBadge variant="warning" size="sm">{featured.date}</StatusBadge>
            </div>
            <p className="mt-5 text-body">{featured.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PremiumButton variant="accent">Watch Video</PremiumButton>
              <PremiumButton variant="secondary">Read Notes</PremiumButton>
            </div>
          </GlassPanel>
          <GlassPanel size="md" animate={false}>
            <div className="text-caption text-amber-200">Notes preview</div>
            <p className="mt-4 text-body">{featured.articleNotes}</p>
            <div className="meta-note mt-6">
              Video URL is a placeholder, designed for safe review without live media.
            </div>
          </GlassPanel>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <GlassPanel size="md" animate={false} tone="muted" className="h-fit">
          <div className="mb-5 text-caption text-amber-200">Filter by category</div>
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
                <div className="eyebrow">Search episodes</div>
                <p className="mt-2 text-body-sm">Search titles, summaries, and tags.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Daily Show"
                className="input-shell sm:w-80"
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6">
            {filteredEpisodes.map((episode) => (
              <DailyShowCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
