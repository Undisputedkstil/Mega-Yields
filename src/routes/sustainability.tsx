import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import soilImg from "@/assets/sustainability-soil.jpg";
import { ArrowRight, Droplets, Layers, Leaf, Recycle, Sprout } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — MegaYield Farms" },
      {
        name: "description",
        content:
          "How MegaYield Farms approaches water conservation, responsible farming, soil management, sustainable production and long-term environmental commitments.",
      },
      { property: "og:title", content: "Sustainability — MegaYield Farms" },
      {
        property: "og:description",
        content: "Responsible water use, soil health and efficient production systems.",
      },
      { property: "og:image", content: soilImg },
      { name: "twitter:image", content: soilImg },
    ],
  }),
  component: SustainabilityPage,
});

const pillars = [
  {
    icon: Droplets,
    title: "Water conservation",
    body: "Irrigation is scheduled to crop demand and delivered through efficient systems, so every litre applied does productive work.",
  },
  {
    icon: Leaf,
    title: "Responsible farming",
    body: "Integrated crop protection, careful input selection and routine scouting keep interventions targeted rather than routine.",
  },
  {
    icon: Layers,
    title: "Soil management",
    body: "Rotation, organic matter and minimal disturbance protect soil structure and biology as the foundation of every harvest.",
  },
  {
    icon: Recycle,
    title: "Sustainable production",
    body: "Efficient planning across nursery, field and packhouse reduces waste, rework and unnecessary resource use.",
  },
  {
    icon: Sprout,
    title: "Future commitments",
    body: "We continue to invest in water-efficient infrastructure, renewable options and improved measurement as the business scales.",
  },
];

function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Sustainability"
        title="Farming that protects the resource it depends on."
        intro="Sustainable practice is a commercial requirement, not a slogan. Healthy soil, efficient water and diversified crops are what make long-term supply possible."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <img
              src={soilImg}
              alt="Healthy soil and a young seedling held in cupped hands"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-6">
            <p className="eyebrow">Our commitment</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Long-term environmental stewardship
            </h2>
            <p className="mt-5 text-muted-foreground md:text-lg">
              We farm land we intend to keep producing for decades. That shapes how we irrigate, how
              we rotate crops, how we manage soil and how we plan expansion — always with the next
              decade in view rather than a single season's yield.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border p-10 md:flex md:items-center md:justify-between md:p-14">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Sustainability in your supply chain</h3>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Buyers with sustainability reporting requirements are welcome to discuss our practices
              in detail.
            </p>
          </div>
          <Link to="/contact" className="mt-6 btn-primary md:mt-0">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
