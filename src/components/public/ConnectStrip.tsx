import React from 'react'
import { motion } from 'framer-motion'
import { PremiumButton } from '../primitives'
import { openMailtoDraft } from '../../data/contactConfig'
import type { SocialLink } from '../../types/content.types'

type ConnectStripProps = {
  links: SocialLink[]
  onRequestAccess: () => void
  onEnterPrivateOS: () => void
}

const conversationLanes = [
  {
    id: 'collaboration',
    title: 'Collaboration and project review',
    summary: 'Use Request Access if you want a controlled introduction to projects, proof, or selected modules.'
  },
  {
    id: 'media',
    title: 'Media, speaking, or investor enquiry',
    summary: 'Reach out directly for a human conversation around JB³Ai, OS³, founder story, or strategic review.'
  },
  {
    id: 'preview',
    title: 'Private OS preview',
    summary: 'Step into the preview shell if you want to see how the Executive Command OS is structured.'
  }
]

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
            <h2 className="public-title">Know what to do next, and where to take it.</h2>
            <p className="public-intro">
              Jonathan Blackburn OS now ends with a calmer invitation layer: request a controlled review, start a
              conversation, or preview the private operating environment.
            </p>
          </div>

          <div className="connect-strip-side">
            <div className="connect-strip-grid">
              {conversationLanes.map((lane) => (
                <div key={lane.id} className="connect-strip-card">
                  <p className="connect-strip-card-title">{lane.title}</p>
                  <p className="public-copy-sm">{lane.summary}</p>
                </div>
              ))}
            </div>

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
              <PremiumButton
                variant="secondary"
                onClick={() =>
                  openMailtoDraft({
                    subject: 'Jonathan Blackburn OS conversation',
                    bodyLines: [
                      'Name:',
                      'Organisation / context:',
                      'What would you like to discuss?'
                    ]
                  })
                }
              >
                Email Jonathan
              </PremiumButton>
              <PremiumButton variant="ghost" onClick={onEnterPrivateOS}>
                Preview Private OS
              </PremiumButton>
            </div>

            <div className="connect-strip-footer">
              <span>Jonathan Blackburn OS</span>
              <span>JB³Ai</span>
              <span>Manual review only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
