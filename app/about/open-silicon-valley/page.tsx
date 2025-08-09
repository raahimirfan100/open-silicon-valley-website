import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About OPEN Silicon Valley | OPEN Silicon Valley",
  description: "Learn about OPEN Silicon Valley, our history, mission, and impact in the community.",
}

export default function AboutOpenSiliconValley() {
  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">OPEN Silicon Valley</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empowering professionals and entrepreneurs through networking, education, and community initiatives
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                OPEN Silicon Valley is a chapter of the Organization of Pakistani Entrepreneurs (OPEN), a global network
                dedicated to promoting entrepreneurship and professional growth within the Pakistani diaspora and
                beyond. Founded in 2000, our Silicon Valley chapter has grown to become one of the most active and
                impactful professional organizations in the region.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                We bring together professionals, entrepreneurs, investors, and students to create a vibrant community
                that fosters innovation, leadership, and collaboration. Our members come from diverse backgrounds and
                industries, including technology, healthcare, finance, education, and more.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Through our various programs and initiatives, we aim to create opportunities for professional
                development, business growth, and community service. We believe in the power of networking, mentorship,
                and knowledge sharing to drive success and positive impact.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=OPEN+Silicon+Valley"
                alt="OPEN Silicon Valley Community"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16" id="officers">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Our Officers</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Meet the dedicated team leading OPEN Silicon Valley
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Asad Zaidi",
                role: "President",
                image: "/placeholder.svg?height=300&width=300&text=AZ",
              },
              {
                name: "Sarah Ahmed",
                role: "Vice President",
                image: "/placeholder.svg?height=300&width=300&text=SA",
              },
              {
                name: "Imran Khan",
                role: "Secretary",
                image: "/placeholder.svg?height=300&width=300&text=IK",
              },
              {
                name: "Fatima Hassan",
                role: "Treasurer",
                image: "/placeholder.svg?height=300&width=300&text=FH",
              },
              {
                name: "Ali Raza",
                role: "Director of Programs",
                image: "/placeholder.svg?height=300&width=300&text=AR",
              },
              {
                name: "Zainab Malik",
                role: "Director of Marketing",
                image: "/placeholder.svg?height=300&width=300&text=ZM",
              },
              {
                name: "Omar Qureshi",
                role: "Director of Membership",
                image: "/placeholder.svg?height=300&width=300&text=OQ",
              },
              {
                name: "Nadia Shah",
                role: "Director of Community Relations",
                image: "/placeholder.svg?height=300&width=300&text=NS",
              },
            ].map((officer, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={officer.image || "/placeholder.svg"} alt={officer.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{officer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{officer.role}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Our History</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              The journey of OPEN Silicon Valley from its founding to today
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">2000</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Founding of OPEN Silicon Valley</h3>
                <p className="text-gray-500">
                  OPEN Silicon Valley was established as a chapter of the global OPEN network to serve the growing
                  Pakistani professional community in the Bay Area.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">2005</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Expansion of Programs</h3>
                <p className="text-gray-500">
                  The organization expanded its programs to include regular networking events, educational seminars, and
                  mentorship opportunities.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">2010</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Launch of Annual Conference</h3>
                <p className="text-gray-500">
                  OPEN Silicon Valley launched its flagship annual conference, bringing together industry leaders,
                  entrepreneurs, and professionals for a day of learning and networking.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">2015</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Introduction of SV Connect</h3>
                <p className="text-gray-500">
                  The organization introduced SV Connect, a platform to connect Pakistani professionals with
                  opportunities in Silicon Valley and beyond.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">2020</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Virtual Transformation</h3>
                <p className="text-gray-500">
                  In response to the global pandemic, OPEN Silicon Valley successfully transformed its programs to
                  virtual formats, reaching a wider audience than ever before.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-none md:w-32 pt-1">
                <div className="font-bold text-xl text-primary">Today</div>
              </div>
              <div className="grow space-y-2">
                <h3 className="text-xl font-bold">Continued Growth & Impact</h3>
                <p className="text-gray-500">
                  OPEN Silicon Valley continues to grow its membership, expand its programs, and increase its impact on
                  the professional community and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Join Our Community</h2>
            <p className="max-w-[700px] md:text-lg/relaxed">
              Become a part of OPEN Silicon Valley and connect with a network of professionals and entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="https://opensv.wildapricot.org/join-us">Become a Member</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/volunteer-with-us">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
