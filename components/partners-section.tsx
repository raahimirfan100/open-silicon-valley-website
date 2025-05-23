import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { id: 1, name: "Partner 1" },
    { id: 2, name: "Partner 2" },
    { id: 3, name: "Partner 3" },
    { id: 4, name: "Partner 4" },
    { id: 5, name: "Partner 5" },
    { id: 6, name: "Partner 6" },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We collaborate with leading companies, universities, and organizations to support innovation in Silicon
          Valley.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="flex items-center justify-center">
            <Image
              src={`/placeholder.svg?height=80&width=160`}
              alt={partner.name}
              width={160}
              height={80}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
