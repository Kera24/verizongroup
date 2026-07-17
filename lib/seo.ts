import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "@/lib/config";

/**
 * Per-page metadata with unique title/description, canonical URL, and
 * OpenGraph/Twitter cards. Titles are composed here (no template) so each
 * page stays fully explicit for answer engines.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} | ${COMPANY.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: COMPANY.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${COMPANY.name} — ${COMPANY.tagline}` }],
      locale: "en_AU",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
