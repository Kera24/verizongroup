import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "faq", href: "/faq" },
        ]}
        title="Straight answers."
        capsule={`${COMPANY.name} helps small colleges, SMEs, and service-based organisations with LMS platforms, hosting, cloud and DevOps, and custom integrations. These are the questions we are asked most, answered plainly.`}
      />

      <section className="section">
        <div className="container">
          <div className="md:ml-[calc(100%/6)] md:max-w-[62rem]" data-reveal>
            <FaqList faqs={FAQS} defaultOpenFirst />
            <p className="mt-10 text-body text-grey">
              Can&rsquo;t find your question?{" "}
              <Link href="/contact" className="link">
                Contact us
              </Link>{" "}
              and we will reply within one business day.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Still weighing it up?"
        description="Tell us about your platform and requirements — we will recommend the right starting point."
      />

      <JsonLd data={faqSchema} />
    </>
  );
}
