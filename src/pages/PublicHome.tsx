import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'
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

  const handleFounderBriefClick = () => {
    const founderBrief = document.getElementById('founder-brief')
    if (founderBrief) {
      founderBrief.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    nav('/os')
  }
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }
  
  return (
    <div className="page-shell">
      <div className="hero-orb left-[-8rem] top-[4rem] h-64 w-64 bg-cyan-300/20" />
      <div className="hero-orb right-[-5rem] top-[10rem] h-56 w-56 bg-emerald-300/15" />
      <div className="hero-orb bottom-[20rem] right-[18%] h-48 w-48 bg-amber-200/10" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-shell-wide relative z-10 py-16 md:py-24"
      >
        <GlassPanel size="lg" animate={false} className="section-frame">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
            <div>
              <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }}>
                <StatusBadge variant="primary">Founder Platform</StatusBadge>
                <StatusBadge variant="neutral">Premium Public Layer</StatusBadge>
              </motion.div>

              <motion.h1 className="mt-8 text-display-lg text-white" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.6 }}>
                Jonathan Blackburn OS
              </motion.h1>
              <motion.p className="mt-6 max-w-3xl text-body-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                A premium founder platform for executive proof, resilient systems thinking, strategic recovery, and controlled intelligence storytelling.
              </motion.p>
              <motion.p className="mt-4 max-w-2xl text-body italic text-[color:var(--text-muted)]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.6 }}>
                Chaos is not solved by hope. Chaos is solved by systems.
              </motion.p>

              <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.6 }}>
                <PremiumButton variant="primary" size="lg" onClick={() => nav('/login')}>Enter OS</PremiumButton>
                <PremiumButton variant="secondary" size="lg" onClick={handleFounderBriefClick}>Open Founder Brief</PremiumButton>
                <PremiumButton variant="accent" size="lg" onClick={() => nav('/request-access')}>Request Investor Access</PremiumButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="grid gap-4"
            >
              <div className="glass-panel-md">
                <p className="eyebrow">Platform Positioning</p>
                <p className="mt-4 text-heading-sm text-white">Founder. Systems Architect. Builder under pressure.</p>
                <p className="mt-4 text-body-sm">Designed to feel executive, trustworthy, and controlled before deeper media, assets, and secure layers come online.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel-sm">
                  <p className="text-caption">Public Systems</p>
                  <p className="mt-3 text-2xl font-semibold text-white">11</p>
                  <p className="mt-2 text-body-sm">Curated surface areas</p>
                </div>
                <div className="glass-panel-sm">
                  <p className="text-caption">Current State</p>
                  <p className="mt-3 text-2xl font-semibold text-white">v1</p>
                  <p className="mt-2 text-body-sm">Safe placeholder content only</p>
                </div>
              </div>
            </motion.div>
          </div>
        </GlassPanel>
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
