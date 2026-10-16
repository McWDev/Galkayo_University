import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";

export function FacultiesSection() {
  const faculties = homeContent.faculties;

  return (
    <section aria-labelledby="faculties-title" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="faculties-title" eyebrow={faculties.eyebrow} title={faculties.title} intro={faculties.intro} />

        <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {faculties.items.map((faculty) => (
            <li
              key={faculty.name}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
            >
              <div className="relative">
                {faculty.image ? (
                  <Image src={faculty.image} alt="" width={800} height={400} className="h-48 w-full object-cover" />
                ) : (
                  <ImagePlaceholder label="Faculty photo" className="h-48" />
                )}
                <span className="absolute top-3 right-3 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-brand-900">
                  Est. <T>{faculty.established}</T>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">
                  <Link href={faculty.href} className="after:absolute after:inset-0">
                    <T>{faculty.name}</T>
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                  <T>{faculty.summary}</T>
                </p>
                <span aria-hidden="true" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href={faculties.cta.href}>
            <T>{faculties.cta.label}</T> <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
