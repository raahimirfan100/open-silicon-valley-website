import { notFound } from "next/navigation";
import ComingSoon from "@/components/coming-soon";

export default function CatchAllPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // Trigger the 404 page for any undefined routes
  notFound();
}
