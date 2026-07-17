import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { StarSpark, STAR_BODY_PATH, STAR_DIAMOND_PATH } from "@/components/brand/StarMark";
import { HeroMotion } from "@/components/hero/HeroMotion";
import { COMPANY } from "@/lib/config";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const TRUST_POINTS = [
  "Education-first expertise",
  "Managed hosting & monitoring",
  "Security-first architecture",
  "Analytics & reporting",
];

/** Static constellation: server-rendered, always in the DOM. The canvas
 *  enhancement (when motion is allowed) fades this out and takes over. */
const STATIC_STARS = [
  [8, 18, 0.5], [22, 72, 0.35], [34, 30, 0.7], [48, 12, 0.4], [57, 58, 0.3],
  [66, 24, 0.55], [78, 70, 0.45], [86, 16, 0.6], [93, 44, 0.35], [15, 48, 0.4],
  [41, 82, 0.5], [72, 88, 0.3], [90, 80, 0.55], [60, 40, 0.25],
] as const;

export function HeroSection({ headline, subheadline, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section data-hero className="relative overflow-hidden bg-inverse-surface text-inverse">
      {/* Constellation fallback (SSR) */}
      <svg
        data-hero-stars
        aria-hidden
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {STATIC_STARS.map(([x, y, o], i) => (
          <path
            key={i}
            d={STAR_SPARK_TINY}
            transform={`translate(${x} ${y}) scale(${0.5 + o})`}
            fill="rgb(168 184 214)"
            opacity={o * 0.55}
          />
        ))}
      </svg>

      {/* Canvas field + GSAP reveal, lazy + motion-gated */}
      <HeroMotion />

      <div className="container relative z-10 grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <p data-hero-item className="eyebrow-inverse">
            <StarSpark className="h-3.5 w-3.5 text-steel-300" />
            {COMPANY.name} — {COMPANY.tagline}
          </p>
          <h1 data-hero-headline className="mt-6 max-w-[17ch] font-display text-display font-medium">
            {headline}
          </h1>
          <p data-hero-item className="mt-6 max-w-measure text-lg leading-relaxed text-inverse-muted">
            {subheadline}
          </p>
          <div data-hero-item className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={primaryCta.href} className="btn-inverse">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-outline-inverse">
                {secondaryCta.label}
              </Link>
            )}
            <a
              href="#services"
              className="ml-1 inline-flex items-center gap-1.5 rounded-sm py-2 text-sm font-semibold text-steel-300 underline decoration-steel-300/40 underline-offset-4 transition-colors duration-fast ease-standard hover:text-inverse hover:decoration-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-300"
            >
              View services
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <ul
            data-hero-item
            className="mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 border-t border-inverse-border/20 pt-6 text-sm sm:grid-cols-2"
          >
            {TRUST_POINTS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-inverse-muted">
                <StarSpark className="h-3 w-3 shrink-0 text-steel-300" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div data-hero-mark className="relative mx-auto w-fit">
            <svg viewBox="0 0 120 132" className="h-72 w-auto xl:h-80" aria-hidden>
              <path d={STAR_DIAMOND_PATH} fill="rgb(168 184 214)" />
              <path d={STAR_BODY_PATH} fill="rgb(251 251 249)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/** A ~1.6-unit four-point spark, centred on the origin (for the 100×100 field). */
const STAR_SPARK_TINY =
  "M0 -1.6 Q 0 0 1.6 0 Q 0 0 0 1.6 Q 0 0 -1.6 0 Q 0 0 0 -1.6 Z";
