import { getSql } from "@/lib/db";
import type { Scooter } from "@/lib/content/scooters";

type ScooterRow = Scooter & {
  created_at?: string;
  updated_at?: string;
};

export async function getScootersFromDb(): Promise<Scooter[]> {
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
}

export async function getScooterFromDb(
  slug: string,
): Promise<Scooter | undefined> {
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
    WHERE slug = ${slug}
      AND published = true
    LIMIT 1
  `;

  return (rows[0] as ScooterRow | undefined) ?? undefined;
}
