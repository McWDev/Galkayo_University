import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Root-relative path, used for the canonical URL (resolved against metadataBase). */
  path: string;
};

/** Standard metadata for public pages: title, description, canonical URL and social previews. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
      images: [{ url: "/brand/gu.png", width: 447, height: 447, alt: siteConfig.name }],
    },
    twitter: { card: "summary", title: `${title} | ${siteConfig.name}`, description },
  };
}
