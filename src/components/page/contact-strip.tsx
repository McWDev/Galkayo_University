import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/** "Have a question?" band with the university's approved email and phone. */
export function ContactStrip({ heading = "Have a question?" }: { heading?: string }) {
  const { email, phone, phoneHref } = siteConfig.contact;
  if (!email && !phone) return null;

  return (
    <section aria-labelledby="contact-strip-title" className="bg-brand-50">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="contact-strip-title" className="text-2xl font-bold">
            {heading}
          </h2>
          <p className="mt-1 text-muted">Our team is happy to help. Get in touch by email or phone.</p>
        </div>
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {email && (
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline">
                <Mail aria-hidden="true" size={18} className="text-brand-600" /> {email}
              </a>
            </li>
          )}
          {phone && phoneHref && (
            <li>
              <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 font-semibold text-brand-800 hover:underline">
                <Phone aria-hidden="true" size={18} className="text-brand-600" /> {phone}
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
