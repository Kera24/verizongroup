"use client";

import { useState } from "react";

const services = [
  "Complete Moodle Solution",
  "Server Hosting & Maintenance",
  "Cloud Infrastructure & DevOps",
  "Custom Integrations & Automation",
  "Other",
];

const timelines = ["Urgent", "1–3 months", "3–6 months", "6+ months"];

interface FormState {
  name: string;
  email: string;
  organisation: string;
  service: string;
  users: string;
  timeline: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  organisation: "",
  service: services[0],
  users: "",
  timeline: timelines[1],
  message: "",
};

export function ServiceRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.organisation || !form.message || !form.users) {
      setError("Please complete all required fields.");
      return;
    }

    try {
      setStatus("submitting");
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className="card p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="name">
              Full Name*
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="email">
              Work Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="organisation">
              Organisation / Institution*
            </label>
            <input
              id="organisation"
              name="organisation"
              value={form.organisation}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
              placeholder="Organisation"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="service">
              Select Service
            </label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="users">
              Approximate number of users / students*
            </label>
            <input
              id="users"
              name="users"
              type="number"
              min="0"
              value={form.users}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
              placeholder="e.g. 1200"
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="timeline">
              Project timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            >
              {timelines.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-primary" htmlFor="message">
            Message / requirements*
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="Share your goals, integrations, constraints, or compliance needs."
            required
          />
        </div>

        {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</div>}
        {status === "success" && (
          <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Thank you! Our consultants will contact you within one business day.
          </div>
        )}

        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
          {status === "submitting" ? "Submitting..." : "Submit request"}
        </button>
      </form>
    </div>
  );
}
