import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workshops | OPEN Silicon Valley',
}

export default function Page() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Workshops
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            OPEN Silicon Valley hosts a variety of workshops designed to provide practical knowledge and hands-on experience. These workshops cover skill-based training, the latest industry trends, startup fundamentals, and leadership development. Our goal is to equip attendees with actionable insights and tools to excel in their careers and ventures.
          </p>
        </div>
      </div>
    </div>
  )
}
