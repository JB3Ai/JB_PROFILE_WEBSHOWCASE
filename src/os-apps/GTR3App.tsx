import React from 'react'
import { gtr3Content } from '../content/gtr3.content'
import { GlassPanel, PremiumButton, StatusBadge } from '../components/primitives'

export default function GTR3App() {
  return (
    <div className="space-y-6">
      <GlassPanel size="lg" animate={false}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <StatusBadge variant="warning">{gtr3Content.status}</StatusBadge>
            <h2 className="mt-4 text-display text-white">{gtr3Content.title}</h2>
            <p className="mt-4 max-w-3xl text-body">{gtr3Content.shortTeaser}</p>
          </div>
          <GlassPanel size="md" animate={false} tone="muted">
            <div className="text-caption">Preview window</div>
            <p className="mt-3 text-body-sm">{gtr3Content.visibilityNote}</p>
          </GlassPanel>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <GlassPanel size="md" animate={false} tone="muted">
          <div className="text-caption">Themes</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {gtr3Content.themes.map((theme) => (
              <div key={theme.title} className="rounded-3xl bg-white/5 p-4">
                <h3 className="text-heading-sm text-white">{theme.title}</h3>
                <p className="mt-2 text-body-sm">{theme.summary}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel size="md" animate={false}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-caption">Chapter preview</div>
              <h3 className="mt-2 text-heading-sm text-white">Story preview items</h3>
            </div>
            <StatusBadge variant="neutral">Live draft</StatusBadge>
          </div>
          <div className="mt-5 space-y-4">
            {gtr3Content.chapterPreviewItems.map((item) => (
              <div key={item} className="rounded-3xl bg-black/20 p-4">
                <h4 className="font-semibold text-white">{item}</h4>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

      <GlassPanel size="md" animate={false} tone="muted">
        <p className="text-body">{gtr3Content.visibilityNote}</p>
      </GlassPanel>

      <div className="flex flex-wrap gap-3">
        <PremiumButton variant="ghost">{gtr3Content.ctaLabels.primary}</PremiumButton>
        <PremiumButton variant="accent">{gtr3Content.ctaLabels.secondary}</PremiumButton>
      </div>
    </div>
  )
}
