import type { InvestorItem } from '../types/content.types'

export type InvestorRecord = InvestorItem

export const investorRecords: InvestorRecord[] = [
  {
    id: 'public-investor-overview',
    title: 'Public Investor Overview',
    category: 'Public Overview',
    visibility: 'Public',
    status: 'Available',
    summary:
      'A concise overview of Jonathan Blackburn’s founder profile, track record, JB³Ai direction, and current product ecosystem.',
    documentType: 'Overview',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['investor', 'overview', 'founder'],
    cautionNote: ''
  },
  {
    id: 'founder-market-fit',
    title: 'Founder-Market Fit',
    category: 'Founder-Market Fit',
    visibility: 'Public Preview',
    status: 'Available',
    summary:
      'A structured explanation of why Jonathan’s background in automation, diagnostics, recovery systems, compliance, and AI supports the JB³Ai build direction.',
    documentType: 'Profile',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['founder-market-fit', 'jb3ai', 'systems'],
    cautionNote: 'Keep claims public-safe and avoid exposing sensitive intelligence capabilities.'
  },
  {
    id: 'business-proof-points',
    title: 'Business Proof Points',
    category: 'Proof Points',
    visibility: 'Public Preview',
    status: 'Available',
    summary:
      'A high-level list of verified or evidence-backed business milestones, awards, technical builds, and historical execution proof.',
    documentType: 'Proof Summary',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['proof', 'awards', 'execution'],
    cautionNote: 'Use careful wording for iMED, awards, accreditation, and financial claims.'
  },
  {
    id: 'financial-commercial-pack',
    title: 'Financial / Commercial Pack',
    category: 'Locked Documents',
    visibility: 'Investor Only',
    status: 'Locked',
    summary:
      'Controlled-access financial and commercial material for formal investor or strategic partner review.',
    documentType: 'Private Pack',
    accessLevel: 'PIN Required',
    fileUrl: '#',
    tags: ['financial', 'commercial', 'private'],
    cautionNote: 'Never expose publicly. Requires approved access.'
  },
  {
    id: 'founder-due-diligence-pack',
    title: 'Founder Due Diligence Pack',
    category: 'Due Diligence',
    visibility: 'Investor Only',
    status: 'Locked',
    summary:
      'Controlled-access founder due diligence material for verified review.',
    documentType: 'Private Pack',
    accessLevel: 'Request Access',
    fileUrl: '#',
    tags: ['due-diligence', 'founder', 'private'],
    cautionNote: 'Contains sensitive personal, legal, and verification material. Keep locked.'
  },
  {
    id: 'product-strategy-pack',
    title: 'Product Strategy Pack',
    category: 'Roadmap',
    visibility: 'Investor Only',
    status: 'Locked',
    summary:
      'Private strategy material covering product direction, platform roadmap, commercial logic, and future build layers.',
    documentType: 'Private Pack',
    accessLevel: 'Request Access',
    fileUrl: '#',
    tags: ['product', 'strategy', 'roadmap'],
    cautionNote: 'Do not expose proprietary product logic publicly.'
  },
  {
    id: 'private-roadmap',
    title: 'Private Roadmap',
    category: 'Roadmap',
    visibility: 'Investor Only',
    status: 'Locked',
    summary:
      'Restricted roadmap material for future JB³Ai products, Jonathan Blackburn OS extensions, and commercial rollout planning.',
    documentType: 'Roadmap',
    accessLevel: 'PIN Required',
    fileUrl: '#',
    tags: ['roadmap', 'future', 'private'],
    cautionNote: 'Preview title only. Content remains restricted.'
  },
  {
    id: 'full-cv-certificate-pack',
    title: 'Full CV / Certificate Pack',
    category: 'Due Diligence',
    visibility: 'Investor Only',
    status: 'Locked',
    summary:
      'Full unmasked credential, certificate, profile, and supporting document pack for approved investor review.',
    documentType: 'Private Pack',
    accessLevel: 'PIN Required',
    fileUrl: '#',
    tags: ['cv', 'certificates', 'credentials'],
    cautionNote: 'Public site should only show safe summaries, not unmasked documents.'
  }
]
