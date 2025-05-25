import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annual Forum | OPEN Silicon Valley',
}

export default function Page() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Annual Forum
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The Annual Forum is OPEN Silicon Valley&apos;s flagship event, bringing together entrepreneurs, investors, and professionals for a day of insightful discussions and networking.
            The forum typically features keynote speakers, panel discussions on a variety of topics relevant to technology and business, startup showcases, and ample opportunities for networking.
            It aims to foster innovation, share knowledge, and connect individuals passionate about entrepreneurship and technology in Silicon Valley and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}
