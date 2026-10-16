"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroll-snap carousel. Content stays a normal scrollable list (works with touch,
 * trackpad, keyboard and screen readers); the buttons are a convenience for pointer users.
 */
export function Carousel({ label, children }: { label: string; children: React.ReactNode }) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scroll(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: reduce ? "auto" : "smooth" });
  }

  const btn =
    "inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-brand-800 shadow-[var(--shadow-card)] hover:bg-brand-50";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul ref={trackRef} className="scrollbar-none -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pt-1 pb-4">
        {children}
      </ul>
      <div className="mt-4 flex justify-center gap-3">
        <button type="button" className={btn} onClick={() => scroll(-1)} aria-label="Previous items">
          <ChevronLeft aria-hidden="true" size={20} />
        </button>
        <button type="button" className={btn} onClick={() => scroll(1)} aria-label="Next items">
          <ChevronRight aria-hidden="true" size={20} />
        </button>
      </div>
    </div>
  );
}
