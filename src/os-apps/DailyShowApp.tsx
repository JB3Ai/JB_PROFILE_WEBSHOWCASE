import React, { useMemo, useState } from 'react'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import DailyShowCard from '../components/cards/DailyShowCard'

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
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-amber-300">JB³ Daily Show</div>
            <h2 className="mt-2 text-3xl font-semibold">Featured Episode</h2>
            <p className="mt-3 text-gray-300 max-w-2xl">A spotlight on the newest episode with video and note placeholders to keep the experience safe.</p>
          </div>
          <div className="rounded-3xl bg-black/30 p-5 text-gray-200 border border-white/10 shadow-lg">
            <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Episode {featured.episodeNumber}</div>
            <div className="mt-2 text-lg font-semibold">{featured.title}</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-xl font-semibold">{featured.title}</h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
              <span>{featured.category}</span>
              <span>•</span>
              <span>{featured.status}</span>
              <span>•</span>
              <span>{featured.date}</span>
            </div>
            <p className="mt-5 text-gray-300">{featured.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-3xl bg-amber-400 px-5 py-3 text-black">Watch Video</button>
              <button className="rounded-3xl bg-white/10 px-5 py-3 text-white">Read Notes</button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Notes preview</div>
            <p className="mt-4 text-gray-300 leading-7">{featured.articleNotes}</p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/10 p-4 text-sm text-gray-200">
              Video URL is a placeholder, designed for safe review without live media.
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-lg">
          <div className="mb-5 text-sm uppercase tracking-[0.24em] text-amber-300">Filter by category</div>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm ${selectedCategory === category ? 'bg-amber-400 text-black' : 'bg-white/5 text-white'}`}>
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Search episodes</div>
                <p className="mt-2 text-gray-400">Search titles, summaries, and tags.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Daily Show"
                className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 sm:w-80"
              />
            </div>
          </div>

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
