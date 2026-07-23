export type WishlistCategory = 'ai' | 'hardware' | 'software';

export interface WishlistItem {
  id: string;
  title: string;
  category: WishlistCategory;
  description: string;
  amountZAR?: number;
  amountUSD?: number;
  icon: string;
  href: string;
}

export interface WishlistPaymentMethod {
  id: string;
  label: string;
  description: string;
  icon: string;
  href: string;
}

export const wishlistItems: WishlistItem[] = [
  {
    id: 'ai-tokens',
    title: 'AI Tokens',
    category: 'ai',
    description: 'Helps buy AI tokens to keep Isikulo free and running for every learner.',
    amountZAR: 200,
    amountUSD: 10,
    icon: 'Zap',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'voice-ai-credits',
    title: 'Voice and Language Credits',
    category: 'ai',
    description: 'Speech and multilingual processing credits across Isikulo and VoiceGrid AI.',
    icon: 'Bot',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'server-time',
    title: 'Server Time',
    category: 'hardware',
    description: 'The server time needed to bring the full OS³ ecosystem online.',
    icon: 'Server',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'hardware-recovery',
    title: 'Hardware Recovery & Ecosystem',
    category: 'hardware',
    description: 'Direct support toward hardware recovery, development tools, and core OS³ infrastructure.',
    amountZAR: 4500,
    amountUSD: 250,
    icon: 'Cpu',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'os3-infrastructure',
    title: 'Core OS³ Infrastructure',
    category: 'hardware',
    description: 'Deployments, monitoring, and reliability for the OS³ platform layer.',
    icon: 'Cloud',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'dev-hours',
    title: 'Development Hours',
    category: 'software',
    description: 'Dedicated build time across the final launch stack of the OS³ ecosystem.',
    icon: 'Clock',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'dev-tools',
    title: 'Development Tools',
    category: 'software',
    description: 'Licenses, tooling, and build infrastructure for the JB³Ai platform.',
    icon: 'Wrench',
    href: 'https://ko-fi.com/D0K721OP8E',
  },
  {
    id: 'learner-access',
    title: 'Sponsor Learner Access',
    category: 'software',
    description: 'Help sponsor learner access and platform expansion for South African students.',
    amountZAR: 1800,
    amountUSD: 100,
    icon: 'GraduationCap',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'platform-support',
    title: 'Ongoing Platform Support',
    category: 'software',
    description: 'Once-off or monthly support for ongoing platform development, updates, and community access.',
    icon: 'HeartHandshake',
    href: 'https://www.buymeacoffee.com/jonoblackburn',
  },
];

export const wishlistPaymentMethods: WishlistPaymentMethod[] = [
  {
    id: 'paybru',
    label: 'PayBru (South Africa)',
    description: 'Local support in ZAR. Bank payouts, founding sponsor tiers, and community memberships.',
    icon: 'CreditCard',
    href: 'https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor',
  },
  {
    id: 'paypal',
    label: 'PayPal',
    description: 'Global trust. International supporters, higher-value contributions, GTR³ reservations, and business sponsor payments.',
    icon: 'Globe',
    href: 'https://paypal.me/jonoblackburnza',
  },
  {
    id: 'buymeacoffee',
    label: 'Buy Me a Coffee',
    description: 'Once-off or monthly support for ongoing platform development, updates, and community access.',
    icon: 'Coffee',
    href: 'https://www.buymeacoffee.com/jonoblackburn',
  },
  {
    id: 'ko-fi',
    label: 'Ko-fi',
    description: 'Once-off or monthly support for the JB³Ai platform and the free education mission.',
    icon: 'HeartHandshake',
    href: 'https://ko-fi.com/D0K721OP8E',
  },
];
