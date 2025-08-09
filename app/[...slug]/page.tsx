import { notFound } from "next/navigation";

export default function CatchAllPage() {
  // Trigger the 404 page for any undefined routes
  notFound();
}
