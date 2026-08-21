import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import farmAerial from "@/assets/farm-aerial.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "MegaYield Farms works with commercial buyers, strategic agricultural partners, investment partners and development organisations across South Africa.";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships | MegaYield Farms, Agricultural Business Gauteng" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Partnerships — MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/partnerships` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/partnerships` }],
  }),
  component: PartnershipsPage,
});

const categories = [
  {
    n: "01",
    title: "Commercial Buyers",
    body: "Wholesalers, retailers, processors and food service operators who need fresh produce on a planned schedule. We work best with buyers who share forecasts, because it lets us plant against real demand and commit only to what we can deliver.",
  },
  {
    n: "02",
    title: "Strategic Partners",
    body: "Land, input, logistics and production partners who strengthen what we can grow and how reliably we can move it. This includes established farming operations willing to collaborate on capacity, mentorship or shared infrastructure.",
  },
  {
    n: "03",
    title: "Investment Partners",
    body: "Capital aligned to phased expansion — infrastructure, irrigation, nursery capacity and working capital for production cycles. We are early-stage and we plan in stages, each tied to demand we can demonstrate.",
  },
  {
    n: "04",
    title: "Development & Innovation Partners",
    body: "Government programmes, development organisations, agritech and research partners working on food systems, youth participation in agriculture and technology-enabled farming practice.",
  },
];

function PartnershipsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Partnerships"
          title="Growing Through Partnership."
          intro="Our growth depends on the organisations we work with. Below are the four relationships that matter most to MegaYield Farms at this stage."
          image={farmAerial}
          imageAlt="Fields under production at MegaYield Farms"
          caption="Winterveld, Pretoria — Gauteng, South Africa"
        />

        <section className="border-b border-border">
          <div className="container-x">
            {categories.map((c) => (
              <article
                key={c.n}
                className="grid gap-6 border-b border-border py-12 last:border-b-0 md:grid-cols-12 md:py-16"
              >
                <div className="md:col-span-4">
                  <p className="font-mono text-sm text-[var(--color-clay)]">{c.n}</p>
                  <h2 className="mt-3 font-display text-3xl">{c.title}</h2>
                </div>
                <p className="md:col-span-7 md:col-start-6 text-[0.9375rem] leading-relaxed text-muted-foreground md:text-base">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-4">
              <p className="eyebrow">Enquire</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Start a Partnership Conversation
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Tell us what you need and the scale you work at. We will respond with what we can
                realistically commit to, and how we would plan production around it.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <InquiryForm defaultInquiry="Partnership" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
