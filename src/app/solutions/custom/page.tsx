import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Custom Web Solutions",
  description:
    "Custom web applications, dashboards, tools, and digital solutions built around your requirements.",
  alternates: { canonical: "/solutions/custom" },
};

export default function CustomSolutionsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Solutions"
        title="Custom Solutions"
        description="If you have a business idea, website requirement, or digital problem, let's discuss it."
      />
      <section className="py-16">
        <div className="container-content max-w-3xl space-y-4 text-brand-muted">
          <p>
            Not every project is a brochure website. I also build custom web applications,
            dashboards, tools, and digital workflows around how your business actually
            operates.
          </p>
          <p>
            Share the problem you want to solve. We will start by understanding the
            requirement, then plan a solution that is useful, maintainable, and
            professional.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
