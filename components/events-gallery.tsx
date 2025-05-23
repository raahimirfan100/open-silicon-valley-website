import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function EventsGallery() {
  // Define specific grid layouts for better control
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Annual+Forum",
      alt: "Annual Forum - OPEN Silicon Valley's flagship event bringing together entrepreneurs and investors",
      gridClass: "col-span-2 row-span-2",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Networking+Event",
      alt: "Networking Event - Professionals connecting at an OPEN Silicon Valley networking session",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Workshop",
      alt: "Workshop - Hands-on learning session for entrepreneurs and professionals",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=800&width=600&text=Seminar",
      alt: "Seminar - Educational presentation on business and technology topics",
      gridClass: "col-span-1 row-span-2",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Panel+Discussion",
      alt: "Panel Discussion - Industry experts sharing insights and experiences",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Startup+Pitch",
      alt: "Startup Pitch - Entrepreneurs presenting their business ideas to potential investors",
      gridClass: "col-span-1 row-span-1",
    },
  ]

  return (
    <section aria-labelledby="gallery-heading" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Community
          </div>
          <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Event Highlights
          </h2>
          <p className="text-gray-600 text-pretty">
            Capturing moments of connection, learning, and growth from our community events that bring together
            entrepreneurs, investors, and professionals.
          </p>
        </div>

        {/* Improved Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-4 events-gallery-mobile md:events-gallery-desktop">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.gridClass} overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 group`}
              >
                <Link href="/events-directory/events-gallery" className="block h-full w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                    <div className="p-3 md:p-4 w-full">
                      <span className="text-white font-medium text-xs md:text-sm leading-tight">
                        {image.alt.split(" - ")[0]}
                      </span>
                    </div>
                  </div>
                  <div className="h-full w-full relative">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 text-gray-600">
            <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
            <span>Join us at our next event</span>
          </div>

          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/events-directory/events-gallery" className="flex items-center gap-2">
              View Complete Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
