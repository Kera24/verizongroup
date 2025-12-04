"use client";

import { useState } from "react";

interface ServiceRequestFormData {
  name: string;
  email: string;
  organisation: string;
  service: string;
  users: string;
  timeline: string;
  message: string;
}

export function ServiceRequestForm() {
  const [form, setForm] = useState<ServiceRequestFormData>({
    name: "",
    email: "",
    organisation: "",
    service: "Complete Moodle Solution",
    users: "",
    timeline: "1–3 months",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: keyof ServiceRequestFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError(null);
    try {
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      setForm((prev) => ({ ...prev, message: "" }));
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Full Name"
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
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-primary">Select Service</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              required
            >
              {["Complete Moodle Solution", "Server Hosting & Maintenance", "Cloud Infrastructure & DevOps", "Other"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-primary">Approximate users / students</label>
            <input
              type="number"
              min={0}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
              value={form.users}
              onChange={(e) => handleChange("users", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-semibold text-primary">Project timeline</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
              value={form.timeline}
              onChange={(e) => handleChange("timeline", e.target.value)}
              required
            >
              {["Urgent", "1–3 months", "3–6 months", "6+ months"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-primary">Message / requirements</label>
            <textarea
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-accent focus:outline-none"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
        {submitted && (
          <div className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-primary">
            Thank you! Our team will reach out with a tailored proposal.
          </div>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
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
