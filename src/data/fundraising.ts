import type { SponsorTier, FundraisingLink } from '@/types';

export const supportTiers: SponsorTier[] = [
  {
    id: 'ai-tokens',
    label: 'AI Tokens',
    amountZAR: 200,
    amountUSD: 10,
    description: 'Helps buy AI tokens to keep Isikulo free and running.',
    icon: 'Zap',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'gtr3-reserve',
    label: 'Reserve GTR³ Limited Edition',
    amountZAR: 900,
    amountUSD: 50,
    description: 'Sponsor build time and reserve a limited edition copy of the GTR³ book.',
    icon: 'BookOpen',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'learner-access',
    label: 'Sponsor Learner Access',
    amountZAR: 1800,
    amountUSD: 100,
    description: 'Help sponsor learner access and platform expansion for South African students.',
    icon: 'GraduationCap',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'hardware-recovery',
    label: 'Hardware Recovery',
    amountZAR: 4500,
    amountUSD: 250,
    description: 'Help toward hardware recovery and development tools.',
    icon: 'Cpu',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
];

export const supportLinks: FundraisingLink[] = [
  {
    id: 'buymeacoffee',
    label: 'Buy Me a Coffee',
    href: 'https://www.buymeacoffee.com/jonoblackburn',
    platform: 'buymeacoffee',
    description: 'International support hub. Once-off, monthly, updates, GTR³ previews, and community access.',
  },
  {
    id: 'paybru',
    label: 'PayBru (South Africa)',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
    platform: 'paybru',
    description: 'Local support in ZAR. Bank payouts, founding sponsor tiers, and community memberships.',
  },
  {
    id: 'paypal',
    label: 'PayPal',
    href: 'https://paypal.me/jonoblackburnza',
    platform: 'paypal',
    description: 'Global trust. International supporters, higher-value contributions, GTR³ reservations, and business sponsor payments.',
  },
  {
    id: 'ko-fi',
    label: 'Ko-fi',
    href: 'https://ko-fi.com/D0K721OP8E',
    platform: 'other',
    description: 'Support free education and platform development.',
  },
];

export const sponsorActions = [
  {
    id: 'sponsor-isikulo',
    label: 'Sponsor Isikulo',
    mark: 'SI',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'sponsor-learner',
    label: 'Sponsor a Learner',
    mark: 'SL',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'fund-ai-credits',
    label: 'Fund AI Credits',
    mark: 'AI',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'support-free-education',
    label: 'Support Free Education',
    mark: 'FE',
    href: 'https://ko-fi.com/D0K721OP8E',
  },
  {
    id: 'founding-sponsor',
    label: 'Become a Founding Sponsor',
    mark: 'FS',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'gtr3-limited-edition',
    label: 'Reserve GTR³ Limited Edition',
    mark: 'G3',
    href: 'https://paypal.me/jonoblackburnza',
  },
];
