import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Clock,
  Users,
  Play,
  Monitor,
  Download,
  Wifi,
  MessageCircle,
  Video,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webinars | OPEN Silicon Valley',
  description:
    "Join OPEN Silicon Valley's virtual learning sessions accessible from anywhere, featuring expert speakers and interactive Q&A.",
}

export default function WebinarsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OPEN Silicon Valley Webinars</h1>
            <p className="text-xl text-gray-600 mb-8">
              Virtual learning sessions accessible from anywhere in the world. Join live interactive
              webinars or access our extensive library of on-demand content featuring expert
              speakers and practical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#upcoming-webinars">Join Live Webinars</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#on-demand-library">Browse Library</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600">Webinars Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                <div className="text-gray-600">Global Attendees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Countries Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Live Webinars */}
      <section className="py-16" id="upcoming-webinars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Live Webinars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our interactive live sessions and engage directly with expert speakers.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="border-gray-100 shadow-xs overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=250&width=400&text=Live+Webinar"
                      alt="Startup Funding Strategies Webinar"
                      width={400}
                      height={250}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="default"
                        className="bg-red-100 text-red-800 flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Live Session
                      </Badge>
                      <Badge variant="outline">Free for Members</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Startup Funding Strategies: From Seed to Series A
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive guide to fundraising including valuation, term sheets, and
                      investor relations. Learn from Sarah Chen, Partner at Kleiner Perkins, who has
                      led investments in 50+ startups.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Friday, December 20, 2024</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM - 3:30 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>247 registered</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Wifi className="h-4 w-4" />
                        <span>Interactive Q&A included</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg">Register Free - Members</Button>
                      <Button variant="outline" size="lg">
                        Non-Member ($15)
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-gray-100 shadow-xs">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        Virtual
                      </Badge>
                      <Badge variant="outline">Jan 15, 2025</Badge>
                    </div>
                    <CardTitle>Digital Marketing Masterclass</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Advanced strategies for customer acquisition, retention, and growth hacking.
                      Practical workshop with live campaign analysis.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>3:00 PM - 5:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Speaker: Ahmed Malik, CMO Dropbox</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>Live chat & breakout rooms</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Pre-Register ($25)</Button>
                  </CardFooter>
                </Card>

                <Card className="border-gray-100 shadow-xs">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Video className="h-3 w-3" />
                        Virtual
                      </Badge>
                      <Badge variant="outline">Feb 8, 2025</Badge>
                    </div>
                    <CardTitle>AI Tools for Business Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Hands-on session exploring ChatGPT, Claude, and other AI tools for business
                      operations, customer service, and content creation.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>11:00 AM - 12:30 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Speaker: Dr. Zara Khan, AI Consultant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Templates & tools included</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Notify Me
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Webinars?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the benefits of our interactive virtual learning platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">HD Video Quality</h3>
                <p className="text-sm text-gray-600">
                  Crystal clear video and audio with professional production quality.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Interactive Q&A</h3>
                <p className="text-sm text-gray-600">
                  Real-time chat, polls, and direct interaction with speakers.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Downloadable Resources</h3>
                <p className="text-sm text-gray-600">
                  Slides, templates, and supplementary materials included.
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Recording Access</h3>
                <p className="text-sm text-gray-600">
                  Access recordings for 30 days after the live session.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Library */}
      <section className="py-16" id="on-demand-library">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">On-Demand Webinar Library</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our extensive collection of recorded webinars anytime, anywhere.
              </p>
            </div>

            {/* Featured Collection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Featured Collections</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Startup+Fundamentals"
                      alt="Startup Fundamentals Collection"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/70 text-white">8 Videos</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Startup Fundamentals</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Complete guide from idea validation to product launch. Perfect for first-time
                      entrepreneurs.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>⏱️ 6.5 hours total</span>
                      <span>⭐ 4.8/5 (124 reviews)</span>
                    </div>
                    <Button className="w-full" size="sm">
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Funding+Series"
                      alt="Funding & Investment Series"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/70 text-white">6 Videos</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Funding & Investment Series</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Everything about raising capital from angel investors to Series A funding
                      rounds.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>⏱️ 4.2 hours total</span>
                      <span>⭐ 4.9/5 (89 reviews)</span>
                    </div>
                    <Button className="w-full" size="sm">
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=300&text=Marketing+Mastery"
                      alt="Digital Marketing Mastery"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-black/70 text-white">10 Videos</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Digital Marketing Mastery</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Advanced marketing strategies including SEO, social media, and growth hacking
                      techniques.
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>⏱️ 8.1 hours total</span>
                      <span>⭐ 4.7/5 (156 reviews)</span>
                    </div>
                    <Button className="w-full" size="sm">
                      Explore Series
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Webinars */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Recently Added</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-gray-100 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=120&width=200&text=Legal+Webinar"
                      alt="Legal Structures Webinar"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute top-1 right-1">
                      <Badge variant="secondary" className="text-xs">
                        New
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">Visa Options for Entrepreneurs</h4>
                    <p className="text-xs text-gray-600 mb-2">Immigration law expert Sarah Khan</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>45 min</span>
                      <span>⭐ 4.9</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-100 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=120&width=200&text=AI+Webinar"
                      alt="AI Business Applications"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">AI Tools for Small Business</h4>
                    <p className="text-xs text-gray-600 mb-2">Tech consultant Dr. Zara Khan</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>52 min</span>
                      <span>⭐ 4.8</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-100 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=120&width=200&text=Finance+Webinar"
                      alt="Financial Planning Webinar"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">Cash Flow Management</h4>
                    <p className="text-xs text-gray-600 mb-2">CPA Fatima Shah</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>38 min</span>
                      <span>⭐ 4.7</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-100 overflow-hidden">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=120&width=200&text=Leadership+Webinar"
                      alt="Leadership Skills Webinar"
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">Building High-Performance Teams</h4>
                    <p className="text-xs text-gray-600 mb-2">Executive coach Omar Ali</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>63 min</span>
                      <span>⭐ 4.9</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of entrepreneurs who have accelerated their growth through our
              webinars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Join Next Live Webinar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/members">Access Full Library</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
