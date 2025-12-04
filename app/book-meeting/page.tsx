import { GOOGLE_CALENDAR_BOOKING_URL } from '../../lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Meeting | Verizon Group',
  description: 'Schedule a meeting with Verizon Group to discuss Moodle solutions, hosting, and cloud infrastructure.'
};

export default function BookMeetingPage() {
  return (
    <div className="bg-white">
      <section className="section-container space-y-3 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Book a meeting</p>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Pick a time that works for you</h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Choose an appointment slot and our team will confirm with a calendar invite. Prefer email? Reach us at hello@verizongroup.com.
        </p>
      </section>

      <section className="section-container space-y-6 pb-16">
        <div className="card-shadow rounded-xl p-6 text-left">
          <p className="text-lg font-semibold text-primary">Google Calendar appointments</p>
          <p className="mt-2 text-sm text-slate-600">Use the embedded calendar or open the booking page in a new tab.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr,320px]">
            <iframe
              src={GOOGLE_CALENDAR_BOOKING_URL}
              className="h-[520px] w-full rounded-lg border border-slate-200"
              allowFullScreen
              title="Verizon Group booking"
            />
            <div className="card-shadow rounded-xl p-4">
              <p className="font-semibold text-primary">Need to share with your team?</p>
              <p className="mt-2 text-sm text-slate-600">Grab the booking link to coordinate availability.</p>
              <a
                href={GOOGLE_CALENDAR_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-2 font-semibold text-white transition hover:brightness-110"
              >
                Open booking calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
