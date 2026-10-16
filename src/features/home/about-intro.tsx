import Link from "next/link";
import { ArrowRight, ChevronRight, CircleCheck, HeartHandshake, Landmark, Library } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ImagePlaceholder, PendingText } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  { icon: Landmark, title: "Our History", text: "Learn how Galkayo University began and how it has grown over the years.", href: "/about/history" },
  { icon: Library, title: "Academic Excellence", text: "Explore the faculties, departments and programmes that make up university life.", href: "/academics" },
  { icon: HeartHandshake, title: "Community Engagement", text: "See how the university works with the community it serves.", href: "/about/mission-vision-values" },
];

export function AboutIntro() {
  return (
    <section aria-labelledby="about-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="Who We Are" title="Welcome to Galkayo University" />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div aria-hidden="true" className="absolute -top-6 -left-6 size-24 rounded-full border-4 border-gold-400/40" />
            <ImagePlaceholder label="Campus photo pending" className="aspect-[4/3] rounded-[var(--radius-card)] shadow-[var(--shadow-pop)]" />
            <div className="on-dark absolute -right-3 -bottom-6 rounded-[var(--radius-card)] bg-brand-900 px-6 py-4 text-center shadow-[var(--shadow-pop)] sm:right-6">
              <p className="font-display text-3xl font-extrabold text-gold-400">Est. &mdash;</p>
              <p className="text-sm text-on-dark">Founding year pending</p>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted">
              <PendingText>
                The approved introduction to Galkayo University, including its founding, location, mission and character,
                will be published here once provided by the university.
              </PendingText>
            </p>

            <h3 className="mt-8 text-xl font-bold">University Objectives</h3>
            <ul className="mt-4 space-y-3">
              {["First approved objective", "Second approved objective", "Third approved objective"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <CircleCheck aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <PendingText>{item} will appear here.</PendingText>
                </li>
              ))}
            </ul>

            <ButtonLink href="/about" className="mt-9">
              Learn More About GU <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-20 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text, href }) => (
            <li key={title} className="group relative rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-pop)]">
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon aria-hidden="true" size={24} />
              </span>
              <h3 className="mt-5 text-xl font-bold">
                <Link href={href} className="after:absolute after:inset-0 after:rounded-[var(--radius-card)]">
                  {title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                Learn more <ArrowRight size={16} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
