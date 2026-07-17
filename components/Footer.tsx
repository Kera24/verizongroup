import Link from "next/link";
import { StarMark } from "@/components/brand/StarMark";
import { COMPANY, NAV_LINKS } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse">
      <div className="container grid gap-12 py-14 md:grid-cols-12 md:py-20">
        <div className="space-y-4 md:col-span-6">
          <div className="flex items-center gap-3">
            <StarMark className="h-9 w-auto text-inverse" />
            <p className="font-display text-xl font-semibold uppercase tracking-[0.08em]">{COMPANY.name}</p>
          </div>
          <p className="font-display text-sm text-inverse-muted">{COMPANY.tagline}</p>
          <p className="max-w-measure text-sm leading-relaxed text-inverse-muted">{COMPANY.descriptor}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow-inverse">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...NAV_LINKS, { label: "Request Service", href: "/request-service" }, { label: "Privacy", href: "/privacy" }].map(
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-inverse-muted transition-colors duration-fast ease-standard hover:text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="eyebrow-inverse">Contact</p>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-inverse-muted">
            <p>{COMPANY.address}</p>
            <p>
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                className="rounded-sm transition-colors duration-fast ease-standard hover:text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-300"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="break-all rounded-sm transition-colors duration-fast ease-standard hover:text-inverse focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-steel-300"
              >
                {COMPANY.email}
              </a>
            </p>
            <p>{COMPANY.location}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-inverse-border/20">
        <div className="container flex flex-col gap-2 py-6 text-xs text-inverse-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">{COMPANY.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
