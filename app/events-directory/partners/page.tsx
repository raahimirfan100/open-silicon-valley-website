import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Partners & Sponsors | OPEN Silicon Valley",
  description:
    "Learn about the organizations that partner with and sponsor OPEN Silicon Valley's initiatives and events.",
}

export default function PartnersAndSponsors() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Collaborations</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Partners & Sponsors</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The organizations that help make our work possible and impactful
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Strategic Partners</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Organizations that collaborate with us on initiatives and programs
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Tech Innovation Hub",
                description: "A leading technology incubator supporting startups and innovation.",
                logo: "/placeholder.svg?height=100&width=200&text=Tech+Innovation+Hub",
                website: "#",
              },
              {
                name: "Global Entrepreneurs Network",
                description: "An international network connecting entrepreneurs across borders.",
                logo: "/placeholder.svg?height=100&width=200&text=GEN",
                website: "#",
              },
              {
                name: "Silicon Valley Business Association",
                description: "Supporting business growth and development in Silicon Valley.",
                logo: "/placeholder.svg?height=100&width=200&text=SVBA",
                website: "#",
              },
              {
                name: "Women in Tech Alliance",
                description: "Promoting gender diversity and inclusion in the technology sector.",
                logo: "/placeholder.svg?height=100&width=200&text=WiTA",
                website: "#",
              },
              {
                name: "University Innovation Program",
                description: "Connecting academic institutions with industry opportunities.",
                logo: "/placeholder.svg?height=100&width=200&text=UIP",
                website: "#",
              },
              {
                name: "Startup Accelerator Network",
                description: "Helping startups scale through mentorship and resources.",
                logo: "/placeholder.svg?height=100&width=200&text=SAN",
                website: "#",
              },
            ].map((partner, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="h-16 object-contain"
                    />
                  </div>
                  <CardTitle>{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">{partner.description}</CardDescription>
                  <Link href={partner.website} className="text-primary hover:underline text-sm">
                    Visit Website
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Corporate Sponsors</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Companies that support our mission through financial contributions and resources
            </p>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "TechCorp",
                logo: "/placeholder.svg?height=100&width=200&text=TechCorp",
                tier: "Platinum",
              },
              {
                name: "InnovateSoft",
                logo: "/placeholder.svg?height=100&width=200&text=InnovateSoft",
                tier: "Platinum",
              },
              {
                name: "Global Finance",
                logo: "/placeholder.svg?height=100&width=200&text=Global+Finance",
                tier: "Gold",
              },
              {
                name: "Future Systems",
                logo: "/placeholder.svg?height=100&width=200&text=Future+Systems",
                tier: "Gold",
              },
              {
                name: "DataDrive",
                logo: "/placeholder.svg?height=100&width=200&text=DataDrive",
                tier: "Silver",
              },
              {
                name: "CloudNine",
                logo: "/placeholder.svg?height=100&width=200&text=CloudNine",
                tier: "Silver",
              },
              {
                name: "SecureTech",
                logo: "/placeholder.svg?height=100&width=200&text=SecureTech",
                tier: "Silver",
              },
              {
                name: "MobileFuture",
                logo: "/placeholder.svg?height=100&width=200&text=MobileFuture",
                tier: "Bronze",
              },
            ].map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="relative h-16 w-full mb-4">
                  <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
                </div>
                <div className="text-center">
                  <p className="font-medium">{sponsor.name}</p>
                  <p className="text-sm text-gray-500">{sponsor.tier} Sponsor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Community Partners</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Organizations that collaborate with us on community initiatives and outreach
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Community Foundation",
                description: "Supporting community development and social initiatives.",
                logo: "/placeholder.svg?height=100&width=200&text=Community+Foundation",
              },
              {
                name: "Youth Empowerment Network",
                description: "Empowering young people through education and mentorship.",
                logo: "/placeholder.svg?height=100&width=200&text=YEN",
              },
              {
                name: "Digital Inclusion Project",
                description: "Working to bridge the digital divide in underserved communities.",
                logo: "/placeholder.svg?height=100&width=200&text=DIP",
              },
            ].map((partner, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={100}
                      className="h-16 object-contain"
                    />
                  </div>
                  <CardTitle>{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{partner.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Become a Partner or Sponsor</h2>
            <p className="max-w-[700px] md:text-lg/relaxed">
              Join us in our mission to empower professionals and entrepreneurs in Silicon Valley and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="/contact-us">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact-us">Download Partnership Deck</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
