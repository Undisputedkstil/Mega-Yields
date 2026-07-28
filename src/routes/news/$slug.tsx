import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleBody } from "@/components/ArticleBody";
import { getPublishedArticle } from "@/lib/articles.functions";

const articleQuery = (slug: string) =>
  queryOptions({
    queryKey: ["public-article", slug],
    queryFn: () => getPublishedArticle({ data: { slug } }),
  });

export const Route = createFileRoute("/news/$slug")({
  loader: async ({ context, params }) => {
    const article = await context.queryClient.ensureQueryData(articleQuery(params.slug));
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — MegaYield Farms` : "Article — MegaYield Farms";
    const description =
      a?.excerpt || "News and production updates from MegaYield Farms in Gauteng, South Africa.";
    const absoluteImage =
      a?.hero_image_url && /^https:\/\//.test(a.hero_image_url) ? a.hero_image_url : null;

    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 158) },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 158) },
        ...(absoluteImage
          ? [
              { property: "og:image", content: absoluteImage },
              { name: "twitter:image", content: absoluteImage },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteNav />
      <div className="container-x grid min-h-[60vh] place-items-center text-center">
        <div>
          <h1 className="font-display text-4xl">Article not found</h1>
          <p className="mt-3 text-muted-foreground">
            This update may have been moved or is not published yet.
          </p>
          <Link to="/news" className="btn-primary mt-7">
            Back to News <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen">
      <SiteNav />
      <div className="container-x grid min-h-[60vh] place-items-center text-center">
        <div>
          <h1 className="font-display text-3xl">This article didn't load</h1>
          <Link to="/news" className="btn-primary mt-7">
            Back to News <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const { data: article } = useSuspenseQuery(articleQuery(slug));
  if (!article) return null;

  return (
    <div className="min-h-screen">
      <SiteNav />

      <article>
        <header className="relative overflow-hidden bg-[oklch(0.22_0.04_148)] text-[oklch(0.97_0.018_90)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(60% 60% at 80% 0%, oklch(0.74 0.13 78 / 0.35), transparent 60%), radial-gradient(40% 60% at 0% 100%, oklch(0.5 0.12 145 / 0.4), transparent 60%)",
            }}
          />
          <div className="container-x relative py-20 md:py-28">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> News &amp; Updates
            </Link>
            <p className="eyebrow mt-6 text-[var(--color-gold)]">{article.category}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl">
              {article.title}
            </h1>
            <time dateTime={article.published_at} className="mt-5 block text-sm text-white/70">
              {new Date(article.published_at).toLocaleDateString("en-ZA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        {article.hero_image_url && (
          <div className="container-x -mt-10 md:-mt-14">
            <img
              src={article.hero_image_url}
              alt={article.title}
              className="aspect-[16/9] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        )}

        <div className="container-x max-w-3xl py-16 md:py-24">
          {article.excerpt && (
            <p className="mb-8 font-display text-xl leading-snug text-foreground md:text-2xl">
              {article.excerpt}
            </p>
          )}
          <ArticleBody content={article.content} />

          <div className="mt-14 border-t border-border pt-10">
            <Link to="/contact" className="btn-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
