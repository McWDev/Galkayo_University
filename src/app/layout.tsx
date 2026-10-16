import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Galkayo University",
    template: "%s | Galkayo University",
  },
  description: "Official website of Galkayo University (in development).",
  // Keep the site out of search indexes until launch (Task 021).
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
