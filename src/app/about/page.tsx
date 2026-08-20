import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Portrait } from "@/components/about/Portrait";

export const metadata: Metadata = {
  title: "About",
  description:
    "Narinder Kumar is a software developer focused on modern websites, web applications, and digital solutions for businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About me"
        title="Hi, I'm Narinder Kumar."
        description="I'm a software developer focused on building modern websites, web applications, and digital solutions for businesses."
      />
      <section className="py-16">
        <div className="container-content grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Portrait />
          <div className="space-y-4 text-base leading-relaxed text-brand-muted">
            <p>
              I combine design, development, and business thinking to create digital
              experiences that are not only visually professional but also useful for the
              people who use them.
            </p>
            <p>
              A lot of my work is for clinics and local businesses that need to look
              credible online, explain what they offer clearly, and make it easy for
              customers or patients to get in touch.
            </p>
            <p>
              Whether you need a new business website, want to improve your existing
              online presence, or have an idea for a custom digital solution, I&apos;m here
              to help turn it into reality.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
