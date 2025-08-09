import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Coffee,
  Handshake,
  Building2,
  Target,
  Zap,
  Heart,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Networking Events | OPEN Silicon Valley',
  description:
    "Connect with fellow entrepreneurs, investors, and industry professionals through OPEN Silicon Valley's structured networking events.",
}

export default function NetworkingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Networking Events</h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow entrepreneurs, investors, and industry professionals through our
              structured networking events designed to create meaningful business relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#upcoming-events">RSVP for Next Event</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#event-types">Explore Event Types</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Networking Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                <div className="text-gray-600">Connections Made</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Partnerships Formed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-gray-600">Report New Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16" id="upcoming-events">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Networking Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our next networking events and expand your professional circle.
              </p>
            </div>
            <div className="space-y-6">
              {/* Monthly Mixer */}
              <Card className="border-gray-100 shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Monthly+Mixer"
                      alt="OPEN Silicon Valley Monthly Mixer"
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Monthly Mixer
                      </Badge>
                      <Badge variant="outline">Open to All</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">January Networking Mixer</h3>
                    <p className="text-gray-600 mb-4">
                      Kick off the new year with our signature networking mixer! Connect with
                      entrepreneurs, investors, and industry professionals in a relaxed atmosphere.
                      Complimentary drinks and appetizers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Thursday, January 4, 2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>6:00 PM - 8:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Plug and Play Tech Center, Sunnyvale</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>65 attending, 35 spots left</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg">RSVP Now - Free</Button>
                      <Button variant="outline" size="lg">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Speed Networking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        Speed Networking
                      </Badge>
                      <Badge variant="outline">Jan 18</Badge>
                    </div>
                    <CardTitle>Q1 Speed Networking Session</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Meet 15+ professionals in 90 minutes! Structured 5-minute conversations
                      designed to maximize meaningful connections.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM - 3:30 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>WeWork San Francisco</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>30 participants (15 spots left)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register - $15</Button>
                  </CardFooter>
                </Card>

                <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        Industry Focus
                      </Badge>
                      <Badge variant="outline">Feb 15</Badge>
                    </div>
                    <CardTitle>FinTech Professionals Meetup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Connect with FinTech entrepreneurs, engineers, and investors. Deep-dive
                      discussions on blockchain, payments, and financial services.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>7:00 PM - 9:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Stripe Office, South Bay</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>FinTech professionals only</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Join Waitlist
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50" id="event-types">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Types of Networking Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer various formats to suit different networking styles and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Coffee className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Monthly Mixers</h3>
                <p className="text-gray-600 mb-6">
                  Casual evening events at premium venues across Silicon Valley. Perfect for organic
                  conversations and building relationships over drinks and appetizers.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>First Thursday of each month</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>80-120 attendees</span>
                  </div>
                </div>
                <Button className="w-full">Join Next Mixer</Button>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Speed Networking</h3>
                <p className="text-gray-600 mb-6">
                  Structured sessions designed to maximize connections in minimal time. Meet 15+
                  professionals through timed 5-minute conversations.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Quarterly events</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>90-minute sessions</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Handshake className="h-4 w-4" />
                    <span>15+ meaningful connections</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industry Meetups</h3>
                <p className="text-gray-600 mb-6">
                  Sector-specific gatherings for deep-dive discussions and specialized networking.
                  Focus areas include tech, healthcare, fintech, and emerging industries.
                </p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Industry-focused</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>15-30 participants</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Topic-focused discussions</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Browse Industries
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Networking Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real connections that led to real business opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=AS"
                    alt="Ahmad Shah"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Ahmad Shah</h4>
                    <p className="text-sm text-gray-600">Founder, TechFlow</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Met my co-founder at the March mixer. We connected over our shared vision for
                  AI-powered logistics. Six months later, we've raised $2M in seed funding!"
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Co-founder partnership formed</span>
                </div>
              </Card>

              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=FK"
                    alt="Fatima Khan"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Fatima Khan</h4>
                    <p className="text-sm text-gray-600">CEO, HealthTech Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The HealthTech meetup introduced me to key investors who later led our Series A.
                  The focused industry discussion made all the difference in building trust."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Building2 className="h-4 w-4 text-green-500" />
                  <span>$5M Series A investment</span>
                </div>
              </Card>

              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=RA"
                    alt="Rizwan Ali"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Rizwan Ali</h4>
                    <p className="text-sm text-gray-600">CTO, DataVault</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Speed networking was incredibly efficient. In 90 minutes, I met 3 potential
                  customers, 2 advisors, and 1 key hire. Our revenue grew 300% in the next quarter."
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span>300% revenue growth</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Networking */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Networking Tips for Success</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Make the most of your networking experience with these proven strategies.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Come Prepared</h4>
                      <p className="text-gray-600 text-sm">
                        Bring business cards, have a clear elevator pitch, and set specific goals
                        for the event.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Listen Actively</h4>
                      <p className="text-gray-600 text-sm">
                        Ask thoughtful questions and show genuine interest in others' businesses and
                        challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Follow Up Promptly</h4>
                      <p className="text-gray-600 text-sm">
                        Connect within 24-48 hours with a personalized message referencing your
                        conversation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Offer Value First</h4>
                      <p className="text-gray-600 text-sm">
                        Think about how you can help others before asking for assistance or favors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Networking+Tips"
                  alt="Networking best practices"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Network?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our next networking event and start building meaningful business relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                RSVP for Next Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/members">Join OPEN for Exclusive Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
