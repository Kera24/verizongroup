import ContactForm from '../../components/ContactForm';
import SectionHeader from '../../components/SectionHeader';
import { COMPANY_CONTACT } from '../../lib/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Verizon Group',
  description: 'Reach out to Verizon Group for Moodle, hosting, cloud infrastructure, and managed services inquiries.'
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="section-container space-y-3 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact</p>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">We would love to hear from you</h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600">
          Tell us about your platform, timelines, and ambitions. Our team will respond with tailored options and next steps.
        </p>
      </section>

      <section className="section-container grid gap-8 pb-16 md:grid-cols-3">
        <div className="card-shadow rounded-xl p-6 md:col-span-1">
          <SectionHeader
            eyebrow="Contact details"
            title="Talk with our specialists"
            description="We operate across time zones with responsive support for education and enterprise teams."
          />
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-primary">Email:</span> {COMPANY_CONTACT.email}
            </p>
            <p>
              <span className="font-semibold text-primary">Phone:</span> {COMPANY_CONTACT.phone}
            </p>
            <p>
              <span className="font-semibold text-primary">Location:</span> {COMPANY_CONTACT.location}
            </p>
            <p className="text-slate-500">Serving clients globally with hybrid and remote delivery models.</p>
          </div>
          <div className="mt-6 rounded-lg bg-accent/10 p-4 text-sm text-primary">
            <p className="font-semibold">Prefer a quick chat?</p>
            <p>Book a 20-minute discovery call via Google Calendar on our booking page.</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
