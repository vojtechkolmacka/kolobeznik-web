import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";

export const Route = createFileRoute("/o-mne")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "O mně · Koloběžník" },
      {
        name: "description",
        content:
          "Jak z komplikované dopravy vznikl koníček. Osobní rekord 72 km/h, kopce, helma a skládací koloběžky.",
      },
    ],
  }),
});

export function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="O mně"
        title="Koloběžka jako východisko, pak jako posedlost"
        lead="To, co začalo jako otravná nezbytnost až nutnost, se záhy stalo mým oblíbeným koníčkem."
        image="/images/first-scooter.jpg"
      />
      <article className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-pretty">
          <p>
            Začínal jsem tak, že mi byl takřka ze dne na den posunut spoj, kterým
            jsem několik let běžně jezdil do práce. Na výběr jsem měl několik
            variant: koupit auto (leasing, nebo starší jezdící pokladničku) — do
            čehož se mi moc nechtělo. Nebo být na místě o dvě hodiny dříve a
            vstávat o tři a půl hodiny dřív. Tak to už vůbec.
          </p>
          <p>
            Nakonec zvítězila koloběžka jako levné a rychlé řešení. Ráno skočím
            na kolobrndu, dojedu na ní dolů z kopce, složím ji a nasednu na svůj
            spoj do práce.
          </p>
          <p>
            Samozřejmě že jsem ze začátku taky nebyl moc nadšený. Bydlím na kopci
            a skládací koloběžky nemají zrovna ideální — ba ani propracovaný —
            systém brzd. Největší obavy jsem měl, že rozdováděnou koloběžku
            neubrzdím. Ale po čase, několika divokých jízdách a propálených
            botách od blatníkové brzdy, se to zlomilo.
          </p>
          <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-moss">
            Základ je HLAVNĚ NEBRZDIT.
          </p>
          <p>
            Je to sice adrenalin, ale nic, co by nešlo zvládnout. A když jsem
            překonal strach, začalo to i bavit. V současné době se bavím tím, že
            zkouším, jakou největší rychlost jsem schopen se skládací koloběžkou
            vyvinout — osobní rekord je {site.record}. Také se zkouším nadále
            zdokonalovat v jízdě do kopce.
          </p>
          <p>
            Mimochodem: <strong>VŽDY NOSTE HELMU</strong>. A neuškodí mít i další
            chrániče.
          </p>
          <p>
            Otestuji jakoukoli skládací koloběžku, a to v jakýchkoli
            představitelných i nepředstavitelných podmínkách. Shrnu přednosti i
            nedostatky. Navrhnu náměty ke zlepšení.
          </p>
          <p className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            {site.motto}
          </p>
        </div>
        <aside className="space-y-5">
          <img
            src="/images/portrait.jpg"
            alt="Moje první skládací koloběžka"
            className="w-full rounded-lg object-cover"
          />
          <img
            src="/images/first-scooter.jpg"
            alt="Koloběžník v terénu"
            className="w-full rounded-lg object-cover"
          />
          <div className="rounded-lg bg-ink p-6 text-paper">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
              Moje první skládací koloběžka
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/75">
              Od spoje na kopci až po zátěžové testy. Když chcete stroj projet
              poctivě — ozvěte se.
            </p>
            <Button asChild className="mt-5">
              <Link to="/kontakt">Napsat</Link>
            </Button>
          </div>
        </aside>
      </article>
    </main>
  );
}
