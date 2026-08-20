"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-brand-border bg-white transition-shadow duration-300",
        scrolled && "shadow-nav",
      )}
    >
      <div className="container-content flex items-center justify-between gap-6 py-3.5 lg:py-4">
        <Link href="/" className="min-w-0 shrink">
          <span className="font-serif text-xl text-brand-brown sm:text-[1.35rem]">
            {site.name}
          </span>
          <span className="mt-0.5 block truncate text-[11px] leading-tight text-brand-muted">
            {site.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.label} className="relative group">
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 text-sm text-brand-body transition-colors hover:text-brand-brown",
                    (pathname.startsWith("/clinics") || pathname.startsWith("/solutions")) &&
                      "text-brand-brown",
                  )}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="size-3.5 opacity-70" aria-hidden />
                </button>
                {pathname.startsWith("/clinics") || pathname.startsWith("/solutions") ? (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand-pink" />
                ) : null}
                <div className="invisible absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-brand-border bg-white p-2 opacity-0 shadow-card transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-brand-body hover:bg-brand-cream hover:text-brand-brown"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm text-brand-body transition-colors hover:text-brand-brown",
                  isActive(link.href) && "text-brand-brown",
                )}
              >
                {link.label}
                {isActive(link.href) ? (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-brand-pink" />
                ) : null}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Let&apos;s Talk</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-brand-border lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-brand-border bg-white lg:hidden"
        >
          <nav className="container-content flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-base"
                    onClick={() => setSolutionsOpen((value) => !value)}
                    aria-expanded={solutionsOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("size-4 transition", solutionsOpen && "rotate-180")}
                    />
                  </button>
                  {solutionsOpen
                    ? link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-brand-muted"
                        >
                          {child.label}
                        </Link>
                      ))
                    : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-2 py-3 text-base",
                    isActive(link.href) && "text-brand-pink",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button asChild className="mt-3">
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
