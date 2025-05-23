import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, ExternalLink, Mail } from "lucide-react"
import { boardMembers } from "@/data/team-members"

export const metadata: Metadata = {
  title: "Board Members | OPEN Silicon Valley",
  description: "Meet the board members of OPEN Silicon Valley",
}

export default function BoardMembersPage() {
  // Extended board member data with more details
  const extendedBoardMembers = boardMembers.map((member) => ({
    ...member,
    title: "Board Member",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Board Members</h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the dedicated individuals who provide strategic guidance and oversight to OPEN Silicon Valley.
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

      {/* Board Overview */}
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
              <h2 className="text-2xl font-bold mb-4">About the Board</h2>
              <p className="text-lg text-gray-600 mb-6">
                The OPEN Board is comprised of a selective group of our charter members. Our charter members are
                individuals who have been with OPEN for years helping broadening our scope and have had decades of
                experience as business professionals, executives, entrepreneurs, and investors.
              </p>
              <p className="text-lg text-gray-600">
                We hold periodical Board meetings to set the overall direction, discuss new trends, review performance,
                and revise strategies and policies for the organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedBoardMembers.map((member, index) => (
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
                      <p className="text-primary font-medium text-sm mb-2">{member.title}</p>
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

      {/* Board Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Board Responsibilities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our board members play a crucial role in guiding the organization and ensuring its success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Strategic Direction</h3>
                <p className="text-gray-600">
                  Setting the overall direction and vision for OPEN Silicon Valley, ensuring alignment with the
                  organization's mission and values.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Governance</h3>
                <p className="text-gray-600">
                  Establishing and overseeing policies, procedures, and guidelines to ensure effective governance and
                  compliance with relevant regulations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Financial Oversight</h3>
                <p className="text-gray-600">
                  Monitoring the financial health of the organization, approving budgets, and ensuring responsible
                  financial management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Program Development</h3>
                <p className="text-gray-600">
                  Guiding the development and evaluation of programs and initiatives to ensure they meet the needs of
                  our community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
                <p className="text-gray-600">
                  Representing OPEN Silicon Valley in the community and fostering relationships with key stakeholders,
                  partners, and supporters.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Resource Development</h3>
                <p className="text-gray-600">
                  Helping secure the resources needed for the organization to fulfill its mission, including
                  fundraising, sponsorships, and in-kind support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Board CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Board Service?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you're passionate about supporting entrepreneurs and professionals in Silicon Valley and have
              leadership experience, we'd love to hear from you. Board service is a rewarding way to give back to the
              community and make a meaningful impact.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
