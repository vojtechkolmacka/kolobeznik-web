import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-moss">404</p>
      <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-balance">
        Tady nic nejezdí
      </h1>
      <p className="mt-4 text-muted text-pretty">
        Tahle cesta nikam nevede. Zkus úvod, nebo se podívej na testy koloběžek.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="ink">
          <Link to="/">Úvod</Link>
        </Button>
        <Button asChild variant="limeOutline">
          <Link to="/testy">Testy</Link>
        </Button>
      </div>
    </main>
  );
}
