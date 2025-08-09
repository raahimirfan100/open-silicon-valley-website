import {
  Users,
  DollarSign,
  Building,
  TrendingUp,
  Award,
  Briefcase,
  Target,
  Crown,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Stat {
  label: string
  value: string
  icon: LucideIcon
}

export const networkStats: Stat[] = [
  { label: 'Charter Members', value: '350+', icon: Crown },
  { label: 'Executive Members', value: '150+', icon: Users },
  { label: 'Masters & above', value: '75%', icon: Award },
  { label: 'Network', value: '100,000+', icon: Building },
  { label: 'Founders', value: '100+', icon: Target },
  { label: 'Serial Entrepreneurs', value: '90+', icon: TrendingUp },
  { label: 'Corporate Entrepreneurs', value: '300+', icon: Briefcase },
  { label: 'Combined Net Worth', value: '$2B', icon: DollarSign },
  { label: 'Multi-Millionaires', value: '75+', icon: DollarSign },
  { label: 'Millionaires', value: '100+', icon: DollarSign },
  { label: 'Capital Raised', value: '$2B', icon: TrendingUp },
  { label: 'Exits', value: '$13B', icon: Award },
]
