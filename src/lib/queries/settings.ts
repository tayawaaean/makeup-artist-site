import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getAllSettings(): Promise<Record<string, string>> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase.from("site_settings").select("key, value");
  return Object.fromEntries((data ?? []).map((s) => [s.key, s.value ?? ""]));
}

export async function getSetting(key: string): Promise<string> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("site_settings")
    .select("value")
    .eq("key", key)
    .single();
  return data?.value ?? "";
}
