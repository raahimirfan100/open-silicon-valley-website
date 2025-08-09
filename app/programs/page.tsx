import type { Metadata, Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, BookOpen, Calendar } from 'lucide-react'
import { programs } from '@/data/programs'

export const metadata: Metadata = {
  title: 'Programs | OPEN Silicon Valley',
  description: "Explore OPEN Silicon Valley's programs supporting entrepreneurs and professionals",
}

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting entrepreneurs, professionals, and students at every stage of their journey
              with targeted programs designed to foster growth, innovation, and success.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={program.link as Route}
                        className="flex items-center justify-center gap-2"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forums */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Forums"
                    alt="OPEN Silicon Valley Forums"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Forums</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join our community of entrepreneurs, investors, and professionals at our forums.
                  Visit our dedicated forums website for more information and to register for
                  upcoming events.
                </p>
                <Button asChild size="lg" className="rounded-full w-fit">
                  <a
                    href="https://opensvforums.org"
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Forums Website <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Workshops"
                    alt="OPEN Silicon Valley Workshops"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                  Regular Events
                </div>
                <h2 className="text-3xl font-bold mb-6">Workshops</h2>
                <p className="text-lg text-gray-600 mb-6">
                  SIG events are arranged on a regular basis where people in a particular domain or
                  with a particular interest gather and learn from others via meetups, talks and
                  workshops.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our workshops cover a wide range of topics including startup funding, marketing,
                  product development, leadership, and more, providing practical skills and
                  knowledge.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Monthly Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Hands-on Learning</span>
                  </div>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/programs/workshops" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types - Conferences, Seminars, Webinars, Networking */}
      <section className="py-16" id="conferences">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Conferences</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our flagship conferences featuring industry leaders, investors, and successful
                entrepreneurs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Annual OPEN Conference</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our flagship annual event bringing together 500+ entrepreneurs, investors, and
                    tech leaders.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>📅 Next: Fall 2024</div>
                    <div>📍 San Francisco Bay Area</div>
                    <div>👥 Expected: 500+ Attendees</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/programs/conferences">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Industry Summits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sector-specific conferences focusing on tech, healthcare, fintech, and emerging
                    industries.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>📅 Quarterly Events</div>
                    <div>📍 Various Locations</div>
                    <div>🎯 Industry-Focused</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/programs/conferences">View Summits</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Startup Showcase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Pitch competitions and demo days for emerging startups to present to investors.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>📅 Bi-Annual</div>
                    <div>📍 Silicon Valley</div>
                    <div>💰 Investment Opportunities</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/programs/conferences">Apply to Present</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="py-16 bg-gray-50" id="seminars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Seminars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Monthly educational sessions covering essential business topics and emerging trends.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Business Fundamentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Essential topics covering legal structures, taxation, intellectual property, and
                    compliance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Business Registration & Legal Structures</li>
                    <li>• Tax Planning & Financial Management</li>
                    <li>• Intellectual Property Protection</li>
                    <li>• Employment Law & HR Compliance</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/programs/seminars">View Schedule</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle>Technology & Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Cutting-edge topics in AI, blockchain, cybersecurity, and emerging technologies.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AI & Machine Learning Applications</li>
                    <li>• Blockchain & Cryptocurrency</li>
                    <li>• Cybersecurity Best Practices</li>
                    <li>• Digital Transformation Strategies</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/programs/seminars">Join Next Seminar</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-16" id="webinars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Virtual learning sessions accessible from anywhere, featuring expert speakers and
                interactive Q&A.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Upcoming Webinars</h3>
                <div className="space-y-4">
                  <Card className="border-gray-100">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Startup Funding Strategies</h4>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          Live
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Learn about seed funding, venture capital, and alternative financing
                        options.
                      </p>
                      <div className="text-xs text-gray-500">
                        <div>📅 Next Friday, 2:00 PM PST</div>
                        <div>🎤 Speaker: Sarah Chen, Partner at Kleiner Perkins</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-100">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Digital Marketing for Startups</h4>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          On-Demand
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Effective strategies for customer acquisition and brand building online.
                      </p>
                      <div className="text-xs text-gray-500">
                        <div>🎤 Speaker: Ahmed Malik, CMO at Dropbox</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Button asChild className="mt-6">
                  <Link href="/programs/webinars">View All Webinars</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Webinar+Session"
                  alt="OPEN Silicon Valley Webinar Session"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="py-16 bg-gray-50" id="networking">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Networking</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect with fellow entrepreneurs, investors, and industry professionals through our
                structured networking events.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Monthly Mixers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Casual evening events at premier venues across Silicon Valley.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>📅 First Thursday of each month</div>
                    <div>🕕 6:00 PM - 8:00 PM</div>
                    <div>📍 Rotating venues</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/programs/networking">RSVP for Next Event</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Speed Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Structured sessions designed to maximize meaningful connections in minimal time.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>📅 Quarterly events</div>
                    <div>🕒 90-minute sessions</div>
                    <div>🤝 Meet 15+ professionals</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/programs/networking">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Industry Meetups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Sector-specific gatherings for deep-dive discussions and specialized networking.
                  </p>
                  <div className="text-sm text-gray-500">
                    <div>🎯 Tech, Healthcare, Fintech</div>
                    <div>👥 15-30 participants</div>
                    <div>💡 Topic-focused discussions</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/programs/networking">Join a Meetup</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Program Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join us for our upcoming program events and take advantage of the learning and
                networking opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                    Workshop
                  </div>
                  <CardTitle>Startup Funding Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>June 5, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Sunnyvale Innovation Center</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A workshop on fundraising strategies for early-stage startups, covering angel
                    investment, venture capital, and alternative funding sources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                    Women Forum
                  </div>
                  <CardTitle>Women in Tech Seminar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>July 22, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>Palo Alto Community Center</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    A seminar focused on challenges and opportunities for women entrepreneurs in the
                    tech industry, featuring successful women leaders.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                    Mentorship
                  </div>
                  <CardTitle>Mentor Matching Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>August 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>OpenSV Hub, Palo Alto</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Connect with experienced mentors who can provide guidance and support for your
                    entrepreneurial journey or professional development.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/events" className="flex items-center gap-2">
                  View All Events <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're an entrepreneur, investor, professional, or student, there's a place
              for you in our community. Join OPEN Silicon Valley today and take advantage of our
              programs and network.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Become a Member <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/volunteer-with-us" className="flex items-center gap-2">
                  Volunteer With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
