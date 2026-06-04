import React from 'react'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import DailyShowCard from '../components/cards/DailyShowCard'
import { GlassPanel, PremiumButton, SectionHeader } from '../components/primitives'

const featuredEpisode = dailyShowEpisodes[0]

export default function DailyShowSection() {
  return (
    <section className="section text-white">
      <div className="container-shell">
        <GlassPanel size="lg" animate={false} className="section-frame">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow="Broadcast Layer"
              title="JB³ Daily Show"
              subtitle="Video-first founder briefings, AI notes, build logs, and systems thinking."
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3">
              <PremiumButton variant="success">Watch Latest</PremiumButton>
              <PremiumButton variant="secondary">View Show Notes</PremiumButton>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="glass-panel-lg">
              <div className="text-caption text-amber-200">Featured Episode</div>
              <h3 className="mt-4 text-heading text-white">{featuredEpisode.title}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-body-sm">
                <span>{featuredEpisode.category}</span>
                <span>•</span>
                <span>{featuredEpisode.status}</span>
                <span>•</span>
                <span>{featuredEpisode.date}</span>
              </div>
              <p className="mt-6 text-body">{featuredEpisode.summary}</p>
              <p className="meta-note mt-6">Show Notes Preview: {featuredEpisode.articleNotes}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PremiumButton variant="success">Watch Episode</PremiumButton>
                <PremiumButton variant="ghost">Read Notes</PremiumButton>
              </div>
            </div>

            <div className="grid gap-6">
              {dailyShowEpisodes.slice(1).map((episode) => (
                <DailyShowCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
