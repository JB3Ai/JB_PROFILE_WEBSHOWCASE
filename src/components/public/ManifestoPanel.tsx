import React from 'react'
import { motion } from 'framer-motion'
import { founderProfile } from '../../content/founder.content'

export default function ManifestoPanel() {
  return (
    <section id="founder-brief" className="public-section section-anchor">
      <div className="container-shell-wide">
        <motion.div
          className="public-manifesto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="public-manifesto-heading">
            <p className="public-kicker">Founder Philosophy</p>
            <h2 className="public-title">Systems become trust when they hold under pressure.</h2>
          </div>

          <div className="public-manifesto-grid">
            <blockquote className="public-manifesto-quote">
              “{founderProfile.mediumBio}”
            </blockquote>

            <div className="public-manifesto-copy">
              <p className="public-intro">
                {founderProfile.publicSummary} The public layer is designed to show discipline,
                human impact, and proof without collapsing into product theatre.
              </p>
              <p className="public-copy">
                {founderProfile.recoverySummary} {founderProfile.imedSummary}
              </p>
              <div className="public-manifesto-notes">
                <span>Resilience</span>
                <span>Human impact</span>
                <span>Evidence before noise</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
