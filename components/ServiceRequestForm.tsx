"use client";

import { useState, type FormEvent } from "react";
import { StarSpark } from "@/components/brand/StarMark";

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
        <label className="field-label">
          Full Name
          <input
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="field"
          />
        </label>
        <label className="field-label">
          Work Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="field"
          />
        </label>
        <label className="field-label">
          Organisation / Institution
          <input
            required
            value={form.organisation}
            onChange={(e) => handleChange("organisation", e.target.value)}
            className="field"
          />
        </label>
        <label className="field-label">
          Select Service
          <select
            value={form.service}
            onChange={(e) => handleChange("service", e.target.value)}
            className="field"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field-label">
          Approximate number of users / students
          <input
            required
            type="number"
            min={1}
            value={form.users}
            onChange={(e) => handleChange("users", e.target.value)}
            className="field"
          />
        </label>
        <label className="field-label">
          Project timeline
          <select
            value={form.timeline}
            onChange={(e) => handleChange("timeline", e.target.value)}
            className="field"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="field-label">
        Message / requirements
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="field"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" && (
            <StarSpark className="star-loader h-3.5 w-3.5" aria-hidden />
          )}
          {status === "submitting" ? "Submitting..." : "Submit request"}
        </button>
        {status === "success" && (
          <p role="status" className="text-sm font-semibold text-success">
            Thank you! We will respond shortly.
          </p>
        )}
      </div>
    </form>
  );
}
