import React, { useMemo, useState } from 'react'
import { investorRecords } from '../content/investor.content'
import InvestorCard from '../components/cards/InvestorCard'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

const categories = ['All', ...Array.from(new Set(investorRecords.map((record) => record.category)))]

export default function InvestorRoomApp() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [panel, setPanel] = useState<'none' | 'request' | 'pin' | 'open'>('none')
  const [activeItem, setActiveItem] = useState(investorRecords[0])

  const filteredRecords = useMemo(() => {
    const term = search.toLowerCase()
    return investorRecords.filter((record) => {
      const matchesCategory = selectedCategory === 'All' || record.category === selectedCategory
      const matchesSearch =
        record.title.toLowerCase().includes(term) ||
        record.summary.toLowerCase().includes(term) ||
        record.tags.some((tag) => tag.toLowerCase().includes(term))
      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const lockedDocuments = investorRecords.filter((record) => record.accessLevel !== 'Public')
  const publicOverview = investorRecords.filter((record) => record.accessLevel === 'Public')

  const handleAction = (action: 'open' | 'request' | 'pin', item: typeof investorRecords[number]) => {
    setActiveItem(item)
    if (action === 'open') setPanel('open')
    else if (action === 'request') setPanel('request')
    else setPanel('pin')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] text-white">
        <GlassPanel size="md" animate={false} className="h-fit space-y-6">
          <div>
            <div className="eyebrow">Investor Room</div>
            <h1 className="mt-4 text-heading text-white">Executive Investor Dashboard</h1>
            <p className="mt-4 text-body">A structured review layer for trusted investor overview, proof, and controlled access documents.</p>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-5">
            <h2 className="text-heading-sm text-white">Category filter</h2>
            <div className="grid gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-pill w-full text-left ${selectedCategory === category ? 'filter-pill-active' : ''}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-5">
            <h2 className="text-heading-sm text-white">Review actions</h2>
            <PremiumButton onClick={() => setPanel('request')} variant="accent" className="w-full">Request Investor Access</PremiumButton>
            <PremiumButton onClick={() => setPanel('pin')} variant="secondary" className="w-full">Enter PIN Placeholder</PremiumButton>
          </div>
        </GlassPanel>

        <main className="space-y-8">
          <GlassPanel size="lg" animate={false} className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="eyebrow">Public overview panel</div>
                <h2 className="mt-2 text-heading text-white">Verified public insights</h2>
              </div>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search investor items"
                className="input-shell sm:w-80"
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {publicOverview.map((item) => (
                <InvestorCard key={item.id} item={item} onAction={handleAction} />
              ))}
            </div>
          </GlassPanel>

          <GlassPanel size="lg" animate={false} tone="muted">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="eyebrow">Locked document vault</div>
                <h2 className="mt-2 text-heading text-white">Controlled access documents</h2>
              </div>
              <StatusBadge variant="neutral">{lockedDocuments.length} items</StatusBadge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {lockedDocuments.map((item) => (
                <InvestorCard key={item.id} item={item} onAction={handleAction} />
              ))}
            </div>
          </GlassPanel>

          {panel !== 'none' ? (
            <GlassPanel size="lg" animate={false}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="eyebrow">Access placeholder</div>
                  <h3 className="mt-2 text-heading-sm text-white">{panel === 'open' ? 'Public document preview' : panel === 'request' ? 'Investor access request' : 'PIN entry required'}</h3>
                </div>
                <PremiumButton onClick={() => setPanel('none')} variant="secondary">Close panel</PremiumButton>
              </div>

              <div className="meta-note mt-6">
                {panel === 'open' && (
                  <>
                    <p>“{activeItem.title}” is a public review asset. Real files are not available yet; this is a safe preview placeholder.</p>
                    <p className="mt-4 text-[color:var(--text-dim)]">Status: {activeItem.status}. Document type: {activeItem.documentType}.</p>
                  </>
                )}
                {panel === 'request' && (
                  <>
                    <p>This placeholder simulates an investor access request. Actual approval, document review, and delivery are not enabled yet.</p>
                    <p className="mt-4 text-[color:var(--text-dim)]">Submit your interest and await verification in the next milestone.</p>
                  </>
                )}
                {panel === 'pin' && (
                  <>
                    <p>Enter a PIN to unlock the preview layer. No PIN is validated in this placeholder mode.</p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <input
                        type="password"
                        placeholder="Enter PIN"
                        className="input-shell sm:w-64"
                      />
                      <PremiumButton variant="accent">Submit PIN</PremiumButton>
                    </div>
                  </>
                )}
              </div>
            </GlassPanel>
          ) : null}
        </main>
    </div>
  )
}
