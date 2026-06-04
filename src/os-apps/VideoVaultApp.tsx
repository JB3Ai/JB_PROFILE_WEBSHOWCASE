import React, { useMemo, useState } from 'react'
import { videos } from '../content/videos.content'
import VideoCard from '../components/cards/VideoCard'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

const categories = ['All', 'Founder Briefing', 'Product Demo', 'Project Walkthrough', 'Product Profile', 'GTR3', 'Media']

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

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <GlassPanel size="md" animate={false} className="h-fit">
        <div className="mb-5">
          <h3 className="text-heading-sm text-white">Video Vault</h3>
          <p className="mt-2 text-body-sm">Filter by category or search video content.</p>
        </div>
        <input
          type="search"
          placeholder="Search videos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-shell"
        />
        <div className="mt-5 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-pill w-full text-left ${category === cat ? 'filter-pill-active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </GlassPanel>

      <div className="space-y-6">
        <GlassPanel size="lg" animate={false}>
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <StatusBadge variant="primary">Featured</StatusBadge>
              <h3 className="mt-4 text-heading text-white">{featured.title}</h3>
              <p className="mt-3 text-body">{featured.summary}</p>
              <div className="mt-4 flex gap-3">
                <PremiumButton variant="primary">Watch</PremiumButton>
                {featured.relatedProjectId ? <PremiumButton variant="secondary">Related Project</PremiumButton> : null}
              </div>
            </div>
            <div className="flex h-52 items-center justify-center rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(88,214,218,0.16),rgba(6,12,18,0.1)),rgba(7,14,21,0.78)] text-slate-400">Featured video placeholder</div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
