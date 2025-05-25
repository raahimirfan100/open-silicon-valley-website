import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Development | OPEN Silicon Valley',
}

export default function Page() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career Development
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            OPEN Silicon Valley is committed to helping professionals advance in their careers. We provide a range of resources and support for career growth, including job boards, resume workshops, interview preparation sessions, and networking events specifically focused on career opportunities. Our programs are designed to equip individuals with the skills and connections needed to navigate the competitive job market and achieve their career aspirations.
          </p>
        </div>
      </div>
    </div>
  )
}
