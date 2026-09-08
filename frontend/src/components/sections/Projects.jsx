import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import EntryHeading from "../ui/EntryHeading.jsx";

export default function Projects({ projects = [] }) {
  const list = projects.filter((p) => p.Featured ?? p.featured);
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <EntryHeading
        code="03 — Work"
        title="Featured work"
        description="Architecture-led case studies. Sanitized names. No proprietary source."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((p, i) => {
          const title = p.Title || p.title;
          const summary = p.Summary || p.summary;
          const slug = p.Slug || p.slug;
          const category = p.Category || p.category;
          const highlights = p.Highlights || p.highlights || [];
          const num = String(i + 1).padStart(2, "0");

          return (
            <motion.article
              key={p.Id || title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={slug ? `/work/${slug}` : "#"}
                className="glass group flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-verified/40 hover:shadow-[0_24px_80px_-32px_rgb(129_140_248/0.55)] md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted">{num}</span>
                  <span className="rounded-full border border-rule px-2.5 py-1 text-[11px] text-muted">{category}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-paper md:text-[1.7rem]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{summary}</p>
                {highlights.length > 0 && (
                  <p className="mt-5 text-xs leading-relaxed text-muted">{highlights.join("  ·  ")}</p>
                )}
                <span className="mt-6 text-sm font-semibold text-verified">
                  Case study <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
