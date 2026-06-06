import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border-outline-soft bg-surface-container-low rounded-lg border p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
