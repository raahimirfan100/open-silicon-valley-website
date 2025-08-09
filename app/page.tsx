import type { Metadata } from 'next'
import Hero from '@/components/hero'
import StatsSection from '@/components/stats-section'
import AboutSection from '@/components/about-section'
import SponsorsSection from '@/components/sponsors-section'
import LeadershipSection from '@/components/leadership-section'
import ProgramsSection from '@/components/programs-section'
import PresidentMessage from '@/components/president-message'
import EventsGallery from '@/components/events-gallery'
import UpcomingEvents from '@/components/upcoming-events'
import BoardMembersSection from '@/components/board-members-section'
import { siteMetadata } from '@/data/site-metadata'

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.organization.name,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.organization.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <UpcomingEvents />
      <LeadershipSection />
      <EventsGallery />
      <BoardMembersSection />
      <PresidentMessage />
      <SponsorsSection />
    </>
  )
}
