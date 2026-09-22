import { Link } from "@tanstack/react-router";
import { site, nav } from "@/lib/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
            Nezávislé testy skládacích a elektrických koloběžek. Servis, zaučení a
            zátěžovky z kraje lesa nad Růžďkou.
          </p>
          <p className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-lime">
            {site.motto}
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Navigace
          </h2>
          <ul className="mt-4 columns-2 gap-x-6 text-sm">
            {nav.map((item) => (
              <li key={item.to} className="mb-2">
                <Link to={item.to} className="text-paper/80 no-underline hover:text-lime">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-lime">
            Kontakt
          </h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-paper/80">
            {site.address}
            <br />
            {site.addressNote}
            <br />
            <a href={site.phoneHref} className="mt-2 inline-block text-paper no-underline hover:text-lime">
              {site.phone}
            </a>
            <br />
            <a href={site.emailHref} className="text-paper no-underline hover:text-lime">
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-paper/45 sm:px-6">
          © {new Date().getFullYear()} Koloběžník · Růžďka · Vsetínsko
        </p>
      </div>
    </footer>
  );
}
