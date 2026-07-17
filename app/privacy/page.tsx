import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { COMPANY } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description: `Privacy notice for ${COMPANY.name} website visitors: minimal analytics, form submissions used solely to respond to enquiries.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl space-y-6">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
        <h1 className="text-h1">Privacy Notice</h1>
        <div className="max-w-measure space-y-4 text-base leading-relaxed text-ink-muted">
          <p>
            {COMPANY.name} respects your privacy. This site collects minimal analytics data to improve user
            experience. Any information submitted through forms is used solely to respond to your enquiry.
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
  );
}
