import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sprout,
  Users,
  TrendingUp,
  ShieldCheck,
  Leaf,
  Truck,
  Droplets,
  Warehouse,
  Scissors,
  Tractor,
  Recycle,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-chillies.jpg";
import aerialImg from "@/assets/farm-aerial.jpg";
import handsImg from "@/assets/harvest-hands.jpg";
import chilliesImg from "@/assets/produce-chillies.jpg";
import tomatoesImg from "@/assets/produce-tomatoes.jpg";
import spinachImg from "@/assets/produce-spinach.jpg";
import onionsImg from "@/assets/pilot-onions.jpg";
import beetrootImg from "@/assets/pilot-beetroot.jpg";
import greenBeansImg from "@/assets/pilot-green-beans.jpg";
import soilImg from "@/assets/sustainability-soil.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaYield Farms — Growing South Africa's Future Produce" },
      {
        name: "description",
        content:
          "MegaYield Farms is a modern agricultural business producing premium fresh vegetables through sustainable farming for wholesale, retail, food service and commercial supply chains.",
      },
      { property: "og:title", content: "MegaYield Farms — Growing South Africa's Future Produce" },
      {
        property: "og:description",
        content:
          "Premium fresh vegetables grown sustainably for wholesalers, retailers, distributors, processors and hospitality across South Africa.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav overlay />
      <Hero />
      <ValueBar />
      <AboutPreview />
      <ProducePreview />
      <OperationsPreview />
      <WhyUs />
      <Sustainability />
      <LeadershipPreview />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate -mt-[4.5rem] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Cayenne chilli field at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_150/0.82)] via-[oklch(0.18_0.03_150/0.55)] to-[oklch(0.18_0.03_150/0.9)]" />
      </div>
      <div className="container-x relative grid min-h-[92vh] items-center py-32 text-white md:py-40">
        <div className="max-w-3xl">
          <p className="eyebrow text-[var(--color-gold)]">Commercial fresh produce · South Africa</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.98] tracking-tight md:text-7xl lg:text-[5.25rem]">
            Growing South Africa's Future Produce
          </h1>
          <p className="mt-7 max-w-2xl text-base text-white/85 md:text-lg">
            MegaYield Farms is a modern agricultural business producing premium fresh vegetables
            through sustainable farming practices for wholesale, retail, food service, and
            commercial supply chains.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/produce" className="btn-gold">
              Explore Our Produce <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partnerships"
              className="btn-outline border-white/30 text-white hover:bg-white/10"
            >
              Become a Supply Partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueBar() {
  const items = [
    "Wholesale & retail supply",
    "Sustainable production",
    "Quality assured",
    "Scalable capacity",
    "Registered SA enterprise",
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

function AboutPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Who we are</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            A commercial farm built on systems, not seasons.
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            MegaYield Farms produces fresh vegetables for South African wholesalers, retailers,
            distributors, food processors, hospitality groups and institutional buyers. We combine
            disciplined agronomy, protected cultivation and professional management to deliver
            produce our customers can plan around.
          </p>
          <Link to="/about" className="mt-8 btn-outline">
            About the company <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <div className="grid grid-cols-5 gap-3">
            <img
              src={aerialImg}
              alt="Aerial view of MegaYield Farms crop rows"
              loading="lazy"
              className="col-span-3 aspect-[4/5] h-full w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <img
              src={handsImg}
              alt="Freshly harvested produce held in hands"
              loading="lazy"
              className="col-span-2 aspect-[3/4] h-full w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const featured = [
  {
    img: chilliesImg,
    name: "Cayenne Chilli Peppers",
    status: "Core Commercial Crop",
    body: "Our flagship crop, grown to a consistent wholesale specification for processors and traders.",
  },
  {
    img: tomatoesImg,
    name: "Tomatoes",
    status: "Protected Cultivation",
    body: "Vine-ripened tomatoes produced under protected structures for dependable quality.",
  },
  {
    img: spinachImg,
    name: "Spinach",
    status: "Active Production",
    body: "Leaf-fresh spinach handled through the cool chain for retail and food-service buyers.",
  },
  {
    img: onionsImg,
    name: "Onions",
    status: "Expanding Production",
    body: "A growing programme built for bulk wholesale and processing demand.",
  },
  {
    img: beetrootImg,
    name: "Beetroot",
    status: "Growing Portfolio",
    body: "Fresh market beetroot grown under sustainable practices and strict quality standards.",
  },
  {
    img: greenBeansImg,
    name: "Green Beans",
    status: "Seasonal Production",
    body: "Part of our diversified basket, supporting a broader fresh produce offering.",
  },
];

function ProducePreview() {
  return (
    <section className="bg-[oklch(0.97_0.018_90)] py-24 md:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our produce</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
              Premium fresh vegetables, grown to specification.
            </h2>
          </div>
          <Link to="/produce" className="btn-outline">
            View all produce <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-[5/4] w-full overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-[oklch(0.97_0.018_90)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    {p.status}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                  <Link
                    to="/produce"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const operationSteps = [
  { icon: Sprout, title: "Seedling Nursery", body: "Healthy, vigorous transplants propagated under controlled conditions." },
  { icon: Warehouse, title: "Protected Cultivation", body: "Shade-house growing that stabilises quality through the season." },
  { icon: Tractor, title: "Open Field Production", body: "Planned rotations and disciplined field management at scale." },
  { icon: Droplets, title: "Irrigation Systems", body: "Efficient, scheduled water delivery matched to crop demand." },
  { icon: Scissors, title: "Harvesting", body: "Timed picking cycles that protect freshness and shelf life." },
  { icon: Truck, title: "Packing & Distribution", body: "Graded, packed and dispatched to commercial buyers." },
];

function OperationsPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">Operations</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
          One production system, end to end.
        </h2>
        <p className="mt-5 text-muted-foreground md:text-lg">
          From propagation to dispatch, every stage is managed in-house so buyers get a predictable
          product and a predictable schedule.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {operationSteps.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Link to="/operations" className="btn-outline">
          Inside our operations <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: TrendingUp, title: "Reliable Supply", body: "Planned production cycles and a diversified basket that keep deliveries consistent." },
    { icon: Recycle, title: "Sustainable Farming", body: "Responsible water use, soil health and crop rotation built into daily practice." },
    { icon: BadgeCheck, title: "Quality Assurance", body: "Grading and handling standards applied from harvest through to dispatch." },
    { icon: Handshake, title: "Commercial Partnerships", body: "Straightforward, long-term supply agreements with professional buyers." },
    { icon: Sprout, title: "Scalable Production", body: "Land, systems and crop programmes designed to grow with customer demand." },
    { icon: ShieldCheck, title: "Professional Management", body: "A registered enterprise with clear governance, records and accountability." },
  ];
  return (
    <section className="bg-[oklch(0.97_0.018_90)] py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why choose MegaYield Farms</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            A supply partner you can plan your business around.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container-x grid items-center gap-14 py-24 md:grid-cols-2 md:py-32">
        <Reveal>
          <p className="eyebrow text-[var(--color-gold)]">Sustainability</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            Farming for the next decade, not the next harvest.
          </h2>
          <ul className="mt-8 space-y-4 text-white/80">
            {[
              "Responsible water use through efficient irrigation scheduling",
              "Soil health protected by rotation, cover and organic matter",
              "Crop diversification that spreads risk and protects supply",
              "Efficient production systems that reduce waste and inputs",
              "Long-term environmental stewardship of the land we farm",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Leaf className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <span className="text-sm md:text-base">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/sustainability"
            className="mt-9 btn-outline border-white/30 text-white hover:bg-white/10"
          >
            Our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={soilImg}
            alt="Healthy soil and a young seedling held in cupped hands"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

const leadership = [
  {
    name: "Karabo Molamu",
    role: "Founder & Managing Director",
    initials: "KM",
  },
  {
    name: "Zwelihle Zulu",
    role: "Co-Founder & Operations Director",
    initials: "ZZ",
  },
  {
    name: "Gilbert Sehoole",
    role: "Mentor & Agricultural Supervisor",
    initials: "GS",
  },
];

function LeadershipPreview() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] md:text-5xl">
            The people behind the yield.
          </h2>
        </div>
        <Link to="/about" className="btn-outline">
          Meet the team <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {leadership.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="group h-full rounded-3xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-[var(--shadow-lift)]">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--gradient-hero)] font-display text-2xl text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-105">
                {p.initials}
              </div>
              <h3 className="mt-5 font-display text-xl transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="container-x pb-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.22_0.04_148)] px-8 py-20 text-center text-white md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 0%, oklch(0.74 0.13 78 / 0.35), transparent 60%), radial-gradient(40% 60% at 0% 100%, oklch(0.5 0.12 145 / 0.45), transparent 60%)",
            }}
          />
          <div className="relative">
            <p className="eyebrow text-[var(--color-gold)]">Supply partnerships</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
              Let's Grow Together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Talk to us about consistent volumes, product specification and delivery schedules for
              your business.
            </p>
            <Link to="/contact" className="mt-9 btn-gold">
              Contact Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
