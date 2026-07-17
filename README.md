# Yoranix Marketing Site

A Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for **Yoranix**
("Digital Solutions. Real Impact.") — managed Moodle, hosting, cloud infrastructure,
and integration services for education and enterprise teams.

## Tech Stack
- Next.js 14 (App Router), fully server-rendered content
- TypeScript, Tailwind CSS (semantic OKLCH-derived token system — see `DESIGN.md`)
- lucide-react icons, framer-motion (UI transitions)
- lenis (smooth scroll) + gsap/@gsap/react (hero signature only, lazy-loaded)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the site.

## Environment Variables
- `NEXT_PUBLIC_SITE_URL` (optional): canonical site origin used for metadata,
  sitemap, robots, and JSON-LD. Defaults to `https://yoranix.com`.
- `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` (optional): Google Calendar
  booking/appointments link used on the Book Meeting page.

## AEO / SEO
Answer-first copy, JSON-LD (Organization, WebSite, Service, FAQPage,
BreadcrumbList), `app/sitemap.ts`, `app/robots.ts` (AI crawlers explicitly
allowed), and `public/llms.txt` / `public/llms-full.txt`. See `SEO.md`.

## Available Scripts
- `npm run dev` – start the development server
- `npm run build` – build for production
- `npm run start` – start the production server
- `npm run lint` – run linting
