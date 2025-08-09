import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import { sponsorLevels } from "@/data/sponsors"

export default function SponsorsSection() {
  return (
    <section aria-labelledby="sponsors-heading" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Supporters
          </div>
          <h2 id="sponsors-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Sponsors & Partners
          </h2>
          <p className="text-gray-600 text-pretty">
            We're grateful to these organizations for their support in making our mission possible and helping us create
            opportunities for Pakistani entrepreneurs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {sponsorLevels.map((level) => (
            <div key={level.level} className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gray-200 grow"></div>
                <div className="px-6 py-2 bg-primary/10 rounded-full text-primary font-medium mx-4">
                  {level.level} Sponsors
                </div>
                <div className="h-px bg-gray-200 grow"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                {level.sponsors.map((sponsor, index) => (
                  <div key={index} className="group relative">
                    <Link
                      href={sponsor.url}
                      className="flex items-center justify-center p-6 bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-300 h-24 w-full border border-gray-100"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${sponsor.name} website`}
                    >
                      <Image
                        src={sponsor.image || "/placeholder.svg"}
                        alt={`${sponsor.name} logo`}
                        width={150}
                        height={75}
                        className="max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <div className="flex items-center gap-1 text-primary text-sm font-medium">
                          <span>Visit</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="/events-directory/partners" className="flex items-center gap-2">
              View All Sponsors <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
