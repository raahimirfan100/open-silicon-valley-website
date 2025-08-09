'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInitiativesOpen, setIsInitiativesOpen] = useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMembersOpen, setIsMembersOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const initiativesRef = useRef<HTMLDivElement>(null)
  const programsRef = useRef<HTMLDivElement>(null)
  const membersRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  // Close all dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (initiativesRef.current && !initiativesRef.current.contains(event.target as Node)) {
        setIsInitiativesOpen(false)
      }
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setIsProgramsOpen(false)
      }
      if (membersRef.current && !membersRef.current.contains(event.target as Node)) {
        setIsMembersOpen(false)
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleInitiatives = () => {
    setIsProgramsOpen(false)
    setIsMembersOpen(false)
    setIsAboutOpen(false)
    setIsInitiativesOpen(!isInitiativesOpen)
  }

  const togglePrograms = () => {
    setIsInitiativesOpen(false)
    setIsMembersOpen(false)
    setIsAboutOpen(false)
    setIsProgramsOpen(!isProgramsOpen)
  }

  const toggleMembers = () => {
    setIsInitiativesOpen(false)
    setIsProgramsOpen(false)
    setIsAboutOpen(false)
    setIsMembersOpen(!isMembersOpen)
  }

  const toggleAbout = () => {
    setIsInitiativesOpen(false)
    setIsProgramsOpen(false)
    setIsMembersOpen(false)
    setIsAboutOpen(!isAboutOpen)
  }

  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-xs">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl flex items-center">
              <div className="mr-2">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=OPEN"
                  alt="OPEN Silicon Valley Logo"
                  width={40}
                  height={40}
                />
              </div>
              <span className="hidden sm:inline">OPEN Silicon Valley</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <div className="relative group" ref={programsRef}>
              <div className="flex items-center">
                <Link href="/programs" className="text-sm font-medium hover:text-primary mr-1">
                  Programs
                </Link>
                <button
                  onClick={togglePrograms}
                  className="p-1 hover:text-primary"
                  aria-expanded={isProgramsOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Programs menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isProgramsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-50 animate-in fade-in-50 slide-in-from-top-5">
                  <Link
                    href="/programs#conferences"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Conferences
                  </Link>
                  <Link
                    href="/programs#seminars"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Seminars
                  </Link>
                  <Link
                    href="/programs#webinars"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Webinars
                  </Link>
                  <Link
                    href="/programs#networking"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Networking
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group" ref={initiativesRef}>
              <div className="flex items-center">
                <Link href="/initiatives" className="text-sm font-medium hover:text-primary mr-1">
                  Initiatives
                </Link>
                <button
                  onClick={toggleInitiatives}
                  className="p-1 hover:text-primary"
                  aria-expanded={isInitiativesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Initiatives menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isInitiativesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isInitiativesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-50 animate-in fade-in-50 slide-in-from-top-5">
                  <a
                    href="https://opensvconnect.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    SV Connect
                  </a>
                  <a
                    href="https://www.startupconnect.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    Startup Connect
                  </a>
                  <Link
                    href="/initiatives/trusted-partners-network"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    Trusted Partners Network
                  </Link>
                  <Link
                    href="/initiatives/non-profit-awareness"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    Non Profit Awareness
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group" ref={membersRef}>
              <div className="flex items-center">
                <Link href="/members" className="text-sm font-medium hover:text-primary mr-1">
                  Members
                </Link>
                <button
                  onClick={toggleMembers}
                  className="p-1 hover:text-primary"
                  aria-expanded={isMembersOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Members menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isMembersOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isMembersOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-50 animate-in fade-in-50 slide-in-from-top-5">
                  <Link
                    href="/members/charter-members"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsMembersOpen(false)}
                  >
                    Charter Members
                  </Link>
                  <Link
                    href="/members/youth-members"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsMembersOpen(false)}
                  >
                    Youth Members
                  </Link>
                  <Link
                    href="/members/young-professionals"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsMembersOpen(false)}
                  >
                    Young Professionals
                  </Link>
                  <Link
                    href="/members/rising-stars"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsMembersOpen(false)}
                  >
                    Rising Stars
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group" ref={aboutRef}>
              <div className="flex items-center">
                <Link href="/about" className="text-sm font-medium hover:text-primary mr-1">
                  About
                </Link>
                <button
                  onClick={toggleAbout}
                  className="p-1 hover:text-primary"
                  aria-expanded={isAboutOpen}
                  aria-haspopup="true"
                  aria-label="Toggle About menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-50 animate-in fade-in-50 slide-in-from-top-5">
                  <Link
                    href="/about/news"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    News & Updates
                  </Link>
                  <Link
                    href="/about/who-we-are"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/about/presidents-message"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    President's Message
                  </Link>
                  <Link
                    href="/events-directory/partners"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Our Partners & Sponsors
                  </Link>
                  <Link
                    href="/about/open-silicon-valley"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    OPEN Silicon Valley
                  </Link>
                  <a
                    href="https://www.openglobalweb.org/#about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    OPEN Global
                  </a>
                  <Link
                    href="/about/open-silicon-valley/#officers"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Officers
                  </Link>
                  <Link
                    href="/about/board-members"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Board Members
                  </Link>
                  <Link
                    href="/about/executive-team"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Executive Team
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
            <Link href="/volunteer-with-us" className="text-sm font-medium hover:text-primary">
              Volunteer
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Link href="/donate">Donate</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 transition-colors">
              <Link href="/join-us">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/programs"
                  className="text-sm font-medium hover:text-primary"
                  onClick={toggleMenu}
                >
                  Programs
                </Link>
                <button
                  onClick={togglePrograms}
                  className="p-1 hover:text-primary"
                  aria-expanded={isProgramsOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Programs menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isProgramsOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isProgramsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/programs#conferences"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsProgramsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Conferences
                  </Link>
                  <Link
                    href="/programs#seminars"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsProgramsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Seminars
                  </Link>
                  <Link
                    href="/programs#webinars"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsProgramsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Webinars
                  </Link>
                  <Link
                    href="/programs#networking"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsProgramsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Networking
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/initiatives"
                  className="text-sm font-medium hover:text-primary"
                  onClick={toggleMenu}
                >
                  Initiatives
                </Link>
                <button
                  onClick={toggleInitiatives}
                  className="p-1 hover:text-primary"
                  aria-expanded={isInitiativesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Initiatives menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isInitiativesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isInitiativesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="https://opensvconnect.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    SV Connect
                  </a>
                  <a
                    href="https://www.startupconnect.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Startup Connect
                  </a>
                  <Link
                    href="/initiatives/trusted-partners-network"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Trusted Partners Network
                  </Link>
                  <Link
                    href="/initiatives/non-profit-awareness"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Non Profit Awareness
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/members"
                  className="text-sm font-medium hover:text-primary"
                  onClick={toggleMenu}
                >
                  Members
                </Link>
                <button
                  onClick={toggleMembers}
                  className="p-1 hover:text-primary"
                  aria-expanded={isMembersOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Members menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isMembersOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isMembersOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/members/charter-members"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsMembersOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Charter Members
                  </Link>
                  <Link
                    href="/members/youth-members"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsMembersOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Youth Members
                  </Link>
                  <Link
                    href="/members/young-professionals"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsMembersOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Young Professionals
                  </Link>
                  <Link
                    href="/members/rising-stars"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsMembersOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Rising Stars
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-primary"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <button
                  onClick={toggleAbout}
                  className="p-1 hover:text-primary"
                  aria-expanded={isAboutOpen}
                  aria-haspopup="true"
                  aria-label="Toggle About menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
              {isAboutOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="/about/news"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    News & Updates
                  </Link>
                  <Link
                    href="/about/who-we-are"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/about/presidents-message"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    President's Message
                  </Link>
                  <Link
                    href="/events-directory/partners"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Our Partners & Sponsors
                  </Link>
                  <Link
                    href="/about/open-silicon-valley"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    OPEN Silicon Valley
                  </Link>
                  <a
                    href="https://www.openglobalweb.org/#about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    OPEN Global
                  </a>
                  <Link
                    href="/about/open-silicon-valley/#officers"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Officers
                  </Link>
                  <Link
                    href="/about/board-members"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Board Members
                  </Link>
                  <Link
                    href="/about/executive-team"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Executive Team
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/volunteer-with-us"
              className="block text-sm font-medium hover:text-primary"
              onClick={toggleMenu}
            >
              Volunteer
            </Link>
            <div className="flex flex-col gap-3 pt-2">
              <Button variant="outline" className="w-full">
                <Link href="/donate">Donate</Link>
              </Button>
              <Button className="w-full">
                <Link href="/join-us">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
