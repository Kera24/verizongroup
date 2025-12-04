'use client';

import { FormEvent, useState } from 'react';

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

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setValues(initialState);
    }, 900);
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="organisation">
            Organisation / Institution
          </label>
          <input
            id="organisation"
            name="organisation"
            required
            value={values.organisation}
            onChange={(e) => setValues({ ...values, organisation: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
            placeholder="Verizon Group"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            required
            value={values.subject}
            onChange={(e) => setValues({ ...values, subject: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
            placeholder="How can we help?"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-900" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
          placeholder="Share your requirements..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#06B6D4] px-4 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-[#0ea5c6] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {loading ? 'Sending...' : 'Send message'}
      </button>
      {submitted && <p className="text-sm text-green-600">Thanks! We will be in touch shortly.</p>}
    </form>
  );
}
