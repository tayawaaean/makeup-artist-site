import { Inquiry } from "@/types/database";
import { createAdminClient } from "@/lib/supabase/admin";

export async function getAllInquiries(): Promise<Inquiry[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Inquiry[];
}

export async function getNewInquiryCount(): Promise<number> {
  const supabase = createAdminClient();
  const { count, error } = await supabase
    .from("inquiries")
    .select("*", { count: "exact", head: true })
    .eq("status", "new");
  if (error) return 0;
  return count ?? 0;
}
