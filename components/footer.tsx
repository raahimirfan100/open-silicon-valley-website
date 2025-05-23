import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on events, programs, and innovation news from Silicon
              Valley.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="rounded-full px-6">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=OPEN"
                  alt="OPEN Silicon Valley Logo"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <h3 className="font-bold text-xl">OPEN Silicon Valley</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Organization of Pakistani Entrepreneurs - A global network of entrepreneurs, investors, and
                professionals connecting talent with opportunity.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <address className="not-italic text-gray-400">
                    123 Innovation Way
                    <br />
                    Palo Alto, CA 94301
                  </address>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+16505551234" className="text-gray-400 hover:text-white transition-colors">
                    (650) 555-1234
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@opensv.org" className="text-gray-400 hover:text-white transition-colors">
                    info@opensv.org
                  </a>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Programs</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/programs/women-forum"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Women Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/annual-forum"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Annual Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/mentorship"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Mentorship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/workshops"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Workshops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs/career-development"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Career Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Initiatives</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://opensvconnect.org/"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> SV Connect
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.startupconnect.io/"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Startup Connect
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/trusted-partners-network"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Trusted Partners Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="/initiatives/non-profit-awareness"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Non Profit Awareness
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteer-with-us"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="h-3 w-3" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {currentYear} OPEN Silicon Valley. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Powered By:{" "}
            <a href="http://www.discretelogix.com" className="hover:text-primary transition-colors duration-300">
              Discretelogix
            </a>
          </p>
          <div className="mt-6 md:mt-0">
            <Button asChild className="rounded-full">
              <Link href="https://opensv.wildapricot.org/join-us">Become a Member</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
