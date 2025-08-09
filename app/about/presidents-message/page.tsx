import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "President's Message | OPEN Silicon Valley",
  description: "A message from the President of OPEN Silicon Valley about our mission, vision, and impact.",
}

export default function PresidentsMessage() {
  return (
    <main className="flex-1">
      <section className="bg-linear-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Leadership</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">President's Message</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A message from the President of OPEN Silicon Valley
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 lg:col-span-4">
              <div className="relative h-60 w-60 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=240&width=240&text=President"
                  alt="OPEN Silicon Valley President"
                  width={240}
                  height={240}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Dr. Asad Zaidi</h2>
                <p className="text-gray-500">President, OPEN Silicon Valley</p>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dear OPEN Silicon Valley Community,</h3>
                <p className="text-gray-500 md:text-lg/relaxed">
                  It is with great honor and enthusiasm that I address you as the President of OPEN Silicon Valley. Our
                  organization has grown tremendously since its inception, and I am proud to be part of this vibrant
                  community of professionals, entrepreneurs, and innovators who are making significant contributions to
                  the technology ecosystem and beyond.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  At OPEN Silicon Valley, our mission is to foster professional growth, entrepreneurship, and leadership
                  within our community. We strive to create a platform where members can connect, collaborate, and
                  contribute to each other's success while also giving back to the broader community through various
                  initiatives.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  In today's rapidly evolving technological landscape, the need for a supportive network and continuous
                  learning has never been more critical. Our organization is committed to providing valuable resources,
                  mentorship opportunities, and networking events that help our members stay at the forefront of
                  innovation and professional excellence.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  I am particularly proud of our initiatives such as SV Connect, Startup Connect, and our various
                  programs that support entrepreneurs, young professionals, and students. These initiatives not only
                  help individuals achieve their professional goals but also contribute to the economic growth and
                  technological advancement of our society.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  As we look to the future, I am excited about the opportunities that lie ahead. We will continue to
                  expand our programs, strengthen our partnerships, and enhance our impact on the community. We will
                  also focus on embracing diversity and inclusion, ensuring that our organization represents and
                  supports professionals from all backgrounds.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  I invite you to actively participate in our events, volunteer for our initiatives, and share your
                  ideas on how we can better serve our community. Together, we can build a stronger, more connected, and
                  more impactful OPEN Silicon Valley.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Thank you for your continued support and engagement. I look forward to meeting you at our upcoming
                  events and working together to achieve our shared goals.
                </p>
              </div>
              <div>
                <p className="font-bold">Warm regards,</p>
                <p>Dr. Asad Zaidi</p>
                <p>President, OPEN Silicon Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter">Our Vision & Mission</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Guiding principles that drive our organization forward
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-500">
                To be the premier organization that empowers professionals of Pakistani origin and their friends to
                achieve excellence in their careers, businesses, and community contributions in Silicon Valley and
                beyond.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-500">
                To foster professional growth, entrepreneurship, and leadership within our community through networking,
                mentorship, education, and collaborative initiatives that create value for our members and positive
                impact for society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
