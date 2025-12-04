export const metadata = {
  title: "Privacy | Verizon Group",
  description: "Privacy notice for Verizon Group website visitors.",
};

export default function PrivacyPage() {
  return (
    <section className="section bg-muted">
      <div className="container space-y-4">
        <h1 className="text-3xl font-semibold text-primary">Privacy Notice</h1>
        <p className="text-slate-600">
          Verizon Group respects your privacy. This site collects minimal analytics data to improve user experience. Any
          information submitted through forms is used solely to respond to your enquiry.
        </p>
        <p className="text-slate-600">For questions, contact hello@verizongroup.com.</p>
      </div>
    </section>
  );
}
