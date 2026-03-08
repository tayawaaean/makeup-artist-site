import { Testimonial } from "@/types/database";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_published", true)
    .eq("is_featured", true);
  if (error) throw error;
  return (data ?? []) as Testimonial[];
}

export async function getPublishedTestimonials(): Promise<Testimonial[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_published", true);
  if (error) throw error;
  return (data ?? []) as Testimonial[];
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Testimonial[];
}
