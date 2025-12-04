import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';
import { ServiceCard } from '@/components/ServiceCard';
import { AcademicCapIcon, CloudArrowUpIcon, LifebuoyIcon, ServerStackIcon } from '@heroicons/react/24/outline';

const serviceDetails = [
  {
    title: 'Complete Moodle Solution',
    description: 'Setup, configuration, custom themes, plugin governance, performance tuning, training, and documentation.',
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    title: 'Server Hosting & Maintenance',
    description: 'VPS or cloud hosting with uptime monitoring, patch management, hardened security, and automated backups.',
    icon: <ServerStackIcon className="h-6 w-6" />
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'CI/CD pipelines, Docker/Kubernetes, observability stacks, and autoscaling architectures.',
    icon: <CloudArrowUpIcon className="h-6 w-6" />
  },
  {
    title: 'Managed Support & Training',
    description: 'Support plans, onboarding for staff, tailored workshops, and continuous optimisation.',
    icon: <LifebuoyIcon className="h-6 w-6" />
  }
];

export const metadata = {
  title: 'Our Services | Verizon Group',
  description: 'Explore Moodle, hosting, cloud, and managed service offerings from Verizon Group.'
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section className="section bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">Our Services</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Expert delivery across learning and cloud platforms.</h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Choose the support level that fits your roadmap—from turnkey Moodle deployments to full cloud-native DevOps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Service categories"
            title="Depth in every engagement"
            subtitle="Structured offerings that scale with your institution or enterprise."
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceDetails.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Book a discovery call or send us your requirements and we’ll craft a roadmap."
        primaryHref="/book-meeting"
        primaryLabel="Book meeting"
        secondaryHref="/request-service"
        secondaryLabel="Request service"
      />
    </div>
  );
}
