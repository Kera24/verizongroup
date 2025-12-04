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
        description="Book a discovery session or tell us about your roadmap and we will recommend the right plan."
        primaryCta={{ label: "Book Meeting", href: "/book-meeting" }}
        secondaryCta={{ label: "Request Service", href: "/request-service" }}
      />
    </div>
  );
}
