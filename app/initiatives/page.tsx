import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

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
      image: "/placeholder.svg?height=400&width=600&text=SV+Connect",
      link: "https://opensvconnect.org/",
      external: true,
    },
    {
      title: "Startup Connect",
      description: "Supporting early-stage startups",
      details:
        "Startup Connect provides resources, mentorship, and networking opportunities for early-stage startups founded by Pakistani entrepreneurs in Silicon Valley.",
      image: "/placeholder.svg?height=400&width=600&text=Startup+Connect",
      link: "https://www.startupconnect.io/",
      external: true,
    },
    {
      title: "Trusted Partners Network",
      description: "Building trusted business relationships",
      details:
        "The Trusted Partners Network (TPN) is a curated network of professionals who have been vetted and can be trusted for business partnerships, collaborations, and referrals.",
      image: "/placeholder.svg?height=400&width=600&text=TPN",
      link: "/initiatives/trusted-partners-network",
      external: false,
    },
    {
      title: "Non Profit Awareness",
      description: "Supporting charitable causes",
      details:
        "Our Non Profit Awareness initiative highlights and supports charitable organizations making a positive impact in our community and in Pakistan.",
      image: "/placeholder.svg?height=400&width=600&text=Non+Profit",
      link: "/initiatives/non-profit-awareness",
      external: false,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
            <p className="text-xl text-gray-600 mb-8">
              OPEN Silicon Valley has launched several initiatives to support specific needs within our community and
              create lasting impact.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="border-gray-100 shadow-sm overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                    <CardDescription>{initiative.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{initiative.details}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link
                        href={initiative.link}
                        className="flex items-center justify-center gap-2"
                        target={initiative.external ? "_blank" : undefined}
                        rel={initiative.external ? "noopener noreferrer" : undefined}
                      >
                        Learn More{" "}
                        {initiative.external ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Through our initiatives, we've made a significant impact on the entrepreneurial ecosystem in Silicon
                Valley and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Startups Supported</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Professionals Connected</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                <div className="text-gray-600">Funding Facilitated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from entrepreneurs and professionals who have benefited from our initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-gray-100 shadow-sm p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=SK"
                        alt="Sarah Khan"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600 italic mb-4">
                      "SV Connect helped me find mentors and collaborators who were instrumental in the growth of my
                      startup. The connections I made through this platform have been invaluable."
                    </p>
                    <div className="font-semibold">Sarah Khan</div>
                    <div className="text-sm text-gray-500">Founder & CEO, TechSolutions</div>
                  </div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-sm p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
                      <Image
                        src="/placeholder.svg?height=80&width=80&text=AA"
                        alt="Ahmed Ali"
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-600 italic mb-4">
                      "Startup Connect provided my early-stage startup with the resources and mentorship we needed to
                      refine our business model and secure seed funding. I'm grateful for the support."
                    </p>
                    <div className="font-semibold">Ahmed Ali</div>
                    <div className="text-sm text-gray-500">Co-founder, HealthTech Innovations</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-8">
              There are many ways to get involved with our initiatives, whether you're an entrepreneur, investor,
              professional, or student.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="https://opensv.wildapricot.org/join-us" className="flex items-center gap-2">
                  Become a Member <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/volunteer-with-us" className="flex items-center gap-2">
                  Volunteer With Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
