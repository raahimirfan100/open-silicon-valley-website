import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Star,
  Check,
  ArrowRight,
  BookOpen,
  Network,
  Award,
  DollarSign,
  Heart,
  Building2,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Join OPEN Silicon Valley | Become a Member",
  description:
    "Join OPEN Silicon Valley and connect with the leading Pakistani entrepreneurial community in Silicon Valley. Access exclusive benefits, networking, and growth opportunities.",
};

export default function JoinUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join OPEN Silicon Valley
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Become part of the premier Pakistani entrepreneurial community in
              Silicon Valley. Access exclusive networking, mentorship, and
              growth opportunities designed to accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#membership-benefits">Explore Benefits</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#apply-now">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  $50M+
                </div>
                <div className="text-gray-600">Funding Raised by Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Companies Founded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600">Membership Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16" id="membership-benefits">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Membership Benefits</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Unlock exclusive opportunities and resources designed to
                accelerate your entrepreneurial journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-3">Exclusive Networking</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>
                    • Monthly mixer events with entrepreneurs and investors
                  </li>
                  <li>• Private member-only dinners and meetups</li>
                  <li>• Access to VIP networking sessions at conferences</li>
                  <li>• Introduction facilitation to relevant contacts</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-3">Educational Resources</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Free access to all seminars and workshops</li>
                  <li>• On-demand webinar library (200+ sessions)</li>
                  <li>• Exclusive masterclasses with industry experts</li>
                  <li>• Business templates and resource downloads</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-3">Mentorship Access</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>
                    • 1:1 mentorship matching with experienced entrepreneurs
                  </li>
                  <li>• Group mentorship sessions and roundtables</li>
                  <li>• Access to advisor network for business guidance</li>
                  <li>• Peer mentorship circles and accountability groups</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-3">Business Opportunities</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Job board with exclusive startup opportunities</li>
                  <li>• Partnership and collaboration facilitation</li>
                  <li>• Investor introduction and pitch opportunities</li>
                  <li>• Business development and customer referrals</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-3">Exclusive Discounts</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• 50% off all conferences and premium events</li>
                  <li>• Discounted rates from partner service providers</li>
                  <li>• Free or reduced pricing on business services</li>
                  <li>• Early bird access to all events and programs</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-3">Recognition & Growth</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Member spotlight opportunities and features</li>
                  <li>• Speaking opportunities at OPEN events</li>
                  <li>• Awards and recognition programs</li>
                  <li>• Community leadership roles and positions</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Membership Options</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the membership level that best fits your stage and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Young Professional */}
              <Card className="border-gray-100 relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Young Professional</CardTitle>
                  <div className="text-2xl font-bold text-green-600">
                    $99/year
                  </div>
                  <p className="text-sm text-gray-600">
                    For early-career professionals under 30
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Access to all networking events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Basic mentorship program</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Educational webinars</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Online community access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>

              {/* Professional */}
              <Card className="border-gray-100 relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Professional</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    $199/year
                  </div>
                  <p className="text-sm text-gray-600">
                    For established professionals and entrepreneurs
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>All Young Professional benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>Premium mentorship matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>VIP event access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>Business resource library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>Partner service discounts</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select Plan</Button>
                </CardFooter>
              </Card>

              {/* Executive */}
              <Card className="border-gray-100 relative border-primary">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Executive</CardTitle>
                  <div className="text-2xl font-bold text-purple-600">
                    $399/year
                  </div>
                  <p className="text-sm text-gray-600">
                    For senior executives and founders
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span>All Professional benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span>Executive roundtables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span>Investor introductions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span>Speaking opportunities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-purple-500" />
                      <span>Priority event seating</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary">Select Plan</Button>
                </CardFooter>
              </Card>

              {/* Charter Member */}
              <Card className="border-gray-100 relative border-orange-500">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Charter Member</CardTitle>
                  <div className="text-2xl font-bold text-orange-600">
                    $999/year
                  </div>
                  <p className="text-sm text-gray-600">
                    Lifetime supporters with premium access
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-500" />
                      <span>All Executive benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-500" />
                      <span>Board meeting access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-500" />
                      <span>Private events hosting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-500" />
                      <span>Legacy recognition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-orange-500" />
                      <span>Strategic input opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Simple Application Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting started is easy. Follow these steps to join our
                community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-gray-600">
                  Complete our online application form with your background and
                  goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Review Process</h3>
                <p className="text-sm text-gray-600">
                  Our membership committee reviews applications within 5-7
                  business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Welcome Interview</h3>
                <p className="text-sm text-gray-600">
                  Brief 15-minute call to discuss your goals and how OPEN can
                  help.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Start Networking</h3>
                <p className="text-sm text-gray-600">
                  Join your first event within 30 days and start building
                  connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from successful entrepreneurs who have benefited from OPEN
                membership.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=SH"
                    alt="Sarah Hassan"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Hassan</h4>
                    <p className="text-sm text-gray-600">
                      CEO, MedTech Innovations
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "OPEN's mentorship program connected me with advisors who
                  helped navigate FDA approvals for our medical device. The
                  network opened doors I never knew existed."
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </Card>

              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=AM"
                    alt="Ali Mahmood"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Ali Mahmood</h4>
                    <p className="text-sm text-gray-600">Founder, FinNext</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The investor introductions through OPEN led directly to our
                  Series A funding. Beyond capital, I gained board members who
                  actively contribute to our growth."
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </Card>

              <Card className="border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=ZK"
                    alt="Zara Khan"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Zara Khan</h4>
                    <p className="text-sm text-gray-600">
                      VP Engineering, DataFlow
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "As a technical leader, OPEN helped me develop business acumen
                  through workshops and peer connections. The community support
                  during my startup journey was invaluable."
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="py-16" id="apply-now">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step toward accelerating your entrepreneurial
              journey with OPEN Silicon Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact-us">Have Questions? Contact Us</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Application review typically takes 5-7 business days. Questions?
              Email membership@opensiliconvalley.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
