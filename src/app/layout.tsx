import type { Metadata, Viewport } from "next";
import { Poppins, Saira } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

// Self-hosted by next/font at build time: no runtime requests to Google.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const saira = Saira({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-saira", display: "swap" });

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
  themeColor: "#032a1c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${saira.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
