import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | OPEN Silicon Valley",
  description: "Learn about OPEN Silicon Valley's mission, vision, and the team behind our organization",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About OPEN Silicon Valley</h1>
            <p className="text-xl text-gray-600 mb-8">
              A chapter of the global OPEN network, connecting Pakistani entrepreneurs, investors, and professionals
              with opportunities in Silicon Valley.
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-lg">
                    The Organization of Pakistani Entrepreneurs is a global network spanning 15 cities from Silicon
                    Valley to New York, London, and Islamabad. Our Silicon Valley chapter sits at the heart of
                    technology innovation, fostering a vibrant community of entrepreneurs.
                  </p>
                  <p className="text-lg">
                    For over 24 years, OPEN has established itself as the premier platform for entrepreneurs, investors
                    and professionals to network, collaborate, and mentor each other, helping countless professionals
                    showcase their businesses to investors and create successful entrepreneurial ventures.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=OPEN+SV+History"
                      alt="OPEN Silicon Valley history"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                <Card className="bg-gray-50 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Vision</h3>
                    <p>
                      We strive to foster entrepreneurship and accelerate business development through holding workshops
                      and forums where entrepreneurs and investors have a platform to network and share business ideas
                      around the world through our cross-chapter programs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Mission</h3>
                    <p>
                      Our mission is to promote entrepreneurship, professional growth and business development by
                      connecting the professional community in Silicon Valley through workshops, forums, and events.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Objective</h3>
                    <p>
                      Our key goals focus on helping members achieve business goals and overcome obstacles. We
                      facilitate entrepreneurship, create growth opportunities, provide mentorship, and develop events
                      that empower and recognize accomplishments.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold mb-6" id="presidents-message">
                President's Message
              </h2>
              <Card className="mb-12 border-gray-100">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128&text=AH"
                        alt="Amer Haider"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-4">
                        I extend a warm welcome to all of you in the OPEN Silicon Valley community. OPEN, as a dynamic
                        and expansive global network of entrepreneurs, investors, and professionals, boasts an
                        impressive presence with 15 chapters worldwide, including our distinguished Silicon Valley
                        Chapter.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Our mission at OPEN is creating and nurturing a vibrant platform where entrepreneurs, investors,
                        and professionals can forge meaningful connections, engage in enriching mentorship, and
                        collaboratively pave the way for innovation across various sectors.
                      </p>
                      <p className="text-gray-700 mb-4">
                        At its essence, OPEN SV thrives as a volunteer-led organization. Our team of passionate
                        volunteers, drawn from the vibrant Silicon Valley ecosystem and the wider global community,
                        exemplifies dedication and commitment. Their tireless efforts and devotion are the driving
                        forces behind our organization's ability to reach and surpass our annual milestones.
                      </p>
                      <p className="text-gray-700 mb-4">
                        In my role as President, I am wholeheartedly committed to elevating OPEN Silicon Valley to
                        unprecedented levels of achievement. My vision is centered on expanding the reach and impact of
                        OPEN's mission, fostering a synergistic relationship between Pakistan and Silicon Valley that
                        benefits all.
                      </p>
                      <p className="text-right font-semibold">- Amer Haider, President, OPEN Silicon Valley</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold mb-6" id="global-network">
                Part of a Global Network
              </h2>
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <p className="text-lg">
                    OPEN Silicon Valley is one of 15 chapters of the global OPEN network. Founded in 1998, OPEN has
                    grown to become the largest network of Pakistani entrepreneurs and professionals worldwide.
                  </p>
                  <p className="text-lg">
                    Our global network includes chapters in Boston, Chicago, Houston, London, Islamabad, Karachi,
                    Lahore, New England, New York, Seattle, Southern California, Toronto, UAE, and Washington DC.
                  </p>
                  <div className="mt-6">
                    <Button asChild className="rounded-full">
                      <Link
                        href="https://www.openglobalweb.org/"
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit OPEN Global <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=OPEN+Global+Network"
                      alt="OPEN Global Network"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6" id="impact">
                Our Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600">Global Chapters</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-gray-600">Network Members</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$13B+</div>
                  <div className="text-gray-600">In Successful Exits</div>
                </div>
              </div>

              <div className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Become a part of OPEN Silicon Valley and connect with entrepreneurs, investors, and professionals who
                  are shaping the future of technology and business.
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
          </div>
        </div>
      </section>
    </div>
  )
}
