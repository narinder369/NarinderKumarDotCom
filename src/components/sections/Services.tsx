import Link from "next/link";
import { ArrowRight, Globe, MapPin, Share2, Layers } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const services = [
  {
    title: "Professional Websites",
    description:
      "Modern, responsive websites designed around your business, customers, and goals.",
    href: "/services#websites",
    icon: Globe,
  },
  {
    title: "Business & Local Presence",
    description:
      "Build a stronger online presence so customers can discover and contact your business.",
    href: "/services#presence",
    icon: MapPin,
  },
  {
    title: "Social Media",
    description:
      "Create a consistent and professional social presence that builds trust.",
    href: "/services#social",
    icon: Share2,
  },
  {
    title: "Custom Web Solutions",
    description:
      "Custom web applications, dashboards, tools, and digital solutions.",
    href: "/services#custom",
    icon: Layers,
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="container-content">
        <FadeIn className="text-center">
          <h2 className="section-heading">What I Can Help You With</h2>
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.06}>
              <article className="group h-full rounded-2xl border border-brand-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-sky/20">
                  <service.icon className="size-5 text-brand-sky" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand-brown">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-pink"
                >
                  Learn More
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
