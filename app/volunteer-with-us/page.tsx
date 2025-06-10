import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Calendar, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer With Us | OPEN Silicon Valley",
  description: "Join the OPEN Silicon Valley volunteer team",
};

export default function VolunteerPage() {
  const volunteerRoles = [
    {
      title: "Event Coordinator",
      description:
        "Help plan and execute OPEN Silicon Valley events, including venue selection, speaker coordination, and logistics management.",
      commitment: "5-10 hours per month",
      skills: [
        "Event planning",
        "Communication",
        "Organization",
        "Time management",
      ],
    },
    {
      title: "Marketing & Communications",
      description:
        "Assist with social media management, email newsletters, content creation, and promotional materials for OPEN Silicon Valley.",
      commitment: "3-8 hours per month",
      skills: [
        "Social media",
        "Content writing",
        "Graphic design",
        "Email marketing",
      ],
    },
    {
      title: "Membership Coordinator",
      description:
        "Support member recruitment, onboarding, and engagement activities to help grow and strengthen our community.",
      commitment: "4-6 hours per month",
      skills: [
        "Customer service",
        "Database management",
        "Communication",
        "Relationship building",
      ],
    },
    {
      title: "Technology Support",
      description:
        "Provide technical assistance for the OPEN Silicon Valley website, membership portal, and digital tools.",
      commitment: "3-8 hours per month",
      skills: [
        "Web development",
        "IT support",
        "Software management",
        "Problem-solving",
      ],
    },
    {
      title: "Sponsorship Coordinator",
      description:
        "Help identify, approach, and manage relationships with potential sponsors for OPEN Silicon Valley events and programs.",
      commitment: "4-8 hours per month",
      skills: [
        "Sales",
        "Relationship management",
        "Negotiation",
        "Business development",
      ],
    },
    {
      title: "Mentorship Program Coordinator",
      description:
        "Assist in matching mentors with mentees, organizing mentorship events, and ensuring the success of the mentorship program.",
      commitment: "5-10 hours per month",
      skills: [
        "Relationship building",
        "Program management",
        "Communication",
        "Empathy",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our team of dedicated volunteers and help make a difference
              in the entrepreneurial ecosystem.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 text-white"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-auto"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Volunteer+Team"
                    alt="OPEN Silicon Valley Volunteer Team"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Why Volunteer With Us?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  OPEN Silicon Valley is a volunteer-led organization. Our
                  success depends on the dedication and skills of our
                  volunteers. Join our team and help build a stronger community
                  while developing your skills and expanding your network.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Expand Your Network</h3>
                      <p className="text-gray-600">
                        Connect with entrepreneurs, investors, and professionals
                        in Silicon Valley.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Develop New Skills</h3>
                      <p className="text-gray-600">
                        Gain valuable experience and skills that can enhance
                        your professional profile.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Make an Impact</h3>
                      <p className="text-gray-600">
                        Contribute to the growth and success of the Pakistani
                        entrepreneurial ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Commitment</h3>
                      <p className="text-gray-600">
                        Volunteer as much or as little as you can, based on your
                        availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Committee Structure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join one of our committees and contribute to specific areas of
                OPEN's mission.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-3">Events Committee</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Plan and execute all OPEN events including mixers,
                  conferences, and workshops.
                </p>
                <div className="text-xs text-gray-500">
                  <div>Monthly meetings</div>
                  <div>5-10 hours/month</div>
                </div>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-3">Membership Committee</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Focus on member recruitment, engagement, and retention
                  strategies.
                </p>
                <div className="text-xs text-gray-500">
                  <div>Bi-weekly meetings</div>
                  <div>4-8 hours/month</div>
                </div>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-3">Programs Committee</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Develop educational content, workshops, and professional
                  development programs.
                </p>
                <div className="text-xs text-gray-500">
                  <div>Monthly meetings</div>
                  <div>6-12 hours/month</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Time Commitments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Flexible Time Commitments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer various levels of involvement to fit your schedule and
                availability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">One-Time Help</h3>
                <div className="text-2xl font-bold text-yellow-600 mb-2">
                  2-4 hours
                </div>
                <p className="text-sm text-gray-600">
                  Event setup, registration assistance, social media posts
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6 border-primary">
                <Badge className="mb-4">Most Popular</Badge>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Regular Volunteer</h3>
                <div className="text-2xl font-bold text-primary mb-2">
                  5-10 hours/month
                </div>
                <p className="text-sm text-gray-600">
                  Committee participation, ongoing projects, event coordination
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Leadership Role</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  10+ hours/month
                </div>
                <p className="text-sm text-gray-600">
                  Committee chair, project leadership, strategic planning
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16" id="roles">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Available Volunteer Roles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have various volunteer opportunities available based on your
                skills, interests, and availability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteerRoles.map((role, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle>{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                    <div className="mb-4">
                      <div className="font-medium mb-2">Time Commitment:</div>
                      <div className="text-sm text-gray-600">
                        {role.commitment}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-2">Skills Required:</div>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Volunteer Application</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to apply for a volunteer position with
                OPEN Silicon Valley.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="font-medium">
                      First Name
                    </label>
                    <Input id="first-name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="last-name" className="font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="linkedin" className="font-medium">
                    LinkedIn Profile URL
                  </label>
                  <Input id="linkedin" type="url" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Areas of Interest</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {volunteerRoles.map((role, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`role-${index}`} />
                        <label htmlFor={`role-${index}`} className="text-sm">
                          {role.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="availability" className="font-medium">
                    Availability
                  </label>
                  <Select>
                    <SelectTrigger id="availability">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1-3 hours per week</SelectItem>
                      <SelectItem value="4-6">4-6 hours per week</SelectItem>
                      <SelectItem value="7-10">7-10 hours per week</SelectItem>
                      <SelectItem value="10+">10+ hours per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="skills" className="font-medium">
                    Relevant Skills & Experience
                  </label>
                  <Textarea id="skills" rows={4} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="motivation" className="font-medium">
                    Why do you want to volunteer with OPEN Silicon Valley?
                  </label>
                  <Textarea id="motivation" rows={4} />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Note: This form will be replaced with a Monday.com form in
                    the future.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Volunteer Recognition Program
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We deeply appreciate our volunteers and recognize their valuable
                contributions in multiple ways.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Annual Awards</h3>
                <p className="text-sm text-gray-600">
                  Volunteer of the Year and category-specific recognition awards
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Community Spotlights</h3>
                <p className="text-sm text-gray-600">
                  Featured profiles in newsletters and social media
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Appreciation Events</h3>
                <p className="text-sm text-gray-600">
                  Exclusive volunteer appreciation dinners and gatherings
                </p>
              </Card>
              <Card className="border-gray-100 text-center p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Professional References</h3>
                <p className="text-sm text-gray-600">
                  LinkedIn recommendations and professional references
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Volunteer Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from our volunteers about their experiences with OPEN
                Silicon Valley.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-gray-100 shadow-sm p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=FA"
                      alt="Fatima Ahmed"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Volunteering with OPEN SV has been an incredible
                    experience. I've met amazing people, developed new skills,
                    and made a real impact in the community. It's been rewarding
                    both personally and professionally."
                  </p>
                  <div className="font-semibold">Fatima Ahmed</div>
                  <div className="text-sm text-gray-500">
                    Event Coordinator Volunteer
                  </div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-sm p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=IM"
                      alt="Imran Malik"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "As a marketing volunteer, I've had the opportunity to work
                    on meaningful projects that have helped me grow
                    professionally. The OPEN SV team is supportive and
                    appreciative of volunteers' contributions."
                  </p>
                  <div className="font-semibold">Imran Malik</div>
                  <div className="text-sm text-gray-500">
                    Marketing Volunteer
                  </div>
                </div>
              </Card>

              <Card className="border-gray-100 shadow-sm p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src="/placeholder.svg?height=80&width=80&text=NR"
                      alt="Nadia Rahman"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Volunteering with OPEN SV has expanded my network and
                    opened doors to new opportunities. I've made valuable
                    connections and gained insights into the entrepreneurial
                    ecosystem in Silicon Valley."
                  </p>
                  <div className="font-semibold">Nadia Rahman</div>
                  <div className="text-sm text-gray-500">
                    Membership Coordinator Volunteer
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about volunteering.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Do I need to be a member to volunteer?
                  </h3>
                  <p className="text-gray-600">
                    No, you don't need to be a member to volunteer with OPEN
                    Silicon Valley. However, many of our volunteers choose to
                    become members to take advantage of additional benefits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    How much time do I need to commit?
                  </h3>
                  <p className="text-gray-600">
                    The time commitment varies depending on the role and your
                    availability. Most volunteer roles require 3-10 hours per
                    month, but we're flexible and appreciate any time you can
                    contribute.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Can I volunteer remotely?
                  </h3>
                  <p className="text-gray-600">
                    Yes, many of our volunteer roles can be performed remotely.
                    Some roles, particularly those related to event management,
                    may require occasional in-person attendance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    How long is the volunteer commitment?
                  </h3>
                  <p className="text-gray-600">
                    We typically ask for a minimum commitment of 6 months, but
                    this is flexible. We understand that circumstances change
                    and appreciate any time you can contribute.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our team of dedicated volunteers and help us build a stronger
              community for entrepreneurs and professionals.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="#apply" className="flex items-center gap-2">
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
