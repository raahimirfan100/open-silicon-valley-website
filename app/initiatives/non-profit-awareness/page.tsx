import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Non-Profit Awareness | OPEN Silicon Valley",
  description:
    "OPEN Silicon Valley's Non-Profit Awareness initiative highlights and supports impactful non-profit organizations.",
}

export default function NonProfitAwareness() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              OPEN Silicon Valley Initiative
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Non-Profit Awareness</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Highlighting and supporting impactful non-profit organizations making a difference in our communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About the Initiative</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                The Non-Profit Awareness initiative by OPEN Silicon Valley aims to spotlight the incredible work being
                done by non-profit organizations both locally and globally. We believe in the power of community support
                and the impact that can be made when we come together to address social challenges.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Through this initiative, we provide a platform for non-profits to share their mission, connect with
                potential volunteers and donors, and collaborate with other organizations to amplify their impact. We
                also organize events, fundraisers, and awareness campaigns to support these causes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Community+Impact"
                alt="Non-Profit Awareness Illustration"
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
            <h2 className="text-3xl font-bold tracking-tighter">Featured Non-Profits</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Learn about some of the amazing organizations we've partnered with and supported.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Education For All",
                mission: "Providing educational resources and opportunities to underserved communities.",
                image: "/placeholder.svg?height=200&width=300&text=Education+For+All",
              },
              {
                name: "Green Earth Initiative",
                mission: "Working towards environmental conservation and sustainable practices.",
                image: "/placeholder.svg?height=200&width=300&text=Green+Earth",
              },
              {
                name: "Health Access Network",
                mission: "Ensuring healthcare access for vulnerable populations around the world.",
                image: "/placeholder.svg?height=200&width=300&text=Health+Access",
              },
              {
                name: "Tech For Good",
                mission: "Leveraging technology to solve social challenges and empower communities.",
                image: "/placeholder.svg?height=200&width=300&text=Tech+For+Good",
              },
              {
                name: "Women Empowerment Coalition",
                mission: "Supporting women's rights, education, and economic opportunities globally.",
                image: "/placeholder.svg?height=200&width=300&text=Women+Empowerment",
              },
              {
                name: "Youth Development Fund",
                mission: "Investing in programs that develop leadership and skills in young people.",
                image: "/placeholder.svg?height=200&width=300&text=Youth+Development",
              },
            ].map((org, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={org.image || "/placeholder.svg"}
                  alt={org.name}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <CardHeader className="pb-2">
                  <CardTitle>{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{org.mission}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">How We Support</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Our initiative provides multiple avenues of support for non-profit organizations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fundraising</h3>
              <p className="text-gray-500">Organizing events and campaigns to raise funds for non-profit causes.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12Z" />
                  <path d="M12 18v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Awareness</h3>
              <p className="text-gray-500">Amplifying the mission and impact of non-profits through our platforms.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Volunteering</h3>
              <p className="text-gray-500">Connecting skilled volunteers with non-profits that need their expertise.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Partnerships</h3>
              <p className="text-gray-500">Facilitating collaborations between non-profits and corporate partners.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Get Involved</h2>
            <p className="max-w-[700px] md:text-lg/relaxed">
              There are many ways to support our Non-Profit Awareness initiative and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="/contact-us">Nominate a Non-Profit</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="/volunteer-with-us">Volunteer Your Skills</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
