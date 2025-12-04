import Link from 'next/link';
import SectionHeader from './SectionHeader';

export default function CTASection() {
  return (
    <section className="section-container my-16">
      <div className="card-shadow overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-slate-900 px-8 py-10 text-white">
        <div className="grid gap-6 items-center md:grid-cols-3">
          <div className="md:col-span-2">
            <SectionHeader
              align="left"
              eyebrow="Ready to move?"
              title="Ready to modernise your infrastructure?"
              description="Speak with Verizon Group about a roadmap for secure hosting, Moodle enhancements, and scalable cloud operations."
            />
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href="/request-service" className="btn-primary bg-white text-primary hover:brightness-95">
              Request a Proposal
            </Link>
            <Link href="/contact" className="btn-secondary border-white/40 text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
