import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import farmAerial from "@/assets/farm-aerial.jpg";
import handsImg from "@/assets/harvest-hands.jpg";

const SITE = "https://megayieldfarms.co.za";
const DESC =
  "MegaYield Farms (Pty) Ltd is an early-stage agricultural enterprise in Gauteng, South Africa, growing chilli peppers and tomatoes for commercial fresh-produce supply.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MegaYield Farms | Agricultural Company in South Africa" },
      { name: "description", content: DESC },
      { property: "og:title", content: "About MegaYield Farms" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/about` }],
  }),
  component: AboutPage,
});

const leadership = [
  {
    name: "Karabo Molamu",
    role: "Founder & Managing Director",
    bio: "Leads company strategy, commercial development and day-to-day direction of the farming operation.",
  },
  {
    name: "Zwelihle Zulu",
    role: "Co-Founder & Operations Director",
    bio: "Responsible for production planning, field operations, harvest scheduling and quality of output.",
  },
  {
    name: "Gilbert Sehoole",
    role: "Mentor & Agricultural Supervisor",
    bio: "Provides agronomic guidance and hands-on supervision across crop establishment and management.",
  },
];

const companyInfo: [string, string][] = [
  ["Registered name", "MegaYield Farms (Pty) Ltd"],
  ["Registration number", "CIPC 2025/964922/07"],
  ["Country", "South Africa"],
  ["Province", "Gauteng"],
  ["Sector", "Agriculture — fresh produce"],
  ["Current crops", "Chilli peppers, tomatoes, pilot crops"],
  ["Location", "Plot 787 Ten Morgan, Winterveld, Pretoria"],
  ["Contact", "hello@megayieldfarms.co.za · 060 486 5455"],
];

export default function _unused() {
  return null;
}

function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          eyebrow="Company profile"
          title="An agricultural business being built in the open."
          intro="MegaYield Farms is an early-stage South African agricultural enterprise. We grow and supply fresh produce today, and we are honest about what we are still building."
          image={farmAerial}
          imageAlt="Planted fields at MegaYield Farms in Winterveld, Gauteng"
          caption="Winterveld, Pretoria — Gauteng, South Africa"
        />

        <Section number="01" title="Our Story">
          <div className="space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
            <p>
              MegaYield Farms began with a small planted area, a mentor, and a conviction that South
              Africa needs more young, disciplined commercial growers. We started with chilli
              peppers because the crop rewards attention: it demands consistent irrigation, careful
              scouting and disciplined harvesting.
            </p>
            <p>
              Since then we have expanded planting, added tomatoes as a second production focus, and
              begun trialling additional crops at pilot scale. Selected produce is already supplied
              to customers where available.
            </p>
            <p>
              We remain early. Our growth is deliberately phased — each expansion follows proven
              demand and the infrastructure to support it.
            </p>
          </div>
        </Section>

        <Section number="02" title="What We Do">
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
              We grow fresh produce for commercial supply. Chilli peppers are our flagship crop and
              tomatoes our second production focus, with additional crops under development. We
              handle production planning, crop establishment and management, harvesting, quality
              handling and delivery to customers.
            </p>
            <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
              We supply wholesalers, retailers, processors and food service buyers. Because we are
              scaling, availability varies by crop and production cycle — volumes and specifications
              are always confirmed directly with our team rather than published.
            </p>
          </div>
        </Section>

        <Section number="03" title="Our Approach" image={handsImg} imageAlt="Hand-harvested chillies being sorted">
          <ul className="divide-y divide-border">
            {[
              ["Consistency", "The same standard every cycle, because buyers plan around it."],
              ["Discipline", "Records, schedules and reviews rather than improvisation."],
              ["Focus", "Depth in a few crops before breadth across many."],
              ["Growth with purpose", "Expansion only where demand and capability meet."],
              ["Community first", "Local employment and skills, growing as the operation grows."],
            ].map(([t, d]) => (
              <li key={t} className="py-4">
                <h3 className="font-display text-xl">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="04" title="Our Vision">
          <blockquote className="border-l-2 border-[var(--color-clay)] pl-6 font-display text-2xl leading-snug md:text-3xl">
            To establish MegaYield Farms as a preferred chilli pepper and fresh-produce supplier in
            Gauteng — recognised for reliability, quality and the discipline behind every delivery.
          </blockquote>
          <p className="mt-8 text-[0.9375rem] leading-relaxed text-muted-foreground">
            Our mission is to deliver consistent, high-quality agricultural output through efficient
            farming systems, while creating dependable work and skills in the communities around us.
            Keeping people fed is our peace of mind.
          </p>
        </Section>

        <Section number="05" title="Leadership">
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {leadership.map((p) => (
              <article key={p.name} className="bg-background pb-6 sm:px-6 sm:pt-6 sm:first:pl-0">
                <div className="flex h-16 w-16 items-center justify-center bg-[oklch(0.205_0.008_70)] font-display text-xl text-[oklch(0.95_0.008_85)]">
                  {p.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-display text-2xl">{p.name}</h3>
                <p className="eyebrow mt-2">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section number="06" title="Company Information">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">MegaYield Farms company at a glance</caption>
            <tbody>
              {companyInfo.map(([k, v]) => (
                <tr key={k} className="border-t border-border align-top">
                  <th scope="row" className="w-56 py-3.5 pr-6 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </th>
                  <td className="py-3.5">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            We publish only verified company information. For production detail — availability,
            volumes and supply requirements —{" "}
            <Link to="/contact" className="border-b border-foreground pb-0.5 text-foreground">
              contact our team
            </Link>
            .
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  number,
  title,
  children,
  image,
  imageAlt,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="container-x grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="eyebrow">{number}</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">{title}</h2>
          {image && (
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="mt-8 hidden aspect-4/3 w-full object-cover md:block"
              loading="lazy"
            />
          )}
        </div>
        <div className="md:col-span-7 md:col-start-6">{children}</div>
      </div>
    </section>
  );
}
