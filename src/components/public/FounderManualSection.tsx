import React from 'react'
import { motion } from 'framer-motion'
import EditorialSection from './EditorialSection'
import {
  founderManualPrinciples,
  founderManualStatement
} from '../../content/founderManual.content'
import { assetRegistry } from '../../data/assetRegistry'
import AssetThumbnail from '../media/AssetThumbnail'

export default function FounderManualSection() {
  return (
    <EditorialSection
      id="founder-manual"
      lead="Founder Manual"
      title="The operating principles behind the system."
      intro="A short manual for how pressure, rebuilding, proof, and human impact are held together inside Jonathan Blackburn OS."
    >
      <div className="founder-manual-layout">
        <motion.div
          className="founder-manual-stage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <p className="founder-manual-kicker">Living Founder Blueprint</p>
          <h3 className="founder-manual-quote">{founderManualStatement}</h3>
          <p className="public-copy">
            The system has a story. It moves from signal and control, through recovery and
            precision, into AI designed to serve real life. AI is not the product. Structure
            is the product.
          </p>
          <AssetThumbnail
            src={assetRegistry.founderEditorialBw}
            fallbackSrc={assetRegistry.founderPortraitPlaceholder}
            alt="Black-and-white editorial portrait of Jonathan Blackburn."
            className="founder-manual-asset"
            imageClassName="object-cover object-[center_24%]"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </motion.div>

        <div className="founder-manual-principles">
          {founderManualPrinciples.map((principle, index) => (
            <motion.article
              key={principle.number}
              className="founder-manual-principle"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="founder-manual-principle-number">{principle.number}</div>
              <div>
                <h4 className="founder-manual-principle-title">{principle.title}</h4>
                <p className="public-copy-sm">{principle.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </EditorialSection>
  )
}
