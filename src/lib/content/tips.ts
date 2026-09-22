export type Tip = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const tips: Tip[] = [
  {
    slug: "dirtlej-dirtsuit",
    title: "Dirtlej Dirtsuit Core Edition",
    date: "16. 7. 2023",
    image: "/images/tip-dirtsuit.jpg",
    excerpt: "Víc než jen kombinéza, to je tvoje zbraň na bláto.",
    body: [
      "Dirtlej Dirtsuit Core Edition: víc než jen kombinéza, to je tvoje zbraň na bláto.",
      "Když testuju skládačky v podmínkách, které výrobce v manuálu radši neuvádí, oceníš oblečení, které neřeší, jestli zrovna padá déšť, sníh nebo bláto z lesní cesty nad Růžďkou.",
    ],
  },
  {
    slug: "humorny-navod",
    title: "Humorný návod",
    date: "29. 5. 2023",
    image: "/images/garage.jpg",
    excerpt: "Tak tady jsem se opravdu zasmál.",
    body: [
      "Tak tady jsem se opravdu zasmál.",
      "Koloběh bere spousta lidí smrtelně vážně. Přitom nejlepší jízdy začínají ve chvíli, kdy přestaneš řešit, jak u toho vypadáš, a začneš řešit, jestli tě ta věc uveze z kopce — a zase nahoru.",
    ],
  },
  {
    slug: "hovding-airbag",
    title: "Hövding — airbag na kolo",
    date: "29. 5. 2023",
    image: "/images/tip-hovding.jpg",
    excerpt:
      "Airbag jako límec kolem krku. Pohodlnější než helma, po použití na výměnu.",
    body: [
      "Hövding je airbag na kolo, který se nosí jako límec kolem krku. Když dojde k nehodě, airbag se nafoukne a chrání hlavu cyklisty.",
      "Výhodou Hövdingu je, že je mnohem pohodlnější než tradiční cyklistická helma a také poskytuje lepší ochranu krční páteře.",
      "Nevýhodou je cena a to, že po jednom použití musí být vyměněn za nový.",
      "Mimochodem: VŽDY NOSTE HELMU. A neuškodí mít i další chrániče.",
    ],
  },
  {
    slug: "batuzkova-kolobezka",
    title: "Batůžková koloběžka Valor",
    date: "29. 5. 2023",
    image: "/images/tip-backpack.jpg",
    excerpt: "Skládací mechanismus do batohu 80 × 30 × 15 cm. Mikro, ale poctivé.",
    body: [
      "Valor Kick Scooter — batůžková koloběžka pro každodenní dobrodružství. Díky skládacímu mechanismu ji snadno složíte do kompaktního batohu o rozměrech 80 × 30 × 15 cm.",
      "Lehká, ale odolná konstrukce, ideální pro děti od 8 let i dospělé. Nastavitelná řídítka, kolečka 200 mm, ABEC 7 ložiska, zadní blatníková brzda. Maximální nosnost 100 kg.",
    ],
  },
  {
    slug: "chytra-helma",
    title: "Chytrá helma W-TEC SafeTech",
    date: "29. 5. 2023",
    image: "/images/tip-helmet.jpg",
    excerpt: "Elegantní bílá helma, ideální pro bezpečnou jízdu na koloběžce.",
    body: [
      "Tato elegantní bílá helma W-TEC SafeTech je ideální pro bezpečnou jízdu na koloběžce.",
      "Helma není doplněk. Na skládačce z kopce, kde osobní rekord leze k 72 km/h, je to první věc, kterou si beru — dřív než koloběžku.",
    ],
  },
  {
    slug: "brasna-oxelo",
    title: "Brašna na koloběžku Oxelo",
    date: "29. 5. 2023",
    image: "/images/tip-oxelo.jpg",
    excerpt: "Velmi odolná brašna na koloběžku Oxelo.",
    body: [
      "Velmi odolná brašna na koloběžku Oxelo.",
      "Na skládačce nenosíš koš, nosíš to, co se vejde a co nevypadne v první zatáčce. Pořádná brašna je rozdíl mezi výletem a extrakcí věcí z příkopu.",
    ],
  },
  {
    slug: "brasna-wildman",
    title: "Brašna Wildman FrontBag V30",
    date: "29. 5. 2023",
    image: "/images/tip-wildman.jpg",
    excerpt: "Brašna na kolo / koloběžku WildMan FrontBag V30.",
    body: [
      "Brašna na kolo/koloběžku WildMan FrontBag V30.",
      "Hodí se, když potřebuješ mít telefon, klíče a nářadí po ruce a ne v batohu, který při odrážení tluče do zad.",
    ],
  },
  {
    slug: "blitzwheel",
    title: "BlitzWheel — opravdu mikrokoloběžka",
    date: "29. 5. 2023",
    image: "/images/tip-blitz.jpg",
    excerpt: "Opravdu mikrokoloběžka. Mikromobilita, jak má být.",
    body: [
      "BlitzWheel — opravdu mikrokoloběžka.",
      "Když má skládačka smysl, je to ve chvíli, kdy ji složíš, nasedneš na spoj a na druhé straně zase rozložíš. Tohle je přesně ta liga.",
    ],
  },
];

export function getTip(slug: string) {
  return tips.find((t) => t.slug === slug);
}
