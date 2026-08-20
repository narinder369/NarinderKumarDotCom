import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserMockup } from "@/components/mockups/DeviceMockup";
import { FadeIn } from "@/components/motion/FadeIn";

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

export function Clinics() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-content grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <BrowserMockup />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="eyebrow">Specialized for healthcare</p>
          <h2 className="section-heading mt-4">Digital Solutions for Clinics</h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted">
            Healthcare businesses need more than just a website.
          </p>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            I help clinics create a professional digital presence that makes it easier for
            potential patients to discover the clinic, understand its services, meet the
            doctor, and get in touch.
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
            <Link href="/clinics">
              Explore Clinic Solutions
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
