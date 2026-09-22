import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { tips } from "@/lib/content/tips";

export const Route = createFileRoute("/tipy/")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "Zajímavosti a tipy, mikromobilita · Koloběžník" },
      {
        name: "description",
        content: "Helmy, brašny, kombinézy a mikrokoloběžky — tipy z terénu.",
      },
    ],
  }),
});

export function TipsPage() {
  return (
    <main>
      <PageHero
        kicker="Mikromobilita"
        title="Zajímavosti a tipy"
        lead="Věci, které na cestě reálně použiju — od airbagu na krk po batůžkovou koloběžku."
        image="/images/night.jpg"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (
            <Link
              key={t.slug}
              to="/tipy/$slug"
              params={{ slug: t.slug }}
              className="group overflow-hidden rounded-lg bg-paper no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={t.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {t.date}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold uppercase leading-tight tracking-tight">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
