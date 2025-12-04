"use client";

import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="card">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <InputField
            type="email"
            label="Work Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </div>
        <InputField
          label="Organisation / Institution"
          value={form.organisation}
          onChange={(e) => handleChange("organisation", e.target.value)}
          required
        />
        <InputField
          label="Subject"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          required
        />
        <div>
          <label className="text-sm font-semibold text-primary">Message</label>
          <textarea
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
            rows={4}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {submitted && <p className="text-sm font-medium text-accent">Thanks! We will respond within one business day.</p>}
      </form>
    </div>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-primary">{label}</label>
      <input
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
        {...props}
      />
    </div>
  );
}
