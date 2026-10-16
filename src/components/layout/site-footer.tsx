import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { footerLinks, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Logo } from "./logo";

function ContactRow({ icon: Icon, value, label }: { icon: LucideIcon; value: string | null; label: string }) {
  return (
    <li className="flex items-start gap-3">
      <Icon aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-gold-400" />
      <span>
        <span className="sr-only">{label}: </span>
        {value ?? <span className="text-on-dark-muted italic">{label} pending approval</span>}
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
  const { contact } = siteConfig;

  return (
    <footer className="on-dark mt-auto bg-brand-950 text-on-dark">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="space-y-6">
          <Logo size={56} inverted />
          <p className="max-w-xs text-sm leading-relaxed text-on-dark-muted">
            The official website of Galkayo University. University information is published here once approved.
          </p>
          <ul className="space-y-3 text-sm">
            <ContactRow icon={MapPin} label="Address" value={contact.address} />
            <ContactRow icon={Phone} label="Phone" value={contact.phone} />
            <ContactRow icon={Mail} label="Email" value={contact.email} />
            <ContactRow icon={Clock} label="Office hours" value={contact.officeHours} />
          </ul>
        </div>

        {footerLinks.map((group) => {
          const id = `footer-${group.heading.toLowerCase().replace(/\W+/g, "-")}`;
          return (
            <nav key={group.heading} aria-labelledby={id}>
              <FooterHeading id={id}>{group.heading}</FooterHeading>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="group inline-flex items-center gap-2 text-on-dark hover:text-gold-400">
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
          <FooterHeading id="footer-get-in-touch">Get in Touch</FooterHeading>
          <p className="text-sm leading-relaxed text-on-dark-muted">
            Questions about studying at Galkayo University? Send us a message and the right office will respond.
          </p>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:underline">
            Contact us <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <div className="mt-6 rounded-[var(--radius-card)] bg-white/5 p-5 text-center ring-1 ring-white/10">
            <p className="text-sm text-on-dark">Ready to start your academic journey?</p>
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
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/resources/policies" className="hover:text-gold-400">
                Policies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
