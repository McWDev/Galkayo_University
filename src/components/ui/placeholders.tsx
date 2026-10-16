import Image from "next/image";

/**
 * Branded stand-in for photography GU has not supplied yet (PRD: no stock images that misrepresent GU).
 * Replace with real, permissioned GU photos via the CMS media library (Task 017).
 */
export function ImagePlaceholder({ label = "Photo", className = "" }: { label?: string; className?: string }) {
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
