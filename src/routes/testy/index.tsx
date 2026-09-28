import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ScooterCard } from "@/components/scooters/ScooterCard";
import {
  categories,
  type Category,
} from "@/lib/content/scooters";
import { getScootersFromDb } from "@/lib/content/scooters-db.server";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/testy/")({
  component: TestsPage,

  loader: async () => ({
    scooters: await getScootersFromDb(),
  }),

  head: () => ({
    meta: [
      { title: "Moje koloběžky a testy · Koloběžník" },
      {
        name: "description",
        content:
          "Osobní recenze skládacích, sportovních a elektrických koloběžek. Přednosti, nedostatky, reálné použití.",
      },
    ],
  }),
});

export function TestsPage() {
  const { scooters } = Route.useLoaderData();

  const [cat, setCat] = useState<Category | "all">("all");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();

    return scooters.filter((s) => {
      if (cat !== "all" && s.category !== cat) return false;

      if (!query) return true;

      return (
        s.name.toLowerCase().includes(query) ||
        s.blurb.toLowerCase().includes(query)
      );
    });
  }, [scooters, cat, q]);

  return (
    <main>
      <PageHero
        kicker="Moje koloběžky a testy"
        title="Moje recenze koloběžek"
        lead="Modely, které jsem si osobně vyzkoušel a porovnal. Koloběžky jsou skvělý způsob dopravy po městě i do přírody — zábava, pohyb, úspora času i peněz."
        image="/images/garage.jpg"
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Kategorie"
          >
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={cat === c.id}
                onClick={() => setCat(c.id)}
                className={cn(
                  "h-11 min-h-11 rounded-full px-4 font-display text-sm font-semibold uppercase tracking-wide transition-colors",
                  cat === c.id
                    ? "bg-ink text-lime"
                    : "bg-surface text-ink hover:bg-ink hover:text-paper",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <label className="relative block w-full md:w-72 md:shrink-0">
            <span className="sr-only">Hledat model</span>

            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />

            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Hledat model…"
              className="h-11 w-full rounded-md bg-paper pl-10 pr-3 text-sm text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus:shadow-[0_0_0_2px_var(--color-lime)]"
            />
          </label>
        </div>

        <p className="mt-6 text-sm text-muted">
          {list.length} modelů
        </p>

        {list.length === 0 ? (
          <p className="py-16 text-center text-muted">
            Nic takového jsem ještě neotestoval.
          </p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <ScooterCard key={s.slug} scooter={s} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
                  }
