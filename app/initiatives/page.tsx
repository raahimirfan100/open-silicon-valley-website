import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Initiatives | OPEN Silicon Valley",
  description: "Explore OPEN Silicon Valley's initiatives supporting the community",
}

export default function InitiativesPage() {
  const initiatives = [
    {
      title: "SV Connect",
      description: "Connecting Silicon Valley professionals",
      details:
        "SV Connect is a platform that connects professionals in Silicon Valley with each other and with opportunities for collaboration, mentorship, and growth.",
    },
    {
      title: "Startup Connect",
      description: "Supporting early-stage startups",
      details:
        "Startup Connect provides resources, mentorship, and networking opportunities for early-stage startups founded by Pakistani entrepreneurs in Silicon Valley.",
    },
    {
      title: "Trusted Partners Network",
      description: "Building trusted business relationships",
      details:
        "The Trusted Partners Network (TPN) is a curated network of professionals who have been vetted and can be trusted for business partnerships, collaborations, and referrals.",
    },
    {
      title: "Non Profit Awareness",
      description: "Supporting charitable causes",
      details:
        "Our Non Profit Awareness initiative highlights and supports charitable organizations making a positive impact in our community and in Pakistan.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Initiatives</h1>

      <p className="text-lg mb-12">
        OPEN Silicon Valley has launched several initiatives to support specific needs within our community. These
        initiatives focus on creating connections, supporting startups, building trusted networks, and raising awareness
        for non-profit causes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((initiative, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{initiative.title}</CardTitle>
              <CardDescription>{initiative.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6">{initiative.details}</p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/initiatives/${initiative.title.toLowerCase().replace(" ", "-")}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
