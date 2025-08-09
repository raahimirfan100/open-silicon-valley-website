import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Briefcase, TrendingUp, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Young Professionals | OPEN Silicon Valley',
  description:
    "Join OPEN Silicon Valley's Young Professionals program for early to mid-career professionals",
}

export default function YoungProfessionalsPage() {
  const benefits = [
    {
      icon: Briefcase,
      title: 'Career Development',
      description:
        'Access to workshops, seminars, and resources focused on advancing your career in tech and entrepreneurship.',
    },
    {
      icon: Network,
      title: 'Professional Networking',
      description:
        'Connect with industry leaders, potential mentors, and peers at your career stage.',
    },
    {
      icon: TrendingUp,
      title: 'Skill Enhancement',
      description:
        'Participate in training sessions and workshops to develop both technical and soft skills.',
    },
    {
      icon: Users,
      title: 'Mentorship Opportunities',
      description: 'Both receive mentorship from senior professionals and mentor junior members.',
    },
  ]

  const events = [
    {
      title: 'Monthly Networking Mixers',
      description:
        'Casual networking events held monthly at various tech companies and co-working spaces.',
      frequency: 'Monthly',
    },
    {
      title: 'Professional Development Workshops',
      description:
        'Skills-focused workshops covering leadership, communication, and technical expertise.',
      frequency: 'Quarterly',
    },
    {
      title: 'Industry Panel Discussions',
      description:
        'Panels featuring successful professionals discussing career paths and industry trends.',
      frequency: 'Bi-monthly',
    },
    {
      title: 'Mentorship Program',
      description:
        'Structured mentorship program pairing young professionals with experienced leaders.',
      frequency: 'Ongoing',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-20" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Young Professionals</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Designed for early to mid-career professionals looking to accelerate their growth,
              expand their network, and make meaningful contributions to the Pakistani-American
              business community in Silicon Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a href="https://opensv.wildapricot.org/join-us">
                  Join as Young Professional <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Learn More</Link>
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
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Young Professionals program is tailored for individuals who are 3-10 years
                  into their careers and are looking to take the next step in their professional
                  journey. Whether you're in tech, finance, consulting, or any other field, this
                  program provides the resources and connections you need.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Members gain access to exclusive networking events, professional development
                  workshops, mentorship opportunities, and a supportive community of like-minded
                  professionals.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Membership Investment</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$100</div>
                  <div className="text-gray-600">per year</div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Young+Professionals"
                  alt="Young Professionals networking event"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
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
              <h2 className="text-3xl font-bold mb-4">Member Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our Young Professionals program offers comprehensive support for your career
                advancement and professional growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
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

      {/* Events & Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Events & Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regular events and programs designed specifically for young professionals to learn,
                network, and grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="border-gray-100 shadow-xs">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {event.frequency}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{event.description}</CardDescription>
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
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from young professionals who have benefited from our program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=AR"
                      alt="Ahmed Rahman"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The mentorship I received through OPEN SV's Young Professionals program was
                    instrumental in my promotion to Senior Product Manager."
                  </p>
                  <div className="font-semibold">Ahmed Rahman</div>
                  <div className="text-sm text-gray-500">Senior Product Manager, Meta</div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=FN"
                      alt="Fatima Noor"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The networking events helped me find my co-founder and launch my fintech
                    startup. The community support has been amazing."
                  </p>
                  <div className="font-semibold">Fatima Noor</div>
                  <div className="text-sm text-gray-500">Co-founder, PayFlow</div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=OK"
                      alt="Omar Khan"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The professional development workshops gave me the leadership skills I needed
                    to transition into management."
                  </p>
                  <div className="font-semibold">Omar Khan</div>
                  <div className="text-sm text-gray-500">Engineering Manager, Stripe</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our Young Professionals program and connect with a community that will support
              your growth and success.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="https://opensv.wildapricot.org/join-us">
                Apply for Membership <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
