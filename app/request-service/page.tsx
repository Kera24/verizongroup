import { ServiceRequestForm } from '@/components/ServiceRequestForm';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata = {
  title: 'Request a Service Proposal | Verizon Group',
  description: 'Share your project requirements with Verizon Group to receive a tailored proposal.'
};

export default function RequestServicePage() {
  return (
    <div className="space-y-16">
      <section className="section bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">Service Request</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Request a Service Proposal</h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Tell us about your goals, timeline, and users so we can tailor the perfect solution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-6">
          <SectionHeader
            eyebrow="Proposal request"
            title="We’re ready to help"
            subtitle="Provide as much detail as you can so our architects can respond quickly."
            align="left"
          />
          <ServiceRequestForm />
        </div>
      </section>
    </div>
  );
}
