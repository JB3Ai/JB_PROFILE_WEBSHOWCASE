import React from 'react'
import type { FeedPost } from '../../content/feed.content'

type FeedPostCardProps = {
  post: FeedPost
  onRead?: (post: FeedPost) => void
}

export default function FeedPostCard({ post, onRead }: FeedPostCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <div className="mt-2 text-sm text-gray-400">{post.category}</div>
        </div>
        <div className="text-right text-sm text-gray-400">
          <div>{post.date}</div>
          <div>{post.readTime}</div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-gray-300">{post.summary}</p>
      <p className="mt-4 rounded-3xl bg-black/40 px-4 py-3 text-sm text-gray-200">Jonathan’s Take: {post.jonathanTake}</p>
      <div className="mt-5 flex flex-wrap gap-3 items-center justify-between">
        <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Source: {post.sourceLabel}</div>
        <button
          onClick={() => onRead?.(post)}
          className="rounded-3xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black"
        >
          Read
        </button>
      </div>
    </div>
  )
}
