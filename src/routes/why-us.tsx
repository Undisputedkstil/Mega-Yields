import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, TrendingUp, ShieldCheck, Sprout, Users, Truck, Tag } from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose MegaYield Farms" },
      { name: "description", content: "Six differentiators that make MegaYield Farms a confident choice for buyers, funders and partners." },
      { property: "og:title", content: "Why Choose MegaYield Farms" },
      { property: "og:description", content: "Proven production, professional operations, scalable land, and youth-led advantage." },
    ],
  }),
  component: WhyUsPage,
});

const diffs = [
  { icon: TrendingUp, title: "Proven track record", body: "Six years of operations and a 400% scale-up in 2025 — real production data, not projections." },
  { icon: ShieldCheck, title: "Professional operations", body: "Registered enterprise with structured systems, financial discipline and a consistent reporting cadence." },
  { icon: Truck, title: "Reliable supplier", body: "Continuous production cycles and dependable handling for retail and wholesale partners across Gauteng." },
  { icon: Sprout, title: "Built for scale", body: "8 hectares of accessible land via our Kgomodiile Projects partnership — clear headroom to grow with demand." },
  { icon: Tag, title: "Market validation", body: "Active B2B supply relationships and engagement with major retailers like Spar and OK." },
  { icon: Users, title: "Youth-led credibility", body: "Founders under 35 — eligible for substantial South African government growth programs as part of our funding mix." },
];

const pathways = [
  { t: "Supply contracts", b: "For B2B buyers, distributors and retailers seeking a reliable chilli supplier." },
  { t: "Strategic investment", b: "For impact and commercial investors backing proven youth-led agriculture." },
  { t: "Strategic collaboration", b: "For equipment, land, logistics or expertise partners interested in growing with us." },
  { t: "Community partnership", b: "For NGOs and organisations focused on food security and skills development." },
];

function WhyUsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Why us"
        title="Six reasons partners back MegaYield."
        intro="Each differentiator below is something we can prove on the ground, in the books, or in the field."
      />
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d, i) => (
            <div key={d.title} className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <span className="font-display text-sm text-[var(--color-gold)]">0{i + 1}</span>
              <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <d.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <p className="eyebrow">Multiple pathways for partnership</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Let's explore how we can grow together.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We are a professional, proven agricultural operation positioned for scalable growth.
            We're actively serving major retailers, building B2B partnerships across Gauteng,
            pursuing strategic growth opportunities, and creating jobs and community impact.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pathways.map((p) => (
              <div key={p.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-primary p-10 text-primary-foreground md:flex md:items-center md:justify-between md:p-14">
          <div>
            <p className="eyebrow text-[var(--color-gold)]">Ready to dig in?</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Schedule a farm visit.</h2>
            <p className="mt-3 max-w-xl text-white/80">Meet the team, see the operation, and get a feel for the discipline behind the data.</p>
          </div>
          <Link to="/contact" className="mt-6 btn-gold md:mt-0">Schedule a visit <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
