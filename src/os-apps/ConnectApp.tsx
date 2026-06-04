import React, { useMemo, useState } from 'react'
import { socialLinks } from '../content/social.content'
import SocialLinkCard from '../components/cards/SocialLinkCard'
import { GlassPanel, StatusBadge } from '../components/primitives'

const groups = ['All', ...Array.from(new Set(socialLinks.map((link) => link.group)))]

export default function ConnectApp() {
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

  return (
    <div className="space-y-6">
      <GlassPanel size="lg" animate={false}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="eyebrow">Connect Hub</div>
            <h2 className="mt-2 text-heading text-white">Contact and channel dashboard</h2>
            <p className="mt-3 max-w-2xl text-body">A controlled contact hierarchy for the founder story, proof channels, and the JB³Ai network.</p>
          </div>
          <GlassPanel size="md" animate={false} tone="muted" className="w-full max-w-xs">
            <div className="text-caption">Network map</div>
            <div className="mt-4 h-24 rounded-3xl bg-white/5" />
          </GlassPanel>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <GlassPanel size="md" animate={false} tone="muted" className="h-fit">
          <div className="mb-5 text-caption">Filter groups</div>
          <div className="space-y-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`filter-pill w-full text-left ${selectedGroup === group ? 'filter-pill-active' : ''}`}>
                {group}
              </button>
            ))}
          </div>
        </GlassPanel>

        <div className="space-y-6">
          <GlassPanel size="md" animate={false}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="eyebrow">Search</div>
                <p className="mt-2 text-body-sm">Search contacts, platforms, and purpose text.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search contacts or platforms"
                className="input-shell sm:w-80"
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredLinks.map((item) => (
              <SocialLinkCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
