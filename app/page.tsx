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
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { AcademicCapIcon, BuildingOffice2Icon, CloudIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
  {
    title: "Complete Moodle Solution",
    description: "Design, deploy, and optimise Moodle with custom themes, plugins, and training tailored to your learners.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    items: ["Implementation & theming", "Plugin governance", "Training & adoption"],
  },
  {
    title: "Server Hosting & Maintenance",
    description: "Reliable hosting with backups, security hardening, and 24/7 monitoring to keep your platforms online.",
    icon: <Cog6ToothIcon className="h-6 w-6" />,
    items: ["Performance tuning", "Uptime monitoring", "Disaster recovery"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "CI/CD, container orchestration, and observability for scalable applications across clouds.",
    icon: <CloudIcon className="h-6 w-6" />,
    items: ["Kubernetes & Docker", "Automation pipelines", "Logging & metrics"],
  },
  {
    title: "Custom Integrations & Automation",
    description: "APIs, CRM/SIS integrations, and data workflows that connect your tech stack end-to-end.",
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    items: ["CRM & SIS connectors", "Reporting automation", "Single sign-on"],
  },
];

const features = [
  {
    title: "End-to-End Support",
    description: "From discovery through production, we manage environments and train your teams.",
  },
  {
    title: "Education-First Expertise",
    description: "Specialists in Moodle and learning platforms with measurable adoption outcomes.",
  },
  {
    title: "Secure & Scalable Infrastructure",
    description: "Zero-trust principles, backups, and performance engineering baked into every stack.",
  },
  {
    title: "Transparent Reporting & Monitoring",
    description: "Dashboards, runbooks, and monthly reviews keep stakeholders aligned.",
  },
];

const useCases = [
  {
    title: "For Colleges & Training Providers",
    description: "Launch branded portals, digitise assessments, and support learners with uptime and analytics.",
  },
  {
    title: "For Enterprises & SMEs",
    description: "Onboard employees faster with secure learning platforms and integrated HR/CRM data.",
  },
  {
    title: "For EdTech Startups",
    description: "Ship faster with DevOps accelerators, cloud governance, and observability patterns.",
  },
];

const testimonials = [
  {
    quote: "Verizon Group moved our Moodle to a high-availability setup and our support tickets dropped overnight.",
    name: "Amelia Chen",
    role: "Head of Digital Learning, CollegeOne",
  },
  {
    quote: "Their DevOps team automated our releases and added monitoring we can finally trust.",
    name: "Marcus Lee",
    role: "CTO, Pacific EdTech",
  },
  {
    quote: "Clear communication, proactive improvements, and reliable hosting. A true partner for our platform.",
    name: "Priya Nair",
    role: "Operations Lead, ElevateU",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Complete digital infrastructure for your learning and business."
        subheadline="From Moodle deployments to cloud-native DevOps, Verizon Group delivers secure, scalable platforms with managed support."
        primaryCta={{ label: "Request a Service", href: "/request-service" }}
        secondaryCta={{ label: "Book a Meeting", href: "/book-meeting" }}
      />

      <section id="services" className="section bg-muted">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Key services crafted for education and enterprise"
            description="Modular offerings that can be combined into a tailored managed service."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-6 text-right text-sm">
            <Link href="/services" className="font-semibold text-primary underline-offset-8 hover:text-accent hover:underline">
              Explore all services →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why Verizon Group"
            title="Reliable partners for mission-critical platforms"
            description="We blend education domain expertise with modern cloud engineering so your team can focus on learners and business outcomes."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="card text-center">
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
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
      <section className="section bg-muted">
        <div className="container">
          <SectionHeader
            eyebrow="Use cases"
            title="Solutions tailored to your organisation"
            description="From academic institutions to high-growth startups, we shape infrastructure around your goals."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card">
                <h3 className="text-lg font-semibold text-primary">{useCase.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{useCase.description}</p>
                <div className="mt-4 text-sm font-semibold text-primary">See how we help →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-section space-y-10">
          <SectionHeader title="Client testimonials" subtitle="Social proof" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Social proof"
            title="Trusted by learning and technology leaders"
            description="Client teams value our proactive communication, detailed runbooks, and measurable improvements."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
        description="Tell us about your roadmap and we will design a delivery plan with clear milestones."
        primaryCta={{ label: "Request a Proposal", href: "/request-service" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
