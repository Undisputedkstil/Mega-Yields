interface Props {
  content: string;
}

/** Renders plain-text article content: blank-line paragraphs and "- " bullet lists. */
export function ArticleBody({ content }: Props) {
  const blocks = content
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6">
              {lines.map((l, j) => (
                <li key={j}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
