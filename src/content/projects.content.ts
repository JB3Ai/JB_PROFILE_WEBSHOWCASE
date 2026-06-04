import type { ProjectItem } from '../types/content.types'

export const projects: ProjectItem[] = [
  {
    id: 'dukebox-london',
    name: 'The DukeBox of London',
    category: 'Creative Web / Music Culture',
    status: 'Public Preview',
    summary:
      'A creative web and media experience exploring music culture, visual identity, and immersive digital storytelling.',
    pdf: '/assets/pdfs/dukebox-product-profile.pdf',
    video: '/assets/videos/dukebox-preview.mp4',
    image: '/assets/images/dukebox-preview.jpg',
    access: 'public'
  },
  {
    id: 'clipboard-os3-lite',
    name: 'Clipboard OS³ Lite',
    category: 'Shared Workspace / OS³ Entry Layer',
    status: 'Prototype',
    summary:
      'A lightweight shared operating workspace for notes, tabs, team coordination, chat, pinned information, and real-time work visibility.',
    pdf: '/assets/pdfs/clipboard-os3-lite.pdf',
    video: '/assets/videos/clipboard-preview.mp4',
    image: '/assets/images/clipboard-preview.jpg',
    access: 'public'
  },
  {
    id: 'jb3-voicegrid-os3',
    name: 'JB³ VoiceGrid OS³',
    category: 'AI Voice / Communications',
    status: 'Product Profile',
    summary:
      'An intelligent voice and communication layer designed to connect conversations, business workflows, routing, support, and AI-assisted response systems.',
    pdf: '/assets/pdfs/jb3-voicegrid-os3.pdf',
    video: '/assets/videos/voicegrid-preview.mp4',
    image: '/assets/images/voicegrid-preview.jpg',
    access: 'public'
  },
  {
    id: 'os3-dash',
    name: 'OS³ Dash',
    category: 'Managed AI Operating System',
    status: 'Demo',
    summary:
      'The managed AI operating layer for business, designed to bring workflows, intelligence, dashboards, human oversight, and modular AI tools into one structured command environment.',
    pdf: '/assets/pdfs/os3-dash-product-profile.pdf',
    video: '/assets/videos/os3-dash-preview.mp4',
    image: '/assets/images/os3-dash-preview.jpg',
    access: 'public'
  },
  {
    id: 'jb3-viewgrid',
    name: 'JB³ ViewGrid',
    category: 'Visual Intelligence / Dashboard',
    status: 'Concept',
    summary:
      'A visual command layer for organising projects, assets, evidence, dashboards, media, and operational views inside a structured grid interface.',
    pdf: '/assets/pdfs/jb3-viewgrid-product-profile.pdf',
    video: '/assets/videos/viewgrid-preview.mp4',
    image: '/assets/images/viewgrid-preview.jpg',
    access: 'public'
  }
]
