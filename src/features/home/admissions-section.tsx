import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, Mail, MessageSquare, Phone, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";

const steps: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  { icon: Search, title: "Explore Programmes", text: "Browse faculties and programmes to find the right fit for your goals.", href: "/academics/programmes" },
  { icon: ClipboardCheck, title: "Check Requirements", text: "Review entry requirements, required documents and approved fee information.", href: "/admissions/requirements" },
  { icon: FileText, title: "Prepare Your Application", text: "Follow the official application instructions published by the admissions office.", href: "/admissions/apply" },
  { icon: MessageSquare, title: "Contact Admissions", text: "Have questions? The admissions team can guide you through the process.", href: "/admissions/contact" },
];

export function AdmissionsSection() {
  const { contact } = siteConfig;

  return (
    <section aria-labelledby="admissions-title" className="bg-page py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          id="admissions-title"
          eyebrow="Admissions"
          title="How to Apply"
          intro="Joining Galkayo University starts with four clear steps."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-[2fr_1fr]">
          <ol className="grid gap-6 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, text, href }, index) => (
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
                    {title}
                  </Link>
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{text}</p>
                <span aria-hidden="true" className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2">
                  Learn more <ArrowRight size={16} />
                </span>
              </li>
            ))}
          </ol>

          <aside aria-labelledby="admissions-info-title" className="on-dark flex flex-col rounded-[var(--radius-card)] bg-brand-900 p-8 text-on-dark shadow-[var(--shadow-pop)]">
            <h3 id="admissions-info-title" className="text-2xl font-bold text-white">
              Admissions Info
            </h3>
            <p className="mt-1 text-sm text-on-dark-muted">Get in touch with our team</p>

            <ul className="mt-7 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: contact.phone },
                { icon: Mail, label: "Email", value: contact.email },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-400">
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span>
                    <span className="block text-xs text-on-dark-muted">{label}</span>
                    <span className="block font-semibold text-white">{value ?? <span className="font-normal italic text-on-dark-muted">Pending approval</span>}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold tracking-wider text-gold-400 uppercase">Scholarships</p>
              <p className="mt-2 text-sm leading-relaxed text-on-dark">
                Information about scholarships and financial aid is published once approved by the university.
              </p>
              <Link href="/admissions/scholarships" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-400 hover:underline">
                View Scholarships <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>

            <ButtonLink href={primaryCta.href} variant="gold" size="lg" className="mt-8 w-full">
              {primaryCta.label} <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </aside>
        </div>
      </div>
    </section>
  );
}
