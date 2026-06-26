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
  {
    year: "2019–2020",
    title: "Foundation",
    bullets: [
      "Launched with backyard poultry operation (10 → 400 birds)",
      "Developed core farm management skills",
      "Built operational systems and discipline",
      "First community support: surplus birds shared with local families",
    ],
  },
  {
    year: "2021–2023",
    title: "Crop trials & learning",
    bullets: [
      "Systematic trials across spinach, maize, chilli, tomatoes, onions",
      "Mastered crop production techniques",
      "Built market intelligence and sales relationships",
      "Refined operational procedures",
      "Began donating surplus spinach to local community members",
    ],
  },
  {
    year: "2024",
    title: "Land partnership & infrastructure",
    bullets: [
      "Secured 8-hectare land partnership (Kgomodiile Projects)",
      "Began infrastructure development",
      "Transitioned to continuous production cycles",
      "Established reliable supply relationships",
      "Formalized community donation approach",
    ],
  },
  {
    year: "2025–Present",
    title: "Commercial production & community impact",
    bullets: [
      "Scaled chilli production by 400% (commercial viability proven)",
      "Established B2B supply relationships",
      "Maintained continuous production discipline",
      "Partnered with NGO (Vuka Africa Youth Hub) for produce donation",
      "Employed seasonal workers from Winterveld",
    ],
  },
];

const values = [
  { t: "Consistency", b: "We build trust through reliable production cycles and dependable supply. Our reputation is built on delivery performance, not promises." },
  { t: "Focus", b: "We concentrate our resources on what works. Chilli pepper production is our core. We do not chase trends — we execute our strategy with discipline." },
  { t: "Discipline", b: "Every decision is grounded in practical experience, honest numbers, and long-term thinking. We avoid shortcuts and build sustainable operations." },
  { t: "Growth with purpose", b: "We scale deliberately — not for its own sake, but to build something that lasts and creates opportunity." },
  { t: "Community first", b: "Keeping people fed is our peace of mind. Community benefit is not separate from business success — it is part of how we measure it." },
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
          <p className="eyebrow">Operational track record</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Tested, learned, refined, and scaled — with community impact in mind.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            MegaYield Farms has built capability through systematic execution across six years
            of disciplined operations.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map((t) => (
              <li key={t.year} className="rounded-2xl border border-border bg-card p-7">
                <div className="font-display text-2xl text-[var(--color-gold)]">{t.year}</div>
                <h3 className="mt-2 font-display text-xl">{t.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To deliver consistent, high-quality agricultural output through efficient farming
              systems, disciplined execution, and unwavering commitment to supply consistency —
              while building sustainable value for partners, markets, and communities.
            </p>
            <p className="mt-5 font-display text-lg text-[var(--color-gold)]">
              Keeping people fed is our peace of mind.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We exist to solve a real problem: reliable chilli supply in a market where demand
              consistently exceeds local availability. And a second one: creating economic and
              learning opportunities in communities where they're needed.
            </p>
          </div>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <p className="eyebrow text-[var(--color-gold)]">Our vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To establish MegaYield Farms as the preferred chilli pepper supplier across
              Gauteng by 2028 — recognised for exceptional reliability, consistent quality,
              scalable production capacity, and meaningful community impact.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              <li>• Buyers trust us because our chilli peppers are the reliable choice</li>
              <li>• Communities benefit from jobs we create and produce we donate</li>
              <li>• Young people learn through apprenticeships and agricultural skills training</li>
              <li>• Our growth strengthens food security, not just profit margins</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="eyebrow">Our values</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">How we operate, every day.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-xl">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
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
