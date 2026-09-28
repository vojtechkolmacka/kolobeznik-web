import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import type { Scooter } from "@/lib/content/scooters";

type ScooterRow = Scooter & {
  created_at?: string;
  updated_at?: string;
};

export const getScootersFromDb = createServerFn({ method: "GET" }).handler(
  async () => {
    const sql = await getSql();

    const rows = await sql`
      SELECT
        slug,
        name,
        category,
        verdict,
        image,
        blurb,
        body,
        specs,
        pros,
        cons
      FROM scooters
      WHERE published = true
      ORDER BY sort_order ASC, name ASC
    `;

    return rows as ScooterRow[];
  },
);

export const getScooterFromDb = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const sql = await getSql();

    const rows = await sql`
      SELECT
        slug,
        name,
        category,
        verdict,
        image,
        blurb,
        body,
        specs,
        pros,
        cons
      FROM scooters
      WHERE slug = ${data.slug}
        AND published = true
      LIMIT 1
    `;

    return (rows[0] as ScooterRow | undefined) ?? undefined;
  });
