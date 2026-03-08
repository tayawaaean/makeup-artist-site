import { getAllPortfolioItems } from "@/lib/queries/portfolio";
import { PortfolioManager } from "./portfolio-manager";

export const dynamic = 'force-dynamic';

export default async function AdminPortfolioPage() {
  const items = await getAllPortfolioItems();
  return <PortfolioManager initialItems={items} />;
}
