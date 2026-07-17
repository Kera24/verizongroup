# Yoranix Design System

Brand: **YORANIX** — "Digital Solutions. Real Impact."
Art direction: *quiet navy precision* — warm paper canvas, deep navy ink, generous
whitespace, editorial asymmetric composition, thin rules as dividers, and the
four-point "north star" aperture mark as the single recurring motif (markers,
loaders, hero signature). Restraint everywhere; one signature moment (hero).

## Colour tokens

Brand anchors (sampled from the official logo, converted to OKLCH; ramps generated
in OKLCH with fixed hue and a mid-peaking chroma curve):

| Anchor | Hex | OKLCH |
|---|---|---|
| brand-navy | `#182848` | `oklch(28.1% 0.063 262.9)` |
| brand-navy-deep | `#081828` | `oklch(20.4% 0.039 250.1)` |
| signal/steel (links + focus ONLY) | `#385080` | `oklch(43.5% 0.085 263.2)` |
| text-muted grey | `#585858` | `oklch(46% 0 0)` |
| canvas (warm paper) | `#FBFBF9` | `oklch(98.8% 0.003 106)` |

Removed: legacy `accent #06B6D4` and `primary #0F172A`.

Semantic tokens (light theme only) live as RGB-triplet CSS custom properties in
`app/globals.css` and are mapped in `tailwind.config.ts` with `<alpha-value>`
support. **No raw hex in components** — semantic utilities only.

Key text pairs (WCAG, verified programmatically):
- text-primary `#182848` / canvas — **14.1:1** (AAA)
- text-secondary `#2E4676` / canvas — **9.0:1** (AAA)
- text-muted `#585858` / canvas — **6.9:1** (AA+)
- link steel `#385080` / canvas — **7.7:1** (AAA)
- inverse canvas / navy-950 `#091630` hero — **17.3:1**
- inverse-muted navy-200 / navy-950 — **12.7:1**
- success `#2A7449`, warning `#8D5E00`, destructive `#A83634` on canvas — all ≥ 5.4:1

Charts 1–6: `#182848 #385080 #8EA5D1 #519068 #C08E43 #A85550`.

## Shape, space, elevation

- Radius: 4 / 8 / 12 px (`rounded-sm / rounded / rounded-lg`) + one larger 20 px
  (`rounded-hero`) reserved for the hero. **No pill buttons.**
- Spacing: 4 px base (Tailwind default scale).
- Elevation: fine navy-tinted scale `elevation-1..4` replacing `shadow-soft`.

## Typography

- Display: **Space Grotesk** (variable, `next/font/google`) — headings, wordmark.
  *Note:* the brief preferred Clash Display self-hosted. The Fontshare FF EULA was
  reviewed (§02 forbids "font serving" transmission without written consent; §03
  permits embedding only in read-only documents), so self-hosted `@font-face` web
  embedding is **not clearly licensed** — the brief's sanctioned fallback
  (Space Grotesk, SIL OFL) ships instead.
- Body/UI: **Hanken Grotesk** (variable, SIL OFL).
- Mono: **JetBrains Mono** (variable, SIL OFL) — figures, small technical labels.
- Fluid `clamp()` scale (`display`, `h1`–`h4` in `tailwind.config.ts`), body max
  measure ~68ch, `font-variant-numeric: tabular-nums` for figures, restrained
  weights (500–600 display; 400/500 body).

## Motion

Tokens: durations **120 / 180 / 260 / 380 ms**; standard easing
`cubic-bezier(0.2, 0, 0, 1)`; enter `cubic-bezier(0, 0, 0.2, 1)`; exit
`cubic-bezier(0.4, 0, 1, 1)`.

- Signature (hero only): lazy-loaded (next/dynamic, ssr:false) canvas-2D
  "north-star constellation" field + GSAP line reveal through a widening aperture
  mask + gentle pointer parallax. Server-rendered fallback (static SVG mark + real
  headline) is always in the DOM.
- Global: Lenis smooth scroll (marketing routes; disabled under reduced motion),
  CSS scroll-driven view-timeline reveals (progressively enhanced via `@supports`),
  card hover elevation, rotating-aperture loader, smooth `<details>` accordion.
- Full `prefers-reduced-motion` path: no smooth scroll, no parallax, no reveals.
- GSAP/Lenis cleaned up on unmount (`useGSAP` / effect teardown).
