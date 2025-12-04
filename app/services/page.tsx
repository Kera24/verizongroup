import SectionHeader from '../../components/SectionHeader';
import ServiceCard from '../../components/ServiceCard';
import CTASection from '../../components/CTASection';
import { CloudIcon, LifebuoyIcon, ServerStackIcon, WrenchScrewdriverIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Verizon Group',
  description: 'Discover Verizon Group services across Moodle, hosting, cloud infrastructure, DevOps, and managed support.'
};

const detailedServices = [
  {
    title: 'Complete Moodle Solution',
    description: 'Setup, configuration, custom themes, plugin management, performance tuning, and user training.',
    icon: <AcademicCapIcon className="h-6 w-6" />,
    items: ['Moodle theming and branding', 'Plugin governance and updates', 'LMS performance optimisation', 'Staff onboarding and training']
  },
  {
    title: 'Server Hosting & Maintenance',
    description: 'VPS and cloud hosting with uptime monitoring, patch management, security audits, and backups.',
    icon: <ServerStackIcon className="h-6 w-6" />,
    items: ['Managed VPS or cloud instances', '24/7 monitoring and alerting', 'Patch management and hardening', 'Automated backups and DR testing']
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Modern pipelines, container orchestration, and observability tailored to your workloads.',
    icon: <CloudIcon className="h-6 w-6" />,
    items: ['CI/CD with GitHub Actions or GitLab', 'Docker & Kubernetes enablement', 'Logging, metrics, and tracing', 'Scaling strategies and cost control']
  },
  {
    title: 'Managed Support & Training',
    description: 'Flexible support plans, onboarding, and tailored workshops for your teams.',
    icon: <LifebuoyIcon className="h-6 w-6" />,
    items: ['Tiered support with SLAs', 'Onboarding for educators and admins', 'Custom capability-building workshops', 'Release management and testing guidance']
  },
  {
    title: 'Custom Integrations & Automation',
    description: 'Streamline processes with integrations across CRM, SIS, HRIS, and analytics platforms.',
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    items: ['API integrations and middleware', 'Automation for enrolments and reporting', 'Data pipelines and analytics', 'Single sign-on and identity integrations']
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="section-container space-y-4 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Our Services</p>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Partner with specialists who deliver end to end</h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Verizon Group offers structured service packages across Moodle, hosting, and cloud infrastructure. Mix and match support tiers with modern DevOps practices to fit your roadmap.
        </p>
      </section>

      <section className="section-container space-y-8 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {detailedServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="section-container">
          <SectionHeader
            eyebrow="Need guidance?"
            title="Not sure where to start?"
            description="Book a discovery call or send us your requirements. We will map a delivery approach aligned to your priorities."
            align="center"
          />
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/book-meeting" className="btn-primary">
              Book a meeting
            </a>
            <a href="/request-service" className="btn-secondary">
              Request service
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
