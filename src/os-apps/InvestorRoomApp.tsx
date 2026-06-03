import React, { useMemo, useState } from 'react'
import { investorRecords } from '../content/investor.content'
import InvestorCard from '../components/cards/InvestorCard'

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
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr] p-8">
        <aside className="space-y-6 rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-2xl">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-emerald-300">Investor Room</div>
            <h1 className="mt-3 text-3xl font-semibold">Executive Investor Dashboard</h1>
            <p className="mt-4 text-gray-300">A structured review layer for trusted investor overview, proof, and controlled access documents.</p>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-5">
            <h2 className="text-lg font-semibold">Category filter</h2>
            <div className="grid gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full rounded-3xl px-4 py-3 text-left text-sm ${selectedCategory === category ? 'bg-emerald-400 text-black' : 'bg-white/5 text-white'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-white/10 bg-black/40 p-5">
            <h2 className="text-lg font-semibold">Review actions</h2>
            <button onClick={() => setPanel('request')} className="w-full rounded-3xl bg-amber-400 px-4 py-3 text-black">Request Investor Access</button>
            <button onClick={() => setPanel('pin')} className="w-full rounded-3xl bg-white/10 px-4 py-3 text-white">Enter PIN Placeholder</button>
          </div>
        </aside>

        <main className="space-y-8">
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Public overview panel</div>
                <h2 className="mt-2 text-3xl font-semibold">Verified public insights</h2>
              </div>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search investor items"
                className="w-full rounded-3xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-gray-500 sm:w-80"
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {publicOverview.map((item) => (
                <InvestorCard key={item.id} item={item} onAction={handleAction} />
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-2xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-emerald-300">Locked document vault</div>
                <h2 className="mt-2 text-3xl font-semibold">Controlled access documents</h2>
              </div>
              <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-gray-200">{lockedDocuments.length} items</div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {lockedDocuments.map((item) => (
                <InvestorCard key={item.id} item={item} onAction={handleAction} />
              ))}
            </div>
          </div>

          {panel !== 'none' ? (
            <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/5 p-8 text-white shadow-2xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-emerald-300">Access placeholder</div>
                  <h3 className="mt-2 text-2xl font-semibold">{panel === 'open' ? 'Public document preview' : panel === 'request' ? 'Investor access request' : 'PIN entry required'}</h3>
                </div>
                <button onClick={() => setPanel('none')} className="rounded-3xl bg-white/10 px-4 py-3 text-sm text-white">Close panel</button>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6 text-sm leading-7 text-gray-200">
                {panel === 'open' && (
                  <>
                    <p>“{activeItem.title}” is a public review asset. Real files are not available yet; this is a safe preview placeholder.</p>
                    <p className="mt-4 text-gray-400">Status: {activeItem.status}. Document type: {activeItem.documentType}.</p>
                  </>
                )}
                {panel === 'request' && (
                  <>
                    <p>This placeholder simulates an investor access request. Actual approval, secure review, and document delivery are not enabled yet.</p>
                    <p className="mt-4 text-gray-400">Submit your interest and await verification in the next milestone.</p>
                  </>
                )}
                {panel === 'pin' && (
                  <>
                    <p>Enter a PIN to unlock a secure preview layer. No PIN is validated in this placeholder mode.</p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <input
                        type="password"
                        placeholder="Enter PIN"
                        className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 sm:w-64"
                      />
                      <button className="rounded-3xl bg-amber-400 px-5 py-3 text-black">Submit PIN</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </div>
  )
}
