import React from 'react'
import { founderProfile } from '../content/founder.content'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

const summaryCards = [
  {
    title: 'Public Summary',
    text: founderProfile.publicSummary
  },
  {
    title: 'Investor Summary',
    text: founderProfile.investorSummary
  },
  {
    title: 'Recovery & iMED',
    text: founderProfile.recoverySummary
  }
]

export default function FounderBriefApp() {
  return (
    <div className="space-y-6">
      <GlassPanel size="lg" animate={false}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="eyebrow">Founder Brief</div>
            <h2 className="mt-4 text-display text-white">Jonathan Blackburn</h2>
            <p className="mt-4 text-body">{founderProfile.mediumBio}</p>
          </div>
          <GlassPanel size="md" animate={false} tone="muted" className="max-w-sm">
            <p className="text-caption">Positioning</p>
            <p className="mt-3 text-heading-sm text-white">{founderProfile.positioningLine}</p>
          </GlassPanel>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div key={card.title} className="card h-full">
            <h3 className="text-heading-sm text-white">{card.title}</h3>
            <p className="mt-3 text-body">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <GlassPanel size="md" animate={false}>
          <h3 className="text-heading-sm text-white">Key story points</h3>
          <ul className="mt-4 space-y-3 text-body">
            <li>Technical foundation in electronics and automation.</li>
            <li>Evidence-led ventures with recovery and healthcare focus.</li>
            <li>Operating under pressure with human-centred AI systems.</li>
          </ul>
        </GlassPanel>
        <GlassPanel size="md" animate={false} tone="muted">
          <h3 className="text-heading-sm text-white">Next step</h3>
          <p className="mt-3 text-body">GTR3 is being prepared as the next public layer for decision systems, trusted recovery, and executive-level resilience.</p>
          <div className="mt-4">
            <StatusBadge variant="warning">Coming Soon</StatusBadge>
          </div>
        </GlassPanel>
      </div>

      <div className="flex flex-wrap gap-3">
        <PremiumButton variant="primary">Explore Timeline</PremiumButton>
        <PremiumButton variant="secondary">Request Collaboration</PremiumButton>
      </div>
    </div>
  )
}
