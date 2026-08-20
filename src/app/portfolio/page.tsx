import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected websites, digital experiences, and custom solutions designed and developed by Narinder Kumar.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main id="main">
      <PageHeader
        title="Selected Work"
        description="A selection of websites, digital experiences, and solutions I've designed and developed."
      />
      <section className="py-16">
        <div className="container-content grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} id={project.slug} className="scroll-mt-28">
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                href={`/portfolio#${project.slug}`}
              />
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
