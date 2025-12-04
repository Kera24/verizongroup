import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICE_CATEGORIES, SERVICES } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Verizon Group",
  description: "Managed Moodle, hosting, and cloud services tailored for education and enterprise teams.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container space-y-4">
          <p className="badge">Our Services</p>
          <h1 className="text-3xl font-semibold text-primary md:text-4xl">Partner-level services without the overhead.</h1>
          <p className="max-w-2xl text-slate-600">
            Explore our core offerings across Moodle, hosting, and cloud infrastructure. Mix and match or engage us end-to-end.
          </p>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container space-y-10">
          <SectionHeader
            title="Core capabilities"
            description="Choose a single service or combine them for a comprehensive managed solution."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            title="Service categories"
            description="Deeper detail on how we execute, govern, and support each engagement."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((category) => (
              <div key={category.title} className="card space-y-3">
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
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
    </>
  );
}
