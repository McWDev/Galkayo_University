import Link from "next/link";
import { mainNavigation, primaryCta, utilityNavigation } from "@/config/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur supports-[backdrop-filter]:bg-surface/85">
      {/* Utility bar */}
      <div className="on-dark hidden bg-brand-900 text-sm text-on-dark md:block">
        <div className="container-page flex h-9 items-center justify-between">
          <p className="text-on-dark-muted">Official website of Galkayo University</p>
          <nav aria-label="Quick links">
            <ul className="flex items-center gap-5">
              {utilityNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-400 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main bar */}
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo size={56} priority />
        <DesktopNav items={mainNavigation} />
        <div className="flex shrink-0 items-center gap-2">
          {/* Wrapper controls visibility so it can't conflict with the button's display class */}
          <span className="hidden sm:block">
            <ButtonLink href={primaryCta.href} size="sm">
              {primaryCta.label}
            </ButtonLink>
          </span>
          <MobileNav items={mainNavigation} utility={utilityNavigation} cta={primaryCta} />
        </div>
      </div>
      <div aria-hidden="true" className="h-[3px] bg-gradient-to-r from-brand-800 via-gold-400 to-brand-800" />
    </header>
  );
}
