import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../components/primitives'
import { projects } from '../content/projects.content'
import ProjectCard from '../components/cards/ProjectCard'

export default function ProjectShowcaseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="projects" className="section section-anchor bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Build Inventory"
          title="Project Showcase"
          subtitle="Systems, products, demos, and creative builds from the Jonathan Blackburn OS ecosystem."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((p, idx) => (
            <motion.div key={p.id} variants={itemVariants}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
