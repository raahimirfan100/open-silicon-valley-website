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
  Calendar,
  Users,
  BookOpen,
  Lightbulb,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workshops | OPEN Silicon Valley",
  description:
    "Join our interactive workshops to learn new skills, network with professionals, and grow your career",
};

export default function WorkshopsPage() {
  const upcomingWorkshops = [
    {
      id: 1,
      title: "Startup Funding Strategies",
      date: "June 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "OpenSV Hub, Palo Alto",
      category: "Finance",
      description:
        "Learn about different funding options, how to pitch to investors, and create a compelling funding strategy.",
    },
    {
      id: 2,
      title: "AI in Healthcare Workshop",
      date: "June 22, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Virtual Event",
      category: "Technology",
      description:
        "Explore the latest AI applications in healthcare and how to implement them in your practice.",
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      date: "July 8, 2025",
      time: "5:30 PM - 7:30 PM",
      location: "OpenSV Hub, Palo Alto",
      category: "Marketing",
      description:
        "Master the art of digital marketing with hands-on training on the latest tools and strategies.",
    },
  ];

  const workshopCategories = [
    {
      title: "Technology",
      description:
        "Stay ahead of the curve with workshops on emerging technologies, AI, and digital transformation.",
      icon: Lightbulb,
    },
    {
      title: "Business Strategy",
      description:
        "Learn essential business skills, from strategic planning to market analysis and competitive positioning.",
      icon: Target,
    },
    {
      title: "Professional Development",
      description:
        "Enhance your career with workshops on leadership, communication, and personal branding.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Professional Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive Workshops
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our hands-on workshops led by industry experts to learn new
              skills, network with professionals, and accelerate your career
              growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#upcoming-workshops">View Upcoming Workshops</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/contact">Request a Workshop</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Workshop Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our diverse range of workshops designed to help you grow
                professionally and personally.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workshopCategories.map((category, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section id="upcoming-workshops" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Workshops</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our upcoming workshops and take the next step in your
                professional journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWorkshops.map((workshop) => (
                <Card
                  key={workshop.id}
                  className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium mb-2">
                      {workshop.category}
                    </div>
                    <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{workshop.description}</p>
                  </CardContent>
                  <CardContent>
                    <Button className="w-full rounded-full">
                      Register Now
                    </Button>
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
            <div className="bg-gradient-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold mb-4">
                Want to Host a Workshop?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Share your expertise with our community by hosting a workshop.
                We provide the platform, you bring the knowledge.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us to Host <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
