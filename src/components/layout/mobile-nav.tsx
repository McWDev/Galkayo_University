"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type MouseEvent } from "react";
import { isActivePath, type NavLink, type NavSection } from "@/config/navigation";
import { buttonClasses } from "@/components/ui/button-link";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";

type MobileNavProps = {
  items: NavSection[];
  utility: NavLink[];
  cta: NavLink;
};

/**
 * Mobile/tablet navigation in a native modal <dialog>: the browser provides the focus trap,
 * Escape-to-close, inert background and focus return. Sections use <details> accordions,
 * which are keyboard and touch operable without extra scripting.
 */
export function MobileNav({ items, utility, cta }: MobileNavProps) {
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
        className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-semibold text-brand-800 hover:bg-brand-50"
      >
        <MenuIcon />
        <span>Menu</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClick={onDialogClick}
        className="ml-auto h-dvh max-h-dvh w-full max-w-md bg-surface p-0 text-ink shadow-[var(--shadow-pop)]"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-serif text-lg font-bold text-brand-800">Menu</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 font-semibold text-brand-800 hover:bg-brand-50"
            >
              <CloseIcon />
              <span>Close</span>
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={close}
                  aria-current={pathname === "/" ? "page" : undefined}
                  className="block rounded-lg px-3 py-3 font-semibold hover:bg-brand-50 aria-[current=page]:text-brand-800"
                >
                  Home
                </Link>
              </li>
              {items.map((section) => (
                <li key={section.label}>
                  {section.children?.length ? (
                    <details className="group" open={isActivePath(pathname, section.href)}>
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 font-semibold hover:bg-brand-50 [&::-webkit-details-marker]:hidden">
                        {section.label}
                        <ChevronDownIcon className="transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mb-2 ml-3 border-l-2 border-gold-400 pl-2">
                        {section.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={close}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className="block rounded-lg px-3 py-2.5 text-ink hover:bg-brand-50 aria-[current=page]:font-semibold aria-[current=page]:text-brand-800"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={section.href} onClick={close} className="block rounded-lg px-3 py-3 font-semibold hover:bg-brand-50">
                      {section.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2 border-t border-line px-3 pt-4">
              {utility.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={close} className="inline-block rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-800 hover:bg-brand-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line p-4">
            <Link href={cta.href} onClick={close} className={`${buttonClasses("primary", "lg")} w-full`}>
              {cta.label}
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
}
