import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container-content">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-brand-pink px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div
              className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full bg-white/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-10 size-64 rounded-full bg-[#5A1F0A]/10"
              aria-hidden
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <h2 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                  Ready to Build a Better
                  <br />
                  Online Presence?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                  Whether you&apos;re starting a new business, improving an existing website,
                  or looking for a custom digital solution, let&apos;s talk about what you
                  want to achieve.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button asChild variant="white" className="w-full">
                  <Link href="/contact">
                    Start a Conversation
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outlineWhite" className="w-full">
                  {site.whatsapp.startsWith("http") ? (
                    <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                      WhatsApp Me
                    </a>
                  ) : (
                    <Link href={site.whatsapp}>WhatsApp Me</Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
