import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Update after your first Netlify deploy or custom domain goes live. */
const siteUrl = "https://gere-production.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.companyName} | Philadelphia Area Contractor`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "GERE PRODUCTION — owner-operated construction in Philadelphia and surrounding areas: remodeling, flooring, drywall, painting, roofing, concrete, decks, and general repairs. Free estimates.",
  keywords: [
    "GERE PRODUCTION",
    "construction",
    "contractor",
    "Philadelphia",
    "remodeling",
    "flooring",
    "drywall",
    "painting",
    "roofing",
    "concrete",
    "decks",
    "home repairs",
    "free estimate",
  ],
  authors: [{ name: siteConfig.companyName }],
  openGraph: {
    title: siteConfig.companyName,
    description:
      "Quality residential construction and repairs in Philadelphia and surrounding areas.",
    url: siteUrl,
    siteName: siteConfig.companyName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description:
      "Professional construction services with honest pricing and local service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#f7f3ea] text-[#1f1b16] antialiased">{children}</body>
    </html>
  );
}
