'use client';

import { FormEvent, useState } from 'react';

interface ServiceRequest {
  name: string;
  email: string;
  organisation: string;
  service: string;
  users: string;
  timeline: string;
  message: string;
}

const initialState: ServiceRequest = {
  name: '',
  email: '',
  organisation: '',
  service: 'Complete Moodle Solution',
  users: '',
  timeline: '1–3 months',
  message: ''
};

export default function ServiceRequestForm() {
  const [form, setForm] = useState<ServiceRequest>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.service || !form.timeline) return;
    setStatus('loading');
    try {
      const response = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialState);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="card-shadow rounded-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-primary">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-primary">Work Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
              required
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-primary">Organisation / Institution</label>
          <input
            type="text"
            value={form.organisation}
            onChange={(e) => setForm((prev) => ({ ...prev, organisation: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
            placeholder="e.g. Horizon College"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-primary">Select Service</label>
            <select
              value={form.service}
              onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
            >
              <option>Complete Moodle Solution</option>
              <option>Server Hosting & Maintenance</option>
              <option>Cloud Infrastructure & DevOps</option>
              <option>Custom Integrations & Automation</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-primary">Approx. users / students</label>
            <input
              type="number"
              value={form.users}
              onChange={(e) => setForm((prev) => ({ ...prev, users: e.target.value }))}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
              placeholder="e.g. 1200"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-primary">Project timeline</label>
          <select
            value={form.timeline}
            onChange={(e) => setForm((prev) => ({ ...prev, timeline: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
          >
            <option>Urgent</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>6+ months</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-primary">Message / requirements</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-accent/40 focus:ring"
            rows={4}
            placeholder="Tell us about your goals, integration needs, and timelines."
          />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit request'}
          </button>
          {status === 'success' && <p className="text-sm font-semibold text-green-600">Thanks! Our team will respond shortly.</p>}
          {status === 'error' && <p className="text-sm font-semibold text-red-600">Something went wrong. Please try again.</p>}
        </div>
      </form>
    </div>
  );
}
