import Image from "next/image";
import { ChevronRight, CircleCheck, HeartHandshake, Landmark, Library } from "lucide-react";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";

const highlightIcons = [Landmark, Library, HeartHandshake];

export function AboutIntro() {
  const about = homeContent.about;

  return (
    <section aria-labelledby="about-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div aria-hidden="true" className="absolute -top-6 -left-6 size-24 rounded-full border-4 border-gold-400/40" />
            {about.image ? (
              <Image src={about.image} alt="Galkayo University campus" width={1200} height={900} className="aspect-[4/3] rounded-[var(--radius-card)] object-cover shadow-[var(--shadow-pop)]" />
            ) : (
              <ImagePlaceholder label="Campus photo" className="aspect-[4/3] rounded-[var(--radius-card)] shadow-[var(--shadow-pop)]" />
            )}
            <div className="on-dark absolute -right-3 -bottom-6 rounded-[var(--radius-card)] bg-brand-900 px-7 py-4 text-center shadow-[var(--shadow-pop)] sm:right-6">
              <p className="font-display text-4xl font-extrabold text-gold-400">
                <T>{about.foundedValue}</T>
              </p>
              <p className="text-sm text-on-dark">
                <T>{about.foundedLabel}</T>
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((p, i) => (
                <p key={i}>
                  <T>{p}</T>
                </p>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-bold">
              <T>{about.objectivesTitle}</T>
            </h3>
            <ul className="mt-4 space-y-3">
              {about.objectives.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <CircleCheck aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>
                    <T>{item}</T>
                  </span>
                </li>
              ))}
            </ul>

            <ButtonLink href={about.cta.href} className="mt-9">
              <T>{about.cta.label}</T> <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-20 grid gap-6 md:grid-cols-3">
          {about.highlights.map(({ title, text }, i) => {
            const Icon = highlightIcons[i % highlightIcons.length]!;
            return (
              <li key={title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)]">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3 className="mt-5 text-xl font-bold">
                  <T>{title}</T>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <T>{text}</T>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
