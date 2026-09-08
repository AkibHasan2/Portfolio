import { Link } from "react-router-dom";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-sm font-medium text-verified">Projects</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-paper md:text-4xl">
        Selected work and real systems I built.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        A curated preview of payment middleware, dual-control platforms, and integration libraries.
        Sanitized public names only.
      </p>

      <ol className="mt-10 divide-y divide-rule border-y border-rule">
        {list.map((p, i) => {
          const title = p.Title || p.title;
          const summary = p.Summary || p.summary;
          const slug = p.Slug || p.slug;
          const category = p.Category || p.category;
          const num = String(i + 1).padStart(2, "0");

          return (
            <li key={p.Id || title}>
              <Link to={slug ? `/work/${slug}` : "#"} className="group block py-6 md:py-7">
                <div className="flex gap-4 md:gap-8">
                  <span className="font-mono text-sm font-semibold text-verified">{num}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-paper group-hover:text-verified md:text-2xl">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-muted">{category}</p>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{summary}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-verified">Read case study</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
