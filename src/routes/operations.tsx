import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import irrigationImg from "@/assets/ops-irrigation.jpg";
import packingImg from "@/assets/ops-packing.jpg";
import seedlingsImg from "@/assets/pilot-seedlings.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — MegaYield Farms" },
      {
        name: "description",
        content:
          "Inside the MegaYield Farms production system: seedling propagation, crop establishment, irrigation, protected cultivation, field management, harvesting, packing and distribution.",
      },
      { property: "og:title", content: "Operations — MegaYield Farms" },
      {
        property: "og:description",
        content: "An end-to-end fresh produce production system built for commercial supply.",
      },
      { property: "og:image", content: irrigationImg },
      { name: "twitter:image", content: irrigationImg },
    ],
  }),
  component: OperationsPage,
});

const stages = [
  {
    step: "01",
    title: "Seedling propagation",
    body: "Every crop starts in our nursery, where seed is propagated under managed conditions to produce healthy, uniform transplants.",
  },
  {
    step: "02",
    title: "Crop establishment",
    body: "Transplants are set into prepared beds on a planned schedule, so blocks reach maturity in a sequence that supports continuous supply.",
  },
  {
    step: "03",
    title: "Irrigation",
    body: "Water is delivered through efficient scheduled systems matched to crop stage, reducing waste while keeping growth consistent.",
  },
  {
    step: "04",
    title: "Protected cultivation",
    body: "Shade-house structures buffer sensitive crops from heat and weather extremes, stabilising quality across the season.",
  },
  {
    step: "05",
    title: "Field management",
    body: "Scouting, nutrition and integrated crop protection are applied on a disciplined routine and recorded as we go.",
  },
  {
    step: "06",
    title: "Harvesting",
    body: "Picking cycles are timed to maturity and market requirement, protecting freshness and shelf life on arrival.",
  },
  {
    step: "07",
    title: "Packing",
    body: "Produce is graded, sorted and packed to buyer specification in clean, food-safe handling conditions.",
  },
  {
    step: "08",
    title: "Distribution",
    body: "Orders are consolidated and dispatched to wholesale, retail, processing and hospitality customers on agreed schedules.",
  },
];

function OperationsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Operations"
        title="From propagation to dispatch."
        intro="Our production journey is managed in-house at every stage, which is what allows us to commit to consistent quality and dependable delivery."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: seedlingsImg, cap: "Seedling nursery" },
            { img: irrigationImg, cap: "Irrigation systems" },
            { img: packingImg, cap: "Packing & distribution" },
          ].map((c, i) => (
            <Reveal key={c.cap} delay={i * 80}>
              <figure className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.cap}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 max-w-2xl">
          <p className="eyebrow">The production journey</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Eight managed stages</h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.step} delay={(i % 2) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-[var(--shadow-lift)]">
                <span className="font-display text-3xl text-[var(--color-gold)]">{s.step}</span>
                <h3 className="mt-3 font-display text-xl transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 rounded-3xl border border-border p-10 md:flex md:items-center md:justify-between md:p-14">
          <div>
            <h3 className="font-display text-2xl md:text-3xl">Want to see it in person?</h3>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Commercial buyers and partners are welcome to arrange a farm visit.
            </p>
          </div>
          <Link to="/contact" className="mt-6 btn-primary md:mt-0">
            Arrange a visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
