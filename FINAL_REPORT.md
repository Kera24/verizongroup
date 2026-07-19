# Yoranix Redesign & Rebrand — Final Report

Covers the full arc from the Verizon Group baseline (`20554d7`) through the two-round
critique loop, and this session's closeout (Lighthouse measurement, framer-motion cleanup,
visual/keyboard QA). All work lives on `main`, 17 commits ahead of `origin/main`, not yet
pushed.

## Files changed
55 files changed, 3,186 insertions(+), 1,389 deletions(-) since baseline (`git diff --stat
20554d7 HEAD`). Full history in `git log --oneline 20554d7..HEAD` (17 commits: Stage 1–10
implementation, Redesign 1–6 art-direction pass, plus this session's Lighthouse/cleanup
commits).

## Tokens
Full system documented in `DESIGN.md`. Summary:
- **Colour**: `--ink #182848`, `--ink-deep #081828`, `--steel #385080` (signal only, <5% of
  pixels), `--grey #585858`, `--canvas #FBFBF9`, `--canvas-sunk #F4F3EF`, hairline rules at
  10%/22% ink alpha. Old `#06B6D4`/`#0F172A` fully removed. OKLCH-derived semantic tokens in
  `tailwind.config.ts` + `app/globals.css`, no raw hex in components.
