import React from 'react'
import { evidenceItems } from '../content/evidence.content'
import EvidenceCard from '../components/cards/EvidenceCard'

const visibleItems = evidenceItems.filter((item) => item.visibility === 'Public' || item.visibility === 'Public Preview').slice(0, 6)

export default function EvidencePreviewSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Evidence Vault</h2>
            <p className="mt-2 text-gray-400">Verified documents, awards, certificates, recommendations, and historical proof layers.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-sky-500 px-4 py-2 text-black">Open Evidence Vault</button>
            <button className="rounded-full bg-white/10 px-4 py-2 text-white">Request Investor Access</button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
