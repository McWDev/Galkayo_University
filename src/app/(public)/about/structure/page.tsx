import { aboutContent } from "@/content/about";
import { T } from "@/components/ui/editable-text";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactStrip } from "@/components/page/contact-strip";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";
import { heroFor, metadataFor, siblingCardsFor } from "@/features/pages/registry-helpers";

const PATH = "/about/structure";
export const metadata = metadataFor(PATH);

/** Organisation chart as a top-down list of levels (accessible as nested lists, visual as a chart). */
export default function StructurePage() {
  const structure = aboutContent.structure;

  return (
    <>
      <PageHero {...heroFor(PATH)} />
      <section aria-labelledby="structure-title" className="bg-page py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="structure-title" eyebrow={structure.eyebrow} title={structure.title} intro={structure.intro} />

          <ol className="mx-auto mt-14 max-w-5xl">
            {structure.levels.map((level, i) => {
              const top = i < 2;
              return (
                <li key={level.label} className="relative flex flex-col items-center">
                  {i > 0 && <span aria-hidden="true" className="h-8 w-0.5 bg-gold-400" />}
                  <h3 className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold-ink uppercase">{level.label}</h3>
                  <ul className="flex w-full flex-wrap justify-center gap-3">
                    {level.units.map((unit) => (
                      <li
                        key={unit}
                        className={`rounded-xl px-5 py-3 text-center text-sm font-semibold shadow-[var(--shadow-card)] ${
                          top ? "on-dark min-w-56 bg-brand-900 text-white ring-2 ring-gold-400" : "min-w-44 border border-line bg-surface text-brand-900"
                        }`}
                      >
                        <T>{unit}</T>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <RelatedPages items={siblingCardsFor(PATH)} />
      <ContactStrip />
    </>
  );
}
