import React, { useMemo, useState } from 'react'
import { videos } from '../content/videos.content'
import VideoCard from '../components/cards/VideoCard'

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
      <aside className="rounded-3xl bg-surface/80 p-4 border border-white/10 shadow-lg text-white">
        <div className="mb-5">
          <h3 className="text-lg font-semibold">Video Vault</h3>
          <p className="mt-2 text-sm text-gray-300">Filter by category or search video content.</p>
        </div>
        <input
          type="search"
          placeholder="Search videos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black/20 p-3 text-white placeholder:text-gray-500"
        />
        <div className="mt-5 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`w-full rounded-xl px-3 py-2 text-left text-sm ${category === cat ? 'bg-sky-500 text-black' : 'bg-white/5 text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <div className="space-y-6">
        <div className="rounded-3xl bg-surface/80 border border-white/10 p-6 shadow-lg">
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <div className="text-sm text-cyan-300">Featured</div>
              <h3 className="text-2xl font-semibold text-white mt-2">{featured.title}</h3>
              <p className="mt-3 text-gray-300">{featured.summary}</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-sky-500 text-black rounded">Watch</button>
                {featured.relatedProjectId && <button className="px-4 py-2 bg-white/10 text-white rounded">Related Project</button>}
              </div>
            </div>
            <div className="h-52 rounded-3xl bg-slate-900/90 flex items-center justify-center text-slate-400">Featured video placeholder</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
