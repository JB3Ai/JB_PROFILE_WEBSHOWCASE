import type { AppId } from '../types/content.types'

export const founderManualPrinciples = [
  {
    number: '01',
    title: 'Structure Before Hope',
    summary: 'Chaos is not solved by hope. Chaos is solved by systems.'
  },
  {
    number: '02',
    title: 'People Before Platforms',
    summary: 'Technology should protect, empower, and support human beings.'
  },
  {
    number: '03',
    title: 'Proof Before Noise',
    summary: 'Real systems are built on evidence, delivery, and accountability.'
  },
  {
    number: '04',
    title: 'Rebuild Before Retreat',
    summary: 'Failure is not the end state. It is the next architecture brief.'
  }
] as const

export type FounderPhase = {
  id: 'signal' | 'structure' | 'precision' | 'intelligence'
  label: string
  title: string
  summary: string
  detail: string
  highlights: string[]
  appIds: AppId[]
}

export const founderPhaseSystem: FounderPhase[] = [
  {
    id: 'signal',
    label: 'Phase 01',
    title: 'Signal',
    summary: 'Electronics, AV, Elite Technologies, early systems, sound, networks, control, and user experience.',
    detail: 'The first phase is where signal integrity, control, and experience design became the foundation for everything that followed.',
    highlights: ['Electronics', 'Automation', 'Control systems'],
    appIds: ['founder-brief', 'timeline']
  },
  {
    id: 'structure',
    label: 'Phase 02',
    title: 'Structure',
    summary: 'Recovery, Trust in Hope, human systems, discipline, accountability, and rebuilding.',
    detail: 'This phase is about turning pressure into structure: care systems, recovery logic, and disciplined rebuilding when conditions do not cooperate.',
    highlights: ['Recovery systems', 'Human coordination', 'Discipline'],
    appIds: ['project-showcase', 'evidence-vault']
  },
  {
    id: 'precision',
    label: 'Phase 03',
    title: 'Precision',
    summary: 'iMED, diagnostics, toxicology, DNA, compliance, laboratories, and high-stakes systems.',
    detail: 'Precision is where laboratory thinking, evidence control, and compliance-grade systems sharpened the founder operating model.',
    highlights: ['Diagnostics', 'Toxicology', 'Compliance'],
    appIds: ['investor-room', 'public-feed']
  },
  {
    id: 'intelligence',
    label: 'Phase 04',
    title: 'Intelligence',
    summary: 'JB3Ai, OS³, AI for good, GTR³, automation, and founder operating systems.',
    detail: 'The current phase links AI, automation, and story into a founder operating system built for resilient growth and human-first intelligence.',
    highlights: ['JB3Ai', 'OS³', 'GTR³'],
    appIds: ['gtr3', 'jb3-daily', 'video-vault', 'connect']
  }
]

export const osManualLayers = [
  ['Manual Mode', 'Preview'],
  ['Story Layer', 'Active'],
  ['Evidence Layer', 'Withheld'],
  ['Investor Layer', 'Request Access'],
  ['GTR³ Layer', 'Loading']
] as const

export const founderManualStatement =
  'This is not a portfolio. It is a living founder blueprint.'

export const thirdRiseStatement =
  'GTR³ is not just a car. It is the loading state of the third rise.'
