import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, ExternalLink, Quote } from "lucide-react"
import { boardMembers } from "@/data/team-members"

export const metadata: Metadata = {
  title: "Board Members | OPEN Silicon Valley",
  description:
    "Meet the distinguished board members of OPEN Silicon Valley who provide strategic guidance and leadership to our organization.",
  openGraph: {
    title: "Board Members | OPEN Silicon Valley",
    description:
      "Meet the distinguished board members of OPEN Silicon Valley who provide strategic guidance and leadership to our organization.",
    images: ["/images/board-members-og.jpg"],
  },
}

export default function BoardMembersPage() {
  // Extended board member data with more details
  const extendedBoardMembers = boardMembers.map((member, index) => ({
    ...member,
    title: index === 0 ? "Board Chair" : "Board Member",
    company: "Founder & CEO, " + (Math.random() > 0.5 ? "TechVentures" : "InnovateX"),
    bio: "Distinguished leader with over 20 years of experience in technology and entrepreneurship. Has founded multiple successful startups and mentored dozens of entrepreneurs throughout Silicon Valley.",
    quote: "Innovation thrives when diverse perspectives come together with a shared vision for the future.",
    achievements: [
      "Founded 3 successful technology startups",
      "Angel investor in 15+ companies",
      "Mentor at Stanford Entrepreneurship Network",
      "Published author on technology leadership",
    ],
  }))

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-20" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h1>
            <p className="text-lg text-gray-600 mb-6">
              Meet the distinguished leaders who provide strategic guidance and governance to OPEN Silicon Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Board Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/about">
                  <ArrowLeft className="h-4 w-4" /> Back to About
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-gray-50 rounded-xl p-8 mb-16 border border-primary/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=250&width=250&text=Board"
                    alt="OPEN Silicon Valley Board"
                    width={250}
                    height={250}
                    className="rounded-xl shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">About Our Board</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    The OPEN Silicon Valley Board of Directors comprises distinguished leaders from various industries
                    who bring decades of experience in entrepreneurship, technology, finance, and community building.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Our board members are committed to advancing OPEN's mission of fostering entrepreneurship,
                    innovation, and professional growth within the Pakistani community in Silicon Valley and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Distinguished Board Members</h2>

            {extendedBoardMembers.map((member, index) => (
              <div key={index} className="mb-12">
                <Card className="border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3 relative">                        
                      <div className="aspect-square lg:h-full relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={`Photo of ${member.name}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                      <div className="lg:w-2/3 p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.title}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                              {member.company}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-primary/50 italic">
                          <Quote className="h-4 w-4 text-primary shrink-0 mt-1" />
                          <p className="text-gray-700 text-sm">{member.quote}</p>
                        </div>

                        <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-gray-800 text-sm">Key Achievements:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {member.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                                <span className="text-xs text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-2">
                          <Button asChild variant="outline" size="sm" className="rounded-full text-xs">
                            <Link
                              href={member.linkedin}
                              className="flex items-center gap-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-3 w-3" /> Connect
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Board Responsibilities</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our board members play a crucial role in guiding the organization and ensuring its success through their
                expertise and leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Strategic Direction</h3>
                <p className="text-gray-600">
                  Setting the overall direction and vision for OPEN Silicon Valley, ensuring alignment with the
                  organization's mission and values while adapting to changing community needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Governance</h3>
                <p className="text-gray-600">
                  Establishing and overseeing policies, procedures, and guidelines to ensure effective governance and
                  compliance with relevant regulations and best practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
                    <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"></path>
                    <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"></path>
                    <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Financial Oversight</h3>
                <p className="text-gray-600">
                  Monitoring the financial health of the organization, approving budgets, and ensuring responsible
                  financial management and sustainability for long-term success.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Program Development</h3>
                <p className="text-gray-600">
                  Guiding the development and evaluation of programs and initiatives to ensure they meet the needs of
                  our community and advance our mission effectively.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M17 6.1H3"></path>
                    <path d="M21 12.1H3"></path>
                    <path d="M15.1 18H3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
                <p className="text-gray-600">
                  Representing OPEN Silicon Valley in the community and fostering relationships with key stakeholders,
                  partners, and supporters to expand our impact and reach.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                    <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                    <line x1="12" y1="22" x2="12" y2="13"></line>
                    <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Resource Development</h3>
                <p className="text-gray-600">
                  Helping secure the resources needed for the organization to fulfill its mission, including
                  fundraising, sponsorships, and in-kind support from the broader community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Meetings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-center">Board Meetings</h2>
              <p className="text-lg text-gray-600 mb-6 text-center">
                The OPEN Silicon Valley Board meets quarterly to review progress, discuss strategic initiatives, and
                make key decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Quarterly Meetings</h3>
                  <p className="text-gray-600 text-sm">
                    Our board holds quarterly meetings to review organizational performance, discuss strategic
                    initiatives, and make key decisions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Annual Planning Session</h3>
                  <p className="text-gray-600 text-sm">
                    Each year, the board conducts an in-depth planning session to set goals and priorities for the
                    coming year.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-center">
                Board meeting minutes and decisions are communicated to members through our quarterly newsletter and
                annual report.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Board CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Board Service?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you're passionate about supporting entrepreneurs and professionals in Silicon Valley and have
              leadership experience, we'd love to hear from you. Board service is a rewarding way to give back to the
              community and make a meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/volunteer-with-us" className="flex items-center gap-2">
                  Explore Volunteer Opportunities <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
