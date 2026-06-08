export const APP_IDS = [
  'founder-brief',
  'project-showcase',
  'video-vault',
  'jb3-daily',
  'public-feed',
  'evidence-vault',
  'timeline',
  'gtr3',
  'investor-room',
  'connect'
] as const

export type AppId = (typeof APP_IDS)[number]

export type AppRegistryItem = {
  id: AppId
  name: string
  icon: string
  meta: string
}

export type ProjectItem = {
  id: string
  name: string
  category: string
  status: string
  summary: string
  pdf?: string
  video?: string
  image?: string
  access?: string
}

export type VideoItem = {
  id: string
  title: string
  category: string
  status: string
  duration: string
  summary: string
  relatedProjectId: string | null
  thumbnail: string
  videoUrl: string
  access: string
  tags: string[]
}

export type EvidenceItem = {
  id: string
  title: string
  category: string
  status: string
  visibility: string
  summary: string
  documentType: string
  fileUrl: string
  thumbnail: string
  tags: string[]
  cautionNote: string
}

export type InvestorAccessLevel = 'Public' | 'Request Access' | 'PIN Required' | 'Private'

export type InvestorItem = {
  id: string
  title: string
  category: string
  visibility: string
  status: string
  summary: string
  documentType: string
  accessLevel: InvestorAccessLevel
  fileUrl: string
  tags: string[]
  cautionNote: string
}

export type TimelineEvent = {
  id: string
  period: string
  title: string
  category: string
  summary: string
  visibility: string
  tags: string[]
}

export type FeedPostCategory =
  | 'AI for Business'
  | 'Systems Thinking'
  | 'Founder Notes'
  | 'Product Update'
  | 'GTR³ Journal'
  | 'Security Signal'

export type FeedPostStatus = 'Published' | 'Draft' | 'Coming Soon' | 'Demo Cut'

export type FeedPost = {
  id: string
  title: string
  category: FeedPostCategory
  date: string
  readTime: string
  sourceLabel: string
  sourceUrl: string
  summary: string
  jonathanTake: string
  businessImpact: string
  relatedProjectId: string
  tags: string[]
  status: FeedPostStatus
}

export type DailyShowCategory =
  | 'Founder Notes'
  | 'AI for Business'
  | 'Systems Thinking'
  | 'Build Log'
  | 'GTR³ Reflection'

export type DailyShowAccess = 'Public' | 'Subscriber' | 'Preview'

export type DailyShowEpisode = {
  id: string
  episodeNumber: number
  title: string
  category: DailyShowCategory
  status: FeedPostStatus
  date: string
  videoUrl: string
  thumbnail: string
  summary: string
  articleNotes: string
  relatedProjectId: string
  tags: string[]
  access: DailyShowAccess
}

export type SocialLink = {
  id: string
  label: string
  group: string
  platform: string
  purpose: string
  url: string
  visibility: string
  priority: number
  iconName: string
  cautionNote?: string
}

export type GTR3Theme = {
  title: string
  summary: string
}

export type GTR3Content = {
  title: string
  status: string
  headline: string
  shortTeaser: string
  longTeaser: string
  themes: GTR3Theme[]
  chapterPreviewItems: string[]
  visibilityNote: string
  ctaLabels: {
    primary: string
    secondary: string
  }
}
