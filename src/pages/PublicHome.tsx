import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import BootSequence, { BOOT_SESSION_KEY } from '../components/boot/BootSequence'
import PublicNav from '../components/navigation/PublicNav'
import { PremiumButton } from '../components/primitives'
import ConnectStrip from '../components/public/ConnectStrip'
import EditorialSection from '../components/public/EditorialSection'
import FounderManualSection from '../components/public/FounderManualSection'
import FounderPhaseStrip from '../components/public/FounderPhaseStrip'
import GTR3Spotlight from '../components/public/GTR3Spotlight'
import ManifestoPanel from '../components/public/ManifestoPanel'
import ProofBand, { type ProofBandItem } from '../components/public/ProofBand'
import PublicHeroCinematic from '../components/public/PublicHeroCinematic'
import ResourceLibrarySection from '../components/public/ResourceLibrarySection'
import SelectedWorkRail from '../components/public/SelectedWorkRail'
import SupportWorkStrip from '../components/public/SupportWorkStrip'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import { evidenceItems } from '../content/evidence.content'
import { feedPosts } from '../content/feed.content'
import { founderProfile } from '../content/founder.content'
import { gtr3Content } from '../content/gtr3.content'
import { investorRecords } from '../content/investor.content'
import { projects } from '../content/projects.content'
import { socialLinks } from '../content/social.content'
import { timelineEvents } from '../content/timeline.content'
import { videos } from '../content/videos.content'
import { assetRegistry } from '../data/assetRegistry'
import { buildRequestAccessRoute } from '../data/contactConfig'
import { pageMetadata } from '../data/siteMetadata'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { scrollToSection } from '../utils/scrollToSection'

