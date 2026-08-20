import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Startup Websites & Digital Solutions",
  description:
    "Modern websites and custom digital solutions for startups and growing businesses.",
  alternates: { canonical: "/solutions/startups" },
};

export default function StartupsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Solutions"
        title="Startups & Growing Businesses"
        description="Modern websites and custom digital solutions built to support your next stage of growth."
      />
      <section className="py-16">
        <div className="container-content max-w-3xl space-y-4 text-brand-muted">
          <p>
            Early-stage and growing businesses need a digital presence that looks
            professional without becoming complicated. I help you launch a website that
            explains the offer clearly, and I can extend it with custom tools when you are
            ready.
          </p>
          <p>
            The focus stays on what the site needs to achieve: trust, clarity, and real
            enquiries.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
