import Image from "next/image";
import { ChevronRight, GraduationCap } from "lucide-react";
import { primaryCta } from "@/config/navigation";
import { ButtonLink } from "@/components/ui/button-link";

/**
 * Full-height hero. Uses a branded background until GU supplies permissioned campus photography
 * (PRD: avoid stock images that misrepresent GU). Hero copy is provisional and must be approved by GU.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-brand-900">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950" />
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="absolute -right-40 -bottom-40 -z-10 size-[42rem] rounded-full border border-gold-400/15" />
      <div aria-hidden="true" className="absolute -right-20 -bottom-20 -z-10 size-[30rem] rounded-full border border-gold-400/20" />
      <div aria-hidden="true" className="absolute -top-24 -left-24 -z-10 size-72 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute top-1/2 right-[6%] -z-10 hidden -translate-y-1/2 opacity-[0.07] lg:block">
        <Image src="/brand/gu.png" alt="" width={447} height={447} className="w-[26rem] grayscale invert" />
      </div>

      <div className="container-page flex min-h-[calc(100svh-7.25rem)] flex-col justify-center py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white">
            <GraduationCap aria-hidden="true" size={18} className="text-gold-400" />
            Galkayo University &middot; Official Website
          </p>

          <h1 id="hero-title" className="mt-7 font-display leading-[0.98] font-extrabold">
            <span className="block text-4xl tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">Shaping Tomorrow&apos;s</span>
            <span className="mt-2 block text-4xl text-gold-400 sm:text-6xl lg:text-7xl">Leaders at Galkayo University</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-dark sm:text-xl">
            Discover our faculties, academic programmes and admissions guidance, and take your next step in higher
            education.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} variant="gold" size="lg">
              {primaryCta.label} <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
            <ButtonLink href="/academics/programmes" variant="outline-light" size="lg">
              Explore Programmes <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </div>

        {/* Scroll cue */}
        <div aria-hidden="true" className="mt-16 flex justify-center">
          <span className="flex h-9 w-6 justify-center rounded-full border-2 border-white/50 pt-1.5">
            <span className="h-2 w-1 animate-bounce rounded-full bg-gold-400" />
          </span>
        </div>
      </div>
    </section>
  );
}
