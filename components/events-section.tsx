import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function EventsSection() {
  // TODO(events): When real events are available, re-enable the grid below and replace placeholder copy.
  /*
  const upcomingEvents = [
    {
      id: 1,
      title: 'Startup Pitch Night',
      date: 'June 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'OpenSV Hub, Palo Alto',
    },
    {
      id: 2,
      title: 'AI in Healthcare Workshop',
      date: 'June 22, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Virtual Event',
    },
    {
      id: 3,
      title: 'Founder Fireside Chat',
      date: 'July 8, 2025',
      time: '5:30 PM - 7:30 PM',
      location: 'OpenSV Hub, Palo Alto',
    },
  ]
  */
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join us for our upcoming events where you can connect with fellow entrepreneurs, learn new
          skills, and be inspired by innovation.
        </p>
      </div>

      {/* TODO(copy): Replace with link or highlights once events are wired. */}
      <div className="text-center text-muted-foreground">
        Event announcements will be posted here soon. In the meantime, visit our Events page for the
        calendar.
      </div>
      {/**
       * Previously displayed dummy events grid. Keeping commented for later use.
       */}
      {/**
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upcomingEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-muted-foreground" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Register
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      */}

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/events">View All Events</Link>
        </Button>
      </div>
    </div>
  )
}
