import { SectionHeader } from "@/components/SectionHeader";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";

export const metadata = {
  title: "Request a Service Proposal | Verizon Group",
  description: "Request a tailored service proposal for Moodle, hosting, or cloud infrastructure projects.",
};

export default function RequestServicePage() {
  return (
    <div className="bg-white">
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <SectionHeader
            eyebrow="Service request"
            title="Request a Service Proposal"
            description="Share your goals, timeline, and scale. We will return a tailored plan with milestones."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ServiceRequestForm />
        </div>
      </section>
    </div>
  );
}
