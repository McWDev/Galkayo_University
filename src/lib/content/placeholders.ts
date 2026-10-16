/** A fill-in slot in editable content, e.g. "[Year]" or "[Partner Name]". */
export const PLACEHOLDER_PATTERN = /\[[^\]\n]+\]/g;

export type Placeholder = { path: string; slot: string; text: string };

/** Recursively lists every unfilled [slot] in a content object, with its location. */
export function findPlaceholders(value: unknown, path = ""): Placeholder[] {
  if (typeof value === "string") {
    return [...value.matchAll(PLACEHOLDER_PATTERN)].map((m) => ({ path, slot: m[0], text: value }));
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => findPlaceholders(item, `${path}[${i}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, v]) => findPlaceholders(v, path ? `${path}.${key}` : key));
  }
  return [];
}

/** Splits text into plain and [slot] segments for highlighting. */
export function splitPlaceholders(text: string): { text: string; slot: boolean }[] {
  const parts: { text: string; slot: boolean }[] = [];
  let last = 0;
  for (const m of text.matchAll(PLACEHOLDER_PATTERN)) {
    const start = m.index ?? 0;
    if (start > last) parts.push({ text: text.slice(last, start), slot: false });
    parts.push({ text: m[0], slot: true });
    last = start + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last), slot: false });
  return parts;
}
