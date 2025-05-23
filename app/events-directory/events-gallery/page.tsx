import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Events Gallery | OPEN Silicon Valley",
  description: "Photos from past OPEN Silicon Valley events",
}

export default function EventsGalleryPage() {
  const galleryImages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${i % 2 === 0 ? "600" : "900"}&width=${i % 2 === 0 ? "900" : "600"}&text=Event+${i + 1}`,
    alt: `OPEN SV Annual Forum 2022 - Image ${i + 1}`,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Events Gallery</h1>
      <p className="text-lg mb-12">
        Browse through photos from our past events. These images capture the energy, connections, and learning that
        happen at OPEN Silicon Valley gatherings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={900}
              height={600}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
