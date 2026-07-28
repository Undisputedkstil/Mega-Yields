import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { deleteArticle, getMyAdminStatus, listAllArticles } from "@/lib/articles.functions";

export const Route = createFileRoute("/_authenticated/admin/")({
  head: () => ({
    meta: [
      { title: "News CMS — MegaYield Farms" },
      { name: "description", content: "Manage MegaYield Farms news and update articles." },
      { property: "og:title", content: "News CMS — MegaYield Farms" },
      { property: "og:description", content: "Manage news and update articles." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminNewsList,
});

function AdminNewsList() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchStatus = useServerFn(getMyAdminStatus);
  const fetchArticles = useServerFn(listAllArticles);
  const removeArticle = useServerFn(deleteArticle);

  const status = useQuery({ queryKey: ["admin-status"], queryFn: () => fetchStatus() });
  const articles = useQuery({
    queryKey: ["admin-articles"],
    queryFn: () => fetchArticles(),
    enabled: status.data?.isAdmin === true,
  });

  const del = useMutation({
    mutationFn: (id: string) => removeArticle({ data: { id } }),
    onSuccess: () => {
      toast.success("Article deleted.");
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      queryClient.invalidateQueries({ queryKey: ["public-articles"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Could not delete article."),
  });

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (status.isLoading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (!status.data?.isAdmin) {
    return (
      <main className="grid min-h-screen place-items-center px-4 text-center">
        <div className="max-w-md">
          <h1 className="font-display text-3xl">No CMS access</h1>
          <p className="mt-3 text-muted-foreground">
            Your account is signed in but has not been granted publishing access. Ask a MegaYield
            Farms administrator to add you.
          </p>
          <button onClick={signOut} className="btn-outline mt-7">
            Sign out
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <p className="eyebrow text-[var(--color-gold)]">Content management</p>
            <h1 className="mt-1 font-display text-3xl">News &amp; Updates</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/news" className="btn-outline">
              <ArrowLeft className="h-4 w-4" /> View site
            </Link>
            <button onClick={signOut} className="btn-outline">
              Sign out
            </button>
            <Link to="/admin/$articleId" params={{ articleId: "new" }} className="btn-primary">
              <Plus className="h-4 w-4" /> New article
            </Link>
          </div>
        </div>
      </header>

      <section className="container-x py-10">
        {articles.isLoading ? (
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        ) : (articles.data?.length ?? 0) === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-14 text-center">
            <h2 className="font-display text-2xl">No articles yet</h2>
            <p className="mt-2 text-muted-foreground">
              Publish your first update and it will appear on the News page immediately.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="hidden px-6 py-4 md:table-cell">Category</th>
                  <th className="hidden px-6 py-4 sm:table-cell">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.data?.map((a) => (
                  <tr key={a.id} className="border-b border-border/60 last:border-0">
                    <td className="px-6 py-4 font-medium">{a.title}</td>
                    <td className="hidden px-6 py-4 text-muted-foreground md:table-cell">
                      {a.category}
                    </td>
                    <td className="hidden px-6 py-4 text-muted-foreground sm:table-cell">
                      {new Date(a.published_at).toLocaleDateString("en-ZA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          a.published
                            ? "bg-[var(--color-gold)]/15 text-[var(--color-gold)]"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {a.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to="/admin/$articleId"
                          params={{ articleId: a.id }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
                        >
                          <Pencil className="h-3.5 w-3.5" /> Edit
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${a.title}"? This cannot be undone.`)) {
                              del.mutate(a.id);
                            }
                          }}
                          className="inline-flex items-center gap-1.5 rounded-full border border-destructive/30 px-3 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
