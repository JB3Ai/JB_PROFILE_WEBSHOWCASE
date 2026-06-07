import React from 'react'
import { motion } from 'framer-motion'
import AssetThumbnail from '../media/AssetThumbnail'
import { PremiumButton } from '../primitives'
import { assetRegistry } from '../../data/assetRegistry'
import type { ProjectItem } from '../../types/content.types'
import EditorialSection from './EditorialSection'

type SelectedWorkRailProps = {
  projects: ProjectItem[]
  onRequestAccess: () => void
  onEnterPrivateOS: () => void
}

export default function SelectedWorkRail({
  projects,
  onRequestAccess,
  onEnterPrivateOS
}: SelectedWorkRailProps) {
  const [featured, ...supporting] = projects.slice(0, 5)

  if (!featured) {
    return null
  }

  return (
    <EditorialSection
      id="projects"
      lead="Selected Work"
      title="A curated view of systems, products, and founder-built platforms."
      intro="Featured work is presented as case-study previews rather than an application grid, with the strongest public-safe stories surfaced first."
    >
      <motion.div
        className="selected-work"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="selected-work-feature">
          <AssetThumbnail
            src={featured.image}
            fallbackSrc={assetRegistry.projectPlaceholder}
            alt={`${featured.name} project preview`}
            className="selected-work-asset"
          />
          <div className="selected-work-copy">
            <p className="selected-work-kicker">Featured project</p>
            <p className="public-meta-line selected-work-meta">
              <span>{featured.category}</span>
              <span>{featured.status}</span>
            </p>
            <h3 className="selected-work-title">{featured.name}</h3>
            <p className="public-copy">{featured.summary}</p>
            <div className="selected-work-actions">
              <PremiumButton variant="accent" className="selected-work-cta-primary" onClick={onRequestAccess}>
                Request Project Access
              </PremiumButton>
              <PremiumButton variant="secondary" className="selected-work-cta-secondary" onClick={onEnterPrivateOS}>
                Preview Private OS
              </PremiumButton>
            </div>
          </div>
        </div>

        <div className="selected-work-list">
          {supporting.map((project, idx) => (
            <motion.div
              key={project.id}
              className="selected-work-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.05, duration: 0.55, ease: 'easeOut' }}
            >
              <AssetThumbnail
                src={project.image}
                fallbackSrc={assetRegistry.projectPlaceholder}
                alt={`${project.name} preview`}
                className="selected-work-row-asset"
              />
              <div className="selected-work-row-copy">
                <p className="public-meta-line selected-work-row-meta">
                  <span>{project.category}</span>
                  <span className="selected-work-row-status">{project.status}</span>
                </p>
                <h4 className="selected-work-row-title">{project.name}</h4>
                <p className="public-copy-sm">{project.summary}</p>
              </div>
              <button type="button" onClick={onRequestAccess} className="public-inline-action">
                Request access
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </EditorialSection>
  )
}
