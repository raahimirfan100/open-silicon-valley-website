import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Globe, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Geometric pattern background */}
      <div
        className="absolute inset-0 pakistani-pattern opacity-30"
        aria-hidden="true"
      ></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
              Organization of Pakistani Entrepreneurs
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Building <span className="text-primary">relationships</span> among
              {" "}entrepreneurs in {" "}
              <span className="text-primary">Silicon Valley</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl text-pretty">
              A local network of diaspora founders, investors, and professionals
              fostering connections in the world's innovation capital.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-full px-8 shadow-lg shadow-primary/20"
              >
                <Link
                  href="https://opensv.wildapricot.org/join-us"
                  className="flex items-center gap-2"
                >
                  Become a Member{" "}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-8 border-gray-300"
              >
                <Link href="/volunteer-with-us">Volunteer With Us</Link>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  15+
                </span>
                <span className="text-xs md:text-sm text-gray-600 text-center">
                  Global Chapters
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  24+
                </span>
                <span className="text-xs md:text-sm text-gray-600 text-center">
                  Years of Impact
                </span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  100K+
                </span>
                <span className="text-xs md:text-sm text-gray-600 text-center">
                  Network Size
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl opacity-50"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero/golden-gate-bridge.jpeg"
                  alt="Golden Gate Bridge in San Francisco"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Globe
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold">Global Network</h3>
                    <p className="text-sm text-white/80">
                      Connecting talent across borders
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-float">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg animate-float animation-delay-300">
                  <Lightbulb
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave shape */}
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
  );
}
