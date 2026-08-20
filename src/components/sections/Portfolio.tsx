import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="work" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="section-heading">Selected Work</h2>
            <p className="mt-3 max-w-xl text-brand-muted">
              A selection of websites, digital experiences, and solutions I&apos;ve designed
              and developed.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink"
          >
            View All Work
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.07}>
              <ProjectCard
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.image}
                href={`/portfolio#${project.slug}`}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
