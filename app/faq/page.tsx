import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { StarSpark } from "@/components/brand/StarMark";
import { COMPANY, FAQS } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: `Plain answers about ${COMPANY.name}: what we do, Moodle hosting and maintenance, cloud and DevOps services, integrations, industries served, and how to get started.`,
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-border bg-canvas-subtle">
        <div className="container space-y-6 py-14 md:py-20">
          <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />
          <p className="eyebrow">
            <StarSpark className="h-3 w-3 text-link" aria-hidden />
            FAQ
          </p>
          <h1 className="max-w-3xl text-h1">Frequently asked questions</h1>
          {/* Answer capsule */}
          <p className="max-w-measure text-lg leading-relaxed text-ink-muted">
            {COMPANY.name} delivers {COMPANY.descriptor.toLowerCase().replace(/\.$/, "")}: Moodle LMS
            solutions, hosting, cloud and DevOps, and custom integrations. These are the questions we are
            asked most, answered plainly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <FaqList faqs={FAQS} defaultOpenFirst />
          <p className="mt-10 text-base text-ink-muted">
            Can&rsquo;t find your question?{" "}
            <Link href="/contact" className="link">
              Contact us
            </Link>{" "}
            and we will reply within one business day.
          </p>
        </div>
      </section>

      <CTASection
        title="Still weighing it up?"
        description="Tell us about your platform and requirements — we will recommend the right starting point."
        primaryCta={{ label: "Request a Service", href: "/request-service" }}
        secondaryCta={{ label: "Book a Meeting", href: "/book-meeting" }}
      />

      <JsonLd data={faqSchema} />
    </>
  );
}
