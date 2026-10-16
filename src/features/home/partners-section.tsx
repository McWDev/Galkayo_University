import Link from "next/link";
import { ArrowRight, Building2, Globe2 } from "lucide-react";
import { T } from "@/components/ui/editable-text";
import type { HomeContent } from "./data";

export function PartnersSection({ partners }: { partners: HomeContent["partners"] }) {
  if (partners.items.length === 0) return null;

  return (
    <section aria-labelledby="partners-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-4 text-sm font-semibold tracking-[0.25em] text-gold-ink uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-line" />
            <T>{partners.eyebrow}</T>
            <span aria-hidden="true" className="h-px w-10 bg-line" />
          </p>
          <h2 id="partners-title" className="mt-3 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            <T>{partners.title}</T>
          </h2>
          <p className="mt-4 text-lg text-muted">
            <T>{partners.intro}</T>
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.items.map((partner, i) => (
            <li key={`${partner.name}-${i}`} className="flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-surface p-7 text-center shadow-[var(--shadow-card)]">
              <span className="flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Building2 aria-hidden="true" size={28} />
              </span>
              <h3 className="mt-4 text-lg font-bold">
                <T>{partner.name}</T>
              </h3>
              <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                <Globe2 aria-hidden="true" size={14} /> <T>{partner.country}</T>
              </p>
              <span className="mt-3 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                <T>{partner.type}</T>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href={partners.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800"
          >
            <T>{partners.cta.label}</T> <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
