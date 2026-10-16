import Link from "next/link";
import { footerLinks } from "@/config/navigation";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark mt-auto border-t-4 border-gold-400 bg-brand-900 text-on-dark">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Logo size={64} inverted />
          {/* Contact details come from approved site settings (Task 014). */}
          <p className="max-w-xs text-sm text-on-dark-muted">
            Official contact details and social media links will be published here once approved by Galkayo University.
          </p>
          <Link href="/contact" className="inline-block font-semibold text-gold-400 hover:underline">
            Contact us
          </Link>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.heading} aria-labelledby={`footer-${group.heading}`}>
            <h2 id={`footer-${group.heading}`} className="mb-4 font-sans text-sm font-semibold tracking-wider text-white uppercase">
              {group.heading}
            </h2>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-on-dark hover:text-gold-400 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-sm text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Galkayo University. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-gold-400 hover:underline">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-400 hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