- **Type**: Space Grotesk (display — Clash Display's licence didn't clear web-embedding
  terms, brief's sanctioned fallback shipped instead), Hanken Grotesk (body/UI), JetBrains
  Mono (slugs/figures). Fluid clamp scale matches the brief's `display-xl` through `slug`
  values.
- **Motion**: durations 120/180/260/380ms (site-wide) + hero-specific GSAP sequence;
  standard/enter/exit cubic-beziers, distinct curves per §8.
- **Shape**: 2/4/12/20px radii, no `rounded-full`, hairline-only depth (no shadows).

## Components retained vs. replaced
| Baseline | Outcome |
|---|---|
| `ContactForm.tsx`, `ServiceRequestForm.tsx` | **Retained** — logic/validation untouched per guardrail, classNames only |
| `Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx`, `CTASection.tsx` | **Rebuilt presentation**, same responsibility |
| `ServiceCard.tsx`, `TestimonialCard.tsx`, `SectionHeader.tsx` | **Removed** — card grid replaced by the services index / editorial testimonials; `SectionHeader` replaced by `PageHeader` |
| — | **New**: `Breadcrumbs`, `ColumnRules`, `FaqList`, `JsonLd`, `PageHeader`, `Reveal`, `Slug`, `SmoothScroll`, `brand/StarMark`, `hero/HeroEnhancement`, `hero/HeroMotion` |

## Dependencies
- **Added**: `lenis` (smooth scroll), `gsap` + `@gsap/react` (hero only, dynamically
  imported with `ssr:false` — confirmed absent from both shared initial chunks via build
  output grep).
- **Removed**: `@heroicons/react` (installed, never imported — Stage 6); `framer-motion`
  (this session — was listed as a dependency but had zero imports anywhere in the repo;
  reveals were built with a plain `IntersectionObserver` + CSS transitions in
  `Reveal.tsx` instead, which is arguably more disciplined given §8's "GSAP only in the
  hero" rule. Uninstalled, README corrected, build output confirmed byte-identical).

## Motion system
- Hero (`components/hero/HeroEnhancement.tsx`): GSAP timeline, `ssr:false`, matches the
  §6 sequence (column hairlines → headline mask reveal → star stroke-draw + rotation →
  sub-copy fade → corner micro-type), server-rendered fallback always present.
- Site-wide reveals (`components/Reveal.tsx`): one `IntersectionObserver`, 20% threshold,
  fires once, never re-triggers on scroll-up, skipped entirely (content always visible)
  under `prefers-reduced-motion` or without JS.
- Lenis smooth scroll: lazy-imported, torn down on unmount, skipped under reduced motion.
- FAQ accordion: native `<details>/<summary>` — correct ARIA and full keyboard operability
  for free, no custom JS state machine needed.
- Verified via source review this session (see "QA" below for why — live keyboard/viewport
  testing was constrained by tooling).

## AEO / SEO artefacts
- `app/robots.ts`: allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`,
  `Bingbot` explicitly, plus `*`.
- `app/sitemap.ts` present.
- `public/llms.txt` + `public/llms-full.txt` present.
- JSON-LD confirmed in `components/JsonLd.tsx`, `app/layout.tsx`, `app/services/page.tsx`,
  `app/faq/page.tsx` — Organization/WebSite/Service/FAQPage/BreadcrumbList only.
  **No `Review`/`AggregateRating` schema** (grepped, zero hits) — correctly excluded per
  brief §10.
- OG image (`public/og-image.png`) is a **local file**, not a signed/expiring URL — the
  open item the brief flagged about the old live site does not apply here.

## Critique rounds (from commit `894dfb6`, "Redesign 6: two critique rounds")
Two rounds were run against the "would a design-led studio publish this?" test. Findings
and fixes committed together:
1. Hero lockup was wrapping awkwardly at display-xl → capped to container width.
2. The bearing (rotating star) wasn't composed well → recomposed centre-right per §6 spec.
3. Secondary-page headers were generic single-column → rebuilt as editorial two-column
   headers (headline left, answer-first sentence right — confirmed live on `/faq` this
   session).
4. Navbar was transparent/inconsistent on scroll → made opaque.
5. Work/use-case section had collapsed toward a generic grid → rebuilt as spread blocks.
6. The soft-rendered SVG star was a performance cost → fixed.
`DESIGN.md` was rewritten to match the final system.

## Lighthouse (this session)
Measured via `npx lighthouse` (desktop preset) against a local production build
(`next start`) — not measurable in the prior session (no browser tooling available then).

| Route | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 |
| `/services` | 100 | 100 | 100 | 100 |

Clears the brief's ≥90/≥95/≥95/100 targets outright.

## grep proof
```
grep -ril "verizon" . --exclude-dir={node_modules,.git,.next}
→ IMPLEMENTATION_CHECKLIST.md only (documents the removal, not a live reference)

grep -rn "06B6D4|0F172A" --include={*.ts,*.tsx,*.css} .
→ no hits

grep -rn "rounded-full" --include={*.ts,*.tsx} .
→ no hits

grep -rli "unsplash" . --exclude-dir={node_modules,.git,.next}
→ IMPLEMENTATION_CHECKLIST.md only (documents the removal)

heroicons in package.json → absent
```

## Visual / keyboard QA (this session)
- **Screenshots**: captured homepage (hero, positioning band, services index) and `/faq`
  (editorial header + an open accordion row) at the automation harness's available
  viewport (1280×800 effective). Confirms: bearing composed centre-right with visible
  hairline stroke and rotation frame, display-xl headline low-left across three lines,
  services index rows with slug/h2/description/arrow, editorial two-column FAQ header,
  star marker rotated on FAQ open state.
- **390/768/1440 breakpoint screenshots**: **not captured**. The connected Chrome
  extension's viewport is fixed at ~1280×800 — `resize_window` calls to 768 and 390
  reported success but `window.innerWidth`/`screen.width` never changed, so no genuine
  mobile/tablet render was ever produced. This is the same class of tooling gap the prior
  session hit with Lighthouse. In its place: confirmed no horizontal overflow
  (`scrollWidth` vs `innerWidth`) across all 7 routes at the one viewport that was
  actually testable, and reviewed the Tailwind responsive utility classes in
  `Navbar.tsx`/`FaqList.tsx`/section components directly — mobile nav is CSS-only (Stage
  10), FAQ answer indent collapses via `pl-6 sm:pl-[4.75rem]`, approach line switches to
  vertical, etc. **This should be re-verified with real device/viewport testing before
  launch.**
- **Keyboard focus**: the automation harness's synthetic `Tab` key press does not move
  `document.activeElement` in this environment (confirmed: `document.activeElement`
  stayed `<body>` across repeated Tab presses even though a "Skip to content" link is
  present in the DOM) — a harness limitation, not something attributable to the site.
  Verified instead via source: `app/globals.css` defines one global `:focus-visible` rule
  (2px steel outline, 3px offset) applied everywhere, plus a dedicated crosshair
  focus-visible treatment on `.xrow` (service rows / FAQ summaries) matching the §5(c)
  hover language. **Should be spot-checked with a real keyboard before launch.**
- **Scroll stability**: an apparent "page jumps backward" artifact was observed early in
  testing and investigated directly — it was traced to interleaving a synthetic `Home` key
  press with scroll actions in the harness, not a Lenis/reveal bug. A clean, isolated test
  (`scrollY` read before/after wheel input with settling waits) showed monotonic, stable
  scroll with no drift.

## Open items
1. `COMPANY.email` is still `TODO_UPDATE_EMAIL@yoranix.com` — real inbox needed before
   launch (per brief, intentionally left as a TODO).
2. `COMPANY.phone` (`+61-000-000-000`) and address (`123 Market Street, Sydney, Australia`)
   are placeholders **inherited unchanged from the original baseline** — the brief said
   keep them as-is, but they read as fake to a site visitor. Worth confirming with
   whoever owns real company details before this goes live.
3. Real breakpoint (390/768/1440) and real-keyboard QA — blocked by this session's tooling,
   flagged above.
4. `origin/main` is 17 commits behind local `main` — nothing has been pushed.
