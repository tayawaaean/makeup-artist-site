import { PortfolioItem } from "@/types/database";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function getPublishedPortfolioItems(): Promise<PortfolioItem[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("is_published", true)
    .order("display_order");
  if (error) throw error;
  return (data ?? []) as PortfolioItem[];
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("display_order")
    .limit(6);
  if (error) throw error;
  return (data ?? []) as PortfolioItem[];
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("portfolio_items")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  return (data ?? null) as PortfolioItem | null;
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("*")
    .order("display_order");
  if (error) throw error;
  return (data ?? []) as PortfolioItem[];
}
