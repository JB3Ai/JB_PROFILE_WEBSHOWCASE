import React from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { founderProfile } from '../content/founder.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const summaryCards = [
  {
    title: 'Public Summary',
    text: founderProfile.publicSummary
  },
  {
    title: 'Investor Summary',
    text: founderProfile.investorSummary
  },
  {
    title: 'Recovery & iMED',
    text: founderProfile.recoverySummary
  }
]

const storyPoints = [
  {
    label: 'Foundation',
    copy: 'Technical foundations in electronics, automation, and embedded systems shaped the operating discipline behind the founder story.'
  },
  {
    label: 'Recovery',
    copy: 'Recovery work remains grounded in human outcomes, diagnostics, coordination, and systems that hold when pressure rises.'
  },
  {
    label: 'Build Pattern',
    copy: 'The working pattern stays consistent: observe, structure, test, and rebuild until the system becomes trustworthy.'
  }
]

export default function FounderBriefApp() {
  return (
    <div className="os-interior-stack">
      <OsInteriorSection
        eyebrow="Founder Brief"
        title="Jonathan Blackburn"
        intro={founderProfile.mediumBio}
        side={
          <OsPreviewCard
            eyebrow="Founder Profile Plate"
            title={founderProfile.positioningLine}
            summary={founderProfile.shortBio}
            mediaSrc={assetRegistry.founderPortraitPlaceholder}
            fallbackMediaSrc={assetRegistry.founderPortraitPlaceholder}
            mediaAlt="Jonathan Blackburn founder profile placeholder"
            mediaClassName="h-56"
            badges={<StatusBadge variant="success" size="sm">Public-safe profile</StatusBadge>}
            note="Portrait, longer biography layers, and founder media are still running in placeholder mode for this build."
            tone="muted"
          />
        }
      >
        <div className="os-metrics-grid">
          {summaryCards.map((card, index) => (
            <OsMetricCard
              key={card.title}
              label={`Profile ${index + 1}`}
              value={card.title}
              detail={card.text}
              tone={index === 0 ? 'accent' : index === 1 ? 'success' : 'warning'}
            />
          ))}
        </div>
      </OsInteriorSection>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <OsInteriorSection
          eyebrow="Operating Story"
          title="A founder path carried by structure, care, and precise rebuilding."
          intro="The strongest version of this module is editorial rather than dashboard-heavy: fewer boxes, more clarity, and a clear link between systems work and human impact."
          className="h-full"
        >
          <div className="os-preview-list">
            {storyPoints.map((point) => (
              <div key={point.label} className="os-preview-note">
                <div className="os-preview-kicker">{point.label}</div>
                <p className="os-preview-summary mt-2">{point.copy}</p>
              </div>
            ))}
          </div>
        </OsInteriorSection>

        <OsInteriorSection
          eyebrow="Next Step"
          title="GTR3 becomes the next narrative layer."
          intro={founderProfile.gtr3Summary}
          side={<StatusBadge variant="warning">Coming Soon</StatusBadge>}
          className="h-full"
        >
          <OsActionStrip
            title="Preview state"
            note="This workspace stays manuscript-safe and placeholder-safe until the real GTR3 imagery and story assets are introduced."
            actions={
              <>
                <PremiumButton variant="primary" disabled>
                  Timeline Placeholder
                </PremiumButton>
                <PremiumButton variant="secondary" disabled>
                  Collaboration Placeholder
                </PremiumButton>
              </>
            }
          />
        </OsInteriorSection>
      </div>
    </div>
  )
}
