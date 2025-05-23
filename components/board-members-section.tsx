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
            strategic guidance and oversight.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-gray-100 h-full flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute -inset-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
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
                  <Link
                    href={member.linkedin}
                    className="text-gray-500 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10 mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </Link>
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
