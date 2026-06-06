import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PremiumButton } from '../primitives'
import { scrollToSection } from '../../utils/scrollToSection'
import { assetRegistry } from '../../data/assetRegistry'

const navLinks = [
  { id: 'founder-brief', label: 'Founder' },
  { id: 'projects', label: 'Projects' },
  { id: 'video-vault', label: 'Media' },
  { id: 'evidence-vault', label: 'Evidence' },
  { id: 'investor-room', label: 'Investor' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'gtr3', label: 'GTR³' },
  { id: 'connect', label: 'Connect' }
] as const

const sectionIds = [
  'hero',
  'founder-brief',
  'projects',
  'video-vault',
  'jb3-daily-show',
  'public-feed',
  'evidence-vault',
  'investor-room',
  'timeline',
  'gtr3',
  'connect'
] as const

export default function PublicNav() {
  const nav = useNavigate()
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const updateActiveSection = () => {
      let currentSection = 'hero'

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (section && section.getBoundingClientRect().top <= 160) {
          currentSection = sectionId
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  return (
    <div className="sticky top-3 z-40 px-4 pt-4 md:top-4 md:px-6">
      <div className="container-shell-wide">
        <div className="public-nav-shell">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="public-nav-brand">
              <img
                src={assetRegistry.logoMark}
                alt="Jonathan Blackburn OS logo mark"
                className="h-8 w-8 rounded-full border border-white/10 bg-white/5 p-1.5"
              />
              <div>
                <div className="text-sm font-semibold tracking-[-0.01em] text-white">Jonathan Blackburn OS</div>
                <div className="public-nav-caption">Founder platform</div>
              </div>
            </div>

            <div className="public-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`public-nav-link ${activeSection === link.id ? 'public-nav-link-active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="public-nav-actions">
              <PremiumButton variant="secondary" size="sm" onClick={() => nav('/login')}>
                Enter OS
              </PremiumButton>
              <PremiumButton variant="accent" size="sm" onClick={() => nav('/request-access')}>
                Request Access
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
