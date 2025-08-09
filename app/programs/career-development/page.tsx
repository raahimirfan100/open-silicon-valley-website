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
  Briefcase,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Development | OPEN Silicon Valley",
  description:
    "Advance your career with our comprehensive development programs and resources",
};

export default function CareerDevelopmentPage() {
  const programs = [
    {
      title: "Career Coaching",
      description:
        "One-on-one guidance to help you achieve your professional goals.",
      icon: Target,
      details: [
        "Personalized career planning",
        "Resume and LinkedIn optimization",
        "Interview preparation",
        "Salary negotiation strategies",
      ],
    },
    {
      title: "Skill Development",
      description:
        "Enhance your professional skills with targeted training programs.",
      icon: GraduationCap,
      details: [
        "Technical skills workshops",
        "Leadership development",
        "Communication training",
        "Project management",
      ],
    },
    {
      title: "Networking",
      description:
        "Connect with industry professionals and expand your network.",
      icon: Users,
      details: [
        "Industry mixers",
        "Professional meetups",
        "Mentorship opportunities",
        "Career fairs",
      ],
    },
    {
      title: "Job Search Support",
      description: "Comprehensive assistance in your job search journey.",
      icon: Briefcase,
      details: [
        "Job search strategies",
        "Company research",
        "Application tracking",
        "Follow-up techniques",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "The career coaching program helped me land my dream job at a leading tech company.",
      name: "Sarah Ahmed",
      role: "Software Engineer",
      company: "Tech Corp",
      image: "/placeholder.svg?height=100&width=100&text=SA",
    },
    {
      quote:
        "The networking events opened doors to opportunities I never knew existed.",
      name: "Imran Malik",
      role: "Product Manager",
      company: "Innovate Inc",
      image: "/placeholder.svg?height=100&width=100&text=IM",
    },
    {
      quote:
        "The skill development workshops gave me the confidence to pursue leadership roles.",
      name: "Aisha Khan",
      role: "Team Lead",
      company: "Growth Solutions",
      image: "/placeholder.svg?height=100&width=100&text=AK",
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
              Professional Growth
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Development
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take your career to the next level with our comprehensive
              development programs. From skill enhancement to networking
              opportunities, we provide the resources you need to succeed in
              Silicon Valley.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#programs">Explore Programs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive career development programs designed to help you
                achieve your professional goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.details.map((detail, i) => (
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

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from professionals who have advanced their careers with our
                programs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-gray-600 mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="font-semibold text-lg mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-linear-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our career development programs and take the next step in
                your professional journey.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
