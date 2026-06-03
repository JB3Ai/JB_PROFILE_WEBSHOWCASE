import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AppWindowHeader } from '../components/primitives'
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
    <div className="glass-panel-lg rounded-lg overflow-hidden flex flex-col">
      <AppWindowHeader title="Project Showcase" icon="📁" />
      
      <div className="p-6 flex-1">
        <div className="mb-6">
          <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Filter by Status</p>
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                  filter === f
                    ? 'bg-cyan-500 text-black shadow-lg'
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
    </div>
  )
}
