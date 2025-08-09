import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Events | OPEN Silicon Valley",
  description: "Upcoming events and gatherings hosted by OPEN Silicon Valley",
};

export default function EventsPage() {
  const eventCategories = [
    {
      id: "all",
      label: "All Events",
    },
    {
      id: "conferences",
      label: "Conferences",
    },
    {
      id: "seminars",
      label: "Seminars",
    },
    {
      id: "webinars",
      label: "Webinars",
    },
    {
      id: "networking",
      label: "Networking",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Entrepreneurship Conference",
      date: "September 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Jose Convention Center",
      description:
        "Join us for our annual flagship event bringing together entrepreneurs, investors, and industry leaders.",
      category: "conferences",
      image: "/placeholder.svg?height=300&width=500&text=Annual+Conference",
    },
    {
      id: 2,
      title: "Women in Tech Seminar",
      date: "July 22, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Palo Alto Community Center",
      description:
        "A seminar focused on challenges and opportunities for women entrepreneurs in the tech industry.",
      category: "seminars",
      image: "/placeholder.svg?height=300&width=500&text=Women+in+Tech",
    },
    {
      id: 3,
      title: "AI and Machine Learning Webinar",
      date: "June 10, 2025",
      time: "10:00 AM - 11:30 AM",
      location: "Virtual Event",
      description:
        "Learn about the latest trends in AI and machine learning from industry experts.",
      category: "webinars",
      image: "/placeholder.svg?height=300&width=500&text=AI+Webinar",
    },
    {
      id: 4,
      title: "Networking Mixer",
      date: "May 28, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Mountain View Tech Hub",
      description:
        "An evening of networking with entrepreneurs, investors, and professionals in Silicon Valley.",
      category: "networking",
      image: "/placeholder.svg?height=300&width=500&text=Networking+Mixer",
    },
    {
      id: 5,
      title: "Startup Funding Workshop",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Sunnyvale Innovation Center",
      description:
        "A workshop on fundraising strategies for early-stage startups.",
      category: "seminars",
      image: "/placeholder.svg?height=300&width=500&text=Funding+Workshop",
    },
    {
      id: 6,
      title: "Global Entrepreneurship Summit",
      date: "October 10-12, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Santa Clara Convention Center",
      description:
        "A three-day summit bringing together entrepreneurs from around the world.",
      category: "conferences",
      image: "/placeholder.svg?height=300&width=500&text=Global+Summit",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join us for our upcoming events where you can connect with fellow
              entrepreneurs, learn new skills, and be inspired by innovation in
              Silicon Valley.
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

      {/* Featured Event */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-primary/5 rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Annual+Conference"
                    alt="Annual Entrepreneurship Conference"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Event
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Annual Entrepreneurship Conference
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                      <span>September 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-primary" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5 text-primary" />
                      <span>San Jose Convention Center</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Join us for our annual flagship event bringing together
                    entrepreneurs, investors, and industry leaders. The
                    conference features keynote speeches, panel discussions,
                    networking opportunities, and a startup showcase.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="rounded-full">Register Now</Button>
                    <Button variant="outline" className="rounded-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mb-8 flex flex-wrap justify-center">
                {eventCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {eventCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events
                      .filter(
                        (event) =>
                          category.id === "all" ||
                          event.category === category.id
                      )
                      .map((event) => (
                        <Card
                          key={event.id}
                          className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
                        >
                          <div className="aspect-video relative">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <CardHeader>
                            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                              {category.id === "all"
                                ? event.category
                                : category.label}
                            </div>
                            <CardTitle>{event.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3 mb-4">
                              <div className="flex items-center gap-2 text-sm">
                                <CalendarIcon className="h-4 w-4 text-primary" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <ClockIcon className="h-4 w-4 text-primary" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPinIcon className="h-4 w-4 text-primary" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <p className="text-gray-600">{event.description}</p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">Register</Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Events Calendar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with all our upcoming events. Subscribe to our
                calendar to never miss an opportunity to connect and grow.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-xs border border-gray-100 mb-8">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&src=Y184YTExOTQyYWU1YzM4NmJhYWVhNGQ0ZmZjZDQxYmIyN2I5Yjk4YTJiOWFiMDNlNGY1OTZiM2FhNGI1MjYyMWVjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2333B679"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="OPEN Silicon Valley Events Calendar"
              />
            </div>

            <div className="text-center">
              <Button asChild className="rounded-full">
                <Link
                  href="https://calendar.google.com/calendar/u/0?cid=Y184YTExOTQyYWU1YzM4NmJhYWVhNGQ0ZmZjZDQxYmIyN2I5Yjk4YTJiOWFiMDNlNGY1OTZiM2FhNGI1MjYyMWVjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Subscribe to Calendar <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Events Gallery</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Check out photos and videos from our past events. Get a glimpse
                of the OPEN Silicon Valley community in action.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="col-span-2 row-span-2">
                <div className="rounded-xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Annual+Forum"
                    alt="Annual Forum"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Networking"
                    alt="Networking Event"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Workshop"
                    alt="Workshop"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Panel"
                    alt="Panel Discussion"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="rounded-xl overflow-hidden h-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Pitch"
                    alt="Startup Pitch"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="rounded-full">
                <Link
                  href="/events-directory/events-gallery"
                  className="flex items-center gap-2"
                >
                  View Full Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Host an Event with Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Are you interested in hosting an event with OPEN Silicon Valley?
              We welcome collaboration opportunities with organizations and
              individuals who share our mission of supporting entrepreneurs and
              professionals.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
