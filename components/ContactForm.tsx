"use client";

import { useState } from "react";

interface ContactFormFields {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}

const initialState: ContactFormFields = {
  name: "",
  email: "",
  organisation: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormFields>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
    }, 900);
  };

  return (
    <div className="card p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-primary" htmlFor="name">
              Name*
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
              placeholder="Your full name"
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

        <div className="space-y-1">
          <label className="text-sm font-medium text-primary" htmlFor="organisation">
            Organisation / Institution
          </label>
          <input
            id="organisation"
            name="organisation"
            value={form.organisation}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="Company or institution"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-primary" htmlFor="subject">
            Subject*
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="How can we help?"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-primary" htmlFor="message">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none"
            placeholder="Tell us about your project, timelines, and goals."
            required
          />
        </div>

        {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-600">{error}</div>}
        {status === "success" && (
          <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Thank you! We have received your message and will respond shortly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
