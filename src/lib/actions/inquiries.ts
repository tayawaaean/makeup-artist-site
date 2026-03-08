"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function submitInquiry(data: {
  name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  preferred_date?: string;
  message: string;
}) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("inquiries").insert(data);
  if (error) throw error;
  revalidatePath("/admin/inquiries");
}

export async function updateInquiryStatus(id: string, status: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("inquiries").update({ status }).eq("id", id);
  if (error) throw error;
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin");
}

export async function deleteInquiry(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("inquiries").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin");
}
