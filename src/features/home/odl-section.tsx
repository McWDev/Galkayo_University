import { ArrowRight, BookOpen, Building2, CalendarRange, MonitorSmartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { SectionHeading } from "@/components/ui/section-heading";
import type { HomeContent } from "./data";

const statIcons: LucideIcon[] = [BookOpen, Building2, MonitorSmartphone, CalendarRange];

export function OdlSection({ odl }: { odl: HomeContent["odl"] }) {
  return (
    <section aria-labelledby="odl-title" className="bg-surface py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="odl-title" eyebrow={odl.eyebrow} title={odl.title} intro={odl.intro} align="left" />

        <ul className="mt-8 flex flex-wrap gap-3">
          {odl.stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length]!;
            return (
              <li key={stat.label} className="inline-flex items-center gap-2.5 rounded-full border border-line bg-page px-5 py-2.5">
                <Icon aria-hidden="true" size={18} className="text-brand-600" />
                <span className="font-display text-lg font-bold text-brand-900">
                  <T>{stat.value}</T>
                </span>
                <span className="text-sm text-muted">
                  <T>{stat.label}</T>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          <div className="on-dark flex flex-col rounded-[var(--radius-card)] bg-brand-900 p-8 sm:p-10">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">
              <MonitorSmartphone aria-hidden="true" size={18} /> <T>{odl.card.eyebrow}</T>
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              <T>{odl.card.title}</T>
            </h3>
            <p className="mt-4 leading-relaxed text-on-dark">
              <T>{odl.card.text}</T>
            </p>
            <p className="mt-3 text-sm text-on-dark-muted">
              <T>{odl.card.examples}</T>
            </p>
            <ButtonLink href={odl.card.cta.href} variant="gold" className="mt-8 self-start">
              <T>{odl.card.cta.label}</T> <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>

          <div className="flex flex-col rounded-[var(--radius-card)] border-2 border-brand-600/40 bg-brand-50 p-8 sm:p-10">
            <h3 className="text-2xl font-bold sm:text-3xl">
              <T>{odl.steps.title}</T>
            </h3>
            <ol className="mt-6 space-y-4">
              {odl.steps.items.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-800 text-sm font-bold text-white">{i + 1}</span>
                  <span className="pt-0.5 text-ink">
                    <T>{step}</T>
                  </span>
                </li>
              ))}
            </ol>
            <ButtonLink href={odl.steps.cta.href} variant="dark" className="mt-8 self-start">
              <T>{odl.steps.cta.label}</T> <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
