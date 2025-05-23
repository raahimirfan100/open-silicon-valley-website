import type { Metadata } from "next"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Events | OPEN Silicon Valley",
  description: "Upcoming events and gatherings hosted by OPEN Silicon Valley",
}

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
  ]

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
    },
    {
      id: 2,
      title: "Women in Tech Seminar",
      date: "July 22, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Palo Alto Community Center",
      description: "A seminar focused on challenges and opportunities for women entrepreneurs in the tech industry.",
      category: "seminars",
    },
    {
      id: 3,
      title: "AI and Machine Learning Webinar",
      date: "June 10, 2025",
      time: "10:00 AM - 11:30 AM",
      location: "Virtual Event",
      description: "Learn about the latest trends in AI and machine learning from industry experts.",
      category: "webinars",
    },
    {
      id: 4,
      title: "Networking Mixer",
      date: "May 28, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Mountain View Tech Hub",
      description: "An evening of networking with entrepreneurs, investors, and professionals in Silicon Valley.",
      category: "networking",
    },
    {
      id: 5,
      title: "Startup Funding Workshop",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Sunnyvale Innovation Center",
      description: "A workshop on fundraising strategies for early-stage startups.",
      category: "seminars",
    },
    {
      id: 6,
      title: "Global Entrepreneurship Summit",
      date: "October 10-12, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Santa Clara Convention Center",
      description: "A three-day summit bringing together entrepreneurs from around the world.",
      category: "conferences",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Events</h1>

      <p className="text-lg mb-8">
        Join us for our upcoming events where you can connect with fellow entrepreneurs, learn new skills, and be
        inspired by innovation in Silicon Valley.
      </p>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8">
          {eventCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {eventCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events
                .filter((event) => category.id === "all" || event.category === category.id)
                .map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-5 w-5 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-5 w-5 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="h-5 w-5 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <p className="mt-4">{event.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Register Now</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Events Gallery</h2>
        <p className="mb-6">
          Check out photos and videos from our past events. Get a glimpse of the OPEN Silicon Valley community in
          action.
        </p>
        <Button variant="outline" asChild>
          <Link href="/events-directory/events-gallery">View Gallery</Link>
        </Button>
      </div>
    </div>
  )
}
