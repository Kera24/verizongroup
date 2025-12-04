import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Book a Meeting | Verizon Group",
  description: "Schedule time with the Verizon Group team via Google Calendar.",
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
    </div>
  );
}
