import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MegaYield Farms" },
      {
        name: "description",
        content:
          "Contact MegaYield Farms about fresh produce supply, partnerships or a farm visit. Based in Winterveld, Pretoria, Gauteng, South Africa.",
      },
      { property: "og:title", content: "Contact MegaYield Farms" },
      {
        property: "og:description",
        content: "Talk to our team about supply volumes, specification and delivery.",
      },
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
        intro="Whether you're a buyer, distributor, processor, partner or community organisation — we'd like to hear from you."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Direct contact</p>
            <h2 className="mt-3 font-display text-3xl">Reach the team</h2>
            <ul className="mt-8 space-y-6">
              <ContactRow icon={Phone} label="Phone" value="060 486 5455" href="tel:+27604865455" />
              <ContactRow
                icon={Mail}
                label="Email"
                value="hello@megayieldfarms.co.za"
                href="mailto:hello@megayieldfarms.co.za"
              />
              <ContactRow
                icon={MapPin}
                label="Business location"
                value="Plot 787 Ten Morgan, Winterveld, Pretoria, Gauteng, South Africa"
              />
              <ContactRow
                icon={Clock}
                label="Business hours"
                value="Monday – Friday · 08h00 – 17h00 (SAST)"
              />
            </ul>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Follow us
              </p>
              <div className="mt-3 flex gap-3">
                {[
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={`MegaYield Farms on ${label}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-[oklch(0.97_0.018_90)] p-6">
              <p className="eyebrow">Farm visits</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Commercial buyers, partners and investors are warmly invited to visit the farm in
                Winterveld. Select "Schedule a farm visit" in the form to arrange a date.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-7">
            <InquiryForm />

            <div className="mt-8 overflow-hidden rounded-3xl border border-border">
              <div className="grid aspect-[16/9] place-items-center bg-[var(--gradient-hero)] text-center">
                <div className="px-6">
                  <MapPin className="mx-auto h-8 w-8 text-[var(--color-gold)]" aria-hidden />
                  <p className="mt-3 font-display text-xl text-white">Find us in Winterveld</p>
                  <p className="mt-1 text-sm text-white/70">
                    Map integration placeholder — Plot 787 Ten Morgan, Pretoria, Gauteng
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-base text-foreground">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
