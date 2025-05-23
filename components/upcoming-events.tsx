import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, ArrowRight, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function UpcomingEvents() {
  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Pitch Night",
      date: "June 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "OpenSV Hub, Palo Alto",
      category: "Networking",
    },
    {
      id: 2,
      title: "AI in Healthcare Workshop",
      date: "June 22, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Virtual Event",
      category: "Workshop",
    },
    {
      id: 3,
      title: "Founder Fireside Chat",
      date: "July 8, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "OpenSV Hub, Palo Alto",
      category: "Speaker Series",
    },
  ]

  return (
    <section aria-labelledby="events-heading" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Join Us
          </div>
          <h2 id="events-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-pretty">
            Connect with fellow entrepreneurs, learn new skills, and be inspired by innovation at our upcoming events.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 card-hover h-full"
              >
                <div className="h-2 bg-primary" aria-hidden="true"></div>
                <CardHeader className="pb-2">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                    {event.category}
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full rounded-full">
                    Register
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">OPEN Silicon Valley Events Calendar</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with all our upcoming events. Subscribe to our calendar to never miss an opportunity to
                connect and grow.
              </p>
              <Button asChild className="rounded-full">
                <Link
                  href="https://calendar.google.com/calendar/u/0?cid=Y184YTExOTQyYWU1YzM4NmJhYWVhNGQ0ZmZjZDQxYmIyN2I5Yjk4YTJiOWFiMDNlNGY1OTZiM2FhNGI1MjYyMWVjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  className="flex items-center gap-2"
                  aria-label="Subscribe to OPEN Silicon Valley events calendar"
                >
                  Subscribe to Calendar <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
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
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/events" className="flex items-center gap-2">
                View All Events <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
