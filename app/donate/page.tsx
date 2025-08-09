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
  Heart,
  Users,
  TrendingUp,
  Building2,
  Star,
  Check,
  Award,
  Globe,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Donate & Sponsor | OPEN Silicon Valley",
  description:
    "Support OPEN Silicon Valley's mission to empower Pakistani entrepreneurs. Explore donation options and corporate sponsorship packages.",
};

export default function DonatePage() {
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
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Help us empower the next generation of Pakistani entrepreneurs in
              Silicon Valley. Your support creates opportunities, builds
              networks, and drives innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#donate-now">Donate Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#sponsorship-packages">Corporate Sponsorship</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Your Impact in Numbers
              </h2>
              <p className="text-gray-600">
                See how donations have helped our community grow and succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-gray-600">Entrepreneurs Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Startups Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  $50M+
                </div>
                <div className="text-gray-600">Capital Raised by Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  2000+
                </div>
                <div className="text-gray-600">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16" id="donate-now">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Individual Giving</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every contribution, no matter the size, helps us provide
                valuable resources and opportunities to our community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Supporter */}
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Supporter</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$25</div>
                <p className="text-sm text-gray-600 mb-6">
                  Helps fund educational materials and online resources for one
                  entrepreneur.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Digital thank you</li>
                  <li>• Newsletter updates</li>
                  <li>• Annual impact report</li>
                </ul>
                <Button className="w-full" variant="outline">
                  Donate $25
                </Button>
              </Card>

              {/* Advocate */}
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advocate</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">
                  $100
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Sponsors one entrepreneur's access to mentorship programs for
                  3 months.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• All Supporter benefits</li>
                  <li>• Quarterly updates</li>
                  <li>• Donor recognition online</li>
                </ul>
                <Button className="w-full">Donate $100</Button>
              </Card>

              {/* Champion */}
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300 border-primary">
                <Badge className="mb-4">Most Popular</Badge>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Champion</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">
                  $500
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Funds a complete workshop series for 20 entrepreneurs
                  including materials.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• All Advocate benefits</li>
                  <li>• Event invitations</li>
                  <li>• Named recognition</li>
                  <li>• Direct impact stories</li>
                </ul>
                <Button className="w-full bg-primary">Donate $500</Button>
              </Card>

              {/* Patron */}
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patron</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">
                  $1,000
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Sponsors a major networking event or conference session for
                  100+ attendees.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• All Champion benefits</li>
                  <li>• VIP event access</li>
                  <li>• Annual donor dinner</li>
                  <li>• Personal thank you call</li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Donate $1,000
                </Button>
              </Card>
            </div>

            {/* Custom Donation */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want to contribute a different amount?
              </p>
              <Button size="lg" variant="outline">
                Custom Donation Amount
              </Button>
            </div>

            {/* Monthly Giving */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">
                  Monthly Giving Program
                </h3>
                <p className="text-gray-600 mb-6">
                  Join our monthly giving program for sustained impact. Monthly
                  donors receive exclusive updates and priority access to
                  special events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>Give $25/month</Button>
                  <Button>Give $50/month</Button>
                  <Button>Give $100/month</Button>
                  <Button variant="outline">Custom Monthly Amount</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship */}
      <section className="py-16 bg-gray-50" id="sponsorship-packages">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Corporate Sponsorship Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Partner with OPEN Silicon Valley to support entrepreneurship
                while gaining valuable brand exposure and networking
                opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bronze Partner */}
              <Card className="border-gray-100">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Bronze Partner</CardTitle>
                  <div className="text-3xl font-bold text-orange-600">
                    $5,000
                  </div>
                  <p className="text-sm text-gray-600">Annual partnership</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Logo on website and newsletters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Recognition at 2 major events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Social media mentions (quarterly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Access to member directory</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>4 complimentary event tickets</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Become Bronze Partner
                  </Button>
                </CardFooter>
              </Card>

              {/* Silver Partner */}
              <Card className="border-gray-100 border-primary relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary">Recommended</Badge>
                </div>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl">Silver Partner</CardTitle>
                  <div className="text-3xl font-bold text-gray-600">
                    $15,000
                  </div>
                  <p className="text-sm text-gray-600">Annual partnership</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>All Bronze benefits included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Prominent logo placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Speaking opportunity at annual conference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Networking event co-hosting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>10 complimentary event tickets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Quarterly business showcase</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary">
                    Become Silver Partner
                  </Button>
                </CardFooter>
              </Card>

              {/* Gold Partner */}
              <Card className="border-gray-100">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Gold Partner</CardTitle>
                  <div className="text-3xl font-bold text-yellow-600">
                    $35,000
                  </div>
                  <p className="text-sm text-gray-600">Annual partnership</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>All Silver benefits included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Title sponsor of major event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Executive advisory board seat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Custom partnership activations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>20 complimentary event tickets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Exclusive networking reception</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Become Gold Partner
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                How Your Support Makes a Difference
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories from entrepreneurs whose lives have been
                transformed through donor support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60&text=MK"
                      alt="Maria Khan"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Maria Khan</h4>
                      <p className="text-sm text-gray-600">
                        Founder, EduTech Solutions
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Thanks to OPEN's scholarship program funded by generous
                    donors, I was able to attend the startup accelerator that
                    transformed my education app idea into a $2M ARR business.
                    The mentorship and connections were invaluable."
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span>Company now employs 25+ people</span>
                  </div>
                </Card>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Success+Story"
                  alt="Success story impact"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Tax Deductible Donations
              </h2>
              <p className="text-gray-600 mb-6">
                OPEN Silicon Valley is a 501(c)(3) nonprofit organization. Your
                donations are tax-deductible to the full extent allowed by law.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Tax Deductible</h3>
                <p className="text-sm text-gray-600">
                  All donations are tax-deductible under section 501(c)(3).
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Official Receipt</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an official tax receipt for your records.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">EIN: 47-1234567</h3>
                <p className="text-sm text-gray-600">
                  Use this tax ID number for your tax filing purposes.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Valued Partners</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Thank you to our corporate partners who make our mission
                possible.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+1"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+2"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+3"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+4"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+5"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="/placeholder.svg?height=60&width=120&text=Partner+6"
                alt="Corporate Partner"
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Your support empowers the next generation of Pakistani
              entrepreneurs to build innovative companies and create lasting
              impact in Silicon Valley and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="#donate-now">Donate Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact-us">Discuss Partnership</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
