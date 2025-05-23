import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Rocket, Lightbulb, Users } from "lucide-react"

export default function FeaturedPrograms() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We offer a variety of programs designed to support entrepreneurs and innovators at every stage of their
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="pb-2">
            <Rocket className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Startup Accelerator</CardTitle>
            <CardDescription>For early-stage startups</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Our 12-week accelerator program provides funding, mentorship, workspace, and connections to help startups
              validate their business models and prepare for growth.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/programs/accelerator">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Lightbulb className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Innovation Labs</CardTitle>
            <CardDescription>Corporate innovation partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              We connect established companies with startups and researchers to solve industry challenges through
              collaborative innovation projects.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/programs/innovation-labs">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Founder Fellowship</CardTitle>
            <CardDescription>Support for first-time entrepreneurs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              A 6-month program providing guidance, resources, and community for first-time founders from
              underrepresented backgrounds.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/programs/fellowship">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/programs">View All Programs</Link>
        </Button>
      </div>
    </div>
  )
}
