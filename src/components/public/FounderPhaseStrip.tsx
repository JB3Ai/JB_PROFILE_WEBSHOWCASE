import React from 'react'
import { motion } from 'framer-motion'
import EditorialSection from './EditorialSection'
import { founderPhaseSystem } from '../../content/founderManual.content'

export default function FounderPhaseStrip() {
  return (
    <EditorialSection
      lead="Phase System"
      title="Four phases shape the founder blueprint."
      intro="The public layer stays cinematic, but the deeper story still follows a clear sequence: signal, structure, precision, and intelligence."
    >
      <div className="founder-phase-strip">
        {founderPhaseSystem.map((phase, index) => (
          <motion.article
            key={phase.id}
            className="founder-phase-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.04, duration: 0.55, ease: 'easeOut' }}
          >
            <div className="founder-phase-label">{phase.label}</div>
            <div className="founder-phase-content">
              <h3 className="founder-phase-title">{phase.title}</h3>
              <p className="public-copy-sm">{phase.summary}</p>
              <p className="founder-phase-detail">{phase.detail}</p>
              <div className="founder-phase-highlights">
                {phase.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </EditorialSection>
  )
}
