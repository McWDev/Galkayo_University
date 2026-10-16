"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ExampleBadge } from "@/components/ui/placeholders";
import type { Testimonial } from "./content";

/** Alumni testimonials carousel. Rendered only when approved (or dev example) testimonials exist. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const current = items[index % items.length]!;
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);
  const initial = (name: string) => name.trim().charAt(name.trim().length - 1).toUpperCase() || "G";

  return (
    <section aria-labelledby="testimonials-title" className="on-dark relative isolate overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-40" />
      <div className="container-page text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">Alumni Voices</p>
        <h2 id="testimonials-title" className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
          What Our Graduates Say
        </h2>
        <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gold-400" />

        <figure className="mx-auto mt-12 max-w-3xl" aria-live="polite">
          <Quote aria-hidden="true" size={48} className="mx-auto text-gold-400/60" />
          {current.example && <ExampleBadge className="mt-4" />}
          <blockquote className="mt-5 text-xl leading-relaxed text-white italic sm:text-2xl">&ldquo;{current.quote}&rdquo;</blockquote>
          <figcaption className="mt-8 flex flex-col items-center">
            <span aria-hidden="true" className="flex size-20 items-center justify-center rounded-full bg-brand-700 font-display text-2xl font-bold text-white ring-4 ring-gold-400">
              {initial(current.name)}
            </span>
            <span className="mt-3 text-lg font-bold text-white">{current.name}</span>
            <span className="text-sm text-gold-400">{current.role}</span>
          </figcaption>
        </figure>

        {items.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <div className="flex items-center gap-2">
              {items.map((t, i) => (
                <button
                  key={`${t.name}-${i}`}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-gold-400" : "w-2 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
