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
  Calendar,
  MapPin,
  Users,
  Clock,
  Mic,
  Award,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conferences | OPEN Silicon Valley",
  description:
    "Join OPEN Silicon Valley's flagship conferences featuring industry leaders, investors, and successful entrepreneurs.",
};

export default function ConferencesPage() {
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
              OPEN Silicon Valley Conferences
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our flagship conferences featuring industry leaders,
              investors, and successful entrepreneurs. Connect, learn, and grow
              with the Pakistani entrepreneur community in Silicon Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#upcoming-conferences">View Upcoming Events</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#past-conferences">Past Conferences</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-gray-600">Years of Conferences</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  2000+
                </div>
                <div className="text-gray-600">Total Attendees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Distinguished Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-16" id="upcoming-conferences">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Conferences</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't miss these upcoming opportunities to connect with industry
                leaders and fellow entrepreneurs.
              </p>
            </div>
            <div className="space-y-8">
              {/* Annual Conference */}
              <Card className="border-gray-100 shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Annual+Conference+2024"
                      alt="OPEN Silicon Valley Annual Conference 2024"
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-primary">
                        Featured Event
                      </Badge>
                      <Badge variant="outline">Early Bird Available</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Annual OPEN Conference 2024
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our flagship annual event bringing together 500+
                      entrepreneurs, investors, and tech leaders. This year's
                      theme: "Innovation Beyond Borders" featuring keynotes from
                      unicorn founders and Silicon Valley VCs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>November 15-16, 2024</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>San Francisco Convention Center</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>500+ Expected Attendees</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>2 Days, 20+ Sessions</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg">
                        Register Now - $299 (Early Bird)
                      </Button>
                      <Button variant="outline" size="lg">
                        View Full Agenda
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Industry Summits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Q4 2024</Badge>
                    </div>
                    <CardTitle>FinTech Summit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Deep dive into financial technology innovations,
                      blockchain, and the future of digital payments.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>December 8, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Palo Alto, CA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>150 Attendees</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Q1 2025</Badge>
                    </div>
                    <CardTitle>HealthTech Innovation Summit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Exploring the intersection of technology and healthcare,
                      featuring medical device startups and digital health
                      platforms.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>March 15, 2025</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>South Bay, CA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>200 Attendees</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Pre-Register
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our conferences are designed to provide maximum value through
                diverse programming and networking opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Keynote Speakers</h3>
                <p className="text-sm text-gray-600">
                  Industry leaders, successful entrepreneurs, and thought
                  leaders sharing insights.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Networking Sessions</h3>
                <p className="text-sm text-gray-600">
                  Structured networking with entrepreneurs, investors, and
                  industry professionals.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Startup Showcase</h3>
                <p className="text-sm text-gray-600">
                  Pitch competitions and demo sessions featuring emerging
                  Pakistani startups.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Partner Exhibitions</h3>
                <p className="text-sm text-gray-600">
                  Connect with sponsors, service providers, and potential
                  business partners.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Past Conferences */}
      <section className="py-16" id="past-conferences">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Past Conferences</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Look back at our successful events and the impact they've had on
                our community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Conference+2023"
                  alt="OPEN Conference 2023"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Annual Conference 2023</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    "Building Resilient Startups" - 450 attendees, 25 speakers
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📅 Nov 2023</span>
                    <span>📍 San Jose</span>
                    <span>⭐ 4.8/5 Rating</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=AI+Summit+2023"
                  alt="AI Summit 2023"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">
                    AI & Machine Learning Summit
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Deep dive into AI applications and ML for startups
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📅 Sep 2023</span>
                    <span>📍 Mountain View</span>
                    <span>⭐ 4.9/5 Rating</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Startup+Showcase+2023"
                  alt="Startup Showcase 2023"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Startup Showcase 2023</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    20 startups pitched to VCs, $2M in funding committed
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>📅 Jun 2023</span>
                    <span>📍 Palo Alto</span>
                    <span>💰 $2M Funding</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Next Conference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on the premier gathering of Pakistani entrepreneurs
              in Silicon Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Register for Annual Conference
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact-us">Become a Sponsor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
