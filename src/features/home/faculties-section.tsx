import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ExampleBadge, ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "./content";

export function FacultiesSection() {
  const faculties = homeContent.faculties;

  return (
    <section aria-labelledby="faculties-title" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="faculties-title"
          eyebrow="Our Academics"
          title="Faculties & Programmes"
          intro="Explore the faculties and academic programmes offered at Galkayo University."
        />

        {faculties.length > 0 ? (
          <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {faculties.map((faculty) => (
              <li
                key={faculty.name}
                className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
              >
                <div className="relative">
                  <ImagePlaceholder label="Faculty photo pending" className="h-48" />
                  {faculty.example && <ExampleBadge className="absolute top-3 right-3" />}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">
                    <Link href={faculty.href} className="after:absolute after:inset-0">
                      {faculty.name}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{faculty.summary}</p>
                  <span aria-hidden="true" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-14 max-w-xl rounded-[var(--radius-card)] border border-dashed border-line bg-page p-10 text-center">
            <BookOpen aria-hidden="true" size={36} className="mx-auto text-brand-600" />
            <p className="mt-4 font-semibold text-brand-900">Faculty information will be published soon.</p>
            <p className="mt-1 text-sm text-muted">Approved faculties and programmes will appear here.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <ButtonLink href="/academics/faculties">
            View All Faculties <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
