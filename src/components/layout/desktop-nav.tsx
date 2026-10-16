"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { isItemActive, mainNavigation, type MegaColumn, type NavItem, type NavLink } from "@/config/navigation";

const itemClass =
  "relative flex items-center gap-1 rounded-md px-2 py-2 text-[0.875rem] font-semibold whitespace-nowrap text-white transition-colors hover:text-gold-400 2xl:px-2.5";

function ActiveBar() {
  return <span aria-hidden="true" className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold-400" />;
}

function MenuLink({ link, pathname, onNavigate, className }: { link: NavLink; pathname: string; onNavigate: () => void; className: string }) {
  const active = !link.external && pathname === link.href;
  const props = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={link.href} aria-current={active ? "page" : undefined} onClick={onNavigate} className={className} {...props}>
      {link.icon && <link.icon aria-hidden="true" size={16} className="shrink-0 text-brand-600" />}
      <span>{link.label}</span>
      {link.external && (
        <>
          <ExternalLink aria-hidden="true" size={13} className="shrink-0 text-muted" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </Link>
  );
}

function MegaPanel({ columns, pathname, onNavigate }: { columns: MegaColumn[]; pathname: string; onNavigate: () => void }) {
  return (
    <div className="grid w-[38rem] grid-cols-2 divide-x divide-line">
      {columns.map((column) => (
        <div key={column.heading} className="px-5 py-4">
          <p className="border-l-2 border-brand-600 pl-2.5 text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">{column.heading}</p>
          {column.groups
            .filter((group) => group.links.length > 0)
            .map((group) => (
              <div key={group.heading} className="mt-4 border-t border-line pt-4">
                <p className="mb-2 text-[0.7rem] font-semibold tracking-[0.14em] text-muted uppercase">{group.heading}</p>
                {group.style === "chips" ? (
                  <ul className="flex flex-wrap gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <MenuLink
                          link={link}
                          pathname={pathname}
                          onNavigate={onNavigate}
                          className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 hover:bg-brand-100"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <MenuLink
                          link={link}
                          pathname={pathname}
                          onNavigate={onNavigate}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-ink hover:bg-brand-50 hover:text-brand-800 aria-[current=page]:font-semibold aria-[current=page]:text-brand-800"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Desktop navigation using the disclosure pattern: each menu is a button (aria-expanded/aria-controls)
 * revealing its links. Opens on hover for mouse users (like the reference design) and on click/Enter/Space
 * for everyone. Closes on Escape (focus returns to the trigger), outside click, focus leaving the nav,
 * pointer leaving, or link click.
 */
// Imports the menu config directly: its icon components cannot be passed as props from a Server Component.
export function DesktopNav({ items = mainNavigation }: { items?: NavItem[] }) {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef(new Map<string, HTMLButtonElement>());
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Menu most recently opened by mouse hover: a click on its trigger should keep it open, not toggle it shut.
  const hoverOpened = useRef<string | null>(null);

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

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function hoverOpen(label: string, event: ReactPointerEvent) {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    if (openLabel !== label) hoverOpened.current = label;
    setOpenLabel(label);
  }

  function hoverClose(event: ReactPointerEvent) {
    if (event.pointerType !== "mouse") return;
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenLabel(null), 180);
  }

  function onBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenLabel(null);
  }

  const close = () => setOpenLabel(null);

  return (
    <nav ref={navRef} aria-label="Main" onBlur={onBlur} className="hidden xl:block">
      <ul className="flex items-center">
        {items.map((item) => {
          const active = isItemActive(pathname, item);

          if (item.kind === "link") {
            const props = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    item.highlight
                      ? "mx-1 inline-flex items-center gap-1.5 rounded-lg bg-gold-400 px-3 py-1.5 text-[0.875rem] font-semibold whitespace-nowrap text-brand-900 transition-colors hover:bg-gold-300"
                      : `${itemClass} ${active ? "text-gold-400" : ""}`
                  }
                  {...props}
                >
                  {item.label}
                  {item.external && (
                    <>
                      <ExternalLink aria-hidden="true" size={14} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  )}
                  {active && !item.highlight && <ActiveBar />}
                </Link>
              </li>
            );
          }

          const isOpen = openLabel === item.label;
          const panelId = `nav-panel-${item.label.toLowerCase().replace(/\W+/g, "-")}`;

          return (
            <li
              key={item.label}
              className="relative"
              onPointerEnter={(e) => hoverOpen(item.label, e)}
              onPointerLeave={hoverClose}
            >
              <button
                type="button"
                ref={(el) => {
                  if (el) triggerRefs.current.set(item.label, el);
                  else triggerRefs.current.delete(item.label);
                }}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  if (isOpen && hoverOpened.current === item.label) {
                    hoverOpened.current = null;
                    return;
                  }
                  hoverOpened.current = null;
                  setOpenLabel(isOpen ? null : item.label);
                }}
                className={`${itemClass} ${active || isOpen ? "text-gold-400" : ""}`}
              >
                {item.label}
                <ChevronDown aria-hidden="true" size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                {active && <ActiveBar />}
              </button>

              {/* pt-3 bridges the gap between trigger and panel so hover isn't lost */}
              <div id={panelId} hidden={!isOpen} className={`absolute top-full z-50 pt-3 ${item.kind === "mega" ? "left-1/2 -translate-x-1/3" : "left-0"}`}>
                <div className="overflow-hidden rounded-xl border-t-4 border-gold-400 bg-surface shadow-[var(--shadow-pop)]">
                  {item.kind === "mega" ? (
                    <MegaPanel columns={item.columns} pathname={pathname} onNavigate={close} />
                  ) : (
                    <ul className="w-64 p-2">
                      {item.links.map((link) => (
                        <li key={link.label}>
                          <MenuLink
                            link={link}
                            pathname={pathname}
                            onNavigate={close}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-ink hover:bg-brand-50 hover:text-brand-800 aria-[current=page]:bg-brand-50 aria-[current=page]:font-semibold"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
