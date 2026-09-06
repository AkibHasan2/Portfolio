import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";
import Stamp from "../ui/Stamp.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <EntryHeading
        code="03 — Work"
        title="Featured projects"
        description="Sanitized public names for systems designed and shipped in banking environments."
      />

      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {list.map((p, i) => {
            const title = p.Title || p.title;
            const summary = p.Summary || p.summary;
            const stack = (p.TechStack || p.techStack || "").split(",").filter(Boolean);
            const slug = p.Slug || p.slug;
            const category = p.Category || p.category;
            const highlights = p.Highlights || p.highlights || [];
            const badge = p.Badge || (p.Featured ? "Featured" : "Project");

            return (
              <motion.article
                key={p.Id || title}
                className="panel-glow flex flex-col rounded-xl border border-rule bg-surface p-6"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Stamp tone={badge === "Library" ? "wire" : "verified"} animate={false}>
                    {badge}
                  </Stamp>
                  {category && <span className="text-xs font-medium text-muted">{category}</span>}
                </div>
                <h3 className="font-display text-lg font-bold tracking-tightish text-paper">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
                {highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-sm text-muted">
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-verified">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-rule bg-ink/40 px-2 py-1 text-xs font-medium text-muted"
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>
                {slug && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      to={`/demo/${slug}`}
                      className="inline-flex rounded-md bg-verified px-3 py-1.5 text-sm font-semibold text-on-accent"
                    >
                      See demo
                    </Link>
                    <Link to={`/work/${slug}`} className="inline-flex items-center text-sm font-semibold text-verified link-underline">
                      Case study →
                    </Link>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
