import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt · Koloběžník" },
      {
        name: "description",
        content: "Růžďka 259, tel. +420 774 905 857, info.kolobeznik@gmail.com",
      },
    ],
  }),
});

export function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nZáležitost: ${topic}\n\n${message}`,
    );
    const subject = encodeURIComponent(`Koloběžník: ${topic || "zpráva"}`);
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <PageHero
        kicker="Kontakt"
        title="Napište, zavolejte, stavte se"
        lead={site.hoursNote}
        image="/images/night-ride.jpg"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 text-moss" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight">Adresa</p>
              <p className="text-sm text-muted">
                {site.address}
                <br />
                {site.addressNote}
              </p>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-sm text-moss hover:text-ink"
              >
                Navigovat na Mapy.cz
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 size-5 text-moss" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight">Telefon</p>
              <a href={site.phoneHref} className="text-sm text-ink no-underline hover:text-moss">
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 size-5 text-moss" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight">E-mail</p>
              <a href={site.emailHref} className="text-sm text-ink no-underline hover:text-moss">
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-0.5 size-5 text-moss" />
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-tight">
                Kdy jsem k zastižení
              </p>
              <ul className="mt-1 space-y-1 text-sm text-muted">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6">
                    <span>{h.days}</span>
                    <span className="tabular-nums text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <iframe
            title="Mapa Růžďka 259"
            src={site.osmEmbed}
            className="h-64 w-full rounded-lg border-0"
            loading="lazy"
          />
        </div>

        <form onSubmit={onSubmit} className="rounded-lg bg-surface p-6 md:p-8">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight">
            Napsat zprávu
          </h2>
          <p className="mt-2 text-sm text-muted">
            Otevře se váš e-mail. Nic se neukládá na server — zpráva jde rovnou mně.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              Jméno
              <input
                name="name"
                required
                className="mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
              />
            </label>
            <label className="block text-sm">
              E-mail
              <input
                name="email"
                type="email"
                required
                className="mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
              />
            </label>
            <label className="block text-sm">
              Telefon
              <input
                name="phone"
                type="tel"
                className="mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
              />
            </label>
            <label className="block text-sm">
              Záležitost
              <select
                name="topic"
                className="mt-1 h-11 w-full rounded-md bg-paper px-3 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
                defaultValue="Zátěžový test"
              >
                <option>Zátěžový test</option>
                <option>Servis</option>
                <option>Zapůjčení</option>
                <option>Zaučení / trénink</option>
                <option>Propagace značky</option>
                <option>Jiné</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm">
            Zpráva
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-md bg-paper px-3 py-2 text-ink shadow-[var(--shadow-border)] outline-none focus:shadow-[0_0_0_2px_var(--color-lime)]"
            />
          </label>
          <Button type="submit" variant="ink" className="mt-5">
            Odeslat e-mailem
          </Button>
          {sent ? (
            <p className="mt-3 text-sm text-moss">
              Pokud se e-mail neotevřel, napište přímo na {site.email}.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
