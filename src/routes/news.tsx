import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Newspaper } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — MegaYield Farms" },
      {
        name: "description",
        content:
          "Farm updates, production milestones and company announcements from MegaYield Farms, a commercial fresh produce supplier in Gauteng, South Africa.",
      },
      { property: "og:title", content: "News & Updates — MegaYield Farms" },
      {
        property: "og:description",
        content: "Production milestones, partnership news and farm updates.",
      },
    ],
  }),
  component: NewsPage,
});

const placeholders = [
  { category: "Production", title: "Production updates" },
  { category: "Partnerships", title: "Partnership announcements" },
  { category: "Sustainability", title: "Sustainability initiatives" },
];

function NewsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="News & updates"
        title="What's happening on the farm."
        intro="Production milestones, partnership announcements and company updates will be published here as they happen."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="grid aspect-[16/10] place-items-center bg-[var(--gradient-hero)]">
                  <Newspaper className="h-9 w-9 text-[var(--color-gold)]" aria-hidden />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="text-[var(--color-gold)]">{p.category}</span>
                    <span aria-hidden>·</span>
                    <time>Coming soon</time>
                  </div>
                  <h2 className="mt-4 font-display text-2xl">{p.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    This space is reserved for upcoming articles from MegaYield Farms.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border p-10 text-center md:p-14">
          <h3 className="font-display text-2xl md:text-3xl">Want updates directly?</h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Get in touch and we'll keep you informed about production, availability and company
            news.
          </p>
          <Link to="/contact" className="mt-7 btn-primary">
            Contact our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
