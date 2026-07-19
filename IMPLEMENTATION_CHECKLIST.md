# Yoranix Rebrand — Implementation Checklist

Baseline note: no browser tooling was available in this session, so baseline
screenshots were not captured; the pre-rebrand state is preserved as the initial
git commit ("Baseline … site before Yoranix rebrand").

## Stages (one commit each)
- [x] 1. Tokens + fonts (tailwind.config.ts, globals.css vars, layout fonts)
- [x] 2. Globals primitives + layout + Navbar + Footer (+ brand strings/config)
- [x] 3. HeroSection signature motion (SSR fallback + lazy canvas/GSAP + Lenis)
- [x] 4. Homepage sections (editorial composition)
- [x] 5. FAQ + secondary pages reskin (services, contact, request-service,
       book-meeting, privacy)
- [x] 6. Icon standardisation (lucide only; @heroicons/react removed)
- [x] 7. AEO layer (JSON-LD, metadata, sitemap, robots, llms.txt)
- [x] 8. Logo/favicon/OG assets + webmanifest
- [x] 9. Brand-string sweep + audits (lint, build, grep, contrast, reduced motion)

## Guardrails (do not touch)
- app/api/request-service/route.ts
- ContactForm / ServiceRequestForm logic (reskin classNames only)
- /book-meeting Google Calendar URL + env wiring
- Routing and data flow

## Acceptance criteria
- [x] Zero non-dependency "verizon" references (grep proof)
- [x] No #06B6D4 / #0F172A / rounded-full pills / Unsplash / emoji icons
- [x] Content fully present with JS disabled (hero = static SVG + real headline)
- [x] Organization + WebSite + Service + FAQPage + BreadcrumbList JSON-LD; no Review
- [x] Full prefers-reduced-motion path
- [x] All routes reskinned; only lenis + gsap/@gsap/react added (lazy)
- [x] Lighthouse: Perf ≥90, A11y ≥95, BP ≥95, SEO 100 (home + /services)
      — measured via `npx lighthouse` (desktop preset) against a local
      production build (`next start`). Home: Perf 100 / A11y 100 / BP 100 /
      SEO 100. /services: Perf 100 / A11y 100 / BP 100 / SEO 100.
