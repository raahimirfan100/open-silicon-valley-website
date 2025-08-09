import Image from "next/image"
import Link from "next/link"
import { Linkedin, ArrowRight, Award, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { boardMembers } from "@/data/team-members"

export default function BoardMembersSection() {
  // Show only first 6 board members for the home page
  const featuredBoardMembers = boardMembers.slice(0, 6)

  return (
    <section aria-labelledby="board-heading" className="py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <Award className="h-4 w-4" />
            Distinguished Leadership
          </div>
          <h2
            id="board-heading"
            className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            Board of Directors
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Our board consists of visionary leaders, accomplished entrepreneurs, and distinguished professionals who
            provide strategic guidance and governance to ensure OPEN Silicon Valley's continued excellence and impact.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>15+ Board Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Global Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Industry Leaders</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredBoardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xs hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden relative">
                  {/* Prestigious background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-linear-to-br from-primary to-primary/50 rounded-full transform translate-x-16 -translate-y-16"></div>
                  </div>

                  <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                    <div className="relative mb-8">
                      <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                      <div className="relative">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={`Photo of ${member.name}, Distinguished Board Member`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Prestige indicator */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                        Board Member
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6 grow">{member.description}</p>
                    </div>

                    <div className="w-full">
                      <Link
                        href={member.linkedin}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 hover:bg-primary hover:text-white transition-all duration-300 rounded-xl border border-gray-200 hover:border-primary group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                        <span className="font-medium">Connect</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-linear-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Meet Our Complete Board</h3>
            <p className="text-gray-600 mb-6">
              Discover the full roster of distinguished leaders who guide our organization's strategic vision and ensure
              our continued success.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/about/board-members" className="flex items-center gap-2">
                View All Board Members
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
