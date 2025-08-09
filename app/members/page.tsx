import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import { membershipOptions } from '@/data/memberships'

export const metadata: Metadata = {
  title: 'Membership | OPEN Silicon Valley',
  description: 'Learn about OPEN Silicon Valley membership types and benefits',
}

export default function MembersPage() {
  const membershipTypes = membershipOptions

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of entrepreneurs, investors, and professionals to connect, learn,
              and grow together.
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

      {/* Membership Types */}
      <section className="py-16" id="membership-types">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Membership Types</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                You can become a member to attend member-only events and get discounts on paid
                events.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {membershipTypes
                .filter((t) => t.id !== 'guest')
                .map((type, index) => (
                  <Card
                    key={index}
                    className={`relative border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col ${
                      type.featured ? 'border-primary/50 shadow-md' : ''
                    }`}
                  >
                    {type.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="flex flex-col gap-2 pb-0">
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0 -mt-2">
                      <div className="mb-6 text-center">
                        <div className="text-3xl font-bold text-primary">
                          {type.priceDisplay}
                          {type.priceUSD !== null && <span className="text-gray-600">/year</span>}
                        </div>
                        <div className="text-sm text-gray-500">{type.subscriptionNote}</div>
                        {type.recurringNote && (
                          <div className="text-xs text-gray-500 mt-1">{type.recurringNote}</div>
                        )}
                      </div>
                      <h3 className="font-medium mb-4">Benefits:</h3>
                      <ul className="space-y-2 mb-6">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        asChild
                        className={`w-full ${type.featured ? '' : 'bg-gray-700 hover:bg-gray-800'}`}
                      >
                        <a href="https://opensv.wildapricot.org/join-us">
                          {type.id === 'guest' ? 'Sign Up' : 'Apply Now'}
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
            {/* Guest CTA */}
            <div className="mt-6">
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-center sm:text-left">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                      <Star className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Just browsing?</div>
                      <p className="text-sm text-gray-600">
                        Create a free guest account to simplify event registrations.
                      </p>
                    </div>
                  </div>
                  <Button asChild className="rounded-full">
                    <a href="https://opensv.wildapricot.org/join-us">Sign up as Guest</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Member Directory */}
      <section className="py-16 bg-gray-50" id="member-directory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Member+Directory"
                    alt="OPEN Silicon Valley Member Directory"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Member Directory</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our member directory is a valuable resource for connecting with other members of
                  the OPEN Silicon Valley community. Browse profiles, find potential collaborators,
                  mentors, or business partners.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  The directory is accessible to all members and includes profiles of entrepreneurs,
                  investors, professionals, and students in our community.
                </p>
                <Button asChild className="rounded-full">
                  <a
                    href="https://opensv.wildapricot.org/directory"
                    className="flex items-center gap-2"
                  >
                    Access Directory <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Member Testimonials</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our members about how OPEN Silicon Valley has helped them in their
                professional journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-xs p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=ZA"
                      alt="Zara Ahmed"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Being a member of OPEN Silicon Valley has opened doors for me that I never
                    thought possible. The connections I've made and the mentorship I've received
                    have been invaluable for my career growth."
                  </p>
                  <div className="font-semibold">Zara Ahmed</div>
                  <div className="text-sm text-gray-500">Product Manager, Google</div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-xs p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=HA"
                      alt="Hassan Ali"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "As a young entrepreneur, OPEN SV has provided me with the guidance and support
                    I needed to navigate the startup ecosystem. The mentorship program has been
                    particularly helpful."
                  </p>
                  <div className="font-semibold">Hassan Ali</div>
                  <div className="text-sm text-gray-500">Founder, TechStart</div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-xs p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=SK"
                      alt="Sana Khan"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "The networking opportunities at OPEN SV events have been instrumental in
                    helping me find investors for my startup. I've also made lifelong friends in the
                    process."
                  </p>
                  <div className="font-semibold">Sana Khan</div>
                  <div className="text-sm text-gray-500">CEO, HealthTech Solutions</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about membership.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How do I become a member?</h3>
                  <p className="text-gray-600">
                    You can become a member by visiting our membership page on Wild Apricot and
                    filling out the application form. Once your application is reviewed and
                    approved, you'll receive an email with instructions on how to complete your
                    membership.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">What are the membership fees?</h3>
                  <p className="text-gray-600">
                    Executive Member: $350/year. Member: $75/year. Student Member: $30/year.
                    Volunteer Member: $25/year. Guest: Free (unlimited period).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">How long does membership last?</h3>
                  <p className="text-gray-600">
                    Paid memberships are annual (1 year) and do not renew automatically. Guest
                    registrations are free and have an unlimited period.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Can I upgrade my membership?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade your membership at any time. Contact us at
                    membership@opensv.org to request an upgrade, and we'll guide you through the
                    process.
                  </p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Become a part of the growing OPEN Silicon Valley family and connect with
              entrepreneurs, investors, and professionals.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <a href="https://opensv.wildapricot.org/join-us" className="flex items-center gap-2">
                Join Now <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
