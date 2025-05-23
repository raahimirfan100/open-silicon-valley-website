import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | OpenSV",
  description: "Get in touch with the OpenSV team",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            Have questions about our programs or want to get involved with OpenSV? We'd love to hear from you. Fill out
            the form or use our contact information below.
          </p>

          <div className="space-y-6">
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
          </div>
        </div>

        <div>
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

            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
