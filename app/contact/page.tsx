import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/lib/config";

export const metadata = {
  title: "Contact | Verizon Group",
  description: "Get in touch with Verizon Group for Moodle, hosting, and cloud infrastructure services.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <SectionHeader
            eyebrow="Contact"
            title="We would love to hear from you"
            description="Let us know how we can support your learning or cloud platform."
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Reach us directly</h3>
            <p className="text-slate-600">
              Our team responds within one business day. Share your goals and we will connect you with the right specialists.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <div>Email: {COMPANY.email}</div>
              <div>Phone: {COMPANY.phone}</div>
              <div>Location: Sydney, Australia (global services)</div>
            </div>
            <div className="rounded-2xl bg-muted p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary">Global presence</p>
              <p className="mt-2 text-sm text-slate-600">We support clients across APAC, EMEA, and North America.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
