import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: 'Modern Moodle, hosting, and cloud services delivered by Verizon Group.',
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: 'Modern Moodle, hosting, and cloud services delivered by Verizon Group.',
    url: 'https://verizongroup.com',
    siteName: siteConfig.name
  },
  metadataBase: new URL('https://verizongroup.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
