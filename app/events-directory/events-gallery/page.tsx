import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Filter, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Events Gallery | OPEN Silicon Valley",
  description: "Photos from past OPEN Silicon Valley events",
};

export default function EventsGalleryPage() {
  // Sample event categories
  const eventCategories = [
    { id: "all", label: "All Events" },
    { id: "workshops", label: "Workshops" },
    { id: "networking", label: "Networking" },
    { id: "other", label: "Other Events" },
  ];

  // Sample gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600&text=Workshop",
      alt: "Tech Workshop - Spring 2024",
      category: "workshops",
      date: "March 15, 2024",
      event: "Workshop",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600&text=Networking",
      alt: "Networking Mixer - Spring 2024",
      category: "networking",
      date: "March 10, 2024",
      event: "Networking",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2024",
      alt: "OPEN SV Annual Forum 2024 - Keynote Speaker",
      category: "annual-forum",
      year: "2024",
      event: "Annual Forum",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2024+Panel",
      alt: "OPEN SV Annual Forum 2024 - Panel Discussion",
      category: "annual-forum",
      year: "2024",
      event: "Annual Forum",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=900&text=Networking+Event",
      alt: "OPEN SV Networking Mixer - Summer 2024",
      category: "networking",
      year: "2024",
      event: "Networking Mixer",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=900&width=600&text=Workshop+2024",
      alt: "OPEN SV Workshop - Startup Funding",
      category: "workshops",
      year: "2024",
      event: "Startup Funding Workshop",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=900&text=Women+Forum+2024",
      alt: "OPEN SV Women Forum - Spring 2024",
      category: "women-forum",
      year: "2024",
      event: "Women Forum",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2023",
      alt: "OPEN SV Annual Forum 2023 - Keynote Speaker",
      category: "annual-forum",
      year: "2023",
      event: "Annual Forum",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2023+Panel",
      alt: "OPEN SV Annual Forum 2023 - Panel Discussion",
      category: "annual-forum",
      year: "2023",
      event: "Annual Forum",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=900&width=600&text=Workshop+2023",
      alt: "OPEN SV Workshop - AI in Business",
      category: "workshops",
      year: "2023",
      event: "AI in Business Workshop",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=600&width=900&text=Networking+2023",
      alt: "OPEN SV Networking Mixer - Fall 2023",
      category: "networking",
      year: "2023",
      event: "Networking Mixer",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=900&text=Women+Forum+2023",
      alt: "OPEN SV Women Forum - Fall 2023",
      category: "women-forum",
      year: "2023",
      event: "Women Forum",
    },
    {
      id: 13,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2022",
      alt: "OPEN SV Annual Forum 2022 - Keynote Speaker",
      category: "annual-forum",
      year: "2022",
      event: "Annual Forum",
    },
    {
      id: 14,
      src: "/placeholder.svg?height=600&width=900&text=Annual+Forum+2022+Panel",
      alt: "OPEN SV Annual Forum 2022 - Panel Discussion",
      category: "annual-forum",
      year: "2022",
      event: "Annual Forum",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=900&width=600&text=Workshop+2022",
      alt: "OPEN SV Workshop - Entrepreneurship Basics",
      category: "workshops",
      year: "2022",
      event: "Entrepreneurship Workshop",
    },
    {
      id: 16,
      src: "/placeholder.svg?height=600&width=900&text=Networking+2022",
      alt: "OPEN SV Networking Mixer - Summer 2022",
      category: "networking",
      year: "2022",
      event: "Networking Mixer",
    },
    {
      id: 17,
      src: "/placeholder.svg?height=600&width=900&text=Women+Forum+2022",
      alt: "OPEN SV Women Forum - Spring 2022",
      category: "women-forum",
      year: "2022",
      event: "Women Forum",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events Gallery
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse through photos from our past events. These images capture
              the energy, connections, and learning that happen at OPEN Silicon
              Valley gatherings.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 text-white"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <Link href="/events">
                  <ArrowLeft className="h-4 w-4" /> Back to Events
                </Link>
              </Button>

              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">Event Photos 2022-2024</span>
              </div>
            </div>

            <Tabs defaultValue="all" className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Browse by Event Type</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </div>
              </div>

              <TabsList className="mb-8 flex flex-wrap justify-start">
                {eventCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {eventCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages
                      .filter(
                        (image) =>
                          category.id === "all" ||
                          image.category === category.id
                      )
                      .map((image) => (
                        <div
                          key={image.id}
                          className="group relative overflow-hidden rounded-lg shadow-xs"
                        >
                          <div className="aspect-4/3 relative">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="text-white">
                              <div className="font-medium">{image.event}</div>
                              <div className="text-sm text-white/80">
                                {image.year}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-8">
                Want to see more photos from our events? Follow us on social
                media for the latest updates and event announcements.
              </p>
              <Button asChild className="rounded-full">
                <Link href="/events" className="flex items-center gap-2">
                  View Upcoming Events <Calendar className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Year Archives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Event Archives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-xs p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">2024 Events</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Annual Forum 2024
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Women Forum - Spring 2024
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Networking Mixer - Summer 2024
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-xs p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">2023 Events</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Annual Forum 2023
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Women Forum - Fall 2023
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      AI in Business Workshop
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-xs p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">2022 Events</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Annual Forum 2022
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Women Forum - Spring 2022
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      Entrepreneurship Workshop
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us at Our Next Event
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't miss out on the opportunity to connect with fellow
              entrepreneurs, investors, and professionals at our upcoming
              events.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/events" className="flex items-center gap-2">
                  View Upcoming Events <Calendar className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Become a Member <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
