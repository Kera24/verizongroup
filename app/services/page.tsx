import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { StarSpark } from "@/components/brand/StarMark";
import { COMPANY, SERVICE_CATEGORIES, SERVICES, SITE_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services — Moodle, Hosting, Cloud & DevOps",
  description: `${COMPANY.name} services: complete Moodle LMS solutions, server hosting and maintenance, cloud infrastructure and DevOps, and custom integrations and automation for education and enterprise teams.`,
  path: "/services",
});

const servicesSchema = SERVICES.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
  areaServed: "Worldwide",
  url: `${SITE_URL}/services`,
}));

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-canvas-subtle">
        <div className="container space-y-6 py-14 md:py-20">
          <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
          <p className="eyebrow">
            <StarSpark className="h-3 w-3 text-link" aria-hidden />
            Our services
          </p>
          <h1 className="max-w-3xl text-h1">Partner-level services without the overhead.</h1>
          {/* Answer capsule */}
          <p className="max-w-measure text-lg leading-relaxed text-ink-muted">
            {COMPANY.name} provides four core services: complete Moodle LMS solutions, server hosting and
            maintenance, cloud infrastructure and DevOps, and custom integrations and automation. Engage a
            single service or combine them into one managed solution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-12">
          <div className="reveal">
            <SectionHeader
              eyebrow="Core capabilities"
              title="Choose a single service or combine them"
              description="Each offering stands alone or slots into a comprehensive managed solution."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="reveal">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-canvas-subtle">
        <div className="container space-y-12">
          <div className="reveal">
            <SectionHeader
              eyebrow="How we execute"
              title="Service categories in detail"
              description="Deeper detail on how we execute, govern, and support each engagement."
            />
          </div>
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((category, index) => (
              <div key={category.title} className="reveal border-t-2 border-primary pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h4 font-semibold">{category.title}</h3>
                  <span className="tabular font-mono text-sm text-ink-muted" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-4 space-y-3 text-base text-ink-secondary">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <StarSpark className="mt-1.5 h-2.5 w-2.5 shrink-0 text-link" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Book a consultation or send us your requirements and we will design the right package for you."
        primaryCta={{ label: "Book a Meeting", href: "/book-meeting" }}
        secondaryCta={{ label: "Request Service", href: "/request-service" }}
      />

      {servicesSchema.map((schema) => (
        <JsonLd key={schema.name} data={schema} />
      ))}
    </>
  );
}
