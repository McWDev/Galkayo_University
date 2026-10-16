import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, pages } from "@/config/pages";
import { RegistryPage } from "@/features/pages/registry-page";
import { pageMetadata } from "@/lib/seo/metadata";

/**
 * Catch-all for registered public pages (src/config/pages.ts) that don't have a dedicated route yet.
 * Dedicated route files (e.g. app/(public)/news/page.tsx) take precedence automatically.
 */
type Props = { params: Promise<{ slug: string[] }> };

const toPath = (slug: string[]) => `/${slug.map((s) => decodeURIComponent(s)).join("/")}`;

export function generateStaticParams() {
  return [...pages.keys()].map((path) => ({ slug: path.split("/").filter(Boolean) }));
}

// Only registered pages exist; anything else is a 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage(toPath((await params).slug));
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.intro, path: page.path });
}

export default async function Page({ params }: Props) {
  const page = getPage(toPath((await params).slug));
  if (!page) notFound();
  return <RegistryPage page={page} />;
}
