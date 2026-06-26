import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import aerial from "@/assets/farm-aerial.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Our Project — 2-Hectare Expansion | MegaYield Farms" },
      { name: "description", content: "Our 2-hectare chilli expansion: phased timeline, investment requirements and community impact goals." },
      { property: "og:title", content: "The 2-Hectare Expansion Project — MegaYield Farms" },
      { property: "og:description", content: "Phased expansion of our flagship cayenne chilli operation." },
      { property: "og:image", content: aerial },
    ],
  }),
  component: ProjectPage,
});

const phases = [
  { phase: "Phase 01", title: "Site preparation & infrastructure", body: "Land preparation, irrigation upgrades and operational infrastructure for the additional 1.5 ha." },
  { phase: "Phase 02", title: "Planting & crop establishment", body: "Phased planting of cayenne chillies across the expansion zone with established production protocols." },
  { phase: "Phase 03", title: "First commercial harvest", body: "First harvests from the expansion supplying our committed B2B channel partners." },
  { phase: "Phase 04", title: "Sustained scale & impact", body: "Full production cadence with measurable jobs, community donation and future skills-training outcomes." },
];

const impact = [
  "New permanent and seasonal jobs for the Winterveld community",
  "Building toward apprenticeship programs as we scale",
  "Increased local fresh-produce supply and NGO donation volume",
  "Expanded reliable supply to retail and B2B partners",
];

function ProjectPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Our project"
        title="The 2-hectare expansion."
        intro="A phased expansion of our flagship cayenne chilli operation — and a clear pathway from proven production to scaled, fundable impact."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img src={aerial} alt="Aerial view of crop expansion" loading="lazy" className="aspect-[16/10] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]" />
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">The opportunity</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              From 0.5 to 2 hectares of high-demand chilli production.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We have proven the crop, the team and the market. The expansion to 2 hectares
              will quadruple our flagship production, unlock formal supply partnerships with
              major retail buyers, and significantly grow our community impact footprint.
            </p>
            <p className="mt-4 text-muted-foreground">
              <strong className="text-foreground">Project investment required:</strong> substantial.
              We are actively pursuing grant funding through South African government programs.
              Contact us for detailed financial planning discussions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.97_0.018_90)] py-20 md:py-28">
        <div className="container-x">
          <p className="eyebrow">Phased timeline</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Four phases. One disciplined path.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {phases.map((p) => (
              <li key={p.phase} className="rounded-2xl border border-border bg-card p-7">
                <p className="eyebrow">{p.phase}</p>
                <h3 className="mt-3 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Impact goals</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Growth that you can see on the ground.</h2>
            <ul className="mt-6 space-y-3">
              {impact.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground md:p-14">
            <p className="eyebrow text-[var(--color-gold)]">For funders & investors</p>
            <h3 className="mt-3 font-display text-3xl">Want the full project pack?</h3>
            <p className="mt-4 text-white/80">
              Detailed financial projections, production data and impact metrics are available
              upon request to serious investors and funding partners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/funding" className="btn-gold">Funding overview <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-outline border-white/30 text-white hover:bg-white/10">Request the pack</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
