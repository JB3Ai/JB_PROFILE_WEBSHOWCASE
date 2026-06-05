import React from 'react'
import { motion } from 'framer-motion'
import { PremiumButton } from '../primitives'
import type { SocialLink } from '../../types/content.types'

type ConnectStripProps = {
  links: SocialLink[]
  onRequestAccess: () => void
  onEnterPrivateOS: () => void
}

export default function ConnectStrip({
  links,
  onRequestAccess,
  onEnterPrivateOS
}: ConnectStripProps) {
  const visibleLinks = links.slice(0, 3)

  return (
    <section id="connect" className="public-section section-anchor public-section-last">
      <div className="container-shell-wide">
        <motion.div
          className="connect-strip"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div>
            <p className="public-kicker">Connect</p>
            <h2 className="public-title">Open a clear path to the right conversation.</h2>
            <p className="public-intro">
              Public contact channels remain staged carefully. Request access for the correct route,
              or step into the private layer for a controlled preview.
            </p>
          </div>
          <div className="connect-strip-side">
            <div className="connect-strip-list">
              {visibleLinks.map((link) => (
                <div key={link.id} className="connect-strip-item">
                  <span>{link.label}</span>
                  <span>{link.platform}</span>
                </div>
              ))}
            </div>
            <div className="connect-strip-actions">
              <PremiumButton variant="accent" onClick={onRequestAccess}>
                Request Access
              </PremiumButton>
              <PremiumButton variant="secondary" onClick={onEnterPrivateOS}>
                Enter Private OS
              </PremiumButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
