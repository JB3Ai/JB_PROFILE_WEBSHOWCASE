import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPanel } from '../components/primitives'
import { projects } from '../content/projects.content'
import ProjectCard from '../components/cards/ProjectCard'

const FILTERS = ['All', 'Demo', 'Prototype', 'Public Preview', 'Product Profile', 'Concept']

export default function ProjectShowcaseApp() {
  const [filter, setFilter] = useState('All')

  const filtered = projects.filter((p) => filter === 'All' || p.status === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="space-y-6">
      <GlassPanel size="md" animate={false}>
        <div className="mb-6">
          <p className="text-caption mb-3">Filter by Status</p>
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-pill ${
                  filter === f
                    ? 'filter-pill-active'
                    : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </div>
      </GlassPanel>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((p) => (
          <motion.div key={p.id} variants={itemVariants}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
