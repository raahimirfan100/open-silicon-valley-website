import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Trusted Partners Network | OPEN Silicon Valley",
  description:
    "OPEN Silicon Valley's Trusted Partners Network connects businesses with reliable service providers and resources.",
}

export default function TrustedPartnersNetwork() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              OPEN Silicon Valley Initiative
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted Partners Network</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connecting businesses with reliable service providers and resources to foster growth and success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About the Network</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                The Trusted Partners Network (TPN) is an initiative by OPEN Silicon Valley designed to connect
                businesses, particularly startups and growing companies, with reliable service providers, mentors, and
                resources. Our network includes carefully vetted professionals across various domains including legal,
                accounting, marketing, technology, and more.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                By leveraging our extensive community connections, we help businesses find the right partners to support
                their growth journey, while also providing service providers with access to potential clients who need
                their expertise.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Network+Illustration"
                alt="Trusted Partners Network Illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Our Partner Categories</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              The Trusted Partners Network includes experts from various fields ready to support your business needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Legal Services",
                description: "Attorneys specializing in business law, intellectual property, immigration, and more.",
                icon: "⚖️",
              },
              {
                title: "Financial Services",
                description:
                  "Accountants, financial advisors, and investment specialists to help manage your finances.",
                icon: "💰",
              },
              {
                title: "Marketing & PR",
                description: "Marketing experts, PR specialists, and brand strategists to boost your visibility.",
                icon: "📢",
              },
              {
                title: "Technology",
                description: "Software developers, IT consultants, and technology advisors for your tech needs.",
                icon: "💻",
              },
              {
                title: "Business Consulting",
                description: "Business strategists, management consultants, and growth advisors.",
                icon: "📈",
              },
              {
                title: "Human Resources",
                description: "HR specialists, recruiters, and talent acquisition experts to build your team.",
                icon: "👥",
              },
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Our process is designed to create meaningful connections between businesses and service providers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
              <h3 className="text-xl font-bold">Request a Connection</h3>
              <p className="text-gray-500">
                Submit your request specifying the type of service provider you need and your requirements.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
              <h3 className="text-xl font-bold">Matching Process</h3>
              <p className="text-gray-500">
                Our team reviews your request and matches you with the most suitable partners from our network.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
              <h3 className="text-xl font-bold">Connect & Collaborate</h3>
              <p className="text-gray-500">
                We facilitate introductions and you can begin working with your chosen partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Join Our Network</h2>
            <p className="max-w-[700px] md:text-lg/relaxed">
              Whether you're looking for services or want to become a trusted partner, we welcome you to join our
              network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="/contact-us">Request a Connection</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/contact-us">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
