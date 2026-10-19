export function NewsPage() {
  // Tady máš seznam článků. Každý nový přidej jako další položku NA KONEC tohoto seznamu:
  const articlesList = [
    {
      date: "16. 7.",
      title: "Aplikace Cyclers",
      text: "Velmi zajímavá aplikace, kterou využívám docela často pro navigaci a statistiky na koloběžce. Trasy, převýšení, tempo — bez toho, abyste na řídítka věšeli cyklistický počítač z devadesátek.",
      image: "/images/cyclers.jpg",
      imageAlt: "Aplikace Cyclers"
    },
    // SEM v budoucnu připíšeš nový článek přes čárku za tímto komentářem, např.:
    // {
    //   date: "20. 7.",
    //   title: "Můj nový objev",
    //   text: "Text nového článku...",
    //   image: "/images/obrazek.jpg",
    //   imageAlt: "Popisek obrázku"
    // }
  ];

  return (
    <main>
      <PageHero
        kicker="Červenec"
        title="Novinky, tipy a triky pro koloběh"
        lead="Aplikace pro smartphone a nositelnou elektroniku — to, co na řídítkách opravdu používám."
        image="/images/field.jpg"
      />
      
      {/* Funkce .reverse() automaticky otočí pořadí, takže nejnovější (poslední přidaný) skočí nahoru */}
      {[...articlesList].reverse().map((item, index) => (
        <article key={index} className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 border-b border-stone-200">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              {item.date}
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-pretty">
              {item.text}
            </p>
          </div>
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full rounded-lg bg-surface object-contain p-4"
          />
        </article>
      ))}
    </main>
  );
}
