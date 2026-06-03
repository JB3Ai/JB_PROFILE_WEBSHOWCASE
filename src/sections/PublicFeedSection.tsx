import React from 'react'
import { feedPosts } from '../content/feed.content'
import FeedPostCard from '../components/cards/FeedPostCard'

const featuredPost = feedPosts[0]

export default function PublicFeedSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Public Feed</h2>
              <p className="mt-3 text-gray-400 max-w-2xl">
                Curated signals, founder commentary, product updates, and practical systems thinking.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-amber-400 px-5 py-3 text-black">Read Latest</button>
              <button className="rounded-full bg-white/10 px-5 py-3 text-white">Follow Updates</button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Featured Post</div>
              <h3 className="mt-4 text-3xl font-semibold">{featuredPost.title}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="mt-6 text-gray-300 leading-7">{featuredPost.summary}</p>
              <p className="mt-6 rounded-3xl bg-white/5 p-4 text-sm text-gray-200">Jonathan’s Take: {featuredPost.jonathanTake}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-3xl bg-amber-400 px-5 py-3 text-black">Read Post</button>
                <button className="rounded-3xl bg-white/10 px-5 py-3 text-white">View Source</button>
              </div>
            </div>

            <div className="grid gap-6">
              {feedPosts.slice(1).map((post) => (
                <FeedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
