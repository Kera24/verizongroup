'use client';

import { FormEvent, useState } from 'react';
import { COMPANY_CONTACT } from '../lib/config';

interface FormState {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  organisation: '',
  subject: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus('loading');
    setTimeout(() => {
      console.info('Contact request', form, COMPANY_CONTACT.email);
      setStatus('success');
      setForm(initialState);
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <div className="card-shadow rounded-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-primary">Name</label>
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
            placeholder="e.g. Western College"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-primary">Subject</label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-primary">Message</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none ring-accent/40 focus:ring"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p className="text-sm font-semibold text-green-600">Thanks! We will reply soon.</p>}
        </div>
      </form>
    </div>
  );
}
