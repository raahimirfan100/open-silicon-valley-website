import ComingSoon from "@/components/coming-soon"

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join("/")

  return (
    <ComingSoon
      title="Coming Soon"
      description={`The ${path} page is currently under development. Please check back later.`}
    />
  )
}
