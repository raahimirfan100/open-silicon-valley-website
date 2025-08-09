import Link from 'next/link'
import type { Route } from 'next'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Compact Newsletter Section */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold mb-2">Stay Connected</h2>
              <p className="text-gray-400 text-sm">
                Get updates on events, programs, and innovation news from Silicon Valley.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" size="sm" className="rounded-lg px-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Compact Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Organization Info - Spans 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32&text=OPEN"
                  alt="OPEN Silicon Valley Logo"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h3 className="font-bold text-lg">OPEN Silicon Valley</h3>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                A chapter of the global OPEN network, connecting Pakistani entrepreneurs, investors,
                and professionals with opportunities in Silicon Valley.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-gray-400">Palo Alto, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href="tel:+16505551234"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (650) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href="mailto:info@opensv.org"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@opensv.org
                  </a>
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Programs</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Conferences', href: '/programs/conferences' },
                  { name: 'Seminars', href: '/programs/seminars' },
                  { name: 'Webinars', href: '/programs/webinars' },
                  { name: 'Networking', href: '/programs/networking' },
                  { name: 'Mentorship', href: '/programs/mentorship' },
                  { name: 'Workshops', href: '/programs/workshops' },
                  {
                    name: 'Career Development',
                    href: '/programs/career-development',
                  },
                  { name: 'Launchpad', href: '/programs/launchpad' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href as Route}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Initiatives */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Initiatives</h4>
              <ul className="space-y-2">
                {[
                  { name: 'SV Connect', href: 'https://opensvconnect.org/' },
                  {
                    name: 'Startup Connect',
                    href: 'https://www.startupconnect.io/',
                  },
                  {
                    name: 'Trusted Partners Network',
                    href: '/initiatives/trusted-partners-network',
                  },
                  {
                    name: 'Non Profit Awareness',
                    href: '/initiatives/non-profit-awareness',
                  },
                ].map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href as Route}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Events', href: '/events' },
                  { name: 'Join Us', href: '/join-us' },
                  { name: 'Donate', href: '/donate' },
                  { name: 'Volunteer', href: '/volunteer-with-us' },
                  { name: 'Contact', href: '/contact-us' },
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  {
                    name: 'OPEN Global',
                    href: 'https://www.openglobalweb.org/',
                  },
                ].map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href as Route}
                        className="text-gray-400 hover:text-primary transition-colors duration-300 text-xs"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Compact Footer Bottom */}
        <div className="py-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {currentYear} OPEN Silicon Valley. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Built By:{' '}
            <a
              href="http://www.linkedin.com/in/raahimirfan100"
              className="hover:text-primary transition-colors duration-300"
            >
              Raahim Irfan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
