import Image from "next/image"
import { Quote } from "lucide-react"

export default function PresidentMessage() {
  return (
    <section aria-labelledby="president-message-heading" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Leadership Vision
          </div>
          <h2 id="president-message-heading" className="text-3xl md:text-4xl font-bold mb-6">
            President's Message
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"
              aria-hidden="true"
            ></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32"
              aria-hidden="true"
            ></div>

            <div className="absolute top-8 left-8 text-primary/10 z-0" aria-hidden="true">
              <Quote className="h-24 w-24" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              <div className="lg:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/10 rounded-full"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <Image
                      src="/placeholder.svg?height=192&width=192&text=AH"
                      alt="Photo of Amer Haider, President of OPEN Silicon Valley"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-xl font-semibold">Amer Haider</h3>
                  <p className="text-primary font-medium text-sm">President, OPEN Silicon Valley</p>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg italic text-pretty">
                    "I extend a warm welcome to all of you in the OPEN Silicon Valley community. OPEN, as a dynamic and
                    expansive global network of entrepreneurs, investors, and professionals, boasts an impressive
                    presence with 15 chapters worldwide, including our distinguished Silicon Valley Chapter."
                  </p>

                  <p className="text-gray-700 leading-relaxed text-pretty">
                    Our mission at OPEN is creating and nurturing a vibrant platform where entrepreneurs, investors, and
                    professionals can forge meaningful connections, engage in enriching mentorship, and collaboratively
                    pave the way for innovation across various sectors.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-pretty">
                    At its essence, OPEN SV thrives as a volunteer-led organization. Our team of passionate volunteers,
                    drawn from the vibrant Silicon Valley ecosystem and the wider global community, exemplifies
                    dedication and commitment.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-pretty">
                    In my role as President, I am wholeheartedly committed to elevating OPEN Silicon Valley to
                    unprecedented levels of achievement. My vision is centered on expanding the reach and impact of
                    OPEN's mission, fostering a synergistic relationship between Pakistan and Silicon Valley that
                    benefits all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
