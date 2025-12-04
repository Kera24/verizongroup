import CTASection from '../components/CTASection';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { CloudIcon, Cog6ToothIcon, ShieldCheckIcon, SparklesIcon, AcademicCapIcon, BuildingOfficeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Complete Moodle Solution',
    description: 'Setup, custom themes, plugins, LMS integrations, and hands-on training for your educators.',
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    title: 'Server Hosting & Maintenance',
    description: 'Secure VPS and cloud hosting with proactive monitoring, backups, and security hardening.',
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'CI/CD pipelines, container orchestration, observability, and performance optimisation.',
    icon: <CloudIcon className="h-6 w-6" />
  },
  {
    title: 'Custom Integrations & Automation',
    description: 'Connect SIS/CRM systems, automate enrolments, and streamline reporting with reliable APIs.',
    icon: <Cog6ToothIcon className="h-6 w-6" />
  }
];

const highlights = [
  {
    title: 'End-to-End Support',
    description: 'Architecture, rollout, training, and ongoing managed services delivered by specialists.',
    icon: <SparklesIcon className="h-6 w-6" />
  },
  {
    title: 'Education-First Expertise',
    description: 'Deep LMS knowledge to improve adoption, learner experience, and compliance.',
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    title: 'Secure & Scalable Infrastructure',
    description: 'Hardened builds, automated backups, and scalable environments designed for growth.',
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    title: 'Transparent Reporting',
    description: 'Clear SLAs, dashboards, and proactive communication that keep you in the loop.',
    icon: <SparklesIcon className="h-6 w-6" />
  }
];

const useCases = [
  {
    title: 'For Colleges & Training Providers',
    description: 'Launch engaging Moodle experiences, integrate student systems, and support academic teams with training.',
    icon: <AcademicCapIcon className="h-6 w-6" />
  },
  {
    title: 'For Enterprises & SMEs',
    description: 'Deliver compliance training, secure hosting, and integrate HR/CRM platforms with enterprise-grade support.',
    icon: <BuildingOfficeIcon className="h-6 w-6" />
  },
  {
    title: 'For EdTech Startups',
    description: 'Rapidly prototype features, scale on cloud-native stacks, and rely on DevOps and SRE support.',
    icon: <RocketLaunchIcon className="h-6 w-6" />
  }
];

const testimonials = [
  {
    quote: 'Verizon Group delivered a seamless Moodle rollout with zero downtime. The team is proactive and deeply knowledgeable.',
    name: 'Amelia Carter',
    role: 'Director of Digital Learning, Horizon College'
  },
  {
    quote: 'Their infrastructure approach gives us peace of mind. We can focus on learning outcomes while they manage the platform.',
    name: 'James Riley',
    role: 'CTO, EduBridge Solutions'
  }
];

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section id="services" className="section-container space-y-8 py-16">
        <SectionHeader
          eyebrow="Services"
          title="Capabilities built for modern learning and cloud teams"
          description="From LMS deployments to cloud-native infrastructure, Verizon Group provides trusted solutions end to end."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-container space-y-10">
          <SectionHeader
            eyebrow="Why Verizon Group"
            title="Partners obsessed with reliability and learner success"
            description="A specialised team that handles everything from infrastructure to adoption so you can focus on outcomes."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <ServiceCard key={highlight.title} {...highlight} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container space-y-10 py-16">
        <SectionHeader
          eyebrow="Use cases"
          title="Solutions for every stage"
          description="Tailored packages for academic institutions, enterprises, and innovative startups."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="card-shadow rounded-xl p-6"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2 text-accent">{useCase.icon}</div>
              <h3 className="text-lg font-semibold text-primary">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-container space-y-10">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by education and technology leaders"
            description="Our clients rely on Verizon Group for dependable delivery, transparent reporting, and exceptional service."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
