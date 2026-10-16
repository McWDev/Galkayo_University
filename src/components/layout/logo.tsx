import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Rendered logo height/width in px (the asset is square, so aspect ratio is always preserved). */
  size?: number;
  /** Show the university name beside the logo. */
  withWordmark?: boolean;
  /** Use light text for dark backgrounds. */
  inverted?: boolean;
  priority?: boolean;
};

/**
 * Official GU logo (public/brand/gu.png, supplied by GU). Never recolour, crop or stretch it.
 * On dark backgrounds the logo sits on a white disc so the green lettering stays legible.
 */
export function Logo({ size = 56, withWordmark = true, inverted = false, priority = false }: LogoProps) {
  const image = (
    <Image
      src="/brand/gu.png"
      // Decorative when the wordmark text is present; the link text names the destination.
      alt={withWordmark ? "" : "Galkayo University"}
      width={size}
      height={size}
      priority={priority}
      className="h-auto shrink-0"
      style={{ width: size }}
    />
  );

  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-2.5 rounded-md sm:gap-3"
      aria-label={withWordmark ? undefined : "Galkayo University home"}
    >
      {inverted ? <span className="rounded-full bg-white p-1 shadow-sm">{image}</span> : image}
      {withWordmark && (
        <span className="flex flex-col leading-tight whitespace-nowrap">
          <span className={`font-serif text-base font-bold min-[400px]:text-lg sm:text-xl ${inverted ? "text-white" : "text-brand-800"}`}>
            Galkayo University
          </span>
          <span lang="ar" dir="rtl" className={`text-sm ${inverted ? "text-on-dark-muted" : "text-muted"}`}>
            جامعة جالكعيو
          </span>
        </span>
      )}
    </Link>
  );
}
