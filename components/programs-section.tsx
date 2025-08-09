import Link from 'next/link'
import type { Route } from 'next'
import { programs } from '@/data/programs'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProgramsSection() {
  return (
    <section aria-labelledby="programs-heading" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            What We Offer
          </div>
          <h2 id="programs-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Our Programs
          </h2>
          <p className="text-gray-600 text-pretty">
            Supporting entrepreneurs, professionals, and students at every stage of their journey
            with targeted programs designed to foster growth, innovation, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="group h-full">
              <div className="bg-white rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100">
                <div className="p-6 bg-primary/5 flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs mr-4">
                    <program.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                </div>

                <div className="p-6 grow">
                  <p className="text-gray-600 mb-6 text-pretty">{program.description}</p>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={program.link as Route}
                    className="inline-flex items-center text-primary font-medium group-hover:underline"
                  >
                    Learn more{' '}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/programs" className="flex items-center gap-2">
              View All Programs <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
