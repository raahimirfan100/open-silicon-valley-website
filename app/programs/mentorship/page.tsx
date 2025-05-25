import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentorship Program | OPEN Silicon Valley',
}

export default function Page() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mentorship Program
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our Mentorship Program offers invaluable guidance from experienced professionals, fostering skill development, network expansion, and personalized career advice. OPEN Silicon Valley is dedicated to connecting aspiring individuals with seasoned mentors to help them navigate their career paths and achieve their professional goals. This program is designed to empower mentees by providing them with the support and insights needed to thrive in their respective fields.
          </p>
        </div>
      </div>
    </div>
  )
}
