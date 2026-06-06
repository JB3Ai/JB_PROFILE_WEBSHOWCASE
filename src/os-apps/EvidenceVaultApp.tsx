import React, { useMemo, useState } from 'react'
import { evidenceItems } from '../content/evidence.content'
import EvidenceCard from '../components/cards/EvidenceCard'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

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
      <GlassPanel size="md" animate={false} className="h-fit">
        <div className="mb-5">
          <h3 className="text-heading-sm text-white">Evidence Vault</h3>
          <p className="mt-2 text-body-sm">Browse evidence, awards, certifications, and investor materials.</p>
        </div>
        <input
          type="search"
          value={search}
          placeholder="Search evidence"
          onChange={(e) => setSearch(e.target.value)}
          className="input-shell"
        />
        <div className="mt-5 space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`filter-pill w-full text-left ${category === cat ? 'filter-pill-active' : ''}`}>
              {cat}
            </button>
          ))}
        </div>
      </GlassPanel>

      <div className="space-y-6">
        <GlassPanel size="lg" animate={false}>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <StatusBadge variant="primary">Evidence Vault</StatusBadge>
              <h3 className="mt-4 text-heading text-white">Structured evidence, investor proof, and locked records.</h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <PremiumButton variant="primary">Request Access</PremiumButton>
              <PremiumButton variant="secondary">Review Notes</PremiumButton>
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
