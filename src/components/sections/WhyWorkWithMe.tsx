import { MessageCircle, Target, Sparkles, ListChecks, Handshake } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const reasons = [
  {
    title: "Direct Communication",
    description: "You work directly with the developer — no unnecessary middleman.",
    icon: MessageCircle,
  },
  {
    title: "Business First",
    description:
      "I don't build websites simply to fill pages. Every part of the website should have a purpose.",
    icon: Target,
  },
  {
    title: "Modern & Professional",
    description:
      "Clean design, responsive layouts, strong performance, and a professional user experience.",
    icon: Sparkles,
  },
  {
    title: "Clear Communication",
    description:
      "You know what is being built, why it is being built, and what happens next.",
    icon: ListChecks,
  },
  {
    title: "Long-Term Support",
    description:
      "I can continue helping you maintain and improve your digital presence after launch.",
    icon: Handshake,
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="text-center">
          <h2 className="section-heading">Why Work With Me?</h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="text-left lg:text-center">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-pink/10">
                  <item.icon className="size-5 text-brand-pink" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-brown">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
