import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
