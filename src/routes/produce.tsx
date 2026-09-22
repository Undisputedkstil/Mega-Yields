import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import chillies from "@/assets/produce-chillies.jpg";
import tomatoes from "@/assets/produce-tomatoes.jpg";
import greenPeppers from "@/assets/produce-green-peppers.jpg";
import colourPeppers from "@/assets/produce-colour-peppers.jpg";
import onionsImg from "@/assets/pilot-onions.jpg";
import carrotsImg from "@/assets/produce-carrots.jpg";
import beetrootImg from "@/assets/pilot-beetroot.jpg";
import greenBeansImg from "@/assets/pilot-green-beans.jpg";
import potatoesImg from "@/assets/pilot-potatoes.jpg";
import garlicImg from "@/assets/pilot-garlic.jpg";
import spinachImg from "@/assets/produce-spinach.jpg";
import cabbageImg from "@/assets/pilot-cabbage.jpg";
import shadeTomatoes from "@/assets/pilot-tomatoes-shade.jpg";
import seedlingsImg from "@/assets/pilot-seedlings.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "Six commercial crops grown for fresh supply in Gauteng — chilli peppers, tomatoes, green peppers, colour peppers, onions and carrots — with six further crops under development. Contact MegaYield Farms for availability.";

export const Route = createFileRoute("/produce")({
  head: () => ({
    meta: [
      { title: "Our Produce | Fresh Vegetable Supplier in Gauteng, South Africa" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Our Produce — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/produce` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Produce — MegaYield Farms" },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: `${SITE}/produce` }],
  }),
  component: ProducePage,
});

const commercial = [
  {
    name: "Chilli Peppers",
    tag: "Flagship crop",
    img: chillies,
    note: "Cayenne and related hot varieties, hand-picked at defined maturity for colour, heat consistency and shelf life.",
    use: "Wholesale · retail · processing",
  },
  {
    name: "Tomatoes",
    tag: "Core crop",
    img: tomatoes,
    note: "Grown in open field and under shade, picked firm and sorted by grade before supply.",
    use: "Wholesale · retail · food service",
  },
  {
    name: "Green Peppers",
    tag: "Core crop",
    img: greenPeppers,
    note: "Firm, uniform green bell peppers cut at full size for consistent pack-outs.",
    use: "Retail · food service",
  },
  {
    name: "Colour Peppers",
    tag: "Core crop",
    img: colourPeppers,
    note: "Red and yellow bell peppers carried to full colour for premium fresh counters.",
    use: "Retail · food service",
  },
  {
    name: "Onions",
    tag: "Core crop",
    img: onionsImg,
    note: "Cured and graded by size, a staple line supplied steadily through the season.",
    use: "Wholesale · retail · processing",
  },
  {
    name: "Carrots",
    tag: "Core crop",
    img: carrotsImg,
    note: "Lifted, washed and graded for length and finish, supplied loose or packed.",
    use: "Wholesale · retail",
  },
];

const pilots = [
  { name: "Beetroot", img: beetrootImg, note: "Rows tested for size, colour and local demand." },
  { name: "Green Beans", img: greenBeansImg, note: "Short-cycle crop under production trial." },
  { name: "Potatoes", img: potatoesImg, note: "Trial plantings assessing yield and storage." },
  { name: "Garlic", img: garlicImg, note: "Long-cycle crop trialled for curing and quality." },
  { name: "Spinach", img: spinachImg, note: "Leaf crop supplied where available." },
  { name: "Cabbage", img: cabbageImg, note: "Assessed for head weight and season fit." },
];

function ProducePage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Fresh produce"
          title="Our Produce"
          intro="Six crops are in commercial production and six more are under development. Availability varies by crop and production cycle — our team confirms volumes and specifications directly."
        />

        {/* Flagship */}
        <section className="border-b border-border">
          <figure>
            <img
              src={chillies}
              alt="Cayenne chilli peppers harvested at MegaYield Farms"
              className="h-[38vh] w-full object-cover sm:h-[45vh] md:h-[62vh]"
            />
          </figure>
          <div className="container-x grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
            <div className="md:col-span-5">
              <p className="eyebrow text-[var(--color-clay)]">Flagship crop</p>
              <h2 className="mt-4 display-lg">Chilli Peppers</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="lede text-foreground">
                Our leading commercial crop, and the crop our planning, irrigation and harvest
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

        {/* Commercial range */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">In commercial production</p>
                <h2 className="mt-4 display-lg">The Commercial Range</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Six crops grown to supply repeat buyers across wholesale, retail, processing and
                food service channels in Gauteng.
              </p>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
              {commercial.map((c, i) => (
                <li key={c.name}>
                  <img
                    src={c.img}
                    alt={`${c.name} grown at MegaYield Farms`}
                    className="aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl">{c.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                  <p className="mt-3 border-t border-border pt-3 text-xs tracking-wide text-muted-foreground">
                    {c.use}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tomatoes feature */}
        <section className="border-b border-border">
          <div className="grid md:grid-cols-2">
            <div className="order-2 px-5 py-14 md:order-1 md:px-14 md:py-20">
              <p className="eyebrow">Crop in focus</p>
              <h2 className="mt-4 display-lg">Tomatoes</h2>
              <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
                Tomatoes are grown in open field and under shade structures, expanding cycle by
                cycle as buyer demand is confirmed. Fruit is picked firm and sorted by grade before
                supply, with shade production protecting quality through the hotter months.
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
              className="order-1 h-64 w-full object-cover sm:h-72 md:order-2 md:h-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* Pilot crops */}
        <section className="border-b border-border">
          <div className="container-x py-14 md:py-20">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Development portfolio</p>
                <h2 className="mt-4 display-lg">Crops Under Development</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Six further crops are trialled at controlled scale before entering commercial
                production. Selected produce is supplied where available.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:gap-x-8 lg:grid-cols-3 md:mt-14">
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

            <div className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-12">
              <img
                src={seedlingsImg}
                alt="Seedlings propagated in the MegaYield Farms nursery"
                className="aspect-16/9 w-full object-cover md:col-span-5 md:aspect-4/3"
                loading="lazy"
              />
              <div className="md:col-span-6 md:col-start-7 md:self-center">
                <p className="eyebrow">Behind every crop</p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl">Our Seedling Nursery</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  In-house propagation gives us healthy, uniform seedlings for each planting cycle —
                  the starting point for both our commercial range and every crop still in trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry */}
        <section className="bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)]">
          <div className="container-x grid gap-8 py-14 md:grid-cols-12 md:py-20">
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
