import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T } from "@/components/ui/editable-text";

export type LinkCard = { title: string; href: string; description?: string };

/** Grid of linked cards, used for section landing pages and "In this section" lists. */
export function LinkCards({ items, headingLevel = 2 }: { items: LinkCard[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.href}
          className="group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-brand-600/40 hover:shadow-[var(--shadow-pop)]"
        >
          <Heading className="text-lg font-bold">
            <Link href={item.href} className="after:absolute after:inset-0 after:rounded-[var(--radius-card)]">
              <T>{item.title}</T>
            </Link>
          </Heading>
          {item.description && (
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              <T>{item.description}</T>
            </p>
          )}
          <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
            View <ArrowRight size={16} />
          </span>
        </li>
      ))}
    </ul>
  );
}
