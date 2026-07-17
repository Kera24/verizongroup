import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SmoothScroll } from "@/components/SmoothScroll";
import { COMPANY, SERVICES, SITE_URL } from "@/lib/config";
import { buildMetadata } from "@/lib/seo";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY.name,
  ...buildMetadata({
    title: `${COMPANY.name} | ${COMPANY.tagline} — ${COMPANY.descriptor}`,
    description: `${COMPANY.name} provides ${COMPANY.descriptor.toLowerCase()} ${SERVICES.map((s) => s.title).join(", ")} — delivered from ${COMPANY.location}.`,
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  slogan: COMPANY.tagline,
  description: COMPANY.descriptor,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Market Street",
    addressLocality: "Sydney",
    addressCountry: "AU",
  },
  areaServed: "Worldwide",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: SITE_URL,
  description: COMPANY.descriptor,
  publisher: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
  inLanguage: "en-AU",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-elevation-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <SmoothScroll />
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
      </body>
    </html>
  );
}
