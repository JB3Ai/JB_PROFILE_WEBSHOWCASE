import React from 'react'
import { motion } from 'framer-motion'

type EditorialSectionProps = {
  id?: string
  lead?: string
  title: string
  intro?: string
  actions?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export default function EditorialSection({
  id,
  lead,
  title,
  intro,
  actions,
  className = '',
  children
}: EditorialSectionProps) {
  return (
    <section id={id} className={`public-section section-anchor ${className}`}>
      <div className="container-shell-wide">
        <motion.div
          className="public-section-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {lead ? <p className="public-kicker">{lead}</p> : null}
          <div className="public-section-heading">
            <div>
              <h2 className="public-title">{title}</h2>
              {intro ? <p className="public-intro">{intro}</p> : null}
            </div>
            {actions ? <div className="public-section-actions">{actions}</div> : null}
          </div>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
