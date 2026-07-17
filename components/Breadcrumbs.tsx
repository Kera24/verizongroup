import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export type Crumb = { label: string; href: string };

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD (schema always
 * mirrors visible content). Pass the full trail including the current page.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-ink-muted">
        {trail.map((crumb, i) => {
          const current = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-border-strong">
                  /
                </span>
              )}
              {current ? (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="rounded-sm transition-colors duration-fast ease-standard hover:text-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={schema} />
    </nav>
  );
}
