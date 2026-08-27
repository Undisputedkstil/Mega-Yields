interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional image rendered as a wide editorial band under the title. */
  image?: string;
  imageAlt?: string;
  caption?: string;
}

export function PageHeader({ eyebrow, title, intro, image, imageAlt, caption }: Props) {
  return (
    <section className="border-b border-border">
      <div className="container-x grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 display-lg">{title}</h1>
        </div>
        {intro && (
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="lede max-w-xl">{intro}</p>
          </div>
        )}
      </div>
      {image && (
        <figure className="border-t border-border">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="h-[38vh] w-full object-cover md:h-[52vh]"
            loading="eager"
          />
          {caption && (
            <figcaption className="container-x py-3 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      )}
    </section>
  );
}
