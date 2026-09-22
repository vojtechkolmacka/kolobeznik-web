import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/novinky")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Novinky, tipy, aplikace · Koloběžník" },
      {
        name: "description",
        content: "Aplikace pro smartphone a nositelnou elektroniku. Cyclers na koloběžce.",
      },
    ],
  }),
});

export function NewsPage() {
  return (
    <main>
      <PageHero
        kicker="Červenec"
        title="Novinky, tipy a triky pro koloběh"
        lead="Aplikace pro smartphone a nositelnou elektroniku — to, co na řídítkách opravdu používám."
        image="/images/field.jpg"
      />
      <article className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            16. 7.
          </p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight">
            Aplikace Cyclers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pretty">
            Velmi zajímavá aplikace, kterou využívám docela často pro navigaci a
            statistiky na koloběžce. Trasy, převýšení, tempo — bez toho, abyste
            na řídítka věšeli cyklistický počítač z devadesátek.
          </p>
        </div>
        <img
          src="/images/cyclers.jpg"
          alt="Aplikace Cyclers"
          className="w-full rounded-lg bg-surface object-contain p-4"
        />
      </article>
    </main>
  );
}
