"use client";

import { Compass, Map, PenTool, Code2, Rocket } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, audience, goals, and what you need the website to achieve.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the structure, content, functionality, and direction of the project.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Your website is designed to look professional, communicate clearly, and provide a smooth experience.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "The approved design is transformed into a fast, responsive, and functional website.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Your website is tested, launched, and prepared for your customers.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="text-center">
          <h2 className="section-heading">From Idea to Launch</h2>
        </FadeIn>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-4">
          <span
            className="absolute left-[1.15rem] top-4 hidden h-[calc(100%-2rem)] w-px border-l border-dashed border-brand-sky/80 md:left-0 md:top-5 md:block md:h-px md:w-full md:border-l-0 md:border-t"
            aria-hidden
          />
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.07}>
              <li className="relative pl-10 md:pl-0 md:pt-8">
                <span className="absolute left-0 top-0 inline-flex size-8 items-center justify-center rounded-full bg-brand-sky/30 md:left-1/2 md:top-0 md:-translate-x-1/2">
                  <step.icon className="size-4 text-brand-sky" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-brand-pink">{step.number}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-brown">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.description}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
