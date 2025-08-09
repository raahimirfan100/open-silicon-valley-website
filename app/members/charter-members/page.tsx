import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, Check, Users, Award, Lightbulb, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Charter Members | OPEN Silicon Valley',
  description:
    "Learn about OPEN Silicon Valley's Charter Membership program and benefits for established entrepreneurs and professionals.",
}

export default function CharterMembersPage() {
  const benefits = [
    {
      title: 'Exclusive Networking',
      description:
        'Access to exclusive networking events with industry leaders, investors, and fellow entrepreneurs.',
      icon: Network,
    },
    {
      title: 'Mentorship Opportunities',
      description: 'Opportunity to mentor rising entrepreneurs and professionals in the community.',
      icon: Users,
    },
    {
      title: 'Priority Access',
      description:
        'Priority access and VIP seating at all OPEN events, conferences, and workshops.',
      icon: Award,
    },
    {
      title: 'Leadership Roles',
      description:
        'Eligibility for leadership positions within OPEN Silicon Valley committees and initiatives.',
      icon: Lightbulb,
    },
  ]

  const testimonials = [
    {
      name: 'Adil Khan',
      role: 'CEO, TechVentures',
      image: '/placeholder.svg?height=100&width=100&text=AK',
      quote:
        "Being a Charter Member of OPEN Silicon Valley has connected me with an incredible network of like-minded entrepreneurs and professionals. The relationships I've built have been invaluable for my business growth.",
    },
    {
      name: 'Sana Malik',
      role: 'Founder, HealthTech Solutions',
      image: '/placeholder.svg?height=100&width=100&text=SM',
      quote:
        "As a Charter Member, I've had the opportunity to mentor young entrepreneurs and give back to the community. It's been incredibly rewarding to see them grow and succeed with the guidance I've provided.",
    },
    {
      name: 'Tariq Ahmed',
      role: 'Managing Partner, Venture Capital Firm',
      image: '/placeholder.svg?height=100&width=100&text=TA',
      quote:
        "The exclusive events and connections I've made through OPEN's Charter Membership have directly led to several investment opportunities that wouldn't have been possible otherwise.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Charter Membership</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our prestigious network of established entrepreneurs and professionals making an
              impact in Silicon Valley.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="https://opensv.wildapricot.org/join-us" className="flex items-center gap-2">
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
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

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/members">
                  <ArrowLeft className="h-4 w-4" /> Back to Membership
                </Link>
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">About Charter Membership</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Charter Members are the backbone of OPEN Silicon Valley. They are established
                  entrepreneurs, executives, investors, and professionals who have achieved
                  significant success in their careers and are committed to giving back to the
                  community.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  As a Charter Member, you'll join an exclusive network of accomplished individuals
                  who share your passion for entrepreneurship, innovation, and community building.
                  You'll have opportunities to mentor rising entrepreneurs, participate in
                  high-level networking events, and contribute to the strategic direction of OPEN
                  Silicon Valley.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Charter Membership is by application and is subject to approval by the OPEN
                  Silicon Valley Board of Directors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <a href="https://opensv.wildapricot.org/join-us">Apply Now</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Charter+Members"
                    alt="OPEN Silicon Valley Charter Members"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Charter Membership Details</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Charter Membership offers exclusive benefits and opportunities to connect,
                contribute, and make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Membership Fee</h3>
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">$500</div>
                      <div className="text-gray-500">per year</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Your membership fee supports OPEN Silicon Valley's programs and initiatives,
                    including mentorship programs, educational workshops, and community events.
                  </p>
                  <Button asChild className="w-full rounded-full">
                    <a href="https://opensv.wildapricot.org/join-us">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Eligibility Criteria</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Established entrepreneur, executive, investor, or professional
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Minimum of 10 years of professional experience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Demonstrated leadership and success in your field
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Commitment to giving back to the community
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Willingness to mentor and support rising entrepreneurs
                      </span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href="/contact">Contact for More Information</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 hover:border-primary/20 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">What Our Charter Members Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our Charter Members about their experiences and the value they've gained
                from being part of OPEN Silicon Valley.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                        <Image
                          src={testimonial.image || '/placeholder.svg'}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Application Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Becoming a Charter Member involves a simple application process to ensure a good fit
                for both you and OPEN Silicon Valley.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">
                      1
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-bold mb-4">Submit Application</h3>
                    <p className="text-gray-600">
                      Complete the online application form with your professional background,
                      achievements, and why you're interested in becoming a Charter Member.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">
                      2
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-bold mb-4">Review Process</h3>
                    <p className="text-gray-600">
                      Our Membership Committee reviews your application and may schedule a brief
                      conversation to learn more about your background and interests.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">
                      3
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-bold mb-4">Approval & Onboarding</h3>
                    <p className="text-gray-600">
                      Upon approval, you'll receive an invitation to join as a Charter Member. After
                      completing your membership payment, you'll be onboarded with an orientation
                      session.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex md:justify-end">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10">
                      4
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white p-6 rounded-xl shadow-xs">
                    <h3 className="text-xl font-bold mb-4">Welcome to the Community</h3>
                    <p className="text-gray-600">
                      Start engaging with fellow Charter Members, attend exclusive events, and
                      explore opportunities to mentor and contribute to the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join as a Charter Member?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards joining our prestigious network of entrepreneurs and
              professionals making an impact in Silicon Valley.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
