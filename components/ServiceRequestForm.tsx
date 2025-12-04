"use client";

import { useState, type FormEvent } from "react";

interface ServiceRequestState {
  name: string;
  email: string;
  organisation: string;
  service: string;
  users: string;
  timeline: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "Complete Moodle Solution",
  "Server Hosting & Maintenance",
  "Cloud Infrastructure & DevOps",
  "Custom Integrations & Automation",
  "Other",
];

const TIMELINE_OPTIONS = ["Urgent", "1–3 months", "3–6 months", "6+ months"];

export function ServiceRequestForm() {
  const [form, setForm] = useState<ServiceRequestState>({
    name: "",
    email: "",
    organisation: "",
    service: SERVICE_OPTIONS[0],
    users: "",
    timeline: TIMELINE_OPTIONS[1],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (key: keyof ServiceRequestState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
      }
    } catch (error) {
      console.error("Request failed", error);
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-primary">
          Full Name
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
            required
            type="email"
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
          Select Service
          <select
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Approximate number of users / students
          <input
            required
            type="number"
            min={1}
            value={form.users}
            onChange={(e) => handleChange("users", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-primary">
          Project timeline
          <select
            value={form.timeline}
            onChange={(e) => handleChange("timeline", e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-primary">
        Message / requirements
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Submit request"}
        </button>
        {status === "success" && <p className="text-sm font-semibold text-emerald-600">Thank you! We will respond shortly.</p>}
      </div>
    </form>
  );
}
