import type { AppId } from '../types/content.types'

export const founderManualPrinciples = [
  {
    number: '01',
    title: 'Structure Before Hope',
    summary: 'Hope survives pressure when it is supported by structure.'
  },
  {
    number: '02',
    title: 'People Before Platforms',
    summary: 'Technology should serve people before it serves products.'
  },
  {
    number: '03',
    title: 'Proof Before Noise',
    summary: 'Credibility comes from evidence, delivery, and calm execution.'
  },
  {
    number: '04',
    title: 'Rebuild Before Retreat',
    summary: 'A setback is not the end when the system can be rebuilt.'
  },
  {
    number: '05',
    title: 'Lead With Heart',
    summary: 'Care is a leadership advantage, not a weakness.'
  },
  {
    number: '06',
    title: 'Intelligence Should Help',
    summary: 'AI is useful only when it makes life and work clearer.'
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
    summary: 'Electronics, AV, Elite Technologies, automation, control systems, and the first lessons in signal, reliability, and delivery.',
    detail: 'This phase built the core instinct that if the signal is unstable, the whole system becomes noise. Clean control, disciplined integration, and usable output started here.',
    highlights: ['Elite Technologies', 'Automation', 'Control systems'],
    appIds: ['founder-brief', 'timeline']
  },
  {
    id: 'structure',
    label: 'Phase 02',
    title: 'Structure',
    summary: 'Recovery, Trust in Hope, accountability, care systems, routine, and rebuilding the human operating system.',
    detail: 'This phase turned pressure into structure: practical care, disciplined routines, and support systems that could carry real people instead of abstract ideas.',
    highlights: ['Trust in Hope', 'Accountability', 'Rebuilding'],
    appIds: ['project-showcase', 'evidence-vault']
  },
  {
    id: 'precision',
    label: 'Phase 03',
    title: 'Precision',
    summary: 'iMED, diagnostics, forensic toxicology, COVID-response coordination, DNA expansion, and compliance-grade evidence systems.',
    detail: 'Precision is where laboratory discipline sharpened the operating model: diagnostics had to stand up, evidence had to hold, and systems had to stay reliable under clinical and operational pressure.',
    highlights: ['Diagnostics', 'Forensic toxicology', 'DNA systems'],
    appIds: ['investor-room', 'public-feed']
  },
  {
    id: 'intelligence',
    label: 'Phase 04',
    title: 'Intelligence',
    summary: 'JB³Ai, OS³, AI for good, structured automation, and GTR³ as the symbolic layer of the third rise.',
    detail: 'The current phase applies everything learned so far to AI and operating systems built for real life. AI is not the product. Structure is the product.',
    highlights: ['JB³Ai', 'OS³', 'AI for good'],
    appIds: ['gtr3', 'jb3-daily', 'video-vault', 'connect']
  }
]

export const osManualLayers = [
  ['Manual Mode', 'Preview'],
  ['Story Layer', 'Active'],
  ['Evidence Layer', 'Withheld'],
  ['Investor Layer', 'Request Access'],
  ['GTR³ Layer', 'Third rise loading']
] as const

export const founderManualStatement =
  'This is not a portfolio. It is a living founder blueprint.'

export const thirdRiseStatement =
  'GTR³ is not just a car. It is the loading state of the third rise.'
