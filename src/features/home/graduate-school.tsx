import Link from "next/link";
import { ChevronRight, Clock, GraduationCap, MonitorSmartphone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import type { HomeContent } from "./data";

export function GraduateSchool({ gs }: { gs: HomeContent["graduateSchool"] }) {
  return (
    <section aria-labelledby="graduate-title" className="on-dark relative isolate overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-50" />
      <div aria-hidden="true" className="absolute -top-32 -right-32 -z-10 size-96 rounded-full border border-gold-400/20" />

      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">
              <GraduationCap aria-hidden="true" size={18} /> <T>{gs.eyebrow}</T>
            </p>
            <h2 id="graduate-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              <T>{gs.titleLine1}</T>
              <br />
              <T>{gs.titleLine2}</T>
            </h2>
            <p className="mt-4 text-lg text-on-dark">
              <T>{gs.intro}</T>
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-on-dark-muted">
              <T>{gs.partnersLabel}</T>
              {gs.partners.map((p, i) => (
                <span key={`${p}-${i}`} className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-400">
                  <T>{p}</T>
                </span>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <ButtonLink href={gs.primaryCta.href} variant="gold">
              <T>{gs.primaryCta.label}</T> <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink href={gs.secondaryCta.href} variant="outline-light">
              <T>{gs.secondaryCta.label}</T>
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gs.programmes.map((prog) => (
            <li key={prog.name} className="group relative rounded-[var(--radius-card)] bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
              <div className="flex gap-2">
                <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-xs font-semibold text-gold-400">
                  <T>{prog.level}</T>
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-on-dark">
                  <T>{prog.partner}</T>
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-bold text-white">
                <Link href={prog.href} className="after:absolute after:inset-0 after:rounded-[var(--radius-card)]">
                  <T>{prog.name}</T>
                </Link>
              </h3>
              <p className="mt-4 flex flex-wrap gap-4 text-sm text-on-dark-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock aria-hidden="true" size={14} /> <T>{prog.duration}</T>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MonitorSmartphone aria-hidden="true" size={14} /> <T>{prog.mode}</T>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
