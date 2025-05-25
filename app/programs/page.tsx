import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react"
import { programs } from "@/data/programs"

export const metadata: Metadata = {
  title: "Programs | OPEN Silicon Valley",
  description: "Explore OPEN Silicon Valley's programs supporting entrepreneurs and professionals",
}

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting entrepreneurs, professionals, and students at every stage of their journey with targeted
              programs designed to foster growth, innovation, and success.
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
                <Card key={index} className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
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
                      <Link href={program.link} className="flex items-center justify-center gap-2">
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

      {/* Annual Forum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Annual+Forum"
                    alt="OPEN Silicon Valley Annual Forum"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                  Flagship Event
                </div>
                <h2 className="text-3xl font-bold mb-6">Annual Forum</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our annual forum brings together entrepreneurs, investors, and professionals for a day of learning,
                  networking, and inspiration with keynote speakers and panel discussions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  The forum features keynote speeches from successful entrepreneurs, panel discussions on emerging
                  trends, networking opportunities, and a startup showcase.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Annual Event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>500+ Attendees</span>
                  </div>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/programs/annual-forum" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Forum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Women+Forum"
                    alt="OPEN Silicon Valley Women Forum"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                  Quarterly Event
                </div>
                <h2 className="text-3xl font-bold mb-6">Women Forum</h2>
                <p className="text-lg text-gray-600 mb-6">
                  These networking events are arranged every quarter in which accomplished entrepreneurs, seasoned
                  professionals, students, business leaders, and investors get a chance to interact and learn from each
                  other.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  The Women Forum provides a platform for women entrepreneurs and professionals to connect, share
                  experiences, and support each other in their professional journeys.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Quarterly Events</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>200+ Attendees</span>
                  </div>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/programs/women-forum" className="flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
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
                  SIG events are arranged on a regular basis where people in a particular domain or with a particular
                  interest gather and learn from others via meetups, talks and workshops.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our workshops cover a wide range of topics including startup funding, marketing, product development,
                  leadership, and more, providing practical skills and knowledge.
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

      {/* Upcoming Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Program Events</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join us for our upcoming program events and take advantage of the learning and networking opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
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
                    A workshop on fundraising strategies for early-stage startups, covering angel investment, venture
                    capital, and alternative funding sources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
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
                    A seminar focused on challenges and opportunities for women entrepreneurs in the tech industry,
                    featuring successful women leaders.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
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
                    Connect with experienced mentors who can provide guidance and support for your entrepreneurial
                    journey or professional development.
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

      {/* Conferences Section */}
      <section id="conferences" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Conferences</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our conferences bring together thought leaders, industry experts, and innovators to discuss key trends, share insights, and foster collaboration. Expect impactful keynotes, in-depth panel discussions, and valuable networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Seminars Section */}
      <section id="seminars" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Seminars</h2>
            <p className="text-lg text-gray-600 mb-8">
              OPEN SV seminars offer focused learning experiences on specific topics, led by experienced professionals. These sessions are designed to provide practical knowledge and actionable insights for attendees.
            </p>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Webinars</h2>
            <p className="text-lg text-gray-600 mb-8">
              Access expert knowledge from anywhere with OPEN SV webinars. We cover a range of topics relevant to entrepreneurs and professionals, featuring live Q&A sessions with speakers.
            </p>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section id="networking" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Networking Events</h2>
            <p className="text-lg text-gray-600 mb-8">
              Building connections is key. OPEN SV hosts various networking events, providing opportunities to connect with peers, mentors, investors, and potential partners in a supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're an entrepreneur, investor, professional, or student, there's a place for you in our
              community. Join OPEN Silicon Valley today and take advantage of our programs and network.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="https://opensv.wildapricot.org/join-us" className="flex items-center gap-2">
                  Become a Member <ArrowRight className="h-4 w-4" />
                </Link>
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
