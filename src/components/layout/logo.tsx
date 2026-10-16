import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  /** Rendered logo height/width in px (the asset is square, so aspect ratio is always preserved). */
  size?: number;
  /** Show the university name beside the logo. */
  withWordmark?: boolean;
  /** Light text for dark backgrounds; the logo sits on a white disc so its green lettering stays legible. */
  inverted?: boolean;
  priority?: boolean;
  /** Hide the wordmark where the full desktop menu needs the room (1280–1599px). */
  compactOnDesktop?: boolean;
};

/** Official GU logo (public/brand/gu.png, supplied by GU). Never recolour, crop or stretch it. */
export function Logo({ size = 52, withWordmark = true, inverted = false, priority = false, compactOnDesktop = false }: LogoProps) {
  const image = (
    <Image
      src="/brand/gu.png"
      // Decorative when the wordmark text is present; the link text names the destination.
      alt={withWordmark ? "" : siteConfig.name}
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
      className="inline-flex shrink-0 items-center gap-2.5"
      aria-label={withWordmark && !compactOnDesktop ? undefined : `${siteConfig.name} home`}
    >
      {inverted ? <span className="rounded-full bg-white p-0.5 shadow-sm ring-2 ring-gold-400/70">{image}</span> : image}
      {withWordmark && (
        <span className={`flex flex-col leading-none whitespace-nowrap ${compactOnDesktop ? "xl:hidden min-[100rem]:flex" : ""}`}>
          <span className={`font-display text-[1.05rem] font-bold tracking-wide uppercase sm:text-lg ${inverted ? "text-white" : "text-brand-800"}`}>
            {siteConfig.name}
          </span>
          <span lang="ar" dir="rtl" className={`mt-1 text-sm ${inverted ? "text-gold-400" : "text-muted"}`}>
            {siteConfig.nameArabic}
          </span>
        </span>
      )}
    </Link>
  );
}
