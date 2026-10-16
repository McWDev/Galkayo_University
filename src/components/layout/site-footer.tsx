import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { footerLinks, primaryCta, topBarLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { Logo } from "./logo";

// Brand marks as minimal inline SVGs (lucide no longer ships brand icons).
const socialIcons: Record<keyof typeof siteConfig.social, { label: string; path: string }> = {
  facebook: { label: "Facebook", path: "M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1z" },
  youtube: { label: "YouTube", path: "M23 12s0-3.6-.5-5.3c-.3-1-1-1.7-2-2C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5c-1 .3-1.7 1-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3c.3 1 1 1.7 2 2 1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5c1-.3 1.7-1 2-2 .5-1.7.5-5.3.5-5.3zM9.8 15.5v-7l6 3.5-6 3.5z" },
  x: { label: "X", path: "M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.2L5.9 22H3l7-8L2 2h6.1l4.3 5.7L18.2 2zm-1 18h1.7L7 3.9H5.2L17.2 20z" },
};

function ContactRow({ icon: Icon, value, label, href }: { icon: LucideIcon; value: string | null; label: string; href?: string }) {
  if (!value) return null;
  return (
    <li className="flex items-start gap-3">
      <Icon aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-gold-400" />
      <span>
        <span className="sr-only">{label}: </span>
        {href ? (
          <a href={href} className="hover:text-gold-400">
            {value}
          </a>
        ) : (
          <T>{value}</T>
        )}
      </span>
    </li>
  );
}

function FooterHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-5 text-xl font-bold text-white">
      {children}
      <span aria-hidden="true" className="mt-2 block h-0.5 w-10 rounded-full bg-gold-400" />
    </h2>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { contact, footer, social } = siteConfig;
  const portal = topBarLinks.find((l) => l.label === "Student Portal");
  const socials = (Object.keys(socialIcons) as (keyof typeof socialIcons)[]).filter((k) => social[k]);

  return (
    <footer className="on-dark mt-auto bg-brand-950 text-on-dark">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="space-y-6">
          <Logo size={56} inverted />
          <p className="max-w-xs text-sm leading-relaxed text-on-dark-muted">
            <T>{footer.description}</T>
          </p>
          <ul className="space-y-3 text-sm">
            <ContactRow icon={MapPin} label="Address" value={contact.address} />
            <ContactRow icon={Phone} label="Phone" value={contact.phone} href={contact.phoneHref ? `tel:${contact.phoneHref}` : undefined} />
            <ContactRow icon={Mail} label="Email" value={contact.email} href={contact.email ? `mailto:${contact.email}` : undefined} />
            <ContactRow icon={Clock} label="Office hours" value={contact.officeHours} />
          </ul>
          {socials.length > 0 && (
            <ul className="flex gap-3">
              {socials.map((key) => (
                <li key={key}>
                  <a
                    href={social[key]!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${socialIcons[key].label} (opens in a new tab)`}
                    className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold-400 hover:text-brand-900"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d={socialIcons[key].path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {footerLinks.map((group) => {
          const id = `footer-${group.heading.toLowerCase().replace(/\W+/g, "-")}`;
          return (
            <nav key={group.heading} aria-labelledby={id}>
              <FooterHeading id={id}>{group.heading}</FooterHeading>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center gap-2 text-on-dark hover:text-gold-400">
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-gold-400/70" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          );
        })}

        <div>
          <FooterHeading id="footer-stay-updated">
            <T>{footer.newsletterTitle}</T>
          </FooterHeading>
          <p className="text-sm leading-relaxed text-on-dark-muted">
            <T>{footer.newsletterText}</T>
          </p>
          <Link href="/news" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:underline">
            Latest news <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <div className="mt-6 rounded-[var(--radius-card)] bg-white/5 p-5 text-center ring-1 ring-white/10">
            <p className="text-sm text-on-dark">
              <T>{footer.applyPrompt}</T>
            </p>
            <ButtonLink href={primaryCta.href} variant="gold" size="sm" className="mt-3">
              {primaryCta.label} <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-sm text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Galkayo University. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link href="/privacy" className="hover:text-gold-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/policies/student" className="hover:text-gold-400">
                Student Policy
              </Link>
            </li>
            {portal && (
              <li>
                <Link href={portal.href} className="hover:text-gold-400" {...(portal.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  Student Portal
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
