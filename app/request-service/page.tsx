import { SectionHeader } from "@/components/SectionHeader";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Service | Verizon Group",
  description: "Request a tailored service proposal from Verizon Group.",
};

export default function RequestServicePage() {
  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container space-y-10">
        <SectionHeader
          eyebrow="Proposal request"
          title="Request a Service Proposal"
          description="Share your requirements and we will prepare a customised plan for your team."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-100">
            <ServiceRequestForm />
          </div>
          <div className="space-y-4 rounded-2xl bg-primary/90 p-6 text-white shadow-soft">
            <h3 className="text-lg font-semibold">What to expect</h3>
            <ul className="space-y-3 text-sm text-slate-100">
              <li>We respond within one business day.</li>
              <li>Discovery call to align on outcomes and timelines.</li>
              <li>Clear proposal with milestones, SLAs, and pricing.</li>
            </ul>
            <div className="rounded-xl bg-white/10 p-4 text-sm text-slate-50">
              <p className="font-semibold">Need to talk now?</p>
              <p>Book a meeting and we will confirm a slot.</p>
              <a className="mt-2 inline-flex text-accent hover:underline" href="/book-meeting">
                Book a Meeting →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
