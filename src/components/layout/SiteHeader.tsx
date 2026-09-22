import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header
      className={cn(
        "sticky top-0 z-40",
        inverted ? "bg-ink/90 text-paper backdrop-blur-md" : "bg-paper/90 text-ink backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo light={inverted} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavní menu">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "px-2.5 py-2 font-display text-[15px] font-semibold uppercase tracking-wide no-underline transition-colors",
                  inverted
                    ? active
                      ? "text-lime"
                      : "text-paper/75 hover:text-lime"
                    : active
                      ? "text-moss"
                      : "text-ink/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className={cn(
            "relative flex size-11 items-center justify-center lg:hidden",
            inverted ? "text-paper" : "text-ink",
          )}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-200 ease-out lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className={cn("flex flex-col px-4 pb-5", inverted ? "bg-ink" : "bg-paper")}
          aria-label="Mobilní menu"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "border-t py-3.5 font-display text-xl font-semibold uppercase tracking-wide no-underline",
                inverted
                  ? "border-paper/10 text-paper"
                  : "border-ink/10 text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
