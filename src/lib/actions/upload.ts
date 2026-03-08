"use server";

import sharp from "sharp";
import { createAdminClient } from "@/lib/supabase/admin";

export async function uploadImageAction(formData: FormData): Promise<string> {
  const file = formData.get("file") as File;
  const path = formData.get("path") as string;

  if (!file || !path) throw new Error("File and path are required");

  const bytes = await file.arrayBuffer();

  // Convert to WebP with max 2000px width, quality 85
  const webpBuffer = await sharp(Buffer.from(bytes))
    .rotate() // auto-orient based on EXIF
    .resize({ width: 2000, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();

  // Force .webp extension in the path
  const webpPath = path.replace(/\.[^.]+$/, ".webp");

  const supabase = createAdminClient();
  const { error } = await supabase.storage.from("media").upload(webpPath, webpBuffer, {
    contentType: "image/webp",
    cacheControl: "3600",
    upsert: true,
  });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("media").getPublicUrl(webpPath);
  return data.publicUrl;
}
