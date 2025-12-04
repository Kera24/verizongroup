import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-semibold text-slate-900">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-card">VG</div>
            <div>
              <div className="text-lg">{siteConfig.name}</div>
              <p className="text-xs text-slate-500">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Verizon Group delivers secure, scalable, and modern digital infrastructures for learning providers and enterprises.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <p>{siteConfig.contact.address}</p>
          <p>{siteConfig.contact.email}</p>
          <p>{siteConfig.contact.phone}</p>
          <div className="flex items-center gap-3 pt-2 text-slate-500">
            <Link href="#" aria-label="LinkedIn" className="hover:text-slate-900">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-slate-900">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
