import React, { useMemo, useState } from 'react'
import { feedPosts } from '../content/feed.content'
import FeedPostCard from '../components/cards/FeedPostCard'

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
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Public Feed</div>
            <h2 className="mt-2 text-3xl font-semibold">Featured Post</h2>
            <p className="mt-3 text-gray-300 max-w-2xl">A public feed for curated signals, founder commentary, product updates, and business thinking.</p>
          </div>
          <div className="rounded-3xl bg-black/30 p-5 text-gray-200 border border-white/10 shadow-lg">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Latest Insight</div>
            <div className="mt-3 text-lg font-semibold">{featured.title}</div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">{featured.category}</div>
            <h3 className="mt-4 text-3xl font-semibold">{featured.title}</h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
            <p className="mt-5 text-gray-300">{featured.summary}</p>
            <p className="mt-6 rounded-3xl bg-white/5 p-4 text-sm text-gray-200">Jonathan’s Take: {featured.jonathanTake}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-3xl bg-amber-400 px-5 py-3 text-black">Read Post</button>
              <button className="rounded-3xl bg-white/10 px-5 py-3 text-white">Source Placeholder</button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Impact Summary</div>
            <p className="mt-4 text-gray-300 leading-7">{featured.businessImpact}</p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/10 p-4 text-sm text-gray-200">
              Source URL is a placeholder and is intentionally not linked to a real site.
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-lg">
          <div className="mb-5 text-sm uppercase tracking-[0.24em] text-cyan-300">Filter by category</div>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm ${selectedCategory === category ? 'bg-cyan-300 text-black' : 'bg-white/5 text-white'}`}>
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Search feed</div>
                <p className="mt-2 text-gray-400">Search titles, summaries, takes, and tags.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Public Feed"
                className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 sm:w-80"
              />
            </div>
          </div>

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
