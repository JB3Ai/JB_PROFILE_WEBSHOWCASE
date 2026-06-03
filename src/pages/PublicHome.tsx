import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PremiumButton } from '../components/primitives'
import FounderBriefSection from '../sections/FounderBriefSection'
import ProjectShowcaseSection from '../sections/ProjectShowcaseSection'
import VideoVaultSection from '../sections/VideoVaultSection'
import EvidencePreviewSection from '../sections/EvidencePreviewSection'
import DailyShowSection from '../sections/DailyShowSection'
import PublicFeedSection from '../sections/PublicFeedSection'
import TimelineSection from '../sections/TimelineSection'
import GTR3Section from '../sections/GTR3Section'
import InvestorRoomSection from '../sections/InvestorRoomSection'
import ConnectSection from '../sections/ConnectSection'

export default function PublicHome() {
  const nav = useNavigate()
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }
  
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <motion.h1 className="text-display-lg text-white leading-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          Jonathan Blackburn OS
        </motion.h1>
        <motion.p className="mt-6 text-text-body-lg text-gray-300 max-w-2xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          Founder. Systems Architect. Builder under pressure.
        </motion.p>
        <motion.p className="mt-3 text-text-body text-gray-400 italic max-w-2xl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          Chaos is not solved by hope. Chaos is solved by systems.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <PremiumButton variant="primary" onClick={() => nav('/login')}>Enter OS</PremiumButton>
          <PremiumButton variant="secondary" onClick={() => alert('Founder Brief is available from the OS dock')}>Open Founder Brief</PremiumButton>
          <PremiumButton variant="accent" onClick={() => nav('/request-access')}>Request Investor Access</PremiumButton>
        </motion.div>
      </motion.div>

      <FounderBriefSection />
      <ProjectShowcaseSection />
      <VideoVaultSection />
      <DailyShowSection />
      <PublicFeedSection />
      <EvidencePreviewSection />
      <InvestorRoomSection />
      <TimelineSection />
      <GTR3Section />
      <ConnectSection />
    </div>
  )
}
