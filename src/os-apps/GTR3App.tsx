import React from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsPreviewCard,
  OsTimelineRow
} from '../components/os'
import { thirdRiseStatement } from '../content/founderManual.content'
import { gtr3Content } from '../content/gtr3.content'
import { assetRegistry } from '../data/assetRegistry'
import { PremiumButton, StatusBadge } from '../components/primitives'

export default function GTR3App() {
  return (
    <div className="os-interior-stack">
      <OsInteriorSection
        eyebrow="GTR³ Preview"
        title={gtr3Content.headline}
        intro={`${thirdRiseStatement} ${gtr3Content.longTeaser}`}
        side={<StatusBadge variant="warning">{gtr3Content.status}</StatusBadge>}
      >
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_320px]">
          <OsPreviewCard
            eyebrow={gtr3Content.title}
            title={thirdRiseStatement}
            summary="GTR³ is the symbolic layer of the third rebuild: not a flex, not a finished acquisition, but a story about fatherhood, discipline, recovery, and returning with more wisdom than noise."
            note={gtr3Content.visibilityNote}
            tone="feature"
          />
          <OsPreviewCard
            eyebrow="Story Image"
            title="Preview placeholder"
            summary="The final GTR³ visual asset is still pending. For now this preview plate holds space for a story image without pretending the third car or full manuscript already exists."
            mediaSrc={assetRegistry.gtr3Placeholder}
            fallbackMediaSrc={assetRegistry.gtr3Placeholder}
            mediaAlt="GTR³ placeholder artwork"
            mediaClassName="h-60"
            badges={<StatusBadge variant="neutral" size="sm">Story layer</StatusBadge>}
            tone="muted"
          />
        </div>
      </OsInteriorSection>

      <OsInteriorSection
        eyebrow="Themes"
        title="Core emotional and structural threads"
        intro="These themes are treated as story pillars rather than aspirational slogans or dashboard stats."
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
        intro="These preview beats track the founder story without exposing manuscript pages or private family material."
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
        title="GTR³ preview actions"
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
