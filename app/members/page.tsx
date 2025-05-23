import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Members | OPEN Silicon Valley",
  description: "Learn about OPEN Silicon Valley membership types and benefits",
}

export default function MembersPage() {
  const membershipTypes = [
    {
      title: "Charter Members",
      description: "Established entrepreneurs and professionals",
      benefits: [
        "Access to exclusive networking events",
        "Opportunity to mentor other members",
        "Priority access to all OPEN events",
        "Voting rights in OPEN elections",
        "Recognition on the OPEN website",
      ],
    },
    {
      title: "Youth Members",
      description: "Students and young entrepreneurs",
      benefits: [
        "Mentorship from experienced professionals",
        "Access to youth-focused events and workshops",
        "Networking opportunities with peers",
        "Discounted access to OPEN events",
        "Internship and job opportunities",
      ],
    },
    {
      title: "Young Professionals",
      description: "Early to mid-career professionals",
      benefits: [
        "Career development resources",
        "Networking with industry leaders",
        "Access to professional development workshops",
        "Mentorship opportunities",
        "Job and advancement opportunities",
      ],
    },
    {
      title: "Rising Stars",
      description: "Emerging entrepreneurs and leaders",
      benefits: [
        "Specialized mentorship from successful entrepreneurs",
        "Pitch opportunities to investors",
        "Networking with potential partners and customers",
        "Access to resources for scaling businesses",
        "Recognition in OPEN publications",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Membership</h1>

      <p className="text-lg mb-12">
        OPEN Silicon Valley offers different membership types to cater to professionals at various stages of their
        careers. Each membership type comes with specific benefits designed to support your growth and success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {membershipTypes.map((type, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{type.title}</CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-medium mb-2">Benefits:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                {type.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/join">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-lg mb-6">
          Become a part of the growing OPEN Silicon Valley family and connect with entrepreneurs, investors, and
          professionals.
        </p>
        <Button size="lg" asChild>
          <Link href="/join">Join Now</Link>
        </Button>
      </div>
    </div>
  )
}
