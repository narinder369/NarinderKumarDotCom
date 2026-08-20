import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { Globe, MapPin, Share2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, business presence, social media, and custom web solutions from Narinder Kumar.",
  alternates: { canonical: "/services" },
};

const items = [
  {
    id: "websites",
    title: "Professional Websites",
    icon: Globe,
    body: "Modern, responsive websites designed around your business, customers, and goals. Clear structure, professional design, and a smooth experience on every screen size.",
  },
  {
    id: "presence",
    title: "Business & Local Presence",
    icon: MapPin,
    body: "Build a stronger online presence so customers can discover your business, understand what you offer, and contact you without friction — including Google Maps and local visibility where it helps.",
  },
  {
    id: "social",
    title: "Social Media",
    icon: Share2,
    body: "Create a consistent and professional social presence that builds trust and keeps your business visible between website visits.",
  },
  {
    id: "custom",
    title: "Custom Web Solutions",
    icon: Layers,
    body: "Custom web applications, dashboards, tools, and digital solutions built around your requirements rather than a generic template.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        title="What I Can Help You With"
        description="Websites, digital presence, social media, and custom solutions — designed to help your business look credible and make it easy for customers to get in touch."
      />
      <section className="py-16">
        <div className="container-content grid gap-6">
          {items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-2xl border border-brand-border bg-white p-6 sm:p-8"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-sky/20">
                <item.icon className="size-5 text-brand-sky" aria-hidden />
              </span>
              <h2 className="mt-4 font-serif text-2xl text-brand-brown">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-brand-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
