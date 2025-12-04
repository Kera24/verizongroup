import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Book a Meeting | Verizon Group",
  description: "Schedule time with the Verizon Group team via Google Calendar.",
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { GOOGLE_CALENDAR_BOOKING_URL } from "@/lib/config";
import Link from "next/link";

export const metadata = {
  title: "Book a Meeting | Verizon Group",
  description: "Schedule time with Verizon Group to discuss Moodle, hosting, and cloud infrastructure projects.",
};

export default function BookMeetingPage() {
  return (
    <div className="space-y-16">
      <section className="section-space gradient-bg">
        <div className="container-section space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Schedule</p>
          <h1 className="text-4xl font-bold text-primary">Book a Meeting</h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Pick a time that works for you and our team will confirm the session. We use Google Calendar for easy scheduling.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section space-y-8">
          <SectionHeader
            title="Choose a slot"
            subtitle="Google Calendar"
            align="left"
            action={<p className="text-base text-slate-600">Open our booking calendar to schedule instantly.</p>}
          />
          <div className="card space-y-4 p-6 text-center">
            <p className="text-sm text-slate-600">Appointments are confirmed via email with a Meet link.</p>
            <Link
              href={SITE_CONFIG.googleCalendarUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mx-auto w-full max-w-xs"
            >
              Open Booking Calendar
            </Link>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100">
              <iframe
                src={SITE_CONFIG.googleCalendarUrl}
                className="h-full w-full"
                title="Google Calendar booking"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    <div className="bg-white">
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <SectionHeader
            eyebrow="Book a meeting"
            title="Pick a time that works for you"
            description="Select a slot in our calendar and our team will confirm the session."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Easy scheduling</h3>
            <p className="text-slate-600">
              Share your priorities and desired outcomes. We will align the right specialists to your session.
            </p>
            <Link
              href={GOOGLE_CALENDAR_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex"
            >
              Open booking calendar
            </Link>
            <p className="text-xs text-slate-500">The link can be updated via NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL.</p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-muted shadow-soft">
            <iframe
              title="Google Calendar Booking"
              src={GOOGLE_CALENDAR_BOOKING_URL}
              className="h-[480px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Need a tailored consultation?"
        description="Tell us about your roadmap and we will recommend the right specialists for your call."
        primaryCta={{ label: "Request a Proposal", href: "/request-service" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </div>
  );
}
