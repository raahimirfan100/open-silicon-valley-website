import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | OPEN Silicon Valley',
  description:
    'Get in touch with OPEN Silicon Valley for inquiries, partnerships, or to learn more about our organization.',
}

export default function ContactUs() {
  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Get In Touch
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Have a question or want to learn more about OPEN Silicon Valley? Fill out the form
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-500">info@opensiliconvalley.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-500">(650) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-gray-500">
                      123 Innovation Way
                      <br />
                      Palo Alto, CA 94301
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                  >
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                  >
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                  >
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary"
                  >
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
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter the subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Find answers to common questions about OPEN Silicon Valley and our programs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                question: 'How can I become a member of OPEN Silicon Valley?',
                answer:
                  'You can become a member by visiting our membership page and completing the registration process. We offer different membership tiers to suit your needs and involvement level.',
              },
              {
                question: 'What types of events does OPEN Silicon Valley organize?',
                answer:
                  'We organize a variety of events including networking sessions, workshops, seminars, conferences, and mentorship programs. Check our events page for upcoming opportunities.',
              },
              {
                question: 'How can I volunteer with OPEN Silicon Valley?',
                answer:
                  "We welcome volunteers! Visit our 'Volunteer With Us' page to learn about current opportunities and submit your application to join our team of dedicated volunteers.",
              },
              {
                question: 'Does OPEN Silicon Valley offer sponsorship opportunities?',
                answer:
                  'Yes, we offer various sponsorship packages for organizations interested in supporting our mission and connecting with our community. Contact us for more information.',
              },
              {
                question: 'Is OPEN Silicon Valley only for Pakistani professionals?',
                answer:
                  'While our organization was founded to support Pakistani professionals, we welcome members from all backgrounds who are interested in our mission and programs.',
              },
              {
                question: 'How can I propose a collaboration or partnership?',
                answer:
                  "We're always open to collaborations that align with our mission. Please contact us with details about your organization and proposed collaboration.",
              },
            ].map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
