import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { InquiryForm } from "@/components/InquiryForm";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/funding")({
  head: () => ({
    meta: [
      { title: "Growth Partnerships — MegaYield Farms" },
      { name: "description", content: "Strategic partnership pathways at MegaYield Farms — B2B supply, strategic investment, grant funding and collaboration opportunities." },
      { property: "og:title", content: "Growth Partnerships — MegaYield Farms" },
      { property: "og:description", content: "Supply, investment, grant funding and strategic collaboration with a proven youth-led farm." },
    ],
  }),
  component: FundingPage,
});

const programs = [
  { name: "NYDA", full: "National Youth Development Agency", body: "Non-repayable grants for qualifying youth-led enterprises — central to our funding strategy." },
  { name: "SEDA", full: "Small Enterprise Development Agency", body: "Mentoring, capacity building and support services for small business growth." },
  { name: "DALRRD", full: "Department of Agriculture, Land Reform & Rural Development", body: "Sector-specific support programs for emerging commercial agricultural enterprises." },
  { name: "DSBD", full: "Department of Small Business Development", body: "Programs targeting small business expansion and competitiveness in priority sectors." },
];

const useOfFunds = [
  "Site preparation & irrigation infrastructure for expansion",
  "Production inputs and quality-controlled seedling stock",
  "Equipment and cool-chain handling capability",
  "Workforce expansion and apprenticeship programs",
  "Operations, compliance and reporting capacity",
];

function FundingPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="Growth partnerships"
        title="Multiple pathways to partner with a proven farm."
        intro="We're a professional agricultural business with proven production and market validation. Alongside B2B supply contracts, we welcome strategic investment, grant funding and collaboration with aligned partners."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">What we're seeking</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">A focused funding mix for the expansion phase.</h2>
            <p className="mt-5 text-muted-foreground">
              We are pursuing grant funding through government youth-enterprise programs,
              complemented by aligned impact and commercial capital where appropriate. Project
              investment required is substantial — detailed financial projections, use of funds
              and milestones are available upon request to serious funders.
            </p>

            <h3 className="mt-10 font-display text-xl">Use of funds</h3>
            <ul className="mt-4 space-y-3">
              {useOfFunds.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> <span>{u}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-xl">Financial projections</h3>
            <p className="mt-3 text-muted-foreground">
              We demonstrate strong revenue growth and profitability models. Detailed financial
              projections are available upon request to serious investors. Current operations
              are profitable with positive cash flow.
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="sticky top-24">
              <p className="eyebrow">Government programs we engage</p>
              <div className="mt-4 space-y-3">
                {programs.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-display text-lg">{p.name}</span>
                      <span className="text-xs text-muted-foreground">{p.full}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[oklch(0.97_0.018_90)] py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="eyebrow">For funders & investors</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Request the investment pack.</h2>
            <p className="mt-4 text-muted-foreground">
              Send a short note about your organisation and interest. We'll respond with a
              tailored introduction and arrange a financial planning discussion.
            </p>
          </div>
          <div className="md:col-span-7">
            <InquiryForm defaultInquiry="Funding / investment" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
