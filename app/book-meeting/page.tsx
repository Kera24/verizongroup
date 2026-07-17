import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY, GOOGLE_CALENDAR_BOOKING_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Meeting",
  description: `Schedule a consultation with ${COMPANY.name} via Google Calendar. Discuss Moodle, hosting, cloud infrastructure, DevOps, or a platform audit with the right specialists.`,
  path: "/book-meeting",
});

export default function BookMeetingPage() {
  return (
    <section className="section">
      <div className="container space-y-10">
        <Breadcrumbs
          trail={[{ label: "Home", href: "/" }, { label: "Book Meeting", href: "/book-meeting" }]}
        />
        <SectionHeader
          eyebrow="Book a meeting"
          title="Pick a time that works for you"
          description="Our team will confirm the session and prepare any materials you need ahead of time."
        />
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <div className="card p-3 md:p-4">
              <iframe
                src={GOOGLE_CALENDAR_BOOKING_URL}
                className="h-[480px] w-full rounded border border-border"
                loading="lazy"
                title="Google Calendar booking"
              />
            </div>
          </div>
          <div className="reveal lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="card space-y-4 md:p-8">
                <h2 className="text-h4 font-semibold">Prefer another calendar?</h2>
                <p className="text-base leading-relaxed text-ink-muted">
                  Use the embedded calendar or open it in a new tab. Share your agenda, and we will invite
                  the right specialists.
                </p>
                <Link
                  href={GOOGLE_CALENDAR_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-fit"
                >
                  Open Booking Calendar
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="rounded-lg bg-inverse-surface p-7 text-inverse shadow-elevation-2">
                <h2 className="text-h4 font-semibold text-inverse">Need a custom session?</h2>
                <p className="mt-2 text-sm leading-relaxed text-inverse-muted">
                  Workshops, platform audits, or roadmap reviews can be tailored to your team.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/request-service" className="btn-inverse">
                    Request a Proposal
                  </Link>
                  <Link href="/contact" className="btn-outline-inverse">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
