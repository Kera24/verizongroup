import { SectionHeader } from "@/components/SectionHeader";
import { GOOGLE_CALENDAR_BOOKING_URL } from "@/lib/config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Meeting | Verizon Group",
  description: "Schedule a consultation with Verizon Group via Google Calendar.",
};

export default function BookMeetingPage() {
  return (
    <section className="section bg-muted">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Book a meeting"
          title="Pick a time that works for you"
          description="Our team will confirm the session and prepare any materials you need ahead of time."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <iframe
              src={GOOGLE_CALENDAR_BOOKING_URL}
              className="h-[480px] w-full rounded-xl border border-slate-100"
              loading="lazy"
              title="Google Calendar booking"
            />
          </div>
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-primary">Prefer another calendar?</h3>
            <p className="text-sm text-slate-600">
              Use the embedded calendar or open it in a new tab. Share your agenda, and we will invite the right specialists.
            </p>
            <Link href={GOOGLE_CALENDAR_BOOKING_URL} target="_blank" rel="noreferrer" className="btn-primary w-fit">
              Open Booking Calendar
            </Link>
            <div className="rounded-2xl bg-primary p-5 text-white shadow-soft">
              <p className="text-lg font-semibold">Need a custom session?</p>
              <p className="mt-2 text-sm text-slate-200">
                Workshops, platform audits, or roadmap reviews can be tailored to your team.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/request-service" className="btn-primary bg-white text-primary hover:bg-slate-50">
                  Request a Proposal
                </Link>
                <Link href="/contact" className="btn-secondary border-white/30 bg-transparent text-white hover:border-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
