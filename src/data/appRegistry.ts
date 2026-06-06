import { APP_IDS } from '../types/content.types'
import type { AppId, AppRegistryItem } from '../types/content.types'

export const appRegistry: AppRegistryItem[] = [
  { id: 'founder-brief', name: 'Founder Brief', icon: '◈', meta: 'Executive Identity Layer' },
  { id: 'project-showcase', name: 'Project Showcase', icon: '▣', meta: 'Product and Build Overview' },
  { id: 'video-vault', name: 'Video Vault', icon: '▶', meta: 'Video and Briefing Library' },
  { id: 'jb3-daily', name: 'JB³ Daily Show', icon: '◉', meta: 'Founder Broadcast Surface' },
  { id: 'public-feed', name: 'Public Feed', icon: '⟡', meta: 'Signal and Commentary Feed' },
  { id: 'evidence-vault', name: 'Evidence Vault', icon: '◆', meta: 'Proof and Documentation Layer' },
  { id: 'timeline', name: 'Founder Timeline', icon: '↗', meta: 'Milestone and History Layer' },
  { id: 'gtr3', name: 'GTR³ Preview', icon: '△', meta: 'Coming Soon Story Layer' },
  { id: 'investor-room', name: 'Investor Room', icon: '⬢', meta: 'Controlled Access Review Layer' },
  { id: 'connect', name: 'Connect', icon: '◎', meta: 'Network and Contact Hub' }
]

const appIdSet = new Set<string>(APP_IDS)

export function isAppId(value: string): value is AppId {
  return appIdSet.has(value)
}
