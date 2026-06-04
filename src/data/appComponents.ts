import type { ComponentType } from 'react'
import type { AppId } from '../types/content.types'
import ConnectApp from '../os-apps/ConnectApp'
import DailyShowApp from '../os-apps/DailyShowApp'
import EvidenceVaultApp from '../os-apps/EvidenceVaultApp'
import FounderBriefApp from '../os-apps/FounderBriefApp'
import GTR3App from '../os-apps/GTR3App'
import InvestorRoomApp from '../os-apps/InvestorRoomApp'
import ProjectShowcaseApp from '../os-apps/ProjectShowcaseApp'
import PublicFeedApp from '../os-apps/PublicFeedApp'
import TimelineApp from '../os-apps/TimelineApp'
import VideoVaultApp from '../os-apps/VideoVaultApp'

export const appComponents: Record<AppId, ComponentType> = {
  'founder-brief': FounderBriefApp,
  'project-showcase': ProjectShowcaseApp,
  'video-vault': VideoVaultApp,
  'jb3-daily': DailyShowApp,
  'public-feed': PublicFeedApp,
  'evidence-vault': EvidenceVaultApp,
  timeline: TimelineApp,
  gtr3: GTR3App,
  'investor-room': InvestorRoomApp,
  connect: ConnectApp
}
