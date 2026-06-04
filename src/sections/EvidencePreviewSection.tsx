import React from 'react'
import { useNavigate } from 'react-router-dom'
import { evidenceItems } from '../content/evidence.content'
import EvidenceCard from '../components/cards/EvidenceCard'
import { GlassPanel, PremiumButton, SectionHeader } from '../components/primitives'
import { scrollToSection } from '../utils/scrollToSection'

const visibleItems = evidenceItems.filter((item) => item.visibility === 'Public' || item.visibility === 'Public Preview').slice(0, 6)

export default function EvidencePreviewSection() {
  const nav = useNavigate()

  return (
    <section id="evidence-vault" className="section section-anchor text-white">
      <div className="container-shell">
        <GlassPanel size="lg" className="section-frame">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Proof Layer"
            title="Evidence Vault"
            subtitle="Verified documents, awards, certificates, recommendations, and historical proof layers."
            className="max-w-3xl"
          />
          <div className="flex flex-wrap gap-3">
            <PremiumButton variant="primary" onClick={() => scrollToSection('evidence-vault')}>Open Evidence Vault</PremiumButton>
            <PremiumButton variant="secondary" onClick={() => nav('/request-access')}>Request Investor Access</PremiumButton>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
        </GlassPanel>
      </div>
    </section>
  )
}
