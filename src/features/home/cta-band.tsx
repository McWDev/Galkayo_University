import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/editable-text";

export function CtaBand() {
  const cta = homeContent.cta;

  return (
    <section aria-labelledby="cta-title" className="bg-gold-400">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="cta-title" className="text-3xl font-bold text-brand-900 sm:text-4xl">
            <T>{cta.title}</T>
          </h2>
          <p className="mt-2 max-w-xl text-brand-900/85">
            <T>{cta.text}</T>
          </p>
        </div>
        <ButtonLink href={cta.button.href} variant="dark" size="lg" className="shrink-0 self-start md:self-auto">
          <T>{cta.button.label}</T> <ArrowRight aria-hidden="true" size={18} />
        </ButtonLink>
      </div>
    </section>
  );
}
