import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-midnight bg-midnight text-white hover:bg-transparent hover:text-midnight",
  secondary:
    "border-brass bg-transparent text-midnight hover:bg-brass hover:text-midnight",
  ghost:
    "border-outline-soft bg-transparent text-midnight hover:border-midnight hover:bg-surface-container",
};

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded border px-5 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
