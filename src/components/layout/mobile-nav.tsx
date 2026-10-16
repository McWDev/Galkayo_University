"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type MouseEvent } from "react";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { isItemActive, mainNavigation, type NavItem, type NavLink } from "@/config/navigation";
import { buttonClasses } from "@/components/ui/button-link";
import { Logo } from "./logo";

type MobileNavProps = {
  items?: NavItem[];
  cta: NavLink;
};

function SubLink({ link, pathname, onNavigate }: { link: NavLink; pathname: string; onNavigate: () => void }) {
  const props = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={!link.external && pathname === link.href ? "page" : undefined}
      className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-brand-50 aria-[current=page]:font-semibold aria-[current=page]:text-brand-800"
      {...props}
    >
      {link.label}
      {link.external && (
        <>
          <ExternalLink aria-hidden="true" size={13} className="text-muted" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </Link>
  );
}

/**
 * Mobile/tablet navigation in a native modal <dialog>: the browser provides the focus trap,
 * Escape-to-close, inert background and focus return. Menus use <details> accordions,
 * which are keyboard and touch operable without extra scripting.
 */
export function MobileNav({ items = mainNavigation, cta }: MobileNavProps) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  function onDialogClick(event: MouseEvent<HTMLDialogElement>) {
    // A click on the backdrop targets the dialog element itself.
    if (event.target === dialogRef.current) close();
  }

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label="Menu"
        className="inline-flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
      >
        <Menu aria-hidden="true" size={26} />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClick={onDialogClick}
        className="ml-auto h-dvh max-h-dvh w-full max-w-md bg-surface p-0 text-ink shadow-[var(--shadow-pop)]"
      >
        <div className="flex h-full flex-col">
          <div className="on-dark flex items-center justify-between bg-brand-900 px-4 py-3">
            <Logo size={40} inverted />
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex size-11 items-center justify-center rounded-lg text-white hover:bg-white/10"
            >
              <X aria-hidden="true" size={24} />
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="space-y-1">
              {items.map((item) => {
                const active = isItemActive(pathname, item);

                if (item.kind === "link") {
                  const props = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className="flex items-center gap-2 rounded-lg px-3 py-3 font-semibold hover:bg-brand-50 aria-[current=page]:text-brand-700"
                        {...props}
                      >
                        {item.label}
                        {item.external && <ExternalLink aria-hidden="true" size={14} className="text-muted" />}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <details className="group" open={active}>
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 font-semibold hover:bg-brand-50 [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <ChevronDown aria-hidden="true" size={18} className="transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mb-2 ml-3 border-l-2 border-gold-400 pl-2">
                        {item.kind === "dropdown" ? (
                          <ul>
                            {item.links.map((link) => (
                              <li key={link.label}>
                                <SubLink link={link} pathname={pathname} onNavigate={close} />
                              </li>
                            ))}
                          </ul>
                        ) : (
                          item.columns.map((column) =>
                            column.groups
                              .filter((group) => group.links.length > 0)
                              .map((group) => (
                                <div key={`${column.heading}-${group.heading}`} className="py-1">
                                  <p className="px-3 pt-2 pb-1 text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">
                                    {column.heading} &middot; {group.heading}
                                  </p>
                                  <ul>
                                    {group.links.map((link) => (
                                      <li key={link.label}>
                                        <SubLink link={link} pathname={pathname} onNavigate={close} />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )),
                          )
                        )}
                      </div>
                    </details>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-line p-4">
            <Link href={cta.href} onClick={close} className={`${buttonClasses("gold", "lg")} w-full`}>
              {cta.label}
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}
