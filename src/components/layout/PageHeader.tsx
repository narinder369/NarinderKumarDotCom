import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="bg-brand-cream py-14 sm:py-16">
      <div className="container-content max-w-3xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 font-serif text-4xl font-medium text-brand-brown sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}

export function InnerPage({ children }: { children: ReactNode }) {
  return <main id="main">{children}</main>;
}
