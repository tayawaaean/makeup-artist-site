import { Service } from "@/types/database";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function getActiveServices(): Promise<Service[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("display_order");
  if (error) throw error;
  return (data ?? []) as Service[];
}

export async function getAllServices(): Promise<Service[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("display_order");
  if (error) throw error;
  return (data ?? []) as Service[];
}
