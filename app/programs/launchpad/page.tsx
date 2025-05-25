import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Launchpad | OPEN Silicon Valley',
}

export default function Page() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Launchpad
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            OPEN Silicon Valley&apos;s Launchpad program is designed to support early-stage startups by providing access to critical resources, mentorship from experienced founders, and opportunities to pitch to investors. We aim to foster innovation and help new ventures succeed through incubator and accelerator-style initiatives, ultimately contributing to a vibrant entrepreneurial ecosystem.
          </p>
        </div>
      </div>
    </div>
  )
}
