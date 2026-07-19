import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Slug } from "@/components/Slug";
import { COMPANY, GOOGLE_CALENDAR_BOOKING_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Meeting",
  description: `Schedule a consultation with ${COMPANY.name} via Google Calendar. Discuss Moodle, hosting, cloud infrastructure, DevOps, or a platform audit with the right specialists.`,
  path: "/book-meeting",
});

export default function BookMeetingPage() {
  return (
    <>
      <PageHeader
        trail={[
          { label: "home", href: "/" },
          { label: "book a meeting", href: "/book-meeting" },
        ]}
        title="Pick a time that works."
        capsule="Choose a slot and we will confirm the session and prepare any materials you need ahead of time."
      />

      <section className="section">
        <div className="container grid gap-x-6 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7" data-reveal>
            <div className="border border-hairline p-2.5">
              <iframe
                src={GOOGLE_CALENDAR_BOOKING_URL}
                className="h-[520px] w-full border-0"
                loading="lazy"
                title="Google Calendar booking"
              />
            </div>
            <p className="mt-5 flex items-center justify-between gap-6">
              <span className="slug">calendar / google</span>
              <Link
                href={GOOGLE_CALENDAR_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="link-quiet"
              >
                Open in a new tab
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9" data-reveal>
            <div className="flex h-full flex-col gap-8 bg-ink p-8 md:p-10">
              <Slug tone="inverse">custom sessions</Slug>
              <p className="text-body-l leading-relaxed text-canvas">
                Workshops, platform audits, or roadmap reviews can be tailored to your team.
              </p>
              <p className="text-sm leading-relaxed text-inverse-muted">
                Share your agenda and we will invite the right specialists.
              </p>
              <div className="mt-auto flex flex-col gap-5 border-t border-hairline-inverse pt-8">
                <Link href="/request-service" className="btn-inverse w-fit">
                  Start a project
                </Link>
                <Link href="/contact" className="link-quiet-inverse">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
