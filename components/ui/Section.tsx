import type { ReactNode } from "react";
import { cn } from "./cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  spacingClassName?: string;
}

export default function Section({
  children,
  className,
  contentClassName,
  spacingClassName = "py-8 sm:py-12 md:py-16",
}: SectionProps) {
  return (
    <section className={cn("bg-white", spacingClassName, className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8",
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

