import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { leadershipTeam } from "@/data/team-members";

export default function LeadershipSection() {
  return (
    <section aria-labelledby="leadership-heading" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Meet Our Team
          </div>
          <h2
            id="leadership-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Leadership Team
          </h2>
          <p className="text-gray-600 text-pretty">
            Our dedicated volunteers bring diverse expertise and passion to
            build a stronger community and create opportunities for Pakistani
            entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {leadershipTeam.slice(0, 3).map((leader, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <div className="aspect-3/4 bg-gray-100 relative">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={`Photo of ${leader.name}, ${leader.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <a
                      href={leader.linkedin}
                      className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-xs text-primary py-2 rounded-full font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                {leader.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-2">
                {leader.role}
              </p>
              <p className="text-gray-600 text-sm">{leader.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="rounded-full px-8">
            <Link
              href="/about/executive-team"
              className="flex items-center gap-2"
            >
              View All Team Members{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
