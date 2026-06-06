import React from 'react'
import { motion } from 'framer-motion'
import { thirdRiseStatement } from '../../content/founderManual.content'
import AssetThumbnail from '../media/AssetThumbnail'
import { PremiumButton } from '../primitives'
import { assetRegistry } from '../../data/assetRegistry'
import type { GTR3Content } from '../../types/content.types'

type GTR3SpotlightProps = {
  content: GTR3Content
  onPrimaryAction: () => void
  onSecondaryAction: () => void
}

export default function GTR3Spotlight({
  content,
  onPrimaryAction,
  onSecondaryAction
}: GTR3SpotlightProps) {
  return (
    <section id="gtr3" className="public-section section-anchor">
      <div className="container-shell-wide">
        <motion.div
          className="gtr3-spotlight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="gtr3-copy">
            <p className="public-kicker">GTR³ Spotlight</p>
            <h2 className="gtr3-title">{content.headline}</h2>
            <p className="gtr3-statement">{thirdRiseStatement}</p>
            <p className="public-intro">{content.shortTeaser}</p>
            <p className="public-copy">{content.longTeaser}</p>
            <div className="gtr3-theme-grid">
              {content.themes.map((theme) => (
                <div key={theme.title} className="gtr3-theme">
                  <p className="public-meta-line">
                    <span>{theme.title}</span>
                  </p>
                  <p className="public-copy-sm">{theme.summary}</p>
                </div>
              ))}
            </div>
            <div className="selected-work-actions">
              <PremiumButton variant="accent" onClick={onPrimaryAction}>
                {content.ctaLabels.primary}
              </PremiumButton>
              <PremiumButton variant="ghost" onClick={onSecondaryAction}>
                {content.ctaLabels.secondary}
              </PremiumButton>
            </div>
          </div>

          <div className="gtr3-stage">
            <AssetThumbnail
              src={assetRegistry.gtr3HeroPlaceholder}
              fallbackSrc={assetRegistry.gtr3Placeholder}
              alt="GTR³ story preview placeholder"
              className="gtr3-stage-asset"
              imageClassName="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="gtr3-stage-note">
              <p className="public-meta-line">
                <span>{content.status}</span>
                <span>Signature preview frame</span>
              </p>
              <ul className="gtr3-chapter-list">
                {content.chapterPreviewItems.slice(0, 5).map((chapter) => (
                  <li key={chapter}>{chapter}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
