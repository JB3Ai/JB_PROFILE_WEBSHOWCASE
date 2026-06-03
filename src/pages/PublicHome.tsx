import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold">Jonathan Blackburn OS</h1>
        <p className="mt-4 text-lg text-gray-300">Founder. Systems Architect. Builder under pressure.</p>
        <p className="mt-2 text-gray-400 italic">Chaos is not solved by hope. Chaos is solved by systems.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => nav('/login')} className="px-4 py-2 bg-cyan-500 text-black rounded">Enter OS</button>
          <button onClick={() => alert('Founder Brief is available from the OS dock')} className="px-4 py-2 bg-gray-700 text-white rounded">Open Founder Brief</button>
          <button onClick={() => nav('/request-access')} className="px-4 py-2 bg-yellow-600 text-black rounded">Request Investor Access</button>
        </div>
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
