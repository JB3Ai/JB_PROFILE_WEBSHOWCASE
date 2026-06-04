import React from 'react'
import type { FeedPost } from '../../content/feed.content'
import { PremiumButton, StatusBadge } from '../primitives'

type FeedPostCardProps = {
  post: FeedPost
  onRead?: (post: FeedPost) => void
}

export default function FeedPostCard({ post, onRead }: FeedPostCardProps) {
  return (
    <div className="card card-interactive h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-caption">Public Feed</p>
          <h3 className="mt-3 text-heading-sm text-white">{post.title}</h3>
          <div className="mt-3">
            <StatusBadge variant="neutral" size="sm">{post.category}</StatusBadge>
          </div>
        </div>
        <div className="text-right text-caption">
          <div>{post.date}</div>
          <div>{post.readTime}</div>
        </div>
      </div>

      <p className="mt-4 text-body">{post.summary}</p>
      <p className="meta-note mt-4 italic">Jonathan's Take: {post.jonathanTake}</p>
      <div className="mt-5 flex flex-wrap gap-2 items-center justify-between">
        <div className="text-body-sm">Source: {post.sourceLabel}</div>
        <PremiumButton onClick={() => onRead?.(post)} variant="accent">
          Read
        </PremiumButton>
      </div>
    </div>
  )
}
