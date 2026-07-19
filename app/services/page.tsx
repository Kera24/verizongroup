import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { Slug } from "@/components/Slug";
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
  url: `${SITE_URL}/services#${service.slug}`,
}));

/** Deeper execution detail where the titles line up (real content, §1). */
const detailFor = (title: string) =>
  SERVICE_CATEGORIES.find((category) => category.title === title)?.items;

const SUPPORT_CATEGORY = SERVICE_CATEGORIES[3];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "services", href: "/services" },
        ]}
        title="Four services. One accountable partner."
        capsule={`${COMPANY.name} provides four core services — complete Moodle LMS solutions, server hosting and maintenance, cloud infrastructure and DevOps, and custom integrations and automation. Engage one, or combine them into a single managed solution.`}
      />

      {/* The index in full: one editorial block per service */}
      <div>
        {SERVICES.map((service, index) => {
          const items = detailFor(service.title) ?? service.items ?? [];
          return (
            <section
              key={service.slug}
              id={service.slug}
              aria-labelledby={`${service.slug}-title`}
              className="scroll-mt-20 border-b border-hairline"
            >
              <div className="container grid gap-x-6 gap-y-9 py-16 md:grid-cols-12 md:py-24">
                <div className="flex items-start gap-6 md:col-span-5" data-reveal>
                  <span className="slug tabular pt-2.5" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`${service.slug}-title`} className="max-w-[16ch] text-h2">
                    {service.title}
                  </h2>
                </div>
                <div className="space-y-8 md:col-span-6 md:col-start-7" data-reveal>
                  <p className="max-w-[52ch] text-body-l text-grey">{service.description}</p>
                  <ul className="border-t border-hairline">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-4 border-b border-hairline py-4 text-body text-ink"
                      >
                        <StarSpark className="h-2.5 w-2.5 shrink-0 text-steel" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}

        {/* Managed support & training — real category content (§1) */}
        <section
          id="support"
          aria-labelledby="support-title"
          className="scroll-mt-20 border-b border-hairline bg-canvas-sunk"
        >
          <div className="container grid gap-x-6 gap-y-9 py-16 md:grid-cols-12 md:py-24">
            <div className="space-y-7 md:col-span-4" data-reveal>
              <Slug>ongoing / every engagement</Slug>
              <h2 id="support-title" className="max-w-[13ch] text-h2">
                {SUPPORT_CATEGORY.title}
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6" data-reveal>
              <ul className="border-t border-hairline">
                {SUPPORT_CATEGORY.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-hairline py-4 text-body text-ink"
                  >
                    <StarSpark className="h-2.5 w-2.5 shrink-0 text-steel" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CTASection
        title="Not sure where to start?"
        description="Send us your requirements or book a meeting — we will recommend the right package and respond within one business day."
      />

      {servicesSchema.map((schema) => (
        <JsonLd key={schema.name} data={schema} />
      ))}
    </>
  );
}
