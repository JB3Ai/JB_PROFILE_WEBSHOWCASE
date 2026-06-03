import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, PremiumButton, GlassPanel } from '../components/primitives'
import { videos } from '../content/videos.content'
import VideoCard from '../components/cards/VideoCard'

const featured = videos[0]

export default function VideoVaultSection() {
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
    <section className="section bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Video Vault"
          subtitle="Founder briefings, product demos, project walkthroughs, media clips, and GTR3 teasers."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-[1.4fr_1fr] mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <GlassPanel size="lg" animate={true} hover={true}>
            <div className="h-72 rounded-lg bg-slate-900/90 flex items-center justify-center text-slate-400 mb-5">Featured video placeholder</div>
            <div className="text-xs text-cyan-300 uppercase tracking-wide">{featured.category}</div>
            <h3 className="text-2xl font-semibold mt-3">{featured.title}</h3>
            <p className="mt-4 text-gray-300">{featured.summary}</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <PremiumButton variant="primary" size="md">Watch Video</PremiumButton>
              <PremiumButton variant="secondary" size="md">View Project</PremiumButton>
            </div>
          </GlassPanel>
          
          <motion.div className="grid gap-4" variants={containerVariants}>
            {videos.slice(1, 4).map((video) => (
              <motion.div key={video.id} variants={itemVariants} className="glass-panel-md">
                <h4 className="font-semibold text-white">{video.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{video.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {videos.map((video, idx) => (
            <motion.div key={video.id} variants={itemVariants}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
