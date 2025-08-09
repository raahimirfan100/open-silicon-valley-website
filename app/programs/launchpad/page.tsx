import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Scale,
  Users,
  Building2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Launchpad | OPEN Silicon Valley",
  description:
    "Get expert legal and business advice to launch and grow your startup successfully",
};

export default function LaunchpadPage() {
  const services = [
    {
      title: "Legal Structure",
      description:
        "Choose the right legal structure for your business with expert guidance.",
      icon: Scale,
      details: [
        "Entity formation (C-Corp, LLC, etc.)",
        "Founder agreements",
        "Intellectual property protection",
        "Regulatory compliance",
      ],
    },
    {
      title: "Business Setup",
      description: "Set up your business operations for success from day one.",
      icon: Building2,
      details: [
        "Business plan development",
        "Market analysis",
        "Financial projections",
        "Operational planning",
      ],
    },
    {
      title: "Team Building",
      description:
        "Build and manage your team effectively with proper legal frameworks.",
      icon: Users,
      details: [
        "Employment contracts",
        "Equity distribution",
        "NDAs and confidentiality",
        "Remote work policies",
      ],
    },
    {
      title: "Growth Strategy",
      description:
        "Plan your growth with strategic business and legal guidance.",
      icon: Target,
      details: [
        "Funding strategy",
        "Partnership agreements",
        "M&A preparation",
        "International expansion",
      ],
    },
  ];

  const experts = [
    {
      name: "Dr. Aisha Khan",
      role: "Legal Counsel",
      expertise: "Startup Law, IP Protection",
      image: "/placeholder.svg?height=100&width=100&text=AK",
    },
    {
      name: "Imran Malik",
      role: "Business Strategist",
      expertise: "Business Development, Growth",
      image: "/placeholder.svg?height=100&width=100&text=IM",
    },
    {
      name: "Sarah Ahmed",
      role: "HR Specialist",
      expertise: "Team Building, Compliance",
      image: "/placeholder.svg?height=100&width=100&text=SA",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-primary/10 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Business & Legal Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Launchpad</h1>
            <p className="text-xl text-gray-600 mb-8">
              Get expert legal and business advice to launch and grow your
              startup successfully. Our comprehensive services help you navigate
              the complexities of entrepreneurship with confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive business and legal services to help your startup
                succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          </div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process ensures you get the support you need
                efficiently and effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Initial meeting to understand your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-gray-600">
                  Detailed analysis of your requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Strategy</h3>
                <p className="text-gray-600">
                  Customized plan and recommendations
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Implementation</h3>
                <p className="text-gray-600">Execution with ongoing support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Experts</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who will guide you through
                your startup journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-1">
                        {expert.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {expert.role}
                      </p>
                      <p className="text-gray-600">{expert.expertise}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-linear-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Launch Your Startup?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get expert guidance to set up your business for success.
                Schedule a consultation with our team today.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
