CREATE TABLE IF NOT EXISTS scooters (
  slug text PRIMARY KEY,
  name text NOT NULL,
  category text NOT NULL CHECK (
    category IN ('folding', 'sport', 'electric', 'special')
  ),
  verdict text NOT NULL CHECK (
    verdict IN ('recommend', 'mixed', 'avoid', 'beast', 'draft')
  ),
  image text NOT NULL,
  blurb text NOT NULL DEFAULT '',
  body text NOT NULL DEFAULT '',
  specs jsonb NOT NULL DEFAULT '[]'::jsonb,
  pros text[] NOT NULL DEFAULT '{}',
  cons text[] NOT NULL DEFAULT '{}',
  price text,
  store_url text,
  images jsonb NOT NULL DEFAULT '[]'::jsonb,
  published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS scooters_category_idx
  ON scooters (category);

CREATE INDEX IF NOT EXISTS scooters_published_idx
  ON scooters (published);

CREATE INDEX IF NOT EXISTS scooters_sort_order_idx
  ON scooters (sort_order);
