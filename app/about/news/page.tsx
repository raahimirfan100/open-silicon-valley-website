import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates | OPEN Silicon Valley",
  description: "Latest news and updates from OPEN Silicon Valley",
};

export default function NewsPage() {
  const featuredNews = {
    title: "OPEN Silicon Valley Announces $2M Community Investment Fund",
    excerpt:
      "New fund will support early-stage Pakistani-American entrepreneurs with grants and mentorship opportunities.",
    date: "2024-01-15",
    author: "OPEN SV Team",
    image:
      "/placeholder.svg?height=400&width=600&text=Investment+Fund+Announcement",
    category: "Funding",
  };

  const newsItems = [
    {
      title: "Annual Forum 2024: Record Breaking Attendance",
      excerpt:
        "Over 500 entrepreneurs, investors, and professionals gathered for our most successful annual forum yet.",
      date: "2024-01-10",
      author: "Sarah Ahmed",
      image: "/placeholder.svg?height=300&width=400&text=Annual+Forum+2024",
      category: "Events",
    },
    {
      title: "New Partnership with Stanford University",
      excerpt:
        "OPEN SV partners with Stanford to launch entrepreneurship program for Pakistani students.",
      date: "2024-01-05",
      author: "Dr. Hassan Ali",
      image: "/placeholder.svg?height=300&width=400&text=Stanford+Partnership",
      category: "Partnerships",
    },
    {
      title: "Women Forum Launches Mentorship Program",
      excerpt:
        "New initiative connects female entrepreneurs with successful business leaders in Silicon Valley.",
      date: "2023-12-20",
      author: "Fatima Khan",
      image: "/placeholder.svg?height=300&width=400&text=Women+Mentorship",
      category: "Programs",
    },
    {
      title: "OPEN SV Members Raise $50M in Series A Funding",
      excerpt:
        "Three member companies successfully close significant funding rounds in Q4 2023.",
      date: "2023-12-15",
      author: "Investment Team",
      image: "/placeholder.svg?height=300&width=400&text=Series+A+Success",
      category: "Success Stories",
    },
    {
      title: "Youth Program Expands to 10 Universities",
      excerpt:
        "OPEN SV's youth initiative now active in universities across California and beyond.",
      date: "2023-12-10",
      author: "Youth Committee",
      image: "/placeholder.svg?height=300&width=400&text=Youth+Expansion",
      category: "Programs",
    },
    {
      title: "Tech Innovation Summit Highlights AI Trends",
      excerpt:
        "Industry leaders discuss the future of AI and its impact on Pakistani-American entrepreneurs.",
      date: "2023-12-01",
      author: "Tech Committee",
      image: "/placeholder.svg?height=300&width=400&text=AI+Summit",
      category: "Technology",
    },
  ];

  const categories = [
    "All",
    "Events",
    "Programs",
    "Partnerships",
    "Funding",
    "Success Stories",
    "Technology",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 pakistani-pattern opacity-30"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed about the latest developments, achievements, and
              initiatives from the OPEN Silicon Valley community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured News</h2>
            <Card className="border-gray-100 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl mb-2">
                      {featuredNews.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {featuredNews.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredNews.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredNews.author}
                      </div>
                    </div>
                    <Button asChild className="rounded-full">
                      <Link href="#" className="flex items-center gap-2">
                        Read Full Story <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  className="border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {item.author}
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full"
                    >
                      <Link href="#" className="flex items-center gap-2">
                        Read More <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and updates
              directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-hidden focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="rounded-full px-6">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
