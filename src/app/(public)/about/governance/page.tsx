import { Landmark, ShieldCheck } from "lucide-react";
import { aboutContent } from "@/content/about";
import { T } from "@/components/ui/editable-text";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactStrip } from "@/components/page/contact-strip";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";
import { heroFor, metadataFor, siblingCardsFor } from "@/features/pages/registry-helpers";

const PATH = "/about/governance";
export const metadata = metadataFor(PATH);

export default function GovernancePage() {
  const { framework, bodies, principles } = aboutContent.governance;

  return (
    <>
      <PageHero {...heroFor(PATH)} />

      <section aria-labelledby="framework-title" className="bg-surface py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="framework-title" eyebrow={framework.eyebrow} title={framework.title} />
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted">
            <T>{framework.text}</T>
          </p>
        </div>
      </section>

      <section aria-labelledby="bodies-title" className="bg-page py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="bodies-title" eyebrow={bodies.eyebrow} title={bodies.title} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {bodies.items.map((b, i) => (
              <li key={i} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-gold-400">
                  <Landmark aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold">
                    <T>{b.name}</T>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    <T>{b.text}</T>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="on-dark relative isolate overflow-hidden bg-brand-900 py-20 sm:py-24">
        <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-50" />
        <div className="container-page">
          <SectionHeading id="principles-title" eyebrow={principles.eyebrow} title={principles.title} inverted />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.items.map((p) => (
              <li key={p.title} className="rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10">
                <ShieldCheck aria-hidden="true" size={26} className="text-gold-400" />
                <h3 className="mt-4 text-lg font-bold text-white">
                  <T>{p.title}</T>
                </h3>
                <p className="mt-2 text-sm text-on-dark">
                  <T>{p.text}</T>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedPages items={siblingCardsFor(PATH)} />
      <ContactStrip />
    </>
  );
}
