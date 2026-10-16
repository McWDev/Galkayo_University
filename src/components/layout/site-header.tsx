import { Megaphone } from "lucide-react";
import { primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <>
      <header className="on-dark sticky top-0 z-40 bg-brand-900 shadow-[0_2px_16px_rgb(2_29_19/0.35)]">
        {/* Wider than container-page so the full reference-style menu fits on large screens */}
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[100rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo size={48} inverted priority compactOnDesktop />
          <DesktopNav />
          <div className="flex shrink-0 items-center gap-2">
            {/* Wrapper controls visibility so it can't conflict with the button's display class */}
            <span className="hidden sm:block">
              <ButtonLink href={primaryCta.href} variant="gold" size="sm">
                {primaryCta.label}
              </ButtonLink>
            </span>
            <MobileNav cta={primaryCta} />
          </div>
        </div>
      </header>

      {siteConfig.announcement && (
        <div role="region" aria-label="Announcement" className="bg-gold-400 text-brand-900">
          <p className="container-page flex items-center justify-center gap-2 py-2.5 text-center text-sm font-semibold">
            <Megaphone aria-hidden="true" size={18} className="shrink-0" />
            {siteConfig.announcement}
          </p>
        </div>
      )}
    </>
  );
}
