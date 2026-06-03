import React, { useMemo, useState } from 'react'
import { socialLinks } from '../content/social.content'
import SocialLinkCard from '../components/cards/SocialLinkCard'

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
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Connect Hub</div>
            <h2 className="mt-2 text-3xl font-semibold text-white">Contact and channel dashboard</h2>
            <p className="mt-3 text-gray-300 max-w-2xl">A controlled contact hierarchy for the founder story, proof channels, and the JB³Ai network.</p>
          </div>
          <div className="rounded-3xl bg-black/30 p-5 text-gray-200 border border-white/10 shadow-lg">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Network map</div>
            <div className="mt-4 h-24 w-48 rounded-3xl bg-white/5" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-lg">
          <div className="mb-5 text-sm uppercase tracking-[0.24em] text-cyan-300">Filter groups</div>
          <div className="space-y-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm ${selectedGroup === group ? 'bg-sky-500 text-black' : 'bg-white/5 text-white'}`}>
                {group}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-surface/80 p-5 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Search</div>
                <p className="mt-2 text-gray-400">Search contacts, platforms, and purpose text.</p>
              </div>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search contacts or platforms"
                className="w-full rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 sm:w-80"
              />
            </div>
          </div>

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
