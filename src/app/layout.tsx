import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

// Self-hosted by next/font at build time: no runtime requests to Google.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Galkayo University",
    template: "%s | Galkayo University",
  },
  description: "Official website of Galkayo University (in development).",
  icons: { icon: "/brand/gu.png", apple: "/brand/gu.png" },
  // Keep the site out of search indexes until launch (Task 021).
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#06402b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
