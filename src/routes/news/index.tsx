import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Newspaper } from "lucide-react";
import { listPublishedArticles } from "@/lib/articles.functions";

const articlesQuery = queryOptions({
  queryKey: ["public-articles"],
  queryFn: () => listPublishedArticles(),
});

export const Route = createFileRoute("/news/")({
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
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(articlesQuery);
  },
  errorComponent: () => (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="News & updates"
        title="What's happening on the farm."
        intro="We couldn't load the latest articles right now. Please refresh in a moment."
      />
      <SiteFooter />
    </div>
  ),
  component: NewsPage,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NewsPage() {
  const { data: articles } = useSuspenseQuery(articlesQuery);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <PageHeader
        eyebrow="News & updates"
        title="What's happening on the farm."
        intro="Production milestones, partnership announcements and company updates, published as they happen."
      />

      <section className="container-x py-20 md:py-28">
        {articles.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-14 text-center">
            <Newspaper className="mx-auto h-9 w-9 text-[var(--color-gold)]" aria-hidden />
            <h2 className="mt-4 font-display text-2xl">Updates are on the way</h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Our first published updates will appear here shortly.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={i * 80}>
                <Link
                  to="/news/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[var(--gradient-hero)]">
                    {a.hero_image_url ? (
                      <img
                        src={a.hero_image_url}
                        alt={a.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center">
                        <Newspaper className="h-9 w-9 text-[var(--color-gold)]" aria-hidden />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="text-[var(--color-gold)]">{a.category}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={a.published_at}>{formatDate(a.published_at)}</time>
                    </div>
                    <h2 className="mt-4 font-display text-2xl">{a.title}</h2>
                    {a.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{a.excerpt}</p>
                    )}
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Read more{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

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
