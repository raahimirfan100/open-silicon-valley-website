import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Programs | OPEN Silicon Valley",
  description: "Explore OPEN Silicon Valley's programs supporting entrepreneurs and professionals",
}

export default function ProgramsPage() {
  const programs = [
    {
      title: "Women Forum",
      description: "Networking events for women entrepreneurs and professionals",
      details:
        "These networking events are arranged every quarter in which accomplished entrepreneurs, seasoned professionals, students, business leaders, and investors get a chance to interact and learn from each other.",
    },
    {
      title: "Workshops",
      description: "Skill development and knowledge sharing sessions",
      details:
        "SIG events are arranged on a regular basis where people in a particular domain or with a particular interest gather and learn from others via meetups, talks and workshops.",
    },
    {
      title: "Mentorship",
      description: "Guidance from experienced entrepreneurs and professionals",
      details:
        "This program is for business leaders who have somewhat established concerns and looking for new avenues of expertise, mentoring and guidance to take their businesses to the next level.",
    },
    {
      title: "Launchpad",
      description: "Legal and business setup support for startups",
      details:
        "Our legal Clinic is designed to fill this gap and will offer top quality advice by the experts. That includes ranging from structuring of the company, partnership agreements, taxation structure, employee contracts etc.",
    },
    {
      title: "Career Dev",
      description: "Career development and job placement assistance",
      details:
        "This program seeks to promote lifelong learning and skill development, empowering individuals to adapt to evolving job markets and seize new opportunities throughout their careers.",
    },
    {
      title: "Annual Forum",
      description: "Yearly flagship event bringing together the community",
      details:
        "Our annual forum brings together entrepreneurs, investors, and professionals for a day of learning, networking, and inspiration with keynote speakers and panel discussions.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Programs</h1>

      <p className="text-lg mb-12">
        OPEN Silicon Valley offers a variety of programs designed to support entrepreneurs and professionals at every
        stage of their journey. From networking to mentorship, we provide resources and community to help you succeed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{program.details}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/programs/${program.title.toLowerCase().replace(" ", "-")}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
