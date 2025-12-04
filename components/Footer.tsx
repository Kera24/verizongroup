import Link from 'next/link';
import { COMPANY_CONTACT } from '../lib/config';
import { LinkedinIcon, TwitterIcon } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' }
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-primary">Verizon Group</div>
          <p className="mt-2 max-w-sm text-sm text-slate-600">
            End-to-end digital solutions for education and enterprises. Reliable Moodle, hosting, and cloud infrastructure services.
          </p>
          <div className="mt-4 space-y-1 text-sm text-slate-600">
            <div>Email: {COMPANY_CONTACT.email}</div>
            <div>Phone: {COMPANY_CONTACT.phone}</div>
            <div>Location: {COMPANY_CONTACT.location}</div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Stay connected</h3>
          <p className="mt-3 text-sm text-slate-600">Follow Verizon Group for product updates and service announcements.</p>
          <div className="mt-4 flex gap-3">
            <Link
              href="https://www.linkedin.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-accent hover:text-accent"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4">
        <div className="section-container flex flex-col gap-2 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Verizon Group. All rights reserved.</p>
          <p className="text-slate-400">Built with care for digital learning and cloud scalability.</p>
        </div>
      </div>
    </footer>
  );
}
