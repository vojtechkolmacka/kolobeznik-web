import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gauge,
  GraduationCap,
  MessageSquare,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScooterCard } from "@/components/scooters/ScooterCard";
import { site, services } from "@/lib/content/site";
import { featuredSlugs, scooters } from "@/lib/content/scooters";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Koloběžník — testy skládacích koloběžek" },
      {
        name: "description",
        content:
          "Začněte jezdit na koloběžce už dnes. Zátěžové testy, servis a zaučení z Růžďky na Vsetínsku.",
      },
    ],
  }),
});

const icons = {
  gauge: Gauge,
  wrench: Wrench,
  message: MessageSquare,
  ride: GraduationCap,
};

function Home() {
  const featured = featuredSlugs
    .map((slug) => scooters.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-paper">
        <img
          src="/images/hero.jpg"
          alt="Jízda na koloběžce lesní silnicí na Vsetínsku"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-20">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-lime">
            Růžďka · Vsetínsko
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl md:text-8xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-paper/85 sm:text-lg">
            Teprve na koloběžce je to ten pravý relax, zažijte radost z přirozeného
            pohybu. Odpočinete od ruchu, uděláte něco pro zdraví — a když to vezmete z
            kopce, je to adrenalin.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/testy">
                Moje testy
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/kontakt">Objednat test</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-lime">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            { n: site.record, l: "osobní rekord na skládačce" },
            { n: `${scooters.length}`, l: "odjetých a popsaných modelů" },
            { n: "3 zimy", l: "na jedné JD Bug MS132" },
            { n: "24/7", l: "podmínky, které výrobce nezkouší" },
          ].map((s) => (
            <div key={s.l} className="px-5 py-8 text-ink">
              <p className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
                {s.n}
              </p>
              <p className="mt-1 text-sm text-ink/70">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss">
          Co umím
        </p>
        <h2 className="mt-2 max-w-2xl font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl">
          Testování, servis, zaučení
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <Link
                key={s.title}
                to={s.href}
                className="group rounded-lg bg-surface p-6 text-ink no-underline shadow-[var(--shadow-border)] transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-border-hover)]"
              >
                <Icon className="size-7 text-moss" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <img
            src="/images/portrait.jpg"
            alt="Koloběžník se skládací koloběžkou"
            className="aspect-[4/5] w-full rounded-lg object-cover object-top md:max-h-[640px]"
          />
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime">
              O mně
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl">
              Začalo to zmeškaným spojem
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-paper/80">
              To, co začalo jako otravná nezbytnost při komplikované dopravě, se záhy
              stalo oblíbeným koníčkem. Bydlím na kopci, skládačky nemají ideální
              brzdy — a přesto je základ HLAVNĚ NEBRZDIT. Když jsem překonal strach,
              začalo to bavit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-paper/80">
              Otestuji jakoukoli skládací koloběžku, v jakýchkoli představitelných i
              nepředstavitelných podmínkách. Shrnu přednosti i nedostatky. Navrhnu
              náměty ke zlepšení.
            </p>
            <Button asChild variant="primary" className="mt-8">
              <Link to="/o-mne">
                Celý příběh
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss">
              Recenze
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase leading-none tracking-tight">
              Odjeté kilometry
            </h2>
          </div>
          <Button asChild variant="limeOutline">
            <Link to="/testy">Všechny testy</Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (s ? <ScooterCard key={s.slug} scooter={s} /> : null))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-moss py-16 text-paper md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-balance md:text-5xl">
              Chcete otestovat stroj?
            </h2>
            <p className="mt-4 max-w-lg text-paper/80">
              Zátěžový test, servis nebo zaučení. Napište, zavolejte, nebo se stavte —
              při kraji lesa směrem na Brdo.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/kontakt">
              Napsat Koloběžníkovi
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
