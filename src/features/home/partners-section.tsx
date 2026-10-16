import { Building2 } from "lucide-react";
import { ExampleBadge } from "@/components/ui/placeholders";
import { homeContent } from "./content";

/** Partnerships grid. Only approved, current partners may be listed (sitemap: "Partners (only approved current partners)"). */
export function PartnersSection() {
  const partners = homeContent.partners;
  if (partners.length === 0) return null;

  return (
    <section aria-labelledby="partners-title" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-4 text-sm font-semibold tracking-[0.25em] text-gold-ink uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-line" />
            Partnerships & Linkages
            <span aria-hidden="true" className="h-px w-10 bg-line" />
          </p>
          <h2 id="partners-title" className="mt-3 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            Our Partnerships
          </h2>
          <p className="mt-4 text-lg text-muted">Institutions and organisations Galkayo University works with.</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.name} className="relative flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-surface p-7 text-center shadow-[var(--shadow-card)]">
              {partner.example && <ExampleBadge className="absolute top-3 right-3" />}
              <span className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Building2 aria-hidden="true" size={28} />
              </span>
              <h3 className="mt-4 text-lg font-bold">{partner.name}</h3>
              <p className="text-sm text-muted">{partner.country}</p>
              <span className="mt-3 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">{partner.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
