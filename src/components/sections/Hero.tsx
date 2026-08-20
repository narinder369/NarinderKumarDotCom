import Link from "next/link";
import { ArrowRight, Globe, Code2, MapPin, Share2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceMockup } from "@/components/mockups/DeviceMockup";
import { FadeIn } from "@/components/motion/FadeIn";

const capabilities = [
  { label: "Web Design", icon: Globe },
  { label: "Web Development", icon: Code2 },
  { label: "Google Presence", icon: MapPin },
  { label: "Social Media", icon: Share2 },
  { label: "Custom Solutions", icon: Puzzle },
];

export function Hero() {
  return (
    <section className="overflow-x-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="container-content grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <FadeIn>
          <p className="eyebrow">Digital solutions that drive growth</p>
          <h1 className="mt-4 max-w-xl font-serif text-[2.35rem] font-medium leading-[1.12] text-brand-brown sm:text-5xl lg:text-[3.4rem]">
            Websites & Digital Solutions That Help Businesses Grow
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-muted sm:text-lg">
            I design and develop modern websites and digital solutions that help
            businesses build trust, attract customers, and turn online visitors
            into real enquiries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/portfolio">
                View My Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
            {capabilities.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-brand-body">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-sky/25">
                  <item.icon className="size-4 text-brand-sky" aria-hidden />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.1} className="pb-8 lg:pb-0">
          <DeviceMockup />
        </FadeIn>
      </div>
    </section>
  );
}
