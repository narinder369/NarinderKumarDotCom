import { site } from "@/lib/site";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const solutions = [
  { href: "/clinics", label: "Clinics" },
  { href: "/solutions/local-businesses", label: "Local Businesses" },
  { href: "/solutions/startups", label: "Startups" },
  { href: "/solutions/custom", label: "Custom Solutions" },
];

const services = [
  { href: "/services#websites", label: "Web Design" },
  { href: "/services#websites", label: "Web Development" },
  { href: "/services#presence", label: "Google Presence" },
  { href: "/services#social", label: "Social Media" },
  { href: "/services#custom", label: "Custom Solutions" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-serif text-xl text-brand-brown">{site.name}</p>
          <p className="mt-2 text-sm text-brand-muted">{site.role}</p>
          <p className="mt-3 text-sm text-brand-body">{site.tagline}</p>
          <div className="mt-5 flex gap-2">
            <SocialLink href="#" label="LinkedIn">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <Instagram className="size-4" />
            </SocialLink>
            <SocialLink href="#" label="GitHub">
              <Github className="size-4" />
            </SocialLink>
          </div>
        </div>
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Solutions" links={solutions} />
        <FooterColumn title="Services" links={services} />
        <div>
          <p className="text-sm font-semibold text-brand-brown">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li>
              <a className="hover:text-brand-pink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <Link className="hover:text-brand-pink" href={site.whatsapp}>
                WhatsApp
              </Link>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-border">
        <p className="container-content py-5 text-sm text-brand-muted">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-brand-brown">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-brand-muted hover:text-brand-pink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={`${label} profile (to be added)`}
      className="inline-flex size-9 items-center justify-center rounded-full border border-brand-border text-brand-muted transition hover:border-brand-pink hover:text-brand-pink"
    >
      {children}
    </a>
  );
}
