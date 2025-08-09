export type MembershipOption = {
  id: 'executive' | 'member' | 'student' | 'volunteer' | 'guest'
  title: string
  description: string
  priceUSD: number | null
  priceDisplay: string
  period: string
  subscriptionNote: string
  recurringNote?: string
  benefits: string[]
  icon: 'building2' | 'users' | 'bookOpen' | 'heart' | 'star'
  featured?: boolean
}

export const membershipOptions: MembershipOption[] = [
  {
    id: 'executive',
    title: 'Executive Member',
    description: 'For senior executives and founders',
    priceUSD: 350,
    priceDisplay: '$350',
    period: 'per year',
    subscriptionNote: 'Subscription period: 1 year',
    recurringNote: 'No automatically recurring payments',
    benefits: ['All member benefits, plus VIP opportunities'],
    icon: 'building2',
    featured: true,
  },
  {
    id: 'member',
    title: 'Member',
    description: 'For professionals and entrepreneurs',
    priceUSD: 75,
    priceDisplay: '$75',
    period: 'per year',
    subscriptionNote: 'Subscription period: 1 year',
    recurringNote: 'No automatically recurring payments',
    benefits: ['Member-only events and discounted registration'],
    icon: 'users',
  },
  {
    id: 'student',
    title: 'Student Member',
    description: 'For students starting their careers',
    priceUSD: 30,
    priceDisplay: '$30',
    period: 'per year',
    subscriptionNote: 'Subscription period: 1 year',
    recurringNote: 'No automatically recurring payments',
    benefits: ['Access to member-only events and discounts'],
    icon: 'bookOpen',
  },
  {
    id: 'volunteer',
    title: 'Volunteer Member',
    description: 'Support OPEN SV as a volunteer',
    priceUSD: 25,
    priceDisplay: '$25',
    period: 'per year',
    subscriptionNote: 'Subscription period: 1 year',
    recurringNote: 'No automatically recurring payments',
    benefits: ['Support OPEN SV and access member benefits'],
    icon: 'heart',
  },
  {
    id: 'guest',
    title: 'Guest',
    description: 'Become a guest to make registration easier',
    priceUSD: null,
    priceDisplay: 'Free',
    period: 'unlimited',
    subscriptionNote: 'Subscription period: Unlimited',
    benefits: ['Easier registration for events'],
    icon: 'star',
  },
]
