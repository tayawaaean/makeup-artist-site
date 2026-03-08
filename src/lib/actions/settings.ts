"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function updateSettings(settings: Record<string, string>) {
  const supabase = createAdminClient();
  const upserts = Object.entries(settings).map(([key, value]) => ({ key, value }));
  const { error } = await supabase
    .from("site_settings")
    .upsert(upserts, { onConflict: "key" });
  if (error) throw error;
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/contact");
  revalidatePath("/services");
  revalidatePath("/admin/settings");
}
