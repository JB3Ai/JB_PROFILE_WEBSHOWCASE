import React from 'react'
import { founderProfile } from '../content/founder.content'
import { GlassPanel, PremiumButton, SectionHeader, StatusBadge } from '../components/primitives'

const summaryCards = [
  {
    title: 'Systems Builder',
    description: 'Designs resilient platforms from electronics and automation to AI-enabled operational frameworks.'
  },
  {
    title: 'Evidence-Led Founder',
    description: 'Builds trust with proof, documentation, and transparent systems rather than promises alone.'
  },
  {
    title: 'Human-Centred AI',
    description: 'Focuses on AI that supports recovery, real people, and executive decision-making under pressure.'
  }
]

export default function FounderBriefSection() {
  return (
    <section id="founder-brief" className="section text-white">
      <div className="container-shell">
        <GlassPanel size="lg" animate={false} className="section-frame">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Founder Profile"
              title="Founder Brief"
              subtitle={founderProfile.publicSummary}
            />

            <div className="flex flex-wrap gap-3">
              <StatusBadge variant="primary">Executive Story Layer</StatusBadge>
              <StatusBadge variant="success">{founderProfile.positioningLine}</StatusBadge>
            </div>

            <blockquote className="meta-note mt-6 text-xl italic text-white md:text-2xl">
                {founderProfile.coreQuote}
            </blockquote>

            <div className="grid gap-4 md:grid-cols-3">
              {summaryCards.map((card) => (
                <div key={card.title} className="card h-full">
                  <h3 className="text-heading-sm text-white">{card.title}</h3>
                  <p className="mt-4 text-body">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PremiumButton variant="primary">Open Founder Brief</PremiumButton>
              <PremiumButton variant="secondary">View Timeline</PremiumButton>
              <PremiumButton variant="ghost">CV Placeholder</PremiumButton>
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
