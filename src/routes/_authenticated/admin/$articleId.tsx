import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ImageIcon, Loader2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getArticleById, saveArticle } from "@/lib/articles.functions";

export const Route = createFileRoute("/_authenticated/admin/$articleId")({
  head: () => ({
    meta: [
      { title: "Edit article — MegaYield Farms" },
      { name: "description", content: "Create or edit a MegaYield Farms news article." },
      { property: "og:title", content: "Edit article — MegaYield Farms" },
      { property: "og:description", content: "Create or edit a news article." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ArticleEditor,
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 160);
}

const CATEGORIES = ["Production", "Partnerships", "Sustainability", "Community", "Company"];

interface FormState {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  hero_image_url: string;
  published: boolean;
  published_at: string;
}

const EMPTY: FormState = {
  title: "",
  slug: "",
  category: "Production",
  excerpt: "",
  content: "",
  hero_image_url: "",
  published: false,
  published_at: new Date().toISOString().slice(0, 10),
};

function ArticleEditor() {
  const { articleId } = Route.useParams();
  const isNew = articleId === "new";
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchArticle = useServerFn(getArticleById);
  const persist = useServerFn(saveArticle);

  const [form, setForm] = useState<FormState>(EMPTY);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const existing = useQuery({
    queryKey: ["admin-article", articleId],
    queryFn: () => fetchArticle({ data: { id: articleId } }),
    enabled: !isNew,
  });

  useEffect(() => {
    const a = existing.data;
    if (!a) return;
    setSlugTouched(true);
    setForm({
      title: a.title,
      slug: a.slug,
      category: a.category,
      excerpt: a.excerpt ?? "",
      content: a.content ?? "",
      hero_image_url: a.hero_image_url ?? "",
      published: a.published,
      published_at: new Date(a.published_at).toISOString().slice(0, 10),
    });
  }, [existing.data]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleUpload(file: File) {
    if (file.size > 8 * 1024 * 1024) {
      toast.error("Image must be smaller than 8MB.");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage
        .from("news-images")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (error) throw error;
      update("hero_image_url", `/api/public/news-image/${path}`);
      toast.success("Image uploaded.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const result = await persist({
        data: {
          id: isNew ? undefined : articleId,
          title: form.title.trim(),
          slug: (form.slug || slugify(form.title)).trim(),
          category: form.category.trim(),
          excerpt: form.excerpt.trim(),
          content: form.content.trim(),
          hero_image_url: form.hero_image_url.trim() || null,
          published: form.published,
          published_at: new Date(`${form.published_at}T09:00:00`).toISOString(),
        },
      });
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      queryClient.invalidateQueries({ queryKey: ["admin-article", result.id] });
      queryClient.invalidateQueries({ queryKey: ["public-articles"] });
      toast.success(form.published ? "Article published." : "Draft saved.");
      navigate({ to: "/admin" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save the article.");
    } finally {
      setSaving(false);
    }
  }

  if (!isNew && existing.isLoading) {
    return (
      <main className="grid min-h-screen place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[var(--color-gold)]";

  return (
    <main className="min-h-screen bg-muted/30 pb-20">
      <header className="border-b border-border bg-background">
        <div className="container-x flex items-center justify-between gap-4 py-6">
          <div>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <h1 className="mt-2 font-display text-3xl">
              {isNew ? "New article" : "Edit article"}
            </h1>
          </div>
        </div>
      </header>

      <form onSubmit={handleSave} className="container-x grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5 rounded-3xl border border-border bg-card p-7">
          <div>
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              required
              maxLength={160}
              value={form.title}
              onChange={(e) => {
                update("title", e.target.value);
                if (!slugTouched) update("slug", slugify(e.target.value));
              }}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="slug" className="text-sm font-medium">
              URL slug
            </label>
            <input
              id="slug"
              required
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", slugify(e.target.value));
              }}
              className={inputClass}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">/news/{form.slug || "your-slug"}</p>
          </div>

          <div>
            <label htmlFor="excerpt" className="text-sm font-medium">
              Summary
            </label>
            <textarea
              id="excerpt"
              rows={3}
              maxLength={400}
              value={form.excerpt}
              onChange={(e) => update("excerpt", e.target.value)}
              className={inputClass}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Shown on the News listing cards and in search results.
            </p>
          </div>

          <div>
            <label htmlFor="content" className="text-sm font-medium">
              Article content
            </label>
            <textarea
              id="content"
              rows={18}
              maxLength={50000}
              value={form.content}
              onChange={(e) => update("content", e.target.value)}
              className={`${inputClass} font-mono text-[13px] leading-relaxed`}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Plain text. Leave a blank line between paragraphs; lines starting with "- " render as
              bullets.
            </p>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="space-y-4 rounded-3xl border border-border bg-card p-7">
            <div>
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <input
                id="category"
                list="category-options"
                required
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className={inputClass}
              />
              <datalist id="category-options">
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>

            <div>
              <label htmlFor="published_at" className="text-sm font-medium">
                Date
              </label>
              <input
                id="published_at"
                type="date"
                required
                value={form.published_at}
                onChange={(e) => update("published_at", e.target.value)}
                className={inputClass}
              />
            </div>

            <label className="flex items-center gap-3 rounded-xl border border-border px-4 py-3">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => update("published", e.target.checked)}
                className="h-4 w-4"
              />
              <span className="text-sm font-medium">Published on the website</span>
            </label>
          </div>

          <div className="space-y-4 rounded-3xl border border-border bg-card p-7">
            <p className="text-sm font-medium">Hero image</p>
            <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border border-border bg-muted">
              {form.hero_image_url ? (
                <img
                  src={form.hero_image_url}
                  alt="Hero preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden />
              )}
            </div>
            <label className="btn-outline w-full cursor-pointer justify-center">
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              Upload image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload(file);
                  e.target.value = "";
                }}
              />
            </label>
            <div>
              <label htmlFor="hero" className="text-xs font-medium text-muted-foreground">
                Or paste an image URL
              </label>
              <input
                id="hero"
                value={form.hero_image_url}
                onChange={(e) => update("hero_image_url", e.target.value)}
                placeholder="https://…"
                className={inputClass}
              />
            </div>
          </div>

          <button type="submit" disabled={saving} className="btn-primary w-full justify-center">
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {form.published ? "Save & publish" : "Save draft"}
          </button>
        </aside>
      </form>
    </main>
  );
}
