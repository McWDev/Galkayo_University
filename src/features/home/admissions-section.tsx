import Link from "next/link";
import { ArrowRight, ClipboardCheck, GraduationCap, Mail, Phone, Search, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";
import { SectionHeading } from "@/components/ui/section-heading";

const stepIcons: LucideIcon[] = [Search, ClipboardCheck, Send, GraduationCap];

export function AdmissionsSection() {
  const admissions = homeContent.admissions;
  const { info } = admissions;
  const { contact } = siteConfig;

  const contacts = [
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref ? `tel:${contact.phoneHref}` : null },
    ...info.extraContacts.slice(0, 1).map((c) => ({ icon: Phone, ...c })),
    { icon: Mail, label: "Email", value: contact.email, href: contact.email ? `mailto:${contact.email}` : null },
    ...info.extraContacts.slice(1).map((c) => ({ icon: Mail, ...c })),
  ];

  return (
    <section aria-labelledby="admissions-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading id="admissions-title" eyebrow={admissions.eyebrow} title={admissions.title} intro={admissions.intro} />

        <div className="mt-14 grid gap-7 lg:grid-cols-[2fr_1fr]">
          <ol className="grid min-w-0 gap-6 sm:grid-cols-2">
            {admissions.steps.map(({ title, text, href }, index) => {
              const Icon = stepIcons[index % stepIcons.length]!;
              return (
                <li
                  key={title}
                  className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-pop)]"
                >
                  <span aria-hidden="true" className="absolute -top-3 right-3 font-display text-8xl font-extrabold text-brand-50 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon aria-hidden="true" size={24} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold">
                    <span className="sr-only">Step {index + 1}: </span>
                    <Link href={href} className="after:absolute after:inset-0">
                      <T>{title}</T>
                    </Link>
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">
                    <T>{text}</T>
                  </p>
                  <span aria-hidden="true" className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                    Learn more <ArrowRight size={16} />
                  </span>
                </li>
              );
            })}
          </ol>

          <aside aria-labelledby="admissions-info-title" className="on-dark flex min-w-0 flex-col rounded-[var(--radius-card)] bg-brand-900 p-6 text-on-dark sm:p-8 shadow-[var(--shadow-pop)]">
            <h3 id="admissions-info-title" className="text-2xl font-bold text-white">
              <T>{info.title}</T>
            </h3>
            <p className="mt-1 text-sm text-on-dark-muted">
              <T>{info.subtitle}</T>
            </p>

            <ul className="mt-7 space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-on-dark-muted">{label}</span>
                    <span className="block font-semibold [overflow-wrap:anywhere] text-white">
                      {value && href ? (
                        <a href={href} className="hover:text-gold-400">
                          {value}
                        </a>
                      ) : (
                        value && <T>{value}</T>
                      )}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold tracking-wider text-gold-400 uppercase">
                <T>{info.scholarshipsTitle}</T>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-on-dark">
                <T>{info.scholarshipsText}</T>
              </p>
              <Link href={info.scholarshipsCta.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-400 hover:underline">
                <T>{info.scholarshipsCta.label}</T> <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <ButtonLink href={info.applyCta.href} variant="gold" size="lg" className="mt-8 w-full">
              <T>{info.applyCta.label}</T> <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
