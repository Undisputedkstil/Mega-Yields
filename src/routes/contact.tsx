import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MegaYield Farms" },
      { name: "description", content: "Talk to MegaYield Farms about supply, funding, partnership or a farm visit. Based in Winterveld, Pretoria, South Africa." },
      { property: "og:title", content: "Contact MegaYield Farms" },
      { property: "og:description", content: "Get in touch about supply, funding or partnership." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        intro="Whether you're a funder, B2B buyer, partner or community organisation — we'd love to hear from you."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Direct contact</p>
            <h2 className="mt-3 font-display text-3xl">Reach the team</h2>
            <ul className="mt-8 space-y-6">
              <ContactRow icon={Phone} label="Phone" value="060 486 5455" href="tel:+27604865455" />
              <ContactRow icon={Mail} label="Email" value="hello@megayieldfarms.co.za" href="mailto:hello@megayieldfarms.co.za" />
              <ContactRow icon={MapPin} label="Farm" value="Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng, South Africa" />
              <ContactRow icon={Clock} label="Hours" value="Monday – Friday · 08h00 – 17h00 (SAST)" />
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-[oklch(0.97_0.018_90)] p-6">
              <p className="eyebrow">Farm visits</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Funders, investors and serious B2B partners are warmly invited to visit the
                farm in Winterveld. Select "Schedule a farm visit" in the form to arrange a date.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 text-base text-foreground">{value}</p>
      </div>
    </div>
  );
  return <li>{href ? <a href={href} className="block transition-opacity hover:opacity-80">{content}</a> : content}</li>;
}
