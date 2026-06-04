import React from 'react'
import { feedPosts } from '../content/feed.content'
import FeedPostCard from '../components/cards/FeedPostCard'
import { GlassPanel, PremiumButton, SectionHeader } from '../components/primitives'

const featuredPost = feedPosts[0]

export default function PublicFeedSection() {
  return (
    <section className="section text-white">
      <div className="container-shell">
        <GlassPanel size="lg" animate={false} className="section-frame">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow="Signal Layer"
              title="Public Feed"
              subtitle="Curated signals, founder commentary, product updates, and practical systems thinking."
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3">
              <PremiumButton variant="accent">Read Latest</PremiumButton>
              <PremiumButton variant="secondary">Follow Updates</PremiumButton>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="glass-panel-lg">
              <div className="text-caption">Featured Post</div>
              <h3 className="mt-4 text-heading text-white">{featuredPost.title}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-body-sm">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="mt-6 text-body">{featuredPost.summary}</p>
              <p className="meta-note mt-6">Jonathan’s Take: {featuredPost.jonathanTake}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PremiumButton variant="accent">Read Post</PremiumButton>
                <PremiumButton variant="ghost">View Source</PremiumButton>
              </div>
            </div>

            <div className="glass-panel-lg panel-muted">
              {feedPosts.slice(1).map((post) => (
                <FeedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
