import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${COMPANY.name} for Moodle, hosting, cloud, and DevOps services. Based in Sydney, Australia, serving clients globally. We reply within one business day.`,
  path: "/contact",
});

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: COMPANY.location },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
        <SectionHeader
          eyebrow="Get in touch"
          title="We would love to hear from you"
          description="Tell us about your project or support needs and we will reply within one business day."
        />
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <div className="card h-full space-y-6 md:p-8">
              <h2 className="text-h4 font-semibold">Contact details</h2>
              <ul className="space-y-5">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-secondary text-ink-secondary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink-muted">{label}</span>
                      {href ? (
                        <a href={href} className="link break-all text-base no-underline hover:underline">
                          {value}
                        </a>
                      ) : (
                        <span className="block text-base text-ink">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="rule pt-5 text-sm leading-relaxed text-ink-muted">
                Prefer a conversation? Book a meeting and we will confirm a slot with the right specialists.
              </p>
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <div className="card md:p-8">
              <h2 className="sr-only">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
