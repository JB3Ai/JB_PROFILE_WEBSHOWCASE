import React from 'react'
import { gtr3Content } from '../content/gtr3.content'

export default function GTR3Section() {
  return (
    <section className="py-16 bg-[color:var(--bg)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-2xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="inline-flex rounded-full bg-red-950 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">{gtr3Content.status}</div>
              <h2 className="mt-5 text-3xl font-bold text-white">{gtr3Content.title}</h2>
              <p className="mt-4 text-gray-300 text-lg max-w-3xl">{gtr3Content.headline}</p>
              <p className="mt-4 text-gray-300 max-w-3xl">{gtr3Content.shortTeaser}</p>
            </div>
            <div className="rounded-[2rem] bg-black/40 p-6 shadow-lg border border-white/10 text-gray-200">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Story Preview</p>
              <p className="mt-4 leading-relaxed">{gtr3Content.longTeaser}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {gtr3Content.themes.map((theme) => (
              <div key={theme.title} className="rounded-3xl bg-black/20 border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white">{theme.title}</h3>
                <p className="mt-3 text-gray-400">{theme.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button className="rounded-full bg-red-950 px-5 py-3 text-amber-100 shadow-lg">{gtr3Content.ctaLabels.primary}</button>
            <button className="rounded-full bg-amber-200 px-5 py-3 text-black">{gtr3Content.ctaLabels.secondary}</button>
          </div>
        </div>
      </div>
    </section>
  )
}
