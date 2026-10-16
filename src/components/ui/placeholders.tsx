import Image from "next/image";

/** Visible "Example" tag on development-only sample content so it can never be mistaken for real data. */
export function ExampleBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-danger px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wider text-white uppercase ${className}`}>
      Example
    </span>
  );
}

/** Inline marker for text GU has not yet supplied/approved. */
export function PendingText({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-gold-100 px-1.5 py-0.5 text-gold-ink italic">{children}</span>;
}

/**
 * Branded stand-in for photography GU has not supplied yet (PRD: no stock images that misrepresent GU).
 * Replace with real, permissioned GU photos via the CMS media library (Task 017).
 */
export function ImagePlaceholder({ label = "Photo pending", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 ${className}`}
    >
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <div aria-hidden="true" className="relative flex flex-col items-center gap-3">
        <span className="rounded-full bg-white/95 p-1 ring-2 ring-gold-400/60">
          <Image src="/brand/gu.png" alt="" width={64} height={64} className="h-auto w-14 sm:w-16" />
        </span>
        <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-on-dark">{label}</span>
      </div>
    </div>
  );
}
