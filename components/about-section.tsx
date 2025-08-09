import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Compass, Lightbulb, Globe, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3" aria-hidden="true"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about/sal-khan-keynote.jpg"
                    alt="Sal Khan delivering a keynote at an OPEN Silicon Valley event"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bold text-3xl text-primary">24+</div>
                    <div className="text-sm text-gray-500">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                Our Story
              </div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                About OPEN Silicon Valley
              </h2>

              <p className="text-gray-600 mb-6 text-pretty">
                The Organization of Pakistani Entrepreneurs is a global network spanning 15 cities from Silicon Valley
                to New York, London, and Islamabad. Our Silicon Valley chapter sits at the heart of technology
                innovation, fostering a vibrant community of entrepreneurs.
              </p>

              <p className="text-gray-600 mb-8 text-pretty">
                For over 24 years, OPEN has established itself as the premier platform for entrepreneurs, investors and
                professionals to network, collaborate, and mentor each other, helping countless professionals showcase
                their businesses to investors and create successful entrepreneurial ventures.
              </p>

              <Button asChild className="rounded-full px-6">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-gray-100 h-full">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-6" aria-hidden="true">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600 text-pretty">
                We strive to foster entrepreneurship and accelerate business development through workshops and forums
                where entrepreneurs and investors network and share ideas globally through our cross-chapter programs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-gray-100 h-full">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-6" aria-hidden="true">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600 text-pretty">
                Our mission is to promote entrepreneurship, professional growth and business development by connecting
                the professional community in Silicon Valley through workshops, forums, and events.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-gray-100 h-full">
              <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-6" aria-hidden="true">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Objective</h3>
              <p className="text-gray-600 text-pretty">
                Our key goals focus on helping members achieve business goals and overcome obstacles. We facilitate
                entrepreneurship, create growth opportunities, provide mentorship, and develop events that empower and
                recognize accomplishments.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Global Reach</h4>
                <p className="text-sm text-gray-500">15+ chapters worldwide</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Strong Community</h4>
                <p className="text-sm text-gray-500">100,000+ network members</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold">Proven Success</h4>
                <p className="text-sm text-gray-500">$13B+ in successful exits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
