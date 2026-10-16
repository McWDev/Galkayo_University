import Image from "next/image";
import {
  Award,
  BookOpen,
  ChevronRight,
  CircleCheck,
  Eye,
  FlaskConical,
  HandHeart,
  Lightbulb,
  Library,
  MapPin,
  Monitor,
  Presentation,
  Scale,
  ShieldCheck,
  Target,
  Users,
  Wifi,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";
import type { aboutContent, FacilityIcon, ValueIcon } from "@/content/about";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { ImagePlaceholder } from "@/components/ui/placeholders";
import { SectionHeading } from "@/components/ui/section-heading";

type Overview = (typeof aboutContent)["overview"];

const valueIcons: Record<ValueIcon, LucideIcon> = {
  excellence: Award,
  integrity: ShieldCheck,
  community: HandHeart,
  innovation: Lightbulb,
  inclusion: Users,
  accountability: Scale,
};

const facilityIcons: Record<FacilityIcon, LucideIcon> = {
  library: Library,
  computer: Monitor,
  lab: FlaskConical,
  classroom: Presentation,
  wifi: Wifi,
  sports: Dumbbell,
};

export function HistorySection({ history }: { history: Overview["history"] }) {
  return (
    <section id="history" aria-labelledby="history-title" className="scroll-mt-28 bg-page py-20 sm:py-24">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="history-title" eyebrow={history.eyebrow} title={history.title} align="left" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {history.paragraphs.map((p, i) => (
              <p key={i}>
                <T>{p}</T>
              </p>
            ))}
          </div>
          {history.image ? (
            <Image src={history.image} alt="Galkayo University" width={1200} height={800} className="mt-8 aspect-[3/2] rounded-[var(--radius-card)] object-cover" />
          ) : (
            <ImagePlaceholder label="Historic photo" className="mt-8 aspect-[3/2] rounded-[var(--radius-card)]" />
          )}
        </div>

        <ol className="relative space-y-8 border-l-2 border-gold-400/60 pl-8 lg:mt-24">
          {history.timeline.map((item, i) => (
            <li key={i} className="relative">
              <span aria-hidden="true" className="absolute top-1 -left-[2.6rem] flex size-5 items-center justify-center rounded-full bg-gold-400 ring-4 ring-page" />
              <p className="font-display text-2xl font-extrabold text-brand-800">
                <T>{item.year}</T>
              </p>
              <h3 className="mt-1 text-lg font-bold">
                <T>{item.title}</T>
              </h3>
              <p className="mt-1 text-muted">
                <T>{item.text}</T>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PurposeSection({ purpose, objectives }: { purpose: Overview["purpose"]; objectives: string[] }) {
  const cards: { icon: LucideIcon; title: string; text: string }[] = [
    { icon: Eye, title: "Our Vision", text: purpose.vision },
    { icon: Target, title: "Our Mission", text: purpose.mission },
  ];
  return (
    <section id="mission" aria-labelledby="mission-title" className="scroll-mt-28 bg-surface py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="mission-title" eyebrow={purpose.eyebrow} title={purpose.title} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="on-dark rounded-[var(--radius-card)] bg-brand-900 p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-gold-400 text-brand-900">
                <Icon aria-hidden="true" size={24} />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-on-dark">
                <T>{text}</T>
              </p>
            </div>
          ))}
          <div className="rounded-[var(--radius-card)] border border-line bg-page p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <BookOpen aria-hidden="true" size={24} />
            </span>
            <h3 className="mt-5 text-2xl font-bold">
              <T>{purpose.objectivesTitle}</T>
            </h3>
            <ul className="mt-4 space-y-3">
              {objectives.map((o) => (
                <li key={o} className="flex items-start gap-3 text-muted">
                  <CircleCheck aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-brand-600" />
                  <span>
                    <T>{o}</T>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuesSection({ values }: { values: Overview["values"] }) {
  return (
    <section id="values" aria-labelledby="values-title" className="scroll-mt-28 bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="values-title" eyebrow={values.eyebrow} title={values.title} />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((v) => {
            const Icon = valueIcons[v.icon];
            return (
              <li key={v.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)]">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <h3 className="mt-5 text-xl font-bold">
                  <T>{v.title}</T>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <T>{v.text}</T>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function GovernanceTeaser({ governance }: { governance: Overview["governance"] }) {
  return (
    <section id="governance" aria-labelledby="governance-title" className="on-dark relative isolate scroll-mt-28 overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-50" />
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <SectionHeading id="governance-title" eyebrow={governance.eyebrow} title={governance.title} align="left" inverted />
          <p className="mt-5 text-lg leading-relaxed text-on-dark">
            <T>{governance.text}</T>
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <ButtonLink href={governance.cta.href} variant="gold">
            <T>{governance.cta.label}</T> <ChevronRight aria-hidden="true" size={18} />
          </ButtonLink>
          <ButtonLink href={governance.secondaryCta.href} variant="outline-light">
            <T>{governance.secondaryCta.label}</T>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function CampusesSection({ campuses }: { campuses: Overview["campuses"] }) {
  return (
    <section id="campuses" aria-labelledby="campuses-title" className="scroll-mt-28 bg-surface py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="campuses-title" eyebrow={campuses.eyebrow} title={campuses.title} intro={campuses.intro} />
        <ul className="mt-14 grid gap-7 md:grid-cols-3">
          {campuses.items.map((c, i) => (
            <li key={i} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)]">
              {c.image ? (
                <Image src={c.image} alt="" width={800} height={450} className="aspect-video w-full object-cover" />
              ) : (
                <ImagePlaceholder label="Campus photo" className="aspect-video" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-gold-ink uppercase">
                  <T>{c.type}</T>
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  <T>{c.name}</T>
                </h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin aria-hidden="true" size={15} className="text-brand-600" /> <T>{c.location}</T>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <T>{c.text}</T>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FacilitiesSection({ facilities }: { facilities: Overview["facilities"] }) {
  return (
    <section id="facilities" aria-labelledby="facilities-title" className="scroll-mt-28 bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="facilities-title" eyebrow={facilities.eyebrow} title={facilities.title} intro={facilities.intro} />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.items.map((f) => {
            const Icon = facilityIcons[f.icon];
            return (
              <li key={f.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-7 text-center shadow-[var(--shadow-card)]">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-900 text-gold-400">
                  <Icon aria-hidden="true" size={26} />
                </span>
                <h3 className="mt-5 text-lg font-bold">
                  <T>{f.title}</T>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <T>{f.text}</T>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** In-page jump links to the About Us sections. */
export function AboutJumpLinks() {
  const links = [
    ["history", "History"],
    ["mission", "Vision & Mission"],
    ["values", "Core Values"],
    ["governance", "Governance"],
    ["campuses", "Campuses"],
    ["facilities", "Facilities"],
  ] as const;
  return (
    <nav aria-label="On this page" className="sticky top-[4.5rem] z-30 border-b border-line bg-surface/95 backdrop-blur">
      <ul className="container-page scrollbar-none flex gap-1 overflow-x-auto py-2">
        {links.map(([id, label]) => (
          <li key={id} className="shrink-0">
            <a href={`#${id}`} className="block rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-brand-800 hover:bg-brand-50">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
