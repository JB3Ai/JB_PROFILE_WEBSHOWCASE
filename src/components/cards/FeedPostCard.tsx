import React from 'react'
import type { FeedPost } from '../../content/feed.content'

type FeedPostCardProps = {
  post: FeedPost
  onRead?: (post: FeedPost) => void
}

export default function FeedPostCard({ post, onRead }: FeedPostCardProps) {
  return (
    <div className="card card-interactive p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <div className="mt-2">
            <span className="badge-neutral text-xs px-2 py-1">{post.category}</span>
          </div>
        </div>
        <div className="text-right text-xs text-gray-400">
          <div>{post.date}</div>
          <div>{post.readTime}</div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-300">{post.summary}</p>
      <p className="mt-3 rounded-lg bg-black/40 px-3 py-2 text-sm text-gray-200 italic">Jonathan's Take: {post.jonathanTake}</p>
      <div className="mt-5 flex flex-wrap gap-2 items-center justify-between">
        <div className="text-xs text-gray-400">Source: {post.sourceLabel}</div>
        <button
          onClick={() => onRead?.(post)}
          className="btn-accent"
        >
          Read
        </button>
      </div>
    </div>
  )
}
