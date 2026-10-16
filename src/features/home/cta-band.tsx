import { ArrowRight } from "lucide-react";
import { primaryCta } from "@/config/navigation";
import { ButtonLink } from "@/components/ui/button-link";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-gold-400">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="cta-title" className="text-3xl font-bold text-brand-900 sm:text-4xl">
            Ready to Shape Your Future?
          </h2>
          <p className="mt-2 max-w-xl text-brand-900/85">
            Take the first step toward your degree at Galkayo University. Explore programmes and start your application.
          </p>
        </div>
        <ButtonLink href={primaryCta.href} variant="dark" size="lg" className="shrink-0 self-start md:self-auto">
          {primaryCta.label} <ArrowRight aria-hidden="true" size={18} />
        </ButtonLink>
      </div>
    </section>
  );
}
