# Yoranix Rebrand — Implementation Checklist

Baseline note: no browser tooling was available in this session, so baseline
screenshots were not captured; the pre-rebrand state is preserved as the initial
git commit ("Baseline … site before Yoranix rebrand").

## Stages (one commit each)
- [ ] 1. Tokens + fonts (tailwind.config.ts, globals.css vars, layout fonts)
- [ ] 2. Globals primitives + layout + Navbar + Footer (+ brand strings/config)
- [ ] 3. HeroSection signature motion (SSR fallback + lazy canvas/GSAP + Lenis)
- [ ] 4. Homepage sections (editorial composition)
- [ ] 5. FAQ + secondary pages reskin (services, contact, request-service,
       book-meeting, privacy)
- [ ] 6. Icon standardisation (lucide only; @heroicons/react removed)
- [ ] 7. AEO layer (JSON-LD, metadata, sitemap, robots, llms.txt)
- [ ] 8. Logo/favicon/OG assets + webmanifest
- [ ] 9. Brand-string sweep + audits (lint, build, grep, contrast, reduced motion)

## Guardrails (do not touch)
- app/api/request-service/route.ts
- ContactForm / ServiceRequestForm logic (reskin classNames only)
- /book-meeting Google Calendar URL + env wiring
- Routing and data flow

## Acceptance criteria
- [ ] Zero non-dependency "verizon" references (grep proof)
- [ ] No #06B6D4 / #0F172A / rounded-full pills / Unsplash / emoji icons
- [ ] Content fully present with JS disabled (hero = static SVG + real headline)
- [ ] Organization + WebSite + Service + FAQPage + BreadcrumbList JSON-LD; no Review
- [ ] Full prefers-reduced-motion path
- [ ] All routes reskinned; only lenis + gsap/@gsap/react added (lazy)
- [ ] Lighthouse: Perf ≥90, A11y ≥95, BP ≥95, SEO 100 (home + /services)
