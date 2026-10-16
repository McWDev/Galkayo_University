import Link from "next/link";
import { ArrowRight, BookMarked, ChevronRight, FlaskConical, Library, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const cards: { icon: LucideIcon; tag: string; title: string; text: string; href: string }[] = [
  { icon: FlaskConical, tag: "Research", title: "Research Projects", text: "Research activity and projects at the university.", href: "/research/projects" },
  { icon: BookMarked, tag: "Research", title: "Research Policy & Ethics", text: "Policies and ethical clearance for researchers.", href: "/research/policy" },
  { icon: Library, tag: "Library", title: "Our Library", text: "Library services, opening hours and resources.", href: "/library" },
  { icon: Presentation, tag: "Events", title: "Conferences & Seminars", text: "Academic events, seminars and conferences.", href: "/events" },
];

export function ResearchBand() {
  return (
    <section aria-labelledby="research-title" className="on-dark relative isolate overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 size-96 rounded-full border border-gold-400/20" />

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">
              <FlaskConical aria-hidden="true" size={18} /> Research & Library
            </p>
            <h2 id="research-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Discover Research, Knowledge and Learning Resources
            </h2>
            <p className="mt-4 text-lg text-on-dark">Explore research activity, publications, and library services at Galkayo University.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/research" variant="gold">
              Explore Research <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink href="/library" variant="outline-light">
              Visit the Library
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, tag, title, text, href }) => (
            <li key={title} className="group relative rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-xs font-semibold text-gold-400">{tag}</span>
                <Icon aria-hidden="true" size={22} className="text-on-dark-muted" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                <Link href={href} className="after:absolute after:inset-0 after:rounded-[var(--radius-card)]">
                  {title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-on-dark-muted">{text}</p>
              <ArrowRight aria-hidden="true" size={18} className="mt-4 text-gold-400 transition-transform group-hover:translate-x-1" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
