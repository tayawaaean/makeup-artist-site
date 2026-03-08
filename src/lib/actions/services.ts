"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function createService(data: {
  name: string;
  description?: string;
  price?: number;
  price_note?: string;
  duration?: string;
  category: string;
  display_order?: number;
  is_active?: boolean;
}) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("services").insert(data);
  if (error) throw error;
  revalidatePath("/services");
  revalidatePath("/");
  revalidatePath("/admin/services");
}

export async function updateService(
  id: string,
  data: {
    name?: string;
    description?: string;
    price?: number | null;
    price_note?: string | null;
    duration?: string | null;
    category?: string;
    display_order?: number;
    is_active?: boolean;
  }
) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("services").update(data).eq("id", id);
  if (error) throw error;
  revalidatePath("/services");
  revalidatePath("/");
  revalidatePath("/admin/services");
}

export async function deleteService(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/services");
  revalidatePath("/");
  revalidatePath("/admin/services");
}
