export type ResourceLibraryItem = {
  id: string
  title: string
  summary: string
  href: string
}

export type ResourceLibraryGroup = {
  id: string
  title: string
  summary: string
  items: ResourceLibraryItem[]
}

export const resourceLibraryGroups: ResourceLibraryGroup[] = [
  {
    id: 'isikolo',
    title: 'Isikolo',
    summary: 'Public learning and education technology material for the Isikolo mission.',
    items: [
      {
        id: 'isikolo-learners',
        title: 'JB³ ISIKOLO AI — final learners overview',
        summary: 'Learner-facing public overview for the free AI-powered education app.',
        href: '/assets/pdfs/jb3-isikolo-ai-final-learners.pdf'
      }
    ]
  },
  {
    id: 'jb3ai-systems',
    title: 'JB³Ai Systems',
    summary: 'Public system overviews for JB³Ai, OS³, and structured operating environments.',
    items: [
      {
        id: 'jb3ai-intelligence-in-motion',
        title: 'JB³Ai Intelligence in Motion',
        summary: 'Public platform overview for intelligent systems and structured clarity.',
        href: '/assets/pdfs/jb3ai-intelligence-in-motion.pdf'
      },
      {
        id: 'jb3-os3-dash',
        title: 'JB³ OS³ Dash: The Operating System',
        summary: 'Public OS³ dashboard overview for operating-system thinking.',
        href: '/assets/pdfs/jb3-os3-dash-operating-system.pdf'
      },
      {
        id: 'jb3-os3-dash-comp',
        title: 'JB³ OS³ Dash: The Operating System COMP',
        summary: 'Companion public OS³ dashboard overview.',
        href: '/assets/pdfs/jb3-os3-dash-operating-system-comp.pdf'
      }
    ]
  },
  {
    id: 'voicegrid-viewgrid',
    title: 'VoiceGrid / ViewGrid',
    summary: 'Public infrastructure concepts for voice, satellite, and grid-style systems.',
    items: [
      {
        id: 'voicegrid-call-centre',
        title: 'VOICEGRID Call Centre Infrastructure',
        summary: 'Public overview for call-centre infrastructure thinking.',
        href: '/assets/pdfs/voicegrid-call-centre-infrastructure.pdf'
      },
      {
        id: 'sovereign-voicegrid',
        title: 'Sovereign VOICEGRID Infrastructure Manual',
        summary: 'Public infrastructure manual for the VoiceGrid concept layer.',
        href: '/assets/pdfs/sovereign-voicegrid-infrastructure-manual.pdf'
      },
      {
        id: 'global-satellite-overlay',
        title: 'Global Satellite Overlay: The Sentinel Eye',
        summary: 'Public satellite-overlay concept overview.',
        href: '/assets/pdfs/global-satellite-overlay-sentinel-eye.pdf'
      },
      {
        id: 'viewgrid-satellite-overlay',
        title: 'VIEWGRID Global Satellite Overlay: The Sentinel Eye',
        summary: 'Public ViewGrid companion overview for satellite-overlay systems.',
        href: '/assets/pdfs/viewgrid-global-satellite-overlay-sentinel-eye.pdf'
      }
    ]
  },
  {
    id: 'creative-media',
    title: 'Creative / Media',
    summary: 'Public creative concept material from the media and product imagination layer.',
    items: [
      {
        id: 'cyber-noir-console',
        title: 'Cyber-Noir Music Console Magazine',
        summary: 'Public creative media concept combining music-console and cyber-noir direction.',
        href: '/assets/pdfs/cyber-noir-music-console-magazine-combined.pdf'
      }
    ]
  }
]
