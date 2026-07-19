import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { Slug } from "@/components/Slug";
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
    <>
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "start a project", href: "/request-service" },
        ]}
        title="Start a project."
        capsule="Share your requirements and we will prepare a customised plan for your team — a clear proposal with milestones, SLAs, and pricing."
      />

      <section className="section">
        <div className="container grid gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7" data-reveal>
            <div className="border border-hairline p-6 md:p-10">
              <h2 className="sr-only">Service request form</h2>
              <ServiceRequestForm />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9" data-reveal>
            <div className="flex h-full flex-col gap-10 bg-ink p-8 md:p-10">
              <Slug tone="inverse">what to expect</Slug>
              <ul className="space-y-6">
                {EXPECTATIONS.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="slug-inverse tabular pt-0.5" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-canvas">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-hairline-inverse pt-8">
                <p className="flex items-center gap-2.5 text-sm font-medium text-canvas">
                  <StarSpark className="h-2.5 w-2.5 text-inverse-muted" aria-hidden />
                  Need to talk now?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-inverse-muted">
                  Book a meeting and we will confirm a slot with the right specialists.
                </p>
                <Link href="/book-meeting" className="link-quiet-inverse mt-5">
                  Book a meeting
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
