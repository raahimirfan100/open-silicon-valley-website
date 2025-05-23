import Image from "next/image"
import Link from "next/link"
import { Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { boardMembers } from "@/data/team-members"

export default function BoardMembersSection() {
  return (
    <section aria-labelledby="board-heading" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Governance
          </div>
          <h2 id="board-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Board Members
          </h2>
          <p className="text-gray-600 text-pretty">
            Our board consists of experienced professionals, executives, entrepreneurs, and investors who provide
            strategic guidance and oversight to ensure OPEN Silicon Valley's continued success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 h-full overflow-hidden">
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={`Photo of ${member.name}, Board Member`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">Board Member</p>
                    <p className="text-sm text-gray-600 mb-6 flex-grow">{member.description}</p>

                    <Link
                      href={member.linkedin}
                      className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      <span className="text-sm font-medium">Connect</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="/about/board-members" className="flex items-center gap-2">
              Learn More About Our Board <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
