import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  COMPANY,
  FEATURE_HIGHLIGHTS,
  SERVICES,
  TESTIMONIALS,
  USE_CASES,
} from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Complete digital infrastructure for your learning and business."
        subheadline={`${COMPANY.tagline} From Moodle deployments to cloud-native DevOps, Verizon Group delivers secure, scalable platforms with managed support.`}
        primaryCta={{ label: "Request a Service", href: "/request-service" }}
        secondaryCta={{ label: "Book a Meeting", href: "/book-meeting" }}
      />

      <section id="services" className="section bg-muted">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="What we do"
            title="Key services crafted for education and enterprise"
            description="Modular offerings that can be combined into a tailored managed service."
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
            eyebrow="Why Verizon Group"
            title="Reliable partners for mission-critical platforms"
            description="We blend education domain expertise with modern cloud engineering so your team can focus on learners and business outcomes."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <div key={feature.title} className="card text-center">
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container space-y-10">
          <SectionHeader title="Solutions tailored to you" eyebrow="Use cases" />
          <div className="grid gap-6 md:grid-cols-3">
            {USE_CASES.map((useCase) => (
              <div key={useCase.title} className="card">
                <h3 className="text-lg font-semibold text-primary">{useCase.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{useCase.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Explore solutions
                  <span aria-hidden>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Client stories"
            title="Trusted by education teams and enterprises"
            description="Teams choose Verizon Group for proactive support, reliable uptime, and transparent communication."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
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
