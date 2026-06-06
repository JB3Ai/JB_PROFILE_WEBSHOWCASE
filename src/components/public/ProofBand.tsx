import React from 'react'
import { motion } from 'framer-motion'
import AssetThumbnail from '../media/AssetThumbnail'
import { PremiumButton } from '../primitives'

export type ProofBandItem = {
  id: string
  anchorId?: string
  title: string
  summary: string
  meta: string
  image?: string | null
  fallbackImage: string
}

type ProofBandProps = {
  id: string
  lead: string
  title: string
  intro: string
  items: ProofBandItem[]
  ctaLabel: string
  onCta: () => void
}

export default function ProofBand({
  id,
  lead,
  title,
  intro,
  items,
  ctaLabel,
  onCta
}: ProofBandProps) {
  const [featured, ...rest] = items

  if (!featured) {
    return null
  }

  return (
    <section id={id} className="public-section section-anchor">
      <div className="container-shell-wide">
        <motion.div
          className="proof-band"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="proof-band-heading">
            <div>
              <p className="public-kicker">{lead}</p>
              <h2 className="public-title">{title}</h2>
            </div>
            <p className="public-intro">{intro}</p>
          </div>

          <div className="proof-band-feature">
            <AssetThumbnail
              src={featured.image}
              fallbackSrc={featured.fallbackImage}
              alt={`${featured.title} preview`}
              className="proof-band-asset"
            />
            <div className="proof-band-copy">
              <p className="public-meta-line">
                <span>{featured.meta}</span>
              </p>
              <h3 className="selected-work-title">{featured.title}</h3>
              <p className="public-copy">{featured.summary}</p>
              <PremiumButton variant="secondary" onClick={onCta}>
                {ctaLabel}
              </PremiumButton>
            </div>
          </div>

          <div className="proof-band-list">
            {rest.map((item, idx) => (
              <motion.div
                key={item.id}
                id={item.anchorId}
                className="proof-band-row section-anchor"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.55, ease: 'easeOut' }}
              >
                <div>
                  <p className="public-meta-line">
                    <span>{item.meta}</span>
                  </p>
                  <h4 className="selected-work-row-title">{item.title}</h4>
                </div>
                <p className="public-copy-sm">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
