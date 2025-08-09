import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Users,
  Clock,
  BookOpen,
  TrendingUp,
  Shield,
  Briefcase,
  Brain,
  DollarSign,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Seminars | OPEN Silicon Valley',
  description:
    "Join OPEN Silicon Valley's monthly educational seminars covering essential business topics and emerging trends.",
}

export default function SeminarsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pakistani-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Educational Seminars</h1>
            <p className="text-xl text-gray-600 mb-8">
              Monthly educational sessions covering essential business topics and emerging trends.
              Learn from industry experts and expand your knowledge in interactive, focused
              sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#upcoming-seminars">View Schedule</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#seminar-topics">Browse Topics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">120+</div>
                <div className="text-gray-600">Seminars Conducted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3000+</div>
                <div className="text-gray-600">Attendees Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Expert Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="py-16" id="upcoming-seminars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Seminars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our upcoming educational sessions and expand your business knowledge.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="border-gray-100 shadow-xs">
                <div className="md:flex">
                  <div className="md:w-1/4 p-6 bg-primary/5 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">Dec</div>
                      <div className="text-3xl font-bold mb-1">15</div>
                      <div className="text-sm text-gray-600">2024</div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-blue-100 text-blue-800">
                        Business Fundamentals
                      </Badge>
                      <Badge variant="outline">Available Spots</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Legal Structures for Startups: LLC vs Corporation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn about different business structures, their tax implications, and how to
                      choose the right structure for your startup. Led by immigration attorney Sarah
                      Khan.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>2:00 PM - 4:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Palo Alto Office</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>25 spots remaining</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button>Register Now - Free for Members</Button>
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <div className="md:flex">
                  <div className="md:w-1/4 p-6 bg-primary/5 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">Jan</div>
                      <div className="text-3xl font-bold mb-1">12</div>
                      <div className="text-sm text-gray-600">2025</div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Technology
                      </Badge>
                      <Badge variant="outline">Virtual Event</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI Implementation for Small Businesses
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Practical guide to implementing AI tools in your business operations. Discover
                      cost-effective AI solutions and automation strategies. Presented by AI
                      consultant Dr. Ahmed Malik.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>11:00 AM - 1:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>Virtual (Zoom)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>50 spots remaining</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button>Register Now - $25</Button>
                      <Button variant="outline">View Agenda</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-xs">
                <div className="md:flex">
                  <div className="md:w-1/4 p-6 bg-primary/5 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">Feb</div>
                      <div className="text-3xl font-bold mb-1">09</div>
                      <div className="text-sm text-gray-600">2025</div>
                    </div>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="default" className="bg-purple-100 text-purple-800">
                        Finance
                      </Badge>
                      <Badge variant="outline">In-Person</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Startup Financial Planning & Cash Flow Management
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Master the fundamentals of financial planning, budgeting, and cash flow
                      management for startups. Includes templates and practical tools. Led by CPA
                      Fatima Shah.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>1:00 PM - 4:00 PM PST</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>San Francisco Office</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>30 spots available</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button>Early Bird - $40</Button>
                      <Button variant="outline">Download Syllabus</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Topics */}
      <section className="py-16 bg-gray-50" id="seminar-topics">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Seminar Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our seminars cover a wide range of topics essential for entrepreneur success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-3">Business Fundamentals</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Business Registration & Legal Structures</li>
                  <li>• Tax Planning & Financial Management</li>
                  <li>• Intellectual Property Protection</li>
                  <li>• Employment Law & HR Compliance</li>
                  <li>• Contract Negotiation & Drafting</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-3">Technology & Innovation</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• AI & Machine Learning Applications</li>
                  <li>• Blockchain & Cryptocurrency</li>
                  <li>• Cybersecurity Best Practices</li>
                  <li>• Digital Transformation Strategies</li>
                  <li>• Cloud Computing & Infrastructure</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-3">Finance & Investment</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Venture Capital & Angel Investment</li>
                  <li>• Financial Modeling & Projections</li>
                  <li>• Fundraising Strategies</li>
                  <li>• Due Diligence Process</li>
                  <li>• Exit Strategies & Valuations</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-3">Marketing & Growth</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Digital Marketing Strategies</li>
                  <li>• Customer Acquisition & Retention</li>
                  <li>• Brand Building & Positioning</li>
                  <li>• Social Media Marketing</li>
                  <li>• Analytics & Performance Tracking</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-3">Risk Management</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Business Insurance & Protection</li>
                  <li>• Crisis Management Planning</li>
                  <li>• Compliance & Regulatory Affairs</li>
                  <li>• Data Privacy & Security</li>
                  <li>• Financial Risk Assessment</li>
                </ul>
              </Card>

              <Card className="border-gray-100 text-center p-6 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-3">Leadership & Management</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Team Building & Culture</li>
                  <li>• Performance Management</li>
                  <li>• Strategic Planning & Execution</li>
                  <li>• Change Management</li>
                  <li>• Board Governance & Reporting</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seminar Format */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our seminars are designed for maximum learning and practical application.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Seminar Format</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Expert Presentation (60 min)</h4>
                      <p className="text-gray-600 text-sm">
                        Industry expert shares insights, best practices, and real-world examples.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Interactive Q&A (20 min)</h4>
                      <p className="text-gray-600 text-sm">
                        Direct engagement with the speaker to clarify concepts and get specific
                        advice.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Networking Break (15 min)</h4>
                      <p className="text-gray-600 text-sm">
                        Connect with fellow attendees and continue discussions over refreshments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Practical Workshop (25 min)</h4>
                      <p className="text-gray-600 text-sm">
                        Hands-on exercises, templates, and tools you can immediately apply to your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Seminar+Session"
                  alt="OPEN Silicon Valley Seminar Session"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Seminars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Seminars</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recordings and materials from our recent educational sessions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Legal+Seminar"
                  alt="Legal Structures Seminar"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    Business Law
                  </Badge>
                  <h3 className="font-semibold mb-2">
                    Immigration & Visa Options for Entrepreneurs
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Comprehensive guide to E2, EB5, and O1 visas for international entrepreneurs.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>📅 Nov 2024</span>
                    <span>👥 85 attendees</span>
                    <span>⭐ 4.9/5</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Recording
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Marketing+Seminar"
                  alt="Digital Marketing Seminar"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    Marketing
                  </Badge>
                  <h3 className="font-semibold mb-2">Growth Hacking for Early-Stage Startups</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Low-cost, high-impact marketing strategies for customer acquisition.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>📅 Oct 2024</span>
                    <span>👥 92 attendees</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Materials
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gray-100 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Finance+Seminar"
                  alt="Fundraising Seminar"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    Finance
                  </Badge>
                  <h3 className="font-semibold mb-2">Fundraising Fundamentals: Seed to Series A</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Step-by-step guide to raising capital including pitch deck templates.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span>📅 Sep 2024</span>
                    <span>👥 78 attendees</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Access Resources
                  </Button>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Knowledge?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our educational seminars and learn from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Register for Next Seminar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact-us">Suggest a Topic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
