import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Contact | Verizon Group",
  description: "Get in touch with Verizon Group for Moodle, hosting, and cloud services.",
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/lib/config";

export const metadata = {
  title: "Contact | Verizon Group",
  description: "Get in touch with Verizon Group for Moodle, hosting, and cloud infrastructure services.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="section-space gradient-bg">
        <div className="container-section space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Contact us</p>
          <h1 className="text-4xl font-bold text-primary">We would love to hear from you</h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Share your goals, challenges, or timelines. Our consultants will respond within one business day.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeader
              title="Reach our team"
              align="left"
              action={<p className="text-base text-slate-600">Email, call, or send a message. We respond fast.</p>}
            />
            <div className="grid gap-4 rounded-2xl bg-white p-6 shadow-soft">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary">Email</p>
                <p className="text-slate-600">{SITE_CONFIG.contactEmail}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary">Phone</p>
                <p className="text-slate-600">{SITE_CONFIG.contactPhone}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-primary">Location</p>
                <p className="text-slate-600">{SITE_CONFIG.location}</p>
              </div>
            </div>
            <ContactForm />
          </div>

          <div className="card overflow-hidden">
            <div className="relative h-full min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Global services map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 p-4 text-sm text-primary backdrop-blur">
                <p className="font-semibold">Global services</p>
                <p className="text-slate-600">We support teams across APAC, EMEA, and the Americas.</p>
              </div>
            </div>
          </div>
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
