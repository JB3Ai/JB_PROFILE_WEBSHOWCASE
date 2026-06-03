import React from 'react'
import { dailyShowEpisodes } from '../content/dailyShow.content'
import DailyShowCard from '../components/cards/DailyShowCard'

const featuredEpisode = dailyShowEpisodes[0]

export default function DailyShowSection() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">JB³ Daily Show</h2>
              <p className="mt-3 text-gray-400 max-w-2xl">
                Video-first founder briefings, AI notes, build logs, and systems thinking.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-400 px-5 py-3 text-black">Watch Latest</button>
              <button className="rounded-full bg-white/10 px-5 py-3 text-white">View Show Notes</button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-amber-300">Featured Episode</div>
              <h3 className="mt-4 text-3xl font-semibold">{featuredEpisode.title}</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
                <span>{featuredEpisode.category}</span>
                <span>•</span>
                <span>{featuredEpisode.status}</span>
                <span>•</span>
                <span>{featuredEpisode.date}</span>
              </div>
              <p className="mt-6 text-gray-300 leading-7">{featuredEpisode.summary}</p>
              <p className="mt-6 rounded-3xl bg-white/5 p-4 text-sm text-gray-200">Show Notes Preview: {featuredEpisode.articleNotes}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-3xl bg-emerald-400 px-5 py-3 text-black">Watch Episode</button>
                <button className="rounded-3xl bg-white/10 px-5 py-3 text-white">Read Notes</button>
              </div>
            </div>

            <div className="grid gap-6">
              {dailyShowEpisodes.slice(1).map((episode) => (
                <DailyShowCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
