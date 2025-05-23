import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, ExternalLink, Mail } from "lucide-react"
import { leadershipTeam } from "@/data/team-members"

export const metadata: Metadata = {
  title: "Executive Team | OPEN Silicon Valley",
  description: "Meet the executive team of OPEN Silicon Valley",
}

export default function ExecutiveTeamPage() {
  // Extended leadership team data with more details
  const extendedLeadershipTeam = leadershipTeam.map((member) => ({
    ...member,
    company: Math.random() > 0.5 ? "Tech Company" : "Startup Founder",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
  }))

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the dedicated volunteers who lead OPEN Silicon Valley's day-to-day operations and programs.
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

      {/* Executive Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <Link href="/about">
                  <ArrowLeft className="h-4 w-4" /> Back to About
                </Link>
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-4">About the Executive Team</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our executive team is comprised of dedicated volunteers who are passionate about supporting
                entrepreneurs and professionals in Silicon Valley. They bring diverse expertise and experience to their
                roles and are committed to advancing OPEN Silicon Valley's mission.
              </p>
              <p className="text-lg text-gray-600">
                The executive team is responsible for implementing the strategic direction set by the board, managing
                day-to-day operations, and leading our various programs and initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedLeadershipTeam.map((member, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                      <p className="text-gray-500 text-sm mb-4">{member.company}</p>
                      <p className="text-gray-600 mb-6 line-clamp-3">{member.bio}</p>
                      <div className="flex gap-3">
                        <Button asChild variant="outline" size="sm" className="rounded-full">
                          <Link
                            href={member.linkedin}
                            className="flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm" className="rounded-full">
                          <Link href={`mailto:info@opensv.org`} className="flex items-center gap-2">
                            <Mail className="h-4 w-4" /> Contact
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Team Structure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our executive team is organized into functional areas to effectively manage our operations and programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Leadership</h3>
                <p className="text-gray-600 mb-4">
                  The leadership team, including the President and Vice Presidents, provides overall direction and
                  coordination for the organization.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Strategic planning and execution</li>
                  <li>Organizational development</li>
                  <li>External relations and partnerships</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Programs</h3>
                <p className="text-gray-600 mb-4">
                  The programs team develops and manages our various initiatives, including workshops, forums, and
                  mentorship programs.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Program development and implementation</li>
                  <li>Event planning and execution</li>
                  <li>Speaker and mentor coordination</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Membership</h3>
                <p className="text-gray-600 mb-4">
                  The membership team focuses on recruiting, engaging, and retaining members, ensuring they receive
                  value from their OPEN Silicon Valley membership.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Member recruitment and onboarding</li>
                  <li>Member engagement and retention</li>
                  <li>Member services and support</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Marketing & Communications</h3>
                <p className="text-gray-600 mb-4">
                  The marketing team handles our communications, social media, and promotional activities to raise
                  awareness and engagement.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Brand management and messaging</li>
                  <li>Social media and digital marketing</li>
                  <li>Content creation and distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for passionate volunteers to join our executive team. If you're interested in
              contributing your skills and expertise to support entrepreneurs and professionals in Silicon Valley, we'd
              love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/volunteer-with-us" className="flex items-center gap-2">
                  Volunteer With Us <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
