import ServiceRequestForm from '../../components/ServiceRequestForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Service | Verizon Group',
  description: 'Request a proposal for Moodle services, hosting, cloud infrastructure, and managed support from Verizon Group.'
};

export default function RequestServicePage() {
  return (
    <div className="bg-white">
      <section className="section-container space-y-3 py-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Service Proposal</p>
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">Request a Service Proposal</h1>
        <p className="mx-auto max-w-3xl text-base text-slate-600">
          Tell us about your project, user base, and timelines. We will craft a detailed proposal and reach out to confirm next steps.
        </p>
      </section>

      <section className="section-container pb-16">
        <ServiceRequestForm />
      </section>
    </div>
  );
}
