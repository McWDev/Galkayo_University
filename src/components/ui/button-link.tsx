import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand-800 text-white hover:bg-brand-700",
  gold: "bg-gold-400 text-brand-900 hover:bg-gold-300",
  dark: "bg-brand-900 text-white hover:bg-brand-800",
  outline: "border-2 border-brand-800 text-brand-800 hover:bg-brand-50",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white/10",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
};

export function buttonClasses(variant: ButtonVariant = "primary", size: keyof typeof sizes = "md") {
  return `inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${variants[variant]} ${sizes[size]}`;
}

export function ButtonLink({ variant = "primary", size = "md", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonClasses(variant, size)} ${className}`} {...props} />;
}
