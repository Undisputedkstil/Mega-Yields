import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import handsImg from "@/assets/harvest-hands.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MegaYield Farms" },
      { name: "description", content: "The story, mission, vision, values and team behind MegaYield Farms — a youth-led agricultural enterprise in Pretoria, South Africa." },
      { property: "og:title", content: "About MegaYield Farms" },
      { property: "og:description", content: "Six years of focused agriculture, scaled by purpose." },
      { property: "og:image", content: handsImg },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2019", title: "Founded", body: "MegaYield Farms begins operations on a 0.5 hectare plot in Winterveld with a single focus: cayenne chillies." },
  { year: "2022", title: "Process discipline", body: "Production systems formalised. Consistent harvest cycles established." },
  { year: "2025", title: "Scaled 400%", body: "Production expands across 2.5 hectares with growing B2B inbound interest from Spar and OK." },
  { year: "Now", title: "2-hectare expansion", body: "Actively pursuing grant funding to take chilli production to 2 ha, with pilot crops in development." },
];

const values = [
  { t: "Discipline", b: "We earn growth by getting one crop right before we add the next." },
  { t: "Transparency", b: "Open data, open books to the partners and funders who back us." },
  { t: "Impact", b: "Every hectare expanded is jobs, training and food for our community." },
  { t: "Stewardship", b: "We farm land we expect to hand on better than we received it." },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="About MegaYield"
        title="A focused agricultural enterprise, built on purpose."
        intro="Founded in 2019, MegaYield Farms is a youth-led South African business growing produce, jobs, and futures from Plot 787 in Winterveld, Pretoria."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Six years of getting one thing right, so we could grow what comes next.
            </h2>
            <p className="mt-5 text-muted-foreground">
              MegaYield began with a simple bet: that disciplined, consistent production of a
              single high-demand crop would earn the right to scale. After six years of refining
              cayenne chilli operations, that bet is paying off — with formal market interest
              from leading South African supermarkets and a clear pathway to expansion.
            </p>
            <p className="mt-4 text-muted-foreground">
              We are registered with CIPC (2025/964922/07), youth-led, and based on 8 hectares
              of land in Winterveld — of which 2.5 are currently in production.
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={handsImg} alt="Freshly harvested chillies" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]" />
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.97_0.018_90)] py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Timeline</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">From a single plot to a scalable enterprise</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {timeline.map((t) => (
              <li key={t.year} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl text-[var(--color-gold)]">{t.year}</div>
                <h3 className="mt-2 font-display text-lg">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To grow consistent, high-quality vegetable supply for South African B2B markets —
              creating jobs and food security as we scale.
            </p>
          </div>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <p className="eyebrow text-[var(--color-gold)]">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To become a trusted reference point for youth-led agricultural enterprise in
              Southern Africa — proof that purpose and profitability grow together.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Values</p>
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border p-6">
                <h3 className="font-display text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.97_0.018_90)] py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Team</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Founders & management</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A youth-led leadership team with operational discipline and on-the-ground production
            experience. Full team profiles available on request to serious funders and partners.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Founder & CEO", "Operations Lead", "Production Manager"].map((role) => (
              <div key={role} className="rounded-2xl border border-border bg-card p-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-[var(--color-gold)]" />
                <p className="mt-4 font-display text-lg">MegaYield {role}</p>
                <p className="mt-1 text-sm text-muted-foreground">Profile available upon request.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
