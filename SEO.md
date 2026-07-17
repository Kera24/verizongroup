# Yoranix AEO / SEO Plan

Goal: be extractable and citable by AI answer engines (ChatGPT, Perplexity, Claude,
Gemini, Google AI Overviews, Grok) while keeping classic SEO strong.

## Principles
1. **Answer-first content** — every key page opens with a concise declarative
   "answer capsule" stating what Yoranix does / who it serves, in objective
   sentences that survive extraction out of context.
2. **Everything server-rendered** — all content is present in SSR/SSG HTML;
   animation is enhancement only. Site is fully readable with JS disabled.
3. **No invented facts** — FAQ and schema reflect visible content sourced from
   `lib/config.ts` only. No Review/AggregateRating markup (testimonials are
   unverified; fabricated review markup violates structured-data policy).

## Artefacts
- **JSON-LD** (via `components/JsonLd.tsx`, reflecting visible content only):
  - `Organization` — name, logo, url, contactPoint, address, areaServed (layout, site-wide)
  - `WebSite` (layout, site-wide)
  - `Service` — one per SERVICES item (on `/services`)
  - `FAQPage` — on `/faq` (questions rendered visibly on the page)
  - `BreadcrumbList` — on every non-home route
- **Metadata**: per-page unique title/description, canonical, OpenGraph, Twitter
  card; `metadataBase` from `NEXT_PUBLIC_SITE_URL` (default `https://yoranix.com`).
- **`app/sitemap.ts`** — all 7 public routes.
- **`app/robots.ts`** — allow all, with explicit allow for `GPTBot`, `ClaudeBot`,
  `PerplexityBot`, `Google-Extended`, `Bingbot` (Bing indexability feeds ChatGPT).
- **`public/llms.txt`** + **`public/llms-full.txt`** — clean markdown map of
  purpose, services, key pages.
- **FAQ** — home section + dedicated `/faq` route, genuine Q&A phrased the way
  people ask ("What does Yoranix do?", "Do you host and maintain Moodle?").

## Performance (CWV)
- Fonts subset + self-hosted via `next/font` (zero layout shift, `display: swap`).
- Hero animation libs (gsap, canvas field) dynamically imported, never in the
  initial bundle, never blocking content. Lenis is ~3 kB.
- No stock imagery; SVG brand assets; fixed dimensions everywhere (no CLS).

## Post-deploy checklist (manual)
- Point `NEXT_PUBLIC_SITE_URL` at the production domain.
- Submit sitemap to Bing Webmaster Tools + IndexNow, and Google Search Console.
- Replace `TODO_UPDATE_EMAIL@yoranix.com` in `lib/config.ts` with the real inbox.
- Validate JSON-LD at validator.schema.org / Google Rich Results test.
