"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent } from "react";
import { isActivePath, type NavSection } from "@/config/navigation";
import { ChevronDownIcon } from "./icons";

/**
 * Desktop mega-menu using the disclosure pattern: each section is a button
 * (aria-expanded/aria-controls) revealing a list of links.
 * Closes on Escape (focus returns to the trigger), outside click, focus leaving the nav, or link click.
 */
export function DesktopNav({ items }: { items: NavSection[] }) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    if (!openLabel) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenLabel(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !openLabel) return;
      triggerRefs.current.get(openLabel)?.focus();
      setOpenLabel(null);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openLabel]);

  function onBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenLabel(null);
  }

  return (
    <nav ref={navRef} aria-label="Main" onBlur={onBlur} className="hidden xl:block">
      <ul className="flex items-center gap-0.5 2xl:gap-1">
        {items.map((section) => {
          const active = isActivePath(pathname, section.href);
          const isOpen = openLabel === section.label;
          const panelId = `nav-panel-${section.href.replace(/\W+/g, "-")}`;

          if (!section.children?.length) {
            return (
              <li key={section.label}>
                <Link
                  href={section.href}
                  aria-current={active ? "page" : undefined}
                  className="block rounded-md px-2.5 py-2 text-[0.95rem] whitespace-nowrap font-medium text-ink hover:bg-brand-50 hover:text-brand-800"
                >
                  {section.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={section.label} className="relative">
              <button
                type="button"
                ref={(el) => {
                  if (el) triggerRefs.current.set(section.label, el);
                  else triggerRefs.current.delete(section.label);
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenLabel(isOpen ? null : section.label)}
                className={`relative flex items-center gap-1 rounded-md px-2.5 py-2 text-[0.95rem] whitespace-nowrap font-medium transition-colors hover:bg-brand-50 hover:text-brand-800 ${
                  active || isOpen ? "text-brand-800" : "text-ink"
                }`}
              >
                {section.label}
                <ChevronDownIcon width={16} height={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                {active && <span aria-hidden="true" className="absolute inset-x-2.5 -bottom-[3px] h-[3px] rounded-full bg-gold-400" />}
              </button>

              <div
                id={panelId}
                hidden={!isOpen}
                className="absolute top-full left-0 z-50 mt-2 w-80 rounded-[var(--radius-card)] border border-line bg-surface p-2 shadow-[var(--shadow-pop)]"
              >
                <ul>
                  {section.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          onClick={() => setOpenLabel(null)}
                          className={`block rounded-lg px-3 py-2.5 hover:bg-brand-50 ${childActive ? "bg-brand-50" : ""}`}
                        >
                          <span className="block font-semibold text-brand-800">{child.label}</span>
                          {child.description && <span className="block text-sm text-muted">{child.description}</span>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
