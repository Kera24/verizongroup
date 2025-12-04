import { HeroSection } from '@/components/HeroSection';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';
import { CloudArrowUpIcon, ServerStackIcon, Squares2X2Icon, AcademicCapIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Complete Moodle Solution',
    description: 'Implementation, custom themes, integrations, training, and governance for Moodle deployments.',
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    title: 'Server Hosting & Maintenance',
    description: 'Managed VPS and cloud hosting with backups, security hardening, and 24/7 monitoring.',
    icon: <ServerStackIcon className="h-6 w-6" />
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'CI/CD pipelines, container orchestration, observability, and scaling built for resilience.',
    icon: <CloudArrowUpIcon className="h-6 w-6" />
  },
  {
    title: 'Custom Integrations & Automation',
    description: 'APIs, CRM/SIS integrations, data pipelines, and workflow automation for your teams.',
    icon: <Squares2X2Icon className="h-6 w-6" />
  }
];

const whyUs = [
  {
    title: 'End-to-End Support',
    description: 'Consulting, implementation, and ongoing managed services delivered by one partner.'
  },
  {
    title: 'Education-First Expertise',
    description: 'Specialists in Moodle and learning ecosystems with hands-on training for your staff.'
  },
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security, uptime SLAs, and autoscaling cloud foundations.'
  },
  {
    title: 'Transparent Reporting',
    description: 'Dashboards, audits, and proactive monitoring keep you in control at every step.'
  }
];

const useCases = [
  {
    title: 'For Colleges & Training Providers',
    description: 'Launch modern learning experiences with LMS theming, enrolment automation, and analytics.'
  },
  {
    title: 'For Enterprises & SMEs',
    description: 'Secure employee learning, compliance, and customer academies with managed hosting.'
  },
  {
    title: 'For EdTech Startups',
    description: 'Ship faster with cloud-native infrastructure, CI/CD, and expert engineering partners.'
  }
];

const testimonials = [
  {
    quote: 'Verizon Group migrated our Moodle with zero downtime and now manages our platform like clockwork.',
    name: 'Alicia Patel',
    role: 'Head of Digital Learning, Southern Institute'
  },
  {
    quote: 'Their DevOps team delivered scalable Kubernetes clusters and clear runbooks for our engineers.',
    name: 'Marcus Lee',
    role: 'CTO, GrowthPath Analytics'
  },
  {
    quote: 'We finally have reliable reporting and faster releases thanks to Verizon Group’s cloud practice.',
    name: 'Sophie Nguyen',
    role: 'Product Lead, EduFlow'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />

      <section id="services" className="section bg-brand.light/60">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Our Services"
            title="Built for reliability and growth"
            subtitle="Choose the managed solutions that match your roadmap."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Why Verizon Group"
            title="A partner invested in your uptime"
            subtitle="We blend education expertise with cloud-native engineering to keep your services available."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="card h-full p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand.light/60">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Use Cases"
            title="Solutions for every stage"
            subtitle="From academic institutions to enterprise teams, we tailor delivery to your goals."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="card h-full p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by learning and technology leaders"
            subtitle="Hear from organisations that rely on Verizon Group."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to modernise your infrastructure?"
        subtitle="Let’s craft a secure, scalable platform for your learners and teams."
        primaryHref="/request-service"
        primaryLabel="Request a Proposal"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
