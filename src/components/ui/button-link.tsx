import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand-800 text-white hover:bg-brand-700",
  gold: "bg-gold-400 text-brand-900 hover:bg-gold-300",
  outline: "border border-brand-800 text-brand-800 hover:bg-brand-50",
  "outline-light": "border border-white/70 text-white hover:bg-white/10",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-base sm:text-lg",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function buttonClasses(variant: keyof typeof variants = "primary", size: keyof typeof sizes = "md") {
  return `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors ${variants[variant]} ${sizes[size]}`;
}

export function ButtonLink({ variant = "primary", size = "md", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonClasses(variant, size)} ${className}`} {...props} />;
}
