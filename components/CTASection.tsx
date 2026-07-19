import Link from "next/link";
import { Slug } from "@/components/Slug";
import { COMPANY } from "@/lib/config";

/**
 * §7.9 — full-bleed ink band. Display invitation on the left; the real
 * phone, address, and email on the right in mono. Primary → /contact.
 */
export function CTASection({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="container grid gap-x-6 gap-y-14 py-24 md:grid-cols-12 md:py-36">
        <div className="space-y-8 md:col-span-7" data-reveal>
          <Slug tone="inverse">yoranix / contact</Slug>
          <h2 className="max-w-[16ch] font-display text-display-l text-canvas">{title}</h2>
          {description && (
            <p className="max-w-[52ch] text-body-l text-inverse-muted">{description}</p>
          )}
          <div className="flex flex-wrap items-center gap-7 pt-2">
            <Link href="/contact" className="btn-inverse">
              Contact us
            </Link>
            <Link href="/request-service" className="link-quiet-inverse">
              Start a project
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-end md:col-span-4 md:col-start-9" data-reveal>
          <dl className="space-y-7 border-t border-hairline-inverse pt-9 font-mono text-xs leading-relaxed">
            <div>
              <dt className="slug-inverse mb-2">phone</dt>
              <dd>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="tabular text-canvas transition-colors duration-micro ease-micro hover:text-surface"
                >
                  {COMPANY.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="slug-inverse mb-2">email</dt>
              <dd>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all text-canvas transition-colors duration-micro ease-micro hover:text-surface"
                >
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="slug-inverse mb-2">address</dt>
              <dd className="text-canvas">{COMPANY.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
