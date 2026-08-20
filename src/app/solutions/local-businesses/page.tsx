import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Local Business Websites",
  description:
    "Websites and digital presence for local businesses that need to look credible and make it easy for customers to get in touch.",
  alternates: { canonical: "/solutions/local-businesses" },
};

export default function LocalBusinessesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Solutions"
        title="Local Businesses"
        description="Build credibility and make it easier for customers to discover and contact your business."
      />
      <section className="py-16">
        <div className="container-content max-w-3xl space-y-4 text-brand-muted">
          <p>
            Your website is often the first interaction a potential customer has with your
            business. I create professional digital experiences that make your business look
            credible, communicate what you offer clearly, and make it easy for customers to
            contact you.
          </p>
          <p>
            This can include a modern website, stronger Google presence, and a consistent
            social media look — so people can find you, trust you, and reach you.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
