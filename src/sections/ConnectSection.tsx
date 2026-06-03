import React from 'react'
import { socialLinks } from '../content/social.content'
import SocialLinkCard from '../components/cards/SocialLinkCard'

const primaryLinks = socialLinks
  .filter((item) => item.priority <= 5)
  .sort((a, b) => a.priority - b.priority)

const secondaryLinks = socialLinks
  .filter((item) => item.priority > 5)
  .sort((a, b) => a.priority - b.priority)

export default function ConnectSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Connect</h2>
              <p className="mt-3 text-gray-400 max-w-2xl">
                Contact, follow, book, and verify Jonathan Blackburn’s active channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="rounded-full bg-sky-500 px-5 py-3 text-black">Book a Call</a>
              <a href="#" className="rounded-full bg-white/10 px-5 py-3 text-white">Send Email</a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {primaryLinks.map((item) => (
              <SocialLinkCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-5 flex items-center justify-between rounded-3xl bg-black/20 p-5 border border-white/10">
              <div>
                <h3 className="text-lg font-semibold text-white">More channels</h3>
                <p className="mt-2 text-gray-400">Explore the full Connect Hub for all other social, media, and proof channels.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {secondaryLinks.map((item) => (
                <SocialLinkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
