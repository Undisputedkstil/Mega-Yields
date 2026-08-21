import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import chillies from "@/assets/produce-chillies.jpg";
import tomatoes from "@/assets/produce-tomatoes.jpg";
import shadeTomatoes from "@/assets/pilot-tomatoes-shade.jpg";
import onionsImg from "@/assets/pilot-onions.jpg";
import beetrootImg from "@/assets/pilot-beetroot.jpg";
import greenBeansImg from "@/assets/pilot-green-beans.jpg";
import seedlingsImg from "@/assets/pilot-seedlings.jpg";
import spinachImg from "@/assets/produce-spinach.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "Chilli peppers and tomatoes grown for commercial supply in Gauteng, plus pilot crops under development. Contact MegaYield Farms for current availability and volumes.";

export const Route = createFileRoute("/produce")({
  head: () => ({
    meta: [
      { title: "Our Produce | Chilli Pepper & Tomato Supplier, South Africa" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Our Produce — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/produce` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/produce` }],
  }),
  component: ProducePage,
});

const pilots = [
  { name: "Onions", img: onionsImg, note: "Trial plantings assessing bulb size and storage." },
  { name: "Beetroot", img: beetrootImg, note: "Small-scale rows tested for local demand." },
  { name: "Green beans", img: greenBeansImg, note: "Short-cycle crop under production trial." },
  { name: "Spinach", img: spinachImg, note: "Leaf crop supplied where available." },
  { name: "Seedling nursery", img: seedlingsImg, note: "In-house propagation supporting each cycle." },
];

function ProducePage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fresh produce"
          title="Our Produce"
          intro="Chilli peppers lead our production, tomatoes follow, and a portfolio of pilot crops is being developed behind them. Availability varies by crop and production cycle."
        />

        {/* Flagship */}
        <section className="border-b border-border">
          <figure>
            <img
              src={chillies}
              alt="Cayenne chilli peppers harvested at MegaYield Farms"
              className="h-[45vh] w-full object-cover md:h-[62vh]"
            />
          </figure>
          <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-5">
              <p className="eyebrow text-[var(--color-clay)]">Flagship crop</p>
              <h2 className="mt-4 display-lg">Chilli Peppers</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="lede text-foreground">
                Our primary commercial crop, and the crop our planning, irrigation and harvest
                schedules are built around.
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
                Grown in open field and hand-picked at defined maturity for colour, heat consistency
                and shelf life. Chillies are graded and handled cool before dispatch to wholesale,
                retail, processing and food service buyers across Gauteng.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-x-8">
                {[
                  ["Type", "Cayenne and related hot varieties"],
                  ["Form", "Fresh, hand-picked, graded"],
                  ["Buyers", "Wholesale · retail · processing"],
                  ["Cycle", "Continuous picking through season"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-border py-3">
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Tomatoes */}
        <section className="border-b border-border">
          <div className="grid md:grid-cols-2">
            <div className="order-2 px-5 py-14 md:order-1 md:px-14 md:py-20">
              <p className="eyebrow">Second production focus</p>
              <h2 className="mt-4 display-lg">Tomatoes</h2>
              <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
                Tomatoes are our second commercial line, grown in open field and under shade
                structures. Production is expanding cycle by cycle as demand from buyers is
                confirmed, with fruit picked firm and sorted by grade before supply.
              </p>
              <img
                src={shadeTomatoes}
                alt="Tomatoes grown under shade structures"
                className="mt-10 aspect-16/9 w-full object-cover"
                loading="lazy"
              />
            </div>
            <img
              src={tomatoes}
              alt="Ripe tomatoes ready for grading"
              className="order-1 h-72 w-full object-cover md:order-2 md:h-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Pilot crops */}
        <section className="border-b border-border">
          <div className="container-x py-16 md:py-20">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Development portfolio</p>
                <h2 className="mt-4 display-lg">Pilot Crops</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Additional crops under development. Selected produce is supplied to customers where
                available, while trials continue.
              </p>
            </div>

            <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {pilots.map((p) => (
                <li key={p.name}>
                  <img
                    src={p.img}
                    alt={`${p.name} grown at MegaYield Farms`}
                    className="aspect-4/5 w-full object-cover"
                    loading="lazy"
                  />
                  <h3 className="mt-4 font-display text-xl">{p.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Enquiry */}
        <section className="bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)]">
          <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:py-20">
            <h2 className="md:col-span-6 display-lg">
              For current availability, volumes and supply requirements, contact our team.
            </h2>
            <div className="md:col-span-5 md:col-start-8 md:self-end">
              <p className="text-sm leading-relaxed text-white/60">
                We do not publish production quantities. Requirements are confirmed directly so that
                what we commit to is what we can deliver.
              </p>
              <Link to="/contact" className="btn-line mt-8 text-white">
                Make a Supply Enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
