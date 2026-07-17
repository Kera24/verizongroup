"use client";

import { useState, type FormEvent } from "react";
import { StarSpark } from "@/components/brand/StarMark";

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
        <label className="field-label">
          Name
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
            type="email"
            required
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
          Subject
          <input
            required
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className="field"
          />
        </label>
      </div>
      <label className="field-label">
        Message
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
            <StarSpark className="aperture-loader h-3.5 w-3.5" aria-hidden />
          )}
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <p role="status" className="text-sm font-semibold text-success">
            Thanks! We will be in touch shortly.
          </p>
        )}
      </div>
    </form>
  );
}
