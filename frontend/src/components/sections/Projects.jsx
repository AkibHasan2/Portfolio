import { Link } from "react-router-dom";
import EntryHeading from "../ui/EntryHeading.jsx";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="03 — Work"
        title="Featured work"
        description="Architecture-led case studies. Sanitized names. No proprietary source."
      />

      <ol className="divide-y divide-rule border-y border-rule">
        {list.map((p, i) => {
          const title = p.Title || p.title;
          const summary = p.Summary || p.summary;
          const slug = p.Slug || p.slug;
          const category = p.Category || p.category;
          const highlights = p.Highlights || p.highlights || [];
          const num = String(i + 1).padStart(2, "0");

          return (
            <li key={p.Id || title}>
              <Link
                to={slug ? `/work/${slug}` : "#"}
                className="group grid gap-4 py-8 md:grid-cols-[4.5rem_1fr_auto] md:items-start md:gap-8 md:py-10"
              >
                <span className="font-mono text-xs tracking-[0.18em] text-muted">{num}</span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">{category}</p>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-paper transition-colors group-hover:text-verified md:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{summary}</p>
                  {highlights.length > 0 && (
                    <p className="mt-3 font-mono text-xs text-muted">{highlights.join("  ·  ")}</p>
                  )}
                </div>
                <span className="hidden text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-paper md:inline">
                  Case study →
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
