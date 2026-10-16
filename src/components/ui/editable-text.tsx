import { splitPlaceholders } from "@/lib/content/placeholders";

const highlight = process.env.NODE_ENV === "development";

/**
 * Renders editable content text. In development, unfilled [slots] are highlighted so they're easy
 * to spot; `npm run content:check` blocks launch while any remain.
 */
export function T({ children }: { children: string }) {
  if (!highlight) return <>{children}</>;
  return (
    <>
      {splitPlaceholders(children).map((part, i) =>
        part.slot ? (
          <mark key={i} title="Fill in this slot in src/content" className="rounded bg-gold-300/90 px-1 text-brand-950 not-italic">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}
