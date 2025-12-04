import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { SITE_CONFIG, featureHighlights, services, testimonials, useCases } from "@/lib/config";
import { ShieldCheck, ChartLine, BookOpen, Layers } from "lucide-react";

const featureIcons = [ShieldCheck, BookOpen, ChartLine, Layers];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />

      <section id="services" className="section-space">
        <div className="container-section space-y-10">
          <SectionHeader
            title="Services designed for outcomes"
            subtitle="What we do"
            action={<p className="max-w-2xl text-base text-slate-600">{SITE_CONFIG.tagline}</p>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-section space-y-10">
          <SectionHeader
            title="Why Verizon Group"
            subtitle="Our promise"
            action={<p className="max-w-2xl text-base text-slate-600">We combine education-first thinking with secure, scalable platforms.</p>}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((feature, idx) => {
              const Icon = featureIcons[idx % featureIcons.length];
              return (
                <div key={feature.title} className="card space-y-3 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section space-y-10">
          <SectionHeader title="Solutions tailored to you" subtitle="Use cases" />
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-6">
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

      <section className="section-space bg-white">
        <div className="container-section space-y-10">
          <SectionHeader title="Client testimonials" subtitle="Social proof" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to modernise your infrastructure?"
        description="Request a proposal or connect with our consultants for a tailored discovery call."
        primaryHref="/request-service"
        primaryLabel="Request a Proposal"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
