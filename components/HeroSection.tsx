import Link from "next/link";
import { BearingStar } from "@/components/brand/StarMark";
import { ColumnRules } from "@/components/ColumnRules";
import { HeroMotion } from "@/components/hero/HeroMotion";
import { COMPANY } from "@/lib/config";

/** §6 — deliberate three-line break. */
const HEADLINE_LINES = ["Digital systems", "built around how", "you actually work."];

/**
 * The hero (§6): a full-viewport instrument frame on canvas. Everything
 * here is server-rendered and legible without JavaScript — the GSAP
 * entrance (HeroMotion → HeroEnhancement, lazy, ssr:false) only enhances
 * what is already in the DOM.
 */
export function HeroSection() {
  return (
    <section
      data-hero
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-canvas"
    >
      <ColumnRules hero />

      {/* §5a — the bearing: hairline star, one revolution per ~240s,
          gentle pointer parallax (fine pointers only). */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-30%] top-[24%] sm:right-[-12%] md:top-1/2 md:-translate-y-[60%] lg:right-[4%]"
      >
        <div data-hero-parallax>
          <div className="bearing-spin">
            <BearingStar className="h-[70vmin] w-[70vmin] text-ink/40 md:h-[62vmin] md:w-[62vmin]" />
          </div>
        </div>
      </div>

      <HeroMotion />

      {/* Headline block — low-left (§6), columns 1–7 */}
      <div className="container relative flex flex-1 flex-col justify-end pb-32 pt-28 md:pb-40">
        <div className="max-w-[46rem] xl:max-w-[54rem]">
          <h1 className="font-display text-display-xl text-ink">
            {HEADLINE_LINES.map((line) => (
              <span key={line} className="-mb-[0.09em] block overflow-hidden pb-[0.09em]">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p data-hero-sub className="mt-9 max-w-[52ch] text-body-l text-grey">
            {COMPANY.positioning}
          </p>
          <div data-hero-sub className="mt-10 flex flex-wrap items-center gap-7">
            <Link href="/request-service" className="btn-primary">
              Start a project
            </Link>
            <Link href="/services" className="link-quiet">
              See our services
            </Link>
          </div>
        </div>
      </div>

      {/* Corner micro-type — the bottom edge of the frame (§6). The top
          corners are the navbar. Decorative annotations only. */}
      <div data-hero-corner aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
        <div className="container flex items-end justify-between pb-7">
          <p className="slug">sydney, australia</p>
          <div className="flex items-center gap-3">
            <p className="slug">scroll to explore</p>
            <span className="cue-line block h-6 w-px bg-hairline-firm" />
          </div>
        </div>
      </div>
    </section>
  );
}
