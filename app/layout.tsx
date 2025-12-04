import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: `${COMPANY.name} | End-to-end digital solutions for education and enterprises`,
  description: COMPANY.tagline,
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.tagline,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-primary`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
