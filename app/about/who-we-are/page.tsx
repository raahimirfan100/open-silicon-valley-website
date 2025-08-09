import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Lightbulb, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Who We Are | OPEN Silicon Valley",
  description: "Learn about OPEN Silicon Valley's mission, vision, and values",
}

export default function WhoWeArePage() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community to drive innovation and create opportunities for all members.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Our work extends beyond Silicon Valley, creating bridges between Pakistan and the global tech ecosystem.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We foster an environment where creativity and entrepreneurial thinking can flourish.",
    },
    {
      icon: Heart,
      title: "Giving Back",
      description: "We are committed to supporting the next generation and contributing to our communities.",
    },
  ]

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "OPEN Silicon Valley was established as a chapter of the global OPEN network.",
    },
    {
      year: "2015",
      title: "1000 Members",
      description: "Reached our first major milestone of 1,000 active members across all categories.",
    },
    {
      year: "2018",
      title: "Women Forum Launch",
      description: "Launched dedicated programs to support female entrepreneurs and professionals.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully transitioned to hybrid events during the pandemic, expanding our reach.",
    },
    {
      year: "2022",
      title: "Youth Program",
      description: "Established comprehensive youth and student engagement programs.",
    },
    {
      year: "2024",
      title: "Investment Fund",
      description: "Launched $2M community investment fund to support early-stage entrepreneurs.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-gray-600 mb-8">
              OPEN Silicon Valley is more than an organization—we are a community of dreamers, innovators, and
              changemakers united by our shared heritage and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To create a thriving ecosystem where Pakistani entrepreneurs, investors, and professionals can
                  connect, collaborate, and contribute to innovation in Silicon Valley and beyond.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We serve as a bridge between Pakistan and Silicon Valley, fostering entrepreneurship, facilitating
                  knowledge transfer, and creating opportunities for economic growth and social impact.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To be the premier platform for Pakistani talent in Silicon Valley, driving innovation and creating
                  lasting impact in the global technology ecosystem.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Our+Mission"
                  alt="OPEN Silicon Valley community"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and shape the culture of our community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 text-center"
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to a thriving community of over 2,000 members, our journey reflects the
                entrepreneurial spirit and determination of the Pakistani diaspora in Silicon Valley.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="border-gray-100 shadow-xs">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          </div>
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription>{milestone.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Numbers that reflect the growth and success of our community over the years.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Companies Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2B+</div>
                <div className="text-gray-600">Capital Raised</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Successful Exits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Global+Network"
                  alt="OPEN Global Network"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Part of a Global Network</h2>
                <p className="text-lg text-gray-600 mb-6">
                  OPEN Silicon Valley is proud to be part of the global OPEN network, which spans across major
                  technology hubs worldwide including London, Dubai, Toronto, and Karachi.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  This global connection allows our members to access opportunities, partnerships, and resources across
                  multiple markets, creating a truly international platform for growth and collaboration.
                </p>
                <Button asChild className="rounded-full">
                  <Link href="https://www.openglobalweb.org/" target="_blank" rel="noopener noreferrer">
                    Explore OPEN Global <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl mb-8 opacity-90">
              Join a community that's shaping the future of technology and entrepreneurship. Your story could be the
              next chapter in our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="https://opensv.wildapricot.org/join-us">
                  Become a Member <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
