import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import chillies from "@/assets/produce-chillies.jpg";
import tomatoes from "@/assets/produce-tomatoes.jpg";
import spinach from "@/assets/produce-spinach.jpg";
import onionsImg from "@/assets/pilot-onions.jpg";
import beetrootImg from "@/assets/pilot-beetroot.jpg";
import tomatoesShadeImg from "@/assets/pilot-tomatoes-shade.jpg";
import greenBeansImg from "@/assets/pilot-green-beans.jpg";
import seedlingsImg from "@/assets/pilot-seedlings.jpg";
import { ArrowRight, Sprout } from "lucide-react";

export const Route = createFileRoute("/produce")({
  head: () => ({
    meta: [
      { title: "What We Produce — MegaYield Farms" },
      { name: "description", content: "Cayenne chilli peppers, tomatoes, spinach and pilot crops grown to wholesale-grade consistency for South African B2B buyers." },
      { property: "og:title", content: "What We Produce — MegaYield Farms" },
      { property: "og:description", content: "Wholesale-grade vegetable supply for supermarkets, distributors and traders." },
      { property: "og:image", content: chillies },
    ],
  }),
  component: ProducePage,
});

const products = [
  {
    img: chillies,
    name: "Cayenne Chilli Peppers",
    tag: "Core crop",
    body: "Our flagship product. Six years of dedicated production discipline. Grown to consistent specification for wholesale buyers.",
    specs: ["Variety: Cayenne", "Current area: 0.5 ha → expanding to 2 ha", "Year-round harvest cycles"],
  },
  {
    img: tomatoes,
    name: "Tomatoes",
    tag: "Active production",
    body: "Vine-ripened tomatoes grown alongside our chilli operation to broaden our supply offering to existing B2B channels.",
    specs: ["Standard wholesale grade", "Seasonal cycles", "Bulk packaging available"],
  },
  {
    img: spinach,
    name: "Spinach",
    tag: "Active production",
    body: "Leaf-fresh spinach delivered in volumes that fit supermarket and bulk distributor logistics.",
    specs: ["Fresh-cut, bundled", "Cool-chain handled", "Reliable cadence"],
  },
];

function ProducePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="What we produce"
        title="Wholesale-grade produce, grown with discipline."
        intro="Our basket is intentionally focused. We grow what we can guarantee, in volumes that fit South African B2B supply chains."
      />

      <section className="container-x py-20 md:py-28">
        <div className="space-y-20 md:space-y-28">
          {products.map((p, i) => (
            <article key={p.name} className={`grid gap-10 md:grid-cols-12 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-6">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-[5/4] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]" />
              </div>
              <div className="md:col-span-6">
                <p className="eyebrow">{p.tag}</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{p.name}</h2>
                <p className="mt-5 text-muted-foreground md:text-lg">{p.body}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <Sprout className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Pilot & emerging crops</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Pilot & Emerging Crops</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Expanding our product portfolio through carefully managed pilot production,
              protected cultivation, and sustainable farming practices as we continue
              building long-term commercial supply capacity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: onionsImg,
                name: "Onions",
                badge: "Expanding Production",
                body: "Our onion programme is continuously expanding as we refine production systems and strengthen our ability to supply consistent, high-quality produce to commercial markets.",
                features: ["Commercial production", "Quality-focused cultivation", "Wholesale supply development"],
              },
              {
                img: beetrootImg,
                name: "Beetroot",
                badge: "Growing Portfolio",
                body: "Beetroot forms part of our diversified crop portfolio, produced using sustainable farming practices and strict quality standards to meet evolving market demand.",
                features: ["Fresh market production", "Sustainable cultivation", "Reliable seasonal supply"],
              },
              {
                img: tomatoesShadeImg,
                name: "Tomatoes",
                badge: "Protected Cultivation",
                body: "Our tomatoes are cultivated in protected growing environments to deliver healthy, vine-ripened produce with consistent quality throughout the production season.",
                features: ["Shade house production", "Fresh wholesale supply", "Quality-driven cultivation"],
              },
              {
                img: greenBeansImg,
                name: "Green Beans",
                badge: "Seasonal Production",
                body: "Green beans are grown as part of our diversified production strategy, supporting a broader fresh produce offering for retailers, distributors, and wholesale buyers.",
                features: ["Fresh market quality", "Sustainable growing practices", "Commercial supply"],
              },
              {
                img: seedlingsImg,
                name: "Seedling Nursery",
                badge: "The Foundation of Every Harvest",
                body: "Every successful harvest begins in our nursery. We propagate healthy, vigorous seedlings under carefully managed conditions, creating a strong foundation for consistent crop performance across every growing season.",
                features: ["Professional seed propagation", "Healthy transplant development", "Supporting long-term farm growth"],
              },
            ].map((c) => (
              <article
                key={c.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="aspect-[5/4] w-full overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="inline-flex w-fit items-center rounded-full border border-border bg-[oklch(0.97_0.018_90)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                    {c.badge}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{c.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Sprout className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>



        <div className="mt-16 rounded-3xl border border-border p-10 md:flex md:items-center md:justify-between md:p-14">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Talk to us about supply</h3>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Pricing: competitive wholesale rates with volume discounts available. Contact us
              for specific pricing discussions tailored to your channel.
            </p>
          </div>
          <Link to="/contact" className="mt-6 btn-primary md:mt-0">
            Discuss pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
