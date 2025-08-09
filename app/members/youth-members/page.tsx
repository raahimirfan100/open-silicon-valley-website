import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  Users,
  Lightbulb,
  Briefcase,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Youth Members | OPEN Silicon Valley',
  description:
    "Learn about OPEN Silicon Valley's Youth Membership program and benefits for students and young entrepreneurs.",
}

export default function YouthMembersPage() {
  const benefits = [
    {
      title: 'Mentorship',
      description:
        'Access to mentorship from experienced professionals and entrepreneurs in Silicon Valley.',
      icon: Users,
    },
    {
      title: 'Educational Resources',
      description:
        'Access to workshops, webinars, and resources designed specifically for young entrepreneurs.',
      icon: GraduationCap,
    },
    {
      title: 'Networking',
      description:
        'Opportunities to network with peers and professionals at OPEN events and programs.',
      icon: Lightbulb,
    },
    {
      title: 'Internships',
      description:
        'Access to internship and job opportunities through the OPEN Silicon Valley network.',
      icon: Briefcase,
    },
  ]

  const testimonials = [
    {
      name: 'Zara Khan',
      role: 'Computer Science Student, Stanford University',
      image: '/placeholder.svg?height=100&width=100&text=ZK',
      quote:
        "Being a Youth Member of OPEN Silicon Valley has opened doors for me that I never thought possible. The mentorship I've received has been invaluable for my personal and professional growth.",
    },
    {
      name: 'Ali Hassan',
      role: 'Young Entrepreneur, Founder of EdTech Startup',
      image: '/placeholder.svg?height=100&width=100&text=AH',
      quote:
        "The workshops and networking events organized by OPEN have helped me refine my business idea and connect with potential investors. I've learned so much from the experienced entrepreneurs in the community.",
    },
    {
      name: 'Sana Ahmed',
      role: 'Engineering Student, UC Berkeley',
      image: '/placeholder.svg?height=100&width=100&text=SA',
      quote:
        "Through OPEN's Youth Membership, I secured an internship at a leading tech company in Silicon Valley. The guidance and support from the community have been instrumental in launching my career.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Youth Membership</h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering the next generation of entrepreneurs and professionals through mentorship,
              education, and networking.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="https://opensv.wildapricot.org/join-us" className="flex items-center gap-2">
                Join Now <ArrowRight className="h-4 w-4" />
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
                <h2 className="text-3xl font-bold mb-6">About Youth Membership</h2>
                <p className="text-lg text-gray-600 mb-6">
                  OPEN Silicon Valley's Youth Membership is designed for students and young
                  entrepreneurs who are passionate about innovation, technology, and
                  entrepreneurship. Our program provides the guidance, resources, and connections
                  needed to help you succeed in your academic and professional journey.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  As a Youth Member, you'll have access to mentorship from experienced
                  professionals, educational workshops and webinars, networking opportunities with
                  peers and industry leaders, and potential internship and job opportunities through
                  our extensive network.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're a high school student, college undergraduate, or a young
                  entrepreneur with a budding business idea, our Youth Membership program is
                  designed to support your growth and development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <a href="https://opensv.wildapricot.org/join-us">Join Now</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Youth+Members"
                    alt="OPEN Silicon Valley Youth Members"
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
              <h2 className="text-3xl font-bold mb-6">Youth Membership Details</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Youth Membership program offers a range of benefits designed to support your
                personal and professional development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Membership Fee</h3>
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">$50</div>
                      <div className="text-gray-500">per year</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Your membership fee supports OPEN Silicon Valley's youth-focused programs and
                    initiatives, including mentorship programs, educational workshops, and
                    networking events.
                  </p>
                  <Button asChild className="w-full rounded-full">
                    <a href="https://opensv.wildapricot.org/join-us">Join Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Eligibility Criteria</h3>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">High school students (ages 16-18)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        College/university students (undergraduate)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">Young entrepreneurs (under 25)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Interest in technology, innovation, or entrepreneurship
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600">
                        Commitment to personal and professional growth
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

      {/* Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Youth Programs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Youth Membership includes access to a variety of programs designed to support
                your growth and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Mentorship"
                      alt="Mentorship Program"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Mentorship Program</h3>
                    <p className="text-gray-600 mb-6">
                      Connect with experienced professionals and entrepreneurs who can provide
                      guidance, advice, and support for your academic and professional journey.
                    </p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href="/programs/mentorship">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Workshops"
                      alt="Workshops and Webinars"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Workshops & Webinars</h3>
                    <p className="text-gray-600 mb-6">
                      Participate in educational workshops and webinars on topics such as
                      entrepreneurship, technology, career development, and more.
                    </p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href="/programs/workshops">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Networking"
                      alt="Networking Events"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Networking Events</h3>
                    <p className="text-gray-600 mb-6">
                      Attend networking events designed specifically for youth members to connect
                      with peers, professionals, and potential mentors.
                    </p>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href="/events">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">What Our Youth Members Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our Youth Members about their experiences and the value they've gained
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

      {/* How to Join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">How to Join</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Joining as a Youth Member is simple and straightforward.
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
                    <h3 className="text-xl font-bold mb-4">Complete the Application</h3>
                    <p className="text-gray-600">
                      Fill out the online application form with your basic information, educational
                      background, and interests.
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
                    <h3 className="text-xl font-bold mb-4">Pay Membership Fee</h3>
                    <p className="text-gray-600">
                      Once your application is approved, you'll receive instructions on how to pay
                      the annual membership fee of $50.
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
                    <h3 className="text-xl font-bold mb-4">Attend Orientation</h3>
                    <p className="text-gray-600">
                      Participate in a virtual orientation session to learn about the benefits,
                      programs, and opportunities available to you as a Youth Member.
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
                    <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                    <p className="text-gray-600">
                      Start participating in programs, events, and activities designed for Youth
                      Members. Connect with mentors, peers, and the broader OPEN Silicon Valley
                      community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join as a Youth Member?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the first step towards connecting with mentors, peers, and resources that will
              help you achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <a
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Join Now <ArrowRight className="h-4 w-4" />
                </a>
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
