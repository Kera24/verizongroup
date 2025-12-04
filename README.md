# Verizon Group Marketing Site

A modern Next.js 14 + TypeScript + Tailwind CSS marketing site for **Verizon Group** with routes for services, contact, service requests, and booking meetings.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

## Features
- App Router with pages for Home, Services, Contact, Request Service, and Book Meeting.
- Responsive UI with Tailwind CSS, reusable components, and Google Font (Inter).
- Service request API endpoint stub (`/api/request-service`) that logs submissions.
- Configurable Google Calendar booking URL via `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL`.
A Next.js 14 (App Router) website for Verizon Group, showcasing managed Moodle, hosting, and cloud services.

## Tech Stack
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion & Heroicons

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
- `NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL` (optional): Google Calendar booking/appointments link used on the Book Meeting page.

## Available Scripts
- `npm run dev` – start the development server
- `npm run build` – build for production
- `npm run start` – start the production server
- `npm run lint` – run linting
