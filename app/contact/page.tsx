import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/lib/config';

export const metadata = {
  title: 'Contact | Verizon Group',
  description: 'Get in touch with Verizon Group for Moodle, hosting, and cloud services.'
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="section bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">Contact</p>
          <h1 className="text-4xl font-bold sm:text-5xl">We would love to hear from you.</h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Share your project goals and our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contact details"
              title="Talk with our specialists"
              subtitle="Reach out via the form or directly through the channels below."
              align="left"
            />
            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
              <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
              <p><strong>Location:</strong> {siteConfig.contact.address}</p>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                  alt="Global services"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
