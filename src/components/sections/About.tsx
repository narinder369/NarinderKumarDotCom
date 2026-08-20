import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { Portrait } from "@/components/about/Portrait";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="container-content grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <Portrait />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="eyebrow">About me</p>
          <h2 className="section-heading mt-4">Hi, I&apos;m Narinder Kumar.</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-muted">
            <p>
              I&apos;m a software developer focused on building modern websites, web
              applications, and digital solutions for businesses.
            </p>
            <p>
              I combine design, development, and business thinking to create digital
              experiences that are not only visually professional but also useful for the
              people who use them.
            </p>
            <p>
              Whether you need a new business website, want to improve your existing online
              presence, or have an idea for a custom digital solution, I&apos;m here to help
              turn it into reality.
            </p>
          </div>
          <Button asChild className="mt-8">
            <Link href="/about">
              More About Me
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
