"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0 });
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }}
      className={`fixed right-5 bottom-5 z-30 inline-flex size-12 items-center justify-center rounded-full bg-brand-900 text-gold-400 shadow-[var(--shadow-pop)] ring-2 ring-gold-400/40 transition-all hover:bg-brand-800 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp aria-hidden="true" size={20} />
    </button>
  );
}
