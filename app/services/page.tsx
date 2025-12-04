import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { serviceCategories } from "@/lib/config";

export const metadata = {
  title: "Our Services | Verizon Group",
  description: "Explore Moodle, hosting, cloud infrastructure, and managed support services.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="gradient-bg">
        <div className="container-section space-y-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">What we offer</p>
          <h1 className="text-4xl font-bold text-primary">Our Services</h1>
          <p className="mx-auto max-w-3xl text-base text-slate-600">
            From full-service Moodle implementations to cloud-native DevOps, Verizon Group provides the expertise and managed
            services that keep your platforms reliable, secure, and ready to scale.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section space-y-10">
          <SectionHeader
            title="Service categories"
            subtitle="Delivery you can rely on"
            align="left"
            action={<p className="max-w-2xl text-base text-slate-600">We embed with your teams to deliver fast and support long term.</p>}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div key={category.title} className="card space-y-3 p-6">
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { AcademicCapIcon, CloudIcon, LifebuoyIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Our Services | Verizon Group",
  description: "Managed Moodle, hosting, cloud infrastructure, and DevOps services for education and enterprise.",
};

const detailedServices = [
  {
    title: "Complete Moodle Solution",
    description: "Setup, configuration, theming, plugin governance, and performance tuning for Moodle environments.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    items: ["Implementation & migrations", "Custom themes & UX", "Plugin audits & governance", "User training & documentation"],
  },
  {
    title: "Server Hosting & Maintenance",
    description: "Resilient hosting with monitoring, backups, and security best practices for mission-critical uptime.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    items: ["Cloud/VPS setup", "Patch management", "Security hardening", "Backup & disaster recovery"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Cloud-native architectures, CI/CD automation, and observability to scale products confidently.",
    icon: <CloudIcon className="h-6 w-6" />,
    items: ["Docker & Kubernetes", "CI/CD pipelines", "Logging & monitoring", "Cost optimisation"],
  },
  {
    title: "Managed Support & Training",
    description: "Retainer-based support, onboarding for staff, and custom workshops to keep teams productive.",
    icon: <LifebuoyIcon className="h-6 w-6" />,
    items: ["Tiered SLAs", "Onboarding & workshops", "Runbooks & documentation", "Proactive optimisation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <SectionHeader
            eyebrow="Our services"
            title="Infrastructure, platforms, and support delivered as a managed service"
            description="Mix-and-match capabilities to build the right operating model for your learning and product platforms."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {detailedServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        description="Book a consultation or submit your requirements and we’ll map the right solution for you."
        primaryHref="/book-meeting"
        primaryLabel="Book a Meeting"
        secondaryHref="/request-service"
        secondaryLabel="Request Service"
        description="Book a discovery session or tell us about your roadmap and we will recommend the right plan."
        primaryCta={{ label: "Book Meeting", href: "/book-meeting" }}
        secondaryCta={{ label: "Request Service", href: "/request-service" }}
      />
    </div>
  );
}
