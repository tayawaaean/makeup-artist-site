-- Add image_url to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add client_image_url to testimonials table
ALTER TABLE testimonials ADD COLUMN IF NOT EXISTS client_image_url TEXT;
