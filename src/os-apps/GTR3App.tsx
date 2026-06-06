import React from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsPreviewCard,
  OsTimelineRow
} from '../components/os'
import { gtr3Content } from '../content/gtr3.content'
import { assetRegistry } from '../data/assetRegistry'
import { PremiumButton, StatusBadge } from '../components/primitives'

export default function GTR3App() {
  return (
    <div className="os-interior-stack">
      <OsInteriorSection
        eyebrow="GTR3 Preview"
        title={gtr3Content.headline}
        intro={gtr3Content.longTeaser}
        side={<StatusBadge variant="warning">{gtr3Content.status}</StatusBadge>}
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_320px]">
          <OsPreviewCard
            eyebrow={gtr3Content.title}
            title={gtr3Content.shortTeaser}
            summary="This module carries the strongest emotional tone in the OS. It should feel like a premium story layer held inside the command shell, not a generic card stack."
            note={gtr3Content.visibilityNote}
            tone="feature"
          />
          <OsPreviewCard
            eyebrow="Story Image"
            title="Preview placeholder"
            summary="The final GTR3 visual asset is still pending. This placeholder keeps the layout stable and public-safe until the real book/site image layer is ready."
            mediaSrc={assetRegistry.gtr3Placeholder}
            fallbackMediaSrc={assetRegistry.gtr3Placeholder}
            mediaAlt="GTR3 placeholder artwork"
            mediaClassName="h-60"
            badges={<StatusBadge variant="neutral" size="sm">Story layer</StatusBadge>}
            tone="muted"
          />
        </div>
      </OsInteriorSection>

      <OsInteriorSection
        eyebrow="Themes"
        title="Core emotional and structural threads"
        intro="Each theme is treated as a story pillar rather than a dashboard stat."
      >
        <div className="os-preview-grid">
          {gtr3Content.themes.map((theme) => (
            <OsPreviewCard
              key={theme.title}
              eyebrow="Theme"
              title={theme.title}
              summary={theme.summary}
              tone="muted"
            />
          ))}
        </div>
      </OsInteriorSection>

      <OsInteriorSection
        eyebrow="Chapter Preview"
        title="Story progression"
        intro="Preview items are presented as a narrative track inside the OS shell rather than a plain bullet list."
      >
        <div className="os-timeline-list">
          {gtr3Content.chapterPreviewItems.map((item, index) => (
            <OsTimelineRow
              key={item}
              period={`Chapter ${String(index + 1).padStart(2, '0')}`}
              title={item}
              summary="Preview line only. Full chapter text, manuscript material, and deeper personal content remain withheld."
              visibility="Preview"
            />
          ))}
        </div>
      </OsInteriorSection>

      <OsActionStrip
        title="GTR3 actions"
        note={gtr3Content.visibilityNote}
        actions={
          <>
            <PremiumButton variant="ghost" disabled>
              {gtr3Content.ctaLabels.primary}
            </PremiumButton>
            <PremiumButton variant="accent" disabled>
              {gtr3Content.ctaLabels.secondary}
            </PremiumButton>
          </>
        }
      />
    </div>
  )
}
