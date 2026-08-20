import { Globe, Store, Share2, Puzzle } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const cards = [
  {
    title: "Professional Websites",
    description:
      "Modern, responsive websites designed around your business, customers, and goals.",
    icon: Globe,
  },
  {
    title: "Business Presence",
    description:
      "Help customers discover your business, understand what you offer, and get in touch.",
    icon: Store,
  },
  {
    title: "Social Media",
    description:
      "Build a consistent and professional social presence that keeps your business visible.",
    icon: Share2,
  },
  {
    title: "Custom Solutions",
    description:
      "Custom web applications, tools, dashboards, and digital solutions built around your requirements.",
    icon: Puzzle,
  },
];

export function ValueSection() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Your Business Deserves a Better Online Presence</h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            Your website is often the first interaction a potential customer has with your
            business.
          </p>
          <p className="mt-3 text-base leading-relaxed text-brand-muted sm:text-lg">
            I create professional digital experiences that make your business look credible,
            communicate what you offer clearly, and make it easy for customers to contact you.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-brand-border bg-white p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-sky/20">
                  <card.icon className="size-5 text-brand-sky" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-brown">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{card.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
