# Beauty Artist — Luxury Makeup Portfolio & Booking Website

A premium, full-stack makeup artist portfolio and booking website with a custom admin panel. Built with a luxury design language inspired by Chanel, Tom Ford, and Charlotte Tilbury — restrained elegance, cinematic proportions, and typography-driven layouts.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components, Turbopack)
- **Database:** Supabase (PostgreSQL, Auth, Storage)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Language:** TypeScript
- **Deployment:** Vercel

## Features

### Public Site
- **Home** — Cinematic full-viewport hero, featured portfolio grid, services overview, client testimonials, CTA section
- **About** — Editorial bio layout with stats and decorative accents
- **Services** — Grouped by category with elegant card design
- **Portfolio** — Filterable grid with editorial mixed-ratio layout, detail pages with prev/next navigation
- **Contact** — Inquiry form with bottom-border inputs and contact info sidebar

### Admin Panel
- **Dashboard** — Quick stats, recent inquiries, action shortcuts
- **Portfolio Manager** — Full CRUD with image upload, publish/draft toggle
- **Services Manager** — Full CRUD with category, pricing, duration
- **Testimonials Manager** — Full CRUD with featured/published toggles
- **Inquiries Inbox** — View submissions, update status (new/read/replied/archived), delete
- **Site Settings** — Tabbed editor for hero, about, contact, social, and footer content

### Design System
- **Palette:** Warm parchment (#FAF9F7), stone tones, muted gold (#B8977E)
- **Typography:** Playfair Display (headings) + Inter (body), uppercase tracked labels
- **Components:** Outlined buttons, bottom-border inputs, gold accent lines, editorial grids
- **Animations:** Staggered fade-ins, scroll indicators, hover micro-interactions

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project (optional — app runs with mock data by default)

### Installation

```bash
git clone https://github.com/tayawaaean/makeup-artist-site.git
cd makeup-artist-site
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> The app runs with mock data out of the box — Supabase credentials are only needed when you're ready to connect a real database.

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site and [http://localhost:3000/admin](http://localhost:3000/admin) for the admin panel.

## Project Structure

```
src/
  app/
    (public)/           # Public pages (home, about, services, portfolio, contact)
    (admin)/admin/      # Admin pages (dashboard, CRUD managers, settings)
    layout.tsx          # Root layout (fonts, global providers)
    globals.css         # Tailwind config + luxury utility classes
  components/
    public/             # Navbar, footer, hero, cards, forms
    admin/              # Sidebar, topbar, CRUD forms, image uploader
    ui/                 # shadcn/ui components
  lib/
    queries/            # Server-side data fetching functions
    actions/            # Server actions for mutations
    supabase/           # Supabase client/server/storage helpers
    mock-data.ts        # Mock data for development without DB
  types/
    database.ts         # TypeScript interfaces
supabase/
  migrations/           # SQL schema, RLS policies, seed data
```

## Connecting Supabase

When ready to use a real database:

1. Run `supabase/migrations/001_initial_schema.sql` in your Supabase SQL Editor
2. Create an admin user in Supabase Dashboard (Authentication > Users)
3. Update `.env.local` with your Supabase credentials
4. Swap the query/action files from mock data back to Supabase calls (original implementations are preserved in the git history)

## Deployment

Deploy to Vercel:

```bash
vercel
```

Set the environment variables in your Vercel project settings before deploying.

## License

MIT
