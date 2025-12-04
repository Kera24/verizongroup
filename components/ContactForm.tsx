"use client";

import { useState, type FormEvent } from "react";

interface ContactFormState {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (key: keyof ContactFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-primary">
          Name
          <input
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Work Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Organisation / Institution
          <input
            required
            value={form.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Subject
          <input
            required
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-primary">
        Message
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && <p className="text-sm font-semibold text-emerald-600">Thanks! We will be in touch shortly.</p>}
      </div>
    </form>
  );
}
