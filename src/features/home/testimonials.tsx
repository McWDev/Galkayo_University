"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { T } from "@/components/ui/editable-text";

type Testimonial = { quote: string; name: string; role: string };

function initialOf(name: string) {
  const letter = name.replace(/[^A-Za-z]/g, "").charAt(0);
  return letter ? letter.toUpperCase() : "G";
}

/** Alumni testimonials carousel with avatar selector (reference layout). */
export function Testimonials({ eyebrow, title, items }: { eyebrow: string; title: string; items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const current = items[index % items.length]!;
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <section aria-labelledby="testimonials-title" className="on-dark relative isolate overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 opacity-40" />
      <div className="container-page text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">
          <T>{eyebrow}</T>
        </p>
        <h2 id="testimonials-title" className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem]">
          <T>{title}</T>
        </h2>
        <span aria-hidden="true" className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gold-400" />

        <figure className="mx-auto mt-12 max-w-3xl" aria-live="polite">
          <Quote aria-hidden="true" size={48} className="mx-auto text-gold-400/60" />
          <div aria-hidden="true" className="mt-3 flex justify-center gap-1 text-gold-400">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={16} fill="currentColor" />
            ))}
          </div>
          <blockquote className="mt-5 text-xl leading-relaxed text-white italic sm:text-2xl">
            &ldquo;<T>{current.quote}</T>&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center">
            <span aria-hidden="true" className="flex size-20 items-center justify-center rounded-full bg-brand-700 font-display text-2xl font-bold text-white ring-4 ring-gold-400">
              {initialOf(current.name)}
            </span>
            <span className="mt-3 text-lg font-bold text-white">
              <T>{current.name}</T>
            </span>
            <span className="text-sm text-gold-400">
              <T>{current.role}</T>
            </span>
          </figcaption>
        </figure>

        {items.length > 1 && (
          <>
            <div className="mt-10 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <div aria-hidden="true" className="flex items-center gap-2">
                {items.map((t, i) => (
                  <span key={`${t.name}-${i}`} className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-gold-400" : "w-2 bg-white/40"}`} />
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

            <ul className="mt-10 flex flex-wrap justify-center gap-6">
              {items.map((t, i) => (
                <li key={`${t.name}-${i}`}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                    aria-current={i === index ? "true" : undefined}
                    className={`flex flex-col items-center gap-2 transition-opacity ${i === index ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
                  >
                    <span
                      className={`flex size-14 items-center justify-center rounded-full bg-brand-700 font-display text-lg font-bold text-white ${
                        i === index ? "ring-4 ring-gold-400" : "ring-2 ring-white/30"
                      }`}
                    >
                      {initialOf(t.name)}
                    </span>
                    <span className="max-w-24 truncate text-sm font-semibold text-white">{t.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
