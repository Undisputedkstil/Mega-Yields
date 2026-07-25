import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import {
  Building2,
  Factory,
  Handshake,
  HeartHandshake,
  Landmark,
  Store,
  UtensilsCrossed,
} from "lucide-react";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — MegaYield Farms" },
      {
        name: "description",
        content:
          "MegaYield Farms partners with retailers, wholesalers, distributors, food processors, hospitality groups, government and NGOs across South Africa.",
      },
      { property: "og:title", content: "Partnerships — MegaYield Farms" },
      {
        property: "og:description",
        content: "Supply, distribution and development partnerships with a commercial SA farm.",
      },
    ],
  }),
  component: PartnershipsPage,
});

const partners = [
  { icon: Store, title: "Retailers", body: "Consistent, graded fresh produce for supermarket and independent retail shelves." },
  { icon: Building2, title: "Wholesalers", body: "Bulk volumes on planned schedules for market agents and wholesale traders." },
  { icon: Handshake, title: "Distributors", body: "Dependable supply lines for distributors servicing multiple commercial accounts." },
  { icon: Factory, title: "Food processors", body: "Crops grown to specification for processing, sauces, drying and value-add lines." },
  { icon: UtensilsCrossed, title: "Hospitality", body: "Fresh vegetables for hotels, restaurants, caterers and contract food service." },
  { icon: Landmark, title: "Government", body: "Programme, procurement and agricultural development collaboration." },
  { icon: HeartHandshake, title: "NGOs", body: "Food security, community development and skills-focused partnerships." },
];

function PartnershipsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Partnerships"
        title="Built to grow alongside our customers."
        intro="We work with organisations that need a fresh produce supplier they can rely on season after season — and with partners who help us scale responsibly."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-xl">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Enquire</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Start a partnership conversation</h2>
            <p className="mt-5 text-muted-foreground">
              Tell us about your volumes, product requirements and delivery expectations. We'll come
              back to you with what we can commit to and how we'd plan production around it.
            </p>
          </div>
          <div className="md:col-span-7">
            <InquiryForm defaultInquiry="Supply partnership (B2B buyer)" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
