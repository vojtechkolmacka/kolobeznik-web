import pg from "pg";

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL není nastavená. Seed koloběžek se spouští pouze proti Neon PostgreSQL.",
  );
}

const { scooters } = await import("../src/lib/content/scooters.ts");

const pool = new Pool({
  connectionString: databaseUrl,
});

try {
  await pool.query("BEGIN");

  for (const [index, scooter] of scooters.entries()) {
    await pool.query(
      `
        INSERT INTO scooters (
          slug,
          name,
          category,
          verdict,
          image,
          blurb,
          body,
          specs,
          pros,
          cons,
          sort_order
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8::jsonb, $9::text[], $10::text[], $11
        )
        ON CONFLICT (slug) DO UPDATE SET
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          verdict = EXCLUDED.verdict,
          image = EXCLUDED.image,
          blurb = EXCLUDED.blurb,
          body = EXCLUDED.body,
          specs = EXCLUDED.specs,
          pros = EXCLUDED.pros,
          cons = EXCLUDED.cons,
          sort_order = EXCLUDED.sort_order,
          updated_at = now()
      `,
      [
        scooter.slug,
        scooter.name,
        scooter.category,
        scooter.verdict,
        scooter.image,
        scooter.blurb,
        scooter.body ?? "",
        JSON.stringify(scooter.specs ?? []),
        scooter.pros ?? [],
        scooter.cons ?? [],
        index,
      ],
    );
  }

  await pool.query("COMMIT");

  console.log(`Import hotový: ${scooters.length} koloběžek.`);
} catch (error) {
  await pool.query("ROLLBACK");
  throw error;
} finally {
  await pool.end();
}
