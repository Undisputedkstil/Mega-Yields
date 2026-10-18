import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import opsIrrigation from "@/assets/ops-irrigation.jpg";
import opsPacking from "@/assets/ops-packing.jpg";
import soilImg from "@/assets/sustainability-soil.jpg";
import handsImg from "@/assets/harvest-hands.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "How MegaYield Farms plans, plants, irrigates, harvests and supplies fresh produce in Gauteng — and how those systems are being refined as the operation grows.";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations | Vegetable Farming Practice, MegaYield Farms" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Operations — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/operations` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/operations` }],
  }),
  component: OperationsPage,
});

const stages: { n: string; title: string; body: string; img?: string; alt?: string }[] = [
  {
    n: "01",
    title: "Production planning",
    body: "Each cycle begins on paper: crop selection, planting calendar, input requirements and the buyers we expect to serve. Planning is conservative — we plant against demand we can see, not demand we hope for.",
    img: soilImg,
    alt: "Prepared soil beds before planting",
  },
  {
    n: "02",
    title: "Crop establishment",
    body: "Beds are prepared and seedlings — increasingly raised in our own nursery — are transplanted at the right stage. Spacing, bed layout and planting dates are recorded so results can be compared cycle to cycle.",
  },
  {
    n: "03",
    title: "Crop management",
    body: "Field walks, pest and disease scouting, nutrition and weed control run on a weekly rhythm. Interventions are logged, and problems in one block inform how we treat the next.",
  },
  {
    n: "04",
    title: "Irrigation",
    body: "Water is the constraint that governs everything else. Irrigation is scheduled to crop stage and weather rather than habit, with drip lines used to place water where the plant needs it and limit waste.",
    img: opsIrrigation,
    alt: "Drip irrigation lines running along planted rows",
  },
  {
    n: "05",
    title: "Harvest",
    body: "Chillies and tomatoes are hand-picked at defined maturity, in repeated passes through the same block. Picking teams work to a standard so that what leaves the field is already close to grade.",
    img: handsImg,
    alt: "Hand-harvesting chillies into crates",
  },
  {
    n: "06",
    title: "Quality & handling",
    body: "Produce is sorted, graded and kept out of heat and direct sun. Crates are clean, handling is minimal, and anything below grade is separated before it reaches a customer.",
    img: opsPacking,
    alt: "Sorting and packing fresh produce into crates",
  },
  {
    n: "07",
    title: "Supply",
    body: "Orders are matched to what the field can genuinely deliver and moved to buyers on agreed schedules. Where we cannot meet a volume, we say so early rather than under-deliver.",
  },
];

function OperationsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Operations"
          title="How the farm actually runs."
          intro="MegaYield Farms is not a fully industrialised operation, and we do not describe it as one. What follows is how we work today — and how we are refining these systems as the business grows."
        />

        <section>
          <div className="container-x">
            {stages.map((s) => (
              <article
                key={s.n}
                className="grid gap-8 border-b border-border py-14 md:grid-cols-12 md:py-20"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-sm text-[var(--color-clay)]">{s.n}</p>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl">{s.title}</h2>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
                    {s.body}
                  </p>
                  {s.img && (
                    <img
                      src={s.img}
                      alt={s.alt ?? ""}
                      className="mt-8 aspect-16/9 w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border">
          <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:py-20">
            <h2 className="md:col-span-4 font-display text-3xl md:text-4xl">
              Continuously refined
            </h2>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                Every cycle produces records: what was planted, when it was irrigated, what was
                sprayed, what was picked and what was rejected. Those records are reviewed and used
                to change the next plan. It is unglamorous work, and it is the reason our output
                becomes more predictable each season.
              </p>
              <Link to="/partnerships" className="link-rule mt-9">
                Work with us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
