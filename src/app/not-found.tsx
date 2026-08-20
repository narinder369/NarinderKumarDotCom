import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main" className="container-content py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-serif text-4xl text-brand-brown">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-brand-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
