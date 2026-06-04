import React from 'react'
import { useNavigate } from 'react-router-dom'
import { socialLinks } from '../content/social.content'
import SocialLinkCard from '../components/cards/SocialLinkCard'
import { GlassPanel, PremiumButton, SectionHeader } from '../components/primitives'

const primaryLinks = socialLinks
  .filter((item) => item.priority <= 5)
  .sort((a, b) => a.priority - b.priority)

const secondaryLinks = socialLinks
  .filter((item) => item.priority > 5)
  .sort((a, b) => a.priority - b.priority)

export default function ConnectSection() {
  const nav = useNavigate()

  return (
    <section id="connect" className="section section-anchor text-white">
      <div className="container-shell">
        <GlassPanel size="lg" className="section-frame">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              eyebrow="Network Layer"
              title="Connect"
              subtitle="Contact, follow, book, and verify Jonathan Blackburn’s active channels."
              className="max-w-3xl"
            />
            <div className="flex flex-wrap gap-3">
              <PremiumButton variant="primary" onClick={() => nav('/request-access')}>Book a Call</PremiumButton>
              <PremiumButton variant="secondary" onClick={() => nav('/request-access')}>Send Email</PremiumButton>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {primaryLinks.map((item) => (
              <SocialLinkCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 p-5">
              <div>
                <h3 className="text-heading-sm text-white">More channels</h3>
                <p className="mt-2 text-body-sm">Explore the full Connect Hub for all other social, media, and proof channels.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {secondaryLinks.map((item) => (
                <SocialLinkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
