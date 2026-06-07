import React from 'react'
import { motion } from 'framer-motion'
import AssetThumbnail from '../media/AssetThumbnail'
import { PremiumButton } from '../primitives'
import { founderProfile } from '../../content/founder.content'
import { assetRegistry } from '../../data/assetRegistry'

type PublicHeroCinematicProps = {
  onFounderStory: () => void
  onProjects: () => void
  onRequestAccess: () => void
  onEnterPrivateOS: () => void
}

export default function PublicHeroCinematic({
  onFounderStory,
  onProjects,
  onRequestAccess,
  onEnterPrivateOS
}: PublicHeroCinematicProps) {
  return (
    <section id="hero" className="public-hero section-anchor">
      <div className="container-shell-wide">
        <div className="public-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="public-hero-copy"
          >
            <p className="public-pretitle">{founderProfile.positioningLine}</p>
            <h1 className="public-hero-title">
              <span className="public-hero-title-line">Jonathan Blackburn</span>
              <span className="public-hero-title-os">OS</span>
            </h1>
            <p className="public-hero-quote">{founderProfile.coreQuote}</p>
            <p className="public-hero-body">
              A premium founder platform shaped around resilient systems thinking, recovery under
              pressure, and the discipline of building structures that hold when conditions do not.
            </p>
            <div className="public-hero-actions">
              <PremiumButton variant="primary" size="lg" className="public-hero-cta public-hero-cta-primary" onClick={onFounderStory}>
                View Founder Story
              </PremiumButton>
              <PremiumButton variant="secondary" size="lg" className="public-hero-cta public-hero-cta-secondary" onClick={onProjects}>
                Explore Projects
              </PremiumButton>
              <PremiumButton variant="accent" size="lg" className="public-hero-cta public-hero-cta-accent" onClick={onRequestAccess}>
                Request Access
              </PremiumButton>
            </div>
            <button type="button" onClick={onEnterPrivateOS} className="public-link-button">
              Enter Private OS
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85, ease: 'easeOut' }}
            className="public-hero-stage"
          >
            <div className="public-stage-copy">
              <p className="public-stage-label">Founder Profile Plate</p>
              <p className="public-stage-line">{founderProfile.shortBio}</p>
            </div>
            <AssetThumbnail
              src={assetRegistry.founderHeroPlaceholder}
              fallbackSrc={assetRegistry.founderPortraitPlaceholder}
              alt="Jonathan Blackburn founder profile placeholder"
              className="public-stage-asset"
              imageClassName="object-cover object-center scale-[1.01]"
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="public-stage-detail">
              <p className="public-stage-detail-title">JB³Ai portrait treatment</p>
              <p className="public-stage-detail-copy">
                Recovery, systems, and proof held in a quieter editorial frame until approved founder photography is ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
