import { About } from "@/components/sections/About";
import { Clinics } from "@/components/sections/Clinics";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { ValueSection } from "@/components/sections/ValueSection";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ValueSection />
      <Services />
      <Clinics />
      <Solutions />
      <Portfolio />
      <Process />
      <WhyWorkWithMe />
      <About />
      <CTA />
    </main>
  );
}
