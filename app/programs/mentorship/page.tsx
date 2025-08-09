import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Lightbulb, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentorship | OPEN Silicon Valley',
  description:
    'Connect with experienced mentors who can guide you through your entrepreneurial and professional journey',
}

export default function MentorshipPage() {
  const mentorshipPrograms = [
    {
      title: 'Startup Mentorship',
      description:
        'Get guidance from successful entrepreneurs on launching and scaling your startup.',
      icon: Lightbulb,
      benefits: [
        'One-on-one mentoring sessions',
        'Business strategy development',
        'Investor connections',
        'Market validation support',
      ],
    },
    {
      title: 'Career Development',
      description: 'Navigate your career path with insights from industry leaders and executives.',
      icon: Briefcase,
      benefits: [
        'Career path planning',
        'Skill development guidance',
        'Industry insights',
        'Professional networking',
      ],
    },
    {
      title: 'Leadership Growth',
      description: 'Develop your leadership skills with guidance from experienced executives.',
      icon: Target,
      benefits: [
        'Leadership style assessment',
        'Team management strategies',
        'Decision-making frameworks',
        'Executive presence development',
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        'The mentorship program helped me pivot my startup strategy and secure our first round of funding.',
      author: 'Sarah Khan',
      role: 'Founder, TechStart',
      image: '/placeholder.svg?height=100&width=100&text=SK',
    },
    {
      quote:
        "My mentor's guidance was instrumental in my transition from engineering to product management.",
      author: 'Ahmed Malik',
      role: 'Product Manager, Tech Corp',
      image: '/placeholder.svg?height=100&width=100&text=AM',
    },
    {
      quote:
        'The leadership mentorship helped me develop the skills needed to lead my team effectively.',
      author: 'Fatima Ali',
      role: 'Engineering Director, Innovate Inc',
      image: '/placeholder.svg?height=100&width=100&text=FA',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-primary/10 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Professional Growth
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentorship Program</h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with experienced mentors who can guide you through your entrepreneurial and
              professional journey, helping you achieve your goals faster and more effectively.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#programs">Explore Programs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Become a Mentor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mentorship Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the program that best aligns with your goals and aspirations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentorshipPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our mentorship program is designed to create meaningful connections and lasting
                impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Apply</h3>
                <p className="text-gray-600">
                  Submit your application and tell us about your goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Match</h3>
                <p className="text-gray-600">We'll match you with the perfect mentor</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Connect</h3>
                <p className="text-gray-600">Meet your mentor and establish goals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Grow</h3>
                <p className="text-gray-600">Regular sessions to track progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our mentees about their journey and growth through our mentorship program.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="text-lg text-gray-600 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-linear-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our mentorship program and take the next step in your professional development.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact" className="flex items-center gap-2">
                    Apply as Mentee <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/contact">Become a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
