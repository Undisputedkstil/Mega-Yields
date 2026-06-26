import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Users, TrendingUp, ShieldCheck, MapPin, Leaf } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-chillies.jpg";
import aerialImg from "@/assets/farm-aerial.jpg";
import handsImg from "@/assets/harvest-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaYield Farms — Purpose in Every Yield" },
      { name: "description", content: "Youth-led South African agricultural enterprise supplying cayenne chillies, tomatoes and spinach to supermarkets, distributors and traders." },
      { property: "og:title", content: "MegaYield Farms — Purpose in Every Yield" },
      { property: "og:description", content: "Proven production, proven market, proven team. B2B vegetable supply from Pretoria, South Africa." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />
      <ValueBar />
      <ProductionStrip />
      <DifferentiatorsSection />
      <ImpactSection />
      <DualCTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Cayenne chillies at golden hour" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_150/0.78)] via-[oklch(0.18_0.03_150/0.55)] to-[oklch(0.18_0.03_150/0.85)]" />
      </div>
      <div className="container-x relative grid min-h-[88vh] items-center py-24 text-white md:py-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--color-gold)]">South Africa · Established 2019</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Purpose in <em className="not-italic text-[var(--color-gold)]">every</em> yield.
            <br />
            Growing what matters.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Reliable chilli pepper supplier with growth opportunities for B2B partners,
            strategic investors, and community collaborators across Gauteng.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold">
              Supply Partnership <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/funding" className="btn-outline border-white/30 text-white hover:bg-white/10">
              Strategic Partnerships <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              ["2019", "Operating since"],
              ["400%", "Scaled in 2025"],
              ["8 ha", "Land available"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-3xl text-[var(--color-gold)] md:text-4xl">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-white/65">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ValueBar() {
  const items = [
    "Spar & OK supermarket interest",
    "Youth entrepreneur status",
    "CIPC registered",
    "Community impact built-in",
    "8 ha scalable land",
  ];
  return (
    <div className="border-y border-border bg-[oklch(0.94_0.025_95)]">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs font-semibold uppercase tracking-widest text-foreground/70">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5 text-[var(--color-gold)]" /> {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProductionStrip() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">What we grow</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            Cayenne chillies at the core. A growing basket beyond.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            We've spent six years refining a single, high-demand crop. That discipline is now the
            engine for expansion into tomatoes, spinach and selected pilot crops — all grown to
            wholesale-grade consistency.
          </p>
          <Link to="/produce" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            See our produce <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="md:col-span-7">
          <div className="grid grid-cols-5 gap-3">
            <img src={aerialImg} alt="Aerial view of crop rows" loading="lazy" className="col-span-3 aspect-[4/5] h-full w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]" />
            <img src={handsImg} alt="Hands holding freshly harvested chillies" loading="lazy" className="col-span-2 aspect-[3/4] h-full w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  const items = [
    { icon: TrendingUp, title: "Proven track record", body: "Operating since 2019, with a 400% scale-up in 2025 and verified production data." },
    { icon: ShieldCheck, title: "Professional operations", body: "Clear systems, registered entity, and an experienced management team you can underwrite." },
    { icon: Sprout, title: "Built for scale", body: "Currently working 2.5 of 8 available hectares — room to grow with demand." },
    { icon: Users, title: "Youth-led advantage", body: "Founders under 35 — eligible for substantial South African government funding programs." },
    { icon: MapPin, title: "Strategic location", body: "Plot 787 Ten Morgan, Winterveld — close to Pretoria's wholesale and retail channels." },
    { icon: Leaf, title: "Community impact", body: "Jobs, apprenticeships, and food-security initiatives integrated into how we operate." },
  ];
  return (
    <section className="bg-[oklch(0.97_0.018_90)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Why partners back us</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
              Proven production. Proven market. Proven team.
            </h2>
          </div>
          <Link to="/why-us" className="btn-outline">All differentiators <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="eyebrow text-[var(--color-gold)]">Community impact</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            "Keeping people fed is our peace of mind."
          </h2>
          <p className="mt-5 max-w-md text-white/80">
            Impact isn't a side project for us — it's the reason MegaYield exists. Every hectare
            we expand creates jobs, apprenticeships, and food for communities around Winterveld.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-8 self-end">
          {[
            ["Local jobs", "Created and supported through every expansion phase"],
            ["Apprenticeships", "Hands-on training for young agricultural workers"],
            ["Food security", "Fresh produce reaching local markets and households"],
            ["Land stewardship", "Responsible cultivation across 8 hectares"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-white/20 pl-5">
              <dt className="font-display text-xl text-[var(--color-gold)]">{k}</dt>
              <dd className="mt-2 text-sm text-white/75">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function DualCTA() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { to: "/funding", eyebrow: "For funders & investors", title: "See the investment case", body: "Business overview, growth trajectory, team credentials, and impact plan.", cta: "Funding & support" },
          { to: "/contact", eyebrow: "For B2B buyers", title: "Talk supply partnerships", body: "Consistent volume, wholesale-grade produce, transparent operations — let's discuss.", cta: "Start a conversation" },
        ].map((c) => (
          <Link
            to={c.to}
            key={c.to}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:p-14"
          >
            <p className="eyebrow">{c.eyebrow}</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">{c.title}</h3>
            <p className="mt-4 max-w-md text-muted-foreground">{c.body}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all">
              {c.cta} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
