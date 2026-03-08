"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function createPortfolioItem(data: {
  title: string;
  description?: string;
  category: string;
  cover_image_url?: string;
  images?: string[];
  is_featured?: boolean;
  is_published?: boolean;
  display_order?: number;
}) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("portfolio_items").insert(data);
  if (error) throw error;
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function updatePortfolioItem(
  id: string,
  data: {
    title?: string;
    description?: string;
    category?: string;
    cover_image_url?: string;
    images?: string[];
    is_featured?: boolean;
    is_published?: boolean;
    display_order?: number;
  }
) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("portfolio_items").update(data).eq("id", id);
  if (error) throw error;
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function deletePortfolioItem(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("portfolio_items").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function togglePortfolioPublish(id: string, isPublished: boolean) {
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("portfolio_items")
    .update({ is_published: !isPublished })
    .eq("id", id);
  if (error) throw error;
  revalidatePath("/portfolio");
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}
