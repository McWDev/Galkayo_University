import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href: string };

/** Breadcrumb trail; the last item is the current page. */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-gold-400">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="text-on-dark hover:text-gold-400 hover:underline">
                    {item.label}
                  </Link>
                  <ChevronRight aria-hidden="true" size={14} className="text-on-dark-muted" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
