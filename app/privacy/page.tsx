import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { COMPANY } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description: `Privacy notice for ${COMPANY.name} website visitors: minimal analytics, form submissions used solely to respond to enquiries.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "privacy", href: "/privacy" },
        ]}
        title="Privacy notice."
      />
      <section className="section">
        <div className="container">
          <div className="max-w-[62ch] space-y-5 text-body leading-relaxed text-grey md:ml-[calc(100%/3)]">
            <p>
              {COMPANY.name} respects your privacy. This site collects minimal analytics data to
              improve user experience. Any information submitted through forms is used solely to
              respond to your enquiry.
            </p>
            <p>
              For questions, contact{" "}
              <a href={`mailto:${COMPANY.email}`} className="link break-all">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
