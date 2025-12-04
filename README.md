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
