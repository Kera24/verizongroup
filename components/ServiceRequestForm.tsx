'use client';

import { FormEvent, useState } from 'react';
import { serviceOptions } from '@/lib/config';

interface RequestState {
  fullName: string;
  email: string;
  organisation: string;
  service: string;
  users: string;
  timeline: string;
  message: string;
}

const initialState: RequestState = {
  fullName: '',
  email: '',
  organisation: '',
  service: serviceOptions[0],
  users: '',
  timeline: '1–3 months',
  message: ''
};

export function ServiceRequestForm() {
  const [values, setValues] = useState<RequestState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    await fetch('/api/request-service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setValues(initialState);
    }, 800);
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
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
            placeholder="Contoso University"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="service">
            Select Service
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => setValues({ ...values, service: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="users">
            Approximate number of users / students
          </label>
          <input
            id="users"
            name="users"
            type="number"
            min={1}
            required
            value={values.users}
            onChange={(e) => setValues({ ...values, users: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
            placeholder="500"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900" htmlFor="timeline">
            Project timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => setValues({ ...values, timeline: e.target.value })}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
          >
            {['Urgent', '1–3 months', '3–6 months', '6+ months'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-900" htmlFor="message">
          Message / requirements
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#06B6D4] focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-[#06B6D4] px-4 py-3 text-sm font-semibold text-slate-900 shadow-card transition hover:bg-[#0ea5c6] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {loading ? 'Submitting...' : 'Submit request'}
      </button>

      {submitted && <p className="text-sm text-green-600">Thank you! We will contact you shortly.</p>}
    </form>
  );
}
