import Link from "next/link";
import { StarMark } from "@/components/brand/StarMark";
import { Slug } from "@/components/Slug";
import { COMPANY } from "@/lib/config";

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
  { label: "Work", href: "/#work" },
  { label: "FAQ", href: "/faq" },
];

const ENGAGE = [
  { label: "Start a project", href: "/request-service" },
  { label: "Book a meeting", href: "/book-meeting" },
  { label: "Contact", href: "/contact" },
];

const footerLink =
  "font-sans text-sm text-grey transition-colors duration-micro ease-micro hover:text-ink";

/**
 * §7.10 — dense and confident. Four slug-labelled columns over a
 * hairline top border. Real details only; no invented badges.
 */
export function Footer() {
  return (
    <footer className="border-t border-hairline-firm bg-canvas">
      <div className="container grid gap-x-6 gap-y-12 py-16 md:grid-cols-12 md:py-20">
        <div className="space-y-5 md:col-span-5">
          <Slug star={false}>yoranix / {new Date().getFullYear()}</Slug>
          <div className="flex items-center gap-3">
            <StarMark className="h-9 w-auto text-ink" />
            <p className="font-display text-lg font-semibold uppercase tracking-[0.22em] text-ink">
              {COMPANY.name}
            </p>
          </div>
          <p className="font-mono text-slug uppercase tracking-[0.16em] text-ink">
            {COMPANY.tagline}
          </p>
          <p className="max-w-[38ch] text-sm leading-relaxed text-grey">{COMPANY.positioning}</p>
        </div>

        <nav aria-label="Sitemap" className="md:col-span-2 md:col-start-7">
          <Slug star={false}>index</Slug>
          <ul className="mt-5 space-y-3">
            {SITEMAP.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Engage" className="md:col-span-2">
          <Slug star={false}>engage</Slug>
          <ul className="mt-5 space-y-3">
            {ENGAGE.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <Slug star={false}>contact</Slug>
          <address className="mt-5 space-y-3 font-mono text-xs not-italic leading-relaxed text-grey">
            <p>{COMPANY.address}</p>
            <p>
              <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="transition-colors duration-micro ease-micro hover:text-ink">
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="break-all transition-colors duration-micro ease-micro hover:text-ink">
                {COMPANY.email}
              </a>
            </p>
            <p>{COMPANY.location}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-grey">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-grey">
            <Link href="/privacy" className="transition-colors duration-micro ease-micro hover:text-ink">
              Privacy
            </Link>
            <span aria-hidden>·</span>
            sydney, au
          </p>
        </div>
      </div>
    </footer>
  );
}
