import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/config";

export type Crumb = { label: string; href: string };

/**
 * Breadcrumb trail set in the slug voice (mono, lowercase) + matching
 * BreadcrumbList JSON-LD — schema always mirrors visible content.
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
    <nav aria-label="Breadcrumb" className="font-mono text-slug uppercase tracking-[0.16em]">
      <ol className="flex flex-wrap items-center gap-2.5 text-grey">
        {trail.map((crumb, i) => {
          const current = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2.5">
              {i > 0 && <span aria-hidden>/</span>}
              {current ? (
                <span aria-current="page" className="text-ink">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors duration-micro ease-micro hover:text-ink"
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
