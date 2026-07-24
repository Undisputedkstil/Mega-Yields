import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import chillies from "@/assets/produce-chillies.jpg";
import tomatoes from "@/assets/produce-tomatoes.jpg";
import spinach from "@/assets/produce-spinach.jpg";
import { ArrowRight, Sprout, Leaf, CircleDot, Cherry, Bean, Trees } from "lucide-react";

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

        <div className="mt-24 rounded-3xl border border-border bg-[oklch(0.97_0.018_90)] p-10 md:p-14">
          <p className="eyebrow">Pilot crops</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">A controlled approach to expansion</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Beyond our core basket, we run small-batch pilots of selected high-value crops.
            We only add a crop to our offering once it meets the same quality and consistency
            bar we hold our chillies to.
          </p>
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
