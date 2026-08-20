import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export function ProjectCard({ title, category, description, image, href }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream">
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-brand-brown">{title}</h3>
          <p className="mt-1 text-sm text-brand-muted">{category}</p>
          <p className="mt-3 text-sm leading-relaxed text-brand-body">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-pink">
            View Project
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
