import React from 'react'
import {
  OsActionStrip,
  OsInteriorSection,
  OsMetricCard,
  OsPreviewCard
} from '../components/os'
import { thirdRiseStatement } from '../content/founderManual.content'
import { founderProfile } from '../content/founder.content'
import { PremiumButton, StatusBadge } from '../components/primitives'
import { assetRegistry } from '../data/assetRegistry'

const summaryCards = [
  {
    title: 'Public Summary',
    text: founderProfile.publicSummary
  },
  {
    title: 'Proof Chapters',
    text: 'Elite Technologies, Trust in Hope, iMED, and JB³Ai form the four proof chapters behind the public founder story.'
  },
  {
    title: 'Investor Lens',
    text: founderProfile.investorSummary
  },
  {
    title: 'Systems Philosophy',
    text: 'Technology should serve real life. AI is not the product. Structure is the product.'
  }
]

const storyPoints = [
  {
    label: 'Signal Roots',
    copy: 'Electronics, AV, automation, and control systems built the habit of making signal clear, integration reliable, and output usable.'
  },
  {
    label: 'Elite Technologies',
    copy: 'Elite Technologies turned those instincts into delivery: practical systems, enterprise-grade problem solving, and work that had to function outside the slide deck.'
  },
  {
    label: 'Trust in Hope',
    copy: 'Trust in Hope made recovery a disciplined operating model, where accountability, routine, care, and rebuilding had to work together.'
  },
  {
    label: 'iMED',
    copy: 'iMED became the precision chapter: diagnostics, forensic toxicology, COVID-response coordination, DNA expansion, and compliance-minded systems built under pressure.'
  },
  {
    label: 'JB³Ai & GTR³',
    copy: 'JB³Ai and OS³ carry those lessons forward into AI for good, while GTR³ holds the more personal story of fatherhood, recovery, and the third rebuild still in progress.'
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
            mediaSrc={assetRegistry.founderProfileSide}
            fallbackMediaSrc={assetRegistry.founderPortraitPlaceholder}
            mediaAlt="Black-and-white side-profile portrait of Jonathan Blackburn."
            mediaClassName="h-56"
            mediaImageClassName="object-cover object-[center_24%]"
            badges={<StatusBadge variant="success" size="sm">Public-safe profile</StatusBadge>}
            note="Approved public portrait treatment. Deeper biography and founder media remain intentionally withheld."
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
          title="A founder path shaped by signal, structure, precision, and a quieter kind of ambition."
          intro="This is the deeper founder profile: more precise than the public homepage, still public-safe, and organised around the chapters that shaped the current operating model."
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
          title="GTR³ holds the symbolic next chapter."
          intro={founderProfile.gtr3Summary}
          side={<StatusBadge variant="warning">Coming Soon</StatusBadge>}
          className="h-full"
        >
          <OsActionStrip
            title={thirdRiseStatement}
            note="This workspace stays manuscript-safe and public-safe until the book, family, and deeper recovery layers are intentionally released."
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
