import React from 'react'
import { investorRecords } from '../content/investor.content'
import InvestorCard from '../components/cards/InvestorCard'

const publicCards = investorRecords.filter((record) => record.accessLevel === 'Public')
const vaultCards = investorRecords.filter((record) => ['financial-commercial-pack', 'founder-due-diligence-pack', 'product-strategy-pack'].includes(record.id))

export default function InvestorRoomSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Investor Room</h2>
              <p className="mt-3 text-gray-400 max-w-2xl">
                Public overview, proof points, and controlled-access documents for verified review.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-amber-400 px-5 py-3 text-black">Request Investor Access</button>
              <button className="rounded-full bg-white/10 px-5 py-3 text-white">Open Public Overview</button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {publicCards.map((item) => (
              <InvestorCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-inner">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">Vault Preview</h3>
                <p className="mt-2 text-gray-400 max-w-2xl">
                  A controlled preview of locked financial, due diligence, and product strategy assets.
                </p>
              </div>
              <div className="rounded-3xl bg-black/40 px-4 py-3 text-sm text-gray-200">Secure review layer</div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {vaultCards.map((item) => (
                <div key={item.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{item.category}</p>
                    <span className="rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gray-200">{item.accessLevel}</span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-3 text-sm text-gray-300">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-white">Request Access</button>
                    <button className="rounded-3xl bg-white/10 px-4 py-2 text-sm text-white">Preview</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
