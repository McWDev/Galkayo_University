import { homeContent } from "@/content/home";

export type HomeContent = typeof homeContent;

/**
 * Home page data source. Returns the static content file today; Tasks 011–016 replace this with
 * Neon/CMS queries (published records only) without changing the section components.
 */
export async function getHomeContent(): Promise<HomeContent> {
  return homeContent;
}
