import React from 'react'
import { founderProfile } from '../content/founder.content'

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
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Founder Brief</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">Jonathan Blackburn</h2>
            <p className="mt-4 text-gray-300">{founderProfile.mediumBio}</p>
          </div>
          <div className="rounded-3xl bg-black/40 p-6 text-white shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Positioning</p>
            <p className="mt-3 text-xl font-semibold">{founderProfile.positioningLine}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {summaryCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-gray-300">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white">Key story points</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>Technical foundation in electronics and automation.</li>
            <li>Evidence-led ventures with recovery and healthcare focus.</li>
            <li>Operating under pressure with human-centred AI systems.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white">Next step</h3>
          <p className="mt-3 text-gray-300">GTR3 is being prepared as the next public layer for decision systems, trusted recovery, and executive-level resilience.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-full bg-sky-500 px-5 py-3 text-black">Explore Timeline</button>
        <button className="rounded-full bg-white/10 px-5 py-3 text-white">Request Collaboration</button>
      </div>
    </div>
  )
}
