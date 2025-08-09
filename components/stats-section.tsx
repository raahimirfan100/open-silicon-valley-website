import { networkStats } from "@/data/stats"

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            By The Numbers
          </div>
          <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Our Network Impact
          </h2>
          <p className="text-gray-600 text-pretty">
            OPEN Silicon Valley brings together a powerful network of entrepreneurs, investors, and professionals
            creating significant impact in the business world.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {networkStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 card-hover border border-gray-100 h-full"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
