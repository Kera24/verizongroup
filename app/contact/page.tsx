import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Slug } from "@/components/Slug";
import { COMPANY } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${COMPANY.name} for Moodle, hosting, cloud, and DevOps services. Based in Sydney, Australia, serving clients globally. We reply within one business day.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "contact", href: "/contact" },
        ]}
        title="Tell us what you're working with."
        capsule="Share your project or support needs and we will reply within one business day. Prefer a conversation? Book a meeting and we will confirm a slot with the right specialists."
      />

      <section className="section">
        <div className="container grid gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4" data-reveal>
            <div className="space-y-9 md:sticky md:top-28">
              <Slug>yoranix / details</Slug>
              <dl className="space-y-7 border-t border-hairline pt-9 font-mono text-xs leading-relaxed">
                <div>
                  <dt className="slug mb-2">email</dt>
                  <dd>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="break-all text-ink transition-colors duration-micro ease-micro hover:text-steel"
                    >
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="slug mb-2">phone</dt>
                  <dd>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                      className="tabular text-ink transition-colors duration-micro ease-micro hover:text-steel"
                    >
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="slug mb-2">location</dt>
                  <dd className="text-ink">{COMPANY.location}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6" data-reveal>
            <div className="border border-hairline p-6 md:p-10">
              <h2 className="sr-only">Send a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
