export type InvestorRecord = {
  id: string
  title: string
  category: string
  visibility: string
  status: string
  summary: string
  documentType: string
  accessLevel: 'Public' | 'Request Access' | 'PIN Required' | 'Private'
  fileUrl: string
  tags: string[]
  cautionNote: string
}

export const investorRecords: InvestorRecord[] = [
  {
    id: 'public-investor-overview',
    title: 'Public Investor Overview',
    category: 'Public Overview',
    visibility: 'Public',
    status: 'Open',
    summary: 'Investor-ready executive overview of market position, opportunity thesis, and founder-led value creation.',
    documentType: 'Executive Summary',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['overview', 'strategy', 'investor'],
    cautionNote: 'Public-facing overview for verified interest, intentionally high-level and safe.'
  },
  {
    id: 'founder-market-fit',
    title: 'Founder-Market Fit',
    category: 'Founder-Market Fit',
    visibility: 'Public',
    status: 'Open',
    summary: 'A concise founder-to-market narrative showing strategic alignment, domain expertise, and product differentiation.',
    documentType: 'Market Fit Brief',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['founder', 'market', 'fit'],
    cautionNote: 'Public summary only; deep diligence details are reserved for later review.'
  },
  {
    id: 'business-proof-points',
    title: 'Business Proof Points',
    category: 'Proof Points',
    visibility: 'Public',
    status: 'Open',
    summary: 'High-level proof points that validate revenue model, team execution, and customer trust signals.',
    documentType: 'Proof Brief',
    accessLevel: 'Public',
    fileUrl: '#',
    tags: ['proof', 'business', 'validation'],
    cautionNote: 'Public proof points are curated to signal traction while avoiding sensitive detail.'
  },
  {
    id: 'financial-commercial-pack',
    title: 'Locked Financial / Commercial Pack',
    category: 'Locked Documents',
    visibility: 'Request Access',
    status: 'Locked',
    summary: 'A controlled pack of commercial metrics, revenue scenarios, and topline financial assumptions.',
    documentType: 'Financial Pack',
    accessLevel: 'Request Access',
    fileUrl: '#',
    tags: ['financial', 'commercial', 'metrics'],
    cautionNote: 'Access request required before any financial disclosures can be shared.'
  },
  {
    id: 'founder-due-diligence-pack',
    title: 'Locked Founder Due Diligence Pack',
    category: 'Due Diligence',
    visibility: 'PIN Required',
    status: 'Locked',
    summary: 'A private pack for authorized review with controlled founder background and verification notes.',
    documentType: 'Due Diligence Pack',
    accessLevel: 'PIN Required',
    fileUrl: '#',
    tags: ['founder', 'due diligence', 'background'],
    cautionNote: 'PIN entry is required to simulate secure access to sensitive founder records.'
  },
  {
    id: 'product-strategy-pack',
    title: 'Locked Product Strategy Pack',
    category: 'Locked Documents',
    visibility: 'PIN Required',
    status: 'Locked',
    summary: 'A locked dossier of product strategy, roadmaps, and competitive positioning materials.',
    documentType: 'Strategy Pack',
    accessLevel: 'PIN Required',
    fileUrl: '#',
    tags: ['product', 'strategy', 'roadmap'],
    cautionNote: 'Product strategy is held behind controlled access to preserve review confidentiality.'
  },
  {
    id: 'private-roadmap',
    title: 'Locked Private Roadmap',
    category: 'Roadmap',
    visibility: 'Private',
    status: 'Restricted',
    summary: 'A private roadmap overview for reviewed partners, showing timing, milestones, and execution risk management.',
    documentType: 'Private Roadmap',
    accessLevel: 'Private',
    fileUrl: '#',
    tags: ['roadmap', 'planning', 'milestones'],
    cautionNote: 'Private roadmap access is reserved for invited, verified investors only.'
  },
  {
    id: 'full-cv-certificate-pack',
    title: 'Locked Full CV / Certificate Pack',
    category: 'Due Diligence',
    visibility: 'Private',
    status: 'Restricted',
    summary: 'A full credentials pack for authorized diligence, including certifications and career proof statements.',
    documentType: 'CV / Certificate Pack',
    accessLevel: 'Private',
    fileUrl: '#',
    tags: ['CV', 'certificates', 'credentials'],
    cautionNote: 'Private credentials are not available in the public investor shell.'
  }
]
