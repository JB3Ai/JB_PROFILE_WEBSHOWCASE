import React from 'react'
import { founderProfile } from '../content/founder.content'

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
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Founder Brief</h2>
              <p className="mt-3 text-cyan-300">{founderProfile.positioningLine}</p>
              <p className="mt-4 text-gray-300 max-w-2xl">{founderProfile.publicSummary}</p>
              <blockquote className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6 text-xl italic text-gray-100">
                {founderProfile.coreQuote}
              </blockquote>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {summaryCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-gray-300">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-sky-500 px-5 py-3 text-black">Open Founder Brief</button>
              <button className="rounded-full bg-white/10 px-5 py-3 text-white">View Timeline</button>
              <button className="rounded-full bg-gray-700 px-5 py-3 text-white">Download CV placeholder</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
