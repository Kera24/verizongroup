'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/book-meeting', label: 'Book Meeting' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">VG</span>
          <div className="leading-tight">
            <div>Verizon Group</div>
            <p className="text-xs font-normal text-slate-500">Digital Infrastructure</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition hover:text-accent',
                pathname === link.href ? 'text-accent' : 'text-slate-700'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/request-service" className="btn-primary">
            Request a Proposal
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-7 w-7 text-primary" /> : <Bars3Icon className="h-7 w-7 text-primary" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="section-container flex flex-col gap-2 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50',
                  pathname === link.href ? 'text-accent' : 'text-slate-700'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/request-service" onClick={() => setOpen(false)} className="btn-primary text-center">
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
