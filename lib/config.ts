import type { LucideIcon } from "lucide-react";
import { Cloud, GraduationCap, Layers, Server } from "lucide-react";

export const COMPANY = {
  name: "Verizon Group",
  tagline: "End-to-end digital solutions for education and enterprises.",
  email: "hello@verizongroup.com",
  phone: "+61-000-000-000",
  address: "123 Market Street, Sydney, Australia",
  location: "Sydney, Australia (serving clients globally)",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Meeting", href: "/book-meeting" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items?: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Complete Moodle Solution",
    description: "Setup, theme, plugins, integrations, and training for seamless learning experiences.",
    icon: GraduationCap,
    items: ["Implementation & theming", "Plugin governance", "Training & adoption"],
  },
  {
    title: "Server Hosting & Maintenance",
    description: "VPS, backups, security hardening, and proactive monitoring to keep you online.",
    icon: Server,
    items: ["Performance tuning", "Uptime monitoring", "Disaster recovery"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "CI/CD pipelines, container orchestration, and auto-scaling tailored to your workloads.",
    icon: Cloud,
    items: ["Kubernetes & Docker", "Automation pipelines", "Logging & metrics"],
  },
  {
    title: "Custom Integrations & Automation",
    description: "APIs, SIS/CRM integrations, and automated reporting to streamline operations.",
    icon: Layers,
    items: ["CRM & SIS connectors", "Reporting automation", "Single sign-on"],
  },
];

export const FEATURE_HIGHLIGHTS = [
  {
    title: "End-to-End Support",
    description: "From planning to launch and ongoing care, we own the details so you can focus on learners.",
  },
  {
    title: "Education-First Expertise",
    description: "Specialists in LMS, digital learning, and the integrations that keep them running.",
  },
  {
    title: "Secure & Scalable Infrastructure",
    description: "Hardened environments, best-practice backups, and observability baked in.",
  },
  {
    title: "Transparent Reporting & Monitoring",
    description: "Clear metrics, weekly updates, and shared dashboards for total visibility.",
  },
];

export const USE_CASES = [
  {
    title: "For Colleges & Training Providers",
    description: "Robust LMS deployments, multi-campus support, and accessible learning journeys.",
  },
  {
    title: "For Enterprises & SMEs",
    description: "Secure hosting, compliance-ready architectures, and integration with your business apps.",
  },
  {
    title: "For EdTech Startups",
    description: "Cloud-native builds, rapid prototyping, and observability to move fast with confidence.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Verizon Group delivered a seamless Moodle rollout with top-notch support. Their team felt like an extension of ours.",
    name: "Amelia Hart",
    role: "Director of Learning, Pacific College",
  },
  {
    quote:
      "Their DevOps expertise helped us scale without downtime. Transparent reporting keeps our stakeholders aligned.",
    name: "Marcus Lee",
    role: "Head of Technology, Insightful Labs",
  },
  {
    quote: "Responsive, knowledgeable, and proactive. Verizon Group keeps our infrastructure secure and optimised.",
    name: "Priya Natarajan",
    role: "COO, Horizon EdTech",
  },
];

export const SERVICE_CATEGORIES = [
  {
    title: "Complete Moodle Solution",
    items: [
      "Setup, configuration, and custom themes",
      "Plugin management and performance tuning",
      "User training, documentation, and onboarding",
    ],
  },
  {
    title: "Server Hosting & Maintenance",
    items: [
      "VPS / cloud hosting with redundancy",
      "Uptime monitoring and patch management",
      "Regular security audits and backups",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    items: [
      "CI/CD pipelines tuned to your stack",
      "Docker, Kubernetes, and infrastructure-as-code",
      "Observability, alerting, and logging",
    ],
  },
  {
    title: "Managed Support & Training",
    items: [
      "Ongoing support plans with SLAs",
      "Onboarding sessions and enablement",
      "Custom workshops for teams and leaders",
    ],
  },
];

export const GOOGLE_CALENDAR_BOOKING_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL ||
  "https://calendar.google.com/calendar/u/0?cid=Y19sNjJxMmRtZ2I1NzJoYmNncWEycGJtb2x2NEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
