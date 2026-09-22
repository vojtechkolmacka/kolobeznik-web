import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5 no-underline", className)}
      aria-label="Koloběžník — úvod"
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-sm",
          light ? "bg-lime text-ink" : "bg-ink text-lime",
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="7" cy="24" r="3.2" />
          <circle cx="24" cy="24" r="3.2" />
          <path d="M7 24h11.5L22 10h4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 24V14" strokeLinecap="round" />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-2xl font-bold uppercase leading-none tracking-wide",
          light ? "text-paper" : "text-ink",
        )}
      >
        Koloběžník
      </span>
    </Link>
  );
}
