import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-primary/20 rounded-full animate-pulse animation-delay-300"></div>
            <div className="absolute inset-8 bg-primary/30 rounded-full animate-pulse animation-delay-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold text-primary">404</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-sm">
            <Input
              type="search"
              placeholder="Search our site..."
              className="pr-10 bg-white"
              aria-label="Search our site"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" /> Go to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
