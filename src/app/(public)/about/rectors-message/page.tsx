import Image from "next/image";
import { Quote } from "lucide-react";
import { aboutContent } from "@/content/about";
import { T } from "@/components/ui/editable-text";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactStrip } from "@/components/page/contact-strip";
import { PageHero } from "@/components/page/page-hero";
import { RelatedPages } from "@/components/page/related-pages";
import { heroFor, metadataFor, siblingCardsFor } from "@/features/pages/registry-helpers";

const PATH = "/about/rectors-message";
export const metadata = metadataFor(PATH);

export default function RectorsMessagePage() {
  const rector = aboutContent.rector;

  return (
    <>
      <PageHero {...heroFor(PATH)} />
      <section aria-labelledby="message-title" className="bg-page py-20 sm:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            {rector.image ? (
              <Image src={rector.image} alt={rector.name} width={600} height={750} className="aspect-[4/5] w-full rounded-[var(--radius-card)] object-cover shadow-[var(--shadow-pop)]" />
            ) : (
              <ImagePlaceholder label="Rector's photo" className="aspect-[4/5] rounded-[var(--radius-card)] shadow-[var(--shadow-pop)]" />
            )}
            <figcaption className="on-dark relative z-10 -mt-10 mr-6 ml-6 rounded-[var(--radius-card)] bg-brand-900 px-6 py-4 text-center shadow-[var(--shadow-pop)]">
              <p className="font-display text-lg font-bold text-white">
                <T>{rector.name}</T>
              </p>
              <p className="text-sm text-gold-400">
                <T>{rector.role}</T>
              </p>
            </figcaption>
          </figure>

          <article>
            <SectionHeading id="message-title" eyebrow={rector.eyebrow} title={rector.title} align="left" />
            <Quote aria-hidden="true" size={44} className="mt-8 text-gold-400" />
            <div className="mt-4 space-y-5 text-lg leading-relaxed text-ink">
              {rector.paragraphs.map((p, i) => (
                <p key={i}>
                  <T>{p}</T>
                </p>
              ))}
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <p className="font-display text-xl font-bold text-brand-900">
                <T>{rector.name}</T>
              </p>
              <p className="text-muted">
                <T>{rector.role}</T>
              </p>
            </div>
          </article>
        </div>
      </section>
      <RelatedPages items={siblingCardsFor(PATH)} />
      <ContactStrip />
    </>
  );
}
