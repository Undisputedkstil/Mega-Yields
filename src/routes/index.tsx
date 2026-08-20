import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import heroChillies from "@/assets/hero-chillies.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";
import produceChillies from "@/assets/produce-chillies.jpg";
import produceTomatoes from "@/assets/produce-tomatoes.jpg";
import pilotSeedlings from "@/assets/pilot-seedlings.jpg";
import opsIrrigation from "@/assets/ops-irrigation.jpg";
import harvestHands from "@/assets/harvest-hands.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESCRIPTION =
  "MegaYield Farms is a South African agricultural enterprise developing a scalable fresh-produce operation, with chilli peppers and tomatoes at the centre of its current production strategy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MegaYield Farms | Fresh Produce & Agriculture in South Africa" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "MegaYield Farms | Fresh Produce & Agriculture in South Africa" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "MegaYield Farms | Fresh Produce & Agriculture in South Africa" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MegaYield Farms",
          url: SITE,
          publisher: { "@type": "Organization", name: "MegaYield Farms (Pty) Ltd" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const stages = [
  ["01", "Planning", "Crop selection, planting calendars and input planning ahead of each cycle."],
  ["02", "Production", "Seedling establishment and planting into prepared, tested soil beds."],
  ["03", "Crop Management", "Irrigation scheduling, nutrition, scouting and disease control."],
  ["04", "Harvest", "Hand-picking at defined maturity, cycle by cycle, to protect quality."],
  ["05", "Quality & Handling", "Sorting, grading and cool, clean handling before dispatch."],
  ["06", "Customer Supply", "Packed and moved to buyers on agreed schedules and specifications."],
];

const building = [
  ["Production capability", "Expanding what we can reliably grow across each season."],
  ["Agricultural infrastructure", "Irrigation, seedling and handling infrastructure, built in stages."],
  ["Supply relationships", "Repeat commercial buyers who plan volumes with us in advance."],
  ["Crop diversification", "Pilot crops trialled before they enter commercial production."],
  ["Market access", "Direct routes into wholesale, retail and food service channels."],
  ["Technology-enabled practice", "Data-led irrigation, record keeping and crop monitoring."],
];

const partnerTypes = [
  ["Commercial buyers", "Wholesalers, retailers, processors and food service operators."],
  ["Strategic agricultural partners", "Land, input, mentorship and production collaboration."],
  ["Investment partners", "Capital aligned to phased, disciplined expansion."],
  ["Development organisations", "Government, NGO and enterprise-development programmes."],
  ["Technology & innovation partners", "Agritech, irrigation and data partners."],
];

function HomePage() {
  return (
    <>
      <SiteNav overlay />
      <main>
        {/* Editorial opening */}
        <section className="relative -mt-16">
          <img
            src={heroChillies}
            alt="Ripening chilli peppers on the plant at MegaYield Farms"
            className="h-[86vh] min-h-[560px] w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.16_0.01_70/0.82)_0%,oklch(0.16_0.01_70/0.55)_45%,transparent_88%)]" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-x w-full pb-14 md:pb-20">
              <p className="eyebrow text-white/70">South Africa · Fresh Produce · Est. 2024</p>
              <h1 className="mt-5 max-w-4xl display-xl text-white">
                Growing a More Productive Future.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                MegaYield Farms is a South African agricultural enterprise developing a scalable
                fresh-produce operation, with chilli peppers and tomatoes at the centre of our
                current production strategy.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/produce" className="btn-solid">
                  Explore Our Produce
                </Link>
                <Link to="/partnerships" className="btn-line text-white">
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="border-b border-border">
          <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-5">
              <p className="eyebrow">01 — Who we are</p>
              <h2 className="mt-5 display-lg">Built From the Ground Up.</h2>
              <img
                src={harvestHands}
                alt="Harvested chillies being sorted by hand"
                className="mt-10 hidden aspect-4/3 w-full object-cover md:block"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="lede text-foreground">
                MegaYield Farms is an early-stage agricultural enterprise actively developing a
                commercial fresh-produce operation in Gauteng, South&nbsp;Africa.
              </p>
              <div className="mt-7 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <p>
                  We are not a finished or fully scaled agricultural corporation, and we do not
                  present ourselves as one. We are a working farm: planting, irrigating, harvesting
                  and supplying customers while we build the systems that will carry larger volumes.
                </p>
                <p>
                  Every cycle teaches us something about our soil, our water, our crops and our
                  market. That learning is deliberately fed back into planning — which crops to
                  expand, which to trial, and which infrastructure to build next.
                </p>
                <p>
                  Our ambition is unambiguous: to become a dependable commercial supplier of fresh
                  produce, grown responsibly and delivered consistently.
                </p>
              </div>
              <blockquote className="mt-10 border-l-2 border-[var(--color-clay)] pl-6 font-display text-2xl leading-snug md:text-3xl">
                “We produce today while preparing for tomorrow.”
              </blockquote>
              <Link to="/about" className="link-rule mt-10">
                Read the company profile
              </Link>
            </div>
          </div>
        </section>

        {/* Current production */}
        <section className="border-b border-border">
          <div className="container-x pt-20 md:pt-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">02 — Current production</p>
                <h2 className="mt-5 display-lg">What We're Growing</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Availability varies by crop and production cycle. For volumes and specifications,
                speak to our team directly.
              </p>
            </div>
          </div>

          <div className="container-x mt-14 grid gap-px bg-border md:grid-cols-12">
            <article className="bg-background md:col-span-7">
              <img
                src={produceChillies}
                alt="Cayenne chilli peppers, MegaYield Farms flagship crop"
                className="aspect-16/10 w-full object-cover"
                loading="lazy"
              />
              <div className="py-8 pr-0 md:pr-10">
                <p className="eyebrow text-[var(--color-clay)]">Flagship crop</p>
                <h3 className="mt-3 font-display text-4xl md:text-5xl">Chilli Peppers</h3>
                <p className="mt-4 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
                  Our primary commercial crop and the centre of our production planning. Grown for
                  colour, heat consistency and shelf life, and supplied fresh to buyers across
                  Gauteng.
                </p>
              </div>
            </article>

            <div className="grid bg-background md:col-span-5">
              <article className="border-b border-border py-8 md:pl-10 md:pt-0">
                <img
                  src={produceTomatoes}
                  alt="Tomatoes grown at MegaYield Farms"
                  className="aspect-3/2 w-full object-cover"
                  loading="lazy"
                />
                <p className="eyebrow mt-6">Second production focus</p>
                <h3 className="mt-2 font-display text-2xl">Tomatoes</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Grown under shade and open field, scaling alongside chillies as our second
                  commercial line.
                </p>
              </article>
              <article className="py-8 md:pl-10">
                <img
                  src={pilotSeedlings}
                  alt="Seedlings under development in the nursery"
                  className="aspect-3/2 w-full object-cover"
                  loading="lazy"
                />
                <p className="eyebrow mt-6">Under development</p>
                <h3 className="mt-2 font-display text-2xl">Pilot Crops</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Additional crops trialled at small scale; selected produce is supplied where
                  available.
                </p>
              </article>
            </div>
          </div>

          <div className="container-x pb-20 md:pb-28">
            <Link to="/produce" className="link-rule mt-12">
              View Our Produce
            </Link>
          </div>
        </section>

        {/* Operations */}
        <section className="border-b border-border bg-[oklch(0.205_0.008_70)] text-[oklch(0.95_0.008_85)]">
          <div className="container-x grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-4">
              <p className="eyebrow text-white/45">03 — Operations</p>
              <h2 className="mt-5 display-lg">From Production to Supply.</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
                Six stages carry a crop from a planting decision to a customer's delivery. Each one
                is documented, reviewed and refined as the operation grows.
              </p>
              <Link to="/operations" className="link-rule mt-9 border-white/70 text-white">
                Inside our operations
              </Link>
            </div>
            <ol className="md:col-span-7 md:col-start-6">
              {stages.map(([n, title, body]) => (
                <li
                  key={n}
                  className="grid grid-cols-[3.25rem_1fr] gap-5 border-t border-white/12 py-6 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-sm text-[var(--color-wheat)]">{n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure>
            <img
              src={opsIrrigation}
              alt="Irrigation lines running through planted rows"
              className="h-[34vh] w-full object-cover md:h-[46vh]"
              loading="lazy"
            />
          </figure>
        </section>

        {/* Building toward scale */}
        <section className="border-b border-border">
          <div className="container-x py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="eyebrow">04 — Growth</p>
                <h2 className="mt-5 display-lg">Building Toward Scale.</h2>
              </div>
              <p className="lede md:col-span-6 md:col-start-7 md:self-end">
                We are early in our journey. Rather than claiming scale we have not yet reached, we
                are putting the six foundations below in place — deliberately, and in order.
              </p>
            </div>

            <dl className="mt-14 grid gap-x-12 md:grid-cols-2">
              {building.map(([term, def], i) => (
                <div
                  key={term}
                  className="flex gap-6 border-t border-border py-6 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+2)]:pt-0"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <dt className="font-display text-xl">{term}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{def}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Partnerships */}
        <section>
          <div className="grid md:grid-cols-2">
            <img
              src={farmAerial}
              alt="Planted fields at MegaYield Farms"
              className="h-72 w-full object-cover md:h-full"
              loading="lazy"
            />
            <div className="px-5 py-16 md:px-14 md:py-24">
              <p className="eyebrow">05 — Partnership</p>
              <h2 className="mt-5 display-lg">Growing Through Partnership.</h2>
              <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-muted-foreground">
                Our growth depends on the organisations we work with — buyers who plan volumes with
                us, partners who strengthen our production, and institutions invested in South
                African food systems.
              </p>
              <ul className="mt-9 max-w-lg">
                {partnerTypes.map(([title, body]) => (
                  <li key={title} className="border-t border-border py-4">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-solid mt-10">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
