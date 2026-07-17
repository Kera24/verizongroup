import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { StarSpark } from "@/components/brand/StarMark";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  COMPANY,
  FAQS,
  FEATURE_HIGHLIGHTS,
  SERVICES,
  TESTIMONIALS,
  USE_CASES,
} from "@/lib/config";

const SERVICE_SPANS = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Complete digital infrastructure for your learning and business."
        subheadline={`${COMPANY.name} is a digital solutions company based in Sydney, Australia. We deliver ${COMPANY.descriptor.toLowerCase().replace(/\.$/, "")} — from Moodle LMS deployments to cloud-native DevOps — as secure, scalable platforms with managed support.`}
        primaryCta={{ label: "Request a Service", href: "/request-service" }}
        secondaryCta={{ label: "Book a Meeting", href: "/book-meeting" }}
      />

      <section id="services" className="section">
        <div className="container space-y-12">
          <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="What we do"
              title="Key services crafted for education and enterprise"
              description="Modular offerings that can be combined into a tailored managed service."
            />
            <Link
              href="/services"
              className="link inline-flex shrink-0 items-center gap-1.5 text-sm"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={`card card-hover reveal relative flex flex-col ${SERVICE_SPANS[index]} md:p-8`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded bg-secondary text-ink-secondary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="tabular font-mono text-sm text-ink-muted" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-h3 font-medium">{service.title}</h3>
                  <p className="mt-3 max-w-measure text-base leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  {service.items && (
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-border pt-5 text-sm text-ink-secondary">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <StarSpark className="h-2.5 w-2.5 shrink-0 text-link" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-canvas-subtle">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow={`Why ${COMPANY.name}`}
                title="Reliable partners for mission-critical platforms"
                description="We blend education domain expertise with modern cloud engineering so your team can focus on learners and business outcomes."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {FEATURE_HIGHLIGHTS.map((feature, index) => (
                <li key={feature.title} className="reveal grid gap-3 py-7 sm:grid-cols-[4rem_1fr]">
                  <span className="tabular font-mono text-sm text-ink-muted" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-h4 font-semibold">{feature.title}</h3>
                    <p className="mt-2 max-w-measure text-base leading-relaxed text-ink-muted">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-12">
          <SectionHeader eyebrow="Use cases" title="Solutions tailored to you" />
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {USE_CASES.map((useCase) => (
              <div key={useCase.title} className="reveal border-t-2 border-primary pt-6">
                <h3 className="text-h4 font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{useCase.description}</p>
                <Link
                  href="/services"
                  className="link mt-5 inline-flex items-center gap-1.5 text-sm no-underline hover:underline"
                >
                  Explore solutions
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-canvas-subtle">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow="Client stories"
            title="Trusted by education teams and enterprises"
            description={`Teams choose ${COMPANY.name} for proactive support, reliable uptime, and transparent communication.`}
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="reveal">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="FAQ"
                title="Common questions, answered plainly"
                description={`Straight answers about what ${COMPANY.name} does and how we work.`}
              />
              <Link href="/faq" className="link mt-6 inline-flex items-center gap-1.5 text-sm">
                View all questions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="reveal lg:col-span-8">
            <FaqList faqs={FAQS.slice(0, 5)} defaultOpenFirst />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to modernise your infrastructure?"
        description="Let us scope a managed service that keeps your platforms performing while your teams focus on learners and business growth."
        primaryCta={{ label: "Request a Proposal", href: "/request-service" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
