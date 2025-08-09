import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket, Target, Lightbulb, Award, DollarSign, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rising Stars | OPEN Silicon Valley',
  description:
    "Join OPEN Silicon Valley's Rising Stars program for emerging entrepreneurs and leaders",
}

export default function RisingStarsPage() {
  const benefits = [
    {
      icon: Rocket,
      title: 'Startup Acceleration',
      description:
        'Access to resources, mentorship, and programs designed to help scale your business rapidly.',
    },
    {
      icon: DollarSign,
      title: 'Investor Access',
      description:
        'Direct connections to angel investors, VCs, and funding opportunities in Silicon Valley.',
    },
    {
      icon: Users,
      title: 'Elite Mentorship',
      description: 'One-on-one mentorship from successful entrepreneurs and industry leaders.',
    },
    {
      icon: Target,
      title: 'Strategic Guidance',
      description:
        'Business strategy sessions and guidance on scaling, product development, and market entry.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Support',
      description: 'Access to cutting-edge research, technology trends, and innovation labs.',
    },
    {
      icon: Award,
      title: 'Recognition Platform',
      description:
        'Opportunities to showcase your work and gain recognition in the entrepreneurial community.',
    },
  ]

  const programs = [
    {
      title: 'Pitch Perfect Series',
      description:
        'Monthly pitch sessions where Rising Stars present to investors and receive feedback.',
      duration: 'Monthly',
    },
    {
      title: 'Founder Circles',
      description:
        'Intimate roundtable discussions with successful founders sharing their experiences.',
      duration: 'Bi-weekly',
    },
    {
      title: 'Investor Meetups',
      description: 'Exclusive networking events with angel investors and venture capitalists.',
      duration: 'Quarterly',
    },
    {
      title: 'Scale-Up Workshops',
      description:
        'Intensive workshops on scaling businesses, from operations to international expansion.',
      duration: 'Monthly',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-purple-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-20" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Elite Entrepreneur Program
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rising Stars</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              An exclusive program for emerging entrepreneurs and leaders who are building the next
              generation of innovative companies. Get the mentorship, funding connections, and
              strategic guidance you need to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-linear-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700"
              >
                <a href="https://opensv.wildapricot.org/join-us">
                  Apply for Rising Stars <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">For Visionary Entrepreneurs</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Rising Stars is our most exclusive membership tier, designed for entrepreneurs who
                  have already demonstrated traction and are ready to scale their ventures. This
                  program provides direct access to Silicon Valley's most influential investors,
                  mentors, and business leaders.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're seeking Series A funding, expanding internationally, or preparing
                  for an exit, our Rising Stars program provides the strategic guidance and
                  connections you need.
                </p>
                <div className="bg-linear-to-r from-purple-50 to-orange-50 p-6 rounded-lg border border-purple-100">
                  <h3 className="font-semibold text-lg mb-2">Membership Investment</h3>
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    $250
                  </div>
                  <div className="text-gray-600">per year + application review</div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Rising+Stars+Entrepreneurs"
                  alt="Rising Stars entrepreneurs at networking event"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Successful Exits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exclusive Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Rising Stars members receive premium access to resources, mentorship, and
                opportunities that can transform their businesses.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-linear-to-r from-purple-100 to-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-orange-200 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Signature Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exclusive programs designed to accelerate your entrepreneurial journey and connect
                you with key stakeholders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <span className="text-sm bg-linear-to-r from-purple-100 to-orange-100 text-purple-700 px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Rising Stars Alumni</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet some of our successful Rising Stars who have scaled their companies and
                achieved remarkable exits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=SA"
                      alt="Sarah Ahmad"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The investor connections I made through Rising Stars led to our $15M Series A.
                    The mentorship was invaluable."
                  </p>
                  <div className="font-semibold">Sarah Ahmad</div>
                  <div className="text-sm text-gray-500">CEO, HealthAI (Acquired by Google)</div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=MH"
                      alt="Muhammad Hassan"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Rising Stars helped me navigate the complexities of scaling internationally.
                    We're now in 15 countries."
                  </p>
                  <div className="font-semibold">Muhammad Hassan</div>
                  <div className="text-sm text-gray-500">Founder, LogiTech Solutions</div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=AK"
                      alt="Ayesha Khan"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The strategic guidance from fellow Rising Stars helped us pivot successfully
                    and achieve profitability."
                  </p>
                  <div className="font-semibold">Ayesha Khan</div>
                  <div className="text-sm text-gray-500">Co-founder, EduTech Pro</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-gray-600">
                Rising Stars membership is selective. We look for entrepreneurs with demonstrated
                traction and growth potential.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Complete our comprehensive application including business metrics and growth
                  plans.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Review Process</h3>
                <p className="text-gray-600">
                  Our selection committee reviews applications and conducts interviews with
                  qualified candidates.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-linear-to-r from-purple-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Welcome & Onboarding</h3>
                <p className="text-gray-600">
                  Accepted members receive personalized onboarding and immediate access to our
                  network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-linear-to-r from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Elite?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Apply for Rising Stars membership and gain access to Silicon Valley's most exclusive
              entrepreneurial community.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-linear-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700"
            >
              <a href="https://opensv.wildapricot.org/join-us">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
