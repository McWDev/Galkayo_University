/**
 * Public site URL used for canonical links and metadata.
 * Falls back to localhost in development only.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return url.replace(/\/+$/, "");
}
