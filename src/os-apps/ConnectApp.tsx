import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { socialLinks } from '../content/social.content'
import { buildRequestAccessRoute, openMailtoDraft } from '../data/contactConfig'
import { PremiumButton, StatusBadge } from '../components/primitives'

const groups = ['All', ...Array.from(new Set(socialLinks.map((link) => link.group)))]

export default function ConnectApp() {
  const nav = useNavigate()
  const [selectedGroup, setSelectedGroup] = useState('All')
  const [search, setSearch] = useState('')

  const filteredLinks = useMemo(() => {
    const lower = search.toLowerCase()
    return socialLinks
      .filter((link) => selectedGroup === 'All' || link.group === selectedGroup)
      .filter(
        (link) =>
          link.label.toLowerCase().includes(lower) ||
          link.platform.toLowerCase().includes(lower) ||
          link.purpose.toLowerCase().includes(lower)
      )
      .sort((a, b) => a.priority - b.priority)
  }, [search, selectedGroup])

  const visibleLinks = filteredLinks.slice(0, 4)

  return (
    <div className="os-interior-layout">
      <div className="os-interior-sidebar order-2 xl:order-1">
        <OsInteriorSection
          eyebrow="Connect Controls"
          title="Filter public-safe channels"
          intro="Use filters only to reduce the visible preview list. The main purpose of this module is to route the next conversation cleanly."
          className="os-filter-panel"
        >
          <div className="os-filter-panel">
            <label className="conversion-label" htmlFor="connect-search">
              Search channels
            </label>
            <input
              id="connect-search"
              type="search"
              aria-label="Search contact and platform previews"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search contacts or platforms"
              className="input-shell os-search-input"
            />
            <div className="os-filter-stack">
              {groups.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedGroup(item)}
                  className={`filter-pill os-filter-button ${selectedGroup === item ? 'filter-pill-active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </OsInteriorSection>

        <div className="os-metrics-grid xl:grid-cols-1">
          <OsMetricCard label="Visible channels" value={`${visibleLinks.length}`} detail="Priority previews only" tone="accent" />
          <OsMetricCard label="Routing mode" value="Manual" detail="Conversation-first handoff" tone="success" />
        </div>
      </div>

      <div className="os-interior-stack order-1 xl:order-2">
        <OsInteriorSection
          eyebrow="Connect Hub"
          title="A clean next-action layer for access, contact, and conversation."
          intro="This workspace no longer behaves like a social directory. It routes the visitor toward request access, direct email, or a private OS preview without pretending backend logic exists."
          side={<StatusBadge variant="neutral">Human review layer</StatusBadge>}
        >
          <div className="os-contact-grid">
            <div className="os-contact-card">
              <p className="os-preview-kicker">Request access</p>
              <h3 className="os-preview-title">Controlled review path</h3>
              <p className="os-preview-summary">
                Use the request flow for collaborations, investor review, project walkthroughs, and trusted module access.
              </p>
              <PremiumButton
                variant="accent"
                onClick={() =>
                  nav(
                    buildRequestAccessRoute({
                      track: 'os-connect',
                      reason: 'Controlled review request',
                      next: 'Request a conversation'
                    })
                  )
                }
              >
                Request Access
              </PremiumButton>
            </div>

            <div className="os-contact-card">
              <p className="os-preview-kicker">Direct contact</p>
              <h3 className="os-preview-title">Email Jonathan</h3>
              <p className="os-preview-summary">
                Start with a direct note if you already know the context and want the quickest human route.
              </p>
              <PremiumButton
                variant="secondary"
                onClick={() =>
                  openMailtoDraft({
                    subject: 'Jonathan Blackburn OS contact request',
                    bodyLines: [
                      'Name:',
                      'Organisation / context:',
                      'What would you like to discuss?'
                    ]
                  })
                }
              >
                Open Email Draft
              </PremiumButton>
            </div>

            <div className="os-contact-card">
              <p className="os-preview-kicker">JB³Ai / OS³</p>
              <h3 className="os-preview-title">Discuss systems and projects</h3>
              <p className="os-preview-summary">
                Use this route if the conversation is about platform direction, product review, partnership, or founder-built systems.
              </p>
              <PremiumButton
                variant="ghost"
                onClick={() =>
                  openMailtoDraft({
                    subject: 'JB³Ai / OS³ discussion',
                    bodyLines: [
                      'Name:',
                      'Organisation / context:',
                      'Which system, platform, or project would you like to discuss?'
                    ]
                  })
                }
              >
                Discuss JB³Ai / OS³
              </PremiumButton>
            </div>

            <div className="os-contact-card">
              <p className="os-preview-kicker">Private layer</p>
              <h3 className="os-preview-title">Book the right next step</h3>
              <p className="os-preview-summary">
                Scheduling stays manual in this build. The right route is to request a conversation rather than pretend an automated booking backend exists.
              </p>
              <PremiumButton
                variant="success"
                onClick={() =>
                  nav(
                    buildRequestAccessRoute({
                      track: 'conversation',
                      reason: 'Conversation or walkthrough',
                      next: 'Book a conversation'
                    })
                  )
                }
              >
                Book a Conversation
              </PremiumButton>
            </div>
          </div>
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Preview Channels"
          title="Public-safe channel markers"
          intro="These cards stay as lightweight reference points. They support the main action layer instead of competing with it."
        >
          {visibleLinks.length > 0 ? (
            <div className="os-preview-grid">
              {visibleLinks.map((item) => (
                <OsPreviewCard
                  key={item.id}
                  eyebrow={item.group}
                  title={item.label}
                  summary={item.purpose}
                  badges={
                    <>
                      <StatusBadge variant="primary" size="sm">{item.platform}</StatusBadge>
                      <StatusBadge variant="neutral" size="sm">{item.visibility}</StatusBadge>
                    </>
                  }
                  meta={<StatusBadge variant="neutral" size="sm">Priority {item.priority}</StatusBadge>}
                  note={item.cautionNote ? `Note: ${item.cautionNote}` : `Channel marker: ${item.iconName}`}
                  actions={
                    <OsActionStrip
                      title="Channel action"
                      note="Only public-safe routes are enabled in this build."
                      actions={
                        item.url === '#' ? (
                          <PremiumButton variant="ghost" disabled>
                            Placeholder Route
                          </PremiumButton>
                        ) : (
                          <PremiumButton
                            variant="ghost"
                            onClick={() => {
                              window.location.href = item.url
                            }}
                          >
                            Open Route
                          </PremiumButton>
                        )
                      }
                    />
                  }
                />
              ))}
            </div>
          ) : (
            <div className="os-preview-note">No channels match the current search and group filter.</div>
          )}
        </OsInteriorSection>
      </div>
    </div>
  )
}
