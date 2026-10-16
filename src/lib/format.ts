/** Institution display time zone (confirm with GU — PRD 05 "Establish the institution's preferred time zone"). */
export const DISPLAY_TIME_ZONE = "Africa/Mogadishu";

/** Formats an ISO date as e.g. "15 October 2026", consistently on server and client. */
export function formatDate(iso: string): string {
  const date = new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: DISPLAY_TIME_ZONE }).format(date);
}
