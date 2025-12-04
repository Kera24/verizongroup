import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Request a Service Proposal | Verizon Group",
  description: "Share your requirements to receive a tailored Verizon Group proposal.",
};

export default function RequestServicePage() {
  return (
    <div className="space-y-16">
      <section className="section-space gradient-bg">
        <div className="container-section space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Proposal</p>
          <h1 className="text-4xl font-bold text-primary">Request a Service Proposal</h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            Tell us about your project goals, timelines, and constraints. We’ll respond with next steps and a clear plan.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-section space-y-8">
          <SectionHeader
            title="Project details"
            subtitle="Share your requirements"
            align="left"
            action={<p className="text-base text-slate-600">We respond within one business day.</p>}
          />
          <ServiceRequestForm />
        </div>
      </section>
    </div>
  );
}
