import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTA } from "@/components/sections/CTA";
import { BrowserMockup } from "@/components/mockups/DeviceMockup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Solutions for Clinics",
  description:
    "Professional clinic websites and digital solutions that help patients discover your practice, understand services, and get in touch.",
  alternates: { canonical: "/clinics" },
};

const features = [
  "Professional Clinic Websites",
  "Doctor & Specialist Profiles",
  "Treatment & Service Pages",
  "WhatsApp Appointment Enquiries",
  "Click-to-Call Integration",
  "Google Maps & Location",
  "Patient FAQs",
  "Reviews & Testimonials",
  "Social Media Presence",
  "Mobile-First Design",
];

export default function ClinicsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Specialized for healthcare"
        title="Digital Solutions for Clinics"
        description="Healthcare businesses need more than just a website. I help clinics create a professional digital presence that makes it easier for potential patients to discover the clinic, understand its services, meet the doctor, and get in touch."
      />
      <section className="py-16">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <BrowserMockup />
          <div>
            <h2 className="section-heading">Built around patients and trust</h2>
            <p className="mt-4 text-brand-muted">
              A clinic website should feel calm, credible, and easy to use — on a phone as
              well as a desktop. I design each page so a visitor can quickly understand who
              you are, what you offer, and how to reach you.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-brand-body">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-pink" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
