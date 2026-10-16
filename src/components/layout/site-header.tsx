import Link from "next/link";
import { ExternalLink, Mail, Megaphone, Phone } from "lucide-react";
import { primaryCta, topBarLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

// Wider than container-page so the full reference-style menu fits on large screens.
const headerContainer = "mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8";

/** University email and phone. Text is hidden on small screens (icon-only, still labelled) to fit the bar. */
function ContactLinks() {
  const { email, phone, phoneHref } = siteConfig.contact;
  const items = [
    email && { icon: Mail, label: "Email", text: email, href: `mailto:${email}` },
    phone && phoneHref && { icon: Phone, label: "Phone", text: phone, href: `tel:${phoneHref}` },
  ].filter((item): item is { icon: typeof Mail; label: string; text: string; href: string } => Boolean(item));

  if (items.length === 0) return <span />;

  return (
    <ul className="flex items-center gap-0.5 sm:gap-1 md:gap-5">
      {items.map(({ icon: Icon, label, text, href }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={`${label}: ${text}`}
            className="inline-flex items-center gap-2 rounded-md p-1 text-on-dark hover:text-gold-400 sm:p-1.5 md:p-0"
          >
            <Icon aria-hidden="true" size={16} className="shrink-0 text-gold-400" />
            <span className="hidden md:inline">{text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Top bar above the main menu: university contact on the left, systems (HEMIS, Verify, Student Portal) on the right. */
function TopBar() {
  return (
    <div className="on-dark border-b border-white/10 bg-brand-950 text-sm">
      <div className={`${headerContainer} h-10`}>
        <ContactLinks />
        <nav aria-label="University systems">
          <ul className="flex items-center justify-end gap-0.5 sm:gap-2">
            {topBarLinks.map((link, index) => {
              const highlight = index === topBarLinks.length - 1;
              const props = link.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      highlight
                        ? "inline-flex items-center gap-1.5 rounded-md bg-gold-400 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-brand-900 hover:bg-gold-300 sm:px-3 sm:text-sm"
                        : "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs font-medium whitespace-nowrap text-on-dark hover:text-gold-400 sm:px-2.5 sm:text-sm"
                    }
                    {...props}
                  >
                    {link.icon && <link.icon aria-hidden="true" size={15} className={highlight ? "max-[399px]:hidden" : "text-gold-400 max-[399px]:hidden"} />}
                    {link.label}
                    {link.external && (
                      <>
                        <ExternalLink aria-hidden="true" size={12} />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <TopBar />
      <header className="on-dark sticky top-0 z-40 bg-brand-900 shadow-[0_2px_16px_rgb(2_29_19/0.35)]">
        <div className={`${headerContainer} h-[4.5rem]`}>
          <Logo size={48} inverted priority />
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
            <span>
              <T>{siteConfig.announcement}</T>
            </span>
          </p>
        </div>
      )}
    </>
  );
}
