import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Verizon Group",
  description: "Connect with Verizon Group for Moodle, hosting, and cloud services.",
};

export default function ContactPage() {
  return (
    <section className="section bg-muted">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Get in touch"
          title="We would love to hear from you"
          description="Tell us about your project or support needs and we will reply within one business day."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <div className="space-y-2 text-sm text-slate-700">
              <p className="font-semibold text-primary">Contact details</p>
              <p>Email: {COMPANY.email}</p>
              <p>Phone: {COMPANY.phone}</p>
              <p>Location: {COMPANY.location}</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Global services map"
                width={900}
                height={320}
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