export default function PublicHome() {
  usePageMetadata(pageMetadata.home)
  const nav = useNavigate()
  const [bootStatus, setBootStatus] = useState<'checking' | 'booting' | 'ready'>('checking')
  const [revealedFromBoot, setRevealedFromBoot] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      setBootStatus('ready')
      return
    }

    const hasSeenBoot = window.sessionStorage.getItem(BOOT_SESSION_KEY) === 'true'

    if (hasSeenBoot) {
      setBootStatus('ready')
      return
    }

    setBootStatus('booting')
  }, [])

  const completeBoot = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(BOOT_SESSION_KEY, 'true')
    }

    setRevealedFromBoot(true)
    setBootStatus('ready')
  }, [])

  const handleFounderBriefClick = useCallback(() => {
    scrollToSection('founder-brief', {
      fallback: () =>
        nav(
          buildRequestAccessRoute({
            track: 'founder-story',
            reason: 'Founder story or profile review',
            next: 'Request a conversation'
          })
        )
    })
  }, [nav])

  const handleProjectsClick = useCallback(() => {
    scrollToSection('projects', {
      fallback: () =>
        nav(
          buildRequestAccessRoute({
            track: 'projects',
            reason: 'Project walkthrough or case-study review',
            next: 'Request project walkthrough'
          })
        )
    })
  }, [nav])

  const handleTimelineClick = useCallback(() => {
    scrollToSection('timeline')
  }, [])

  const mediaSignalItems: ProofBandItem[] = [
    {
      id: videos[0].id,
      title: videos[0].title,
      summary: videos[0].summary,
      meta: `${videos[0].category} • ${videos[0].status}`,
      image: videos[0].thumbnail,
      fallbackImage: assetRegistry.videoPlaceholder
    },
    {
      id: dailyShowEpisodes[0].id,
      anchorId: 'jb3-daily-show',
      title: dailyShowEpisodes[0].title,
      summary: dailyShowEpisodes[0].summary,
      meta: `${dailyShowEpisodes[0].category} • ${dailyShowEpisodes[0].status}`,
      image: dailyShowEpisodes[0].thumbnail,
      fallbackImage: assetRegistry.dailyShowPlaceholder
    },
    {
      id: feedPosts[0].id,
      anchorId: 'public-feed',
      title: feedPosts[0].title,
      summary: feedPosts[0].summary,
      meta: `${feedPosts[0].category} • ${feedPosts[0].readTime}`,
      fallbackImage: assetRegistry.videoPlaceholder
    },
    {
      id: videos[2].id,
      title: videos[2].title,
      summary: videos[2].summary,
      meta: `${videos[2].category} • ${videos[2].status}`,
      image: videos[2].thumbnail,
      fallbackImage: assetRegistry.videoPlaceholder
    }
  ]

  const trustPreviewItems: ProofBandItem[] = evidenceItems
    .filter((item) => item.visibility !== 'Investor Only')
    .slice(0, 4)
    .map((item, index) => ({
      id: item.id,
      anchorId: index === 0 ? 'evidence-vault' : undefined,
      title: item.title,
      summary: item.summary,
      meta: `${item.category} • ${item.visibility}`,
      image: item.thumbnail,
      fallbackImage: assetRegistry.evidencePlaceholder
    }))

  if (bootStatus === 'checking') {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      {bootStatus === 'booting' ? (
        <BootSequence key="boot-sequence" onComplete={completeBoot} />
      ) : (
        <motion.div
          key="public-home"
          className="page-shell"
          initial={revealedFromBoot ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: revealedFromBoot ? 0.55 : 0, ease: 'easeOut' }}
        >
          <PublicNav />
          <div className="hero-orb left-[-10rem] top-[4rem] h-72 w-72 bg-cyan-300/14" />
          <div className="hero-orb right-[-8rem] top-[14rem] h-72 w-72 bg-emerald-300/12" />
          <div className="hero-orb bottom-[22rem] right-[8%] h-60 w-60 bg-amber-200/10" />

          <PublicHeroCinematic
            onFounderStory={handleFounderBriefClick}
            onProjects={handleProjectsClick}
            onRequestAccess={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'hero',
                  reason: 'General access request',
                  next: 'Request a conversation'
                })
              )
            }
            onEnterPrivateOS={() => nav('/login')}
          />

          <ManifestoPanel />

          <FounderManualSection />

          <EditorialSection
            id="timeline"
            lead="Founder Journey"
            title="A founder path shaped by engineering, recovery, care, and rebuilding."
            intro="The public journey is shown as a sequence of proof chapters rather than a compressed biography, keeping the emphasis on pressure, progression, and what each phase built."
          >
            <div className="journey-track">
              {timelineEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  className="journey-item"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.04, duration: 0.55, ease: 'easeOut' }}
                >
                  <div className="journey-period">{event.period}</div>
                  <div className="journey-content">
                    <p className="public-meta-line">
                      <span>{event.category}</span>
                      <span>{event.visibility}</span>
                    </p>
                    <h3 className="selected-work-row-title">{event.title}</h3>
                    <p className="public-copy">{event.summary}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </EditorialSection>

          <FounderPhaseStrip />

          <SelectedWorkRail
            projects={projects}
            onRequestAccess={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'projects',
                  reason: 'Project access request',
                  next: 'Request project walkthrough'
                })
              )
            }
            onEnterPrivateOS={() => nav('/login')}
          />

          <ProofBand
            id="video-vault"
            lead="Media and Signals"
            title="A refined public stream of founder briefings, product previews, and signal notes."
            intro="Video Vault, JB³ Daily Show, and the public feed are combined into a tighter preview band so the homepage feels curated rather than overfilled."
            items={mediaSignalItems}
            ctaLabel="Preview Private OS"
            onCta={() => nav('/login')}
          />

          <ProofBand
            id="evidence-vault"
            lead="Evidence and Trust"
            title="Proof is shown with restraint, context, and public-safe boundaries."
            intro="The trust layer stays minimal here: enough signal to establish credibility, without exposing private packs, investor files, or sensitive operating material."
            items={trustPreviewItems}
            ctaLabel="Request Evidence Access"
            onCta={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'evidence',
                  reason: 'Evidence or trust layer review',
                  next: 'Request evidence review'
                })
              )
            }
          />

          <EditorialSection
            id="investor-room"
            lead="Investor Access"
            title="A premium review room for verified access, not theatre."
            intro={founderProfile.investorSummary}
            actions={
              <PremiumButton
                variant="accent"
                onClick={() =>
                  nav(
                    buildRequestAccessRoute({
                      track: 'investor',
                      reason: 'Investor review request',
                      next: 'Request investor review'
                    })
                  )
                }
              >
                Request Investor Access
              </PremiumButton>
            }
          >
            <motion.div
              className="investor-room-preview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="investor-room-copy">
                <p className="public-copy">
                  Public previews acknowledge the existence of due diligence, strategy, and commercial material without exposing private content or creating false secrecy theatre.
                </p>
              </div>
              <div className="investor-room-list">
                {investorRecords.slice(0, 4).map((record) => (
                  <div key={record.id} className="investor-room-item">
                    <div>
                      <p className="public-meta-line">
                        <span>{record.category}</span>
                        <span>{record.visibility}</span>
                      </p>
                      <h3 className="selected-work-row-title">{record.title}</h3>
                    </div>
                    <p className="public-copy-sm">{record.summary}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </EditorialSection>

          <GTR3Spotlight
            content={gtr3Content}
            onPrimaryAction={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'gtr3',
                  reason: 'GTR³ preview request',
                  next: 'Request a conversation'
                })
              )
            }
            onSecondaryAction={handleTimelineClick}
          />

          <SupportWorkStrip />

          <ResourceLibrarySection />

          <ConnectStrip
            links={socialLinks}
            onRequestAccess={() =>
              nav(
                buildRequestAccessRoute({
                  track: 'connect',
                  reason: 'General contact or access request',
                  next: 'Request a conversation'
                })
              )
            }
            onEnterPrivateOS={() => nav('/login')}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
