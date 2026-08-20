import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Narinder Kumar about your website or digital solution.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        title="Start a Conversation"
        description="Tell me a little about your business and what you want the website or digital solution to achieve. I’ll reply at hello@narinderkumar.com."
      />
      <section className="py-16">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
          <aside className="rounded-2xl bg-brand-cream p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-brand-brown">Contact details</h2>
            <ul className="mt-6 space-y-4 text-sm text-brand-body">
              <li>
                <p className="text-brand-muted">Email</p>
                <a className="mt-1 inline-block hover:text-brand-pink" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-brand-muted">WhatsApp</p>
                <p className="mt-1">
                  Share your number in the form and I will continue the conversation on
                  WhatsApp if that is easier for you.
                </p>
              </li>
              <li>
                <p className="text-brand-muted">Location</p>
                <p className="mt-1">{site.location}</p>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
