import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { StarSpark } from "@/components/brand/StarMark";
import { COMPANY } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Service Proposal",
  description: `Request a tailored proposal from ${COMPANY.name} for Moodle, hosting, cloud infrastructure, or integrations. Response within one business day, with clear milestones, SLAs, and pricing.`,
  path: "/request-service",
});

const EXPECTATIONS = [
  "We respond within one business day.",
  "Discovery call to align on outcomes and timelines.",
  "Clear proposal with milestones, SLAs, and pricing.",
];

export default function RequestServicePage() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <Breadcrumbs
          trail={[{ label: "Home", href: "/" }, { label: "Request Service", href: "/request-service" }]}
        />
        <SectionHeader
          eyebrow="Proposal request"
          title="Request a service proposal"
          description="Share your requirements and we will prepare a customised plan for your team."
        />
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="reveal lg:col-span-8">
            <div className="card md:p-8">
              <h2 className="sr-only">Service request form</h2>
              <ServiceRequestForm />
            </div>
          </div>
          <div className="reveal lg:col-span-4">
            <div className="flex h-full flex-col gap-6 rounded-lg bg-inverse-surface p-7 text-inverse shadow-elevation-2">
              <h2 className="text-h4 font-semibold text-inverse">What to expect</h2>
              <ul className="space-y-4 text-sm leading-relaxed text-inverse-muted">
                {EXPECTATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <StarSpark className="mt-1 h-3 w-3 shrink-0 text-steel-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded border border-inverse-border/20 bg-inverse/5 p-5 text-sm">
                <p className="font-semibold text-inverse">Need to talk now?</p>
                <p className="mt-1.5 text-inverse-muted">Book a meeting and we will confirm a slot.</p>
                <Link
                  href="/book-meeting"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-sm font-semibold text-steel-300 underline decoration-steel-300/40 underline-offset-4 transition-colors duration-fast ease-standard hover:text-inverse hover:decoration-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-300"
                >
                  Book a Meeting
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
