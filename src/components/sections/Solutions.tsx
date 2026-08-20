import Link from "next/link";
import { ArrowRight, HeartPulse, Store, Rocket, Briefcase } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const solutions = [
  {
    title: "Clinics & Healthcare",
    description:
      "Professional digital experiences designed around patients and healthcare businesses.",
    href: "/clinics",
    cta: "Explore",
    icon: HeartPulse,
  },
  {
    title: "Local Businesses",
    description:
      "Build credibility and make it easier for customers to discover and contact your business.",
    href: "/solutions/local-businesses",
    cta: "Explore",
    icon: Store,
  },
  {
    title: "Startups & Growing Businesses",
    description:
      "Modern websites and custom digital solutions built to support your next stage of growth.",
    href: "/solutions/startups",
    cta: "Explore",
    icon: Rocket,
  },
  {
    title: "Other Businesses",
    description:
      "If you have a business idea, website requirement, or digital problem, let's discuss it.",
    href: "/contact",
    cta: "Let's Talk",
    icon: Briefcase,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-brand-cream py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="text-center">
          <h2 className="section-heading">Solutions for Different Businesses</h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="group flex h-full flex-col rounded-2xl border border-brand-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-pink/15">
                  <item.icon className="size-5 text-brand-pink" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-brown">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-pink"
                >
                  {item.cta}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
