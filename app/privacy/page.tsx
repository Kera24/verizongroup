export const metadata = {
  title: 'Privacy Policy | Verizon Group',
  description: 'Privacy commitments for Verizon Group digital services.'
};

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#06B6D4]">Privacy</p>
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-slate-600">
          We respect your privacy and are committed to protecting personal data. This placeholder outlines how Verizon Group collects, uses, and safeguards information submitted through this site. For production use, replace this copy with your legal team’s approved policy.
        </p>
        <ul className="space-y-2 text-sm text-slate-700">
          <li>• Information is used solely for providing requested services.</li>
          <li>• Data is stored securely with restricted access.</li>
          <li>• Contact us to request updates or removal of your data.</li>
        </ul>
      </div>
    </div>
  );
}
