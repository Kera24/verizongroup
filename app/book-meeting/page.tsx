import Link from 'next/link';
import { CTASection } from '@/components/CTASection';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Book a Meeting | Verizon Group',
  description: 'Schedule time with Verizon Group to explore Moodle, hosting, and cloud solutions.'
};

export default function BookMeetingPage() {
  return (
    <div className="space-y-16">
      <section className="section bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">Book a meeting</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Pick a time that works for you.</h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Our team will confirm the session and align the right specialists for your needs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-[#06B6D4] px-6 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-[#0ea5c6]"
            >
              Open booking calendar
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Prefer to stay in your browser?</h2>
            <p className="text-slate-600">
              Use the embedded calendar below to reserve your slot. All sessions default to 30 minutes and include time for requirements gathering.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Configure your time zone from the calendar footer.</li>
              <li>• Receive automatic reminders and calendar invites.</li>
              <li>• Need a custom duration? Mention it in the booking notes.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <iframe
              src={siteConfig.bookingUrl}
              className="h-[540px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Calendar booking"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Want to talk sooner?"
        subtitle="Call us directly or send a service request and we’ll prioritise your session."
        primaryHref="/request-service"
        primaryLabel="Request service"
        secondaryHref="/contact"
        secondaryLabel="Contact us"
      />
    </div>
  );
}
