import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ComingSoonProps {
  title?: string
  description?: string
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "This page is under construction. Please check back later.",
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-md mb-8">{description}</p>
      <Button asChild>
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Return to Home
        </Link>
      </Button>
    </div>
  )
}

// TODO: Replace this component with actual content when available
