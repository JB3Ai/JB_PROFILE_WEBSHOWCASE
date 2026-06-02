import React, { useMemo, useState } from 'react'
import { evidenceItems } from '../content/evidence.content'
import EvidenceCard from '../components/cards/EvidenceCard'

const categories = [
  'All',
  'CV & Resume',
  'Skills & Technical Stack',
  'Awards',
  'Certificates',
  'Business Proof',
  'Recommendations',
  'Investor Vault',
  'Historical Archive'
]

export default function EvidenceVaultApp() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return evidenceItems.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl bg-surface/80 border border-white/10 p-5 shadow-lg text-white">
        <div className="mb-5">
          <h3 className="text-lg font-semibold">Evidence Vault</h3>
          <p className="mt-2 text-sm text-gray-300">Browse evidence, awards, certifications, and investor materials.</p>
        </div>
        <input
          type="search"
          value={search}
          placeholder="Search evidence"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-500"
        />
        <div className="mt-5 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`w-full rounded-2xl px-3 py-2 text-left text-sm ${category === cat ? 'bg-sky-500 text-black' : 'bg-white/5 text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </aside>

      <div className="space-y-6">
        <div className="rounded-3xl bg-surface/80 border border-white/10 p-6 shadow-lg">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm text-cyan-300">Evidence Vault</div>
              <h3 className="text-2xl font-semibold text-white">Structured evidence, investor proof, and locked records.</h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <button className="rounded-2xl bg-sky-500 px-4 py-2 text-black">Request Access</button>
              <button className="rounded-2xl bg-white/10 px-4 py-2 text-white">View Investigator Notes</button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
