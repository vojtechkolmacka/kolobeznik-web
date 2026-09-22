export const site = {
  name: "Koloběžník",
  tagline: "Začněte jezdit na koloběžce už dnes",
  motto: "Všem koloběžníkům R.E.S.P.E.C.T.",
  description:
    "Nezávislé zátěžové testy skládacích a elektrických koloběžek v jakýchkoli podmínkách. Servis, zaučení a technické poradenství z Růžďky na Vsetínsku.",
  phone: "+420 774 905 857",
  phoneHref: "tel:+420774905857",
  email: "info.kolobeznik@gmail.com",
  emailHref: "mailto:info.kolobeznik@gmail.com",
  address: "Růžďka 259, 756 25 Růžďka",
  addressNote: "Při kraji lesa směrem na Brdo",
  mapUrl: "https://mapy.cz/zakladni?q=R%C5%AF%C5%BE%C4%8Fka%20259",
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=17.96%2C49.37%2C18.03%2C49.42&layer=mapnik&marker=49.3939%2C17.9956",
  facebook: "https://m.facebook.com/Kolob%C4%9B%C5%BEn%C3%ADk-100565005664665/",
  herohero: "https://herohero.co/kolobeznik",
  hours: [
    { days: "Pondělí – čtvrtek", time: "19:00 – 23:00" },
    { days: "Pátek – sobota", time: "13:00 – 23:00" },
    { days: "Neděle", time: "9:00 – 19:00" },
  ],
  hoursNote:
    "Jsem spíš v terénu a v dílně než za pultem. Před návštěvou prosím zavolejte nebo napište.",
  record: "72 km/h",
} as const;

export const nav = [
  { to: "/", label: "Úvod" },
  { to: "/testy", label: "Testy" },
  { to: "/cenik", label: "Ceník" },
  { to: "/o-mne", label: "O mně" },
  { to: "/tipy", label: "Tipy" },
  { to: "/novinky", label: "Novinky" },
  { to: "/znacky", label: "Značky" },
  { to: "/odkazy", label: "Odkazy" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const services = [
  {
    title: "Testování skládacích koloběžek",
    text: "Otestuji jakoukoli skládací koloběžku — v jakýchkoli představitelných i nepředstavitelných podmínkách. Shrnu přednosti i nedostatky. Navrhnu náměty ke zlepšení.",
    href: "/testy",
    icon: "gauge" as const,
  },
  {
    title: "Zátěžové testy",
    text: "Komplexní zátěžový test kvality zpracování. Silné a slabé stránky, kategorizace a vhodné využití konkrétního stroje.",
    href: "/cenik",
    icon: "wrench" as const,
  },
  {
    title: "Technické poradenství",
    text: "Silné a slabé stránky vaší koloběžky, kategorizace a vhodné využití. Bez marketingového kecání — jen to, co vydrží kopec, zimu a skládání do spoje.",
    href: "/kontakt",
    icon: "message" as const,
  },
  {
    title: "Zaučení a technika jízdy",
    text: "Technika správné jízdy na koloběžce. Základy, kontrola před jízdou, školení bezpečnosti. Vždy helma. Pak teprve rychlost.",
    href: "/cenik",
    icon: "ride" as const,
  },
] as const;

export const prices = [
  {
    name: "Základní údržba",
    detail: "Kontrola dotažení spojů, pročištění a promazání točivých komponent.",
    price: "500 Kč",
    unit: "1 hodina",
  },
  {
    name: "Středně náročný servis",
    detail: "Výměna kol, ložisek, seřízení brzd. Plus potřebný materiál pro opravu.",
    price: "800 Kč",
    unit: "1 hodina",
  },
  {
    name: "Komplexní servis",
    detail:
      "Výměna opotřebených komponent, brzdového obložení, opravy těžkých závad (je-li to možné), upgrade a tuning. Plus materiál.",
    price: "1 600 Kč",
    unit: "zásah",
  },
  {
    name: "Zapůjčení koloběžky",
    detail: "Zapůjčení na 12 až 24 hodin. Oproti vratné záloze 1 000 Kč.",
    price: "800 / 1 400 Kč",
    unit: "12 / 24 h",
  },
  {
    name: "Zátěžové testy koloběžek",
    detail: "Komplexní zátěžový test kvality zpracování.",
    price: "1 500 Kč",
    unit: "den",
  },
  {
    name: "Individuální trénink",
    detail:
      "Základy jízdy na koloběžce, kontrola koloběžky před jízdou, školení bezpečnosti.",
    price: "225 Kč",
    unit: "1 lekce",
  },
  {
    name: "Reklama a propagace značky",
    detail: "Individuálně dle dohody.",
    price: "dohodou",
    unit: "",
  },
] as const;
