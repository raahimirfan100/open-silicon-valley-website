"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

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

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
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
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
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
              <button
                onClick={togglePrograms}
                className="text-sm font-medium hover:text-primary flex items-center"
                aria-expanded={isProgramsOpen}
                aria-haspopup="true"
              >
                Programs
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
                  className={`ml-1 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
              <button
                onClick={toggleInitiatives}
                className="text-sm font-medium hover:text-primary flex items-center"
                aria-expanded={isInitiativesOpen}
                aria-haspopup="true"
              >
                Initiatives
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
                  className={`ml-1 transition-transform duration-200 ${isInitiativesOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isInitiativesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4 z-50 animate-in fade-in-50 slide-in-from-top-5">
                  <Link
                    href="https://opensvconnect.org/"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    SV Connect
                  </Link>
                  <Link
                    href="https://www.startupconnect.io/"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsInitiativesOpen(false)}
                  >
                    Startup Connect
                  </Link>
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
              <button
                onClick={toggleMembers}
                className="text-sm font-medium hover:text-primary flex items-center"
                aria-expanded={isMembersOpen}
                aria-haspopup="true"
              >
                Members
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
                  className={`ml-1 transition-transform duration-200 ${isMembersOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
              <button
                onClick={toggleAbout}
                className="text-sm font-medium hover:text-primary flex items-center"
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
              >
                About
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
                  className={`ml-1 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
                  <Link
                    href="https://www.openglobalweb.org/#about"
                    className="block text-sm hover:text-primary py-1"
                    onClick={() => setIsAboutOpen(false)}
                  >
                    OPEN Global
                  </Link>
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
              Volunteer With Us!
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Button className="bg-primary hover:bg-primary/90 transition-colors">
              <Link href="https://opensv.wildapricot.org/join-us">Become a Member</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/events" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              Events
            </Link>
            <div>
              <button onClick={togglePrograms} className="text-sm font-medium hover:text-primary flex items-center">
                Programs
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
                  className={`ml-1 transition-transform duration-200 ${isProgramsOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
              <button onClick={toggleInitiatives} className="text-sm font-medium hover:text-primary flex items-center">
                Initiatives
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
                  className={`ml-1 transition-transform duration-200 ${isInitiativesOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isInitiativesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    href="https://opensvconnect.org/"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    SV Connect
                  </Link>
                  <Link
                    href="https://www.startupconnect.io/"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsInitiativesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    Startup Connect
                  </Link>
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
              <button onClick={toggleMembers} className="text-sm font-medium hover:text-primary flex items-center">
                Members
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
                  className={`ml-1 transition-transform duration-200 ${isMembersOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
              <button onClick={toggleAbout} className="text-sm font-medium hover:text-primary flex items-center">
                About
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
                  className={`ml-1 transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
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
                  <Link
                    href="https://www.openglobalweb.org/#about"
                    className="block text-sm hover:text-primary"
                    onClick={() => {
                      setIsAboutOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    OPEN Global
                  </Link>
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
              Volunteer With Us!
            </Link>
            <div className="flex flex-col pt-2">
              <Button className="w-full">
                <Link href="https://opensv.wildapricot.org/join-us">Become a Member</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
