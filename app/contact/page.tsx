import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPinIcon, PhoneIcon, MailIcon, Clock } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | OPEN Silicon Valley",
  description: "Get in touch with the OPEN Silicon Valley team",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our programs or want to get involved with
              OPEN Silicon Valley? We'd love to hear from you.
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

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible. We're here to answer any questions you may have
                  about our programs, events, or how to get involved.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Visit Us</h3>
                      <address className="not-italic">
                        123 Innovation Way
                        <br />
                        Palo Alto, CA 94301
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <PhoneIcon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p>(650) 555-1234</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MailIcon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p>info@opensv.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50766.63073489768!2d-122.17790282905271!3d37.44383837471902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c39%3A0xe1ff55235f576cf!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1653508166627!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OPEN Silicon Valley Office Location"
                  ></iframe>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label htmlFor="subject" className="font-medium">
                        Subject
                      </label>
                      <Input id="subject" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium">
                        Message
                      </label>
                      <Textarea id="message" rows={5} required />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow us on social media to stay updated with our latest events,
              programs, and announcements.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="bg-white p-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300"
                aria-label="Facebook"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40&text=FB"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                className="bg-white p-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300"
                aria-label="Twitter"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40&text=TW"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                className="bg-white p-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40&text=LI"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="h-6 w-6"
                />
              </a>
              <a
                href="#"
                className="bg-white p-4 rounded-full shadow-xs hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <Image
                  src="/placeholder.svg?height=40&width=40&text=IG"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="h-6 w-6"
                />
              </a>
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
                Find answers to common questions about OPEN Silicon Valley.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How can I become a member of OPEN Silicon Valley?
                </h3>
                <p className="text-gray-600">
                  You can become a member by visiting our membership page and
                  filling out the application form. We offer different
                  membership types to cater to professionals at various stages
                  of their careers.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How can I volunteer with OPEN Silicon Valley?
                </h3>
                <p className="text-gray-600">
                  We welcome volunteers who are passionate about our mission.
                  You can apply to volunteer by visiting our Volunteer page and
                  filling out the application form. We have various volunteer
                  opportunities available.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How can I sponsor an OPEN Silicon Valley event?
                </h3>
                <p className="text-gray-600">
                  We offer various sponsorship opportunities for our events.
                  Please contact us at info@opensv.org for more information
                  about sponsorship packages and benefits.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  How can I propose a speaker for an OPEN Silicon Valley event?
                </h3>
                <p className="text-gray-600">
                  We're always looking for inspiring speakers for our events.
                  Please send your speaker proposal to info@opensv.org with the
                  subject line "Speaker Proposal" and include details about the
                  speaker and proposed topic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
