import React from 'react'
import { gtr3Content } from '../content/gtr3.content'

export default function GTR3App() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-2xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-amber-300">{gtr3Content.status}</div>
            <h2 className="mt-2 text-4xl font-semibold text-white">{gtr3Content.title}</h2>
            <p className="mt-4 text-gray-300 max-w-3xl">{gtr3Content.shortTeaser}</p>
          </div>
          <div className="rounded-3xl bg-black/30 px-6 py-5 text-white border border-white/10 shadow-lg">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Preview window</div>
            <p className="mt-3 text-gray-300">{gtr3Content.visibilityNote}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-black/20 p-6 shadow-lg">
          <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Themes</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {gtr3Content.themes.map((theme) => (
              <div key={theme} className="rounded-3xl bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">{theme}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-300">Chapter preview</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">Story preview items</h3>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300">Live draft</div>
          </div>
          <div className="mt-5 space-y-4">
            {gtr3Content.chapterPreviewItems.map((item) => (
              <div key={item} className="rounded-3xl bg-black/20 p-4">
                <h4 className="font-semibold text-white">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/20 p-6 text-gray-300 shadow-lg">
        <p>{gtr3Content.visibilityNote}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-full bg-red-950 px-5 py-3 text-amber-100">{gtr3Content.ctaLabels.primary}</button>
        <button className="rounded-full bg-white/10 px-5 py-3 text-white">{gtr3Content.ctaLabels.secondary}</button>
      </div>
    </div>
  )
}
