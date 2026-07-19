import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ColumnRules } from "@/components/ColumnRules";
import { FaqList } from "@/components/FaqList";
import { HeroSection } from "@/components/HeroSection";
import { Slug } from "@/components/Slug";
import { StarSpark } from "@/components/brand/StarMark";
import {
  APPROACH_STEPS,
  FAQS,
  FEATURE_HIGHLIGHTS,
  SERVICES,
  TESTIMONIALS,
  USE_CASES,
} from "@/lib/config";

/** §7.2 — one plain declarative sentence, broken deliberately. */
const POSITIONING_LINES = [
  "Yoranix builds and runs the",
  "platforms your organisation",
  "depends on — LMS, hosting,",
  "cloud, and integrations.",
];

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO (§6) */}
      <HeroSection />

      {/* 2 — POSITIONING BAND (§7.2) */}
      <section className="bg-ink">
        <div className="container py-28 md:py-40">
          <Slug tone="inverse">yoranix / what we do</Slug>
          <p className="mt-10 font-display text-display-l text-canvas">
            {POSITIONING_LINES.map((line, i) => (
              <span
                key={line}
                data-reveal
                className="inline-block md:block"
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                {line}{" "}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* 3 — SERVICES INDEX (§7.3): full-width rows, not cards */}
      <section id="services" className="section !pb-0">
        <h2 className="sr-only">Services</h2>
        <div className="container flex items-end justify-between pb-12" data-reveal>
          <Slug>yoranix / services</Slug>
          <Link href="/services" className="link-quiet">
            All services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="border-y border-hairline">
          {SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group block border-b border-hairline transition-colors duration-state ease-micro last:border-b-0 hover:bg-canvas-sunk focus-visible:bg-canvas-sunk"
            >
              <div className="container">
                <div className="xrow grid items-center gap-x-6 gap-y-2 py-7 pl-6 md:min-h-[120px] md:grid-cols-12 md:py-6">
                  <span className="slug tabular md:col-span-1" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-h2 text-ink transition-transform duration-state ease-micro group-hover:translate-x-1">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-body text-grey">{service.description}</p>
                  </div>
                  <ArrowRight
                    className="mt-2 h-6 w-6 text-ink transition-transform duration-state ease-micro group-hover:translate-x-1.5 md:col-span-2 md:mt-0 md:justify-self-end"
                    aria-hidden
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — WHY YORANIX (§7.4): two-column editorial, not cards */}
      <section className="section">
        <div className="container grid gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="space-y-7 md:sticky md:top-28" data-reveal>
              <Slug>yoranix / why</Slug>
              <h2 className="max-w-[13ch] text-h2">
                Reliable partners for mission-critical platforms.
              </h2>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="border-y border-hairline">
              {FEATURE_HIGHLIGHTS.map((feature, i) => (
                <li
                  key={feature.title}
                  data-reveal
                  className="grid gap-x-5 gap-y-2 border-b border-hairline py-9 last:border-b-0 sm:grid-cols-[2rem_1fr]"
                  style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <StarSpark className="mt-2 h-3 w-3 text-steel" aria-hidden />
                  <p className="max-w-[58ch] text-body-l leading-relaxed">
                    <strong className="font-medium text-ink">{feature.title}.</strong>{" "}
                    <span className="text-grey">{feature.description}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5 — APPROACH (§7.5): the process line */}
      <section id="approach" className="section relative bg-canvas-sunk">
        <ColumnRules />
        <div className="container relative">
          <div className="space-y-7" data-reveal>
            <Slug>yoranix / approach</Slug>
            <h2 className="max-w-[16ch] text-h2">How an engagement runs.</h2>
          </div>

          {/* Desktop: horizontal rule that draws in, star nodes on it */}
          <div className="relative mt-20 hidden md:block">
            <span data-draw-rule className="absolute left-0 right-0 top-[5px] block h-px bg-hairline-firm" />
            <ol className="grid grid-cols-4 gap-6">
              {APPROACH_STEPS.map((step, i) => (
                <li
                  key={step.slug}
                  data-reveal
                  style={{ "--reveal-delay": `${150 + i * 120}ms` } as React.CSSProperties}
                >
                  <StarSpark className="relative h-3 w-3 text-ink" aria-hidden />
                  <p className="slug mt-6">
                    {String(i + 1).padStart(2, "0")} — {step.slug}
                  </p>
                  <h3 className="mt-3 text-h3">{step.title}</h3>
                  <p className="mt-2.5 max-w-[36ch] text-sm leading-relaxed text-grey">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile: vertical rule, stacked nodes */}
          <ol className="relative mt-12 space-y-10 border-l border-hairline-firm pl-7 md:hidden">
            {APPROACH_STEPS.map((step, i) => (
              <li key={step.slug} data-reveal className="relative">
                <StarSpark
                  className="absolute -left-[35.5px] top-1.5 h-3 w-3 bg-canvas-sunk text-ink"
                  aria-hidden
                />
                <p className="slug">
                  {String(i + 1).padStart(2, "0")} — {step.slug}
                </p>
                <h3 className="mt-2 text-h3">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 — WORK / USE CASES (§7.6): editorial blocks in hairline frames */}
      <section id="work" className="section">
        <div className="container">
          <div className="space-y-7" data-reveal>
            <Slug>yoranix / work</Slug>
            <h2 className="max-w-[18ch] text-h2">Built for the organisations we serve.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {USE_CASES.map((useCase, i) => (
              <article
                key={useCase.title}
                data-reveal
                className={`border border-hairline p-8 transition-colors duration-state ease-micro hover:border-hairline-firm md:p-11 ${
                  i === 2 ? "md:col-span-2" : ""
                }`}
                style={{ "--reveal-delay": `${(i % 2) * 60}ms` } as React.CSSProperties}
              >
                <Slug star={false}>case / {String(i + 1).padStart(2, "0")}</Slug>
                <h3 className="mt-7 text-h3">{useCase.title}</h3>
                <p
                  className={`mt-3 text-body text-grey ${i === 2 ? "max-w-[68ch]" : "max-w-[46ch]"}`}
                >
                  {useCase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — TESTIMONIALS (§7.7): editorial, one per row, no cards */}
      <section className="section !pt-0">
        <div className="container">
          <div data-reveal>
            <Slug>yoranix / client notes</Slug>
          </div>
          <ul className="mt-12 border-t border-hairline">
            {TESTIMONIALS.map((testimonial) => (
              <li key={testimonial.name} data-reveal className="border-b border-hairline">
                <blockquote className="grid gap-x-6 py-14 md:grid-cols-12 md:py-20">
                  <div className="md:col-span-9 md:col-start-3">
                    <p className="font-display text-h3 leading-[1.4] text-ink md:text-[1.75rem]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-grey">
                      {testimonial.name} — {testimonial.role}
                    </footer>
                  </div>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — FAQ (§7.8) */}
      <section className="section !pt-0">
        <div className="container grid gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="space-y-7 md:sticky md:top-28" data-reveal>
              <Slug>yoranix / faq</Slug>
              <h2 className="max-w-[12ch] text-h2">Common questions, answered plainly.</h2>
              <Link href="/faq" className="link-quiet">
                All questions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="md:col-span-8 md:col-start-5" data-reveal>
            <FaqList faqs={FAQS.slice(0, 6)} defaultOpenFirst />
          </div>
        </div>
      </section>

      {/* 9 — CONTACT CTA (§7.9) */}
      <CTASection
        title="Let's scope it properly."
        description="Tell us about your platform and requirements — we respond within one business day with a clear starting point."
      />
    </>
  );
}
