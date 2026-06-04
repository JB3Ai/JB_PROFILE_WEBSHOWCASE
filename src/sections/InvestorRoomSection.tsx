import React from 'react'
import { useNavigate } from 'react-router-dom'
import { investorRecords } from '../content/investor.content'
import InvestorCard from '../components/cards/InvestorCard'
import { GlassPanel, PremiumButton, SectionHeader, StatusBadge } from '../components/primitives'
import { scrollToSection } from '../utils/scrollToSection'

const publicCards = investorRecords.filter((record) => record.accessLevel === 'Public')
const vaultCards = investorRecords.filter((record) => ['financial-commercial-pack', 'founder-due-diligence-pack', 'product-strategy-pack'].includes(record.id))

export default function InvestorRoomSection() {
  const nav = useNavigate()

  return (
    <section id="investor-room" className="section section-anchor text-white">
      <div className="container-shell">
        <GlassPanel size="lg" className="section-frame">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow="Investor Review Layer"
              title="Investor Room"
              subtitle="Public overview, proof points, and controlled-access documents for verified review."
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3">
              <PremiumButton variant="accent" onClick={() => nav('/request-access')}>Request Investor Access</PremiumButton>
              <PremiumButton variant="secondary" onClick={() => scrollToSection('investor-room')}>Open Public Overview</PremiumButton>
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
                <h3 className="text-heading-sm text-white">Vault Preview</h3>
                <p className="mt-2 text-body-sm max-w-2xl">
                  A controlled preview of locked financial, due diligence, and product strategy assets.
                </p>
              </div>
              <StatusBadge variant="warning">Secure review layer</StatusBadge>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {vaultCards.map((item) => (
                <div key={item.id} className="card h-full">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-caption">{item.category}</p>
                    <StatusBadge variant="neutral" size="sm">{item.accessLevel}</StatusBadge>
                  </div>
                  <h4 className="mt-4 text-heading-sm text-white">{item.title}</h4>
                  <p className="mt-3 text-body-sm">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <PremiumButton variant="secondary" size="sm">Request Access</PremiumButton>
                    <PremiumButton variant="ghost" size="sm">Preview</PremiumButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
