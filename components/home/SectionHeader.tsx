import type { ReactNode } from "react";
import { cn } from "@/components/ui/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 border-b border-gray-100 pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
          {label}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">{description}</p>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
